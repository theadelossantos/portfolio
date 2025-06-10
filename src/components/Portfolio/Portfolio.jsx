import "./portfolio.css";
import PF from "../../assets/skills.png";
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useRef } from "react";
const items = [
    {
        id:1,
        title:"Lipa Grace",
        img: PF,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:2,
        title:"Salon",
        img: PF,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:3,
        title:"Ibaan",
        img: PF,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const Single = ({item})=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset:["end end", "start start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-20,20])
    return (
        <section>
            <div className="container flex items-center justify-center w-full h-full overflow-hidden">
                <div className="wrapper max-w-screen-2xl m-auto flex gap-12 items-center justify-center">
                    <div className="imageContainer flex-1 h-2/4 "  ref={ref}>
                        <img src={item.img} alt="" className="w-100 h-100 object-cover"/>
                    </div>
                    <motion.div className="textContainer flex-1 flex flex-col gap-8" style={{ y }}>
                        <h2 className="text-4xl">{item.title}</h2>
                        <p>{item.desc}</p>
                        <button className="bg-[#020826] text-white rounded-lg w-1/4 cursor-pointer"  style={{ y }}>See demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
    return (
        <div className="portfolio relative" ref={ref}>
            <div className="progress sticky top-0 left-0 pt-20 text-center text-xl">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressbar h-2.5 bg-gray-900"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio