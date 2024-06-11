import React, { useState } from 'react'
import "./skills.css";
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfo from './SkillsInfo/SkillsInfo';
import { animate, motion } from 'framer-motion';
import skillsPic from "../../assets/skills.png";
import PF from "../../assets/pfcircle.png";

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
    <motion.div>
      <motion.h2 className="text-center text-3xl font-bold mt-4" variants={textvariants} initial="initial" animate="animate">ABOUT ME</motion.h2>

      <div className="w-full flex flex-col md:flex-row md:flex justify-center items-center mt-8">
        <div className='w-1/4 flex flex-col justify-center items-center'>
          <img src={PF} alt="" className=''/>
          <a href="" className='btn'>Download CV</a>
        </div>
        <div className="w-4/5 md:w-3/4 h-full">
          <div className="about_info">
            <p className="text-justify">I am an eager and driven Information
              Technology student currently pursuing a Bachelor's degree with the possibility of earning honors in Information
              Technology, majoring in Business Analytics. I have a strong passion for technology and a keen interest in utilizing 
              my analytical and logical skills to derive actionable insights. I am committed to continuous learning and development 
              in the ever-evolving field of IT. I am seeking a challenging opportunity to apply my technical knowledge and contribute 
              innovative solutions to real-world problems. I am ready to leverage my academic excellence and practical experiences
              to make a meaningful impact in the IT industry.</p>
          </div>
          <motion.div className="skills-content items-start gap-4 mt-4 flex" variants={variants}>
             <motion.div className="skills flex flex-col gap-4">
                 {SKILLS.map((item)=>(
                     <SkillCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title == item.title} 
                     onClick={()=> {handleSelectSkill(item)}}/>
                 ))}
             </motion.div>
             <motion.div className="skills-info flex-1" variants={variants}>
                 <SkillsInfo heading={selectedSkill.title} skills={selectedSkill.skills}></SkillsInfo>
             </motion.div>
         </motion.div>
        </div>
      </div>
    </motion.div>
    
  )
}

export default Skills