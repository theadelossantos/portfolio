import "./home.css";
import selfPic from "../../assets/designer.gif";
import Typed from "typed.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const typingEffect = new Typed(".multitext", {
      strings:["purpose","passion"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    });

    return () => {
      typingEffect.destroy();
    };
  }, [])
  return (
    
    <div className="hero h-full w-full flex-row-reverse md:flex justify-center items-center overflow-hidden relative before:absolute before:content-[''] before:h-40 before:w-40 md:before:w-96 md:before:h-96 before:rounded-full">
      <div className="w-full cols1 flex justify-center items-center">
        <div className="home__img">
          <img class="h-full" src={selfPic}/>
        </div>
      </div> 
      <div className="w-full md:mx-5 z-10 p-4 md:p-0">
        <span className="block relative text-lg tracking-wide after:absolute after:content-[''] after:h-0.5 after:w-11 after:bottom-3 after:bg-gray-600">Hello</span>
        <h1 className="block text-6xl font-bold md:text-8xl ">Designing with</h1>
        <h1 className="block text-6xl font-bold mt-3 md:text-8xl"><span className="multitext capitalize"></span></h1>
        <div className="pr-3">
          <p className="block mt-3 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </div>
      </div>
      
    </div>
    
  )
}

export default Home