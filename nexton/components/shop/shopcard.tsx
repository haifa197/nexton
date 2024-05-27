"use client";
import React, { useEffect, useState } from "react";
import { Image, Text, Box, HStack, Flex } from '@chakra-ui/react';
import Link from 'next/link';
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

export default function ShopCard() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [productCategories, setProductCategories] = useState<ProductWithCategory[]>([]);

  useEffect(() => {
    async function fetchData() {
      const productsResponse = await fetch('/api/products');
      const productsData: IProduct[] = await productsResponse.json();
      setProducts(productsData);
      
      const categoriesResponse = await fetch('/api/categories');
      const categoriesData: ICategory[] = await categoriesResponse.json();
      setCategories(categoriesData);

      const combinedData: ProductWithCategory[] = productsData.map(product => {
        const category = categoriesData.find(cat => cat.id === product.category);
        return { product, category: category! };
      });
      setProductCategories(combinedData);
    }

    fetchData();
  }, []);

  return (
    <Flex
      flexWrap={"wrap"}
      alignItems={{ base: "center", lg: "start" }}
      gap={3}
      flexDirection={{ base: "column", lg: "row" }}
      w={"full"}
      position={"relative"}
      my={10}>
      {productCategories.map(({ product, category }) => (
        <Box mx={1} key={product.id} as={Link} href={`/shop/${product.id}`}>
          <Image src={product.image} alt={product.title} borderRadius={15} w={'260px'} h={'310px'} />
          <HStack>
            <Box bg={'#fff'} borderRadius={'50%'} position={'absolute'} top={'0%'} p={1} m={1} ml={'230px'}>
              <Image src="./Images/shopingbag.svg" alt="shopbag" />
            </Box>
          </HStack>
          <HStack spacing={20} justifyContent={'space-between'}>
            <Text as={'b'} fontSize={12}>{product.title}</Text>
            <Text as={'b'} fontSize={12}>${product.price.toFixed(2)}</Text>
          </HStack>
          <HStack spacing={40} justifyContent={'space-between'}>
            <Text fontSize={10}>{category.name}</Text>
            {category.discount && <Text as={'del'} fontSize={10} justifyContent={'end'}>${(product.price * 1.2).toFixed(2)}</Text>}
          </HStack>
          <HStack>
            <Image src="./Images/star.png" alt="star rating" />
            <Text fontSize={10} pt={1}>4.5 (98)</Text>
          </HStack>
        </Box>
      ))}
    </Flex>
  );
}
