export interface HeroSlide {
  id: number;
  modelCode: string;
  badge: string;
  image: string;
  productCutout?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  category: string;
  categoryNumber: string;
  specs: { label: string; value: string }[];
  features: string[];
  accentColor: string;
  accentGlow: string;
  screenSize: string;
  tagline: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  specs: string[];
  features: string[];
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
