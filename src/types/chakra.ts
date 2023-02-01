import { UseToastOptions } from '@chakra-ui/react'

export type DisclosureTypes = {
  isOpen: boolean
  onClose: () => void
}

export interface Toast extends UseToastOptions {
  title: string
  description: string
  status: 'success' | 'error' | 'warning' | 'info' | 'loading'
  duration: number
  isClosable: boolean
}
