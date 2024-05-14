import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Slider from '../components/home/slider';
import Services from '@/components/home/services';
import Category from '@/components/home/category';
import Cards from '@/components/product/cards';
import Adds from '@/components/home/adds';
const Home = () => {
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