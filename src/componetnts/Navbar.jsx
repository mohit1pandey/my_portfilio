import React, { useState } from 'react'
import avatar from '../assets/Pic.png'
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';


export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const navItmes = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "PortFolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]

    return (

        <>
            <div className=" max-w-screen-3xl w-full container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-10 bg-gray-200" > {/* removed "max-w-screen-2xl" */}
                {/* h-16 to fix size of navbar */}
                <div className='flex justify-between items-center '>
                    {/* left section*/}
                    <div className='flex space-x-6'>  {/* space b/w items */}
                        <div className='flex justify-between items-center '><img src={avatar} alt="" className='h-14 w-14 rounded-full' /></div>
                        <div>
                            <h1 className='font-semibold text-xl cursor-pointer'> Mohi<span className='text-green-500 text-2xl'>T</span>
                                <p>Backend <span className=' text-2xl'>DEV</span></p>
                            </h1>
                        </div>
                    </div>
                    {/* Right section*/}
                    <div className='flex'>
                        <ul className='hidden md:flex space-x-8 font-bold '>
                            {
                                navItmes.map(({ id, text }) => (
                                    <li key={id} className='hover:scale-110 duration-200 cursor-pointer'>

                                        {/*  to get scroll behaviour get this link from react-scroll and  */}
                                        <Link
                                            to={text} // inside to get the name of the component
                                            smooth={true}
                                            duration={500}
                                            activeClass='active'
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <div onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                            className='md:hidden'
                        >
                            {/* if showMenu is true show hamburger */}

                            {
                                showMenu ? <IoMdClose size={24} /> : < RiMenuFill size={24} />
                            }
                        </div>
                    </div>

                </div>

                {/* for mobile also if menu bar exits so show it or not */}
                {
                    showMenu && (
                        <div className='bg-white w-full'>
                            <ul className='md:hidden flex flex-col  h-screen items-center justify-center  space-y-4'>
                                {
                                    navItmes.map(({ id, text }) => (
                                        <li key={id} className='hover:scale-110 duration-200 cursor-pointer font-semibold space-y-8 text-xl'>

                                            <Link
                                                to={text} // inside to get the name of the component
                                                smooth={true}
                                                duration={500}
                                                activeClass='active'
                                                onClick={()=>setShowMenu(false)}
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}
