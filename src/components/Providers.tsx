'use client'
import { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'


export default function CartProvider({ children }: { children: ReactNode }) {
   return (
      <USCProvider
         mode="payment"
         cartMode='client-only'
         stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
         successUrl="https://ecommerce-peach-delta.vercel.app/stripe/success"
         cancelUrl="https://ecommerce-peach-delta.vercel.app/stripe/error"
         currency='USD'
         billingAddressCollection={true}
         shouldPersist={true}
         language='en-US'
      >
         {children}
      </USCProvider>
   )
}





