import React from 'react'
import footerLogo from "../../assets/logo-footer.png"
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'
import { TiSocialFacebookCircular } from 'react-icons/ti'

export default function () {
    return (
        <div className="bg-black">
            <footer className="footer bg-transparent sm:footer-horizontal text-neutral-content p-10 w-7xl mx-auto justify-between ">
                <div className=''>
                <p className='text-3xl flex flex-col underline'>Links:</p>
                <a href="#" className='mb-1 text-xl'><li className='list-none'>About BPL</li></a>
                <a href="#" className='mb-1 text-xl'><li className='list-none'>BPL Rules</li></a>
                <a href="#" className='mb-1 text-xl'><li className='list-none'>Stedium</li></a>
                <a href="#" className='mb-1 text-xl'><li className='list-none'>BPL Board Member</li></a>
                </div>
                <aside >
                    <img src={footerLogo} alt="" className='items-center mx-auto'/>
                    <p className="text-2xl text-center">
                        DREAM BPL
                        <br />
                        BPL Player Hiring Platform.
                    </p>
                </aside>
                <nav className='flex flex-col justify-center mx-auto text-center'>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-6">
                        <a className='text-2xl' href='https://www.instagram.com/arafat_always/'> <SlSocialInstagram/> </a>
                        <a className='text-2xl' href='https://www.linkedin.com/in/arafat-always/'> <SlSocialLinkedin/> </a>
                        <a className='text-3xl' href='https://www.facebook.com/arafatCodes'> <TiSocialFacebookCircular/> </a>
                    </div>
                    <div className='mt-8'>
                        <p className='text-2xl text-white text-left pb-2'>Newsletter</p>
                    <input type="text" className='bg-white p-2 text-black border-none rounded' placeholder='Your Email' />
                    <button  type='submit' className='ml-2 btn bg-green-500 text-white'>Send Email</button>
                </div>
                </nav>
            </footer>
        </div>
    )
}
