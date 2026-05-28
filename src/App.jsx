import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import Showcases from "./pages/Showcases";
import Testimonials from "./pages/Testimonials";
import ContactPage from "./pages/ContactPage";
import TicketExamplesPage from "./pages/TicketExamplesPage";
import CryptoP2PCaseStudiesPage from "./pages/CryptoP2PCaseStudiesPage";
import KnowledgeBaseArticlesPage from "./pages/KnowledgeBaseArticlesPage";
import TroubleshootingWorkflowsPage from "./pages/TroubleshootingWorkflowsPage";
import SupportTemplatesPage from "./pages/SupportTemplatesPage";
import TechnicalSupportExamplesPage from "./pages/TechnicalSupportExamplesPage";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/showcases" element={<Showcases />} />
          <Route
            path="/showcases/customer-support-ticket-examples"
            element={<TicketExamplesPage />}
          />
          <Route
            path="/showcases/crypto-p2p-support-case-studies"
            element={<CryptoP2PCaseStudiesPage />}
          />
          <Route
            path="/showcases/knowledge-base-articles"
            element={<KnowledgeBaseArticlesPage />}
          />
          <Route
            path="/showcases/technical-troubleshooting-workflows"
            element={<TroubleshootingWorkflowsPage />}
          />
          <Route
            path="/showcases/support-operations-templates"
            element={<SupportTemplatesPage />}
          />
          <Route
            path="/showcases/technical-support-engineer-examples"
            element={<TechnicalSupportExamplesPage />}
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
