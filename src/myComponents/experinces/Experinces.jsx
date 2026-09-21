import { BadgeAlertIcon, FaceExpressionless } from 'lucide-react'
import React from 'react'
import WorkCard from './WorkCard'
import useGetExperiences from '@/hooks/experiences/useGetExperiences'
import Error from '../models/Error'
import Loading from '../models/Loading'
import { useInView } from 'react-intersection-observer'

const Experinces = () => {

    const {ref,inView}=useInView({
        rootMargin: '400px'
    })
    const {experiences, isLoading, isError} = useGetExperiences({page: 1, inView});
    console.log(experiences)

    if(isError) return <Error />

    return (
        <div className='experinces mt-8' ref={ref}>
            <div className="title flex items-center gap-2">
                <BadgeAlertIcon size={25} className='text-primary-1'/>
                <h2 className='text-dark dark:text-secondary text-2xl font-semibold'>Work Experinces</h2>
            </div>
            {
                isLoading ?
                <Loading/>
                :
                <div className="text my-4 flex flex-col gap-4">
                    {
                        experiences?.data?.experiences?.map((card,i)=> <WorkCard key={card.id} card={card} first={i===0}/>)
                    }
                </div>
            }
        </div>
    ) 
}

export default Experinces