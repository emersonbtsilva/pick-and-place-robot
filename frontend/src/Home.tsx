import { useState, useEffect } from 'react';
import { Box, Flex, Button, Image, Text, Grid, Card, CardBody, CardFooter, Divider, Spinner, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import defaultProductImage from './images/objeto1.png'; 
import Header from './Header';
import logo from './images/logo.png'

const Home = () => {
  const [robotStatus, setRobotStatus] = useState('Desconectado');
  const [collectedObjects, setCollectedObjects] = useState<number | null>(null);
  const [capacity, setCapacity] = useState<string | null>(null);
  const [products, setProducts] = useState<{ name: string; quantity: number; image: string }[]>([]);
  const [robotInfo, setRobotInfo] = useState<{ name: string; serialNumber: string; description: string }>({
    name: '',
    serialNumber: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setCollectedObjects(12);
        setCapacity('80%');
        setProducts([
          { name: 'Produto 1', quantity: 30, image: defaultProductImage },
          { name: 'Produto 2', quantity: 15, image: defaultProductImage },
          { name: 'Produto 3', quantity: 42, image: defaultProductImage },
        ]);
        setRobotInfo({
          name: 'RoboPick X300',
          serialNumber: 'RPX300-123456',
          description: 'Robô responsável por realizar operações de picking em alta velocidade com precisão de até 99%.',
        });
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const handleConnect = () => {
    setRobotStatus('Conectado');
    setTimeout(() => {
      alert('Robô conectado com sucesso!');
    }, 500);
  };

  const handleDisconnect = () => {
    setRobotStatus('Desconectado');
    alert('Robô desconectado!');
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigateToProducts = () => {
    navigate('/produtos'); 
  };

  const navigateToMyRobot = () => {
    navigate('/meurobo');
  }

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box minHeight="100vh" bg="gray.100">
      <Header
        robotStatus={robotStatus}
        isOpen={isOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      /> 
     <Drawer isOpen={isOpen} placement="left" onClose={closeMenu}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>
                <Flex align="center" justify={"center"}>
                  <Image src={logo} alt="Logo" boxSize="100px" />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap={4}>
                  <Button onClick={() => navigate('/home')} variant="link">Início</Button>
                  <Button onClick={navigateToProducts} variant="link">Produtos</Button>
                  <Button onClick={navigateToMyRobot} variant="link">Meu Robô</Button>
                  <Button onClick={() => alert('Ir para Configurações')} variant="link">Configurações</Button>
                  <Button onClick={() => alert('Sobre Nós')} variant="link">Sobre Nós</Button>
                </Flex>
              </DrawerBody>
              <DrawerFooter>
                <Button onClick={closeMenu} colorScheme="blue">Fechar</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      <Box mt="80px" px={6} py={4}>
        <Flex direction="column" gap={6}>
          <Box bg="white" shadow="md" p={4} borderRadius="md">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Identificação do Robô</Text>
            <Divider mb={4} />
            <Flex justify="space-between" align="center">
              <Box flex="1">
                <Text><strong>Nome:</strong> {robotInfo.name || 'Carregando...'}</Text>
                <Text><strong>Número de Série:</strong> {robotInfo.serialNumber || 'Carregando...'}</Text>
                <Text><strong>Descrição:</strong> {robotInfo.description || 'Carregando...'}</Text>
              </Box>
            </Flex>
          </Box>

          <Box bg="white" shadow="md" p={4} borderRadius="md">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Status do Robô</Text>
            <Text>Status: {robotStatus || 'Carregando...'}</Text>
            <Text>Objetos Coletados: {collectedObjects !== null ? collectedObjects : 'Carregando...'}</Text>
            <Text>Capacidade: {capacity || 'Carregando...'}</Text>
            {robotStatus === 'Desconectado' && (
              <Button mt={4} colorScheme="green" width="100%" onClick={handleConnect}>
                Conectar Robô
              </Button>
            )}
            {robotStatus === 'Conectado' && (
              <Button mt={4} colorScheme="red" width="100%" onClick={handleDisconnect}>
                Desconectar Robô
              </Button>
            )}
          </Box>

          <Box flex="1" bg="white" shadow="md" p={4} borderRadius="md">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Estoque de Produtos</Text>
            <Divider mb={4} />
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <Card key={index} borderWidth="1px" borderRadius="md">
                    <CardBody>
                      <Image src={product.image || defaultProductImage} alt={product.name} borderRadius="md" />
                      <Text fontWeight="bold" mt={2}>{product.name}</Text>
                      <Text>Quantidade: {product.quantity}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="blue">Pegar Objeto</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <Text>Carregando produtos...</Text>
              )}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
