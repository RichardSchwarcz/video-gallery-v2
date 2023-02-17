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
  useUpdateVideoTagsMutation,
  useUserTagsQuery,
} from 'generated/generated-graphql'
import { VideoType as VideoTypeProps } from '../types/video'
import RemoveVideoModal from './RemoveVideoModal'

function VideoCardMenu({ video }: VideoTypeProps) {
  const { data: userTags } = useUserTagsQuery()
  const [updateVideoTagsMutation, { loading }] = useUpdateVideoTagsMutation({
    refetchQueries: ['UserVideos'],
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleUpdateVideoTags = (tagId: string) => {
    void updateVideoTagsMutation({
      variables: {
        input: {
          id: video.id,
          tagsId: tagId,
        },
      },
    })
  }

  return (
    <Menu closeOnSelect={false} isLazy>
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
              onClick={(e) => {
                e.preventDefault()
                handleUpdateVideoTags(tag?.id as string)
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
