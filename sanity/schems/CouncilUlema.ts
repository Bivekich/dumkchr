export default {
  name: 'Ulems',
  title: 'Улемы',
  type: 'document',
  fields: [
    {
      name: 'info',
      title: 'Информация',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
    {
      name: 'Other',
      title: 'Остальные изображения',
      type: 'array',
      of: [
        {
          name: 'OtherImages',
          title: 'Изображение',
          type: 'image',
        },
      ],
    },
    {
      name: 'Personal',
      title: 'Руководители',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'Photo',
              title: 'Фотография',
              type: 'image',
            },
            {
              name: 'Name',
              title: 'ФИО',
              type: 'string',
            },
            {
              name: 'Birth',
              title: 'День рождения',
              type: 'string',
            },
            {
              name: 'Description',
              title: 'Информацию',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
