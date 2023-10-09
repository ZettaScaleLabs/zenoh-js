FROM emscripten/emsdk:3.1.46

ENV DEBIAN_FRONTEND=noniteractive

# install build dependencies
RUN apt update && apt install git

# clone zenoh-js
RUN git clone https://github.com/ZettaScaleLabs/zenoh-js 


RUN cd zenoh-js && \
    git submodule update --init --recursive && \
    git submodule update --recursive --remote && \
    mkdir build && \
    cd build && \
    emcmake cmake .. && \
    make all

ENTRYPOINT ["/bin/bash"]