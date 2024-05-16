"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, FormControl, Input, FormLabel, CardHeader, CardBody, Divider, Card, Textarea } from '@chakra-ui/react';

export default function ContactusForm() {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Flex mt={10} >
                <Box mx={4} w={'full'} >
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="text"  borderRadius={14}/>
                    </FormControl>
                    <FormControl my={2} id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="text"  borderRadius={14}/>
                    </FormControl>
                    <FormControl id="email" >
                        <FormLabel>Email address</FormLabel>
                      <Textarea borderRadius={16}></Textarea>
                    </FormControl>
                </Box>
            </Flex>
        </>
    )
}