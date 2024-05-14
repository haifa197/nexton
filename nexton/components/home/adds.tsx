"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, Button } from '@chakra-ui/react';

export default function Adds() {

    return (
        <>
            <Flex>
                <Box w={'full'} h={'400px'} my={5}  bgColor={'#F5F5F5'} borderRadius={ 16}>
                  <HStack p={1} >
                    <Box px={'10%'} p={1} w={'50%'} >
                        <Text fontSize={16}>100% Original Products</Text>
                        <Text fontSize={34} as={'b'}>The All New Fashion Collection Items</Text>
                        <Text fontSize={12} py={2}>Starting from: $59.99</Text>
                        <Button bg={'#111827'} color={'#fff'}  borderRadius={25}>Shop now</Button>
                
                    </Box>
                    <Image src="./Images/bg-image.png" alt="product" position={'relative'} borderRadius={ 16} h={'400px'} w={'50%'}  />
                  </HStack>
                </Box>
            </Flex>
        </>
    )
}