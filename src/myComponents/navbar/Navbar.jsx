import { navLinks } from '@/constants/data'
import { Layers } from 'lucide-react'
import React, { useMemo } from 'react'
import { NavLink } from 'react-router'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    
    const links = useMemo(()=> navLinks, [])

    return (
        <header className='py-5 shadow-md'>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <span className='text-primary font-semibold text-2xl'>Elnemr</span>
                    <span>.</span>
                    <span className='text-sm text-common font-semibold'>Dev</span>
                </div>
                <nav className="items-center gap-4 sm:flex">
                    <ul className="links hidden gap-4 items-center sm:flex">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.to} className={'text-common font-semibold'}>
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mobile-list block sm:hidden">
                        <DropdownMenu className='p-4'>
                            <DropdownMenuTrigger render={<Button variant="flat" className="cursor-pointer font-bold text-xl">
                                <Layers size={20} />
                            </Button>} />
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuGroup>
                                    {
                                        links.map((link, index) => (
                                            <DropdownMenuItem key={index}>
                                                <NavLink to={link.to} className={'text-common font-semibold px-2 my-1 w-full'}>
                                                    {link.title}
                                                </NavLink>
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {/* <div className="theme">
                        <Braces size={20} />
                    </div> */}
                </nav>

            </div>
        </header>
    )
}

export default Navbar