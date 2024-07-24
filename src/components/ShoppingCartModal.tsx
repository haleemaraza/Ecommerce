'use client'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { Button } from "./ui/button";

export default function ShoppingCartModal() {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart();


    async function  handleCheckoutClick(event: any) {
        event.preventDefault()
        try{
            const result = await redirectToCheckout()
            if(result?.error){
                console.log("result")
            }
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className="bg-white sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="py-6">You dont have any items</h1>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map((entry) => (
                                        <li key={entry.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-gray-200">
                                                <Image
                                                    src={entry.image as string}
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                          <div className="ml-4 flex flex-2 flex-col">
                                            <div>
                                                <div className="flex justify-around text-sm font-medium space-x-40 text-gray-900">
                                                    <h3>{entry.name}</h3>
                                                    <p className="ml-4">${entry.price}.00</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                                            </div>
                                            <div className="flex flex-1 justify-between items-end  text:sm">
                                                <p className="text-gray-500">QTY:{entry.quantity}</p>
                                            <div className="flex">
                                                <button onClick={()=> removeItem(entry.id)} className="font-medium  text-red-500 hover:text-black" type="button">
                                                    Remove
                                                </button>
                                            </div>
                                            </div>
                                          </div>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalPrice}.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes are calculated at Checkout.</p>
                      <div className="mt-6 bg-[#f7e7bb]">
                        <Button onClick={handleCheckoutClick} className="w-full">Checkout</Button>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-gray-500">
                        <p>
                            OR {" "} <button onClick={()=> handleCartClick()} className="font-medium text-gray-600 hover:text-gray-900">Continue Shopping</button>
                        </p>
                      </div>
                    </div>

                </div>
            </SheetContent>
        </Sheet>
    )
}

