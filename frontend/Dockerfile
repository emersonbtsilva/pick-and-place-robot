# IMAGEM BASE NODE
FROM node:22

# Define o diretório de trabalho dentro do container
WORKDIR /app/frontend

# Copia o arquivo de package.json e instala as dependências
COPY package.json ./
RUN npm install

# Copia o código da aplicação para o container
COPY . .

# Expõe a porta que o React irá usar
EXPOSE 3000

# Comando para rodar o React
CMD ["npm", "run", "dev"]
