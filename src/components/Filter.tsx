import React, { useEffect, useRef, useState } from 'react'
import { Flex, Input, Tag, VStack } from '@chakra-ui/react'

function Filter() {
  const [showDropdown, setShowDropdown] = useState(false)

  const inputRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    function closeDropdown(e) {
      if (e.target !== inputRef.current) {
        setShowDropdown(false)
      }
    }

    document.body.addEventListener('click', closeDropdown)
    return () => {
      document.body.removeEventListener('click', closeDropdown)
    }
  }, [showDropdown])

  const tagsData = ['heej', 'shssh', 'eje']

  return (
    <Flex direction="column" w="235px" position="relative">
      <Input
        ref={inputRef}
        placeholder="Filter"
        borderRadius="16px"
        borderColor="gray.500"
        onClick={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <VStack
          ref={menuRef}
          position="absolute"
          top="50px"
          bg="white"
          zIndex="overlay"
          w="235px"
          border="1px"
          borderRadius="16px"
          borderColor="gray.400"
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
