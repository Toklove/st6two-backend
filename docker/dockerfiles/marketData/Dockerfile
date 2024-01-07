FROM golang:latest
MAINTAINER TokLove <superz2586@gmail.com>

ENV GOPROXY https://goproxy.cn,direct

COPY ./code $GOPATH/src/marketData

RUN ls


WORKDIR $GOPATH/src/marketData

RUN go mod tidy

RUN go build .

ENTRYPOINT ["./marketData"]
