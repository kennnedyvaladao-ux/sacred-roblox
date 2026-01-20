import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/50"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={32} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 text-primary/40"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart size={24} />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary border border-border">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-foreground/80">Ritual de 7 Dias para a Alma</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">Se essa mensagem tocou você,</span>
          <br />
          <span className="text-primary">é porque sua alma está pedindo cuidado.</span>
        </motion.h1>

        <motion.div
          className="space-y-4 text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Você não está fraco.</p>
          <p>Você não está exagerando.</p>
          <p className="text-foreground font-medium">E você não está sozinho.</p>
        </motion.div>

        <motion.p
          className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Muitas pessoas chegam até aqui achando que estão perdidas… quando, na verdade, só estão{" "}
          <span className="text-primary font-medium">cansadas demais para continuar do mesmo jeito</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
