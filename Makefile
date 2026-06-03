IMAGE := henga/portfolio
TAG   := latest

.PHONY: help dev build push ship

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

dev: ## Start the development server
	pnpm dev

build: ## Build the Docker image
	docker build -t $(IMAGE):$(TAG) .

push: ## Push the image to the registry
	docker push $(IMAGE):$(TAG)

ship: build push ## Build and push the image
