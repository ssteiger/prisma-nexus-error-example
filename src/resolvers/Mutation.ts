import { idArg, stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*'])

    console.log({ t })

    t.field('createPost', {
      ...t.prismaType.createPost,
      nullable: false,
      args: {
        ...t.prismaType.createPost.args
      },
      resolve(root, args, ctx) {
        // Custom implementation
        return ctx.prisma.createPost({ ...args.data }
        )
      }
    })
  },
})
