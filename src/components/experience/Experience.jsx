

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Learning Journey",
    org: "Saylani Mass IT Training (SMIT)",
    time: "2025 – 2026",
    desc: [
      "Completed 1 year structured Web development program",
      "Learned HTML, CSS, JavaScript ReactJs and other technolgies",
      "Worked on multiple real-world practice projects",
    ],
  },
  {
    title: "Full-Stack AI Hackathon Project",
    org: "SMIT AI Hackathon",
    time: "2026",
    desc: [
      "Developed a full-stack AI web application",
      "Built and integrated backend APIs for AI features",
      "Presented working solution and earned completion certificate",
    ],
  },
  {
    title: "Web Development Certification",
    org: "Cisco Networking Academy",
    time: "2024",
    desc: [
      "Completed HTML, CSS & JavaScript learning journey",
      "Earned official course completion certificate",
      "Strengthened core web fundamentals",
    ],
  },
  {
    title: "Web Development Internship",
    org: "other Componies",
    time: "2025 – 2026",
    desc: [
      "Completed internship with certificate",
      "Received offer letter based on performance",
      "Worked on production-level UI",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="w-full py-28 px-6 bg-[#0b0b16] text-white">
      <div className="max-w-6xl mx-auto relative">

        {/* Small Paragraph (5–6 words) */}
        <p className="text-sm text-center tracking-widest text-gray-400 mb-3 uppercase">
          WHAT I HHAVE DONE SO FAR
        </p>

        {/* Heading */}
        <h2 className="text-[50px] font-bold text-center mb-20 text-[#e9c46b]">
         Work Experience.
        </h2>

        {/* Center Timeline Line */}
        <div className="absolute left-1/2 h-full w-[2px] bg-gradient-to-b from-[#e9c46b]/40 to-[#e9c46b]/10" />

        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative flex w-full ${
                  isLeft ? "justify-start pr-10" : "justify-end pl-10"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-[#e9c46b] shadow-[0_0_20px_rgba(233,196,107,0.6)] z-20" />

                {/* Card */}
                <div className="w-full sm:w-[46%] bg-gradient-to-br from-[#303030] to-[#131313] p-6 rounded-2xl border border-[#e9c46b]/20 shadow-[0_10px_30px_rgba(233,196,107,0.25)] hover:scale-[1.03] transition-all duration-500">
                  
                  <div className="mb-3">
                    <h3 className="text-xl mb-2 font-semibold text-[#e9c46b]">
                      {exp.title}
                    </h3>
                    <p className="text-sm mb-1 text-[#e9c46b]/80">{exp.org}</p>
                    <span className="text-xs text-gray-400">{exp.time}</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc list-inside">
                    {exp.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
