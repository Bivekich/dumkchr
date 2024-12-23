export default {
  name: 'Regions',
  title: 'Регионы',
  type: 'document',
  fields: [
    {
      name: 'Array',
      title: 'Регионы',
      type: 'array',
      of: [
        {
          name: 'Item',
          title: 'Регион',
          type: 'object',
          fields: [
            {
              name: 'RegionName',
              title: 'Имя Региона',
              type: 'string',
              options: {
                list: [
                  {title: 'Абазинский район', value: 'Абазинский район'},
                  {title: 'Адыге-Хабльский район', value: 'Адыге-Хабльский район'},
                  {title: 'Зеленчукский район', value: 'Зеленчукский район'},
                  {title: 'Карачаевский район', value: 'Карачаевский район'},
                  {title: 'Малокарачаевский район', value: 'Малокарачаевский район'},
                  {title: 'Ногайский район', value: 'Ногайский район'},
                  {title: 'Прикубанский район', value: 'Прикубанский район'},
                  {title: 'Урупский район', value: 'Урупский район'},
                  {title: 'Усть-Джегутинский район', value: 'Усть-Джегутинский район'},
                  {title: 'Хабезский район', value: 'Хабезский район'},
                ],
              },
              validation: (rule: any) => rule.required(),
            },
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
        },
      ],
    },
  ],
}
