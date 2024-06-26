import { Box, Card, CardBody, Image, Container, Divider, HStack, Heading, Stack, Text, Button, Input, useNumberInput, ButtonGroup, VStack } from '@chakra-ui/react';
import Cards from '@/components/product/cards';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState } from 'react';

const shopProductDetails = () => {
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
  
    <Container maxW='container.xl' >  
      <HStack my={10} spacing={20} position={'relative'}>
        <Box w={'50%'} h={'450px'}>
          <HStack spacing={5} justifyItems={'end'}>
            <Box h={'450px'} w={'35%'} justifyItems={'end'}>
              <Swiper
                onSwiper={setThumbsSwiper}
                direction={'vertical'}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper img-size mrg"
              >
                <SwiperSlide>
                  <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image  src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </Box>
          
            <Box h={'450px'}w={'65%'} justifyItems={'end'}>
            <Swiper
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2  img-size-big"
            >
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
            </Swiper>
            </Box>
          </HStack>
          <Divider mt={18}/>
        </Box>
        <Box w={'50%'}>
          <Card maxW='sm'>
            <CardBody>
              <Stack spacing='3'>
               
                  <HStack spacing={40}>
                      <HStack>
                        <Image src="../Images/star.png" alt="startreting"/>
                        <Text fontSize={10}>4.5 (98)</Text>
                        <Text fontSize={10} as={'u'}>vvvvvghh</Text>
                      </HStack>
                    <VStack>
                      <Heading size='md'> $56.99</Heading>
                      <Text  fontSize={10} as={'s'}>99.8</Text>
                    </VStack>
                  </HStack>
           
                <HStack>
                <Text >Size:</Text>
                <Text >S</Text>
              </HStack>
                <ButtonGroup variant='outline' spacing='4'>
                  <Button fontSize={12} size='sm' >S</Button>
                  <Button fontSize={12} size='sm' >M</Button>
                  <Button fontSize={12} size='sm' >L</Button>
                  <Button fontSize={12} size='sm' >XL</Button>
                  <Button fontSize={12} size='sm' >2XL</Button>
                </ButtonGroup>
                <HStack spacing={28}>
                  <HStack maxW='100px' h={8} px={1} borderRadius={20} bgColor={'#F8F8F8'}>
                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...inc}>+</Button>
                    <Input color={'#000'} border={'none'} size='xs' {...input} />
                    <Button borderRadius={20} bgColor={'#FFF'}  fontSize={12} size='xs'  {...dec}>-</Button>
                  </HStack>
                  <Button bg={'#111827'} borderRadius={20} fontSize={12} size='sm' color={'#fff'}><Image src='../Images/shopingbag.svg' alt='shopingbag' pl={1}/>Add to cart</Button>

              </HStack>
                <HStack spacing={60}>
                <Text >Total:</Text>
                <Text >$56.99</Text>
              </HStack>
              <HStack spacing={60}>
                <Text >Total:</Text>
                <Text >$56.99</Text>
              </HStack>
              </Stack>
              <Divider borderColor={'#E5E7EB'} my={5} />
              <HStack spacing={60}>
                <Text as={'b'}>Total:</Text>
                <Text as={'b'}>$56.99</Text>
              </HStack>
            </CardBody>
          </Card>
        </Box>
      </HStack>
      <Stack my={16} position={'relative'}>
        <Box>
          <Text as={'b'} fontSize={26} color={'#000'}>Recommended products</Text>
          <Text  fontSize={14} color={'#000'}>Recommended products</Text>
        </Box>
        <Box>
            <Text as={'b'} fontSize={26} color={'#000'}>Recommended products</Text>
            <Text  fontSize={14} color={'#000'}>Recommended: products</Text>
            <Text  fontSize={14} color={'#000'}>Recommended: products</Text>
        </Box>
        <Box>
          <Text as={'b'} fontSize={26} color={'#000'}>Recommended products</Text>
          <Text  fontSize={14} color={'#000'}>Recommended: 0</Text>
          <Text  fontSize={14} color={'#000'}>Recommended: -</Text>
          <Text  fontSize={14} color={'#000'}>Recommended: -</Text>
        </Box>
        <Box>
          <Text as={'b'} fontSize={26} color={'#000'}>Keywords</Text>
          <HStack>
            <HStack border={'1px solid'} borderRadius={16} p={1}>
               <Image src="../Images/stars.svg" alt="startreting"/>
              <Text fontSize={10} pr={1}>men's fashion</Text>
            </HStack>
            <HStack border={'1px solid'} borderRadius={16} p={1}>
               <Image src="../Images/stars.svg" alt="startreting"/>
              <Text fontSize={10} pr={1}>men's fashion</Text>
            </HStack>
            <HStack border={'1px solid'} borderRadius={16} p={1}>
               <Image src="../Images/stars.svg" alt="startreting"/>
              <Text fontSize={10} pr={1}>men's fashion</Text>
            </HStack>
            <HStack border={'1px solid'} borderRadius={16} p={1}>
               <Image src="../Images/stars.svg" alt="startreting"/>
              <Text fontSize={10} pr={1}>men's fashion</Text>
            </HStack>
          </HStack>
        </Box>
      
      </Stack>
      <Box mb={20}>
        <HStack>
          <Text as={'b'} fontSize={36} color={'#000'}>Recommended products</Text>
        </HStack>
        <Cards/>
      </Box>
    </Container>
    </>
    
  );
};

export default shopProductDetails;