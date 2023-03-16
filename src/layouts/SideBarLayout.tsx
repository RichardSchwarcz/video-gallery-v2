import { useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import { useUserTagsQuery } from 'generated/generated-graphql'
import SideBar from 'components/SideBar'

function SideBarLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const { data: userTags } = useUserTagsQuery()

  return (
    <Flex position="absolute" top="0" m="4">
      {/*  Show sidebar Button */}
      {!isSideBarOpen && (
        <IconButton
          aria-label="Menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen)
          }}
        />
      )}

      {isSideBarOpen && (
        <SideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          userTags={userTags}
        />
      )}
    </Flex>
  )
}

export default SideBarLayout
