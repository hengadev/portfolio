<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";
</script>

<div class="container__small card grid" style="--gap: 2rem;">
	<div class="grid">
		<div class="grid" style="--gap:0.2rem;">
			<h3 class="title">Cluo</h3>
			<p>Investigative Case Management Ecosystem</p>
		</div>
		<div class="separator"></div>
	</div>
	<div class="flex content">
		<div class="grid" style="--gap: 2rem; text-wrap: nowrap;">
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">My role</p>
				<ul>
					<li>Full-Stack Developer</li>
					<li>System Designer</li>
					<li>DevOps Engineer</li>
				</ul>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Team</p>
				<ul>
					<li style="text-wrap: nowrap;">Gary HENRY</li>
				</ul>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Tools</p>
				<ul>
					<li>Go</li>
					<li>SvelteKit + Wails</li>
					<li>PostgreSQL + Redis</li>
					<li>AWS S3</li>
					<li>Ansible + Terraform</li>
				</ul>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Timeline and status</p>
				<p>2026 (Active)</p>
			</div>
		</div>
		<div class="grid" style="--gap: 2rem; height: 100%;">
			<div class="grid" style="--gap: 1rem;">
				<p class="content__title capitalize">Description</p>
				<p>
					A multi-surface case management ecosystem for private investigators — desktop app,
					mobile PWA, client portal, and Go API all sharing a single hexagonal backend with
					an AI transcription and reporting pipeline.
				</p>
			</div>
			<div class="grid" style="--gap: 1rem;">
				<p class="content__title capitalize">Overview</p>
				<p style="height: fit-content;">
					Built to replace manual investigation workflows. Field agents use a Wails + SvelteKit
					desktop app for case management, capture evidence on a mobile PWA, and deliver securely
					to clients through a dedicated portal — all driven by one Go API. The legal document
					chain (Estimate → Mandate → Contract → Invoice) is automated as a state machine with
					per-document PDF generation.
				</p>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Technical highlights</p>
				<ul style="list-style: disc; padding-left: 1.2rem;">
					<li><strong>4 apps, one backend:</strong> Go API, Wails desktop, mobile PWA, and client portal all share a single hexagonal backend with port interfaces</li>
					<li><strong>AI pipeline:</strong> transcribes field audio, extracts structured data (people, timelines, facts), and pre-fills the report editor</li>
					<li><strong>Legal chain automation:</strong> Estimate → Mandate → Contract → Invoice modeled as a state machine with per-document PDF generation and delivery</li>
					<li><strong>Magic link auth:</strong> SHA-256 tokens with configurable expiration and investigator-controlled revocation — no client accounts needed</li>
					<li><strong>Infrastructure as code:</strong> Ansible + Terraform for reproducible, version-controlled deployments</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		margin-inline: auto;
		font-size: 1.1rem;
	}
	.card {
		margin-inline: auto;
		max-width: 50vw;
	}
	.title {
		text-transform: capitalize;
		color: hsl(var(--clr-dark-primary));
		font-size: 2.5rem;
	}
	.content__title {
		color: hsl(var(--clr-dark-secondary));
		font-size: 1.25rem;
		letter-spacing: 0;
		font-weight: 700;
		height: fit-content;
		display: block;
	}
	.content__title:first-letter {
		text-transform: capitalize;
	}
	ul li {
		line-height: 1.6;
	}
</style>
