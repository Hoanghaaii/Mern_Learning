import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const toast = useToast();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleInputChange = (e) => {
      const {name, value} = e.target;
      setNewProduct((preState) => ({
        ...preState,
        [name]: value,
      }))
  }
  const { createProduct } = useProductStore()
  const handleAddProduct = async ()=>{
    // add new product to the database
    const { success, message} = await createProduct(newProduct)
    if(!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,

      })
    }
    else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      })
      setNewProduct({
        name: "",
        price: "",
        image: "",
      })
      
    }
  }
  return (
   <Container maxW={"container.sm"}>
    <VStack spacing={8}>
      <Heading as="h1" size={"2x1"} textAlign={"center"} mb={8}>
        Create a new product
      </Heading>
      <Box
        w={"full"} bg={useColorModeValue("white","gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <Input 
            placeholder='Price'
            name='price'
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <Input 
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={handleInputChange}
          />
          <Button onClick={handleAddProduct}>Add Product</Button>
        </VStack>
      </Box>
    </VStack>
   </Container>
  )
}

export default CreatePage