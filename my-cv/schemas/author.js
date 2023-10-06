import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name'
    },
  },
})
