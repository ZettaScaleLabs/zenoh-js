<img src="https://raw.githubusercontent.com/eclipse-zenoh/zenoh/master/zenoh-dragon.png" height="150">


# Eclipse Zenoh JavaScript bindings (experimental)

:warning: **This software is still in alpha status and should _not_ be used in production. Breaking changes are likely to happen and the API is not yet stable.**
:warning: **The documentation is still scarce. Do not hesitate to contact us on Discord.**

This repository contains some very basic JS bindings for Zenoh, built on top of Zenoh-Pico on emscripten

## Requisites

- Emscripten
- Cmake

## How to build

```
git submodule update --init --recursive
git submodule update --recursive --remote
mkdir build
cd build
emcmake cmake ..
make build
```

It will generate : `client.wasm`, `client.worker.js` and `client.js` inside the `build.emscripten` folder.
Then the `index.html` file contains some examples of the APIs.