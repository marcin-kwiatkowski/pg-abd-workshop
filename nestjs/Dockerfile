FROM node:22.11.0-alpine3.20

WORKDIR /app

# This file can be optimized, please refer to the following link for more information:
# https://buddy.works/tutorials/optimizing-dockerfile-for-node-js-part-1

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD [ "npm", "run", "start" ]
