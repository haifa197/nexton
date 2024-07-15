"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, Button } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination, Thumbs, EffectCreative } from "swiper/modules";

export default function Silder() {
  

  const sliderRef: any = useRef(null);

  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiperInit = (swiper: any) => {
    setSwiper(swiper);
  };

  return (
    <>
   
        <Swiper
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          className="mySwiper wiper-pagination-bullet-active-long"
          slidesPerView={1}
          onInit={handleSwiperInit}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, EffectCreative, Thumbs, Autoplay, Navigation]}
        >
     
            <SwiperSlide>
                <Box
                w={'full'}
                h={'full'}
                top={0}
                left={0}
                right={0}
                bottom={0}
                >
                 <Box position={'absolute'} py={'15%'} alignContent={'start'}  pl={'15%'} textAlign={'left'} maxW={'container.xl'}>
                 <Text fontSize={'16px'} color={'#4B5563'}>Starting from: $49.99</Text>
                  <Text fontSize={'36px'} color={'#4B5563'} >Exclusive collection for everyone</Text>
                  <Button bg={'#111827'} color={'#fff'}>Explore now <Image src='./Images/search-w.png' alt='s' pl={1}/></Button>
                 </Box>
                  <Image alt="slider1"   w={'full'}  h={'full'}  bgPosition={'object-cover'} src="./Images/hero.png" className=""/>
                </Box>
                  
            </SwiperSlide>
            <SwiperSlide>
            <Box  
                w={'full'}
                h={'full'}
                top={0}
                left={0}
                right={0}
                bottom={0}>
                <Box position={'absolute'} py={'15%'} pl={'57%'} textAlign={'right'}>
                 <Text fontSize={'16px'} color={'#4B5563'}>Starting from: $49.99</Text>
                  <Text fontSize={'36px'} color={'#4B5563'} >Exclusive collection for everyone</Text>
                  <Button bg={'#111827'}  color={'#fff'}>Explore now <Image src='./Images/search-w.png' alt='s' pl={1}/></Button>
                 </Box>
                  <Image alt="slider1"  w={'full'}  h={'full'}  bgPosition={'object-cover'} src="./Images/hero1.png" className=""/>
                </Box>
            </SwiperSlide>
        </Swiper>
    </>
  );
}
