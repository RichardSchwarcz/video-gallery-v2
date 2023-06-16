import { Box, Flex, Tag } from '@chakra-ui/react'
import Filter from 'components/Filter'
import SearchBar from 'components/SearchBar'
import Container from '../components/Container'
import { UserTagType } from '../types/tag'

type SearchFilterLayoutProps = {
  handleSearchInput: React.Dispatch<React.SetStateAction<string>>
  searchInput: string
  tagsFilter: UserTagType[]
  setTagsFilter: React.Dispatch<React.SetStateAction<UserTagType[]>>
}

function SearchFilterLayout({
  handleSearchInput,
  searchInput,
  tagsFilter,
  setTagsFilter,
}: SearchFilterLayoutProps) {
  return (
    <Container>
      <Flex direction="column" gap="4">
        <Flex gap="2">
          {/* Search Bar */}
          <Box w="100%">
            <SearchBar
              searchInput={searchInput}
              handleSearchInput={handleSearchInput}
              inputPlaceholder="Videos"
              size="md"
            />
          </Box>

          <Box>
            <Filter setTagsFilter={setTagsFilter} />
          </Box>
        </Flex>

        {/* Tags Filter */}
        <Flex h="6" gap="2">
          {tagsFilter.length > 0 &&
            tagsFilter.map((tag) => {
              // check if tag is null
              if (!tag) {
                return null
              }
              return (
                <Tag key={tag.id} colorScheme={tag.color.toLowerCase()}>
                  {tag.name}
                </Tag>
              )
            })}
        </Flex>
      </Flex>
    </Container>
  )
}

export default SearchFilterLayout
