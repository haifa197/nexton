
import { Box, Flex, Heading, Link, Text, Image, Container, HStack, InputGroup, InputLeftElement, Button, Input } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="#111827" color="white" py={4}>
    
      <Flex  maxW='container.xl' mx="auto" justify="space-between" align="center">
        <Box >
            <Heading fontSize={{ base: '14px', sm:'24px',md: '34px', lg: '34px' }} >
             NEXTON
            </Heading>
            <Text fontSize={{ base: '4px', sm:'8px', md: '14px', lg: '14px' }} paddingLeft={'44%'}>eCommerce</Text>
        </Box>
       <Box >
       <InputGroup size='md'>
       <InputLeftElement width='3rem'>
        <Image src='../Images/search.svg' alt='s'/>
      </InputLeftElement>
      <Input
        pr='4.5rem'
        borderRadius={'20px'}
        bg='#F8F8F8'
        border={'solid 1px'}
        borderColor={'#4B5563'}
        w={{ base: '120px', sm:'180px', md: '400px', lg: '400px' }}
        placeholder='Search in products...'
        fontSize={{ base: '10px', md: '14px', lg: '14px' }}
        color={'#4B5563'}
      />
     
    </InputGroup>
        </Box>
        <HStack>
          <Link><Image src='../Images/user-btn.svg' alt='user' boxSize={{ base:5, md:7}}/></Link>
          <Link><Image src='../Images/cart-btn.svg' alt='cart' boxSize={{ base:5, md:7 }} /></Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
