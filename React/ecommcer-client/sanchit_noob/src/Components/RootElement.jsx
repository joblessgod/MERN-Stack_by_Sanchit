import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { IoMail } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";


export default function RootElement() {
    return (
        <>
            <header>
                {/* upper Nav */}
                <div className=' bg-primary'>
                    <nav className='container text-white flex justify-between gap-10 h-[44px] items-center'>
                        <div className='font-Josefin flex justify-between gap-10'>
                            <a href="mailto:mhhasanul@gmail.com"> <IoMail className='inline-block align-middle' /> mhhasanul@gmail.com</a>
                            <a href="mailto:mhhasanul@gmail.com"> <MdOutlinePhoneInTalk className='inline-block align-middle' /> (12345)67890</a>
                        </div>

                        <div className='flex gap-3 '>
                            <span className='font-sans'>English<FaAngleDown className='inline-block' /></span>
                            <span className='font-sans'>USD<FaAngleDown className='inline-block' /></span>
                            <Link to="/login" className='font-sans'>Login <IoLogIn className='inline-block' /></Link>
                            <span className='font-sans'>Wishlist <FaHeart className='inline-block' /></span>
                            <span className='font-sans'><FaCartArrowDown className='inline-block' /></span>
                        </div>
                    </nav>
                </div>


            </header>

            <Outlet />

            <footer>
                {/* Buttom Navigation */}
                <div>

                </div>
                
                {/* Copyright Claim */}
                <div>
                    
                </div>
            </footer>
        </>
    )
}
