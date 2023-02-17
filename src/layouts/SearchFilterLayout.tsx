import { Flex } from '@chakra-ui/react'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import Container from '../components/Container'

type SearchFilterLayoutProps = {
  handleSearchInput: React.Dispatch<React.SetStateAction<string>>
}

function SearchFilterLayout({ handleSearchInput }: SearchFilterLayoutProps) {
  return (
    <Container>
      <Flex gap="4">
        <SearchBar handleSearchInput={handleSearchInput} searchType="Videos" />
        <Filter />
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
