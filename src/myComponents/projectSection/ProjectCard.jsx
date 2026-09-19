import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { GitBranchMinus, Link, Link2, Link2Icon } from 'lucide-react'



const ProjectCard = ({project,first}) => {
    return (
        <div className='card'>
            <Accordion
                type="single"
                defaultValue={`${first ? 'opened' : ''}`}
                className="w-full border border-dark p-4 dark:border-secondary rounded-lg cursor-pointer">
                <AccordionItem value={'opened'}>
                    <AccordionTrigger className='flex gap-4'>
                        <div className="image w-30 hidden md:block">
                            <img src={project.image} alt="Demo photo" loading='lazy' className='w-full h-full object-cover'/>
                        </div>
                        <div className="front flex flex-col gap-2 text-base">
                            <h2 className='text-lg md:text-2xl text-primary '>{project.title}</h2>
                            <h3 className=' text-dark dark:text-secondary'>{project.subTitle}</h3>
                            <div className="links flex items-center gap-4">
                                {project.github && <a href={project.github} target='_blank' rel='noopener noreferrer'
                                className='flex items-center text-light gap-2 dark:text-dark px-2 py-1 font-semibold bg-dark dark:bg-light rounded-md cursor-pointer'>
                                    <GitBranchMinus size={20} className="text-"/>
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
                            <h3 className='text-lg font-semibold text-dark dark:text-secondary'>Description</h3>
                            <ul className=' flex flex-col gap-3 list-disc pl-4 text-base'>
                                {
                                    project.description.map((desc, index) => (
                                        <li key={index} className=' text-dark dark:text-secondary'>{desc}</li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className="skills my-4 px-4">
                            <h3 className='text-lg font-semibold text-dark dark:text-secondary'>Skills</h3>
                            {
                                project?.skills.filter((skill) => skill.category === 'frontend').length > 0 && 
                                <ul className=' flex gap-1 text-base'>
                                    <li className='font-semibold'>Frontend : </li>
                                    {
                                        project?.skills.filter((skill) => skill.category === 'frontend').map((skill, index) => (
                                            <li key={index} className=' text-dark dark:text-secondary '>
                                                {
                                                    index === project?.skills.filter((skill) => skill.category === 'frontend').length - 1 ? skill.skillName : `${skill.skillName} , `
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                            {
                                project?.skills.filter((skill) => skill.category === 'backend').length > 0 && 
                                <ul className=' flex gap-3 text-base'>
                                    <li className='font-semibold'>Backend : </li>
                                    {
                                        project?.skills.filter((skill) => skill.category === 'backend').map((skill, index) => (
                                            <li key={index} className=' text-dark dark:text-secondary '>
                                                {
                                                    index === project?.skills.filter((skill) => skill.category === 'backend').length - 1 ? skill.skillName : `${skill.skillName} , `
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