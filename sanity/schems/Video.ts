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
          name: 'Video',
          title: 'Видео',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
      ],
    },
  ],
}
