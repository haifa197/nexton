
import { Box, Flex, HStack, Text, Image, Container, Link , Stack, SimpleGrid} from '@chakra-ui/react';

const Footer = () => {
  return (
 <>
    <Box className='footer' bg="#111827" color="white">
      <Container as={Stack} maxW={'container.xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text>Company</Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Legal</Text>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Install App</Text>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderColor={'#A8A8A8'}
        borderStyle={'solid'}
        >
        <Container
          as={Stack}
          maxW={'container.xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
           <Text textAlign="center" fontSize={'16px'} color={'#A8A8A8'} >
        Nexton eCommerce. &copy; {new Date().getFullYear()} 
        </Text>
          <Stack direction={'row'} spacing={6}>
           <Image src='../Images/Clip.png' alt='visa'/>
            <Image src='../Images/paypal.png' alt='paypal'/>
            <Image src='../Images/stripe.png' alt='stripe'/>
            <Image src='../Images/verisign.png' alt='verisign'/>
          </Stack>
        </Container>
      </Box>
    </Box>
    
  </>  
   
  );
};

export default Footer;
