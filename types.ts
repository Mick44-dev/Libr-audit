
export type Page = 'home' | 'concept' | 'method' | 'mentions-legales' | 'politique-confidentialite';

export interface FormData {
  sectors: string[];
  employees: string;
  frictionPoints: string[];
  otherFriction: string;
  bossIA: 'Oui' | 'Non' | null;
  bossIAReason: string;
  teamIA: 'Oui' | 'Non' | null;
  teamIAReason: string;
  contactName: string;
  contactEmail: string;
  companyName: string;
  companySize: string;
}

export interface Pillar {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}
