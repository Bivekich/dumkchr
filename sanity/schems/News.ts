export default {
  name: 'news',
  title: 'Новости',
  type: 'document',
  fields: [
    {
      name: 'Items',
      type: 'array',
      of: [
        {
          name: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Title',
              title: 'Название',
              type: 'string',
            },
            {
              name: 'Image',
              title: 'Изобржение Новости',
              type: 'file',
              accept: 'image/*, video/*',
            },
            {
              name: 'Date',
              title: 'Дата публикации',
              type: 'datetime',
            },
            {
              title: 'Основной текст новости',
              name: 'MainText',
              type: 'text',
            },
            {
              name: 'isMain',
              title: 'Главная новость',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
}
