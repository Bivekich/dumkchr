export default {
  name: 'fatwa',
  type: 'document',
  title: 'Фетвы',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок страницы',
    },
    {
      name: 'pdfFiles',
      type: 'array',
      title: 'PDF файлы фетв',
      of: [
        {
          type: 'file',
          options: {
            accept: '.pdf'
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Название файла',
              description: 'Название для отображения в списке',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Описание',
              description: 'Краткое описание содержания PDF',
            },
          ],
        },
      ],
    },
  ],
}
