---
title: Structuring a Go Modular Monolith
date: "2024-12-10"
description: How I organize Go services as modular monoliths — clear internal boundaries, shared infrastructure, and a path to extraction if needed.
tags: ["Go", "Architecture", "Backend"]
---

Most early-stage projects don't need microservices. What they need is a codebase that doesn't turn into a mess when it grows. A modular monolith hits that sweet spot: a single deployable binary with clear internal boundaries that make future extraction possible without rewriting everything.

## The Core Idea

The rule is simple: modules communicate through explicit interfaces, never through direct package imports that cross boundaries. A `billing` module can use a `users` module's interface, but it cannot reach into `users/internal/` and call functions directly. This enforces the same discipline as a service boundary without the operational overhead.

```
internal/
  billing/
    handler.go
    service.go
    repo.go
    module.go      ← wires the module together
  users/
    handler.go
    service.go
    repo.go
    module.go
  shared/
    db/
    middleware/
    config/
```

## Shared Infrastructure

The key insight is that shared infrastructure — the database pool, the config, the HTTP router — lives outside all modules. Each module gets what it needs injected at startup, not imported globally. This makes testing straightforward: you can give a module a test database without touching anything else.

## The `module.go` Pattern

Each module exposes a `New(deps) *Module` constructor and registers its own routes on the shared router. `main.go` becomes almost trivial — it initializes shared infrastructure, constructs each module, and starts the server.

This is the pattern I used in Leviosa and Cluo. When one of those projects eventually needs a specific module to scale independently, the boundary is already there — extracting it into a separate service is a matter of swapping the in-process interface call for an HTTP or gRPC call.
