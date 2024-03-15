FROM node:18-alpine AS build 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build

# Stage sử dụng image production
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app/package.json /app/package.json 
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

EXPOSE 3000 

CMD ["npm", "start"]