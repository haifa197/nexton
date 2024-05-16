"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, FormControl, Input, FormLabel, CardHeader, CardBody, Divider, Card } from '@chakra-ui/react';

export default function ContactForm() {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Flex mt={10} w={'full'}>
                <Card maxW='lg'  borderColor={'#E5E7EB'}>
                    <CardHeader>
                        <HStack>
                            <Image src="../Images/user.svg"/>
                            <Text>CONTACT INFO</Text>
                        </HStack>
                    </CardHeader>
                    <Divider   borderColor={'#E5E7EB'} />
                    <CardBody>
                        <Box
                        rounded={'lg'}
                        borderColor={'#E5E7EB'}>
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
                            </Stack>
                        </Box>
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}