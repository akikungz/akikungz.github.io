FROM node:22-alpine3.19 as package

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

# Path: Dockerfile
FROM node:22-alpine3.19 as build

WORKDIR /app

COPY . .
COPY --from=package /app/node_modules ./node_modules

RUN npm run build

# Path: Dockerfile
FROM nginx:1.21-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]