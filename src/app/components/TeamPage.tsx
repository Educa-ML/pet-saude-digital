import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { Footer } from './Footer';
import imgDinair from '../../imports/Dinair_Machado.jpeg';
import imgMargareth from '../../imports/Margareth_Almeida.jpg';
import imgAnaRigolin from '../../imports/Ana_Rigolin.jpg';
import imgAnaCarolina from '../../imports/Ana_Carolina_.jpg';
import imgMariaBitencourt from '../../imports/Maria_Eduarda_Bitencourt_.jpg';
import imgIsabella from '../../imports/Isabella_Leonardo.jpeg';
import imgLucas from '../../imports/Lucas_Freitas.png';
import imgEmily from '../../imports/Emily.jpg';
import imgLuisa from '../../imports/Luisa_Darcie.jpg';
import imgGabriel from '../../imports/Gabriel_Nunes_Fernandes.jpg';
import imgVeronica from '../../imports/Veronica.jpg';
import imgSilvana from '../../imports/Silvana.jpeg';
import imgMariaCarneiro from '../../imports/Maria_Eduarda_carneiro.jpg';
import imgMariaMarques from '../../imports/Maria_Eduarda.jpeg';

const teamMembers = [
  {
    name: 'Dinair Ferreira Machado',
    role: 'Docente',
    institution: 'FMB-UNESP',
    bio: '',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Veronica Oliveira de Carvalho',
    role: 'Docente',
    institution: 'Unesp, IGCE, DEMAC',
    bio: 'Ciências da Computação',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'Margareth Aparecida Santini Almeida',
    role: 'Docente',
    institution: 'FMB-UNESP',
    bio: 'Ciências Sociais',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
  },
  {
    name: 'Ana Luísa Rigolin',
    role: 'Discente (pós-graduação)',
    institution: 'FMB-UNESP',
    bio: 'Medicina',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
];

function MemberCard({
  member,
  index,
  onImageChange,
}: {
  member: typeof teamMembers[0];
  index: number;
  onImageChange?: (url: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onImageChange(url);
    e.target.value = '';
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
        whileHover={{ y: -10 }}
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Upload button */}
          {onImageChange && (
            <>
              <button
                onClick={() => fileRef.current?.click()}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/70"
                title="Trocar foto"
              >
                <Camera size={16} />
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="text-sm text-purple-600 mb-1">{member.role}</div>
          <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
          <div className="text-sm text-gray-400 mb-3">{member.institution}</div>
          {member.bio && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Formação:</span>
              <span className="text-sm text-gray-600">{member.bio}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TeamPage() {
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  function imgFor(name: string, fallback: string) {
    return customImages[name] ?? fallback;
  }

  function handleChange(name: string) {
    return (url: string) => setCustomImages(prev => ({ ...prev, [name]: url }));
  }

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ===== DECORATIVE BACKGROUND SHAPES (same as About/Data pages) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Diagonal band 1 */}
        <div
          className="absolute w-[140%] h-[500px] bg-gradient-to-r from-purple-600/[0.07] via-purple-500/[0.04] to-transparent"
          style={{ top: '60vh', left: '-20%', transform: 'rotate(-6deg)' }}
        />
        {/* Diagonal band 2 */}
        <div
          className="absolute w-[140%] h-[400px] bg-gradient-to-l from-pink-500/[0.06] via-purple-400/[0.03] to-transparent"
          style={{ top: '160vh', right: '-20%', transform: 'rotate(4deg)' }}
        />
        {/* Diagonal band 3 */}
        <div
          className="absolute w-[140%] h-[600px] bg-gradient-to-r from-purple-700/[0.05] via-fuchsia-500/[0.04] to-transparent"
          style={{ top: '280vh', left: '-20%', transform: 'rotate(-5deg)' }}
        />
        {/* Large soft circle blobs */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-purple-400/[0.04] blur-[150px]" style={{ top: '80vh', left: '-200px' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-400/[0.05] blur-[120px]" style={{ top: '200vh', right: '-150px' }} />
        {/* Small floating dots */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-purple-400/20"
          style={{ top: '90vh', left: '10%' }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-pink-400/25"
          style={{ top: '150vh', right: '15%' }}
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-purple-300/15"
          style={{ top: '240vh', left: '70%' }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-purple-950 via-purple-900 to-pink-950 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-purple-200 text-sm mb-6">
              Quem somos
            </div>
            <h1 className="text-4xl md:text-7xl text-white mb-6 tracking-tight">
              A equipe por trás
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">do projeto</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="relative z-10 py-20 px-6 space-y-24">

        {/* 1 — Responsável */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-purple-400 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">01</span>
            <h2 className="text-2xl text-gray-800 tracking-tight">Responsável</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent" />
          </motion.div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <MemberCard
                member={{ ...teamMembers[0], image: imgFor(teamMembers[0].name, imgDinair) }}
                index={0}
              />
            </div>
          </div>
        </div>

        {/* 2 — Tutoria e Orientação */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-pink-400 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">02</span>
            <h2 className="text-2xl text-gray-800 tracking-tight">Tutoria e Orientação</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { ...teamMembers[1], image: imgVeronica },
              { ...teamMembers[2], image: imgMargareth },
              { ...teamMembers[3], image: imgAnaRigolin },
              {
                name: 'Silvana Ribeiro dos Santos',
                role: 'Assistente Social (coordenação)',
                institution: 'Centro de Referência da Mulher',
                bio: 'Serviço Social',
                image: imgSilvana,
              },
            ].map((member, index) => (
              <MemberCard
                key={member.name}
                member={{ ...member, image: imgFor(member.name, member.image) }}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 3 — Alunos */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-fuchsia-400 bg-fuchsia-50 border border-fuchsia-100 px-3 py-1 rounded-full">03</span>
            <h2 className="text-2xl text-gray-800 tracking-tight">Alunos</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-200 to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ana Carolina Alves Santos',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Medicina',
                image: imgAnaCarolina,
              },
              {
                name: 'Maria Eduarda Oliveira Bitencourt',
                role: 'Discente',
                institution: 'Instituto de Biociências - UNESP Botucatu',
                bio: 'Física Médica',
                image: imgMariaBitencourt,
              },
              {
                name: 'Isabella Silva Leonardo',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Enfermagem',
                image: imgIsabella,
              },
              {
                name: 'Lucas Gonçalves de Freitas',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Medicina',
                image: imgLucas,
              },
              {
                name: 'Emilly Cavalcante de Moura Maia',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Medicina',
                image: imgEmily,
              },
              {
                name: 'Luísa Pedrosa Darcie',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Medicina',
                image: imgLuisa,
              },
              {
                name: 'Maria Eduarda Carneiro Nascimento',
                role: 'Discente',
                institution: 'FMB-UNESP',
                bio: 'Enfermagem',
                image: imgMariaCarneiro,
              },
              {
                name: 'Maria Eduarda Marques Oliveira Barros de Amaro Franco Rosa',
                role: 'Discente',
                institution: 'FEG-UNESP',
                bio: 'Eng. Elétrica',
                image: imgMariaMarques,
              },
              {
                name: 'Gabriel Nunes Fernandes',
                role: 'Discente',
                institution: 'Unesp, IGCE, DEMAC',
                bio: 'Ciências da Computação',
                image: imgGabriel,
              },
            ].map((member, index) => (
              <MemberCard
                key={member.name}
                member={{ ...member, image: imgFor(member.name, member.image) }}
                index={index}
              />
            ))}
          </div>
        </div>

      </section>

      {/* Values */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight">
              Sobre
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> nós</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
              Grupo de trabalho que faz parte do Projeto PET - SAÚDE DIGITAL da UNESP de Botucatu
            </p>
            <p className="text-gray-400 text-base max-w-2xl mx-auto italic mb-16">
              Boletim epidemiológico da violência contra a mulher: mapeamento digital, prevenção e intervenção oportuna
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🔒', title: 'Privacidade', desc: 'Proteção total dos dados e identidades das vítimas' },
              { emoji: '📊', title: 'Rigor científico', desc: 'Metodologia transparente e verificável em todas as análises' },
              { emoji: '💜', title: 'Impacto social', desc: 'Compromisso com mudanças reais através da ciência de dados' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-pink-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/[0.07] blur-[130px]" style={{ bottom: '-80px', left: '20%' }} animate={{ y: [0, -25, 0], x: [0, 15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-[350px] h-[350px] rounded-full bg-pink-600/[0.06] blur-[100px]" style={{ bottom: '-50px', right: '10%' }} animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <Footer />
      </div>
    </div>
  );
}