import { motion } from "framer-motion";
import { MessageSquareOff, AlertTriangle, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/50"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageSquareOff size={32} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 text-accent/40"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Gamepad2 size={28} />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary border border-border">
            <AlertTriangle size={16} className="text-primary" />
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
          className="space-y-3 text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Isso está acontecendo com contas no Brasil —</p>
          <p className="text-foreground font-medium">e quase todo mundo tenta resolver do jeito errado.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="group h-auto py-4 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              👉 Entender o que está acontecendo
            </span>
          </Button>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AlertTriangle size={14} />
          Conteúdo informativo. Não envolve hacks ou violação de regras.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
