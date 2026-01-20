import { motion } from "framer-motion";
import { Brain, Moon, Weight, HelpCircle, Battery } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Symptom {
  Icon: LucideIcon;
  text: string;
  color: string;
  bgGradient: string;
  iconBg: string;
}

const symptoms: Symptom[] = [
  { 
    Icon: Brain, 
    text: "Ansiedade sem um motivo claro",
    color: "text-rose-400",
    bgGradient: "from-rose-500/20 to-rose-500/5",
    iconBg: "bg-rose-500/30"
  },
  { 
    Icon: Moon, 
    text: "Dificuldade para desligar a mente",
    color: "text-violet-400",
    bgGradient: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/30"
  },
  { 
    Icon: Weight, 
    text: "Sensação de carregar tudo sozinho",
    color: "text-slate-400",
    bgGradient: "from-slate-500/20 to-slate-500/5",
    iconBg: "bg-slate-500/30"
  },
  { 
    Icon: HelpCircle, 
    text: "Medo de tomar decisões erradas",
    color: "text-amber-400",
    bgGradient: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/30"
  },
  { 
    Icon: Battery, 
    text: "Cansaço emocional constante",
    color: "text-cyan-400",
    bgGradient: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/30"
  },
];

const SymptomsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Talvez você esteja sentindo:
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {symptoms.map((symptom, index) => {
            const IconComponent = symptom.Icon;
            return (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${symptom.bgGradient} border border-white/10 p-6 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Glow effect */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${symptom.iconBg} blur-3xl opacity-50`} />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-full ${symptom.iconBg} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent size={26} className={symptom.color} />
                  </motion.div>
                  
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {symptom.text}
                  </p>
                </div>

                {/* Subtle animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent`}
                  style={{
                    background: `linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, transparent, ${symptom.color.replace('text-', 'rgb(var(--')}/ 0.3), transparent) border-box`
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-muted-foreground">Isso não é falta de fé.</p>
          <p className="text-2xl md:text-3xl font-serif text-primary font-medium">
            É excesso de peso na alma.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SymptomsSection;
