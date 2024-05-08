
import type { ReactNode } from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '../styles/theme';
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
  };
  
const customTheme = extendTheme(theme); 

  const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider  theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  )
}
export default Layout;