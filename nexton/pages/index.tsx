import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Slider from '../components/home/slider';
import Services from '@/components/home/services';
import Category from '@/components/home/category';
import Cards from '@/components/product/cards';
import Adds from '@/components/home/adds';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const Home = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const usersResponse = await fetch('/api/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const productsResponse = await fetch('/api/products');
      const productsData = await productsResponse.json();
      setProducts(productsData);
    }

    fetchData();
  }, []);
  return (
    <>
    <Slider/>
    <Container maxW='container.xl' >  
      <Services/>
      <Category/>
      <Box my={5}>
        <HStack>
          <Text as={'b'} fontSize={36} color={'#000'}>Recommendations.</Text>
          <Text as={'b'} fontSize={36} color={'#4B5563'} opacity={'80%'}>Best matching products for you</Text>
        </HStack>
        <Cards/>
      </Box>
      <Box my={5}>
        <HStack>
          <Text as={'b'} fontSize={36} color={'#000'}>Best Sellers.</Text>
          <Text as={'b'} fontSize={36} color={'#4B5563'} opacity={'80%'}>Best selling of the month</Text>
        </HStack>
        <Cards/>
      </Box>

      <Adds/>

    </Container>
    </>
    
  );
};

export default Home;