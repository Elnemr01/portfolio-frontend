import React, { useMemo, useState } from 'react'
import Title from '../title/Title'
import { Button } from '@/components/ui/button'
import { skills } from '@/constants/data';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Skills = () => {
    
    const [selectedBtn,setBtn]=useState("frontend");
    const mySkills=useMemo(()=> skills,[]);


    return (
        <section id='skills' className='mt-8 p-4'>
            <Title text={'Skills'} subTitle={"Tools and technologies I work with"}/>
            <div className="container border border-dark dark:border-secondary rounded-lg p-4 mt-8">
                <div className="filter flex gap-4 mb-4 items-center justify-between">
                    <h2 className='font-semibold text-xl sm:text-3xl'>
                        <span className='text-primary-1 font-normal'>
                            {selectedBtn.charAt(0).toUpperCase() + selectedBtn.slice(1)}
                        </span> Technologies
                    </h2>
                    <DropdownMenu className='p-4'>
                        <DropdownMenuTrigger render={<Button variant="flat" className="cursor-pointer font-semibold text-base sm:text-lg border border-dark dark:border-secondary rounded-full p-2 px-4">
                            Filter
                        </Button>} />
                        <DropdownMenuContent className="w-40" align="start">
                            <DropdownMenuGroup>
                                <Button className={`p-4 rounded-sm
                                    text-lg cursor-pointer w-full mt-2
                                    ${selectedBtn==='frontend' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('frontend')}>
                                        Frontend
                                    </Button>
                                <Button className={`p-4 rounded-sm
                                    text-lg cursor-pointer w-full mt-2
                                    ${selectedBtn==='backend' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('backend')}>
                                        Backend
                                    
                                    </Button>
                                <Button className={`p-4 rounded-sm
                                    text-lg cursor-pointer w-full mt-2
                                    ${selectedBtn==='others' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('others')}>
                                        Others & Tools
                                </Button>
                                
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/* skills */}
                <div className="skills flex gap-4 flex-wrap">
                    {
                        skills.filter(skill=>skill.catogry.toLowerCase()===selectedBtn).map((skill)=>(
                            <div key={skill.id} className="skill p-2 py-0 border border-dark dark:border-secondary rounded-full">
                                <h4 className='text-base font-semibold'>{skill.skillName}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills