import { GetServerSidePropsContext } from 'next/types'
import { getServerSession, NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
}
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => getServerSession(ctx.req, ctx.res, AuthOptions)
