import React from 'react'

const Empty = ({name}) => {
    return (
        <div className='h-30 flex text-base items-center justify-center text-dark dark:text-light'>
            There's no {name} yet
        </div>
    )
}

export default Empty