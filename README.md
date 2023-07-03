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
make all
```

It will generate : `client.wasm`, `client.worker.js` and `client.js` inside the `build.emscripten` folder.
Then the `index.html` file contains some examples of the APIs.

## How to run

```
docker compose up

```

and open your browser to [localhost:8080](http://localhost:8080)

In the developer console you should see some log messages on the status of the connection to zenoh.
If you start a publisher to `demo/example/zenoh-rs-pub` you will see the data received by the JS being printed in the log.