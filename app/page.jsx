import Hero from "../components/invitation/Hero";
import InvitationNote from "../components/invitation/InvitationNote";
import DateSection from "../components/invitation/DateSection";
import VenueSection from "../components/invitation/VenueSection";
import ClosingSection from "../components/invitation/ClosingSection";
import Footer from "../components/invitation/Footer";
import MusicToggle from "../components/invitation/MusicToggle";
import ScrollReveal from "../components/invitation/ScrollReveal";

export default function Page() {
  return (
    <>
      <MusicToggle />
      <ScrollReveal />
      <main id="top">
        <Hero />
        <InvitationNote />
        <DateSection />
        <VenueSection />
        <ClosingSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
