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

type CreateOnButtonInputProps = {
  buttonPlaceholder: string
  inputPlaceholder: string
}

function CreateOnButtonInput({
  buttonPlaceholder,
  inputPlaceholder,
}: CreateOnButtonInputProps) {
  const [isSwitchButton, setSwitchButton] = useState(true)
  const [input, setInput] = useState('')

  function handleToggleClick() {
    setSwitchButton(!isSwitchButton)
  }

  return (
    <>
      {isSwitchButton && (
        <Button
          onClick={() => handleToggleClick()}
          borderRadius="16px"
          leftIcon={<SmallAddIcon />}
          variant="solid"
          colorScheme="purple"
        >
          {buttonPlaceholder}
        </Button>
      )}
      {!isSwitchButton && (
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
            placeholder={inputPlaceholder}
            id="input"
            boxShadow="lg"
          />
        </InputGroup>
      )}
    </>
  )
}

export default CreateOnButtonInput
