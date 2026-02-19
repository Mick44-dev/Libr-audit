
import React, { useState } from 'react';
import { 
  Briefcase, Users, Clock, Monitor, Layout, 
  Check, ChevronRight, ChevronLeft, Send, Sparkles, AlertCircle,
  Share2, ListChecks, Target
} from 'lucide-react';
import { FormData } from '../types';

const SECTORS = [
  "Agriculture", "Artisanat", "Bâtiment / BTP", "Commerce de détail", 
  "Conseil / Services", "Hôtellerie / Restauration", "Industrie", 
  "Santé / Bien-être", "Technologie / Digital", "Transport / Logistique", "Autre"
];

const EMPLOYEE_RANGES = ["0", "0–5", "5–10", "10–15", "15–20", "20–25", "25–30", "30–35", "35–40", "40–45", "45–50"];

const FRICTION_POINTS = [
  { id: 'time_me', label: 'Gestion de mon temps', icon: <Clock className="w-6 h-6" /> },
  { id: 'tasks_me', label: 'Gestion de mes tâches', icon: <ListChecks className="w-6 h-6" /> },
  { id: 'time_team', label: 'Gestion du temps collaborateurs', icon: <Users className="w-6 h-6" /> },
  { id: 'info_flow', label: "Gestion du flux d'information", icon: <Share2 className="w-6 h-6" /> },
  { id: 'meetings', label: 'Structuration des réunions', icon: <Layout className="w-6 h-6" /> },
  { id: 'team_alignment', label: "L'Alignement de mes équipes", icon: <Target className="w-6 h-6" /> },
  { id: 'digital', label: 'Organisation dossiers numériques', icon: <Monitor className="w-6 h-6" /> },
  { id: 'web', label: 'Gestion de mon site web', icon: <Monitor className="w-6 h-6" /> },
  { id: 'project_me', label: 'Suivi d’avancement de mes projets', icon: <Briefcase className="w-6 h-6" /> },
  { id: 'project_team', label: 'Suivi d’avancement projets équipe', icon: <Users className="w-6 h-6" /> },
];

const Questionnaire: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    sectors: [],
    employees: '',
    frictionPoints: [],
    otherFriction: '',
    bossIA: null,
    bossIAReason: '',
    teamIA: null,
    teamIAReason: '',
    contactName: '',
    contactEmail: '',
    companyName: '',
    companySize: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const toggleSector = (sector: string) => {
    const newSectors = formData.sectors.includes(sector)
      ? formData.sectors.filter(s => s !== sector)
      : [...formData.sectors, sector];
    updateFormData({ sectors: newSectors });
  };

  const toggleFriction = (id: string) => {
    const newFrictions = formData.frictionPoints.includes(id)
      ? formData.frictionPoints.filter(f => f !== id)
      : [...formData.frictionPoints, id];
    updateFormData({ frictionPoints: newFrictions });
  };

  const handleSubmit = () => {
    const subject = `Diagnostic Pré-Audit - ${formData.companyName}`;
    
    const frictionLabels = formData.frictionPoints
      .map(id => FRICTION_POINTS.find(p => p.id === id)?.label)
      .filter(Boolean)
      .join('\n   • ');

    const body = `
🚀 DIAGNOSTIC PRÉ-AUDIT STRATÉGIQUE - LIBR'AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 INFORMATIONS ENTREPRISE
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Entreprise : ${formData.companyName}
• Secteurs : ${formData.sectors.join(', ')}
• Taille (CA) : ${formData.companySize}
• Effectifs : ${formData.employees} salariés

⚠️ POINTS DE FRICTION IDENTIFIÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${frictionLabels ? `   • ${frictionLabels}` : '   Aucun point spécifique sélectionné'}
${formData.otherFriction ? `\n📝 Autres précisions : \n   "${formData.otherFriction}"` : ''}

🤖 CULTURE & POSTURE FACE À L'IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Posture Dirigeant : ${formData.bossIA === 'Oui' ? '❌ Réfractaire' : '✅ Favorable'}
${formData.bossIAReason ? `   └ Raison : ${formData.bossIAReason}` : ''}

👥 Culture Équipe : ${formData.teamIA === 'Oui' ? '❌ Réfractaire' : '✅ Favorable'}
${formData.teamIAReason ? `   └ Raison : ${formData.teamIAReason}` : ''}

👤 CONTACT RÉFÉRENT
━━━━━━━━━━━━━━━━━━━━
• Nom : ${formData.contactName}
• E-mail : ${formData.contactEmail}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Généré via Libr'Audit - Libérez votre organisation.
`;

    const mailtoUrl = `mailto:michael.delhommeau@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Diagnostic envoyé !</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Merci pour votre confiance. Nous avons bien reçu vos informations et nous reviendrons vers vous très prochainement pour votre audit stratégique.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Étape {step} sur 4</span>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-[400px]">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Commençons par votre entreprise</h3>
            
            <label className="block text-sm font-semibold text-slate-700 mb-4">Secteur d'activité (Sélection multiple possible)</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {SECTORS.map(sector => (
                <button
                  key={sector}
                  onClick={() => toggleSector(sector)}
                  className={`p-3 text-sm rounded-xl border transition-all ${
                    formData.sectors.includes(sector) 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>

            <label className="block text-sm font-semibold text-slate-700 mb-4">Nombre de salariés</label>
            <select 
              value={formData.employees}
              onChange={(e) => updateFormData({ employees: e.target.value })}
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50"
            >
              <option value="">Sélectionnez une taille...</option>
              {EMPLOYEE_RANGES.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center sm:text-left">Quels sont vos principaux freins ?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {FRICTION_POINTS.map(point => (
                <button
                  key={point.id}
                  onClick={() => toggleFriction(point.id)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all group min-h-[80px] ${
                    formData.frictionPoints.includes(point.id)
                    ? 'card-active border-emerald-500 shadow-md scale-[1.02]'
                    : 'bg-white border-slate-100 hover:border-emerald-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors flex-shrink-0 ${
                    formData.frictionPoints.includes(point.id) ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {/* Fixed: Cast to React.ReactElement<any> to allow className prop in cloneElement */}
                    {React.cloneElement(point.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                  </div>
                  <span className={`font-semibold text-sm sm:text-base leading-tight ${formData.frictionPoints.includes(point.id) ? 'text-emerald-900' : 'text-slate-700'}`}>
                    {point.label}
                  </span>
                  {formData.frictionPoints.includes(point.id) && (
                    <div className="ml-auto bg-emerald-500 rounded-full p-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Autre point de friction ?</label>
              <textarea 
                value={formData.otherFriction}
                onChange={(e) => updateFormData({ otherFriction: e.target.value })}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                placeholder="Décrivez brièvement si vous avez d'autres soucis particuliers..."
                rows={2}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-600" />
              L'IA au coeur de votre culture
            </h3>

            <div className="space-y-10">
              <div className="perspective-1000">
                <label className="block text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Votre posture face à l'IA (Dirigeant)</label>
                <div className="grid grid-cols-2 gap-6">
                  {['Non', 'Oui'].map((val) => (
                    <div 
                      key={val}
                      onClick={() => updateFormData({ bossIA: val as 'Oui' | 'Non' })}
                      className={`card-3d p-6 rounded-2xl border-2 cursor-pointer flex flex-col items-center gap-3 transition-all ${
                        formData.bossIA === val ? 'border-emerald-500 bg-emerald-50 shadow-xl' : 'border-slate-100 bg-white shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.bossIA === val ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {val === 'Oui' ? <AlertCircle className="w-6 h-6" /> : <Check className="w-6 h-6" />}
                      </div>
                      <span className="font-bold">{val === 'Oui' ? 'Réfractaire' : 'Favorable'}</span>
                      {formData.bossIA === val && (
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white rounded-full p-1 scale-75">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {formData.bossIA === 'Oui' && (
                  <input 
                    type="text"
                    value={formData.bossIAReason}
                    onChange={(e) => updateFormData({ bossIAReason: e.target.value })}
                    className="mt-4 w-full p-3 rounded-lg border border-emerald-200 bg-emerald-50/50"
                    placeholder="Pourquoi ? (vos craintes)"
                  />
                )}
              </div>

              <div className="perspective-1000">
                <label className="block text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Culture d'équipe face à l'IA</label>
                <div className="grid grid-cols-2 gap-6">
                  {['Non', 'Oui'].map((val) => (
                    <div 
                      key={val}
                      onClick={() => updateFormData({ teamIA: val as 'Oui' | 'Non' })}
                      className={`card-3d p-6 rounded-2xl border-2 cursor-pointer flex flex-col items-center gap-3 transition-all ${
                        formData.teamIA === val ? 'border-emerald-500 bg-emerald-50 shadow-xl' : 'border-slate-100 bg-white shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.teamIA === val ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {val === 'Oui' ? <Users className="w-6 h-6" /> : <Check className="w-6 h-6" />}
                      </div>
                      <span className="font-bold">{val === 'Oui' ? 'Réfractaire' : 'Favorable'}</span>
                      {formData.teamIA === val && (
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white rounded-full p-1 scale-75">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {formData.teamIA === 'Oui' && (
                  <input 
                    type="text"
                    value={formData.teamIAReason}
                    onChange={(e) => updateFormData({ teamIAReason: e.target.value })}
                    className="mt-4 w-full p-3 rounded-lg border border-emerald-200 bg-emerald-50/50"
                    placeholder="Pourquoi vos équipes sont-elles réfractaires ?"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Dernière étape : vos coordonnées</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  value={formData.contactName}
                  onChange={(e) => updateFormData({ contactName: e.target.value })}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail professionnel</label>
                <input 
                  type="email" 
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData({ contactEmail: e.target.value })}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="jean@entreprise.fr"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom de l'entreprise</label>
                <input 
                  type="text" 
                  value={formData.companyName}
                  onChange={(e) => updateFormData({ companyName: e.target.value })}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="Libr Audit S.A.S"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Taille approximative</label>
                <input 
                  type="text" 
                  value={formData.companySize}
                  onChange={(e) => updateFormData({ companySize: e.target.value })}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  placeholder="ex: 600k€."
                />
              </div>
            </div>
            
            <p className="mt-8 text-sm text-slate-500 text-center italic">
              En cliquant, vos réponses seront enregistrées et nous pourrons préparer votre audit personnalisé.
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-12 flex justify-between gap-4">
        {step > 1 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>
        )}
        
        {step < 4 ? (
          <button 
            disabled={step === 1 && (!formData.employees || formData.sectors.length === 0)}
            onClick={() => setStep(step + 1)}
            className="ml-auto flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <button 
            disabled={!formData.contactEmail || !formData.contactName}
            onClick={handleSubmit}
            className="ml-auto flex items-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Générer mon pré-audit stratégique
            <Send className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
