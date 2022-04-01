import NavBar from "./components/NavBar";
import MainBio from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <MainBio />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
