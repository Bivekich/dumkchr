export default {
  name: 'schedule',
  title: 'Расписание',
  type: 'document',
  fields: [
    {
      name: 'Month',
      type: 'array',
      of: [
        {
          name: 'Days',
          type: 'object',
          fields: [
            {
              name: 'Date',
              type: 'date',
            },
            {
              name: 'List',
              title: 'Список',
              type: 'array',
              of: [
                {
                  name: 'Prays',
                  title: 'Молитвы',
                  type: 'object',
                  fields: [
                    {
                      name: 'Title',
                      title: 'Название',
                      type: 'string',
                    },
                    {
                      name: 'Time',
                      title: 'Время',
                      type: 'string',
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
