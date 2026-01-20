import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            className="group w-full max-w-md h-auto py-6 px-8 text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <span className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-2">
                Quero começar agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-normal opacity-90">
                Acesso imediato • Seguro • Sem compromisso
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
            <Shield size={16} className="text-primary" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-primary" />
            <span>Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" />
            <span>Garantia de 7 dias</span>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.p
          className="mt-12 text-lg text-muted-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          "Se algo em você sentiu que esse é o momento…
          <br />
          <span className="text-primary font-medium">confie nisso. Deus está falando.</span>"
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
