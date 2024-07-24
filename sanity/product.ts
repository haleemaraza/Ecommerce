export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            title: "Name of Product",
            type: "string"
        },
        {
            name: "images",
            title: "Product Image",
            type: "image"
        },
        {
            name: "description",
            title: "Product Description",
            type: "text"
        },
        {
            name: "slug",
            title: "Product Slug",
            type: "slug",
            options:{
                source: "name",
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
              name: "price_id",
              title: "Stripe Price ID",
              type:"string",
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to:[
                {
                    type:"category",
                }
            ]
        }
    ]
}