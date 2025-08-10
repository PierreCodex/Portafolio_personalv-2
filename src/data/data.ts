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

export const projects = [
  {
    title: 'Portfolio Personal',
    description: 'Sitio en Astro optimizado, dark/light mode y animaciones modernas.',
    stack: ['Astro','TypeScript','TailwindCSS'],
    repo: '#',
    demo: '#',
    highlight: true
  },
  {
    title: 'API Gestión',
    description: 'API REST modular con autenticación JWT y documentación OpenAPI.',
    stack: ['Node.js','Express','JWT','Swagger'],
    repo: '#',
    demo: '',
    highlight: false
  },
  {
    title: 'Dashboard Analítica',
    description: 'Visualización de métricas en tiempo real con gráficos dinámicos.',
    stack: ['React','Next.js','Chart.js'],
    repo: '#',
    demo: '#',
    highlight: false
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


