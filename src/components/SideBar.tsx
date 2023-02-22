import { useState } from 'react'
import { ArrowLeftIcon, EditIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Portal,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import {
  useCreateTagMutation,
  UserTagsQuery,
} from 'generated/generated-graphql'
import { TagType } from 'types/tag'
import { ToastBody } from 'utils/toastBody'
import RemoveTagModal from './RemoveTagModal'
import SearchBar from './SearchBar'
import SwitchButtonInput from './SwitchButtonInput'
import TagMenu from './TagMenu'

type SideBarProps = {
  isSideBarOpen: boolean
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
  userTags: UserTagsQuery | undefined
}

function SideBar({ isSideBarOpen, setIsSideBarOpen, userTags }: SideBarProps) {
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [createTagMutation, { loading, error }] = useCreateTagMutation({
    refetchQueries: ['UserTags'],
    onCompleted() {
      toast(ToastBody.TagCreated)
    },
  })

  const handleCreateTag = async (name: string) => {
    if (name === '') {
      toast(ToastBody.EmptyInput)
    }

    if (name !== '') {
      await createTagMutation({
        variables: {
          input: {
            name,
          },
        },
      })
    }
  }

  const handleTagSelect = (tag: TagType) => {
    setSelectedTag((prevSelectedTag) => {
      if (prevSelectedTag === tag) {
        return null
      }
      return tag
    })
  }

  if (error) {
    toast(ToastBody.Error)
  }

  return (
    <Portal>
      <Flex
        position="fixed"
        top="0"
        h="100vh"
        overflow="scroll"
        overflowX="hidden"
        bg="rgba(255,255,255,0.85)"
        backdropFilter="blur(10px)"
        css={{
          '::-webkit-scrollbar': {
            width: '0.25em',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            borderRadius: '1000px',
          },
        }}
      >
        <Box minW="200px" m="4">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap="2" justifyContent="flex-start" alignItems="center">
              <Avatar
                name="Ryso Schwarcz"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Modest_M%C3%BAsorgski%2C_por_Ili%C3%A1_Repin.jpg/800px-Modest_M%C3%BAsorgski%2C_por_Ili%C3%A1_Repin.jpg"
                size="sm"
              />
              <Heading size="md">{userTags?.userById?.username}</Heading>
            </Flex>
            <IconButton
              aria-label="CloseMenu"
              icon={<ArrowLeftIcon />}
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
              size="sm"
              variant="ghost"
              ml="2"
            />
          </Flex>
          <Divider my={2} />
          <Flex direction="column">
            <p>Settings</p>
            <p>Trash</p>
            <Heading size="sm">Tags</Heading>
            <Divider my={2} />
            <Flex direction="column" gap="2">
              <SwitchButtonInput
                buttonPlaceholder="New Tag"
                buttonIcon={<SmallAddIcon />}
                inputPlaceholder="Create New Tag"
                loading={loading}
                size="sm"
                color="green"
                // eslint-disable-next-line react/jsx-no-bind
                handleCreate={handleCreateTag}
              />

              <SearchBar size="sm" searchType="Tags" />

              {userTags && userTags?.userById && userTags?.userById?.tags
                ? userTags?.userById?.tags.map(
                    (tag) =>
                      tag && (
                        <Flex justifyContent="space-between" key={tag.id}>
                          <Tag
                            colorScheme={tag.color}
                            w="fit-content"
                            borderRadius="full"
                          >
                            <TagLabel>{tag.name}</TagLabel>
                            <TagCloseButton
                              onClick={() => {
                                handleTagSelect(tag)
                                onOpen()
                              }}
                            />
                          </Tag>
                          <Flex>
                            <IconButton
                              aria-label="EditTag"
                              icon={<EditIcon />}
                              size="sm"
                              variant="ghost"
                              borderRadius="full"
                            />

                            <TagMenu tag={tag} />
                          </Flex>
                        </Flex>
                      )
                  )
                : null}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <RemoveTagModal isOpen={isOpen} onClose={onClose} tag={selectedTag} />
    </Portal>
  )
}

export default SideBar
