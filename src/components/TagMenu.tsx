import { useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  useToast,
} from '@chakra-ui/react'
import { useUpdateTagMutation } from 'generated/generated-graphql'
import { Toast } from 'types/chakra'
import { VideoCard as Video } from '../types/video'

type TagMenuProps = {
  tag: {
    id: string
    name: string
    color: string
    videos: Video[]
  }
}

type ToastBodyType = {
  VideoAdded: Toast
  EmptyInput: Toast
  InvalidURL: Toast
}

const ToastBody: ToastBodyType = {
  VideoAdded: {
    title: 'Video Added.',
    description: "We've added video to your gallery.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  },
  EmptyInput: {
    title: 'Error',
    description: 'Empty input',
    status: 'error',
    duration: 3000,
    isClosable: true,
  },
  InvalidURL: {
    title: 'Error',
    description: 'Invalid URL - only YouTube URLs are allowed',
    status: 'error',
    duration: 3000,
    isClosable: true,
  },
}

function TagMenu({ tag }: TagMenuProps) {
  const toast = useToast()
  const [updateTagMutation] = useUpdateTagMutation({
    refetchQueries: ['UserTags'],
  })
  const [rename, setRename] = useState('')
  console.log(rename)
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
    'gray',
  ]

  const updateTagColor = (color: string) => {
    void updateTagMutation({
      variables: {
        input: {
          id: tag?.id,
          color,
        },
      },
    })
  }

  const updateTagName = () => {
    // check if name is empty
    if (rename === '') {
      toast(ToastBody.EmptyInput)
    }

    if (rename !== '') {
      void updateTagMutation({
        variables: {
          input: {
            id: tag?.id,
            name: rename,
          },
        },
      })
    }

    setRename('')
  }

  const clearInput = () => {
    const inputElement = document.getElementById(
      'renameTags'
    ) as HTMLInputElement
    if (inputElement !== null) {
      inputElement.value = ''
    }
  }
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="changeColor"
        icon={<ChevronDownIcon />}
        variant="ghost"
        borderRadius="full"
        size="sm"
      >
        Actions
      </MenuButton>
      <MenuList w="10">
        <InputGroup px="2">
          <Input
            variant="flushed"
            placeholder="Rename Tag"
            id="renameTags"
            onChange={(e) => setRename(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="submit"
              size="xs"
              icon={<CheckIcon />}
              colorScheme="green"
              isRound="true"
              onClick={(e) => {
                e.preventDefault()
                updateTagName()
                clearInput()
              }}
            />
          </InputRightElement>
        </InputGroup>

        {colors.map((color) => (
          <MenuItem key={color} onClick={() => updateTagColor(color)}>
            <Tag colorScheme={color}>{color}</Tag>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default TagMenu
