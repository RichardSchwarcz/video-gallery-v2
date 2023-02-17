// /graphql/context.ts
import { PrismaClient } from '@prisma/client'
import prisma from '../../lib/prisma'

export type Context = {
  prisma: PrismaClient
}

type args = {
  req: Request
  res: Response
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function createContext({ req, res }: args): Promise<Context> {
  return {
    prisma,
  }
}
