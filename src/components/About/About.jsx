

import React from "react";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


function About() {
  return (
    <motion.section
      className="w-full px-10 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-16 space-y-6">
        {/* LEFT SIDE */}
        <motion.div className="md:w-1/2 space-y-6" variants={fadeLeft}>
          <h5 className="text-[#e9c46b] text-2xl font-semibold">About Me</h5>
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            WHO AM <span className="text-[#e9c46b]">I</span>?
          </h1>
          <span className="block h-1 w-1/3 bg-[#e9c46b] rounded-full"></span>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I’m a dedicated Frontend and Full-Stack Developer. I specialize in creating
            responsive, interactive, and visually engaging web applications using
            modern technologies like React.js, Tailwind CSS, Express.js, Node.js,
            and MongoDB. I enjoy solving problems, optimizing performance, and
            turning ideas into clean, elegant solutions.
          </p>
        </motion.div>

        <motion.div
          className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeRight}
        >
          {[
            [
              "Frontend Development",
              "Building fast, modern, and visually engaging websites using React, Tailwind, and JavaScript focusing on clean design and smooth UI.",
            ],
            [
              "Web Development",
              "I specialize in creating responsive and interactive web interfaces using modern frontend technologies like React and Tailwind CSS.",
            ],
            [
              "MernStack Development",
              "I build MERN stack applications using MongoDB, Express.js, React, and Node.js, focusing on clean code, performance, and responsive design.",
            ],
            [
              "FullStack Development",
            "I develop full-stack web applications, handling both frontend and backend with clean code and efficient architecture.",
            ],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gradient-to-br from-[#303030] to-[#131313] 
                         border border-[#e9c46b] rounded-xl p-7
                         flex flex-col h-44 justify-between
                         shadow-[0_10px_30px_rgba(233,196,107,0.25)]"
            >
              <h5 className="text-[#e9c46b] text-lg uppercase tracking-wide">{title}</h5>
              <p className="text-gray-400 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto mt-24 space-y-6"
        variants={fadeUp}
      >
        <h2 className="text-[#e9c46b] text-2xl font-semibold">
          Personal Information
        </h2>

        <motion.div
          className="w-full bg-gradient-to-br from-[#303030] to-[#131313]
                     rounded-full p-7 px-20 flex items-center justify-between
                     shadow-[0_10px_30px_rgba(233,196,107,0.25)]"
          
        >
          <div>
            <p className="text-gray-400 text-sm text-[18px] hover:text-white cursor-pointer">
              First Name
            </p>
            <p className="text-[#e9c46b] text-lg font-semibold text-[20px]">Muskan</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white cursor-pointer">
              Last Name
            </p>
            <p className="text-[#e9c46b] text-lg font-semibold text-[20px]">Memon</p>
          </div>
        </motion.div>

     
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeUp}>
          <div className="bg-gradient-to-br from-[#303030] to-[#131313]
                         rounded-full p-7 px-20 shadow-[0_10px_30px_rgba(233,196,107,0.25)]">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white ">Age</p>
            <p className="text-[#e9c46b] text-lg font-semibold text-[20px]">20</p>
          </div>
          <div className="bg-gradient-to-br from-[#303030] to-[#131313]
                         rounded-full p-7 px-20 shadow-[0_10px_30px_rgba(233,196,107,0.25)]">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white">Email</p>
            <p className="text-[#e9c46b] text-lg font-semibold break-all">
              muskanmemon@gmail.com
            </p>
          </div>
        </motion.div>

   
        <motion.div
          className="w-full bg-gradient-to-br from-[#303030] to-[#131313]
                     rounded-full p-7 px-20 flex items-center justify-between
                     shadow-[0_10px_30px_rgba(233,196,107,0.25)]"
          variants={fadeUp}
        >
          <div>
            <p className="text-gray-400 text-sm text-[18px] hover:text-white cursor-pointer">
              Education
            </p>
            <p className="text-[#e9c46b] text-lg font-semibold text-[20px]">
              Computer Science
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white cursor-pointer">
              Nationality
            </p>
            <p className="text-[#e9c46b] text-lg font-semibold text-[20px]">
              Pakistan
            </p>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeUp}>
          <div className="bg-gradient-to-br from-[#303030] to-[#131313]
                         rounded-full p-7 px-20 shadow-[0_10px_30px_rgba(233,196,107,0.25)]">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white">Address</p>
            <p className="text-[#e9c46b] text-lg font-semibold">Hyderabad City</p>
          </div>
          <div className="bg-gradient-to-br from-[#303030] to-[#131313]
                         rounded-full p-7 px-20 shadow-[0_10px_30px_rgba(233,196,107,0.25)]">
            <p className="text-gray-400 text-sm text-[18px] hover:text-white">Languages</p>
            <p className="text-[#e9c46b] text-lg font-semibold">English, Urdu</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
