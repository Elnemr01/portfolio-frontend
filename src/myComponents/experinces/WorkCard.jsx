import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar, MapPin } from 'lucide-react'



const WorkCard = ({card}) => {
    return (
        <div className='card'>
            <Accordion
                type="single"
                defaultValue={`${card.id==='01' ? 'opened' : ''}`}
                className="w-full border border-dark p-4 dark:border-secondary rounded-lg cursor-pointer">
                <AccordionItem value={'opened'}>
                    <AccordionTrigger>
                        <div className="front flex flex-col gap-2 text-base">
                            <h2 className='text-2xl text-primary'>{card.title}</h2>
                            <h3 className='text-dark dark:text-secondary'>{card.subtitle}</h3>
                            <div className='flex gap-6 '>
                                <p className=' text-dark dark:text-secondary flex items-center gap-2'> 
                                    <MapPin className="" size={15} />
                                    {card.location}
                                </p>
                                <p className=' text-dark dark:text-secondary flex items-center gap-2'>
                                    <Calendar className='' size={15}/>
                                    {card.duration}</p>
                            </div>
                            <p className=' text-dark dark:text-secondary'>{card.subTitle}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className=' flex flex-col gap-3 list-disc pl-4 text-base'>
                            {
                                card.description.map((desc, index) => (
                                    <li key={index} className=' text-dark dark:text-secondary'>{desc}</li>
                                ))
                            }
                        </ul>
                    </AccordionContent>
                </AccordionItem>
        </Accordion>
        </div>
    )
}

export default WorkCard