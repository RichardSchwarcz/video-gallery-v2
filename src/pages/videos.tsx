import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useUserVideosQuery } from 'generated/generated-graphql'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'
import VideosLayout from 'layouts/VideosLayout'
import apolloClient from 'lib/apollo'

function Videos() {
  const [searchInput, setSearchInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  const { data } = useUserVideosQuery({
    variables: {
      input: {
        inTrash: false,
        searchInput: debouncedInput,
      },
    },
    onCompleted: () => {
      void apolloClient.refetchQueries({
        include: ['UserVideos'],
      })
    },
  })

  const videos = data?.userVideos?.videos

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
        <SearchFilterLayout handleSearchInput={setSearchInput} />
        <VideosLayout videos={videos} />
      </Flex>
    </Flex>
  )
}

export default Videos
