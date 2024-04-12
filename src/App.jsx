import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Home/Home";
const App = () => {
  return <div>
    <Navbar/>
    <section id="Home" >
      <Hero></Hero>
    </section>
    <section id="Skills">hello1</section>
    <section id="Portfolio">hello2</section>
    <section id="Contact">hello3</section>

  </div>
}

export default App;
