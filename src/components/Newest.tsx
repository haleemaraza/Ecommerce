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
        <div className="bg-white ">
            <div className="p-lmax-w-2xl px-4 py-10  sm:px-6 pr-10 sm:p  lg:px-1">
                <div className="flex justify-around  items-center">
                    <h2 className="text-2xl font-bold tracking-tighter raleway text-gray-900">Lets Find your style</h2>
                    {/* <Link href="/Women" className="text-primary flex items-center gap-x-1">See More {" "}<span><ArrowRight color="blue" /></span></Link> */}
                </div>
                <div className="flex flex-wrap justify-center space-x-4 mt-">
                    {data.map((product) => (
                        <div key={product._id} className="">
                            <div className="w-full rounded-md items-center bg-gray-200 group-hover:opacity-75 mt-16 lg:h-[550px]">
                                <Link href={`/product/${product.slug}`}>

                                    <Image
                                        src={product.imageUrl}
                                        alt="Product Image"
                                        className="h-full w-full object-cover object-bottom "
                                        width={300}
                                        height={300}
                                    />
                                </Link>
                                <div className="flex mt-4 justify-between">
                                    <div className="p">
                                        <h2 className="text-[#000] font-bold raleway">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-500 text-sm">{product.categoryName}</p>
                                    </div>
                                    <p>${product.price}.00</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}