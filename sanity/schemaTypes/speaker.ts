export default {
  name: 'speaker',
  type: 'document',
  title: 'Speaker',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Speaker'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Speaker'
    }
  ]
}