## Getting started

```bash
# install dependencies
$ yarn

# OPTIONAL
# stop all running docker instances
$ docker stop $(docker ps -a -q)

# host docker images
$ docker-compose up -d

# deploy prisma schema
# $ npm install -g prisma
$ prisma deploy

# start dev environment
$ yarn start:dev
```

## Get Docker logs

```bash
# list all running docker processes and their <id>
$ docker ps
$ docker logs <id>
```

## Available endpoints

### Graphql API endpoint

* `http://localhost:4000`

```
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
```

### Prisma endpoints

* `http://localhost:4466`
* `http://localhost:4466/_admin`
* `http://localhost:4466/management`

### MongoDB

* `http://localhost:8081`

## Create a post

```gql
mutation {
  createPost (
    data: {
      published: true
      title: "My first post"
      content: "My content"
      author: { connect: { id: "xxxx"} }
    }
  ) {
    id
    createdAt
    updatedAt
    published
    title
    content
  }
}
```

This mutation will throw the following error:

```json
{
  "message": "You provided an ID that was not a valid MongoObjectId: xxxx",
  "locations": [
    {
      "line": 2,
      "column": 3
    }
  ],
  "path": [
    "createPost"
  ]

  ...
}
```

BUT: A document inside of the post collection will be created nevertheless!
