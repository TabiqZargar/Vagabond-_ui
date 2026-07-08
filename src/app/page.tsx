import ShaderBackground from "@/components/ShaderBackground";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import InkDivider from "@/components/InkDivider";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <EditorialSection />
        <div className="px-margin-desktop">
          <InkDivider className="w-full" />
        </div>
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
