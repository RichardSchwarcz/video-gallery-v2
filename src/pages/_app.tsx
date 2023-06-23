import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from 'lib/apollo'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session}>
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  </SessionProvider>
)

export default MyApp
