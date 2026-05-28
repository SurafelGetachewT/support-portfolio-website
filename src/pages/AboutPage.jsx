import PageHero from "../components/PageHero";
import About from "../components/About";
import Experience from "../components/Experience";
import ToolsSection from "../components/ToolsSection";

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Support professional with technical depth and crypto/P2P context."
        description="A focused overview of Surafel's support background, support tools, technical troubleshooting habits, and customer-facing experience."
        primaryAction={{ label: "View Showcases", to: "/showcases" }}
      />
      <About />
      <Experience />
      <ToolsSection />
    </>
  );
}

export default AboutPage;
