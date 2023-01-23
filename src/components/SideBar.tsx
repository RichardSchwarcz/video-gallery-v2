import { useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Heading,
  IconButton,
  Portal,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const sideBarContainer = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const containers = {
    sideBar: sideBarContainer.current?.clientWidth, // width of sidebar calculated by ref
    main: 1000, // width of main container
    margin: 16, // chakra ui margin
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    if (
      windowWidth <=
      containers.main + 2 * containers.sideBar + 2 * containers.margin
    ) {
      setIsSideBarOpen(false)
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  return (
    <Portal>
      <Flex position="absolute" top="0" m="4">
        {/*  Show sidebar Button */}
        {!isSideBarOpen && (
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={() => {
              if (windowWidth >= 1430) {
                setIsSideBarOpen(!isSideBarOpen)
              } else {
                onOpen()
              }
            }}
          />
        )}

        {/*  sidebar */}
        {isSideBarOpen && (
          <Box minW="200px" ref={sideBarContainer}>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex gap="2" justifyContent="flex-start" alignItems="center">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="sm"
                />
                <Heading size="md">riso.schwarcz</Heading>
              </Flex>
              <IconButton
                aria-label="CloseMenu"
                icon={<ArrowLeftIcon />}
                onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                size="sm"
                variant="ghost"
                ml="2"
              />
            </Flex>
            <Divider my={2} />
            <Flex direction="column">
              <p>Settings</p>
              <p>Trash</p>
              <p>Tags</p>
            </Flex>
          </Box>
        )}

        {/* drawer */}
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
      </Flex>
    </Portal>
  )
}

export default SideBar
