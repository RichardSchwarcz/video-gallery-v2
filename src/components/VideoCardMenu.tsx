import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tag,
  useDisclosure,
} from '@chakra-ui/react'
import {
  UserTagsQuery,
  UserVideosQuery,
  useUpdateVideoTagsMutation,
} from 'generated/generated-graphql'
import RemoveVideoModal from './RemoveVideoModal'

type VideoCardMenuProps = {
  video: UserVideosQuery['userVideos']['videos'][number] | undefined
  userTags: UserTagsQuery | undefined
}

function VideoCardMenu({ video, userTags }: VideoCardMenuProps) {
  const [updateVideoTagsMutation, { loading }] = useUpdateVideoTagsMutation({
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
              <Tag colorScheme={tag?.color}>{tag?.name}</Tag>
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>

      <RemoveVideoModal isOpen={isOpen} onClose={onClose} video={video} />
    </Menu>
  )
}

export default VideoCardMenu
