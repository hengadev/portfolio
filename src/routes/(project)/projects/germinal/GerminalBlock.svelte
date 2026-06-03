<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";
</script>

<div class="container__small card grid" style="--gap: 2rem;">
	<div class="grid">
		<div class="grid" style="--gap:0.2rem;">
			<h3 class="title">Germinal</h3>
			<p>Event & Talent Management Platform</p>
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
					<li>SvelteKit 2.x</li>
					<li>Svelte 5 (Runes)</li>
					<li>PostgreSQL + Drizzle</li>
					<li>AWS S3 + SES</li>
					<li>Docker</li>
					<li>pg-boss</li>
					<li>Sentry</li>
				</ul>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Timeline and status</p>
				<p>2025 (Active)</p>
			</div>
		</div>
		<div class="grid" style="--gap: 2rem; height: 100%;">
			<div class="grid" style="--gap: 1rem;">
				<p class="content__title capitalize">Description</p>
				<p>
					A sophisticated event and talent management platform with bilingual support,
					media galleries, automated workflows, and production-ready infrastructure.
				</p>
			</div>
			<div class="grid" style="--gap: 1rem;">
				<p class="content__title capitalize">Overview</p>
				<p style="height: fit-content;">
					Built from the ground up as a full-stack showcase demonstrating modern web development
					practices. The platform features a custom middleware system for cross-cutting concerns
					(rate limiting, CSRF protection, validation), an LRU caching layer with tag-based
					invalidation, and a PostgreSQL-backed job scheduler for asynchronous tasks.
				</p>
			</div>
			<div class="grid" style="--gap: 0.5rem;">
				<p class="content__title capitalize">Technical highlights</p>
				<ul style="list-style: disc; padding-left: 1.2rem;">
					<li><strong>Middleware architecture:</strong> Decorator pattern for composable request handling (validation, auth, rate limiting, CSRF)</li>
					<li><strong>Background jobs:</strong> pg-boss integration with cron-scheduled tasks for email queues, cleanup, and reminders</li>
					<li><strong>Caching strategy:</strong> LRU cache with TTL and tag-based invalidation for optimal performance</li>
					<li><strong>Type safety:</strong> End-to-end TypeScript with Zod schemas for runtime validation</li>
					<li><strong>Production deployment:</strong> Multi-stage Docker builds with security hardening (non-root user, Alpine base)</li>
					<li><strong>Observability:</strong> Sentry integration for error tracking and performance monitoring</li>
					<li><strong>Testing:</strong> Vitest for unit tests and Playwright for E2E coverage</li>
				</ul>
			</div>
			<button class="cta flex" style="--gap: 0.5rem;">
				<p>Repository</p>
				<ArrowUpRight />
			</button>
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
	.cta {
		align-items: center;
		padding: 0.5rem 1rem;
		border: 2px solid hsl(var(--clr-light-fournary));
		border-radius: 2rem;
		width: fit-content;
		height: fit-content;
	}
	ul li {
		line-height: 1.6;
	}
</style>
