import { Calendar, GraduationCap } from 'lucide-react'
import React from 'react'

const Eduction = () => {
    return (
        <div className='eduction mt-8'>
            <div className="title flex items-center gap-2">
                <GraduationCap size={25} className='text-primary-1'/>
                <h2 className='text-dark dark:text-secondary text-2xl font-semibold'>Education</h2>
            </div>
            <div className="text my-4 flex flex-col p-4 border border-dark dark:border-secondary rounded-lg">
                <h3 className='text-xl font-semibold'>Bachelor of Science in Computer & Control Systems Engineering</h3>
                <p className='text-lg font-normal'>
                    Faculty of Engineering, Mansoura University
                </p>
                <p>
                    GPA: 3.6 / 4.0 • Excellent with Honors
                </p>
                <p className='flex items-center gap-2'>
                    <Calendar size={15} />
                    Sep 2021 – Jun 2026
                </p>
            </div>
        </div>
    )
}

export default Eduction