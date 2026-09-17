import React from 'react'

const Card = ({children , title , description}) => {
    return (
        <div className="px-4 py-2 border border-dark rounded-md dark:border-secondary">
            {children}
            <h3 className='text-dark dark:text-light font-semibold text-lg my-1'>{title}</h3>
            <p className='text-dark dark:text-secondary text-sm '>{description}</p>
        </div>
    )
}

export default Card