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
              type: 'image',
            },
            {
              name: 'Date',
              title: 'Дата публикации',
              type: 'datetime',
            },
            {
              title: 'Основной текст новости',
              name: 'MainText',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
