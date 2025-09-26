import Hero from "@/components/Hero";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import Platz from "@/components/Platz";
import Services from "@/components/Services";
import Footer from "@/components/Footer";   // ✅ fixed import
import Faq from "@/components/Faq";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MacbookScrollDemo />
      <Services />
      <Platz />
      <Faq/>
      <Footer />   {/* ✅ now using your Footer.tsx */}
    </div>
  );
};

export default Index;
