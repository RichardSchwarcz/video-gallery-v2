import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import onPathname from 'utils/onPathname'
import Container from '../components/Container'

function SearchFilterLayout() {
  const router = useRouter()
  const { pathname } = router
  const { search, paddingLeft } = onPathname(pathname)
  return (
    <Container>
      <Flex gap="4">
        <SearchBar search={search} paddingLeft={paddingLeft} />
        <Filter />
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
