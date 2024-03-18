export default {
  name: 'place',
  type: 'document',
  title: 'Place',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Place'
    },
    {
      name: 'location',
      type: 'geopoint',
      title: 'Location'
    },
    {
      name: 'description',
      type: 'text',
      tile: 'Description'
    }
  ]
}