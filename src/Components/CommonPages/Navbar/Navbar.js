import React, { useState } from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import o from '../../../Assets/o.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='flex items-center justify-between bg-orange-400 px-12 h-20'>
            <Link to='/'><h1 className='whitespace-nowrap flex items-center text-3xl font-semibold font-poppins'>RKZ PHOT<img className='w-6' src={o} alt="" />GRAPHY</h1>
            </Link>
            <div className='toggler' onClick={() => setOpen(!open)}>
                {open ? <div>✕</div> : <div>☲</div>}
            </div>
            <div className={`${open ? 'nav-links-toggled' : 'nav-links'}`}>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/home'}>Home</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/services'}>Services</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/checkout'}>Check Out</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/blogs'}>Blogs</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/about'}>About</NavLink>


                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/'}>Log Out</NavLink>

                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/login'}>Login</NavLink>



            </div>
        </nav>
    );
};

export default Navbar;