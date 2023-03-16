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
  size: 'sm' | 'md'
  inputPlaceholder: string
}

type SizePropsValue = {
  ButtonSize: 'xs' | 'sm' | 'md'
  InputSize: 'sm' | 'md'
}

type SizePropsType = {
  sm: SizePropsValue
  md: SizePropsValue
}

const SizeProps: SizePropsType = {
  sm: {
    ButtonSize: 'xs',
    InputSize: 'sm',
  },
  md: {
    ButtonSize: 'sm',
    InputSize: 'md',
  },
}

function SearchBar({
  searchInput,
  handleSearchInput,
  size,
  inputPlaceholder,
}: SearchBarProps) {
  const handleClear = () => {
    void apolloClient.refetchQueries({
      include: ['UserVideos'],
    })
  }

  const sizeProps = SizeProps[size]

  return (
    <InputGroup size={sizeProps.InputSize}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.500" />
      </InputLeftElement>

      <Input
        placeholder={`Search ${inputPlaceholder}`}
        borderRadius="full"
        borderColor="gray.500"
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
      />

      <InputRightElement>
        <IconButton
          aria-label="Clear"
          icon={<CloseIcon fontSize="2xs" />}
          size={sizeProps.ButtonSize}
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
