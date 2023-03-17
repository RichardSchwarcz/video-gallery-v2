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
import { UserTagType } from '../types/tag'
import { ToastBody } from '../utils/toastBody'

type TagMenuProps = {
  tag: UserTagType | null
}

function TagMenu({ tag }: TagMenuProps) {
  const toast = useToast()
  const [updateTagMutation] = useUpdateTagMutation({
    refetchQueries: ['UserTags'],
  })
  const [rename, setRename] = useState('')
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

  const updateTagColor = async (color: string) => {
    // check if tag has id
    if (!tag?.id) {
      return
    }

    await updateTagMutation({
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

    // check if tag has id
    if (!tag?.id) {
      return
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
              borderRadius="full"
              onClick={(e) => {
                e.preventDefault()
                updateTagName()
                clearInput()
                setRename('')
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
