import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Card, CardBody, Image, Container, Divider, HStack, Heading, Stack, Text, Button, Input, useNumberInput, ButtonGroup, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ISizeDetail {
  name: string;
  quantity: number;
  description: string;
}

interface ISize {
  s: ISizeDetail[];
  m: ISizeDetail[];
  l: ISizeDetail[];
  xl: ISizeDetail[];
  '2xl': ISizeDetail[];
  '3xl': ISizeDetail[];
}

interface IProductImage {
  id: string;
  img: string;
}

interface IProductImages {
  image: IProductImage[];
  image1: IProductImage[];
  image2: IProductImage[];
  image3: IProductImage[];
  image4: IProductImage[];
  image5: IProductImage[];
}

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
  size: ISize[];
  productImages: IProductImages;
}

const ShopProductDetails = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const router = useRouter();
  const { shopdetailsid } = router.query;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 15,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    if (shopdetailsid) {
      fetch(`/api/products/${shopdetailsid}`)
        .then((response) => response.json())
        .then((data: IProduct) => setProduct(data))
        .catch((error) => console.error('Error fetching product details:', error));
    }
  }, [shopdetailsid]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container maxW='container.xl'>
      <HStack my={10} spacing={20} position={'relative'}>
        <Box w={'50%'} h={'450px'}>
          <HStack spacing={5} justifyItems={'end'}>
            <Box h={'450px'} w={'35%'} justifyItems={'end'}>
              <Swiper
                onSwiper={setThumbsSwiper}
                direction={'vertical'}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper img-size mrg"
              >
                {Object.values(product.productImages).flat().map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={img.img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box h={'450px'} w={'65%'} justifyItems={'end'}>
              <Swiper
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 img-size-big"
              >
                {Object.values(product.productImages).flat().map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={img.img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </HStack>
          <Divider mt={18} />
        </Box>

        <Box w={'50%'}>
          <Card maxW='sm'>
            <CardBody>
              <Stack spacing='3'>
                <HStack spacing={40}>
                  <HStack>
                    <Image src="../Images/star.png" alt="startreting" />
                    <Text fontSize={10}>4.5 (98)</Text>
                  </HStack>
                  <VStack>
                    <Heading size='md'>${product.price.toFixed(2)}</Heading>
                    {product.status && <Text fontSize={10} as={'s'}>${(product.price * 1.2).toFixed(2)}</Text>}
                  </VStack>
                </HStack>

                <HStack>
                  <Text>Size:</Text>
                  <Text>S</Text>
                </HStack>
                <ButtonGroup variant='outline' spacing='4'>
                  <Button fontSize={12} size='sm'>S</Button>
                  <Button fontSize={12} size='sm'>M</Button>
                  <Button fontSize={12} size='sm'>L</Button>
                  <Button fontSize={12} size='sm'>XL</Button>
                  <Button fontSize={12} size='sm'>2XL</Button>
                </ButtonGroup>
                <HStack spacing={28}>
                  <HStack maxW='100px' h={8} px={1} borderRadius={20} bgColor={'#F8F8F8'}>
                    <Button borderRadius={20} bgColor={'#FFF'} fontSize={12} size='xs' {...inc}>+</Button>
                    <Input color={'#000'} border={'none'} size='xs' {...input} />
                    <Button borderRadius={20} bgColor={'#FFF'} fontSize={12} size='xs' {...dec}>-</Button>
                  </HStack>
                  <Button bg={'#111827'} borderRadius={20} fontSize={12} size='sm' color={'#fff'}>
                    <Image src='../Images/shopingbag.svg' alt='shopingbag' pl={1} />
                    Add to cart
                  </Button>
                </HStack>
                <HStack spacing={60}>
                  <Text>Total:</Text>
                  <Text>${product.price.toFixed(2)}</Text>
                </HStack>
                <Divider borderColor={'#E5E7EB'} my={5} />
                <HStack spacing={60}>
                  <Text as={'b'}>Total:</Text>
                  <Text as={'b'}>${product.price.toFixed(2)}</Text>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </HStack>

      {/* Recommended products section */}
      <Stack my={16} position={'relative'}>
        <Box>
          <Text as={'b'} fontSize={26} color={'#000'}>Recommended products</Text>
          {/* Map over recommended products */}
          {/* Example of a recommended product */}
          {/* Placeholder data for recommendations, replace with real data as needed */}
          {[
            { product: { id: 12, title: 'Another Product' } },
            { product: { id: 13, title: 'Yet Another Product' } },
          ].map((rec) => (
            <Box key={rec.product.id}>
              <Text>{rec.product.title}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default ShopProductDetails;
