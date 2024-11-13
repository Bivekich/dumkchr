export default {
  name: 'video',
  title: 'Страница Видео',
  type: 'document',
  fields: [
    {
      name: 'Videos',
      title: 'Видео',
      type: 'array',
      of: [
        {
          name: 'Item',
          type: 'object',
          fields: [
            {
              name: 'Video',
              title: 'Видео',
              type: 'file',
              options: {
                accept: 'video/*',
                storeOriginalFilename: true,
              },
            },
            {
              name: 'VideoName',
              title: 'Название видео',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
