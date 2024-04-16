import React from 'react'
import { Link, Outlet } from 'react-router-dom'

/* Icons & Banners*/
import { IoMail } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
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

                {/* Button Home Nav */}
                <nav className='flex justify-center gap-[227px] h-[40px] items-center' >
                    <div className='gap-[90px] flex items-center'>

                        <div>
                            <Link className='font-Josefin text-[34px] text-primary-dark leading-auto' to="/">Hekto</Link>
                        </div>

                        <div className='flex justify-center gap-[35px] font-Lato'> {/* flex grow property */}
                            <Link to="/" className='text-[#FB2E86]'>Home<FaAngleDown className='inline-block' /></Link>
                            <Link to="/pages" id='hoverPage'>Pages</Link>
                            <Link to="/products" id='hoverPage'>Products</Link>
                            <Link to="/Blogs" id='hoverPage'>Blogs</Link>
                            <Link to="/Contact" id='hoverPage'>Contact</Link>
                        </div>

                    </div>

                    <form className='flex'>
                        <input
                            className='border-4 border-[#E7E6EF] rounded-sm px-2'
                            type="text"
                            placeholder='Search' />
                        <button className=' bg-secondary px-2'><IoSearch className='inline-block' /></button>
                    </form>
                </nav>


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
