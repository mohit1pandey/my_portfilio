import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-gray-200 text-black py-5">
                <div className="container mx-auto px-4">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
                        {/* Logo & Info Section */}
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl font-bold mb-2">Mohi<span className="text-green-500">T</span></h1>
                            <p className="text-gray-900 text-sm">
                                Backend Developer | Building efficient and scalable solutions.
                            </p>
                        </div>


                        {/* Social Links */}
                        <div className="text-center md:text-right">
                            <h2 className="font-semibold text-lg mb-2">Follow Me</h2>
                            <div className="flex justify-center md:justify-end space-x-6 text-xl">
                                <a href="#" className="text-gray-900 hover:text-blue-500" >
                                    <FaFacebook size={30} />
                                </a>
                                <a href="#" className="text-gray-900 hover:text-pink-500">
                                    <FaInstagram  size={30}/>
                                </a>
                                <a href="#" className="text-gray-900 hover:text-blue-400">
                                    <FaTwitter size={30} />
                                </a>
                                <a href="#" className="text-gray-900 hover:text-blue-700">
                                    <FaLinkedin size={30} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-8 text-center text-gray-900 text-sm">
                        <p>&copy; {new Date().getFullYear()} Mohi<span className="text-green-500">T</span>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
