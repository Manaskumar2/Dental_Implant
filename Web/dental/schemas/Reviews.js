export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Photo',
            type: 'image',
        },
        {
            name: 'title',
            title: 'Name of the customer',
            type: 'string'
        },
        {
            name: 'description',    
            title: 'Customer Review',
            type: 'text'
        }
    ]
}