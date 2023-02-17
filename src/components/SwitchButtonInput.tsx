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
} from '@chakra-ui/react'

type SwitchButtonInputProps = {
  buttonPlaceholder: string
  buttonIcon: React.ReactElement
  inputPlaceholder: string
  loading: boolean
  size: 'sm' | 'md'
  color: string
  handleCreate: (input: string) => void
}

type SizePropsValue = {
  ButtonSize: 'sm' | 'md'
  InputSize: 'sm' | 'md'
  IconButton: 'xs' | 'sm'
  InputLeftPadding: '8' | '14'
}

type SizePropsType = {
  sm: SizePropsValue
  md: SizePropsValue
}

const SizeProps: SizePropsType = {
  sm: {
    ButtonSize: 'sm',
    InputSize: 'sm',
    IconButton: 'xs',
    InputLeftPadding: '8',
  },
  md: {
    ButtonSize: 'md',
    InputSize: 'md',
    IconButton: 'sm',
    InputLeftPadding: '14',
  },
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
  const [isButton, setButton] = useState(true)

  const sizeProps = SizeProps[size]

  if (isButton) {
    return (
      <Button
        onClick={() => setButton(false)}
        borderRadius="full"
        leftIcon={buttonIcon}
        variant="solid"
        colorScheme={color}
        size={sizeProps.ButtonSize}
      >
        {buttonPlaceholder}
      </Button>
    )
  }

  // is input field
  return (
    <InputGroup size={sizeProps.InputSize}>
      <InputLeftElement>
        <IconButton
          aria-label="Collapse"
          size={sizeProps.IconButton}
          icon={<ArrowLeftIcon color="gray.500" />}
          onClick={() => setButton(true)}
          borderRadius="full"
          variant="ghost"
        />
      </InputLeftElement>

      <FormControl isRequired>
        <Input
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
          borderRadius="full"
          borderColor="gray.500"
          variant="outline"
          placeholder={inputPlaceholder}
          pl={sizeProps.InputLeftPadding}
          size={sizeProps.InputSize}
        />
      </FormControl>

      <InputRightElement>
        {loading && <Spinner />}
        {!loading && (
          <IconButton
            aria-label="Submit"
            size={sizeProps.IconButton}
            icon={<CheckIcon color="gray.100" />}
            borderRadius="full"
            colorScheme="green"
            onClick={(e) => {
              e.preventDefault()
              handleCreate(input)
              setInput('')
            }}
          />
        )}
      </InputRightElement>
    </InputGroup>
  )
}

export default SwitchButtonInput
