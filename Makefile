IMAGE := henga/portfolio
TAG   := latest

.PHONY: help dev build push ship

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

dev: ## Start the development server
	pnpm dev

build: ## Build the Docker image
	cp static/resume_en.pdf /tmp/_portfolio_resume_en.pdf; \
	cp static/resume_fr.pdf /tmp/_portfolio_resume_fr.pdf; \
	rm static/resume_en.pdf && cp /tmp/_portfolio_resume_en.pdf static/resume_en.pdf; \
	rm static/resume_fr.pdf && cp /tmp/_portfolio_resume_fr.pdf static/resume_fr.pdf; \
	docker build -t $(IMAGE):$(TAG) .; \
	STATUS=$$?; \
	git checkout static/resume_en.pdf static/resume_fr.pdf; \
	exit $$STATUS

push: ## Push the image to the registry
	docker push $(IMAGE):$(TAG)

ship: build push ## Build and push the image
