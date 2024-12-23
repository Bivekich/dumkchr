export default {
  name: 'documents',
  title: 'Документы',
  type: 'document',
  fields: [
    {
      name: 'Array',
      title: 'Документы',
      type: 'array',
      of: [
        {
          name: 'Item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Document',
              title: 'Документ',
              type: 'file',
              options: {
                accept: 'application/pdf',
                storeOriginalFilename: true,
              },
            },
            {
              name: 'DocumentName',
              title: 'Название Документа',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
