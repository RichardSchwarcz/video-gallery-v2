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
} from '@chakra-ui/react'
import { extractYouTubeVideoInfo } from 'api/utils/getVideoInfo'
import { useCreateVideoMutation } from 'generated/generated-graphql'
import { Toast } from 'types/chakra'

type CreateOnButtonInputProps = {
  buttonPlaceholder: string
  inputPlaceholder: string
}

type ToastBodyType = {
  VideoAdded: Toast
  EmptyInput: Toast
  InvalidURL: Toast
}

const ToastBody: ToastBodyType = {
  VideoAdded: {
    title: 'Video Added.',
    description: "We've added video to your gallery.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  },
  EmptyInput: {
    title: 'Error',
    description: 'Empty input',
    status: 'error',
    duration: 3000,
    isClosable: true,
  },
  InvalidURL: {
    title: 'Error',
    description: 'Invalid URL - only YouTube URLs are allowed',
    status: 'error',
    duration: 3000,
    isClosable: true,
  },
}

function CreateOnButtonInput({
  buttonPlaceholder,
  inputPlaceholder,
}: CreateOnButtonInputProps) {
  const [isSwitchButton, setSwitchButton] = useState(true)
  const [input, setInput] = useState('')
  const toast = useToast()

  const [createVideoMutation, { loading }] = useCreateVideoMutation({
    refetchQueries: ['UserVideos'],
    onCompleted() {
      toast(ToastBody.VideoAdded)
    },
  })

  const handleCreateVideo = (urlInput: string) => {
    const videoURL = extractYouTubeVideoInfo(urlInput) // check if url is valid

    if (urlInput === '') {
      toast(ToastBody.EmptyInput)
    }

    if (!videoURL.isValid && urlInput !== '') {
      toast(ToastBody.InvalidURL)
    }

    if (videoURL.isValid) {
      void createVideoMutation({
        variables: {
          input: {
            videoUrl: urlInput,
            userId: '851c14c1-72a8-46e3-8141-71394e386a1a',
          },
        },
      })
    }

    setInput('') // reset input state
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
                  void handleCreateVideo(input)
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
