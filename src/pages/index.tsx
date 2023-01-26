import { Flex } from '@chakra-ui/react'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'

function Home() {
  return (
    <Flex>
      <SideBarLayout />
      <Flex direction="column" mx="auto">
        <NavbarLayout />
        <SearchFilterLayout />
      </Flex>
    </Flex>
  )
}

export default Home
