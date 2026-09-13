import { motion } from 'motion/react';
import { Dashboard } from './Dashboard';
import { Footer } from './Footer';

export function DataPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* ===== DECORATIVE BACKGROUND SHAPES (same style as About page) ===== */}
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
        <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-500/[0.04] blur-[130px]" style={{ top: '320vh', left: '50%', transform: 'translateX(-50%)' }} />
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
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-fuchsia-400/20"
          style={{ top: '190vh', left: '25%' }}
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Hero with background image */}
      <section className="relative pt-28 pb-32 px-6 overflow-hidden min-h-[420px]">
        <motion.div
          className="absolute inset-0 -bottom-32"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <img
            src="https://images.unsplash.com/photo-1516031190212-da133013de50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwc2NyZWVuJTIwZGFya3xlbnwxfHx8fDE3NzY0MDUyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dashboard de dados"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-purple-950/70" />
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"
          animate={{ x: [0, 80, 0], y: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px]"
          animate={{ x: [0, -60, 0], y: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight">
              Visualização de
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> Dados</span>
            </h1>
            <p className="text-purple-200/70 text-lg max-w-2xl mx-auto">
              Explore gráficos interativos sobre violência contra a mulher.
              Todos os dados são agregados e completamente anonimizados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UNDER CONSTRUCTION */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl w-full mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Em desenvolvimento
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl text-gray-900 tracking-tight mb-6">
            Site em{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              construção
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto mb-12">
            Esta página está sendo preparada com cuidado. Em breve você encontrará aqui mais informações sobre o projeto.
          </p>

          {/* Illustrated image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-52 h-52 rounded-3xl overflow-hidden shadow-xl shadow-purple-500/10"
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center gap-4 px-8">
              {/* Bar progress */}
              <div className="w-full">
                <div className="flex justify-between text-xs text-purple-400 mb-1.5">
                  <span>Progresso</span>
                  <span>65%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-purple-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: '65%' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Dashboard section */}
      <div className="relative z-10">
        <Dashboard />
      </div>

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
