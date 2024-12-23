export default {
  name: 'halal',
  type: 'document',
  title: 'Халяль',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Заголовок страницы',
    },
    {
      name: 'certificates',
      type: 'array',
      title: 'Сертификаты',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Изображение сертификата',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Подпись под сертификатом',
            },
          ],
        },
      ],
    },
  ],
}
