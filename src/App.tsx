import "./App.css";
import Hero from "./components/sections/Hero.tsx";
import {Layout} from "./components/layout/Layout.tsx";
import {usePortfolioConfig} from "./hooks/usePortfolioConfig.tsx";
import Projects from "./components/sections/Projects.tsx";
import Skills from "./components/sections/Skills.tsx";
import Experience from "./components/sections/Experience.tsx";
import {useLayoutEffect} from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    const {personal} = usePortfolioConfig()

    useLayoutEffect(()=>{
        document.title = `${personal.name} - ${personal.role}`;
    },[personal])

  return (
    <DarkModeProvider>
      <Layout>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </Layout>
    </DarkModeProvider>
  );
}

export default App;
