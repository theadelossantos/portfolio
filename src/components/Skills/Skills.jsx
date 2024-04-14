import React, { useState } from 'react'
import "./skills.css";
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfo from './SkillsInfo/SkillsInfo';
import { animate, motion } from 'framer-motion';
import skillsPic from "../../assets/skills.png";
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
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) =>{
    setSelectedSkill(data);
  }
  return (
    // <motion.div className="m-6 relative" variants={variants} initial="initial" animate="animate">
    //     <h1 className="text-2xl font-semibold mb-1">Skills</h1>
        
    //     <motion.div className="skills-content items-start gap-4 m-6" variants={variants}>
    //         <motion.div className="skills flex gap-4">
    //             {SKILLS.map((item)=>(
    //                 <SkillCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title == item.title} 
    //                 onClick={()=> {handleSelectSkill(item)}}/>
    //             ))}
    //         </motion.div>
    //         <motion.div className="skills-info flex-1" variants={variants}>
    //             <SkillsInfo heading={selectedSkill.title} skills={selectedSkill.skills}></SkillsInfo>
    //         </motion.div>
    //     </motion.div>

    // </motion.div>
    <motion.div className="home__img flex justify-center items-center h-screen" variants={variants} initial="initial" animate="animate">
      {/* <p className="text-6xl font-semibold mb-1 md:text-8xl ">Skilled <span className="font-light">in</span></p> */}
          <img className="w-2/5" src={skillsPic}/>
    </motion.div>
  )
}

export default Skills