ARG NODE_VERSION=22.13.0

FROM node:${NODE_VERSION}

ENV PORT=3001
ENV MESSAGE="Hello Docker!"

RUN useradd -m mynode
USER mynode

WORKDIR /app

EXPOSE 3001

COPY . .

CMD ["node", "index.js"]