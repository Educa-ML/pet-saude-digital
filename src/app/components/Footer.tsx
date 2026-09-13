import { Heart, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Heart className="text-pink-400" size={24} />
              Mapear para Proteger
            </h3>
            <p className="text-white/80 leading-relaxed">
              Projeto de análise de dados sobre violência contra a mulher, com foco em
              conscientização e mudança social através da ciência de dados.
            </p>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl mb-4">Precisa de ajuda?</h3>
            <div className="relative rounded-2xl p-6 border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden group hover:border-purple-400/30 transition-colors duration-500">
              {/* Subtle animated glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-[40px] group-hover:bg-purple-400/20 transition-all duration-500" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-pink-500/10 blur-[30px] group-hover:bg-pink-400/15 transition-all duration-500" />
              
              <div className="relative z-10">
                <p className="text-sm text-purple-300/80 mb-3">Central de Atendimento à Mulher</p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
                    <Phone size={20} className="text-pink-300" />
                  </div>
                  <span className="text-4xl bg-gradient-to-r from-purple-200 via-pink-200 to-fuchsia-200 bg-clip-text text-transparent tracking-tight">180</span>
                </div>
                <p className="text-sm text-white/60">
                  Ligue gratuitamente, 24h, para denunciar violência
                </p>
                {/* Decorative thin line */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-transparent" />
                <p className="mt-3 text-[11px] text-white/40 tracking-wide uppercase">Serviço gratuito e sigiloso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p>
              © {currentYear} Mapear para Proteger. Todos os direitos reservados.
            </p>
            <p>
              Dados anonimizados | Privacidade protegida | Pesquisa responsável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}