
import React from 'react';
import AnimatedSection from './AnimatedSection';

const MentionsLegales: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 mb-12">Mentions légales – Site Libr’Audit</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Éditeur du site</h2>
              <p>
                Le présent site est édité par la société DELHOMMEAU, SAS au capital de 103 500,00 euros, immatriculée au Registre du Commerce et des Sociétés de Nantes sous le numéro 400 367 710. 
                Siège social : L’Étang du Bois Joly, 44140 La Planche, France.
              </p>
              <p className="mt-2">
                Président : Michael DELHOMMEAU, né le 28/08/1980 à Nantes, de nationalité française, domicilié Le Petit Bois, 44140 La Planche.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hébergement du site</h2>
              <p>
                Ce site est hébergé par une infrastructure cloud sécurisée. 
                Pour toute question relative à l'hébergement, veuillez nous contacter à l'adresse de l'éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Propriété intellectuelle</h2>
              <p>
                L’ensemble du contenu présent sur ce site (textes, images, graphismes, logo Libr’Audit, icônes, vidéos, documents téléchargeables, structure générale du site) est la propriété exclusive de la SAS DELHOMMEAU, sauf mention contraire expresse. 
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, sur quelque support que ce soit, est interdite sans autorisation écrite préalable de la SAS DELHOMMEAU. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Données personnelles et cookies</h2>
              <p>
                Des données à caractère personnel peuvent être collectées via les formulaires de contact, les espaces d’inscription ou la mesure d’audience, dans le respect du Règlement général sur la protection des données (RGPD) et de la loi Informatique et Libertés. 
                Vous disposez d’un droit d’accès, de rectification, d’opposition, d’effacement, ainsi que d’un droit à la limitation et à la portabilité de vos données, que vous pouvez exercer en écrivant à l’adresse de contact indiquée sur le site.
              </p>
              <p className="mt-4">
                Le site peut utiliser des cookies et autres traceurs à des fins de fonctionnement, de mesure d’audience ou d’amélioration de l’expérience utilisateur.
                Lors de votre première visite, un bandeau d’information vous permet d’accepter, de refuser ou de paramétrer les cookies non strictement nécessaires, conformément aux recommandations de la CNIL. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsabilité</h2>
              <p>
                La SAS DELHOMMEAU s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le site Libr’Audit, mais ne peut garantir l’absence totale d’erreurs ou d’omissions. 
                L’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive et reste seul responsable de l’usage qu’il en fait, ainsi que de l’équipement et de la connexion internet qu’il utilise pour accéder au site. 
              </p>
              <p className="mt-4">
                La SAS DELHOMMEAU ne saurait être tenue responsable des dommages directs ou indirects résultant de l’accès au site ou de l’impossibilité d’y accéder, y compris en cas de force majeure ou d’interruption de service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Liens hypertextes</h2>
              <p>
                Le site Libr’Audit peut contenir des liens vers d’autres sites ou ressources externes. 
                La SAS DELHOMMEAU n’exerce aucun contrôle sur ces sites et ne saurait être tenue responsable de leur contenu, de leur fonctionnement ou de tout dommage pouvant résulter de leur consultation. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
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

export default MentionsLegales;
