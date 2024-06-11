import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px solid" borderColor="gray.200">
        <Heading as="h1" size="lg">
          My Personal Blog
        </Heading>
        <Flex as="nav">
          <Link as={RouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={2}>
            About
          </Link>
          <Link as={RouterLink} to="/blog" mx={2}>
            Blog
          </Link>
        </Flex>
      </Flex>

      <Box as="main" py={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">
            Welcome to My Blog
          </Heading>
          <Text>Here is where my blog posts will go.</Text>
        </VStack>
      </Box>

      <Box as="footer" py={4} borderTop="1px solid" borderColor="gray.200" textAlign="center">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;