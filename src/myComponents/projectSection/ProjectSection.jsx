import React, { useMemo } from 'react'
import Title from '../title/Title'
import { myProjects } from '@/constants/data'
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const ProjectSection = () => {

    const projects = useMemo(()=> myProjects,[]);

    return (
        <section id='projects' className='mt-8 p-4'>
            <Title text={'Projects'} subTitle={"A selection of things I've built and shipped"}/>
            <div className="container flex flex-col gap-4 mt-8">
                {
                    projects.map((project)=> <ProjectCard key={project.id} project={project} first={project.id === '01'} /> )
                }
            </div>
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