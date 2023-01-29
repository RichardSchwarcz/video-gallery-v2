import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

function DeleteModal({ isOpen, onClose, elementInfo }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you want to move this video to trash?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Link href={elementInfo?.url} isExternal>
            <Text as="b">{elementInfo?.title}</Text>
          </Link>
          <Flex>
            <Text>Author:</Text>
            <Link href={elementInfo?.author_url} isExternal ml="2">
              <Text>{elementInfo?.author_name}</Text>
            </Link>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" _hover={{ bg: 'red.400' }}>
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
