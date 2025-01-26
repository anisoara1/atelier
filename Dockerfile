# Imagine de bază
FROM node:18

# Setează directorul de lucru în container
WORKDIR /atelier
# Copiază pachetele
COPY package*.json ./

# Instalează dependințele
RUN npm install

# Copiază codul aplicației
COPY . .

# Rulează build-ul pentru frontend
RUN npm run build

# Expune portul pe care rulează aplicația frontend (ex. 3000)
EXPOSE 3000

# Servește aplicația
CMD ["npm", "run", "start"]
