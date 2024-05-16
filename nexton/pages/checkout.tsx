import AddressForm from '@/components/forms/address';
import ContactForm from '@/components/forms/contact';
import PaymentForm from '@/components/forms/payment';
import { Box, Container, HStack, Stack, Text, VStack, Image, Button, Input, useNumberInput, Divider, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { useState } from 'react';
const Checkout = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState('');
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step:1,
      defaultValue: 1,
      min: 1,
      max: 15,
      precision: 0,
    })
  
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  return (
    <>
        <Container maxW='container.xl'> 
            <Heading mt={10}>Checkout</Heading>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Checkout</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex align={'center'}
             justify={'center'}>
                <HStack spacing={10}>
                    <Box>
                        <ContactForm/>
                        <AddressForm/>
                        <PaymentForm/>
                    </Box>
                    <Box mb={'67%'}>
                    <VStack>
                        <Text as={'b'} fontSize={28} textAlign={'left'}>Order Summary</Text>
                        <Box>
                        <Divider mb={4}/>
                        <HStack  spacing={28}>
                        <HStack >
                            <Box>
                            <Image src="../Images/checkout.png" borderRadius={20}/>
                            </Box>
                            <Box>
                            <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                            <HStack>  <Image src="../Images/arrows.svg"/><Text fontSize={10}>One size</Text></HStack>
                            <HStack maxW='100px' h={8} px={1} borderRadius={20} bgColor={'#F8F8F8'}>
                                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...inc}>+</Button>
                                    <Input color={'#000'} border={'none'} size='xs' {...input} />
                                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...dec}>-</Button>
                            </HStack>
                            </Box>
                            </HStack>
                            <Box>
                            <VStack>
                                <Text as={'b'} fontSize={12} >$169.99</Text>
                                <Text fontSize={10} as={'u'}>$199.99</Text>
                            </VStack>
                            </Box>
                        </HStack>
                        </Box>
                        <Box>
                        <Divider my={4}/>
                        <HStack  spacing={28}>
                        <HStack >
                            <Box>
                            <Image src="../Images/checkout1.png" borderRadius={20}/>
                            </Box>
                            <Box>
                            <Text as={'b'} fontSize={12} >Black Automatic Watch</Text>
                            <HStack>  <Image src="../Images/arrows.svg"/><Text fontSize={10}>One size</Text></HStack>
                            <HStack maxW='100px' h={8} px={1} borderRadius={20} bgColor={'#F8F8F8'}>
                                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...inc}>+</Button>
                                    <Input color={'#000'} border={'none'} size='xs' {...input} />
                                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...dec}>-</Button>
                            </HStack>
                            </Box>
                            </HStack>
                            <Box>
                            <VStack>
                                <Text as={'b'} fontSize={12} >$169.99</Text>
                                <Text fontSize={10} as={'u'}>$199.99</Text>
                            </VStack>
                            </Box>
                        </HStack>
                        </Box>
                        <Box w={'full'}>
                        <Divider my={4}/>
                            <HStack  justifyContent={'space-between'} spacing={48}>
                                <Text  fontSize={12} >Subtotal</Text>
                                <Text  fontSize={12}>$169.99</Text>
                            </HStack>
                            <HStack  justifyContent={'space-between'} spacing={48}>
                                <Text fontSize={10} >Shipping estimate</Text>
                                <Text  fontSize={10} >$9</Text>
                            </HStack>
                            <HStack  justifyContent={'space-between'} spacing={48}>
                                <Text fontSize={12} >Tax estimate</Text>
                                <Text fontSize={12}>$19.99</Text>
                            </HStack>
                            <HStack  justifyContent={'space-between'} spacing={48} my={6}>
                                <Text as={'b'} fontSize={10} >Order total</Text>
                                <Text as={'b'} fontSize={10} >$199.99</Text>
                            </HStack>

                            <Button bg={'#111827'} w={'full'} borderRadius={20} fontSize={12} size='sm' color={'#fff'}>Confirm order</Button>

                        </Box>
                    </VStack>
                    </Box>
                </HStack>
            </Flex>
        </Container>
    </>
    
  );
};

export default Checkout;