import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Quiz App", desc: "An interactive quiz app featuring multiple-choice questions, instant feedback, and score calculation with a responsive UI.", tech: "HTML • Css • JavaScript", link: "https://muskan960.github.io/SyntecxHub-quiz-app/" },
  { title: "E-Commerce Website", desc: "E-commerce web application with product listing, cart functionality, and a smooth user-friendly shopping experience.", tech: "React • Tailwind Css", link: "https://muskan960.github.io/react-project/" },
  { title: "Travel Website", desc: "Travel website with smooth animations, modern layout, and an engaging user experience for exploring destinations.", tech: "HTML • CSS • JavaScript • JS App", link: "https://muskan960.github.io/trevel-assaiment-web/" },
  { title: "Calculator App", desc: "Interactive calculator app with basic arithmetic operations and a clean, user-friendly interface.", tech: "HTML • Css • JavaScript", link:  "https://muskan960.github.io/calculator/" },
  { title: "Landing Page", desc: "High-conversion landing page for startups.", tech: "HTML • CSS • JavaScript" },
]
function Projects() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const next = () => setPage((prev) => (prev + 1) % totalPages);
  const prev = () => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  const visibleProjects = projects.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-28 bg-gradient-to-br from-[#4e432b] to-[#554d38] text-white overflow-hidden h-auto mt-30 mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-15">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-medium text-[#e9c46b] mb-20"
        >
          My Projects
        </motion.h2>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#303030] to-[#131313] rounded-2xl p-7 border border-[#222] shadow-[0_22px_55px_rgba(0,0,0,0.65)] hover:border-[#e9c46b]/50"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-[#303030] to-[#131313] mb-6 flex items-center justify-center text-gray-500">
                  Project Preview
                </div>

                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <p className="text-sm text-[#e9c46b] mb-6">{project.tech}</p>

                <div className="flex gap-4">
                <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-6 py-3
             bg-[#e9c46b] text-black rounded-full font-semibold
             hover:scale-105 transition duration-300"
>
  View Project →
</a>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-8 mt-16">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#e9c46b] text-[#e9c46b] hover:bg-[#e9c46b] hover:text-black transition"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#e9c46b] text-[#e9c46b] hover:bg-[#e9c46b] hover:text-black transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;

