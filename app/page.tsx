import Hero from "@/components/Hero";
import ClubOverview from "@/components/ClubOverview";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import CafeMenu from "@/components/CafeMenu";
import BookingSystem from "@/components/BookingSystem";
import TeamFinder from "@/components/TeamFinder";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <ClubOverview />
      <Location />
      <Pricing />
      <Gallery />
      <CafeMenu />
      <BookingSystem />
      <TeamFinder />
    </div>
  );
}
