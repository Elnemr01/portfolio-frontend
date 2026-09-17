import { workExperinces } from '@/constants/data'
import { BadgeAlertIcon, BaggageClaim, FaceExpressionless } from 'lucide-react'
import React, { useMemo } from 'react'
import WorkCard from './WorkCard'

const Experinces = () => {
    const experience=useMemo(()=> workExperinces,[])
    return (
        <div className='experinces mt-8'>
            <div className="title flex items-center gap-2">
                <BadgeAlertIcon size={25} className='text-primary-1'/>
                <h2 className='text-dark dark:text-secondary text-2xl font-semibold'>Work Experinces</h2>
            </div>
            <div className="text my-4 flex flex-col gap-4">
                {
                    experience.map((card)=> <WorkCard key={card.id} card={card} />)
                }
            </div>
        </div>
    ) 
}

export default Experinces