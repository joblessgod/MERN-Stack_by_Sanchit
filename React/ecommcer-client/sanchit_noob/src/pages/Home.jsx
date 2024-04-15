import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



export default function Home() {
    return (
        <>

            {/* Button Nav */}
            <nav className='flex justify-center gap-20 h-[40px] items-center' >
                <div>
                    <Link className='font-Josefin text-[34px] text-primary-dark leading-auto' to="/">Hekto</Link>
                </div>

                <div className='flex justify-center gap-5 font-Lato'> {/* flex grow property */}
                    <Link to="/" className='text-[#FB2E86]'>Home<FaAngleDown className='inline-block' /></Link>
                    <Link to="/pages" id='hoverPage'>Pages</Link>
                    <Link to="/products" id='hoverPage'>Products</Link>
                    <Link to="/Blogs" id='hoverPage'>Blogs</Link>
                    <Link to="/Contact" id='hoverPage'>Contact</Link>
                </div>

                <form className='flex'>
                    <input
                        className='border-4 border-[#E7E6EF] rounded-sm px-2'
                        type="text"
                        placeholder='Search' />
                    <button className=' bg-secondary px-2'><IoSearch className='inline-block' /></button>
                </form>
            </nav>


        </>
    )
}
