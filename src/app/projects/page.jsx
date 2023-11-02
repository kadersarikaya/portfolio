"use client"
import React, {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const projectsData = [
  // Projelerinizi içeren veri nesnelerini burada tanımlayın
  { id: 1, title: "Proje 1", description: "Proje 1 açıklama", imageUrl: "resim_url" },
  { id: 2, title: "Proje 2", description: "Proje 2 açıklama", imageUrl: "resim_url" },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pb-5 flex flex-col justify-center items-center">
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
          <div className="font-serif opacity-10 text-9xl items-end flex pb-6">1</div>
          <div className="flex flex-col gap-3 p-2 justify-between">
            <h2 className="text-xl">{projectsData[currentProject].title}</h2>
            <p className="md:w-[95%]">{projectsData[currentProject].description}</p>
            <div className="flex flex-col items-center">
              <div className="flex font-semibold">
                <div className="p-2">CSS
                </div>
                <div className="p-2">Nextjs
                </div>
                <div className="p-2">Reactjs
                </div>
                <div className="p-2">Nodejs
                </div>
                <div className="p-2">Express
                </div>
                <div className="p-2">oAuth
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-lg" href="font-semibold">Website</a>
                <a className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-lg" href="font-semibold">Github</a>
              </div>
            </div>
          </div>
          <img className="rounded-md w-full pt-2 md:pt-0" src="https://via.placeholder.com/350" alt="Project Image" />
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
