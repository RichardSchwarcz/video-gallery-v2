import { Box, Flex } from '@chakra-ui/react'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import Container from '../components/Container'

type SearchFilterLayoutProps = {
  handleSearchInput: React.Dispatch<React.SetStateAction<string>>
  searchInput: string
}

function SearchFilterLayout({
  handleSearchInput,
  searchInput,
}: SearchFilterLayoutProps) {
  return (
    <Container>
      <Flex gap="2">
        <Box w="100%">
          <SearchBar
            searchInput={searchInput}
            handleSearchInput={handleSearchInput}
            searchType="Videos"
          />
        </Box>
        <Box>
          <Filter />
        </Box>
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
