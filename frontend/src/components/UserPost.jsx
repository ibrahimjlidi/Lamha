import { Avatar,Image, Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {BsThreeDots} from 'react-icons/bs'
import Actions from "./Actions"
import { useState } from "react"




const UserPost = ({postImg, postTitle, likes, replies}) => {
    const [liked,setLiked] = useState(false)
    return (
        <Link to={"/ibrahim/post/1"}>
   
            <Flex gap={3} mb={4} py={5}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Avatar size="md" name="Ibrahim Jlidi" src="/logo-me.png" />
                    <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
                    <Box position={"relative"} w={"full"}>
                        <Avatar
                            size="xs"
                            name="Ib"
                            src="/logo-me.png"
                            position={"absolute"}
                            bottom={"0px"}
                            right={"-5px"}
                            padding={"2px"}
                        />
                        <Avatar
                            size="xs"
                            name="Ib"
                            src="/logo-me.png"
                            position={"absolute"}
                            top={"0px"}
                            left={"15px"}
                            padding={"2px"}
                        />
                        <Avatar
                            size="xs"
                            name="Ib"
                            src="/logo-me.png"
                            position={"absolute"}
                            bottom={"0px"}
                            left={"4px"}
                            padding={"2px"}
                        />
                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={"column"} gap={2}>
                    <Flex justifyContent={"space-between"} w={"full"}>
                        <Flex w={"full"} alignItems={"center"}>
                             <Text fontSize={"sm"} fontWeight={"bold"}>ibrahimjlidi</Text>
                            <Image src="virified.png" w={5} h={5} ml={1}/> 
                        </Flex>   
                        <Flex  gap={4} alignItems={"center"}>
                            <Text fontStyle={"sm"} color={"gray.light"}>1d </Text>
                            <BsThreeDots />

                        </Flex>
                   </Flex>
                    <Text fontSize={"sm"}>{postTitle}</Text>
                    {postImg && (    <Box 
                    borderRadius={6}
                    overflow={'hidden'}
                    border={" 1px solid"}
                        borderColor={"gray.light"}>
                            <Image src={postImg} w={"full"}/>

                    </Box>)}
                
                    <Flex gap={3} my={1}>
                        <Actions  liked={liked} setLiked={setLiked}/>
                    </Flex>
                    <Flex gap={3} alignItems={"center"}>
                        <Text color={'gray.light' }fontSize="sm">
                            {replies} replies
                        </Text>
                        <Box w={1}h={1} my={3} borderRadius={"full"} bg={"gray.light"} ></Box>
                        <Text color={'gray.light' }fontSize="sm">
                        {likes} likes
                        </Text>
                    </Flex>
                </Flex>



            </Flex>
      
        </Link>
    )
}

export default UserPost