
import ContactusForm from '@/components/forms/contactus';

import { Box, Container, HStack, Stack, Text, VStack, Image, Button, Input, useNumberInput, Divider, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';

const About = () => {
  return (
    <>
        <Container maxW='container.xl'>  
            <Heading mt={10}>About Us</Heading>
            <Text w={'50%'}>ghhh yguyg uyg yghg ygyu ygyg yg yg tygb yu ygy uyg yugyg yukgy fy gy gy g yg ujhgyu ggf hgf hg ygggf yghfy yggtgfvgvvh g g hgj </Text>

            <HStack w={'full'}  justifyContent={'space-between'} my={20} spacing={16}>
                <Box w={'50%'}>
                   <Image src="../Images/a1.png"/>
                </Box>
                <Box w={'50%'}>
                    <Text as={'b'} fontSize={24} >Provide fashionable and qualifed products</Text>
                    <Text  fontSize={20}>Already millions of people are very satisfied by this page
                     builder and the number is growing more and more. 
                    Technolog developing, requirements are increasing. Riode has brought.</Text>
                </Box>
            </HStack>
            <HStack w={'full'}  justifyContent={'space-between'} my={20} spacing={16}>
                <Box  w={'50%'}>
                    <Text as={'b'} fontSize={24} >Provide fashionable and qualifed products</Text>
                    <Text  fontSize={20}>Already millions of people are very satisfied by this page
                     builder and the number is growing more and more. 
                    Technolog developing, requirements are increasing. Riode has brought.</Text>
                </Box>
                <Box  w={'50%'}>
                   <Image src="../Images/a2.png"/>
                </Box>
            </HStack>
            <HStack w={'full'}  justifyContent={'space-between'} my={20} spacing={8}>
            
                <Box w={'50%'}>
                    <Text as={'b'} fontSize={22}  mt={5}>Get in touch with us</Text>
                    <Box mt={8}>
                      <Text as={'b'}  >Address</Text>
                      <Text>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</Text>
                    </Box>
                    <Box mt={5}>
                        <Text as={'b'}  >Email</Text>
                        <Text>nexton@example.com</Text>
                    </Box>
                    <Box mt={5}>
                        <Text as={'b'}>Phone</Text>
                        <Text>000-123-456-7890</Text>
                    </Box>
                    <Box  mt={5}>
                    <Text as={'b'}>Socials</Text>
                    <HStack>
                        <Image src="../Images/facebook-link.png"/>
                        <Image src="../Images/telegram-link.png"/>
                        <Image src="../Images/twitter-link.png"/>
                        <Image src="../Images/youtube-link.png"/>
                    </HStack>
                    </Box>
                </Box>
                <Box w={'50%'}>
                    <ContactusForm/>
                </Box>
            </HStack>
        </Container>
    </>
    
  );
};

export default About;