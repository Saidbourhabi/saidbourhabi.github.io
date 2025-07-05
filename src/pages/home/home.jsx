import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import {  FaFacebook,  FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Import jersey images
import manunite from '../../assets/images/manunited.jpg';
import { BsTwitterX } from 'react-icons/bs';

const Home = () => {
    return (
        <>
        {/* Hero Section */}
        <div className="h-screen  bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={manunite} 
                    alt="Manchester United" 
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                >
                    WE'RE COMING
                    <br />
                    <span className="text-gray-300">SOON</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Our store is currently in progress. We're working hard to bring you the best shopping experience.
                </motion.p>

                {/* Stay Tuned Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-6">Stay Tuned</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-xl" />
                            <span>prokitsroster@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-xl" />
                            <span>+212 (6) 8257-5642</span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center gap-6"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    >
                        <FaFacebook className="text-xl" />
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    >
                        <FaInstagram className="text-xl" />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    >
                        <BsTwitterX  className="text-xl" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Home;