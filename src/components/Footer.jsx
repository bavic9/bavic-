import React from 'react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className='shadow-sm border-t border-ash fixed bottom-0 w-full bg-deepBlue'>
                <ul className='flex text-text justify-between items-center lg:px-10'>
                    <div className='flex -sm:w-screen items-center'>
                        <div className=' lg:p-4 md:px-10 px-4 py-4 sm:flex-1/2 font-bold'>
                            find me in:
                        </div>
                        <a
                            className='hidden lg:block p-4 '
                            href="https://x.com/bavic_?s=21&t=HVvZ6f8dvZuAlIpWRG2RIg" target='blank'>
                            <FaXTwitter className='text-lg' />
                        </a>
                        <a
                            className='hidden lg:block p-4'
                            href="https://www.linkedin.com/in/adeyeye-adebayo-63583b267/" target='blank'>
                            <FaLinkedinIn className='text-lg' />
                        </a>
                    </div>
                    <a
                            className='lg:hidden block py-4 px-7 border-ash'
                            href="https://x.com/bavic_?s=21&t=HVvZ6f8dvZuAlIpWRG2RIg" target='blank'>
                            <FaXTwitter className='text-lg' />
                        </a>
                        <a
                            className='lg:hidden block py-4 px-7 border-ash'
                            href="https://www.linkedin.com/in/adeyeye-adebayo-63583b267/" target='blank'>
                            <FaLinkedinIn className='text-lg' />
                        </a>
                    <div className='py-4 px-6 text-center lg:border-l border-ash flex gap-2 items-center'>
                        <p className='hidden md:block font-semibold'>bavic9</p>
                        <a
                           
                            href="https://github.com/bavic9" target='blank'>
                            <FaGithub className='text-xl' />
                        </a>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Footer