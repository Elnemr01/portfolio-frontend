import React from 'react'

const Title = ({text,subTitle}) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-primary-1 font-semibold text-2xl md:text-4xl'>{text}</h1>
            <p className='text-dark dark:text-secondary-1'>{subTitle}</p>
        </div>
    )
}

export default Title

