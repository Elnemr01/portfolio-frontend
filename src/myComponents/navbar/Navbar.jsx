import { navLinks } from '@/constants/data'
import { Layers, Menu, Moon, Sun, Thermometer } from 'lucide-react'
import React, { useCallback, useMemo } from 'react'
import { NavLink } from 'react-router'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from '@/contextApi/ThemeProvider'

const Navbar = () => {

    const {theme,setTheme}=useTheme();
    
    const links = useMemo(()=> navLinks, [])

    const toggleTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark")
    }, [theme])

    return (
        <header className='py-5 shadow-md dark:shadow-primary fixed top-0 left-0  mx-auto w-full z-50 bg-background'>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <span className='text-primary font-semibold text-2xl'>Elnemr</span>
                    <span className='text-primary-1 font-semibold'>.</span>
                    <span className='text-dark dark:text-light font-semibold'>Dev</span>
                </div>
                <nav className=" items-center gap-4 flex">
                    <ul className="links hidden gap-4 items-center sm:flex">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.to} className={'text-dark dark:text-light font-semibold'}>
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mobile-list block sm:hidden">
                        <DropdownMenu className='p-4'>
                            <DropdownMenuTrigger render={<Button variant="flat" className="cursor-pointer font-bold text-xl">
                                <Menu size={20} />
                            </Button>} />
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuGroup>
                                    {
                                        links.map((link, index) => (
                                            <DropdownMenuItem key={index}>
                                                <a href={link.to} className={'text-dark dark:text-light font-semibold px-2 my-1 w-full'}>
                                                    {link.title}
                                                </a>
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="theme">
                        {theme === "dark" ? (
                            <Sun className="h-[1.2rem] w-[1.2rem] cursor-pointer" onClick={()=> toggleTheme()}/>
                        ) : (
                            <Moon className="h-[1.2rem] w-[1.2rem] cursor-pointer" onClick={()=> toggleTheme()}/>
                        )}
                    </div>
                </nav>

            </div>
        </header>
    )

}

export default Navbar