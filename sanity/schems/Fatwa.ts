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
      name: 'images',
      type: 'array',
      title: 'Фетвы',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Подпись',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
