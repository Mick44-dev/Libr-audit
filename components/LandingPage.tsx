
import React from 'react';
import AnimatedSection from './AnimatedSection';
import FluidDivider from './FluidDivider';
import Questionnaire from './Questionnaire';
import { Search, Layers, Unlink, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Styles pour le fond mesh et la texture */}
      <style>{`
        .bg-noise {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          filter: contrast(150%) brightness(120%);
          opacity: 0.15;
          mix-blend-mode: overlay;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform translate-x-1/4 z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <AnimatedSection>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  Clarifiez. Allégez. <br />
                  <span className="text-blue-600">Libérez votre entreprise.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Redonnez du souffle à votre TPE/PME en transformant le chaos opérationnel en une organisation fluide, autonome et performante.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a 
                    href="#questionnaire" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '#questionnaire');
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-[#2b3e63] text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Pré-Diagnostiquer mon organisation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#method" 
                    className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all text-center"
                  >
                    Découvrir la méthode
                  </a>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:w-1/2">
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60" />
                  <img 
                    src="/mindnode.png" 
                    alt="Dirigeant serein" 
                    className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <FluidDivider color="#f8fafc" />

      {/* Pillars Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Un Audit libérateur, pas une contrainte.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nous reposons votre structure sur trois piliers fondamentaux pour garantir sa pérennité.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Voir l’essentiel</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Extraire l'huile essentielle de votre organisation. Nous cartographions vos flux pour identifier les goulots d'étranglement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Alléger pour performer</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Élaguez l’inutile, gardez l’essentiel. Nous créons des outils sur mesure et formons vos équipes à l'efficacité pure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Unlink className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Libérer pour durer</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Rendre votre organisation indépendante. Nous mettons en place une délégation efficace pour éviter le micro-management.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FluidDivider color="#ffffff" flip={true} />

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Comment ça marche ?</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              { step: "01", title: "Répondez au questionnaire", desc: "Un diagnostic de 5 minutes pour identifier vos points de friction majeurs." },
              { step: "02", title: "Prendre un rdv téléphonique", desc: "Une analyse concise et objective de votre situation actuelle lors d'un échange privilégié." },
              { step: "03", title: "Bénéficiez d'un plan d'action", desc: "Une feuille de route sur mesure pour transformer votre entreprise." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 150} className="flex flex-col md:flex-row items-center gap-6 group">
                <div className="text-5xl font-black text-blue-600 group-hover:text-blue-700 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="flex-grow bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 transform group-hover:-translate-y-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire Section with Mesh Background and Accentuated Grain (No Animation) */}
      <section id="questionnaire" className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Static Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1e293b] rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2b3e63] rounded-full blur-[140px] opacity-30" />
          <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-blue-900/20 rounded-full blur-[100px] opacity-20" />
          {/* Accentuated Texture Overlay */}
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Prêt à libérer votre potentiel ?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Complétez ce diagnostic rapide pour obtenir votre première analyse stratégique personnalisée.</p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-white/95 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/10">
              <Questionnaire />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
