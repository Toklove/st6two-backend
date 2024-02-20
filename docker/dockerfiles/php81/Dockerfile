FROM php:8.1-fpm
MAINTAINER TokLove <superz2586@gmail.com>

RUN apt-get update -yqq && \
    apt-get install -y apt-utils openssl libssl-dev && \
    pecl channel-update pecl.php.net && \
    apt-get install -y git && \
    curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/bin/composer && \
    composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

RUN apt-get update && apt-get install -y \
		libfreetype-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd

# Install PHP extensions deps
RUN docker-php-ext-install mysqli pdo pdo_mysql

#RUN pecl install redis \
#	&& docker-php-ext-enable redis

RUN pecl install redis \
	&& pecl install mongodb \
	&& docker-php-ext-enable redis mongodb

# Install pcntl
RUN docker-php-ext-install pcntl;

# Install opcache
RUN docker-php-ext-install opcache

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

CMD ["php-fpm"]

EXPOSE 9000
