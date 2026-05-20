import { simplifiedProduct } from "@/app/interface"
import { client } from "../../sanity/lib/client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'

async function getData() {
    const query = `*[_type == 'product'][11...14] | order(_createdAt desc) {
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images.asset->url
}`

    const data = await client.fetch(query)
    return data
}






export default async function Newest() {
    const data: simplifiedProduct[] = await getData()


    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold tracking-tighter raleway text-gray-900">Lets Find your style</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                    {data.map((product) => (
                        <div key={product._id} className="group flex flex-col">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                <Link href={`/product/${product.slug}`}>
                                    <Image
                                        src={product.imageUrl}
                                        alt="Product Image"
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                            <div className="mt-2 px-1">
                                <h2 className="text-sm font-semibold raleway text-gray-900 leading-snug line-clamp-2">
                                    {product.name}
                                </h2>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-xs text-gray-400">{product.categoryName}</p>
                                    <p className="text-sm font-bold text-gray-900">${product.price}.00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
