import { motion } from "framer-motion";
import { MessageSquareOff, Gamepad2, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative elements (now static after initial appearance) */}
      <motion.div
        className="absolute top-20 left-10 text-primary/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <MessageSquareOff size={32} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 text-accent/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Gamepad2 size={28} />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="text-sm text-foreground/80">Método Shadow Chat</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">Seu chat do Roblox</span>
          <br />
          <span className="text-primary">NÃO foi removido.</span>
          <br />
          <span className="text-muted-foreground text-3xl md:text-4xl">Ele está apenas bloqueado em modo silencioso.</span>
        </motion.h1>

        <motion.div
          className="space-y-3 text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Isso está acontecendo com contas no Brasil —</p>
          <p className="text-foreground font-medium">e quase todo mundo tenta resolver do jeito errado.</p>
        </motion.div>
      </div>

      {/* Scroll indicator arrows (now static after initial appearance) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ChevronDown size={24} className="text-primary/70" />
        <ChevronDown size={24} className="text-primary/50 -mt-3" />
        <ChevronDown size={24} className="text-primary/30 -mt-3" />
      </motion.div>
    </section>
  );
};

export default HeroSection;