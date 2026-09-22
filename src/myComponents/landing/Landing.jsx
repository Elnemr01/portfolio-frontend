import { Button } from '@/components/ui/button'
import { File, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Landing = () => {
    return (
        <section id='home' className='h-[85vh]'>
                <div className="container flex flex-col-reverse md:grid md:grid-cols-2 gap-10 h-full">
                    <div className="sec-left flex flex-col justify-center gap-5">
                        <div className="text text-secondary space-y-4 text-lg">
                            <span className='text-primary font-semibold text-3xl sm:text-5xl mb-4 inline-block'>I'm Ahmed Elnemr</span><br/>
                            A passionate <span className='text-2xl font-semibold dark:text-primary-1'>Frontend Developer</span> with a strong focus on creating visually appealing and user-friendly
                            web applications. I specialize in crafting responsive and interactive interfaces that enhance the
                            overall user experience.
                        </div>
                        <div className="btns flex gap-5 items-center">
                            <Button type="button" className={'py-5 rounded-sm bg-primary-1 flex items-center gap-2 hover:bg-primary-1 dark:text-light'}>
                                <Phone />
                                <a href="#contact" className='text-'>Contact Me</a>
                            </Button>
                            <Button type="button" className={'py-5 rounded-sm flex items-center gap-2 bg-dark hover:bg-dark dark:bg-light'}>
                                <File />
                                <a href="./Ahmed_Elnemr_Frontend.pdf" className=''
                                target='_blank'>Show My Resume</a>
                            </Button>
                        </div>
                    </div>
                    <div className="sec-right flex justify-center items-center relative">
                        <div className='relative'>
                            <span className="absolute w-40 h-40 border-4 bg-transparent border-t-primary
                            border-r-primary -top-5 -right-5 border-transparent"></span>
                            <img
                                src="./profile.jpeg"
                                alt="profile picture"
                                loading="lazy"
                                className='w-70'
                            />
                            <span className="absolute -bottom-5 -left-5 w-40 h-40 border-4 bg-transparent
                            border-l-primary border-b-primary border-transparent"></span>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Landing