from node:22-alpine
workdir /app
copy package.json .
run npm install
copy . . 
run npm run generate
cmd ["npm", "run", "dev"]

