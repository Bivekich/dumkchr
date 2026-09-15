FROM node:20-alpine AS build

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Coolify может передать NODE_ENV=production как build-arg —
# тогда npm ci пропустит devDependencies (typescript, vite) и сборка упадёт.
# Явно ставим все зависимости, нужные для build.
RUN npm ci --include=dev

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Второй этап - только для запуска
FROM node:20-alpine AS runtime

WORKDIR /app

# wget нужен для healthcheck в docker-compose
RUN apk add --no-cache wget \
  && npm install -g serve

# Копируем собранный проект
COPY --from=build /app/dist /app/dist

# Порт для приложения
EXPOSE 3000

# Запускаем serve для раздачи статики
CMD ["serve", "-s", "dist", "-l", "3000"]
