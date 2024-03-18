export default {
  name: 'course',
  type: 'document',
  title: 'Course',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Course'
    },
    {
      title: 'Course date',
      name: 'courseDate',
      type: 'array',
      of: [{type: 'datetime'}],
    },
    {
      title: 'Duration Per Day',
      name: 'durationPerDay',
      type: 'number',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Course Images',
      of: [{type: 'image'}],
    },
    {
      name: 'speaker',
      type: 'reference',
      title: 'Speaker of Course',
      to: [{type: 'speaker'}]
    },
    {
      name: 'place',
      type: 'reference',
      title: 'Place of Course',
      to: [{type: 'place'}]
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category of Course',
      to: [{type: 'category'}]
    },
    {
      name: 'phones',
      type: 'array',
      title: 'Phone Numbers',
      of: [{type: 'string'}]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Course'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Course Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'reservalPrice',
      type: 'number',
      title: 'Reserval Price'
    },

  ]
}