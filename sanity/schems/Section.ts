export default {
  name: 'Sections',
  title: 'Отделы',
  type: 'document',
  fields: [
    {
      name: 'Array',
      title: 'Отделы',
      type: 'array',
      of: [
        {
          name: 'Item',
          title: 'Отдел',
          type: 'object',
          fields: [
            {
              name: 'sectionType',
              title: 'Отдел...',
              type: 'string',
              options: {
                list: [
                  {title: 'ОТДЕЛ ПРИМИРЕНИЯ (МАСЛАХАТ)', value: 'Maslahat'},
                  {title: 'КОМИТЕТ ПО ДЕЛАМ МОЛОДЕЖИ И ПРОСВЕЩЕНИЯ', value: 'Young'},
                  {title: 'КОМИТЕТ ХАДЖА', value: 'Hajj'},
                  {
                    title: 'КОМИТЕТ ПО КОНТРОЛЮ ИСЛАМСКОГО РЕЛИГИОЗНОГО ОБРАЗОВАНИЯ',
                    value: 'Education',
                  },
                  {title: 'КОМИТЕТ ИНФОРМАЦИИ, ОБЩЕСТВЕННЫХ СВЯЗЕЙ СМИ', value: 'SmiCom'},
                ],
              },
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
          ],
        },
      ],
    },
  ],
}
