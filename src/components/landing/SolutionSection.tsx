import { motion } from "framer-motion";
import { ShieldOff, AlertCircle, XCircle } from "lucide-react";

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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldOff size={32} className="text-primary" />
              </div>
            </motion.div>

            <div className="space-y-4 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                O chat não foi "desativado".
              </h2>
              <p className="text-lg text-primary font-medium">
                Ele foi colocado em um estado de restrição silenciosa automática.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50"
              >
                <AlertCircle size={20} className="text-orange-400" />
                <span className="text-sm text-muted-foreground text-center">Não gera aviso</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50"
              >
                <XCircle size={20} className="text-red-400" />
                <span className="text-sm text-muted-foreground text-center">Não aparece como ban</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50"
              >
                <ShieldOff size={20} className="text-purple-400" />
                <span className="text-sm text-muted-foreground text-center">Ativada pelo sistema</span>
              </motion.div>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-center text-foreground font-medium">
                E aqui está o erro mais comum 👇
              </p>
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className="text-center text-muted-foreground">
                  Quando você tenta resolver do jeito "padrão",
                  <br />
                  <span className="text-destructive font-medium">você reforça o bloqueio sem perceber.</span>
                </p>
              </div>
              <p className="text-center text-muted-foreground">
                Por isso tutoriais falham. Por isso o suporte não ajuda.
                <br />
                <span className="text-foreground font-medium">Por isso nada muda.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;