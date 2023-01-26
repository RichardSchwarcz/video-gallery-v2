import { Flex } from '@chakra-ui/react'
import NavbarLayout from 'layouts/NavbarLayout'
import PlaylistsLayout from 'layouts/PlaylistsLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'

function Playlists() {
  return (
    <Flex>
      <SideBarLayout />
      <Flex direction="column" mx="auto">
        <NavbarLayout />
        <SearchFilterLayout />
        <PlaylistsLayout />
      </Flex>
    </Flex>
  )
}

export default Playlists
