import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Button, Center, FormControl, FormLabel, Input, VStack, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/users/login', { email, password });

      if (response.data.success) {
        navigate('/home');
      } else {
        setError(response.data.message);
      }
    }  catch (error) {
      setError('Erro na requisição.');
    }
  };
  
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ username, email, password }); 

    try {
        const response = await axios.post('http://localhost:5000/users/create', { username, email, password });
        if (response.status === 201) {
            alert('Usuário criado com sucesso!');
            onClose();
        } else {
            alert('Erro ao criar usuário.');
        }
    } catch (error) {
        alert('Erro ao criar usuário.');
        console.error('Erro:', error);
    }
};


  const handleRecoverPassword = () => {
    alert('Iniciar processo de recuperação de senha');
  };

  return (
    <Center
      h="100vh"
      bgGradient="linear(to-br, #0097b2, #7ed957)"
      bgSize="200% 200%"
      animation="moveGradient 10s ease infinite" 
    >
      <Box
        w="100%"
        maxW="md"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        bg="white"
        boxShadow="lg"
      >
        {/* Formulário de login */}
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            {error && (
              <Box bg="red.100" p={2} borderRadius="md">
                <Text color="red.500">{error}</Text>
              </Box>
            )}

      
            <Button
              variant="link"
              colorScheme="blue"
              alignSelf="flex-start"
              onClick={handleRecoverPassword}
            >
              Esqueci minha senha
            </Button>

            <Button type="submit" colorScheme="teal" width="full">
              Login
            </Button>

            <Button onClick={onOpen} colorScheme="blue" width="full">
              Criar Usuário
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Modal de criação de usuário */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleCreateUser}>
              <VStack spacing={4}>
                <FormControl id="username" isRequired>
                  <FormLabel>Nome de Usuário</FormLabel>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email-create" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password-create" isRequired>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateUser}>
              Criar
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Estilos para animação do fundo */}
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Center>
  );
};

export default Login;
