init: ## Init repository (including submodules)
	git submodule update --init --recursive
	git submodule update --recursive --remote
	mkdir build
.PHONY: init

host: ## Host demo
	sfz -p 8000 --coi build.emscripten
.PHONY: host