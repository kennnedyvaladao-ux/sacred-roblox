import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquareOff, Bell, Settings, Headphones, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Symptom {
  Icon: LucideIcon;
  text: string;
  color: string;
  glowColor: string;
}

const symptoms: Symptom[] = [
  { 
    Icon: MessageSquareOff, 
    text: "O chat simplesmente sumiu",
    color: "text-red-400",
    glowColor: "shadow-red-500/50"
  },
  { 
    Icon: Bell, 
    text: "Nenhum aviso de ban",
    color: "text-orange-400",
    glowColor: "shadow-orange-500/50"
  },
  { 
    Icon: Settings, 
    text: "Configurações parecem normais",
    color: "text-yellow-400",
    glowColor: "shadow-yellow-500/50"
  },
  { 
    Icon: Headphones, 
    text: "O suporte não resolve",
    color: "text-purple-400",
    glowColor: "shadow-purple-500/50"
  },
  { 
    Icon: UserPlus, 
    text: "Criar outra conta não adiantou",
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
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Isso descreve sua situação?
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Se você se identificou com pelo menos um ponto, o problema provavelmente não é sua conta.
        </motion.p>

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
      </div>
    </section>
  );
};

export default SymptomsSection;
