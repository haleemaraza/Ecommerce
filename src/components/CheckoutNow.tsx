'use client'

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlForImage } from "../../sanity/lib/image"
import { ProductCart } from "./AddToCart"



export default function CheckoutNow({currency, description, image, name, price, price_id}:ProductCart){
   const {  checkoutSingleItem } = useShoppingCart()
  function buyNow(priceId: string){
    checkoutSingleItem(priceId)
  }
  
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
        buyNow(product.price_id)
        
     }} className="bg-[#f7e7bb]">Checkout Now</Button>
        
    )

   
}