import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

function SearchBar() {
  return (
    <InputGroup mb="5" borderColor="gray.400" m="0">
      <InputLeftElement
        w="24"
        color="gray.500"
        pl="5"
        justifyContent="flex-start"
      >
        ./Videos/
      </InputLeftElement>
      <Input
        placeholder="Search"
        pl="24"
        borderRadius="16px"
        borderColor="gray.500"
      />
    </InputGroup>
  )
}

export default SearchBar
