'use client'

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlForImage } from "../../sanity/lib/image"

export interface ProductCart {
    name:string
    description:string
    price:number
    image:any
    currency:string
    price_id:string
}

export default function AddToCart({currency, description, image, name, price, price_id}:ProductCart){
   const { addItem, handleCartClick  } = useShoppingCart()
  const product = {
    name:name,
    description:description,
    price:price,
    currency:currency,
    image: urlForImage(image).url(),
    price_id:price_id
  }
   return (
     <Button onClick={() => {
        addItem(product), handleCartClick()
     }} className="bg-[#f7e7bb] hover:bg-gray-200">Add to Cart</Button>
        
    )

   
}