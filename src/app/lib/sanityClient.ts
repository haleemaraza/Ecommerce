import imageUrlBuilder  from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
    apiVersion: "2024-06-01",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,   
    })

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
    return builder.image(source) 
}