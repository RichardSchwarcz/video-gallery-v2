import { useEffect, useRef, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Portal, useDisclosure } from '@chakra-ui/react'
import SideBar from 'components/SideBar'
import SideDrawer from 'components/SideDrawer'

function SideBarLayout() {
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

        {isSideBarOpen && (
          <SideBar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            sideBarContainer={sideBarContainer}
          />
        )}
        <SideDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Portal>
  )
}

export default SideBarLayout
