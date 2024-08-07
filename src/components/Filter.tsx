import React, { useEffect, useRef, useState } from 'react'
import { Flex, Input, Tag } from '@chakra-ui/react'
import { useUserTagsQuery } from 'generated/generated-graphql'
import { UserTagType } from '../types/tag'

type FilterProps = {
  setTagsFilter: React.Dispatch<React.SetStateAction<UserTagType[]>>
}

function Filter({ setTagsFilter }: FilterProps) {
  const [isDropdownMenu, setShowDropdown] = useState<boolean>(false)
  const { data: userTags } = useUserTagsQuery()

  const inputRef = useRef(null)

  useEffect(() => {
    function closeDropdown(e: Event) {
      if (e.target !== inputRef.current) {
        setShowDropdown(false)
      }
    }

    document.body.addEventListener('click', closeDropdown)
    return () => {
      document.body.removeEventListener('click', closeDropdown)
    }
  }, [isDropdownMenu])

  const tags = userTags?.userById?.tags

  return (
    <Flex direction="column" w="244px" position="relative">
      <Input
        ref={inputRef}
        placeholder="Filter"
        borderTopRadius="20px"
        borderBottomRadius={isDropdownMenu ? 0 : '20px'}
        borderColor="gray.500"
        onClick={() => setShowDropdown(true)}
      />
      {isDropdownMenu && (
        <Flex
          direction="column"
          bg="rgba(255,255,255,0.98)"
          position="absolute"
          top="44px"
          p="2"
          zIndex="overlay"
          w="244px"
          border="1px"
          borderTopRadius={0}
          borderBottomRadius="16px"
          borderColor="gray.500"
          alignItems="flex-start"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {tags?.map((tag) => (
            <Flex
              key={tag?.id}
              p="2"
              w="100%"
              justifyContent="space-between"
              borderRadius="0.375rem"
              _hover={{
                background: 'gray.200',
              }}
              onClick={(e) => {
                e.stopPropagation()
                setTagsFilter((prev) => {
                  if (prev.includes(tag)) {
                    return prev.filter((t) => t !== tag)
                  }
                  return [...prev, tag]
                })
              }}
            >
              <Tag colorScheme={tag?.color.toLowerCase()}>{tag?.name}</Tag>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default Filter
