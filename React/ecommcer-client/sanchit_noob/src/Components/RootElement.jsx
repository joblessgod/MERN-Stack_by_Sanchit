import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { IoMail } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


export default function RootElement() {
    return (
        <>
            <div>
                {/* upper Nav */}
                <nav className='bg-[#7E33E0] text-white flex justify-center gap-10 h-[44px]'>
                    <div className=''>
                        <a href="mailto:mhhasanul@gmail.com"> <IoMail className='inline-block align-middle' /> mhhasanul@gmail.com</a>
                    </div>

                    <div className='flex gap-3'>
                        <span className='font-sans'>English<FaAngleDown className='inline-block' /></span>
                        <span className='font-sans'>USD<FaAngleDown className='inline-block' /></span>
                        <Link to="/login" className='font-sans'>Login <IoLogIn className='inline-block' /></Link>
                        <span className='font-sans'>Wishlist <FaHeart className='inline-block' /></span>
                        <span className='font-sans'><FaCartArrowDown className='inline-block' /></span>
                    </div>
                </nav>

                {/* Button Nav */}
                <nav className='flex justify-center gap-20 h-[40px] '>
                    <div>
                        <Link to="/">Hekto</Link>
                    </div>

                    <div className='flex justify-center gap-5'>
                        <Link to="/">Home<FaAngleDown className='inline-block' /></Link>
                        <Link to="/pages">Pages</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/Blogs">Blogs</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                    <div>
                        <input
                            className='border-4 border-indigo-300/25'
                            type="text"
                            placeholder='Search' /> <IoSearch
                            className='inline-block bg-[#FB2E86]' />
                    </div>
                </nav>
            </div>

            <Outlet />

            <footer>
                <p>This is a very small footer, yeh this is :)</p>
            </footer>
        </>
    )
}
