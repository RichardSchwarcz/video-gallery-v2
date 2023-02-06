import {
  ArrowLeftIcon,
  ChevronDownIcon,
  EditIcon,
  SearchIcon,
  SmallAddIcon,
} from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Portal,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react'
import { UserTagsQuery } from 'generated/generated-graphql'

type SideBarProps = {
  isSideBarOpen: boolean
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
  sideBarContainer: React.RefObject<HTMLDivElement>
  userTags: UserTagsQuery | undefined
}

function SideBar({
  isSideBarOpen,
  setIsSideBarOpen,
  sideBarContainer,
  userTags,
}: SideBarProps) {
  return (
    <Portal>
      <Flex position="absolute" top="0" m="4">
        <Box minW="200px" ref={sideBarContainer}>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap="2" justifyContent="flex-start" alignItems="center">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
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
              {/* <Input
                borderRadius="full"
                size="sm"
                placeholder="Create New Tag"
              /> */}
              <Flex gap="2">
                <Button
                  leftIcon={<SmallAddIcon />}
                  size="sm"
                  borderRadius="full"
                >
                  New Tag
                </Button>
                <Button leftIcon={<SearchIcon />} size="sm" borderRadius="full">
                  Search
                </Button>
              </Flex>

              {userTags && userTags?.userById && userTags?.userById?.tags
                ? userTags?.userById?.tags.map(
                    (tag) =>
                      tag && (
                        <Flex justifyContent="space-between">
                          <Tag
                            key={tag.id}
                            colorScheme={tag.color}
                            w="fit-content"
                            borderRadius="full"
                          >
                            <TagLabel>{tag.name}</TagLabel>
                            <TagCloseButton />
                          </Tag>
                          <Flex>
                            <IconButton
                              aria-label="EditTag"
                              icon={<EditIcon />}
                              size="sm"
                              variant="ghost"
                              borderRadius="full"
                            />
                            <IconButton
                              aria-label="change color"
                              icon={<ChevronDownIcon />}
                              size="sm"
                              variant="ghost"
                              borderRadius="full"
                            />
                          </Flex>
                        </Flex>
                      )
                  )
                : null}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Portal>
  )
}

export default SideBar
