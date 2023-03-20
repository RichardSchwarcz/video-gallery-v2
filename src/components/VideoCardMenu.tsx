import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import {
  UserTagsQuery,
  UserVideosQuery,
  useUpdateVideoTagsMutation,
  useUpdateVideoTrashStatusMutation,
} from 'generated/generated-graphql'
import RemoveModal from './RemoveModal'

type VideoCardMenuProps = {
  video: UserVideosQuery['userVideos']['videos'][number] | undefined
  userTags: UserTagsQuery | undefined
}

function VideoCardMenu({ video, userTags }: VideoCardMenuProps) {
  const [updateVideoTagsMutation, { loading }] = useUpdateVideoTagsMutation({
    refetchQueries: ['UserVideos'],
  })
  const [updateVideoTrashStatus] = useUpdateVideoTrashStatusMutation({
    refetchQueries: ['UserVideos'],
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  // check if video is undefined
  if (!video) {
    return null
  }

  const handleUpdateVideoTags = async (tagId: string | undefined) => {
    // check if tagId is undefined
    if (!tagId) {
      return
    }

    await updateVideoTagsMutation({
      variables: {
        input: {
          id: video.id,
          tagsId: tagId,
        },
      },
    })
  }

  const handleRemoveVideo = () => {
    void updateVideoTrashStatus({
      variables: {
        input: {
          id: video?.id,
          inTrash: true,
        },
      },
    })
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        icon={<ChevronDownIcon />}
        variant="ghost"
        size="xs"
      />

      <MenuList>
        <MenuItem
          onClick={onOpen}
          icon={<DeleteIcon />}
          _hover={{ bg: 'red.400', boxShadow: 'md' }}
        >
          Remove
        </MenuItem>
        <MenuDivider />

        <MenuOptionGroup title="Tags" type="checkbox">
          {userTags?.userById?.tags?.map((tag) => (
            <MenuItemOption
              value={tag?.name}
              key={tag?.id}
              onClick={async (e) => {
                e.preventDefault()
                await handleUpdateVideoTags(tag?.id)
              }}
              isDisabled={loading}
              // TODO state for selected tags
            >
              <Tag colorScheme={tag?.color.toLowerCase()}>{tag?.name}</Tag>
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>

      <RemoveModal
        isOpen={isOpen}
        onClose={onClose}
        handleRemove={handleRemoveVideo}
        header="Do you want to delete this Tag?"
      >
        <>
          <Link href={video?.videoUrl} isExternal>
            <Text as="b">{video?.title}</Text>
          </Link>
          <Flex>
            <Text>Author:</Text>
            <Link href={video?.authorUrl} isExternal ml="2">
              <Text>{video?.author}</Text>
            </Link>
          </Flex>
        </>
      </RemoveModal>
    </Menu>
  )
}

export default VideoCardMenu
