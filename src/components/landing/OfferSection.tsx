import { motion } from "framer-motion";
import { FileText, XCircle, ListChecks, Shield, Check, CheckCircle, X } from "lucide-react";

const includes = [
  { icon: FileText, text: "PDF direto ao ponto" },
  { icon: XCircle, text: "O que NÃO fazer (parte mais importante)" },
  { icon: ListChecks, text: "Passo a passo organizado" },
  { icon: Shield, text: "Como evitar que o chat seja bloqueado novamente" },
  { icon: Check, text: "Aplicável na conta atual" },
];

const forYou = [
  "Seu chat sumiu sem explicação",
  "Você joga Roblox e usa o chat para socializar",
  "Quer entender e corrigir o problema corretamente",
];

const notForYou = [
  "Procura hacks ou trapaças",
  "Não quer seguir instruções",
  "Quer algo ilegal ou instantâneo",
];

const OfferSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que você recebe ao acessar o método
        </motion.h2>

        {/* What's included */}
        <motion.div
          className="p-8 rounded-2xl bg-card border-2 border-primary/30"
          style={{ boxShadow: "0 4px 30px -5px hsl(var(--primary) / 0.3)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <span className="text-lg text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center p-4 rounded-xl bg-secondary/50">
            <p className="text-muted-foreground">
              📄 Entrega imediata após a confirmação do pagamento.
            </p>
          </div>
        </motion.div>

        {/* For who section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            className="p-6 rounded-2xl bg-card border border-green-500/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle size={20} />
              Este método é para você se:
            </h3>
            <div className="space-y-3">
              {forYou.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-card border border-red-500/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <XCircle size={20} />
              Não é para você se:
            </h3>
            <div className="space-y-3">
              {notForYou.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X size={16} className="text-red-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
