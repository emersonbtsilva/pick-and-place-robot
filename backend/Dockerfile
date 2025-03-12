# Use a imagem base que você já está usando
FROM python:3.9-slim

# Instale o SQLite
RUN apt-get update && apt-get install -y sqlite3

# Crie um diretório para o banco de dados
RUN mkdir -p /app/db

# Defina o diretório de trabalho
WORKDIR /app/backend

# Copie os arquivos do backend para o diretório de trabalho
COPY . /app/backend

# Copie o arquivo do banco de dados para o diretório de banco de dados
COPY instance/database.db /app/db/database.db 

# Upgrade pip

RUN pip install --upgrade pip

# Instale as dependências do backend
RUN pip install -r requirements.txt

# Comando para iniciar o backend
CMD ["python", "app.py"]
