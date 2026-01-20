import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sun, Moon, BookOpen, Sparkles, Church, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineStep {
  day: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const steps: TimelineStep[] = [
  { day: 1, title: "Silêncio Interior", description: "Aprendendo a aquietar a mente", Icon: Moon },
  { day: 2, title: "Entrega", description: "Deixando as preocupações aos pés de Deus", Icon: Heart },
  { day: 3, title: "Gratidão", description: "Reconhecendo as bênçãos diárias", Icon: Sun },
  { day: 4, title: "Palavra", description: "Meditando nas Escrituras", Icon: BookOpen },
  { day: 5, title: "Perdão", description: "Liberando mágoas e ressentimentos", Icon: Sparkles },
  { day: 6, title: "Propósito", description: "Descobrindo sua missão", Icon: Church },
  { day: 7, title: "Renovação", description: "Recebendo força para continuar", Icon: Flame },
];

const TimelineNode = ({ step, index, isLast }: { step: TimelineStep; index: number; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const IconComponent = step.Icon;

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline line and node */}
      <div className="flex flex-col items-center">
        {/* Circular Node */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <IconComponent size={24} className="text-primary" />
          </motion.div>
          
          {/* Day badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step.day}
          </div>
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <div className="relative w-0.5 h-20 md:h-24 bg-border overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-primary"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="flex-1 pb-8 md:pb-12"
      >
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="font-serif text-xl md:text-2xl text-foreground mb-2"
        >
          Dia {step.day}: {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          className="text-muted-foreground"
        >
          {step.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

const RitualTimeline = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Sua Jornada de 7 Dias
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada dia foi pensado para te guiar em uma caminhada espiritual progressiva
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, index) => (
            <TimelineNode
              key={step.day}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualTimeline;
