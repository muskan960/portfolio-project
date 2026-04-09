
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import mypic from "../../assets/mypic.png"; 

function Hero() {

  const roles = ["Frontend Developer", "Web Developer", "Full Stack Developer", "Mern Stack Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 250);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length - 1)), 200);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex(prev => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
<div className="flex items-center justify-center w-full h-screen px-15 py-15 m-15">
  {/* Left Section */}
        <div className="space-y-6">
        <div className='items-center justify-center max-w-xl ml-10 bt-10 space-y-6'>

          <p className="text-[#e9c46b] text-2xl font-extrabold">
             Web Developer
          </p>

           <h1 className="text-4xl md:text-5xl max-w-7xl  font-semibold bt-5 text-white">
           Hi It's me <span className="text-white text-center">Muskan Memon</span>
           </h1>

         <div className="relative inline-block ">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex">
              And I’m a&nbsp;
              <motion.span
                key={text}
                className="text-[#e9c46b] font-semibold"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {text}
              </motion.span>
              <motion.span
                className="text-white ml-1"
                animate={{ opacity: [1, 1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                |
              </motion.span>
            </h2>

            {/* underline */}
            <span className="block h-1 w-1/2 bg-[#e9c46b] rounded-full mt-5"></span>
          </div>


          <p className="text-white">
            Crafting responsive and visually engaging web experiences using modern technologies.
            Focused on performance, accessibility, and clean UI design.
          </p>

        </div>
        <div className="flex items-center gap-5 ml-10">
          <LuLinkedin
            size={18}
            className="
       text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-2
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
     hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
    "
          />

          <FaGithub
            size={18}
            className="
     text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-1
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
     hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
    "
          />
          <AiFillInstagram
            size={18}
            className="
       text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-1
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
      hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
    "
          />
          <FaFacebook
            size={18}
            className="
      text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1
      w-10 h-10
      px-1
      flex items-center justify-center
      rounded-full
      transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
    hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
    "
          />

        </div>

        <div className='flex items-center justify-start gap-6 mt-10 ml-10'>
          <button className=' text-[#e9c46b] text-lg bg-[#0c0c0c] border border-brown-200 border-1 px-2 rounded-2xl py-1  transition-all
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
      hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]
       '>Contact me</button>
          <button className="text-[#e9c46b] text-lg bg-[#0c0c0c] border-brown-200 border-1 text-lg px-2 rounded-2xl py-1 
      duration-300
      ease-in-out
      hover:scale-110
      hover:-translate-y-1
border transition-all hover:shadow-[0_8px_20px_rgba(105,71,44,0.5)]

    "> My Resume</button>

        </div>

      </div>
    
      <div className="flex-1 flex justify-center items-center relative">
    <motion.div 
      className="w-72 md:w-96 h-auto rounded-full border-4 border-[#d6b980] shadow-[0_8px_20px_rgba(105,71,44,0.8)] overflow-hidden"
      animate={{ y: [1, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
    >
      <img
        src={mypic}
        alt="Muskan"
        className="object-cover w-full h-full"
      />
    </motion.div>
    </div>
</div>
  )

}
export default Hero
