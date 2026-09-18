import React, { useMemo, useState } from 'react'
import Title from '../title/Title'
import { Button } from '@/components/ui/button'
import { skills } from '@/constants/data';

const Skills = () => {
    
    const [selectedBtn,setBtn]=useState("frontend");
    const mySkills=useMemo(()=> skills,[])
    return (
        <section id='skills' className='mt-8 p-4'>
            <Title text={'Skills'} subTitle={"Tools and technologies I work with"}/>
            <div className="container border border-dark dark:border-secondary rounded-lg p-4 mt-8">
                <div className="filter flex gap-4 justify-center my-4 ">
                    <Button className={`p-4 rounded-sm
                        text-lg cursor-pointer
                        ${selectedBtn==='frontend' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('frontend')}>
                            Frontend
                        </Button>
                    <Button className={`p-4 rounded-sm
                        text-lg cursor-pointer
                        ${selectedBtn==='backend' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('backend')}>
                            Backend
                        
                        </Button>
                    <Button className={`p-4 rounded-sm
                        text-lg cursor-pointer
                        ${selectedBtn==='others' ? 'bg-primary text-light' : ' bg-dark text-light dark:bg-light dark:text-dark'}`} onClick={()=>setBtn('others')}>
                            Others & Tools
                        </Button>
                </div>
                {/* skills */}
                <div className="skills">
                    {
                        skills.filter(skill=>skill.catogry.toLowerCase()===selectedBtn).map((skill)=>(
                            <div key={skill.id} className="skill p-4 m-4 border border-dark dark:border-secondary rounded-lg">
                                <h3 className='text-lg font-semibold'>{skill.skillName}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills