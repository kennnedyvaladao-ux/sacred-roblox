import { motion } from "framer-motion";
import { Church, Sparkles, Heart } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative p-8 md:p-12 rounded-2xl bg-card border border-border overflow-hidden"
          style={{ boxShadow: "0 8px 40px -10px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          
          <div className="relative z-10 space-y-6">
            <motion.div
              className="flex justify-center"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Church size={32} className="text-primary" />
              </div>
            </motion.div>

            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground">
                A maioria das pessoas tenta ignorar isso.
              </p>
              <p className="text-lg text-muted-foreground">Se distrair. Fingir que está tudo bem.</p>
              <p className="text-lg text-foreground">
                Mas o que realmente ajuda é criar{" "}
                <span className="text-primary font-medium">
                  pequenos momentos diários de silêncio, oração e conexão com Deus
                </span>
                .
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              >
                <Sparkles size={18} className="text-primary" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              >
                <Heart size={18} className="text-primary" />
              </motion.div>
            </div>

            <p className="text-center text-muted-foreground">
              Não algo complicado. Não algo religioso demais.
              <br />
              <span className="text-foreground">Algo simples. Possível. Espiritual.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
