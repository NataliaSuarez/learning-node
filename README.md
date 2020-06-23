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
$ npm install -g nodemon

```

### Database(UPDATED)

En app.js configurar la base

```javascript
mongoose.connect(
  'mongodb://user:pass@localhost/app420',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log('Database connected! ;)'))
  .catch(err => console.log(err));
```

previamente levantar el servicio de mongo. en mi caso usé un docker-compose

```yml
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
      MONGO_INITDB_ROOT_PASSWORD: root
    volumes:
      - ~/.mongo:/var/lib/mongo

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: root
```

se levanta con `docker-compose up` o con `-d` desde el root ó donde esta el archivo docker-compose.yml

para usar la termina de mongo hay que entrar al contenedor y ejecutar mongo

`docker ps`: para ver los contenedores levantados

`docker exec -it 3kj bash` donde 3kj es el hash del contenedor de mongo

`mongo admin` para ingresar a la base de admin o `mongo` para entrar a mongo(loggearse como root root, o user y pass segun el docker-compose.yml)

una vez en mongo ir a la base admin

`use admin` y `db` para saber qué base estamos usando.

`db.auth("root", "root")` para loggearse en la base admin como root, desde la consola de mongo. con `db.getUser("root")` vemos el usuario, con los roles.

`use app420` o el nombre de la base que queremos usar con node

`db.createUser({ user:"liyos",pwd:"liyos",roles:["readWrite"]})` para crear un usuario para la base quequeremos utilizar.

ejemplo de los comandos que corrí

```bash
natalia@nat:~$ docker exec -it 350  bash
root@350a8bbc96f3:/# mongo
MongoDB shell version v4.2.7
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("429c23c0-a64a-48b0-ba62-b71f6a0f2de8") }
MongoDB server version: 4.2.7
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
> use admin
switched to db admin
> db
admin
> db.auth("root", "root")
1
> db
admin
> db.getUser("root")
{
	"_id" : "admin.root",
	"userId" : UUID("f42c84c8-d8cf-47ad-86a1-58f2df0130c2"),
	"user" : "root",
	"db" : "admin",
	"roles" : [
		{
			"role" : "root",
			"db" : "admin"
		}
	],
	"mechanisms" : [
		"SCRAM-SHA-1",
		"SCRAM-SHA-256"
	]
}
> use app420
switched to db app420
> db.createUser({ user:"liyos",pwd:"liyos",roles:["readWrite"]})
Successfully added user: { "user" : "liyos", "roles" : [ "readWrite" ] }
```

---

### About GraphQl

Run server and visit `localhost:4000/graphql`

You can make querys. Examples:

```json
query getPost($id: String!) {
  post(id: $id) {
    title,
    description,
    content
  }
}
query getPosts {
  posts {
    title,
    content,
  }
}
```
