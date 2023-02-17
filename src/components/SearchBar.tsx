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
  handleSearchInput: React.Dispatch<React.SetStateAction<string>>
  size?: 'sm' | 'md' | 'lg'
  searchType: string
}

function SearchBar({ handleSearchInput, size, searchType }: SearchBarProps) {
  const clearInput = () => {
    const inputElement = document.getElementById('input') as HTMLInputElement
    if (inputElement !== null) {
      inputElement.value = ''
    }
  }

  const handleClear = () => {
    void apolloClient.refetchQueries({
      include: ['UserVideos'],
    })
    handleSearchInput('')
    clearInput()
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
        id="input"
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <InputRightElement>
        <IconButton
          aria-label="Clear"
          icon={<CloseIcon fontSize="2xs" />}
          size="sm"
          onClick={() => handleClear()}
          borderRadius="full"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
