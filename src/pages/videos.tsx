import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'
import VideosLayout from 'layouts/VideosLayout'

function Videos() {
  const [searchInput, setSearchInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInput(searchInput)
    }, 250)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchInput])

  return (
    <Flex>
      <SideBarLayout />
      <Flex direction="column" mx="auto">
        <NavbarLayout />
        <SearchFilterLayout setSearchInput={setSearchInput} />
        <VideosLayout debouncedInput={debouncedInput} />
      </Flex>
    </Flex>
  )
}

export default Videos
