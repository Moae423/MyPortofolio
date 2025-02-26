import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsPage from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import WorksPage from "./components/Works.jsx";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Atur durasi animasi (dalam ms)
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <TechStack />
        <ProjectsPage />
        <WorksPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
