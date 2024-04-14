import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RootElement() {
    return (
        <>
            <div>

                <header>
                    <a href="/">home</a>
                    <a href="/about">about</a>
                
                    <Link to="/">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/blogs/habibi">latest blogs</Link>


                </header>
                <hr />
            </div>
            <Outlet/>


            <footer>
                this is footer
            </footer>
        </>
    )
}
