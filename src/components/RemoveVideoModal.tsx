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
import { DisclosureTypes } from 'types/chakra'
import { VideoCard as Video } from '../types/video'

type RemoveVideoModalProps = DisclosureTypes & Video

function RemoveVideoModal({ isOpen, onClose, video }: RemoveVideoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you want to move this video to trash?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Link href={video?.videoUrl} isExternal>
            <Text as="b">{video?.title}</Text>
          </Link>
          <Flex>
            <Text>Author:</Text>
            <Link href={video?.authorUrl} isExternal ml="2">
              <Text>{video?.author}</Text>
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

export default RemoveVideoModal