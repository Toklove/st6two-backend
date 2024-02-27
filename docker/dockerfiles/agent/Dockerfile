#1、基于镜像node版本
FROM node:18.17.0
MAINTAINER TokLove <superz2586@gmail.com>

#RUN npm install -g yarn

# Install supervisor
RUN apt-get update &&\
    apt-get install -y supervisor &&\
    touch /var/run/supervisor.sock &&\
    chmod 777 /var/run/supervisor.sock &&\
    unlink /var/run/supervisor.sock

# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

#3、参数，node的环境为生产环境
ENV NODE_ENV=production
#4、任意ip
ENV HOST 0.0.0.0
#5、容器内创建目录/nuxt3
RUN mkdir -p /nuxt3
#6、复制当前的内容到容器内容部目录/nuxt3
COPY ./agent-code/ . /nuxt3/
#7、切换工作目录到/nuxt3
WORKDIR /nuxt3

RUN npm install -g npm@10.2.5

#8、安装依赖
RUN yarn

#9、构建项目
RUN yarn build

#9、暴露端口3000，默认端口
EXPOSE 3000
#12、start
CMD ["node","./.output/server/index.mjs"]
