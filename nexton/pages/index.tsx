import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Slider from '../components/home/slider';
import Services from '@/components/home/services';
import Category from '@/components/home/category';
import Cards from '@/components/product/cards';
import Adds from '@/components/home/adds';
import { useEffect, useState } from 'react';

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

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [recommendations, setRecommendations] = useState<ProductWithCategory[]>([]);
  const [bestSellers, setBestSellers] = useState<ProductWithCategory[]>([]);
  

  useEffect(() => {
    async function fetchData() {
      const productsResponse = await fetch('/api/products');
      const productsData: IProduct[] = await productsResponse.json();
      setProducts(productsData);

      const categoriesResponse = await fetch('/api/categories');
      const categoriesData: ICategory[] = await categoriesResponse.json();
      setCategories(categoriesData);

      const randomProducts = getRandomProducts(productsData, categoriesData);
      setRecommendations(randomProducts);

      const bestSellersData = getBestSellers(productsData, categoriesData);
      setBestSellers(bestSellersData);
    }

    fetchData();
  }, []);
  // recommendations Function
  const getRandomProductFromCategory = (products: IProduct[], categoryId: number): IProduct | undefined => {
    const productsInCategory = products.filter(product => product.category === categoryId);
    if (productsInCategory.length > 0) {
      const randomIndex = Math.floor(Math.random() * productsInCategory.length);
      return productsInCategory[randomIndex];
    }
    return undefined;
  };

  const getRandomProducts = (products: IProduct[], categories: ICategory[]): ProductWithCategory[] => {
    const activeCategories = categories.filter(category => category.status);
    let randomProducts: ProductWithCategory[] = [];

    activeCategories.forEach(category => {
      const randomProduct = getRandomProductFromCategory(products, category.id);
      if (randomProduct) {
        randomProducts.push({ product: randomProduct, category });
      }
    });

    return randomProducts;
  };

  // Best Sellers Function
  const getBestSellers = (products: IProduct[], categories: ICategory[]): ProductWithCategory[] => {
    const activeCategories = categories.filter(category => category.status);
    const categoryMap: { [key: string]: IProduct[] } = {};

    // Group products by category only if category status is true
    products.forEach(product => {
      if (activeCategories.some(category => category.id === product.category)) {
        if (!categoryMap[product.category]) {
          categoryMap[product.category] = [];
        }
        categoryMap[product.category].push(product);
      }
    });

    let bestSellers: ProductWithCategory[] = [];

    // Find the product with the lowest quantity in each category
    activeCategories.forEach(category => {
      const productsInCategory = categoryMap[category.id];
      if (productsInCategory && productsInCategory.length > 0) {
        const lowestQuantityProduct = productsInCategory.reduce((prev, curr) => (prev.quantity < curr.quantity ? prev : curr));
        bestSellers.push({ product: lowestQuantityProduct, category });
      }
    });

    // Sort by quantity in ascending order and return up to 4 products
    return bestSellers.sort((a, b) => a.product.quantity - b.product.quantity).slice(0, 4);
  };

  return (
    <>
      <Slider />
      <Container maxW='container.xl'>
        <Services />
        <Category />
        <Box my={5}>
          <HStack>
            <Text as={'b'} fontSize={36} color={'#000'}>Recommendations.</Text>
            <Text as={'b'} fontSize={36} color={'#4B5563'} opacity={'80%'}>Best matching products for you</Text>
          </HStack>
          <Cards products={recommendations} />
        </Box>
        <Box my={5}>
          <HStack>
            <Text as={'b'} fontSize={36} color={'#000'}>Best Sellers.</Text>
            <Text as={'b'} fontSize={36} color={'#4B5563'} opacity={'80%'}>Best selling of the month</Text>
          </HStack>
          <Cards products={bestSellers} />
        </Box>
        <Adds />
      </Container>
    </>
  );
};

export default Home;
