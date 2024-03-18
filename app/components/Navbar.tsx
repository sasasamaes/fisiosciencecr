"use client"
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Blog', href: '/blog' }
]

export default function Navbar() {
  const pathname = usePathname()
  const { handleCartClick } = useShoppingCart();

  return (
   <header className="mb-8 border-b">
    <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
      <Link href="/">
        <h1 className="text-2xl font-bold "><span
         className="text-primary-light dark:text-primary-dark"
        >Fisio</span> <span className="text-primary">Science</span> Cr</h1>
      </Link>
      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        {
          links.map((link, index) => (
            <div key={index}>
              {link.href === pathname ? (
              <Link href={link.href} className="text-lg font-semibold text-primary">
                {link.name}
              </Link>
              ) :  (
                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                  {link.name}
                </Link>
              )}
            </div>
          ))
        }
      </nav>
      <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
    </div>
   </header>
  ) 
}
