import { Box, Container, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import ShopCard from '@/components/shop/shopcard';
import FilterShop from '@/components/shop/filter';
import { Pagination } from '@/components/product/pagination';
import { useState } from 'react';
const generateRandomItems = () => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        id: i,
        text: (Math.random() + 1).toString(36).substring(7)
      });
    }
    return data;
  }
const Shop = () => {
    

  const [items, setItems] = useState<{ id: number, text: string }[]>(generateRandomItems());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const addMoreItems = () => {
    setItems([...items, ...generateRandomItems()]);
  }
  return (
    <>
    <Container maxW='container.xl'>  
        <Flex mx={5}>
            <Stack w={'20%'} align={'start'}>
              <FilterShop/>
            </Stack>
            <Spacer/>
           <Stack w={'80%'}  pl={'10%'} alignItems={'end'} >
            <ShopCard/>
            <Pagination  currentPage={currentPage} onGoToPage={(newPageNumber) => setCurrentPage(newPageNumber)} pageSize={pageSize} totalCount={items.length} totalCountDescription={"items avaialable"}/>
           </Stack>
       
        </Flex>
     
    </Container>
    </>
    
  );
};

export default Shop;