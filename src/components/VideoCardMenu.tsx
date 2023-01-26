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
} from '@chakra-ui/react'

function VideoCardMenu() {
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
          icon={<DeleteIcon />}
          _hover={{ bg: 'red.200', boxShadow: 'md' }}
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
    </Menu>
  )
}

export default VideoCardMenu
