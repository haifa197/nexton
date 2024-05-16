"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, Button, Card, CardHeader, Divider, CardBody, FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function PaymentForm() {

    return (
        <>
            <Flex my={10} w={'full'}>
                <Card maxW='lg'  borderColor={'#E5E7EB'}>
                    <CardHeader>
                        <HStack>
                            <Image src="../Images/pay.svg"/>
                            <Text>PAYMENT</Text>
                        </HStack>
                    </CardHeader>
                    <Divider   borderColor={'#E5E7EB'} />
                    <CardBody>
                        <Box
                        rounded={'lg'}
                        borderColor={'#E5E7EB'}>
                            <Stack spacing={4}>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <HStack>
                                    <Box w={'70%'}>
                                        <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" />
                                        </FormControl>
                                    </Box>
                                    <Box w={'30%'}>
                                        <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" />
                                        </FormControl>
                                    </Box>
                                </HStack>
                            </Stack>
                        </Box>
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}