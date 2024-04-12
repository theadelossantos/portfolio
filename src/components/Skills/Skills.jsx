import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import "./skills.css";
import SkillsInfo from './SkillsInfo/SkillsInfo';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) =>{
    setSelectedSkill(data);
  }
  return (
    <div className="m-6 relative">
        <h1 className="text-2xl font-semibold mb-1">Skills</h1>
        
        <div className="skills-content flex items-start gap-12 m-6">
            <div className="skills flex-1 grid">
                {SKILLS.map((item)=>(
                    <SkillCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title == item.title} 
                    onClick={()=> {handleSelectSkill(item)}}/>
                ))}
            </div>
            <div className="skills-info flex-1">
                <SkillsInfo heading={selectedSkill.title} skills={selectedSkill.skills}></SkillsInfo>
            </div>
        </div>

    </div>
  )
}

export default Skills