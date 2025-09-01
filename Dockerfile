# Imagem base
FROM node:20


# Diretório de trabalho
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta
EXPOSE 5173

# Comando de inicialização
CMD ["npm", "run", "dev"]
