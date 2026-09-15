# Деплой через Coolify (Docker Compose)

## Что деплоится

Статический фронтенд (Vite + React), раздаётся через `serve` на порту **3000**.
Sanity (`projectId` / `dataset`) зашиты в код — отдельных секретов для фронта не нужно.

## Настройка в Coolify

1. Resource type: **Docker Compose**
2. Репозиторий / ветка: `main`
3. Compose file: `docker-compose.yml`
4. Порт приложения: **3000**
5. Домен: `dumkchr.ru` (или ваш)

### Переменные окружения

Обязательных env нет.

Опционально (только **Runtime**, не Build-time):

```
NODE_ENV=production
```

`VITE_*` в этом проекте не используются. Если добавите их позже — задавайте как **build args** в Dockerfile, а не только runtime.

**Важно:** не ставьте `NODE_ENV=production` с галочкой «Available at Buildtime» в Coolify. Dockerfile уже защищён (`npm ci --include=dev`), но runtime-only — правильнее.

## Локальная проверка

```bash
docker compose build
docker compose up -d
# http://localhost:<назначенный_порт>
```

## Файлы

- `Dockerfile` — multi-stage: build → `serve`
- `docker-compose.yml` — сервис `app`
- `stack.env` — runtime env для compose
