import React, { useMemo } from 'react'
import MessageForm from './MessageForm'
import { contact } from '@/constants/data'
import Title from '../title/Title';

const Contact = () => {
    const links=useMemo(()=> contact,[] );


    return (
        <div id='contact' className='contact p-4 my-16'>
            <Title text={'Contact Me'} subTitle={"Have a project in mind or just want to say hi? Let's talk."}/>
            <div className="container flex flex-col md:grid md:grid-cols-2 mt-8 gap-8">
                <ul className="links flex flex-col gap-4">
                    {
                        links.map((link)=> {
                            const Icon = link.icon;
                            return (
                                <li key={link.id} className='flex items-center gap-2 p-4 cursor-pointer w-full flex-1
                                border border-dark dark:border-secondary rounded-lg hover:-translate-y-1 transition-all '>
                                    <span className='p-2 bg-primary rounded-md text-light'>
                                        <Icon size={20} />
                                    </span>
                                    <a href={link.link} className='text-dark dark:text-secondary text-xl font-semibold w-full flex-1'
                                    target='_blank' rel="noreferrer">{link.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <MessageForm />
            </div>
        </div>
    )
}

export default Contact