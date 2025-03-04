# Build Stage
FROM golang:latest AS builder
WORKDIR /app
COPY . .
# RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o mygo_app main.go
# RUN CGO_ENABLED=0 go build -o server main.go
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go

# Final Stage
FROM scratch
LABEL maintainer="anderson"
LABEL email="anderson.nascimentoafsn@gmail.com"
LABEL env="production"
COPY --from=builder /app/server /app/server
EXPOSE 8080
ENTRYPOINT ["./app/server"]
CMD ["8080"]
# CMD ["./app/server"]