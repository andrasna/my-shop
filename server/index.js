import Koa from 'koa'
import { buildSchema } from 'graphql'
import {graphqlHTTP}  from 'koa-graphql'
import Router from '@koa/router'

const app = new Koa();
const router = new Router()

const MySchema = buildSchema(`
  type Query {
    hello: String
  }
`)

router.all('/graphql', graphqlHTTP({
  schema: MySchema,
  graphiql: true,
}))

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000)