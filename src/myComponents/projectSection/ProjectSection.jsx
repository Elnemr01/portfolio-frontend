import React, { useMemo } from 'react'
import Title from '../title/Title'
import { myProjects } from '@/constants/data'
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useInView } from 'react-intersection-observer';
import useGetProjects from '@/hooks/projects/useGetProjects';
import Error from '../models/Error';
import Loading from '../models/Loading';

const ProjectSection = () => {

    const {inView,ref}=useInView({
        rootMargin: '500px',
    })
    const {projects: projects, isLoading, isError} = useGetProjects({page: 1,inView});

    if(isError) <Error/>
    return (
        <section id='projects' className='mt-8 p-4' ref={ref}>
            <Title text={'Projects'} subTitle={"A selection of things I've built and shipped"}/>
            {
                isLoading ?
                    <Loading/>
                :
                <div className="container flex flex-col gap-4 mt-8">
                    {
                        projects?.data?.projects?.slice(0, 3).map((project,i)=> <ProjectCard key={project._id} project={project} first={i === 0} /> )
                    }
                </div>
            }
            <div className="flex justify-center">
                <Button className={"rounded-md border mx-auto my-4 w-fit font-bold text-lg px-4 py-5"}>
                    <Link to="/projects">
                        More Projects
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default ProjectSection