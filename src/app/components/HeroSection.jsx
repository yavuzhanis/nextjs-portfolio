"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font font-extrabold '><span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-gray-400'>Hello I&apos;m {""}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Yavuzhan',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Full Stack Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'Frontend Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className='text-[#a9c5b5] text-base sm:text-lg lg:text-xl mb-6'>  I am a full stack web developer with a passion for creating
                        interactive and responsive web applications.</p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-red-900     text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://github.com/yavuzhanis"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-red-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>

                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full w-[300px] h-[400px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            src="/images/heroImage.png" alt='hero image' width={300} height={300} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection
