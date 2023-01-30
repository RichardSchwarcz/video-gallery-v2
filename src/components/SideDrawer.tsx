import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Text,
} from '@chakra-ui/react'
import { DisclosureTypes } from 'types/chakra'

function SideDrawer({ isOpen, onClose }: DisclosureTypes) {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerContent opacity=".95">
        <DrawerHeader borderBottomWidth="1px">
          <Flex alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text ml="4">riso.schwarcz</Text>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <p>Settings</p>
          <p>Trash</p>
          <p>Tags</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SideDrawer
