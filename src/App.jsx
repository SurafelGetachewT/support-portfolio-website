import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SupportStrengths from "./components/SupportStrengths";
import ToolsSection from "./components/ToolsSection";
import About from "./components/About";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import SupportPortfolio from "./components/SupportPortfolio";
import TicketExamples from "./components/TicketExamples";
import KnowledgeBase from "./components/KnowledgeBase";
import TroubleshootingWorkflows from "./components/TroubleshootingWorkflows";
import CryptoP2PSupport from "./components/CryptoP2PSupport";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <SupportStrengths />
        <ToolsSection />
        <About />
        <Resume />
        <Certificates />
        <Experience />
        <SupportPortfolio />
        <TicketExamples />
        <KnowledgeBase />
        <TroubleshootingWorkflows />
        <CryptoP2PSupport />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
