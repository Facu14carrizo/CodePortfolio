import React from 'react';

const projectsRow1 = [
  { name: "Rüne Car Rental", image: "projects/rune.png", link: "#" },
  { name: "SubUrban Store", image: "projects/SubUrban.png", link: "#" },
  { name: "GamerTech Store", image: "projects/gamertech.jpeg", link: "#" },
  { name: "Strong Gym", image: "projects/StrongGym.jpeg", link: "#" },
  { name: "Kiruki Make It Happen", image: "projects/kiruki.png", link: "https://kiruki-makeit.netlify.app/" },
  { name: "Wave Barber", image: "projects/wave-barber.png", link: "https://wave-barbershop.netlify.app/" },
];

const projectsRow2 = [
  { name: "Landing Crunchy - Mi Gusto x Flamin' Hot", image: "projects/landing-crunchy.png", link: "https://migusto.com.ar/crunchy/" },
  { name: "QR Generator", image: "projects/qr-generator.png", link: "https://www.migusto.com.ar/tools/QR/" },
  { name: "Realtime Translate", image: "projects/translate.png", link: "#" },
  { name: "Massive email sender", image: "projects/massive-emailsystem.png", link: "#" },
  { name: "Photo Party App", image: "projects/photo-party.png", link: "https://mis15bianca-recuerdos.netlify.app/" },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative pt-12 pb-28 bg-[#08080a] dark:bg-[#08080a] overflow-hidden border-t border-white/10 scroll-mt-32 theme-transition">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-primary-400 font-semibold">
              Portafolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-space font-bold text-white tracking-tight">
            Proyectos <span className="font-serif italic font-normal text-gray-400">Destacados.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-inter text-base">
            Explora algunos de los trabajos y desarrollo de aplicaciones más recientes en movimiento.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 overflow-hidden py-4">
        {/* Row 1 - Left to Right */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...projectsRow1, ...projectsRow1, ...projectsRow1].map((project, i) => (
            <ProjectCard key={`r1-${i}`} project={project} />
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...projectsRow2, ...projectsRow2, ...projectsRow2].map((project, i) => (
            <ProjectCard key={`r2-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project }: { project: { name: string, image: string, link: string } }) {
  return (
    <a 
      href={project.link}
      target={project.link !== '#' ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group relative block w-[280px] sm:w-[380px] md:w-[440px] h-[180px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 shadow-xl transition-all duration-300 hover:border-primary-500/50"
    >
      <img 
        src={project.image} 
        alt={project.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <h3 className="text-xl md:text-2xl font-space font-bold text-white tracking-tight">{project.name}</h3>
        <div className="mt-2 h-[2px] w-12 bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75" />
      </div>
    </a>
  );
}

export default Projects;