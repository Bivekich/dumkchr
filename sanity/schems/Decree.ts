export default {
  name: 'decree',
  title: 'Указы',
  type: 'document',
  fields: [
    {
      name: 'Array',
      title: 'Указы',
      type: 'array',
      of: [
        {
          name: 'Item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Decree',
              title: 'Указ',
              type: 'file',
              options: {
                accept: 'application/pdf',
                storeOriginalFilename: true,
              },
            },
            {
              name: 'DecreeName',
              title: 'Название Указа',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
