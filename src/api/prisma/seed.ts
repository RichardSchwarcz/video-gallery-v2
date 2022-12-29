/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Prisma, PrismaClient } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/naming-convention
const prisma = new PrismaClient()

const UsersData: Prisma.UserCreateInput[] = [
  {
    username: 'fagot fagotovic',
    password: 'someHashedShit',

    tags: {
      create: [
        {
          name: 'React',
          color: 'red',
        },
        {
          name: 'Prisma',
          color: 'blue',
        },
      ],
    },

    videos: {
      create: [
        {
          name: 'xxx',
          url: 'sss',
        },
        {
          name: 'sa',
          url: 'sss',
        },
      ],
    },

    playlists: {
      create: [
        {
          name: 'Tutorials',
        },
        {
          name: 'Tutorialss',
        },
      ],
    },
  },
]

export const main = async () => {
  try {
    console.log(`Start seeding ...`)
    for (const user of UsersData) {
      const userData = await prisma.user.create({
        data: user,
      })
      console.log(`Created user with id: ${userData.id}`)
    }

    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

void main()
