export default {
  name: 'appeal',
  title: 'Обращения',
  type: 'document',
  fields: [
    {
      name: 'Array',
      title: 'Обращения',
      type: 'array',
      of: [
        {
          name: 'Item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Appeal',
              title: 'Обращение',
              type: 'file',
              options: {
                accept: 'application/pdf',
                storeOriginalFilename: true,
              },
            },
            {
              name: 'AppealName',
              title: 'Название Обращения',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
