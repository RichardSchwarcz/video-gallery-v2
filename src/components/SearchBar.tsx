import { CloseIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import apolloClient from 'lib/apollo'

type SearchBarProps = {
  search: string
  paddingLeft: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ search, paddingLeft, setSearchInput }: SearchBarProps) {
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
    setSearchInput('')
    clearInput()
  }

  return (
    <InputGroup mb="5" borderColor="gray.400" m="0">
      <InputLeftElement
        w="24"
        color="gray.500"
        pl="5"
        justifyContent="flex-start"
      >
        {search}
      </InputLeftElement>
      <Input
        placeholder="Search"
        pl={paddingLeft}
        borderRadius="16px"
        borderColor="gray.500"
        id="input"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <InputRightElement>
        <IconButton
          aria-label="Clear"
          icon={<CloseIcon fontSize="2xs" />}
          size="sm"
          onClick={() => handleClear()}
          borderRadius="full"
        >
          Clear
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
