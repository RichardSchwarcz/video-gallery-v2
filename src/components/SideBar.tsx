import { ArrowLeftIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Portal,
  Tag,
} from '@chakra-ui/react'

type SideBarProps = {
  isSideBarOpen: boolean
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
  sideBarContainer: React.RefObject<HTMLDivElement>
  userTags: any
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
        <Box minW="200px" ref={sideBarContainer} border="1px solid black">
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
            <Flex direction="column">
              {userTags?.userById?.tags.map((tag: any) => (
                <Tag key={tag.id} colorScheme={tag.color}>
                  {tag.name}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Portal>
  )
}

export default SideBar
