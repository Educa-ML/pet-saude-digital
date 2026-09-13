import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dra. Maria Silva',
    role: 'Coordenadora do Projeto',
    institution: 'Universidade Federal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. João Santos',
    role: 'Cientista de Dados',
    institution: 'Instituto de Pesquisa',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Profa. Ana Costa',
    role: 'Especialista em Direitos Humanos',
    institution: 'Universidade Estadual',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Carlos Oliveira',
    role: 'Estatístico',
    institution: 'Centro de Análise de Dados',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
];

export function Team() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Equipe Responsável
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais dedicados à análise responsável de dados e ao combate à violência
            contra a mulher
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
                <p className="text-purple-600 mb-1">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.institution}</p>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
                    <Mail size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
