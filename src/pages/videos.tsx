import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import {
  useUserTagsQuery,
  useUserVideosQuery,
} from 'generated/generated-graphql'
import NavbarLayout from 'layouts/NavbarLayout'
import SearchFilterLayout from 'layouts/SearchFilterLayout'
import SideBarLayout from 'layouts/SideBarLayout'
import VideosLayout from 'layouts/VideosLayout'
import apolloClient from 'lib/apollo'

function Videos() {
  const [searchInput, setSearchInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  const { data: userTags } = useUserTagsQuery()
  const { data: userVideos } = useUserVideosQuery({
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
        <SearchFilterLayout
          handleSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <VideosLayout userVideos={userVideos} userTags={userTags} />
      </Flex>
    </Flex>
  )
}

export default Videos
