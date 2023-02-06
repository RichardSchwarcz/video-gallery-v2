import { useState } from 'react'
import { ArrowLeftIcon, CheckIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { extractYouTubeVideoInfo } from 'api/utils/getVideoInfo'

type SwitchButtonInputProps = {
  buttonPlaceholder: string
  buttonIcon: React.ReactElement
  inputPlaceholder: string
  loading: boolean
  size: 'sm' | 'md' | 'lg'
  color: string
  handleCreate: (input: string) => void
}

const clearInput = () => {
  const inputElement = document.getElementById('tagInput') as HTMLInputElement
  if (inputElement !== null) {
    inputElement.value = ''
  }
}

function SwitchButtonInput({
  buttonPlaceholder,
  buttonIcon,
  inputPlaceholder,
  loading,
  size,
  color,
  handleCreate,
}: SwitchButtonInputProps) {
  const [input, setInput] = useState('')
  const [isSwitchButton, setSwitchButton] = useState(true)

  return (
    <>
      {isSwitchButton && (
        <Button
          onClick={() => setSwitchButton(!isSwitchButton)}
          borderRadius="full" // 16px
          leftIcon={buttonIcon}
          variant="solid"
          colorScheme={color}
          size={size}
        >
          {buttonPlaceholder}
        </Button>
      )}
      {!isSwitchButton && (
        <InputGroup size={size}>
          <InputLeftElement>
            <IconButton
              size="xs"
              icon={<ArrowLeftIcon color="gray.500" />}
              onClick={() => setSwitchButton(!isSwitchButton)}
              isRound="true"
              variant="ghost"
            />
          </InputLeftElement>
          <InputRightElement>
            {loading && <Spinner />}
            {!loading && (
              <IconButton
                size="xs"
                icon={<CheckIcon color="gray.100" />}
                isRound="true"
                colorScheme="green"
                onClick={(e) => {
                  e.preventDefault()
                  void handleCreate(input)
                  setInput('')
                  clearInput()
                }}
              />
            )}
          </InputRightElement>
          <FormControl isRequired>
            <Input
              onChange={(e) => {
                setInput(e.target.value)
              }}
              pl="8"
              borderRadius="full"
              borderColor="gray.500"
              variant="outline"
              placeholder={inputPlaceholder}
              id="tagInput"
              size={size}
            />
          </FormControl>
        </InputGroup>
      )}
    </>
  )
}

export default SwitchButtonInput
