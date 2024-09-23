import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      bg={bgColor}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
      maxW="sm" // Đặt kích thước giới hạn cho thẻ
      minW="300px" // Đặt chiều rộng tối thiểu cho thẻ
      mx="auto"
    >
      <Image
        src={product.image}
        alt={product.name}
        h={56}
        w='full'
        objectFit='cover'
      />
      <Box p={4}>
        <Heading as='h3' size='md' mb={2} isTruncated>
          {product.name}
        </Heading>
        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme='blue' />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDelete(product._id)} colorScheme='red' />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
