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
import DeleteModal from './DeleteModal'

function VideoCardMenu({ videoInfo }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        {/* <MenuOptionGroup title="Tags" type="checkbox">
          {tagsData?.data.map((tag) => (
            <MenuItemOption value={tag.tag} key={tag.tag}>
              <Tag colorScheme={tag.color}>{tag.tag}</Tag>
            </MenuItemOption>
          ))}
        </MenuOptionGroup> */}
      </MenuList>
      <DeleteModal isOpen={isOpen} onClose={onClose} elementInfo={videoInfo} />
    </Menu>
  )
}

export default VideoCardMenu
