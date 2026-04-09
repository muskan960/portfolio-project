import React, { useState } from 'react'

import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <div className="fixed z-50 top-0 backdrop-blur-sm shadow-sm w-full h-30 px-15 flex items-center justify-between  shadow-[#e9c46b]">

      <h1 className="text-4xl text-[#e9c46b] p-5 font-bold object-contain cursor-pointer">MUSKAN</h1>

      {/* humbuger menu */}
      <div className="md:hidden text-white text-2xl cursor-pointer">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}

      <div className="hidden md:flex space-x-10">
      <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          Home
        </Link>
        <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          About
        </Link>
        <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
        Skills
        </Link>
        <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
        Projects
        </Link>
        <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
        Experience
        </Link>
        <Link to="/" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
        Contact
        </Link>
      </div>


      {/* mobile menu */}

      {isOpen && (
        <div className="flex flex-col md:hidden bg-black absolute top-55 left-0 w-full justify-center items-center py-4 space-y-9 z-40">
          <Link to="#home" className="relative text-[#e9c46b] text-[20px] font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="#about" className=" relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="#skills" className="relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link to="#projects" className="relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="#experience" className="relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white  after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link to="#contact" className="relative text-[#e9c46b] text-[20px] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}



    </div>




  )
}

export default Navbar