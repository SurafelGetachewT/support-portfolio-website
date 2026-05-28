import PageHero from "../components/PageHero";
import Resume from "../components/Resume";
import Certificates from "../components/Certificates";

function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Resume, role focus, and certificate space."
        description="Download the current PDF resume, open the Google Drive copy, and keep certificate files available from the same portfolio."
        primaryAction={{ label: "Contact Me", to: "/contact" }}
      />
      <Resume />
      <Certificates />
    </>
  );
}

export default ResumePage;
