import "./App.css"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Project from "./components/projects/Project"

export const copy = async (data) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(data)
  }
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
