import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { schema } from './schema'

const chalk = require('chalk')

const server = new GraphQLServer({
  schema,
  context: { prisma },
})


const divider = chalk.gray('\n-----------------------------------')
const host = 'localhost'
const endpointPath = ''

server.start(() => {
  console.log(`  ${chalk.green('Generate Prisma Schema ✓')}
  ${chalk.green('Start GraphQLServer ✓')}
  ${chalk.green('Initialize GraphQL API ✓')}

    ${chalk.yellow('Access URLs:')}

    Mongo Express: ${chalk.magenta(`http://${host}:8081`)}

    Graphql API endpoint: ${chalk.magenta(
      `http://${host}:${process.env.PORT || 4000}${endpointPath}`
    )}

        Prisma endpoints: ${chalk.magenta(`http://${host}:4466`)}
                          ${chalk.magenta(`http://${host}:4466/_admin`)}
                          ${chalk.magenta(`http://${host}:4466/management`)}

    ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    ${divider}
  `)
})
