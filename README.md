# Projeto de Robô de Coleta de Objetos

Este projeto envolve o desenvolvimento de um robô com a capacidade de coletar objetos utilizando um braço robótico. A arquitetura do sistema é composta por um backend em Flask, frontend em React, e várias tecnologias, como YOLO, OpenCV e ROS, para reconhecimento de objetos e controle do robô.

## Tecnologias Utilizadas

- **Backend**: Flask
- **Frontend**: React + Chakra UI
- **Banco de Dados**: SQLite
- **Reconhecimento de Objetos**: YOLO, OpenCV
- **Controle do Robô**: ROS
- **Machine Learning**: Implementações específicas para reconhecimento e controle

## Estrutura do Projeto

### Backend

- **Flask**: Responsável pela API do robô, que interage com o banco de dados e fornece endpoints para controlar o robô e obter dados de objetos.
- **Banco de Dados**: Utiliza SQLite para armazenar informações sobre os objetos e o estado do robô.
- **Machine Learning**: Implementações voltadas para reconhecimento e tomada de decisão baseada no aprendizado de máquina.

### Frontend

- **React + Chakra UI**: Interface de usuário com componentes como botões, painéis e formulários para interagir com o robô e visualizar seu estado.

## Funcionalidades

- **Gestão do Robô**: Controlar o robô, incluindo movimentação e coleta de objetos.
- **Listagem de Objetos**: Visualizar objetos disponíveis para coleta.
- **Configurações**: Ajustes no comportamento do robô e configurações do sistema.
- **Perfil do Usuário**: Visualizar e editar informações do usuário.

## Instalação

### Requisitos

- **Python 3.x**
- **Node.js**
- **Docker** (opcional)

### Passos para Instalar

1. **Backend (Flask)**:
   
   - Navegue até a pasta `backend` e instale as dependências com o comando:
   
     ```bash
     pip install -r requirements.txt
     ```
   
   - Execute o servidor Flask com:
   
     ```bash
     python app.py
     ```
   
   O servidor backend estará rodando em `http://localhost:5000`.

2. **Frontend (React + Chakra UI)**:
   
   - Navegue até a pasta `frontend` e instale as dependências com:
   
     ```bash
     npm install
     ```
   
   - Execute o servidor React com:
   
     ```bash
     npm start
     ```
   
   O frontend estará disponível em `http://localhost:3000`.

### Conexão com o Hardware

1. **Configuração do Robô**:
   
   Certifique-se de que o robô está configurado corretamente com o Raspberry Pi, Arduino, ou outros módulos de controle de hardware.

2. **Reconhecimento de Objetos**:
   
   Utilize o YOLO (You Only Look Once) com OpenCV para detectar objetos durante a execução. O robô será capaz de localizar e pegar os objetos com base nas imagens capturadas pela câmera.

## Machine Learning

O sistema de Machine Learning é utilizado para otimizar a operação do robô, permitindo que ele aprenda e melhore a precisão nas tarefas de coleta de objetos. A implementação inclui treinamento e utilização de modelos de reconhecimento de objetos, além de decisões autônomas do robô com base nos dados coletados.


