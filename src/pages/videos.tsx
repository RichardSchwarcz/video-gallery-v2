import { Flex } from '@chakra-ui/react'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import VideosLayout from 'layouts/VideosLayout'
import SideBar from 'components/SideBar'

function Videos() {
  return (
    <Flex>
      <SideBar />
      <Flex direction="column" mx="auto">
        <NavbarLayout />
        <SearchFilterLayout />
        <VideosLayout />
      </Flex>
    </Flex>
  )
}

export default Videos
