import React from 'react'
import './SkillsInfo.css'
const SkillsInfo = ({heading, skills}) => {
  return (
    <div className="skills-info-card rounded-lg h-fit">
        <h6 className="text-sm font-medium">{heading}</h6>
        <div className="skills-info-content p-6">
            {skills.map((item, index)=> (
                <React.Fragment key={`skill_${index}`} >
                    <div>
                        <div className="skill-info flex items-center justify-between">
                            <p className='text-base font-medium'>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>
                        <div className="skill-progress-bg w-full h-2 rounded-lg mb-2 grid grid-cols-1 gap-4">
                            <div className="skill-progress w-0 h-2 rounded-lg" style={{width: item.percentage}}></div>
                        </div>

                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfo