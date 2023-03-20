import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { DisclosureTypes } from 'types/chakra'

type RemoveModalProps = DisclosureTypes & {
  children: React.ReactNode
  handleRemove: () => void
  header: string
}

function RemoveModal({
  isOpen,
  onClose,
  children,
  handleRemove,
  header,
}: RemoveModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            _hover={{ bg: 'red.400' }}
            onClick={(e) => {
              e.preventDefault()
              handleRemove()
              onClose()
            }}
          >
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RemoveModal
