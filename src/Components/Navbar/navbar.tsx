import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import path from 'path'

const Navbar = () => {
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
    ]
    return (
        <div className='flex justify-between flex-row p-7'>
            <div className='font-bold'>
                Job Hunt
            </div>
            <div className='flex flex-row gap-5'>
                {
                    navLinks.map((item, index) => {
                        if (item.dropdown) {
                            return (
                                <div key={index} className='relative group'>
                                    <span className='cursor-pointer'>{item.label}</span>
                                    <div className='absolute hidden group-hover:flex flex-col border mt-2'>
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem.path}
                                                className='px-4 py-2 hover:bg-gray-100'
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}

                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <Link
                                    href={item.path}
                                    key={index}
                                    className=''
                                >
                                    {item.label}
                                </Link>
                            )
                        }
                    })
                }
            </div>
            <div className='gap-3 flex'>
                <Link href={"/signup"} passHref>
                    <Button
                        className='bg-[#20C6B1] hover:cursor-pointer hover:bg-[#20C6B1]'
                    >
                        Sign Up
                    </Button>
                </Link>
                <Link href={"/login"} passHref>
                    <Button
                        className='bg-transparent hover:cursor-pointer border-2 border-[#20C6B1] text-black hover:bg-transparent'
                    >
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
