import { About } from '@/myComponents/about/About'
import Background from '@/myComponents/background/Background'
import Contact from '@/myComponents/contact /Contact'
import Landing from '@/myComponents/landing/Landing'
import ProjectSection from '@/myComponents/projectSection/ProjectSection'
import Skills from '@/myComponents/skills/Skills'
import React from 'react'

const Home = () => {
    return (
        <div className='p-4 my-4'>
            <Landing />
            <About/>
            <Skills/>
            <Background/>
            <ProjectSection/>
            <Contact/>
        </div>
    )
}

export default Home