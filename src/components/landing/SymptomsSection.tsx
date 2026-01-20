import { motion } from "framer-motion";
import { Brain, Moon, Weight, HelpCircle, Battery } from "lucide-react";

const symptoms = [
  { icon: Brain, text: "Ansiedade sem um motivo claro" },
  { icon: Moon, text: "Dificuldade para desligar a mente" },
  { icon: Weight, text: "Sensação de carregar tudo sozinho" },
  { icon: HelpCircle, text: "Medo de tomar decisões erradas" },
  { icon: Battery, text: "Cansaço emocional constante" },
];

const SymptomsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-primary mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Talvez você esteja sentindo:
        </motion.h2>

        <div className="space-y-4">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(43 80% 65% / 0.5)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <symptom.icon size={20} className="text-primary" />
              </div>
              <p className="text-lg text-foreground">{symptom.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">Isso não é falta de fé.</p>
          <p className="text-xl text-primary font-medium">É excesso de peso na alma.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SymptomsSection;
