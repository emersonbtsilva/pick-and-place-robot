import {
    Box,
    Flex,
    Image,
    Button,
    Badge,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
  } from '@chakra-ui/react';
  import logo from './images/logo.png';
  import { useNavigate } from 'react-router-dom';
  

export interface HeaderProps {
    robotStatus: string; 
    isOpen: boolean; 
    openMenu: () => void; 
    closeMenu: () => void; 
  }

  const Header: React.FC<HeaderProps> = ({ robotStatus, isOpen, openMenu, closeMenu }) => {
    const navigate = useNavigate();
  
    const navigateToProducts = () => {
      navigate('/produtos');
    };
  
    const navigateToMyRobot = () => {
      navigate('/meurobo');
    };
  
    return (
      <>
        <Box
          as="header"
          bg="blue.600"
          py={2}
          px={4}
          shadow="md"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          zIndex="1"
        >
          <Flex align="center" justify="space-between" width="100%">
            <Flex align="center">
              <Image
                src={logo}
                alt="Logo"
                boxSize="50px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s ease' }}
                onClick={openMenu}
              />
              <Flex gap={8} ml={4}>
                <Button variant="ghost" color="white" onClick={navigateToProducts}>
                  Produtos
                </Button>
                <Button variant="ghost" color="white" onClick={navigateToMyRobot}>
                  Meu Robô
                </Button>
                <Button variant="ghost" color="white" onClick={() => alert('Ir para Configurações')}>
                  Configurações
                </Button>
              </Flex>
            </Flex>
            <Badge colorScheme={robotStatus === 'Conectado' ? 'green' : 'red'} fontSize="lg" p={2} borderRadius="md">
              {robotStatus || 'Carregando...'}
            </Badge>
          </Flex>
        </Box>
  
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
      </>
    );
  };
  
  export default Header;
  