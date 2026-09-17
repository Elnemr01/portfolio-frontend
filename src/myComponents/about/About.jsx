import React from 'react'
import Title from '../title/Title'
import { MonitorSmartphone, Server, Gauge, Network } from "lucide-react"
import Card from './Card'

export const About = () => {
    return (
        <div id='about' className='my-16'>
            <Title text="About Me" subTitle="Get to know who I am and what I do."/>
            <div className="container content flex flex-col md:grid md:grid-cols-2 gap-16 mt-10">
                <div className="left text-dark dark:text-secondary text-lg md:text-xl flex flex-col gap-4 border border-dark rounded-md
                dark:border-secondary p-4">
                    <p>
                        I'm a frontend Developer specializing in <span className='text-primary-1 font-semibold'> React and Next.js </span> ,who translates design concepts into scalable,
                        responsive web applications.
                    </p>
                    <p>
                        Proficient in <span className='text-primary-1 font-semibold'>TypeScript, Tailwind CSS, and Redux Toolkit</span> for building clean, optimized, and performant user interfaces.
                    </p>
                    <p>
                        Experienced in leveraging <span className='text-primary-1 font-semibold'>AI-powered design tools such a s Stitch</span> to independently design and build UI
                        components, bridging the gap between design and development.
                    </p>
                    <p>
                        Passionate about delivering fast, accessible, and maintainable web solutions
                    </p>
                    <p>
                        I’m currently expanding into <span className='text-primary-1 font-semibold'>backend development with Node.js</span>, working with databases, and building full-stack applications.
                    </p>
                </div>

                <div className="right flex flex-col gap-2">
                    <Card
                            title="Frontend"
                            description='I build responsive, accessible interfaces with modern tools like React and Next.js,
                            focused on clean component architecture. Every UI I ship pays attention to the small details — smooth interactions, consistent spacing, and a feel that holds up across devices.'>
                            <MonitorSmartphone className=" text-primary mb" />
                    </Card>

                    <Card
                            title="Backend"
                            description='I design and build scalable APIs that stay clean and maintainable as the product grows. My focus is solid database design, secure authentication, and endpoints that are simple and predictable for any frontend to consume.'>
                            <Server className=" text-primary mb" />
                    </Card>

                    <Card
                            title="Performance & SEO"
                            description='I treat SEO and performance as core requirements from day one, not an afterthought bolted on later. That means semantic HTML, optimized asset loading, and techniques like lazy loading and server-side rendering to keep things fast and discoverable.'>
                            <Gauge className=" text-primary mb" />
                    </Card>

                    <Card
                            title="State Architecture"
                            description="I design state management that stays predictable even as an app's complexity grows, using tools like Redux, Zustand, or Context depending on what the project actually needs. Clear data flow means easier debugging and a codebase that doesn't turn into a mess six months in.">
                            <Network className=" text-primary mb" />
                    </Card>
                </div>
            </div>
        </div>
    )
}
