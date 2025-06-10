import React, { useState } from 'react'
import "./skills.css";
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfo from './SkillsInfo/SkillsInfo';
import { animate, motion } from 'framer-motion';
import PF from "../../assets/skills.png";
import bgImage from "../../assets/skills-bg.png";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


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
    <motion.div className='h-screen flex flex-col items-center'>
      <div className='mt-6 mb-12'>
        <p className='text-4xl font-bold'>SKILLS</p>
      </div>
      <div className='flex flex-col md:flex-row w-full h-screen'>
        <div className='md:w-2/4 flex justify-center md:justify-end h-full md:mr-4 mb-4 md:mb-0'>
            <div className='outline outline-1 flex flex-col w-9/12 h-9/12 2xl:w-1/2 2xl:h-1/2 md:w-3/4 md:h-1/2 rounded-md py-8 pr-10 pl-10'>
              <p className='text-center text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-lg font-semibold'>Frontend Development</p>
              <div className='flex mt-1 w-full gap-1 sm:gap-4 lg:gap-4 2xl:gap-28 '>
                <div className='flex flex-col w-full mt-4 justify-center'>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>HTML</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>CSS</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Bootstrap</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Tailwind</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />

                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full mt-4 justify-center'>
                  <div className='flex flex-col mb-4'>
                      <div className='flex items-center'>
                        <span className='font-medium'>jQuery</span>
                      </div>
                      <div className='flex'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfStroke />                      
                        <FaRegStar />
                      </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Javascript</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Angular</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>ReactJS</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
        <div className='md:w-2/4 flex justify-center md:justify-start h-full md:ml-4 mb-4 md:mb-0'>
          <div className='outline outline-1 flex flex-col w-9/12 h-9/12 2xl:w-1/2 2xl:h-1/2 md:w-3/4 md:h-1/2 rounded-md py-8 pr-10 pl-10'>
              <p className='text-center text-lg font-semibold'>Backend Development</p>
              <div className='flex mt-1 w-full md:gap-28'>
                <div className='flex flex-col w-full mt-4 justify-center'>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>PHP</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Python</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Django</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Node.js</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />

                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full mt-4 justify-center'>
                  <div className='flex flex-col mb-4'>
                      <div className='flex items-center'>
                        <span className='font-medium'>SQL</span>
                      </div>
                      <div className='flex'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfStroke />                      
                      </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Java</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>C++</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />

                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <div className='flex items-center'>
                      <span className='font-medium'>Typescript</span>
                    </div>
                    <div className='flex'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />
                      <FaRegStar />
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
        
      </div>
    </motion.div>
    
  )
}

export default Skills