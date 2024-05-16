
import RegisterFrom from '@/components/forms/register';
import { Box, Container, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react';

const Register = () => {
  return (
    <>
   
    <Container maxW='container.xl' >  
    <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Registration
            </Heading>
          </Stack>
          <RegisterFrom/>
        </Stack>
      </Flex>
   
    </Container>
    </>
    
  );
};

export default Register;