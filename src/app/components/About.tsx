import { motion } from 'motion/react';
import { Shield, Database, Eye, Target } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Origem dos dados',
    description: 'Dados coletados de delegacias especializadas da mulher, seguindo protocolos de privacidade e segurança'
  },
  {
    icon: Shield,
    title: 'Anonimização completa',
    description: 'Aplicação de técnicas de k-anonymity para garantir total privacidade das vítimas'
  },
  {
    icon: Eye,
    title: 'Transparência',
    description: 'Metodologia aberta e verificável, com foco em responsabilidade social e acadêmica'
  },
  {
    icon: Target,
    title: 'Objetivo social',
    description: 'Gerar insights para políticas públicas, conscientização e prevenção'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sobre o Projeto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Este projeto nasceu da necessidade de transformar dados sensíveis em conhecimento
            responsável, contribuindo para o combate à violência contra a mulher através da
            análise científica e conscientização social.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl mb-4">Compromisso com a privacidade</h3>
          <p className="text-purple-100 text-lg leading-relaxed">
            Todos os dados apresentados neste projeto são completamente anonimizados e agregados.
            Nenhuma informação pessoal ou identificável é armazenada ou exibida. Utilizamos
            técnicas avançadas de privacidade diferencial e k-anonymity para garantir que a
            identidade das vítimas seja protegida enquanto geramos insights valiosos para a
            sociedade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
