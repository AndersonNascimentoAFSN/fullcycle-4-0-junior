ARG NODE_VERSION=22.13.0
ARG APP_URL=http://localhost:3001

# FROM node:${NODE_VERSION}
FROM node:${NODE_VERSION}-alpine
# Mais ferramentas disponível que alpine e tão leve quanto
# FROM node:${NODE_VERSION}-slim

# RUN apt-get update \
#  && apt-get install -y vim curl \
#   rm -rf /var/lib/apt/lists/*

# Diferente no alpine
RUN apk update && apk add --no-cache shadow vim curl

ENV PORT=3001
ENV MESSAGE="Hello Docker!"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN useradd -m mynode 
# USER mynode
# RUN chown -R mynode /app

# diferente no alpine
# RUN adduser -D mynode
# RUN chown -R mynode /app
# USER mynode

EXPOSE 3001

HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD [ "curl", "-f", "http://localhost:3001/health-check" ]

# VOLUME [ "/data" ]
# RUN chown -R mynode:mynode /data

CMD ["node", "index.js"]