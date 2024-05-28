"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, Box, Button, Stack, HStack, Link } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";


interface ICategory {
    id:number;
    name: string;
    status: boolean;
    startA:number;
    bgColor:string;

  }
  

export default function Category() {
  
    const [categories, setCategories] =  useState<ICategory[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const categoriesResponse = await fetch('/api/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      }
    
      fetchData();
    }, []);



  const sliderRef: any = useRef(null);

  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiperInit = (swiper: any) => {
    setSwiper(swiper);
  };
//   bgColor={'#E1A1FF'}
//   bgColor={'#FFCEA1'}
  return (
    <Box m={5}>
        <HStack>
        <Text as={'b'} fontSize={36}color={'#000'}>Start exploring.</Text>
        <Text as={'b'} fontSize={36}color={'#4B5563'}>Good things are waiting for you</Text>
        </HStack>
    
       <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper swiper-pagination-top"
          modules={[Pagination, Thumbs, Autoplay, Navigation]}
        >
            <>
            {categories.map(category => {
                // Check if the status is true for the category
                if (category.status === true) {
                return (
                    <SwiperSlide key={category.id}>
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
                            bgColor={category.bgColor}
                            border={'solid 1px'}
                            borderColor={'#000'}
                            as={Link}
                            href={"/shop"}
                        >
                            <HStack>
                                <Box p={'4%'} >
                                    <Text as={'b'} fontSize={'16px'}  color={'#4B5563'}>For {category.name}</Text>
                                    <Text fontSize={'10px'} color={'#4B5563'} >Starting at ${category.startA}</Text>
                                </Box>
                                <Text as={'b'} borderStart={'solid 2px'} color={'#4B5563'}  fontSize={'10px'} pl={2}>
                                    SHOP NOW 
                                </Text>
                                <Image alt="arrow-r"  src="./Images/arrow-r.svg"/>
                            </HStack>
                        </Box> 
                    </SwiperSlide>
                );
                }
                return null; // Return null if category status is false
            })}
          </>
        </Swiper>
    </Box>
  );
}
