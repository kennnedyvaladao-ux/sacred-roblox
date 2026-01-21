import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Libere o chat da sua conta <span className="text-primary">agora</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            className="group w-full max-w-md h-auto py-6 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <span className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-2">
                👉 Comprar agora e acessar o método
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-normal opacity-90">
                Acesso imediato ao PDF após o pagamento
              </span>
            </span>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock size={16} className="text-primary" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap size={16} className="text-primary" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield size={16} className="text-primary" />
            <span>Conteúdo educacional</span>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          🔒 Conteúdo educacional. Resultados podem variar conforme a conta.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
