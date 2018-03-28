FROM elixir:1.6.1

LABEL maintainer="saklab"

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new-1.3.0.ez --force
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y -q nodejs
RUN apt-get install -y npm

RUN mkdir -p /opt/server
EXPOSE 4000