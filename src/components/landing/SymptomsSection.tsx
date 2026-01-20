import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Moon, Weight, HelpCircle, Battery } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Symptom {
  Icon: LucideIcon;
  text: string;
  color: string;
  glowColor: string;
}

const symptoms: Symptom[] = [
  { 
    Icon: Brain, 
    text: "Ansiedade sem um motivo claro",
    color: "text-rose-400",
    glowColor: "shadow-rose-500/50"
  },
  { 
    Icon: Moon, 
    text: "Dificuldade para desligar a mente",
    color: "text-violet-400",
    glowColor: "shadow-violet-500/50"
  },
  { 
    Icon: Weight, 
    text: "Sensação de carregar tudo sozinho",
    color: "text-slate-400",
    glowColor: "shadow-slate-400/50"
  },
  { 
    Icon: HelpCircle, 
    text: "Medo de tomar decisões erradas",
    color: "text-amber-400",
    glowColor: "shadow-amber-500/50"
  },
  { 
    Icon: Battery, 
    text: "Cansaço emocional constante",
    color: "text-cyan-400",
    glowColor: "shadow-cyan-500/50"
  },
];

const SymptomNode = ({ symptom, index, isLast }: { symptom: Symptom; index: number; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1]);

  const IconComponent = symptom.Icon;

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Icon circle */}
      <motion.div
        style={{ scale, opacity }}
        className="relative"
      >
        <motion.div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border-2 border-current ${symptom.color} flex items-center justify-center shadow-lg ${symptom.glowColor}`}
          style={{ boxShadow: `0 0 30px currentColor` }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent size={28} className={symptom.color} />
        </motion.div>
      </motion.div>

      {/* Text below icon */}
      <motion.p
        style={{ opacity }}
        className="mt-4 text-center text-foreground font-medium max-w-[200px] text-sm md:text-base"
      >
        {symptom.text}
      </motion.p>

      {/* Connecting line */}
      {!isLast && (
        <div className="relative w-0.5 h-12 md:h-16 bg-border/30 mt-4 overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-current to-transparent ${symptom.color}`}
          />
        </div>
      )}
    </div>
  );
};

const SymptomsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-primary mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Talvez você esteja sentindo:
        </motion.h2>

        {/* Centered vertical flow */}
        <div className="flex flex-col items-center">
          {symptoms.map((symptom, index) => (
            <SymptomNode
              key={index}
              symptom={symptom}
              index={index}
              isLast={index === symptoms.length - 1}
            />
          ))}
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
