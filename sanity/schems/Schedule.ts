export default {
  name: 'schedule',
  title: 'Расписание',
  type: 'document',
  fields: [
    {
      name: 'Citys',
      title: 'Города',
      type: 'array',
      of: [
        {
          name: 'City',
          type: 'object',
          fields: [
            {
              name: 'Name',
              title: 'Имя Города',
              type: 'string',
            },
            {
              name: 'Date',
              title: 'Дата',
              type: 'array',
              of: [
                {
                  name: 'hehe',
                  type: 'object',
                  fields: [
                    {
                      name: 'dateName',
                      type: 'date',
                    },
                    {
                      name: 'Time',
                      type: 'array',
                      of: [
                        {
                          name: 'Day',
                          type: 'object',
                          fields: [
                            {
                              name: 'Pray',
                              type: 'string',
                            },
                            {
                              name: 'Time',
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
        },
      ],
    },
  ],
}
