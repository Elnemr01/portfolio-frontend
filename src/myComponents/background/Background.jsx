import React from 'react'
import Title from '../title/Title'
import Eduction from '../eduction/Eduction'
import Experinces from '../experinces/Experinces'

const Background = () => {
    return (
        <div id='background' className='p-4 my-16'>
            <Title text={"Background"} subTitle="Learning through education, growing through experience" />
            <div className="container">
                <Eduction/>
                <Experinces/>
            </div>
        </div>
    )
}

export default Background