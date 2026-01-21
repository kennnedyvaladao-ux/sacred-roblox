import HeroSection from "@/components/landing/HeroSection";
import SymptomsSection from "@/components/landing/SymptomsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import MethodSection from "@/components/landing/MethodSection";
import OfferSection from "@/components/landing/OfferSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <SymptomsSection />
      <SolutionSection />
      <MethodSection />
      <OfferSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Método Shadow Chat. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
