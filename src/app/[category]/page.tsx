import { simplifiedProduct } from "../interface"
import { client } from "../lib/sanityClient"
import Link from "next/link"
import Image from 'next/image'


async function getData(category: string) {
    const  query = `*[_type == "product" && category->name == "${category}"][0...9]{
  _id,
    "imageUrl": images.asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
}`

const data = await client.fetch(query)
return data 
}


export default async function Categorypage({
    params,
} : {
    params: { category: string}
}) {
const data :simplifiedProduct[] = await getData(params.category)
return (
    <div className="bg-white mt-32">
        <div className="p-lmax-w-2xl px-4 py-10  sm:px-6 pr-10 sm:p  lg:px-1">
            <div className="flex justify-around  items-center">
                <h2 className="text-2xl font-bold tracking-tighter raleway text-gray-900">Products for {params.category}</h2>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 mt-">
                {data.map((product) => (
                    <div key={product._id} className="">
                        <div className="w-full rounded-md items-center bg-gray-200 group-hover:opacity-75 mt-16 lg:h-[550px]">
                            <Link href={`/product/${product.slug}`}>

                                <Image
                                    src={product.imageUrl}
                                    alt="Product Image"
                                    className="h-full w-full object-cover object-top "
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