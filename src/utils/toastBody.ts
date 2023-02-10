import { Toast } from 'types/chakra'

type ToastBodyType = {
  VideoAdded: Toast
  EmptyInput: Toast
  InvalidURL: Toast
  TagCreated: Toast
}

export const ToastBody: ToastBodyType = {
  VideoAdded: {
    title: 'Video Added.',
    description: "We've added video to your gallery.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  },
  TagCreated: {
    title: 'Tag Created.',
    description: "We've created a new tag for you.",
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
