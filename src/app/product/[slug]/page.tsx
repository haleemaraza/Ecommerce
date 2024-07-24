import { fullProduct } from "@/app/interface"
import { client } from "@/app/lib/sanityClient"
import AddToCart from "@/components/AddToCart"
import ImageGallery from "@/components/ImageGallery"
import { Button } from "@/components/ui/button"
import { Star, Truck } from "lucide-react"
import Link from 'next/link'

async function getData(slug: string) {
    const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
  _id,
  images,
  price,
  name,
  description,
  "slug": slug.current,
  "categoryName": category->name,
  price_id
}`

const data = await client.fetch(query)
// console.log("imag" ,data);

return data


}



export default async function ProductPage({
    params, 
}: {
    params: { slug: string }
}) {
    const data:fullProduct  = await getData(params.slug)
    return(
        <div className="bg-white">
           <div className="mx:auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
                <ImageGallery image={data.images} />

                <div className="md:py-8 mt-32">
                    <div className="mb-2 md:mb-3">
                        <span className="mb-0.5 inline-block text-gray-500">
                            {data.categoryName}
                        </span>
                        <h2 className="text-2xl raleway font-bold text-gray-800 lg:text-3xl">
                            {data.name}
                        </h2>
                        <div className="mb-6 flex items-center gap-3 md:mb-10">
                          <Button className="rounded-full text-sm bg-[#f7e7bb] hover:bg-[#f7e7bb] gap-x-2">
                            4.2
                            <Star className="h-5 w-5"/>
                          </Button>

                          <span className="text-sm text-gray-500 transition duration-100">
                            85 Rating
                          </span>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-boldtext-gray-800 md:text-2xl">
                                    ${data.price}.00
                                </span>
                            </div>
                              <span className="text-sm text-gray-500">
                                  Inclusive of all Taxes
                              </span>
                        </div>
                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Truck className="w-6 h-6"/>
                            <span className="text-sm ">4-6 Day Shipping</span>
                        </div>

                        <div className="flex gap-2.5">
                        <AddToCart currency="USD" description={data.description} name={data.name} price={data.price} key={data._id} image={data.images} price_id={data.price_id} />
                         
                            {/* <Button className="bg-gray-200">Checkout Now</Button> */}
                           
                        </div>
                        <p className="mt-12 text-base text-gray-500 tracking-wide">
                            {data.description}
                        </p>
                    </div>

                </div>
            </div>
           </div>
        </div>
    )
        
    
}

