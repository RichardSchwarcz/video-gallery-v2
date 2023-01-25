import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

type SearchBarProps = {
  search: string
  paddingLeft: string
}

function SearchBar({ search, paddingLeft }: SearchBarProps) {
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
      />
    </InputGroup>
  )
}

export default SearchBar
