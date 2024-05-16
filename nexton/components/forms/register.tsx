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
    Divider,
    AbsoluteCenter,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function RegisterFrom() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Stack>
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
      <FormControl id="password" isRequired>
        <FormLabel>Password (Again)</FormLabel>
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
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
            Or
        </AbsoluteCenter>
      </Box>
      <Stack pt={3}>
        <Text align={'center'}>
        Already a member? <Link color={'blue.400'}> Login</Link>
        </Text>
      </Stack>
    </Stack>
    );
  }