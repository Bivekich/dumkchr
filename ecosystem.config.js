module.exports = {
  apps: [
    {
      name: 'dumkchr', // Название вашего приложения
      script: 'npm',
      args: 'run preview', // Команда для запуска preview сервера Vite
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
