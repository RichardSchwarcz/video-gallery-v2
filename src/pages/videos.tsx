import { Flex } from '@chakra-ui/react'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'
import VideosLayout from 'layouts/VideosLayout'

function Videos() {
  return (
    <Flex>
      <SideBarLayout />
      <Flex direction="column" mx="auto">
        <NavbarLayout />
        <SearchFilterLayout />
        <VideosLayout />
      </Flex>
    </Flex>
  )
}

export default Videos
