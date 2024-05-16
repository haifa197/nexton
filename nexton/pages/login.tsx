import LoginFrom from '@/components/forms/login';
import { Box, Container, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react';

const Login = () => {
  return (
    <>
   
    <Container maxW='container.xl' >  
    <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Login
            </Heading>
          </Stack>
          <LoginFrom/>
        </Stack>
      </Flex>
   
    </Container>
    </>
    
  );
};

export default Login;