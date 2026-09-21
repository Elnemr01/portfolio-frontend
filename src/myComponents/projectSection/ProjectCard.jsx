import React, { useMemo } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GitBranch, Link2 } from 'lucide-react'



const ProjectCard = ({project,first}) => {
    const projectStatus =useMemo(()=> {
        return {
            'completed': 'bg-green-500 text-light',
            'in-progress': 'bg-yellow-500 text-light',
            'planned': 'bg-red-500 text-light',
        }
    },[])
    return (
        <div className='card'>
            <Accordion
                type="single"
                defaultValue={`${first ? 'opened' : ''}`}
                className="w-full border border-dark p-4 dark:border-secondary rounded-lg cursor-pointer">
                <AccordionItem value={'opened'}>
                    <AccordionTrigger className='flex gap-4'>
                        <div className="front flex flex-col gap-2 text-base">
                            <h2 className='text-lg md:text-2xl text-primary '>
                                {project.title}
                                <span className={`ml-4 text-sm font-semibold px-2 py-1 rounded-full
                                    ${projectStatus[project.status]}`}>{project.status.split('-').join(' ')}</span>
                            </h2>
                            <h3 className=' text-dark dark:text-secondary'>{project.subtitle}</h3>
                            <div className="links flex items-center gap-4">
                                {project.github && <a href={project.github} target='_blank' rel='noopener noreferrer'
                                className='flex items-center text-light gap-2 dark:text-dark px-2 py-1 font-semibold bg-dark dark:bg-light rounded-md cursor-pointer'>
                                    <GitBranch size={20} className="text-"/>
                                    <span>View Code</span>
                                </a>}
                                {project.live && <a href={project.live} target='_blank' rel='noopener noreferrer'
                                className='flex items-center text-light gap-2 dark:text-dark px-2 py-1 font-semibold bg-dark dark:bg-light rounded-md cursor-pointer'>
                                    <Link2 size={20} className="text-"/>
                                    <span>Live</span>
                                </a>}
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="description border border-y-dark dark:border-secondary border-transparent p-4 mt-4">
                            <h3 className='text-lg font-semibold text-dark dark:text-secondary mb-4'>Description</h3>
                            <ul className=' flex flex-col gap-3 list-disc pl-4 text-base'>
                                {
                                    project.description.map((desc, index) => (
                                        <li key={index} className=' text-dark dark:text-secondary'>{desc}</li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className="skills my-4 px-4">
                            <h3 className='text-lg font-semibold text-dark dark:text-secondary my-4'>Skills</h3>
                            {
                                project?.skills.filter((skill) => skill.catogery === 'frontend').length > 0 && 
                                <ul className=' flex gap-1 text-base flex-wrap'>
                                    <li className='font-semibold'>Frontend : </li>
                                    {
                                        project?.skills.filter((skill) => skill.catogery === 'frontend').map((skill, index) => (
                                            <li key={index} className=' text-dark dark:text-secondary'>
                                                {
                                                    index === project?.skills.filter((skill) => skill.catogery === 'frontend').length - 1 ? skill.skillName : `${skill.skillName} , `
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                            {
                                project?.skills.filter((skill) => skill.catogery === 'backend').length > 0 && 
                                <ul className=' flex gap-1 text-base flex-wrap mt-4'>
                                    <li className='font-semibold'>Backend : </li>
                                    {
                                        project?.skills.filter((skill) => skill.catogery === 'backend').map((skill, index) => (
                                            <li key={index} className=' text-dark dark:text-secondary '>
                                                {
                                                    index === project?.skills.filter((skill) => skill.catogery === 'backend').length - 1 ? skill.skillName : `${skill.skillName} , `
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            }

                        </div>
                    </AccordionContent>
                </AccordionItem>
        </Accordion>
        </div>
    )
}

export default ProjectCard