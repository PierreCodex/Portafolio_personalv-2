// Tipos para la sección Hero
export interface HeroLink { icon: string; label: string; href: string }
export interface HeroData {
  name: string;
  role: string;
  location: string;
  email: string;
  avatar: string;
  description: string;
  links: HeroLink[];
}

export const hero: HeroData = {
  name: "PierreCodex",
  role: "Ingeniero de Sistemas",
  location: "Piura, Perú",
  email: "pierrecodex18@gmail.com",
  avatar: "/src/assets/profile.jpeg",
  description: `🚀 Estudiante de Ingeniería de Sistemas con gran entusiasmo por el desarrollo de software y un interés constante en aprender nuevas tecnologías. Me apasiona resolver desafíos complejos y explorar soluciones creativas en diferentes plataformas y entornos. Destaco por mi capacidad de adaptación, pensamiento crítico y motivación por crecer profesionalmente, integrando conocimientos técnicos con un enfoque práctico e innovador. `,
  links: [
    { icon: "🐱", label: "GitHub", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ],
};
// src/data/data.ts
import S1 from "../assets/S1.png";
export const skills = {
  categories: [
    {
      title: "Lenguajes de programación",
      icon: "💻",
      items: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
    },
    {
      title: "Frontend",
      icon: "🎨",
      items: ["React", "Next.js", "Astro", "TailwindCSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "Django"],
    },
    {
      title: "Base de datos",
      icon: "🗄️",
      items: ["PostgreSQL", "MongoDB", "Firebase"],
    },
  ]
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  highlight?: boolean;
  image?: string;
  imageAlt?: string;
}

export const projects: ProjectItem[] = [


{ 
  title: 'Sistema de Pedidos para Restaurante', 
  description: 'Plataforma web en PHP/MySQL con carrito, checkout, generación de audio (TTS) y notificaciones WhatsApp para confirmar pedidos.', 
  stack: ['PHP','MySQL','JavaScript'], repo: 'https://github.com/PierreCodex/Foodv1', demo: '#', highlight: true,
  image: S1.src,
  imageAlt: 'Captura del sistema de pedidos'
  },
 
  {
    title: '====',
    description: '===',
    stack: ['Node.js','Express','JWT','Swagger'],
    repo: '#',
    demo: '',
    highlight: false,
    image: '/src/assets/astro.svg',
    imageAlt: 'API Gestión'
  },
  {
    title: '====',
    description: '=.',
    stack: ['-','-','-'],
    repo: '#',
    demo: '#',
    highlight: false,
    image: '/src/assets/background.svg',
    imageAlt: 'Dashboard en tiempo real'
  }
];

export const education = [
    {
    degree: 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TECNOLOGÍAS DE LA INFORMACIÓN',
    institution: 'Instituto de Educacion Superior Tecnologico Publico',
    start: 'Abril 2021',
    end: 'Dic 2023',
    location: 'Sullana, Perú',
    highlight: false
  },
  {
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad Cesar Vallejo',
    start: 'Mar 2024',
    end: 'En proceso',
    location: 'Piura, Perú',
    highlight: true
  }

];


