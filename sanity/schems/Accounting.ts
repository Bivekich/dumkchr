export default {
  name: 'Accountings',
  title: 'Бухгалтерия',
  type: 'document',
  fields: [
    {
      name: 'Array',
      type: 'array',
      of: [
        {
          name: 'accounting',
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'doc',
              type: 'file',
              options: {
                accept: 'application/pdf',
              },
            },
          ],
        },
      ],
    },
  ],
}
