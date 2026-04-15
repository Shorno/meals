import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import FeaturedSection from "@/components/home/featured-section";
import RecentlyFeaturedSection from "@/components/home/recently-featured-section";
import ShareSection from "@/components/home/share-section";
import DiscoverSection from "@/components/home/discover-section";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <FeaturedSection />
        <RecentlyFeaturedSection />
        <ShareSection />
        <DiscoverSection />
      </main>
      <Footer />
    </>
  );
}
