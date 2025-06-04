"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] =  useState<number | null>(null)

    const navLinks = [
        {
            label: 'Home', path: '/'
        },
        {
            label: 'Categories',
            dropdown: [
                { label: 'Design', path: '/categories/design' },
                { label: 'Development', path: '/categories/development' },
                { label: 'Marketing', path: '/categories/marketing' },
            ]
        },
        {
            label: 'Find Jobs', path: '/findjobs'
        },
        {
            label: 'Post Jobs', path: '/postjobs'
        },
        {
            label: 'Apply', path: '/apply'
        },
        {
            label: 'About', path: '/about'
        },
    ];

    return (
        <div className='relative bg-white z-50'>
            <div className='flex justify-between items-center p-5'>
                <div className='font-bold text-lg'>Job Hunt</div>
                <div className='hidden min-[800px]:flex flex-row gap-6 items-center'>
                    {navLinks.map((item, index) => {
                        if (item.dropdown) {
                            return (
                                <div key={index} className='relative group'>
                                    <div className='flex items-center gap-1 cursor-pointer font-medium text-gray-700'>
                                        {item.label}
                                        <FaCaretDown className='group-hover:hidden text-sm' />
                                        <FaCaretUp className='hidden group-hover:inline text-sm' />
                                    </div>
                                    <div className='absolute top-6 left-0 hidden group-hover:flex flex-col bg-white border shadow-md z-10'>
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={subItem.path} className='px-4 py-2 hover:bg-gray-100'>
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <Link key={index} href={item.path} className='text-gray-700 font-medium'>
                                    {item.label}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='hidden min-[800px]:flex gap-3'>
                    <Link href="/signup">
                        <Button className='bg-[#20C6B1] hover:bg-[#20C6B1] cursor-pointer'>Sign Up</Button>
                    </Link>
                    <Link href="/login">
                        <Button className='border-2 border-[#20C6B1] bg-transparent text-black hover:bg-[#20C6B1] hover:text-white cursor-pointer'>Login</Button>
                    </Link>
                </div>
                <div className='min-[800px]:hidden text-2xl cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {mobileMenuOpen && (
                <div className='min-[800px]:hidden flex flex-col gap-3 px-6 pb-5 bg-white border-t border-gray-200 shadow-md z-40'>
                    {navLinks.map((item, index) => {
                        if (item.dropdown) {
                            return (
                                <div key={index}>
                                    <div
                                        className='flex justify-between items-center font-medium text-gray-700 cursor-pointer py-2'
                                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                    >
                                        {item.label}
                                        {activeDropdown === index ? <FaCaretUp /> : <FaCaretDown />}
                                    </div>
                                    {activeDropdown === index && (
                                        <div className='ml-4 flex flex-col gap-2'>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link key={subIndex} href={subItem.path} className='text-gray-600'>
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        } else {
                            return (
                                <Link key={index} href={item.path} className='text-gray-700 py-2'>
                                    {item.label}
                                </Link>
                            );
                        }
                    })}
                    <div className='flex flex-col gap-2 pt-4'>
                        <Link href="/signup">
                            <Button className='bg-[#20C6B1] w-full'>Sign Up</Button>
                        </Link>
                        <Link href="/login">
                            <Button className='border-2 border-[#20C6B1] bg-transparent text-black hover:bg-[#20C6B1] hover:text-white w-full'>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
