import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    AbsoluteCenter,
    Divider,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  
  export default function LoginFrom() {
    const [showPassword, setShowPassword] = useState(false);


    return (
      <Stack>
        <form >
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? 'text' : 'password'} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() =>
                  setShowPassword((showPassword) => !showPassword)
                }>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={10} pt={2}>
          <Button bg={'#111827'} w={'full'} borderRadius={20} fontSize={12} size='sm' color={'#fff'}>Continue</Button>
        </Stack>
        </form>
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='white' px='4'>
              Or
          </AbsoluteCenter>
        </Box>
        <Stack pt={6}>
          <Text align={'center'}>
          New user? <Link color={'blue.400'}> Create an account</Link>
          </Text>
        </Stack>
      </Stack>
    );
  }