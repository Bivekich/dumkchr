export default {
  name: 'photo',
  title: 'Страница Фотографий',
  type: 'document',
  fields: [
    {
      name: 'Photos',
      title: 'Фотографии',
      type: 'array',
      of: [
        {
          name: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Photo',
              title: 'Фотография',
              type: 'image',
              options: {
                storeOriginalFilename: true,
              },
            },
            {
              name: 'PhotoName',
              title: 'Название фото',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
