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
              name: 'Image',
              title: 'Изображение',
              type: 'image',
            },
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
                  {
                    title: 'МУФТИЙ КЧР',
                    value: 'Muftiya',
                  },
                  {
                    title: 'РУКОВОДИТЕЛЬ АППАРАТА МУФТИЯ КЧР',
                    value: 'Manager',
                  },
                  {
                    title: 'КАДИЙ',
                    value: 'Kadi',
                  },
                  {
                    title: 'ФОНД ДУМ КЧР',
                    value: 'Foundation',
                  },
                  {
                    title: 'СОВЕТНИК МУФТИЯ КЧР',
                    value: 'Support',
                  },
                  {
                    title: 'ЗАМЕСТИТЕЛЬ МУФТИЯ',
                    value: 'Zam',
                  },
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
