IMAGE     := henga/portfolio
TAG       := latest
RESUME_EN := Henry_Gary_Resume.pdf
RESUME_FR := Henry_Gary_Resume_FR.pdf

.PHONY: help dev build push ship

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

dev: ## Start the development server
	pnpm dev

build: ## Build the Docker image
	cp static/$(RESUME_EN) /tmp/_portfolio_resume_en.pdf; \
	cp static/$(RESUME_FR) /tmp/_portfolio_resume_fr.pdf; \
	rm static/$(RESUME_EN) && cp /tmp/_portfolio_resume_en.pdf static/$(RESUME_EN); \
	rm static/$(RESUME_FR) && cp /tmp/_portfolio_resume_fr.pdf static/$(RESUME_FR); \
	docker build -t $(IMAGE):$(TAG) .; \
	STATUS=$$?; \
	git checkout static/$(RESUME_EN) static/$(RESUME_FR); \
	exit $$STATUS

push: ## Push the image to the registry
	docker push $(IMAGE):$(TAG)

ship: build push ## Build and push the image
