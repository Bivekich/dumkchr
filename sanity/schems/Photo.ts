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
          name: 'Photo',
          title: 'Фотография',
          type: 'image',
        },
      ],
    },
  ],
}
