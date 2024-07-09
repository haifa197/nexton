"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, Button, Stack, HStack } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";

export default function Category() {
  

  const sliderRef: any = useRef(null);

  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiperInit = (swiper: any) => {
    setSwiper(swiper);
  };

  return (
    <Box m={5}>
        <HStack>
        <Text as={'b'} fontSize={{ base:20, sm:16, md:36 }}  color={'#000'}>Start exploring.</Text>
        <Text as={'b'} fontSize={{ base:20, sm:16, md:36 }}  color={'#4B5563'}>Good things are waiting for you</Text>
        </HStack>
       <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView:1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper swiper-pagination-top"
          modules={[Pagination, Thumbs, Autoplay, Navigation]}
        >
     
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#A1DDFF'}
                border={'solid 1px'}
                borderColor={'#000'}
                >
                <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>For Men's</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Starting at $24</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box> 
            </SwiperSlide>
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#E1A1FF'}
                border={'solid 1px'}
                borderColor={'#000'}
           
                >
                    <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>For Women's</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Starting at $19</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box>        
            </SwiperSlide>
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#FFCEA1'}
                border={'solid 1px'}
                borderColor={'#000'}
           
                >
             <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>Accessories</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Explore accessories</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box> 
            </SwiperSlide>

            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#A1DDFF'}
                border={'solid 1px'}
                borderColor={'#000'}
                >
                <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>For Men's</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Starting at $24</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box> 
            </SwiperSlide>
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#E1A1FF'}
                border={'solid 1px'}
                borderColor={'#000'}
           
                >
                    <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>For Women's</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Starting at $19</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box>        
            </SwiperSlide>
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                borderRadius={'16px'}
                my={10}
                py={4}
                px={7}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgColor={'#FFCEA1'}
                border={'solid 1px'}
                borderColor={'#000'}
           
                >
             <HStack>
                    <Box p={'4%'} >
                        <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>Accessories</Text>
                        <Text fontSize={'10px'} color={'#4B5563'} >Explore accessories</Text>
                    </Box>
                    <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                        SHOP NOW 
                    </Text>
                    <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                    </HStack>
                </Box> 
            </SwiperSlide>

           
        
        </Swiper>
    </Box>
  );
}
