import { contact, myProjects } from '@/constants/data'
import ProjectCard from '@/myComponents/projectSection/ProjectCard'
import { ArrowBigLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const AllProjects = () => {
    return (
        <section>
            <div className="container flex flex-col gap-4 mt-8">
                <div className="arrow border border-dark rounded-md w-fit dark:text-light dark:border-light">
                    <Link to='/' className='flex items-center gap-2 px-2 py-2'>
                        <ArrowBigLeft size={15} className='dark:text-light'/> 
                    </Link>
                </div>
                <h1 className='text-lg md:text-2xl font-semibold'>
                    Browse all of latest projects below. You can click on each project to learn more about it.
                    if you want to see more projects, you can check out <span className='text-primary-1 underline'>
                        <a href={contact[2].link} target="_blank" rel="noopener noreferrer">my GitHub profile</a></span>.
                </h1>
                {
                    myProjects.map((project)=> <ProjectCard key={project.id} project={project} first={project.id === '01'} /> )
                }
            </div>
        </section>
    )
}

export default AllProjects