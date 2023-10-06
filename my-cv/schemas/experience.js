import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Job Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM YYYY'
            }
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM YYYY'
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [{ title: 'Bullet', value: 'bullet' },],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title'
        },
    },
})
