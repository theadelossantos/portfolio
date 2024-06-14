import React, { useState } from 'react'
import "./skills.css";
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfo from './SkillsInfo/SkillsInfo';
import { animate, motion } from 'framer-motion';
import PF from "../../assets/skills.png";
import bgImage from "../../assets/cubebg.png";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaAngular, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiPreact, SiTailwindcss, SiDjango, SiMysql, SiPostgresql, SiPython, SiPhp } from 'react-icons/si';
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const variants = {
  initial:{
    x:0,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity: 1, 
    y:0,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const textvariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity: 1, 
    y:0,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat: Infinity
    }
  }
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) =>{
    setSelectedSkill(data);
  }
  return (
    <motion.div className='h-full flex flex-col items-center'>
      {/* <motion.h2 className="text-center text-3xl font-bold mt-4" variants={textvariants} initial="initial" animate="animate">ABOUT ME</motion.h2> */}
      <div className='mt-6'>
        <h1>SKILLS</h1>
      </div>
        <div className='container mx-auto relative h-3/4 mt-20'>
            <div className="relative">
              <div className='flex items-center justify-center'>
                <img src={PF} alt="" className='w-6/12 h-6/12 relative'/>
              </div>
              <FaReact className="absolute top-0 left-1/2 transform -translate-y-24 text-blue-500 text-4xl md:text-8xl" />
              <RiJavascriptFill className="absolute top-12 right-0 transform -translate-x-1/2 text-yellow-500 text-4xl text-yellow-300" />
              <SiPython  className="absolute top-24 right-8 transform -translate-x-1/2 text-blue-300 text-4xl text-blue-500" />
              <SiPhp className="absolute top-36 right-8 transform -translate-x-1/2 text-indigo-700 text-4xl text-indigo-600" />
              <SiTailwindcss className="absolute top-48 right-4 transform -translate-x-1/2 text-teal-400 text-4xl" />
              <FaGitAlt className="absolute bottom-12 right-4 transform -translate-x-1/2 text-red-500 text-4xl" />
              <SiDjango className="absolute bottom-8 right-20 transform -translate-x-1/2 text-green-700 text-4xl" />
              <BiLogoPostgresql  className="absolute bottom-8 left-20 transform -translate-x-1/2 text-blue-700 text-4xl" />
              <FaBootstrap className="absolute bottom-12 left-4 transform -translate-x-1/2 text-purple-500 text-4xl" />
              <SiMysql className="absolute top-48 left-4 transform -translate-x-1/2 text-orange-500 text-4xl" />
              <FaHtml5 className="absolute top-36 left-8 transform -translate-x-1/2 text-orange-600 text-4xl" />
              <FaCss3Alt className="absolute top-24 left-8 transform -translate-x-1/2 text-blue-600 text-4xl" />
              <FaAngular className="absolute top-12 left-0 transform -translate-x-1/2 text-red-600 text-4xl" /> 
            </div>
          </div>
        
          
           

          {/* <div className=' w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

          </div>  */}
          {/* <motion.div className="skills-content items-start gap-4 mt-4 flex" variants={variants}>
             <motion.div className="skills flex flex-col gap-4">
                 {SKILLS.map((item)=>(
                     <SkillCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title == item.title} 
                     onClick={()=> {handleSelectSkill(item)}}/>
                 ))}
             </motion.div>
             <motion.div className="skills-info flex-1" variants={variants}>
                 <SkillsInfo heading={selectedSkill.title} skills={selectedSkill.skills}></SkillsInfo>
             </motion.div>
         </motion.div> */}
        
    </motion.div>
    
  )
}

export default Skills