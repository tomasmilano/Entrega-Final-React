
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import { MainRouter } from "./router";
import { CartProvider } from "./context";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { FaShoppingCart } from "react-icons/fa";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  useState
  return (
    <ChakraProvider>
      <CartProvider>
        <MainLayout>
          <MainRouter /> 
        </MainLayout>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;

