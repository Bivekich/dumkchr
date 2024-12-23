export default {
  name: 'Footer',
  title: 'Подвал',
  type: 'document',
  fields: [
    {
      name: 'mediaArray',
      title: 'Соц сети',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Ссылка',
          type: 'string',
        },
      ],
    },
    {
      name: 'ourContacts',
      title: 'Контакты',
      type: 'object',
      fields: [
        {
          name: 'phoneNumber',
          title: 'Телефон',
          type: 'string',
        },
        {
          name: 'adres',
          title: 'Адрес',
          type: 'string',
        },
      ],
    },
  ],
}
