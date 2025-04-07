module.exports = {
  apps: [
    {
      name: 'dumkchr', // Название вашего приложения
      script: 'npm',
      args: 'run preview -- --host', // Команда для запуска preview сервера Vite с флагом --host
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
