import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Link } from 'react-router';
import { Shield, Database, Eye, Target, ArrowRight, ChevronDown, BarChart3, Layers, ShieldCheck, CalendarDays } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {target.toLocaleString('pt-BR')}{suffix}
      </motion.span>
    </motion.span>
  );
}

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ParallaxImage({ src, alt, speed = 0.3 }: { src: string; alt: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className="overflow-hidden rounded-3xl">
      <motion.div style={{ y }} className="will-change-transform">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover scale-125"
        />
      </motion.div>
    </div>
  );
}

export function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.1]);
  const heroTextY = useTransform(heroScroll, [0, 0.5], [0, -100]);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Database,
      title: 'Origem dos dados',
      description: 'Dados coletados de delegacias especializadas da mulher, seguindo protocolos rigorosos de privacidade e segurança da informação.',
    },
    {
      icon: Shield,
      title: 'Anonimização completa',
      description: 'Aplicação de técnicas de k-anonymity para garantir total privacidade das vítimas e impossibilidade de reidentificação.',
    },
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Metodologia aberta e verificável, com foco em responsabilidade social e rigor acadêmico.',
    },
    {
      icon: Target,
      title: 'Objetivo social',
      description: 'Gerar insights acionáveis para políticas públicas, conscientização e estratégias de prevenção.',
    },
  ];

  const stats = [
    { number: 7000, suffix: '+', label: 'Registros analisados' },
    { number: 5, label: 'Tipos de violência' },
    { number: 100, suffix: '%', label: 'Dados anonimizados' },
    { number: 12, label: 'Meses de dados' },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ===== DECORATIVE BACKGROUND SHAPES (diagonal bands inspired by reference) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Diagonal band 1 — top area, going left-to-right */}
        <div
          className="absolute w-[140%] h-[500px] bg-gradient-to-r from-purple-600/[0.07] via-purple-500/[0.04] to-transparent"
          style={{ top: '110vh', left: '-20%', transform: 'rotate(-6deg)' }}
        />
        {/* Diagonal band 2 — mid area, going right-to-left */}
        <div
          className="absolute w-[140%] h-[400px] bg-gradient-to-l from-pink-500/[0.06] via-purple-400/[0.03] to-transparent"
          style={{ top: '220vh', right: '-20%', transform: 'rotate(4deg)' }}
        />
        {/* Diagonal band 3 — lower area */}
        <div
          className="absolute w-[140%] h-[600px] bg-gradient-to-r from-purple-700/[0.05] via-fuchsia-500/[0.04] to-transparent"
          style={{ top: '340vh', left: '-20%', transform: 'rotate(-5deg)' }}
        />
        {/* Large soft circle blobs */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-purple-400/[0.04] blur-[150px]" style={{ top: '130vh', left: '-200px' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-400/[0.05] blur-[120px]" style={{ top: '260vh', right: '-150px' }} />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-500/[0.04] blur-[130px]" style={{ top: '380vh', left: '50%', transform: 'translateX(-50%)' }} />
        {/* Small floating dots */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-purple-400/20"
          style={{ top: '140vh', left: '10%' }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-pink-400/25"
          style={{ top: '200vh', right: '15%' }}
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-purple-300/15"
          style={{ top: '300vh', left: '70%' }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-fuchsia-400/20"
          style={{ top: '250vh', left: '25%' }}
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Thin diagonal lines */}
        <div
          className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-purple-300/15 to-transparent"
          style={{ top: '160vh', left: '-10%', transform: 'rotate(-3deg)' }}
        />
        <div
          className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-pink-300/10 to-transparent"
          style={{ top: '290vh', left: '-10%', transform: 'rotate(2deg)' }}
        />
      </div>

      {/* HERO — fullscreen video-style with overlay */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
        {/* Background image with Ken Burns slow zoom effect */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Photo background with cinematic zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.25 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            <img
              src="https://images.unsplash.com/photo-1560537082-c262da207adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1hcmNoJTIwZmVtaW5pc20lMjBzaWducyUyMGNyb3dkfGVufDF8fHx8MTc3NjQwNTAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mulheres unidas"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dark overlay with purple tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/70 to-black/80" />

          {/* Animated light leaks for cinematic feel */}
          <motion.div
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Film grain texture */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
              backgroundSize: '128px 128px',
            }}
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-purple-200 text-sm mb-8">
              Projeto de Análise de Dados
            </div>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight"
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >Mapear</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent tracking-tight"
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >Para proteger</motion.h1>
          </div>

          <motion.p
            className="mt-8 text-lg md:text-xl text-purple-100 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Transformando dados em consciência. Análise responsável de dados
            anonimizados para o combate à violência contra a mulher.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              to="/dados"
              className="group px-8 py-4 bg-white text-purple-900 rounded-full hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explorar dados
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#missao"
              className="px-8 py-4 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Nossa missão
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-white/40" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
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
              {/* Circular progress */}
              
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

      {/* CTA WITH LAPTOP MOCKUP + FOOTER — unified gradient */}
      <div className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-pink-950 overflow-hidden">
        {/* Decorative shapes — diagonal bands, blobs, dots, lines (spanning CTA + footer) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute w-[140%] h-[300px] bg-gradient-to-r from-purple-400/[0.08] via-pink-500/[0.05] to-transparent" style={{ top: '-80px', left: '-20%', transform: 'rotate(-6deg)' }} />
          <div className="absolute w-[140%] h-[250px] bg-gradient-to-l from-pink-400/[0.07] via-purple-500/[0.04] to-transparent" style={{ top: '35%', right: '-20%', transform: 'rotate(4deg)' }} />
          <div className="absolute w-[120%] h-[200px] bg-gradient-to-r from-fuchsia-500/[0.06] via-purple-400/[0.03] to-transparent" style={{ top: '55%', left: '-10%', transform: 'rotate(-3deg)' }} />
          {/* Extra bands extending into footer area */}
          <div className="absolute w-[140%] h-[250px] bg-gradient-to-l from-purple-400/[0.07] via-fuchsia-500/[0.04] to-transparent" style={{ bottom: '5%', right: '-15%', transform: 'rotate(5deg)' }} />
          <div className="absolute w-[130%] h-[180px] bg-gradient-to-r from-pink-500/[0.06] via-purple-400/[0.03] to-transparent" style={{ bottom: '15%', left: '-15%', transform: 'rotate(-4deg)' }} />

          {/* Blobs */}
          <motion.div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/[0.08] blur-[120px]" style={{ top: '-100px', left: '-100px' }} animate={{ y: [0, 40, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/[0.08] blur-[100px]" style={{ top: '40%', right: '-60px' }} animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-[350px] h-[350px] rounded-full bg-fuchsia-500/[0.06] blur-[110px]" style={{ top: '30%', left: '60%' }} animate={{ y: [0, 25, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          {/* Footer area blobs */}
          <motion.div className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/[0.07] blur-[130px]" style={{ bottom: '-80px', left: '20%' }} animate={{ y: [0, -25, 0], x: [0, 15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-[350px] h-[350px] rounded-full bg-pink-600/[0.06] blur-[100px]" style={{ bottom: '-50px', right: '10%' }} animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />

          {/* Floating dots */}
          <motion.div className="absolute w-3 h-3 rounded-full bg-purple-300/30" style={{ top: '10%', left: '8%' }} animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-2 h-2 rounded-full bg-pink-300/35" style={{ top: '50%', right: '12%' }} animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-4 h-4 rounded-full bg-fuchsia-300/20" style={{ top: '35%', left: '75%' }} animate={{ y: [0, -18, 0], x: [0, 12, 0], opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-2.5 h-2.5 rounded-full bg-purple-200/25" style={{ bottom: '25%', left: '30%' }} animate={{ y: [0, 15, 0], opacity: [0.2, 0.45, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          {/* Footer area dots */}
          <motion.div className="absolute w-3 h-3 rounded-full bg-pink-300/25" style={{ bottom: '10%', left: '65%' }} animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-2 h-2 rounded-full bg-purple-300/30" style={{ bottom: '8%', right: '25%' }} animate={{ y: [0, 15, 0], x: [0, -10, 0], opacity: [0.25, 0.5, 0.25] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute w-3.5 h-3.5 rounded-full bg-fuchsia-300/20" style={{ bottom: '18%', left: '12%' }} animate={{ y: [0, 22, 0], opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />

          {/* Thin diagonal lines */}
          <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" style={{ top: '20%', left: '-10%', transform: 'rotate(-4deg)' }} />
          <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-pink-300/15 to-transparent" style={{ top: '60%', left: '-10%', transform: 'rotate(3deg)' }} />
          {/* Footer area lines */}
          <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-purple-300/15 to-transparent" style={{ bottom: '20%', left: '-10%', transform: 'rotate(-2deg)' }} />
          <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-pink-300/10 to-transparent" style={{ bottom: '8%', left: '-10%', transform: 'rotate(3.5deg)' }} />
        </div>

        {/* CTA content */}
        

        {/* Footer inside the gradient */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}