#!/usr/bin/env

.PHONY: help build clean cdn dev docs deploy dist install publish test

STATUS:="\x1b[96;01m\xE2\x80\xA2\x1b[0m"
ECHO = @echo "\033[0;34m$(1)\033[0m$(2)"

# HELP
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help:
	@echo
	@echo 🚀 CAPUI:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo USAGE:
	@echo See README.md
	@echo

.DEFAULT_GOAL := help

# TASKS

clean: ## Clean the project
	@echo $(STATUS) Cleaning...
	@rm -rf ./dist
	@rm -f ./public/scripts/docs.js

nuke: ## Clean the project
	@echo $(STATUS) Cleaning...
	@rm -rf ./dist
	@rm -rf ./node_modules
	@rm -f ./public/scripts/docs.js

deploy: ## Deploy the project
	@echo $(STATUS) Deploying...
	@git branch -D gh-pages
	@git checkout -b gh-pages
	@git merge main --no-commit --no-ff
	@make clean
	@make install
	@make docs
	@git add .
	@git commit -m 'deploy'
	@git push -f origin gh-pages
	@git checkout main

dev: ## Run the project in development mode
	@echo $(STATUS) Running in development mode...
	@${MAKE} -j 2 dev-docs dev-ts

dev-ts: ## Run the js in development mode
	@echo $(STATUS) Running js in development mode...
	@npx esbuild ./docs/index.ts --outfile=./public/scripts/docs.js --bundle --sourcemap --minify --watch

dev-docs: ## Run the docs in development mode
	@echo $(STATUS) Running docs in development mode...
	@npx http-server public --gzip

dist: ## Build the project for distribution
	@echo $(STATUS) Building...
	@rm -rf dist
	@mkdir dist
	@rsync -avm --include='*/' --include='*.js' --include='*.css' --exclude='*' ./public/components/ ./dist/
	@find ./dist -type f -name '*.vars.css' -exec cat {} + > ./dist/vars.css
	@zip -r dist/capui.zip dist

build: ## Build the project documentation
	@npx esbuild ./docs/index.ts --outfile=./public/scripts/docs.js --bundle --sourcemap --minify

install: ## Install the project
	@echo $(STATUS) Installing...
	@pnpm install

kill: ## Kill the project
	@echo $(STATUS) Killing...
	@lsof -i :8081 | grep LISTEN | awk '{print $2}' | xargs kill -9

publish: ## Publish the project to npm
	@echo $(STATUS) Publish package...
	@npm publish --access public

test: ## Run tests
	@echo $(STATUS) Testing...
	@npx playwright test
