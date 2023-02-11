import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
} from '@chakra-ui/react'
import { useDeleteTagMutation } from 'generated/generated-graphql'
import { DisclosureTypes } from 'types/chakra'
import { TagType } from 'types/tag'

type RemoveTagModalProps = DisclosureTypes & (TagType | null)

function RemoveTagModal({ isOpen, onClose, tag }: RemoveTagModalProps) {
  const [deleteTag] = useDeleteTagMutation({
    refetchQueries: ['UserTags', 'UserVideos'],
  })

  const handleRemoveVideo = () => {
    void deleteTag({
      variables: {
        input: {
          id: tag?.id,
        },
      },
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you want to delete this tag?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="2" justifyContent="center">
            <Tag colorScheme="green">{tag?.videos.length}</Tag>
            <Text>Videos contain this Tag</Text>
            <Tag colorScheme={tag?.color}>{tag?.name}</Tag>
          </Flex>
          <Flex mt="2" direction="column">
            <Text>
              Tag will be taken off from all videos that have it included.
            </Text>
            <Text>For now, you can&apos;t restore deleted tags ;(</Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            _hover={{ bg: 'red.400' }}
            onClick={(e) => {
              e.preventDefault()
              handleRemoveVideo()
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

export default RemoveTagModal
