import PageHero from "../components/PageHero";
import ContactSection from "../components/Contact";

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Open to remote support and technical support roles."
        description="Reach Surafel through LinkedIn, GitHub, Upwork, Telegram, or email for SaaS, fintech, crypto, P2P, product support, and support operations opportunities."
        primaryAction={{ label: "View Resume", to: "/resume" }}
      />
      <ContactSection />
    </>
  );
}

export default ContactPage;
