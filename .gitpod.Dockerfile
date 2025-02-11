FROM oven/bun:1.2.2-debian

RUN apt-get update && \
    apt-get install curl git -y && \
    apt-get clean

ENTRYPOINT []