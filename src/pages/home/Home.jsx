import { About } from '@/myComponents/about/About'
import Background from '@/myComponents/background/Background'
import Landing from '@/myComponents/landing/Landing'
import React from 'react'

const Home = () => {
    return (
        <div className='p-4 my-4'>
            <Landing />
            <About/>
            <Background/>
        </div>
    )
}

export default Home