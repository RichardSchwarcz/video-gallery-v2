import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton aria-label="Menu" icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerContent opacity=".95">
          <DrawerHeader borderBottomWidth="1px">
            <Flex alignItems="center">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text ml="4">User Userovic</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <p>Settings</p>
            <p>Trash</p>
            <p>Tags</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer
