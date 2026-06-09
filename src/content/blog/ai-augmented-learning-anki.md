---
title: Building an AI-Augmented Learning System with Anki
date: "2026-06-09"
description: How I connected Claude to my self-hosted Anki instance to turn teaching sessions into spaced repetition cards — with a human review gate in between.
tags: ["AI", "Learning", "Infrastructure", "Python"]
---

Spaced repetition works. Anki has years of research behind it. But the bottleneck has always been card creation — it takes time, discipline, and enough understanding of the material to phrase things well. AI can close that gap, but only if the loop is designed carefully.

## The infrastructure problem

I run a self-hosted Anki sync server on my homelab. The natural assumption is that it exposes some kind of API. It doesn't — it implements Anki's proprietary sync wire protocol, designed for the desktop client to push and pull collection state, not for programmatic card management.

The actual interface to an Anki collection is the collection library itself: a Python/Rust library that opens the `.anki2` SQLite file and exposes deck and note operations. So instead of talking to the sync server, I built a small FastAPI wrapper that talks directly to the collection file — the same one the sync server manages.

Two decisions were non-obvious here. First, going through the collection library rather than raw SQLite: modern Anki collections (schema 15+) store deck and notetype configuration as protobuf-encoded blobs inside the database. Querying those directly means parsing protobuf, which the library already handles correctly. Second, concurrency: the sync server and the API container both mount the same volume. SQLite's WAL mode allows concurrent reads, but writes need serialisation — a single `threading.Lock` held only for the duration of each collection open/close cycle is enough.

The API surface is minimal: list decks, create a deck, list cards, create a card. Auth via an `X-API-Key` header read from an environment variable.

## The skill

The API alone doesn't do much. The interesting part is the Claude skill that sits on top of it.

The skill extends a teaching workflow I already had: lessons structured around a workspace mission, zone of proximal development, incremental challenge. The Anki layer adds a review-and-create loop at the end of each lesson.

The key constraint: **no card is ever created without explicit approval**. After a lesson, the skill proposes candidates — numbered, labelled by type, ready to review. The user approves all, picks specific numbers, requests edits, or rejects. Only then does the API get called. This isn't just a UX choice. Cards you didn't consciously review don't embed the same way. The approval step is part of the learning.

Card type selection is driven by what you need to retrieve, not by subject. A few types that go beyond basic Q/A:

- **Cloze** — for syntax, vocabulary, anything where the blank forces active recall of the exact term
- **Why** — causal reasoning; the front asks for a mechanism, the back explains the consequence chain
- **Error** — debugging intuition; the front shows broken code or logic, the back explains the fix and why it broke

A single lesson often warrants several types. The skill picks based on the retrieval goal, not habit.

## How it fits together

The wrapper runs as a container in my homelab stack, behind Caddy with automatic TLS. Ansible handles deployment, Terraform manages the DNS record. The skill lives in `~/.claude/skills/` and is available in any Claude Code session.

The API key is exported from my shell profile, so any project I'm working in can reach the API. The global `CLAUDE.md` documents the endpoints, so Claude knows about Anki without the skill needing to be explicitly invoked — mentioning a card mid-session is enough.

What I wanted was a system where the friction of creating good flashcards approaches zero, without removing the human judgement that makes them worth creating. That's roughly what this is.
