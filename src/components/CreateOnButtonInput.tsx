import { useState } from 'react'
import { ArrowLeftIcon, CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
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
  UseToastOptions,
} from '@chakra-ui/react'
import { useCreateVideoMutation } from 'generated/generated-graphql'

type CreateOnButtonInputProps = {
  buttonPlaceholder: string
  inputPlaceholder: string
}

interface toastBodyType extends UseToastOptions {
  title: string
  description: string
  status: 'success' | 'error' | 'warning' | 'info' | 'loading'
  duration: number
  isClosable: boolean
}

function CreateOnButtonInput({
  buttonPlaceholder,
  inputPlaceholder,
}: CreateOnButtonInputProps) {
  const [isSwitchButton, setSwitchButton] = useState(true)
  const [input, setInput] = useState('')
  const [createVideoMutation, { data, loading }] = useCreateVideoMutation()
  const toast = useToast()

  function toastBody(): toastBodyType {
    if (input === '') {
      return {
        title: 'Error',
        description: 'Empty input',
        status: 'error',
        duration: 3000,
        isClosable: true,
      }
    }
    if (data) {
      return {
        title: 'Video Added.',
        description: "We've added video to your gallery.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      }
    }
    return {
      title: 'Error',
      description: 'Daco plano',
      status: 'error',
      duration: 3000,
      isClosable: true,
    }
  }

  const handleCreateVideo = () => {
    try {
      void createVideoMutation({
        variables: {
          input: {
            videoUrl: input,
            userId: '851c14c1-72a8-46e3-8141-71394e386a1a',
          },
        },
      })
      setInput('') // reset input state
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const clearInput = () => {
    const inputElement = document.getElementById('input') as HTMLInputElement
    if (inputElement !== null) {
      inputElement.value = ''
    }
  }

  return (
    <>
      {isSwitchButton && (
        <Button
          onClick={() => setSwitchButton(!isSwitchButton)}
          borderRadius="16px"
          leftIcon={<SmallAddIcon />}
          variant="solid"
          colorScheme="purple"
        >
          {buttonPlaceholder}
        </Button>
      )}
      {!isSwitchButton && (
        <InputGroup>
          <InputLeftElement>
            <IconButton
              size="sm"
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
                size="sm"
                icon={<CheckIcon color="gray.100" />}
                isRound="true"
                colorScheme="green"
                onClick={(e) => {
                  e.preventDefault()
                  void handleCreateVideo()
                  clearInput()
                  toast(toastBody())
                }}
              />
            )}
          </InputRightElement>
          <FormControl isRequired>
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
          </FormControl>
        </InputGroup>
      )}
    </>
  )
}

export default CreateOnButtonInput
