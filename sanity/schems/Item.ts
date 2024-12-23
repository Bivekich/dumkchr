export default {
  name: 'item',
  type: 'document',
  fields: [
    {
      name: 'Title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'Image',
      title: 'Изобржение Новости',
      type: 'image',
    },
    {
      name: 'Date',
      title: 'Дата публикации',
      type: 'datetime',
    },
    {
      title: 'Основной текст новости',
      name: 'MainText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
