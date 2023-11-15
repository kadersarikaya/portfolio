"use client"
import React, {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { projectsData } from "@/data/project/data";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="max-w-4xl mx-auto py-6 px-4 lg:px-0">
      <h1 className="text-2xl pb-10 text-center">Projects</h1>
      <div className="relative w-full">
        <motion.div 
        key={projectsData[currentProject].id}
        initial={{ opacity: 0, y: 50  }} // Sayfa yüklendiğinde sağdan giriş animasyonu
        animate={{ opacity: 1, y: 0 }} // Giriş animasyonu
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  
        rounded-lg p-4 flex-col lg:flex-row lg:flex lg:justify-between"
        >
          <div className="font-serif opacity-10 text-9xl items-end flex pb-6">{projectsData[currentProject].id}</div>
          <div className="flex flex-col gap-3 p-2 justify-between">
            <h2 className="text-xl">{projectsData[currentProject].title}</h2>
            <p className="md:w-[95%]">{projectsData[currentProject].description}</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-start gap-2 font-semibold">
                {projectsData[currentProject].tags.map((tag) => (
                  <div className="bg-indigo-600 px-2 py-1 rounded-lg mr-2
                   md:mr-4 text-sm md:text-base
                  " key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a target="_blank" href={projectsData[currentProject].webLink} className="
                 bg-none hover:bg-indigo-300 border border-indigo-600  
                px-4 py-1 rounded-lg"  >
                  Website
                </a>
                <a target="_blank" href={projectsData[currentProject].gitLink} 
                  className="bg-none hover:bg-indigo-300 border border-indigo-600 
                   px-4 py-1 rounded-lg" >
                  Github
                </a>
              </div>
            </div>
          </div>
          <Image className="hidden md:block rounded-lg shadow-lg max-w-[300px] max-h-[300px] object-cover 
          " src={projectsData[currentProject].imageUrl} alt="Project Image" />
        </motion.div>
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform text-2xl shadow-lg font-bold -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 px-2 py-2 rounded-full"
        >
        <MdOutlineNavigateBefore/>
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform text-2xl shadow-lg font-bold -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 px-2 py-2 rounded-full"
        >
         <MdOutlineNavigateNext/>
        </button>
      </div>
  </section>);
};

export default Projects;
