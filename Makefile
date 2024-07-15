ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
NODE_IMAGE=node:18-slim
UID=$(shell id -u)
GID=$(shell id -g)

deps_mesto:
	@echo "Installing mesto app dependencies..."
	@docker run --rm -v $(ROOT_DIR)/frontend/microfrontend/mesto_app:/app -u $(UID):$(GID) -w /app $(NODE_IMAGE) yarn install

deps_profile:
	@echo "Installing profile app dependencies..."
	@docker run --rm -v $(ROOT_DIR)/frontend/microfrontend/user_profile_app:/app -u $(UID):$(GID) -w /app $(NODE_IMAGE) yarn install

deps_auth:
	@echo "Installing auth app dependencies... $(UID)"
	@docker run --rm -v $(ROOT_DIR)/frontend/microfrontend/auth_app:/app --user $(UID):$(GID) -w /app $(NODE_IMAGE) yarn install

.PHONY: deps
deps: deps_mesto deps_profile deps_auth
	@echo "Installing dependencies..."
	@true

.PHONY: start
start: deps
	@echo "Starting frontend..."
	@docker compose up -d --build

stop:
	@echo "Stopping frontend..."
	@docker compose down