import { ArrowLeft, ArrowLeftIcon, ArrowRight } from 'lucide-react'
import React from 'react'

const Pagination = ({response, page,setFun,name}) => {
    return (
        <div className="butns flex justify-between mt-2 p-4">
            {<button onClick={()=> setFun(old => old-1)} type="button" 
                className={`border border-dark rounded-md w-fit dark:text-light dark:border-light p-4 py-2 ${page <= 1 ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}>
                <ArrowLeft size={15} className='dark:text-light'/>
            </button> }
            { <button 
            className={`border border-dark rounded-md w-fit dark:text-light dark:border-light p-4 py-2
                ${response?.data?.page * response?.data?.limit >= response?.data?.total ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
            onClick={()=> setFun(old => old+1)} type="button">
                <ArrowRight size={15} className='dark:text-light'/>
            </button>}
        </div>
    )
}

export default Pagination