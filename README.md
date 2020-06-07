# Simple project to learning node `App 420`

> My idea is learn without a horizon, just for curious

- Node v10.16.3 (npm v6.9.0)
- Express 4.16.4 (casi 420)

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ DEBUG=app420:* npm start

# Using nodemon 2.0.4

install global:
`npm install -g nodemon`

# Database

I used mongoose and mongo express with a docker-compose yml
```
# Use root/example as user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    ports:
        - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
        - ~/.mongo:/var/lib/mongo

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
```