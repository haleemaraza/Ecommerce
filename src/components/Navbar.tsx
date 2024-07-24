'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"
import Logo from '/public/image/logo.png'
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";


const links = [
    { name: "Home", href: "/" },
    { name: "Women", href: "/Women" },
    { name: "Men", href: "/Men" }

]

export default function Navbar() {
    const pathname = usePathname()
const { handleCartClick } = useShoppingCart()


    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50"  style={{ backgroundColor: 'rgba(211, 211, 211, 0.4)' }}>
                <div className="flex items-center  h-20 justify-between mx-auto raw-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                            className="invert"
                        />
                    </Link>

                    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                        {links.map((link, idx) => (
                            <div key={idx}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-[5F432A] raleway">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link href={link.href} className="text-lg font-semibold text-[#fff] duration-100 hover:text-black">
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex divide-x">
                        <Button onClick={() => handleCartClick()} variant={"outline"} style={{ color: "#fff" }} className="flex flex-col gap-y-1.5 bg-transparent border-none rounded-none ">
                            <ShoppingBag />
                        </Button>
                    </div>
                </div>

            </header>
        </div>
    )
}
