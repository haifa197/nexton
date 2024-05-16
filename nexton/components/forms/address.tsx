"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, Button, Heading, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, useColorModeValue, Card, CardHeader, Divider, CardBody } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function AddressForm() {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Flex mt={10}>
                <Card maxW='lg'  borderColor={'#E5E7EB'}>
                    <CardHeader>
                        <HStack>
                            <Image src="../Images/address.svg"/>
                            <Text>SHIPPING ADDRESS</Text>
                        </HStack>
                    </CardHeader>
                    <Divider   borderColor={'#E5E7EB'} />
                    <CardBody>
                        <Box
                        rounded={'lg'}>
                        <Stack spacing={4}>
                            <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            </HStack>
                            <HStack>
                            <Box w={'70%'}>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box  w={'30%'}>
                                <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="text" />
                            </FormControl>
                            <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            </HStack>
                            <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
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