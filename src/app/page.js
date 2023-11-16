"use client"
import Image from 'next/image'
import {MdOutlineAlternateEmail} from "react-icons/md"
import {SlSocialLinkedin, SlSocialYoutube, SlSocialGithub} from "react-icons/sl"
import {BsMedium} from "react-icons/bs"
import "../../src/styles/global.css"
import Link from 'next/link'

export default function Home() {
  return (
      <section className="max-w-4xl mx-auto px-4 py-6">
        <article className="flex flex-col justify-center items-center" >
          <h2 className="text-2xl pb-2 font-semibold text-gray-800 dark:text-white"> Hi👋🏼 I'm Kader</h2>
            <div class="bg-gradient-to-r pb-4 text-transparent from-blue-400 via-green-500 to-purple-500 bg-clip-text text-2xl font-bold">
              Software Engineer 
            </div>
            <ul className="text-gray-600 md:w-[75%] dark:text-gray-400 text-lg">
              <li className="pb-2" >I'm a fresh graduate software engineer who is passionate about creating
              stunning projects and into in computer science.
              </li>
              <li className="pb-2">I try to make the world a better place with code.</li>
              <li className="pb-2">I'm able to work on any technologies based on project needs.</li>
              <li className="pb-2">I'm a lifelong learner who loves to gain new skills and knowledge.</li>
              <li className="pb-2">I love to share my knowledge with others as public as possible. Currently running a blog and youtube channel. 
              </li>
              <li className="pb-2" >I'm a big fan of keeping myself up to date with the latest technologies and trends.</li>
              <li className="pb-2" >I am a classic Virgo woman who loves to organize and plan everything in my life. </li>
            </ul>
            <ul className="flex gap-4 justify-start pt-8">
              <Link href="mailto:kadersarikaya0123@gmail.com">  
              <li className="rounded-full bg-gray-600 hover:bg-purple-400 transition-all
                w-50 h-50 p-3 text-xl text-white">
                  <MdOutlineAlternateEmail/>
              </li>
              </Link>  
              <Link target="_blank" href="https://www.linkedin.com/in/kadersarikaya/">
                <li className="rounded-full bg-gray-600 hover:bg-purple-400 transition-all
                w-50 h-50 p-3 text-xl text-white">
                  <SlSocialLinkedin/>
                </li>
              </Link>
              <Link target="_blank"
                  href="https://github.com/kadersarikaya" >
                <li className="rounded-full bg-gray-600 hover:bg-purple-400 transition-all
                  w-50 h-50 p-3 text-xl text-white">
                    <SlSocialGithub/>
                </li>
              </Link>
              <Link target="_blank" href="https://medium.com/@kadersarikaya">
                <li className="rounded-full bg-gray-600 hover:bg-purple-400 transition-all
                  w-50 h-50 p-3 text-xl text-white">
                  <BsMedium/>
                </li>
              </Link>
              <Link target="_blank" href="https://www.youtube.com/channel/UCx1N7sOSIVrboWStYKN0nWw">
                <li className="rounded-full bg-gray-600 hover:bg-purple-400 transition-all
                  w-50 h-50 p-3 text-xl text-white">
                    <SlSocialYoutube/>
                </li> 
              </Link>
            </ul>
        </article>
      </section>
  )
}
