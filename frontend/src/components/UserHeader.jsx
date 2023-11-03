import { Box, VStack } from "@chakra-ui/layout"
import { Avatar, Text, Flex, Link, MenuButton, Menu, MenuList, Portal, MenuItem, Toast } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { useToast } from "@chakra-ui/toast";


const UserHeader = () => {
  const toast = useToast();
  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: 'Copied',
        status: 'success',
        description: "Profile link copied",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Ibrahim
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>
              ibrahim jlidi
            </Text>
            <Text fontSize={ {
                base: "xs",
               md:"sm",
               "lg":"md",
              }} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
              postes.net
            </Text>

          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Ibrahim"
            src="/logo-me.png"
            size={
              {
                base: "md",
               md:"xl",
              }
            }


          />
        </Box>

      </Flex>
      <Text>Co-Founder, Full Stack Developper and UI/XI designer . </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>      </Flex>
        <Flex>
          <Box className={"icon-container"}>
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className={"icon-container"}>
            <Menu>
              <MenuButton>

                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>

                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>

                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>

          <Text fontWeight={"bold"}>postes</Text>
        </Flex><Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} color={"gray.light"} pb="3" cursor={"pointer"}>

          <Text fontWeight={"bold"}>replies</Text>
        </Flex>

      </Flex>

    </VStack>
  )
}

export default UserHeader