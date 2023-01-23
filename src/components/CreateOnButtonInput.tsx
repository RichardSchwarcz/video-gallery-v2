import { useState } from 'react'
import { ArrowLeftIcon, CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'

function CreateOnButtonInput() {
  const [switchButton, setSwitchButton] = useState(true)
  const [input, setInput] = useState('')

  function handleToggleClick() {
    setSwitchButton(!switchButton)
  }

  return (
    <>
      {switchButton && (
        <Button
          onClick={() => handleToggleClick()}
          borderRadius="16px"
          leftIcon={<SmallAddIcon />}
          variant="solid"
          colorScheme="purple"
        >
          Add New Video
        </Button>
      )}
      {!switchButton && (
        <InputGroup ml="5">
          <InputLeftElement>
            <IconButton
              size="sm"
              icon={<ArrowLeftIcon color="gray.500" />}
              onClick={() => handleToggleClick()}
              isRound="true"
              variant="ghost"
            />
          </InputLeftElement>
          <InputRightElement>
            <IconButton
              size="sm"
              icon={<CheckIcon color="gray.100" />}
              isRound="true"
              colorScheme="green"
            />
          </InputRightElement>
          <Input
            onChange={(e) => {
              setInput(e.target.value)
            }}
            pl="14"
            borderRadius="16px"
            bg="gray.50"
            borderColor="gray.100"
            variant="outline"
            placeholder="Enter video URL"
            id="input"
            boxShadow="lg"
          />
        </InputGroup>
      )}
    </>
  )
}

export default CreateOnButtonInput
