import React from 'react'

const MessageForm = () => {
    return (
        <div className='message border border-dark dark:border-secondary rounded-lg p-4'>
            <div className="title text-2xl font-semibold text-dark dark:text-light mb-4">
                Quick Message
            </div>
            <form className='p-2 flex flex-col gap-4'>
                <input type="text" placeholder='Your Name' className='p-2 border border-x-transparent border-t-transparent border-dark dark:border-secondary outline-none text-dark dark:text-light'/>
                <input type="email" placeholder='Your Email' className='p-2 border border-x-transparent border-t-transparent border-dark dark:border-secondary  outline-none text-dark dark:text-light'/>
                <textarea name="" id="" cols="30" rows="5" placeholder='Your Message' className='p-2 border border-x-transparent border-t-transparent border-dark dark:border-secondary outline-none text-dark dark:text-light'></textarea>
                <button type='submit' className='bg-primary text-light p-2 rounded-lg font-semibold'>Send</button>
            </form>
        </div>
    )
}

export default MessageForm