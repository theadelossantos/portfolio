import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
const App = () => {
  return <div>
    <Navbar/>
    <section id="Home" >
      <Hero></Hero>
    </section>
    <section id="Skills" className="">
      <Skills></Skills>
    </section>
    <Portfolio/>
    {/* <section id="Contact">hello3</section> */}

  </div>
}

export default App;
