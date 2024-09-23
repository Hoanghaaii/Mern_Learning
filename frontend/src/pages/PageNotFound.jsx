import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bg="gray.100"
      p={4}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="4xl" color="red.500">
          404
        </Heading>
        <Text fontSize="2xl">Page Not Found</Text>
        <Text fontSize="lg">
          The page you are looking for does not exist.
        </Text>
        <Link to="/">
          <Button colorScheme="teal">Go to Home</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default PageNotFound;
