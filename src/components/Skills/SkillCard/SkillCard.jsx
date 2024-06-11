import React from 'react';
import "./SkillCard.css";

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
   <div className={`skills-card ${isActive ? "active" : ""} rounded-md border mb-4 border-black p-2 text-center relative cursor-pointer hover:text-white`}
   onClick={() => onClick()}>
       {/* <div className='skill-icon'>
            <i className="skill-icon2 material-symbols-outlined text-3xl flex items-center justify-center rounded-lg border hover:text-white text-white absolute">{iconUrl}</i>
        </div>  */}
        <span className={`${isActive ? "text-white":""} text-base font-medium`}>{title}</span>
   </div>
   
  )
}

export default SkillCard;