import About from "./components/About"
import Appbar from "./components/Appbar"
import Footer from "./components/Footer"
import Preabout from "./components/Preabout"
import Projects from "./components/Projects"
import Skills from "./components/Skills"



function App() {
  
  return (
    <div>
      
      <Appbar />
      <Preabout/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
      
    </div>
  )
}

export default App
