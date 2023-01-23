import { Flex } from '@chakra-ui/react'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import Container from '../components/Container'

function SearchFilterLayout() {
  return (
    <Container>
      <Flex gap="4">
        <SearchBar />
        <Filter />
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
