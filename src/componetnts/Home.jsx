import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaLinux } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed"; //to dynaimc effect 
import avatar from '../assets/New.jpg'

const Home = () => {
    return (
        <>
            {/* name is for react scroll */}
            <div name='Home
            ' className='max-w-screen-3xl w-full container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row '>
                    {/* for text left */}
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>

                        <div className='flex space-x-2 text-2xl md:text-4xl'>
                            <h1>Hello I'am a </h1>

                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Backend Dev", "Spring-Boot dev", "Linux and Databse admin"]}
                                typeSpeed={40}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            I'm Mohit Pandey, a passionate backend developer with a knack for crafting efficient and scalable solutions. With expertise in Linux systems, databases, and networking, I bring robust problem-solving skills to every project I tackle.
                            <br /> <br />
                            Feel free to explore my portfolio to see the projects I've worked on and the technologies I specialize in. Whether it's optimizing backend performance, ensuring seamless database interactions, or diving deep into the complexities of networks, I'm always up for a challenge.
                        </p>
                        <br />

                        {/* mid section icon part */}
                        <div className='flex flex-col  md:flex-row  items-center justify-between space-y-6 md:space-y-0 '>


                            <div>
                                {/* social meadia icons */}
                                <h1 className='font-bold mb-2'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <a href="https://www.facebook.com/profile.php?id=100024364923962" target=' '>
                                        {" "}  <li className='text-2xl cursor-pointer'><FaFacebook /></li>
                                    </a>
                                    <a href="https://x.com/MohitPa96772251" target=' '>
                                        {" "} <li className='text-2xl cursor-pointer'><FaSquareXTwitter /></li>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohit-pandey-76b288270/" target=' '>
                                        {" "} <li className='text-2xl cursor-pointer'><FaLinkedin /></li>
                                    </a>
                                    <a href="">
                                        {" "} <li className='text-2xl cursor-pointer'><IoMailSharp /></li>
                                    </a>
                                </ul>

                            </div>
                            <div>
                                <h1 className='font-bold mb-2'>Currently Working On</h1>
                                <ul className='flex space-x-5'>
                                    {" "}  <li className='text-3xl md:3xl hover:scale-110 duration-200 rounded-full'><RiJavaLine /></li>
                                    {" "} <li className='text-3xl md:3xl hover:scale-110 duration-200 rounded-full'><BiLogoSpringBoot /></li>
                                    {" "} <li className='text-3xl md:3xl hover:scale-110 duration-200 rounded-full'><GrMysql /></li>
                                    {" "} <li className='text-3xl md:3xl hover:scale-110 duration-200 rounded-full'><FaLinux /></li>
                                    {/* {" "} <li className='text-3xl md:3xl hover:scale-110 duration-200 rounded-full'><FaReact /></li> */}
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* for image right */}
                    {/* 
                    <div className='md:w-1/2 ml-48 mt-20' > */}
                    <div className='md:w-1/2 md:mt-20 order-1 mt-8' >

                        <img src={avatar} alt="" className='rounded-full md:w-[450px] md:h-[450px] mx-auto object-cover' />

                    </div>
                </div>
                <br />

            </div>
            <hr />
        </>
    )
}

export default Home