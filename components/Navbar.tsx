import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import { Menu } from '@headlessui/react'


function Navbar() {
  return (
    <nav className="justify-between	flex  items-center navbar text-white">
        <div className="flex-1 flexStart gap-10">
            <Link href="#">
            <Image src="/Images/LZS_logo_90.png" width={144} height={43} alt="Flexible"/>
            </Link>
        </div>
        <ul className="hidden xl:flex  text-small gap-7">
          {NavLinks.map((link)=>(
            <Link href={link.href} key={link.key}>
            <li>
                {link.text}
            </li>
            </Link>
          ))
            
          }
        </ul>
    </nav>
  )
}

export default Navbar