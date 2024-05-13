import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Slider from '../components/home/slider';
import Services from '@/components/home/services';
import Category from '@/components/home/category';
import Cards from '@/components/product/cards';
const Home = () => {
  return (
    <>
    <Slider/>
    <Container maxW='container.xl' >  
      <Services/>
      <Category/>
      <Box my={5}>
        <HStack mb={5}>
          <Text as={'b'} fontSize={36}color={'#000'}>Recommendations.</Text>
          <Text as={'b'} fontSize={36}color={'#4B5563'} opacity={'80%'}>Best matching products for you</Text>
        </HStack>
        <Cards/>
      </Box>
      <Box my={5}>
        <HStack mb={5}>
          <Text as={'b'} fontSize={36}color={'#000'}>Best Sellers.</Text>
          <Text as={'b'} fontSize={36}color={'#4B5563'} opacity={'80%'}>Best selling of the month</Text>
        </HStack>
        <Cards/>
      </Box>

    </Container>
    </>
    
  );
};

export default Home;