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
import { getSession } from 'next-auth/react'
import { UserTagType } from 'types/tag'

function Videos() {
  const [searchInput, setSearchInput] = useState<string>('')
  const [debouncedInput, setDebouncedInput] = useState<string>('')
  const [tagsFilter, setTagsFilter] = useState<UserTagType[]>([])

  const { data: userTags } = useUserTagsQuery()
  const { data: userVideos } = useUserVideosQuery({
    variables: {
      input: {
        filterInput: tagsFilter.map((tag) => tag?.name),
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
          tagsFilter={tagsFilter}
          setTagsFilter={setTagsFilter}
        />
        <VideosLayout userVideos={userVideos} userTags={userTags} />
      </Flex>
    </Flex>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Videos
