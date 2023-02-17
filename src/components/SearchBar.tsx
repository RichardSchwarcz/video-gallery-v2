import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import apolloClient from 'lib/apollo'

type SearchBarProps = {
  searchInput: string
  handleSearchInput: React.Dispatch<React.SetStateAction<string>>
  size?: 'sm' | 'md' | 'lg'
  searchType: string
}

function SearchBar({
  searchInput,
  handleSearchInput,
  size,
  searchType,
}: SearchBarProps) {
  const handleClear = () => {
    void apolloClient.refetchQueries({
      include: ['UserVideos'],
    })
  }

  return (
    <InputGroup size={size}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.500" />
      </InputLeftElement>

      <Input
        placeholder={`Search ${searchType}`}
        borderRadius="full"
        borderColor="gray.500"
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
      />

      <InputRightElement>
        <IconButton
          aria-label="Clear"
          icon={<CloseIcon fontSize="2xs" />}
          size="sm"
          onClick={() => {
            handleClear()
            handleSearchInput('')
          }}
          borderRadius="full"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
