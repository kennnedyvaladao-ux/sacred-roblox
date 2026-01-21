"use client";

import { motion } from "framer-motion";
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
  const IconComponent = symptom.Icon;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon circle */}
      <motion.div
        className="relative"
      >
        <motion.div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border-2 border-current ${symptom.color} flex items-center justify-center shadow-lg ${symptom.glowColor}`}
          whileHover={{ scale: 1.1 }} // Transição mais leve
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }} // Transição mais simples
        >
          <IconComponent size={28} className={symptom.color} />
        </motion.div>
      </motion.div>

      {/* Text below icon */}
      <p className="mt-4 text-center text-foreground font-medium max-w-[200px] text-sm md:text-base">
        {symptom.text}
      </p>

      {/* Connecting line */}
      {!isLast && (
        <div className="relative w-0.5 h-12 md:h-16 bg-border/30 mt-4 overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }} // Atraso para a linha aparecer depois do nó
            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-current to-transparent ${symptom.color}`}
          />
        </div>
      )}
    </motion.div>
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