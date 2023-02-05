import { useEffect, useRef, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Portal, useDisclosure } from '@chakra-ui/react'
import { useUserTagsQuery } from 'generated/generated-graphql'
import SideBar from 'components/SideBar'
import SideDrawer from 'components/SideDrawer'

function SideBarLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1000)
  const sideBarContainer = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: userTags } = useUserTagsQuery({
    variables: { userId: '851c14c1-72a8-46e3-8141-71394e386a1a' },
  })

  const containers = {
    sideBar: sideBarContainer.current?.clientWidth, // width of sidebar calculated by ref
    main: 1000, // width of main container [px]
    margin: 16, // chakra ui margin [px]
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    if (
      containers.sideBar &&
      windowWidth <=
        containers.main + 2 * containers.sideBar + 2 * containers.margin
    ) {
      setIsSideBarOpen(false)
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, containers.main, containers.margin, containers.sideBar])

  return (
    <Portal>
      <Flex position="absolute" top="0" m="4">
        {/*  Show sidebar Button */}
        {!isSideBarOpen && (
          <IconButton
            aria-label="Menu"
            variant="ghost"
            icon={<HamburgerIcon />}
            onClick={() => {
              if (windowWidth >= 1452) {
                // change 1452 to calculated width of containers
                setIsSideBarOpen(!isSideBarOpen)
              } else {
                onOpen() // open side drawer
              }
            }}
          />
        )}

        {isSideBarOpen && (
          <SideBar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            sideBarContainer={sideBarContainer}
            userTags={userTags}
          />
        )}
        <SideDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Portal>
  )
}

export default SideBarLayout
