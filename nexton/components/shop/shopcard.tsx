"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack } from '@chakra-ui/react';

export default function ShopCard() {

    return (
        <>
            <Flex
             flexWrap={"wrap"}
             alignItems={{ base: "center", lg: "start" }}
             gap={3}
             flexDirection={{ base: "column", lg: "row" }}
             w={"full"}
             position={"relative"}
             my={10}>
                <Box mx={1}>
                  <Image src="./Images/image1.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                  <Image src="./Images/image2.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                  <Image src="./Images/image4.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>
                <Box mx={1}>
                  <Image src="./Images/image1.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'51%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                  <Image src="./Images/image2.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'51%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>

                <Box mx={1}>
                  <Image src="./Images/image4.png" alt="product" borderRadius={15} w={'260px'} h={'310px'}/>
                  <HStack>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'51%'} p={1} m={1} ml={'230px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                  <HStack>
                    <Image src="./Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>
            </Flex>
        </>
    )
}