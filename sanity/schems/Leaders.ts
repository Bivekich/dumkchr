export default {
  name: 'Leader',
  title: 'Руководство',
  type: 'document',
  fields: [
    {
      name: 'Leaders',
      title: 'Руководители',
      type: 'array',
      of: [
        {
          name: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Name',
              title: 'Имя',
              type: 'string',
            },
            {
              name: 'LeaderOf',
              title: 'Должность',
              type: 'string',
              options: {
                list: [
                  'МУФТИЙ КЧР',
                  'РУКОВОДИТЕЛЬ АППАРАТА МУФТИЯ КЧР',
                  'КАДИЙ',
                  'ЗАМЕСТИТЕЛИ МУФТИЯ КЧР',
                  'ФОНДЫ ДУМ КЧР',
                  'СОВЕТНИК МУФТИЯ КЧР',
                ],
              },
            },
            {
              name: 'Description',
              title: 'Описание',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
