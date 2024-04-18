import React from "react";
import { Link, Outlet } from "react-router-dom";

/* Icons & Banners*/
import { IoMenu } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Header() {
  return (
    <>
      <header className="">
        {/* upper Nav */}
        <div className=" bg-primary">
          <nav className="container flex h-[44px] items-center justify-between gap-10 text-white">
            <div className="fflex w-full items-center justify-between lg:w-auto lg:gap-[90px]">
              <a href="mailto:mhhasanul@gmail.com">
                <IoMail className="inline-block align-middle" />{" "}
                mhhasanul@gmail.com
              </a>
              <a href="mailto:mhhasanul@gmail.com">
                <MdOutlinePhoneInTalk className="inline-block align-middle" />{" "}
                (12345)67890
              </a>
            </div>

            <div className="flex gap-3 ">
              <span className="font-sans">
                English
                <FaAngleDown className="inline-block" />
              </span>
              <span className="font-sans">
                USD
                <FaAngleDown className="inline-block" />
              </span>
              <Link to="/login" className="font-sans">
                Login <IoLogIn className="inline-block" />
              </Link>
              <span className="font-sans">
                Wishlist <FaHeart className="inline-block" />
              </span>
              <span className="font-sans">
                <FaCartArrowDown className="inline-block" />
              </span>
            </div>
          </nav>
        </div>

        {/* Button Home Nav */}
        <nav className=" container justify-between   pb-[12px] pt-[18px] sm:flex ">
          <div className="flex  w-full   items-center md:gap-4 ">
            <a
              className="leading-auto font-Josefin text-[34px] text-primary-dark"
              href="/"
            >
              Hekto
            </a>

            <div className="hidden md:flex md:gap-4">
              {/* flex grow property */}

              <Link to="/" className="text-[#FB2E86]">
                Home
                <FaAngleDown className="inline-block" />{" "}
              </Link>

              <Link to="/pages" className="hover:text-secondary">
                Pages{" "}
              </Link>

              <Link to="/products" className="hover:text-secondary">
                Products{" "}
              </Link>

              <Link to="/blogs" className="hover:text-secondary">
                Blogs{" "}
              </Link>

              <Link to="/contact" className="hover:text-secondary">
                Contact{" "}
              </Link>
            </div>
            <IoMenu className="text-3xl md:hidden " />
          </div>

          <form className="hidden lg:flex">
            <input
              className="border-primary-light border px-2 py-1 focus:border-secondary focus:outline-none focus:transition-all "
              type="text"
              placeholder="Search"
            />
            <button className=" bg-secondary px-2">
              <IoSearch className="inline-block" />
            </button>
          </form>
        </nav>
      </header>

      <Outlet />

      <footer>
        {/* Buttom Navigation */}
        <div></div>

        {/* Copyright Claim */}
        <div></div>
      </footer>
    </>
  );
}
