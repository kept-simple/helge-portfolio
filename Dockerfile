# syntax=docker/dockerfile:1

# Node 22 to match the GitHub Pages workflow.
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# vite.config.js pins base to the GitHub Pages repo path. In a container the
# site owns the whole origin, so build it for the root instead.
RUN npm run build -- --base=/

FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
