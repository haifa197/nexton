"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, Grid, GridItem, HStack } from '@chakra-ui/react';

export default function Services() {

    return (
        <>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}} w={'full'}  justifyContent={"center"}
                  alignContent={"center"} border={'solid 1px'} borderColor={'#E5E7EB'} 
        padding={4} borderRadius={'16px'} margin={5}>
            <GridItem w='100%' h='50px' px={4} borderEnd={{ base: 'none', sm: 'none', md: 'solid 1px' }} borderColor={'#E5E7EB'}>
               <HStack>
                    <Image src="./Images/free-d.svg" alt="free"/>
                    <Box>
                        <Text fontSize={16} as='b'>Free shipping</Text>
                        <Text fontSize={12}>On orders over $50.00</Text>
                    </Box>
               </HStack>
            </GridItem>
           
            <GridItem w='100%' h='50px' px={4} borderEnd={{ base: 'none', sm: 'none', md: 'solid 1px' }} borderColor={'#E5E7EB'}>
                <HStack>
                    <Image src="./Images/easy.svg" alt="easy"/>
                    <Box>
                        <Text fontSize={16} as='b'>Very easy to return</Text>
                        <Text fontSize={12}>Just phone number</Text>
                    </Box>
                </HStack>
            </GridItem>
         
            <GridItem w='100%' h='50px' px={4} borderEnd={{ base: 'none', sm: 'none', md: 'solid 1px' }} borderColor={'#E5E7EB'}>
                <HStack>
                    <Image src="./Images/world.svg" alt="world"/>
                    <Box>
                        <Text fontSize={16} as='b'>Worldwide delivery</Text>
                        <Text fontSize={12}>Fast delivery worldwide</Text>
                    </Box>
                </HStack>
            </GridItem>
            <GridItem w='100%' h='50px' px={4}>
                <HStack>
                    <Image src="./Images/refunds.svg" alt="refunds"/>
                    <Box>
                        <Text fontSize={16} as='b'>Refunds policy</Text>
                        <Text fontSize={12}>60 days return for any reason</Text>
                    </Box>
                </HStack>
            </GridItem>
        </Grid>
        </>
    )
}