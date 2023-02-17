import React, { useEffect, useRef, useState } from 'react'
import { Flex, Input, Tag, VStack } from '@chakra-ui/react'

function Filter() {
  const [isDropdownMenu, setShowDropdown] = useState(false)

  const inputRef = useRef(null)
  const menuRef = useRef(null)

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

  const tagsData = ['heej', 'shssh', 'eje']

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
        <VStack
          bg="rgba(255,255,255,0.95)"
          ref={menuRef}
          position="absolute"
          top="44px"
          zIndex="overlay"
          w="244px"
          border="1px"
          borderTopRadius={0}
          borderBottomRadius="16px"
          borderColor="gray.500"
          p="2"
          alignItems="flex-start"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {tagsData.map((element) => (
            <Flex
              key={element}
              w="100%"
              p="1"
              justifyContent="space-between"
              borderRadius="0.375rem"
              _hover={{
                background: 'gray.50',
              }}
              onClick={(e) => {
                e.stopPropagation()
                // setTags((tag) => [...tag, element])
              }}
            >
              <Tag>{element}</Tag>
            </Flex>
          ))}
        </VStack>
      )}
    </Flex>
  )
}

export default Filter
