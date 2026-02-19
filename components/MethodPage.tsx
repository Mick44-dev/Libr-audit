
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Eye, Zap, RefreshCw, CheckCircle2, Map, Users2 } from 'lucide-react';

const MethodPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <AnimatedSection className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="michael.delhommeau" 
                  alt="Michaël Delhommeau" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Ma méthode : <span className="text-blue-600">3 piliers</span> pour transformer votre entreprise
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Une approche pragmatique et humaine pour redonner du souffle à votre organisation et libérer votre temps de dirigeant.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillar 1 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <AnimatedSection className="md:w-1/3">
               <div className="sticky top-28">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <Eye className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">1. Clarifier</h2>
                <p className="text-xl font-medium text-blue-600 italic">"Voir l’essentiel"</p>
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-600 text-sm">Objectif : Extraire l’huile essentielle de votre organisation.</p>
                </div>
               </div>
            </AnimatedSection>
            
            <AnimatedSection className="md:w-2/3 space-y-12" delay={200}>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Ce que je fais :
                </h3>
                <ul className="space-y-4">
                  {[
                    "Audit à 360° de vos flux d’informations, process et méthodologies.",
                    "Cartographie visuelle (schémas, mind-maps) pour rendre lisible ce qui ne l’est pas.",
                    "Identification des goulots d’étranglement et des tâches sans valeur ajoutée."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 text-lg text-slate-600">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-3xl">
                <div className="col-span-full mb-2">
                   <h3 className="text-lg font-bold text-blue-900">Bénéfices pour vous :</h3>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <p className="text-blue-800 font-medium">Une vision claire des pistes d’amélioration en 1 page.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <p className="text-blue-800 font-medium">Des décisions plus rapides grâce à une info simplifiée.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillar 2 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16">
            <AnimatedSection className="md:w-1/3">
               <div className="sticky top-28">
                <div className="w-20 h-20 bg-emerald-600 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <RefreshCw className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">2. Restructurer</h2>
                <p className="text-xl font-medium text-emerald-600 italic">"Alléger pour performer"</p>
                <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100">
                  <p className="text-slate-600 text-sm">Objectif : Élaguez l’inutile, gardez l’essentiel.</p>
                </div>
               </div>
            </AnimatedSection>
            
            <AnimatedSection className="md:w-2/3 space-y-12" delay={200}>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Ce que je fais :
                </h3>
                <ul className="space-y-4">
                  {[
                    "Désencombrement des process : suppression des étapes redondantes.",
                    "Création d’outils sur mesure (agent IA, fiches processus, checklists, mind-map).",
                    "Formation des équipes pour s’approprier les nouveaux outils."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 text-lg text-slate-600">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-emerald-50 p-8 rounded-3xl">
                <div className="col-span-full mb-2">
                   <h3 className="text-lg font-bold text-emerald-900">Bénéfices pour vous :</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  <p className="text-emerald-800 text-sm font-medium">Process plus rapides et qualitatifs.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  <p className="text-emerald-800 text-sm font-medium">Réduction du stress grâce à la clarté.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  <p className="text-emerald-800 text-sm font-medium">Équipes alignées sur les priorités.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillar 3 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <AnimatedSection className="md:w-1/3">
               <div className="sticky top-28">
                <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <Map className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">3. Autonomiser</h2>
                <p className="text-xl font-medium text-slate-900 italic">"Libérer votre entreprise"</p>
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-600 text-sm">Objectif : Rendre votre organisation indépendante.</p>
                </div>
               </div>
            </AnimatedSection>
            
            <AnimatedSection className="md:w-2/3 space-y-12" delay={200}>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Ce que je fais :
                </h3>
                <ul className="space-y-4">
                  {[
                    "Délégation efficace : identification des rôles pour éviter le micro-management.",
                    "Outils auto-portés : vos équipes deviennent autonomes avec des supports simples.",
                    "Contrat de vision partagé : formalisation d’un cadre clair pour éviter les dérives."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 text-lg text-slate-600">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-900 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-blue-400" /> Vos bénéfices finaux :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-slate-300 text-sm">Libération de 10h+ par semaine pour le dirigeant.</p>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-slate-300 text-sm">Capacité de croissance sans augmentation proportionnelle du stress.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Convaincu par la méthode ?</h2>
          <p className="text-xl mb-10 opacity-90">Testez-la sur votre propre organisation dès aujourd'hui.</p>
          <a href="#home#questionnaire" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">
            Lancer mon Diagnostic
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default MethodPage;
