import { About } from '@/myComponents/about/About'
import Landing from '@/myComponents/landing/Landing'
import React from 'react'

const Home = () => {
    return (
        <div className='p-4 my-4'>
            <Landing />
            <About/>
        </div>
    )
}

export default Home