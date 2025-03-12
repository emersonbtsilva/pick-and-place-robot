import { useState, useEffect } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Image, Button, Flex, Input, Spinner } from "@chakra-ui/react";
import Header from './Header'; 
import Robo from './images/robot1.png'; 
import Robo2 from './images/robot2.png'; 

interface Robot {
  id: number;
  name: string;
  serialNumber: string;
  description: string;
  image: string;
  isEditing: boolean;
}

const MeuRobo = () => {

  const [robots, setRobots] = useState<Robot[]>([
    { id: 1, name: "Robô de Picking Avançado", serialNumber: "RPX300-123456", description: "Robô responsável por operações de picking.", image: Robo, isEditing: false },
    { id: 2, name: "Robô de Alta Velocidade", serialNumber: "RPX300-654321", description: "Robô de alta velocidade.", image: Robo2, isEditing: false },
  ]);

  const [robotStatus, setRobotStatus] = useState('Desconectado');
  const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDisconnect = (robotName: string) => {
    alert(`Conectar ${robotName}...`);
  };

  const handleEditToggle = (id: number) => {
    setRobots(robots.map(robot => robot.id === id ? { ...robot, isEditing: !robot.isEditing } : robot));
  };

  const handleNameChange = (id: number, value: string) => {
    setRobots(robots.map(robot => robot.id === id ? { ...robot, name: value } : robot));
  };

  const handleDescriptionChange = (id: number, value: string) => {
    setRobots(robots.map(robot => robot.id === id ? { ...robot, description: value } : robot));
  };

  const handleRegisterRobot = () => {
    alert("A função de cadastro via Bluetooth será implementada aqui.");
  };

  useEffect(() => {
    setTimeout(() => {
      setRobotStatus('Desconectado');
    }, 2000);
  }, []);

  if (robotStatus === null) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box bg="gray.100" minHeight="100vh">
      <Header
        robotStatus={robotStatus}
        isOpen={isOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      /> 

      <Box p={6} maxW="800px" mx="auto" mt="80px">
        <Heading as="h2" size="xl" mb={4} textAlign="left" color="teal.500">
          Meus Robôs de Picking
        </Heading>
        
        {/* Botão de Cadastro de Robô */}
        <Button colorScheme="teal" mb={4} onClick={handleRegisterRobot}>
          Cadastrar Robô
        </Button>

        <Box borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white" p={4}>
          <Table variant="simple" size="sm" width="full">
            <Thead>
              <Tr>
                <Th>Imagem</Th>
                <Th>Nome</Th>
                <Th>Descrição</Th>
                <Th>Número de Série</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {robots.map((robot) => (
                <Tr key={robot.id}>
                  <Td>
                    <Image src={robot.image} alt={robot.name} boxSize="100px" objectFit="contain" />
                  </Td>
                  <Td>
                    {robot.isEditing ? (
                      <Input
                        value={robot.name}
                        onChange={(e) => handleNameChange(robot.id, e.target.value)}
                        variant="flushed"
                        width="full"
                      />
                    ) : (
                      robot.name
                    )}
                  </Td>
                  <Td>
                    {robot.isEditing ? (
                      <Input
                        value={robot.description}
                        onChange={(e) => handleDescriptionChange(robot.id, e.target.value)}
                        variant="flushed"
                        width="full"
                      />
                    ) : (
                      robot.description
                    )}
                  </Td>
                  <Td>{robot.serialNumber}</Td>
                  <Td>
                    <Flex gap={2}>
                      <Button colorScheme="teal" onClick={() => handleEditToggle(robot.id)}>
                        {robot.isEditing ? "Salvar" : "Editar"}
                      </Button>
                      <Button colorScheme="teal" onClick={() => handleDisconnect(robot.name)}>
                        Conectar
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default MeuRobo;
