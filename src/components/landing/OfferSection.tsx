import { motion } from "framer-motion";
import { Headphones, FileText, Gift, Heart, BookOpen, Moon, Sun, Sparkles, Check } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Acalmar a mente e o coração" },
  { icon: BookOpen, text: "Organizar seus pensamentos com a Palavra" },
  { icon: Sun, text: "Tomar decisões com mais clareza" },
  { icon: Moon, text: "Dormir com mais paz interior" },
  { icon: Sparkles, text: "Sentir a presença de Deus" },
];

const includes = [
  { icon: Headphones, text: "7 áudios guiados de oração (5 a 10 minutos)" },
  { icon: FileText, text: "Um devocional simples de acompanhamento" },
  { icon: Gift, text: "Bônus: Meditação para momentos de ansiedade" },
];

const OfferSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que é esse Ritual Espiritual?
        </motion.h2>

        <motion.p
          className="text-center text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Um ritual de oração guiada de 7 dias, criado para pessoas comuns — 
          ocupadas, cansadas e que buscam renovar sua fé.
        </motion.p>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Check size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground">{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div
          className="p-8 rounded-2xl bg-card border-2 border-primary/30"
          style={{ boxShadow: "0 4px 30px -5px hsl(43 80% 65% / 0.3)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl text-primary mb-6 text-center">
            Você terá acesso a:
          </h3>

          <div className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <span className="text-lg text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-1 text-muted-foreground">
            <p>Acesso imediato.</p>
            <p>Tudo digital.</p>
            <p className="text-foreground font-medium">Você pode começar hoje.</p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-12 text-center space-y-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>Isso não substitui acompanhamento espiritual.</p>
          <p>Não promete milagres instantâneos.</p>
          <p className="text-foreground">
            Mas pode te ajudar a{" "}
            <span className="text-primary font-medium">respirar melhor por dentro</span>
            {" "}enquanto caminha com Deus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
