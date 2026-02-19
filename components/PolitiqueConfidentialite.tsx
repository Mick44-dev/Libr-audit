
import React from 'react';
import AnimatedSection from './AnimatedSection';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 mb-12">Politique de Confidentialité – Libr’Audit</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsable de traitement</h2>
              <p>
                La société DELHOMMEAU, SAS au capital de 103 500,00 euros, immatriculée au RCS de Nantes sous le numéro 400 367 710, dont le siège social est situé L’Étang du Bois Joly, 44140 La Planche, France, agit en qualité de responsable de traitement des données personnelles collectées via le site Libr’Audit (ci-après « le Site »).
              </p>
              <p className="mt-2">
                Contact : <a href="mailto:libraudit@gmail.com" className="text-blue-600 hover:underline">libraudit@gmail.com</a> / 06 60 54 37 17.<br />
                Pas de délégué à la protection des données (DPO) désigné pour l’instant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Données collectées</h2>
              <p>
                Nous collectons uniquement les données strictement nécessaires à nos services d’accompagnement des dirigeants de TPE/PME :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Données d’identification et de contact :</strong> nom, prénom, email, téléphone, société, fonction (via formulaires de contact ou inscription newsletter).</li>
                <li><strong>Données professionnelles :</strong> secteur d’activité, besoins en restructuration organisationnelle (échanges par email ou formulaires).</li>
                <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées (cookies d’audience).</li>
              </ul>
              <p className="mt-2 font-medium">Aucune donnée sensible (santé, opinions politiques, etc.) n’est collectée.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Finalités et bases légales des traitements</h2>
              <p>Vos données sont traitées pour :</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Répondre à vos demandes de coaching/audit (intérêt légitime).</li>
                <li>Gérer nos clients et prospects (exécution précontractuelle/contractuelle).</li>
                <li>Mesurer l’audience du Site (consentement via bandeau cookies).</li>
                <li>Envoyer des newsletters informatives (consentement explicite).</li>
              </ul>
              <p className="mt-4 italic">Tous les traitements respectent le RGPD (Règlement UE 2016/679) et la loi Informatique et Libertés.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Destinataires des données</h2>
              <p>
                Vos données sont accessibles uniquement au personnel autorisé de la SAS DELHOMMEAU et à des sous-traitants sécurisés (hébergeur, outil email comme Mailchimp si utilisé).
                Aucun transfert hors UE n’est effectué.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Conservation des données</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Prospects/contacts :</strong> 3 ans maximum à compter du dernier contact.</li>
                <li><strong>Clients :</strong> durée du contrat + 5 ans pour obligations légales (facturation).</li>
                <li><strong>Cookies :</strong> 13 mois maximum.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vos droits RGPD</h2>
              <p>
                Vous disposez de droits d’accès, rectification, opposition, effacement (« droit à l’oubli »), limitation, portabilité et définition de directives post-mortem.
                Exercez-les par email à <a href="mailto:libraudit@gmail.com" className="text-blue-600 hover:underline">libraudit@gmail.com</a> avec justificatif d’identité. Réponse sous 1 mois.
                Recours possible auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles adaptées (chiffrement, accès restreints, formation du personnel) pour protéger vos données contre les breaches (violations).
                En cas d’incident, nous vous notifierons dans les délais légaux.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
              <p>
                Le Site utilise des cookies essentiels (fonctionnement) et optionnels (Google Analytics pour audience).
                Consentement géré via bandeau dédié. Paramétrez ou refusez-les dans les préférences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Modification de la politique</h2>
              <p>
                Cette politique peut être mise à jour ; la version applicable est celle en ligne lors de votre consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Droit applicable</h2>
              <p>Droit français et RGPD. Litiges : tribunaux de Nantes.</p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <a href="#home" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              ← Retour à l'accueil
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
