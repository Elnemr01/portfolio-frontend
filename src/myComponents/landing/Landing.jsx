import React from 'react'

const Landing = () => {
    return (
        <section id='home'>
                <div className="container">
                    <div className="sec-left">
                        text
                    </div>
                    <div className="sec-right flex justify-center items-center relative">
                        <span className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></span>
                        <img
                            src="./images/profile.jpg"
                            alt="profile picture"
                            loading="lazy" 
                            className='w-40 h-40'
                        />
                        <span className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></span>
                    </div>
                </div>
        </section>
    )
}

export default Landing