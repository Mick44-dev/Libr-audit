
import React from 'react';
import AnimatedSection from './AnimatedSection';
// Added Clock and Users to the imports from lucide-react
import { Target, ShieldCheck, Zap, ArrowRight, Clock, Users } from 'lucide-react';

const ConceptPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Concept */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Je vous libère du chaos opérationnel pour vous <span className="text-blue-600">recentrer sur l’essentiel.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 italic">
              "Sans perte de temps, avec des résultats visibles dès les premières semaines."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Pour qui ?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Dirigeants et salariés de TPE/PME (1–50 salariés) qui :
              </p>
              <ul className="space-y-3">
                {[
                  "Perdent du temps dans des process inefficaces.",
                  "Se sentent encombrés par des tâches sans valeur ajoutée.",
                  "Veulent reprendre le contrôle de leur organisation.",
                  "Cherchent à simplifier pour se concentrer sur leur valeur ajoutée."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2" delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="Working together" 
                className="rounded-3xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Zap className="w-64 h-64 text-blue-500" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ma promesse</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              En 4 semaines, je clarifie, restructure vos process et autonomise votre entreprise. Avec des outils sur mesure.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gagnez du temps", desc: "En éliminant les tâches inutiles et répétitives.", icon: <Clock className="w-8 h-8" /> },
              { title: "Sérénité retrouvée", desc: "Avec des process épurés et une vision claire.", icon: <ShieldCheck className="w-8 h-8" /> },
              { title: "Équipes autonomes", desc: "Grâce à des outils sur mesure et une culture de confiance.", icon: <Users className="w-8 h-8" /> }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 200} className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-16">
            <a 
              href="#questionnaire"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                window.location.href = '/#questionnaire';
                setTimeout(() => {
                  document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
            >
              Démarrer ma transformation
              <ArrowRight className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage;
