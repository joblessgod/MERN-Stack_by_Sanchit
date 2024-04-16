import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

/* Icons & Banners*/
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Banners from "../data/Banners"


export default function Home() {
    return (
        <>
            {/* Button Home Nav */}
            <nav className='flex justify-center gap-[227px] h-[40px] items-center' >
                <div className='gap-[90px] flex'>
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

            {/* Body Part */}

            <div>
                <Banners />
            </div>


            <div className='w-[#20px] h-[#20px] bg-[#313338] border-black '>

            </div>

        </>
    )
}
