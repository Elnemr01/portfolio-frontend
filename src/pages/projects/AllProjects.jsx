import { contact } from '@/constants/data'
import useGetProjects from '@/hooks/projects/useGetProjects'
import Empty from '@/myComponents/models/Empty'
import Error from '@/myComponents/models/Error'
import Loading from '@/myComponents/models/Loading'
import Pagination from '@/myComponents/pagination/Pagination'
import ProjectCard from '@/myComponents/projectSection/ProjectCard'
import { ArrowBigLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

const AllProjects = () => {
    const [page,setPage] =useState(1);
    const {projects ,isLoading,isError} = useGetProjects({page,inView: true});

    if(isError) return <Error/>

    return (
        <section>
            <div className="container flex flex-col gap-4 my-8 pb-8">
                <div className="arrow border border-dark rounded-md w-fit dark:text-light dark:border-light">
                    <Link to='/' className='flex items-center gap-2 px-2 py-2'>
                        <ArrowBigLeft size={15} className='dark:text-light'/> 
                    </Link>
                </div>
                <h1 className='text-lg md:text-2xl font-semibold my-8'>
                    Browse all of latest projects below. You can click on each project to learn more about it.
                    if you want to see more projects, you can check out <span className='text-primary-1 underline'>
                        <a href={contact[2].link} target="_blank" rel="noopener noreferrer">My GitHub</a></span>.
                </h1>
                {
                    isLoading ? 
                    <Loading/>
                    :
                    projects?.data?.projects.length === 0 ?
                    <Empty name={'Projects'}/>
                    :
                    projects?.data?.projects.map((project,i)=> <ProjectCard key={project._id} project={project} first={i === 0} /> )
                }
                <Pagination response={projects} page={page} setFun={setPage} name='projects'/>
            </div>
        </section>
    )
}

export default AllProjects