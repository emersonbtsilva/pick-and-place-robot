import { useState, useEffect } from 'react';
import { Box, Grid, Card, CardBody, Image, Text, Button, Divider, Flex, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import defaultProductImage from './images/objeto1.png'; 
import Header from './Header'; 

const Products = () => {
  const [products, setProducts] = useState<{ name: string; quantity: number; image: string }[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [robotStatus, setRobotStatus] = useState('Desconectado');
  const [isOpen, setIsOpen] = useState(false);
  
  // Modal State
  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
  
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts([
        { name: 'Produto 1', quantity: 30, image: defaultProductImage },
        { name: 'Produto 2', quantity: 15, image: defaultProductImage },
        { name: 'Produto 3', quantity: 42, image: defaultProductImage },
        { name: 'Produto 4', quantity: 20, image: defaultProductImage },
        { name: 'Produto 5', quantity: 10, image: defaultProductImage },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRobotStatus('Conectado'); 
    }, 2000);
  }, []);

  const handleAddProduct = () => {
    // Lógica para adicionar produto
    // Exemplo: const newProduct = { name, quantity, image: capturedImage };
    
    closeModal(); // Fecha o modal após adicionar
  };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box p={8} minHeight="100vh" bg="gray.100">
      <Header
        robotStatus={robotStatus}
        isOpen={isOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      /> 

      <Box bg="white" p={4} borderRadius="md" shadow="md" mt={6}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Estoque de Produtos
        </Text>
        <Divider mb={4} />

        <Button colorScheme="green" onClick={openModal} mb={4}>
          Cadastrar Produto
        </Button>

        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6}>
          {products.map((product, index) => (
            <Card key={index} borderWidth="1px" borderRadius="md" shadow="md">
              <CardBody>
                <Image src={product.image || defaultProductImage} alt={product.name} borderRadius="md" objectFit="cover" />
                <Text fontWeight="bold" mt={2} fontSize="lg">{product.name}</Text>
                <Text fontSize="md" color="gray.600">Quantidade: {product.quantity}</Text>
              </CardBody>
              <Button mt={2} colorScheme="blue" width="100%">Pegar Objeto</Button>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* Modal para Cadastrar Produto */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Produto</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Nome do Produto</FormLabel>
              <Input placeholder="Nome do Produto" />
              <FormLabel mt={4}>Quantidade</FormLabel>
              <Input type="number" placeholder="Quantidade" />
              <Button mt={4} colorScheme="blue" onClick={handleAddProduct}>
                Reconhecer Objeto
              </Button>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddProduct}>
              Cadastrar
            </Button>
            <Button variant="ghost" onClick={closeModal}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Products;
