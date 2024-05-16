"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack } from '@chakra-ui/react';

export default function Cards() {

    return (
        <>
            <Flex  flexWrap={"wrap"}
             justifyContent={{ base: "center",  md: "justify-content-between",xxl: "justify-content-between" }}
             alignItems={{ base: "center", lg: "start" }}
             gap={4}
             flexDirection={{ base: "column", lg: "row" }}
             w={"full"}
             position={"relative"}
             mt={5}
             >
                <Box>
                <Stack spacing={'10%'} direction='row'>
                    <Box>
                    <HStack bg={'#fff'} borderRadius={ 16} position={'absolute'} p={1} m={1} >
                      <Image src="../Images/discount.svg" alt="shopbag"/> 
                      <Text fontSize={10} textAlign={'center'} pr={2}>50% Discount</Text>
                    </HStack>
                    </Box>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'248px'} >
                      <Image src="../Images/shopingbag.svg" alt="shopbag"/>
                    </Box>
                </Stack>
                
                  <Image src="../Images/image.png" alt="product" borderRadius={15} w={'280px'} h={'300px'}/>
                  <HStack justifyContent={'space-between'} spacing={24}>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} spacing={44}>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'248px'} >
                    <Image src="../Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                  <Image src="../Images/image1.png" alt="product" borderRadius={15} w={'280px'} h={'300px'}/>
                  <HStack justifyContent={'space-between'} spacing={24}>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} spacing={44}>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'248px'} >
                    <Image src="../Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                  <Image src="../Images/image2.png" alt="product" borderRadius={15} w={'280px'} h={'300px'}/>
                  <HStack justifyContent={'space-between'} spacing={24}>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} spacing={44}>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'248px'} >
                    <Image src="../Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                  <Image src="../Images/image4.png" alt="product" borderRadius={15} w={'280px'} h={'300px'}/>
                  <HStack justifyContent={'space-between'} spacing={24}>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} spacing={44}>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>
                
            </Flex>
        </>
    )
}