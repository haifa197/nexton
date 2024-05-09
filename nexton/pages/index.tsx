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
    <Container maxW='container.lg' >  
      <Services/>
      <Category/>
      <Box my={5}>
        <HStack>
          <Text as={'b'} fontSize={36}color={'#000'}>Recommendations.</Text>
          <Text as={'b'} fontSize={36}color={'#4B5563'}>Best matching products for you</Text>
        </HStack>
        <Cards/>
      </Box>

    </Container>
    </>
    
  );
};

export default Home;