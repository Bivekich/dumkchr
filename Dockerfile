FROM node:20-alpine as build

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Второй этап - только для запуска
FROM node:20-alpine

WORKDIR /app

# Устанавливаем serve для раздачи статики
RUN npm install -g serve

# Копируем собранный проект
COPY --from=build /app/dist /app/dist

# Порт для приложения
EXPOSE 3000

# Запускаем serve для раздачи статики
CMD ["serve", "-s", "dist", "-l", "3000"]
