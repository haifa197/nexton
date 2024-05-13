"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack } from '@chakra-ui/react';

export default function Cards() {

    return (
        <>
            <Flex>
                <Box w={'300px'} h={'438px'} mx={1}>
                <HStack bg={'#fff'} borderRadius={ 16} position={'absolute'} p={1} m={1} mr={'210px'}>
                    <Image src="./Images/discount.svg" alt="shopbag"/> 
                    <Text fontSize={10} textAlign={'center'} pr={2}>50% Discount</Text>
                </HStack>
                  <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} p={1} m={1} ml={'210px'}>
                    <Image src="./Images/shopingbag.svg" alt="shopbag"/>
                  </Box>
                  <Image src="./Images/image.png" alt="product" borderRadius={15} w={'280px'} h={'280px'}/>
                  <HStack>
                    
                    <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                    <Text as={'b'} fontSize={12}>$169.99</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={10} >Accessories</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>$199.99</Text>
                  </HStack>
                </Box>
            </Flex>
        </>
    )
}