import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
