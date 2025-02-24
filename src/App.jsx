import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Atur durasi animasi (dalam ms)
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen  bg-[#1d2d44]">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
