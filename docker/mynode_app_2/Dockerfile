ARG NODE_VERSION=22.13.0
ARG APP_URL=http://localhost:3001

FROM node:${NODE_VERSION}

RUN apt-get update \
  && apt-get install -y vim curl \
  rm -rf /var/lib/apt/lists/*


ENV PORT=3001
ENV MESSAGE="Hello Docker!"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN useradd -m mynode 
USER mynode
RUN chown -R mynode /app

EXPOSE 3001

HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD [ "curl", "-f", "http://localhost:3001/health-check" ]

# VOLUME [ "/data" ]
# RUN chown -R mynode:mynode /data

CMD ["node", "index.js"]