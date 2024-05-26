"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack } from '@chakra-ui/react';
import Link from "next/link";


interface IProduct {
  id: number;
  price: number;
  title: string;
  category: number;
  description: string;
  status: boolean;
  quantity: number;
  type: string;
  image: string;
}

interface ICategory {
  id: number;
  name: string;
  status: boolean;
  discount: boolean;
  endR: number;
}

interface ProductWithCategory {
  product: IProduct;
  category: ICategory;
}

interface CardsProps {
  products: ProductWithCategory[];
}

const Cards = ({ products }: CardsProps) => {
 
    return (
        <>
            <Flex  flexWrap={"wrap"}
             justifyContent={{ base: "center",  md: "justify-content-between",xxl: "justify-content-between" }}
             alignItems={{ base: "center", lg: "start" }}
             gap={4}
             flexDirection={{ base: "column", lg: "row" }}
             w={"full"}
             position={"relative"}
             mt={5}
             >
                {products.map(({ product, category }) => (
                <Box ml={1}  key={product.id} as={Link} href={`/shop`}>
                <Stack spacing={'10%'} direction='row'>
                    <Box>
                    <HStack bg={'#fff'} borderRadius={ 16} position={'absolute'} p={1} m={1} >
                      <Image src="../Images/discount.svg" alt="shopbag"/> 
                      <Text fontSize={10} textAlign={'center'} pr={2}>{category.endR}% Discount</Text>
                    </HStack>
                    </Box>
                    <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'248px'} >
                      <Image src="../Images/shopingbag.svg" alt="shopbag"/>
                    </Box>
                </Stack>
                
                  <Image src={product.image} alt="product" borderRadius={15} w={'280px'} h={'300px'}/>
                  <HStack justifyContent={'space-between'} spacing={24}>
                    <Text as={'b'} fontSize={12} >{product.title}  </Text>
                    <Text as={'b'} fontSize={12}>${product.price}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'} spacing={44}>
                    <Text fontSize={10} >{category.name}</Text>
                    <Text as={'del'} fontSize={10} justifyContent={'end'}>${product.price}</Text>
                  </HStack>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting"/>
                    <Text fontSize={10} pt={1}>4.5 (98)</Text>
                  </HStack>
                </Box>
                ))}
                
            </Flex>
        </>
    )
};
export default Cards;