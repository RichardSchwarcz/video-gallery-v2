import { Flex } from '@chakra-ui/react'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import Container from '../components/Container'

type SearchFilterLayoutProps = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

function SearchFilterLayout({ setSearchInput }: SearchFilterLayoutProps) {
  return (
    <Container>
      <Flex gap="4">
        <SearchBar setSearchInput={setSearchInput} searchType="Videos" />
        <Filter />
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
