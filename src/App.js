//style
import "./App.css";

//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <span id="top">
      <NavBar />
      </span>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Home />
      <br />
      <Education />
      <br />
      <Skills />
      <br />
      <Experience />
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
