import { motion } from "framer-motion";
import { Zap, ShieldCheck, Code, ListChecks } from "lucide-react";

const features = [
  { Icon: ShieldCheck, text: "Sem hacks", color: "text-green-400" },
  { Icon: Code, text: "Sem programas externos", color: "text-blue-400" },
  { Icon: ShieldCheck, text: "Sem violar regras", color: "text-emerald-400" },
  { Icon: ListChecks, text: "Método lógico, passo a passo", color: "text-purple-400" },
];

const MethodSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/20 border border-accent/30"
            whileHover={{ scale: 1.05 }}
          >
            <Zap size={18} className="text-accent" />
            <span className="text-accent font-medium">Método Exclusivo</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apresentando o <span className="text-primary">Método Shadow Chat</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Um protocolo recém-criado que organiza os sinais corretos da conta,
            permitindo que o sistema volte a liberar o chat normalmente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
            >
              <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center`}>
                <feature.Icon size={22} className={feature.color} />
              </div>
              <span className="text-foreground font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Authority section */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-secondary/50 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Este método surgiu após:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Testes reais em múltiplas contas",
              "Erros que pioravam o bloqueio",
              "Tentativas frustradas com o suporte",
              "Identificação do padrão mais comum no Brasil",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center text-muted-foreground">
            Não é promessa milagrosa.
            <br />
            <span className="text-foreground font-medium">É processo correto aplicado na ordem certa.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
