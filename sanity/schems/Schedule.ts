export default {
  name: 'schedule',
  title: 'Расписание',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'название',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Время',
      type: 'object',
      fields: [
        {
          name: 'hours',
          title: 'Часы',
          type: 'string',
        },
        {
          name: 'Minutes',
          title: 'Минуты',
          type: 'string',
        },
      ],
    },
  ],
}
