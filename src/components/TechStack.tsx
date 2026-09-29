import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TechItem {
  id: string;
  icon: string;
  name: string;
  role: string;
  color: string;
  description: string;
}

const technologies: TechItem[] = [
  { id: 'dotnet', icon: 'dotnet.svg', name: '.NET / MAUI', role: 'Mobile · Backend', color: '#8f72ff', description: 'Aplicaciones multiplataforma y servicios con el ecosistema .NET.' },
  { id: 'csharp', icon: 'csharp.svg', name: 'C#', role: 'Lenguaje principal', color: '#a778d5', description: 'Lógica de negocio, APIs y aplicaciones mantenibles.' },
  { id: 'react', icon: 'react.svg', name: 'React', role: 'Frontend', color: '#61dafb', description: 'Interfaces web por componentes y experiencias responsive.' },
  { id: 'javascript', icon: 'javascript.svg', name: 'JavaScript', role: 'Web', color: '#f7df1e', description: 'Interacción, lógica de cliente y producto web.' },
  { id: 'html', icon: 'html.svg', name: 'HTML5', role: 'Estructura', color: '#e34f26', description: 'Marcado semántico y accesible.' },
  { id: 'css', icon: 'tailwind.svg', name: 'Tailwind CSS', role: 'Interfaz', color: '#06b6d4', description: 'Diseño de interfaz basado en clases de utilidad y responsive.' },
  { id: 'mysql', icon: 'mysql.svg', name: 'MySQL', role: 'Datos', color: '#4479a1', description: 'Modelado, persistencia y consultas relacionales.' },
  { id: 'kotlin', icon: 'kotlin.svg', name: 'Kotlin', role: 'Android', color: '#b36cff', description: 'Desarrollo nativo para Android.' },
  { id: 'android', icon: 'android.svg', name: 'Android', role: 'Mobile', color: '#3ddc84', description: 'Aplicaciones y experiencias orientadas a móvil.' },
  { id: 'git', icon: 'git.svg', name: 'Git', role: 'Versionado', color: '#f05032', description: 'Control de versiones y trabajo incremental.' },
  { id: 'github', icon: 'github.svg', name: 'GitHub', role: 'Código', color: '#f2f2f2', description: 'Repositorios, colaboración y entrega.' },
  { id: 'docker', icon: 'docker.svg', name: 'Docker', role: 'Infraestructura', color: '#2496ed', description: 'Entornos reproducibles y servicios aislados.' },
  { id: 'cloudflare', icon: 'cloudflare.svg', name: 'Cloudflare', role: 'Delivery', color: '#f48120', description: 'Despliegue, rendimiento y publicación web.' },
  { id: 'java', icon: 'java.svg', name: 'Java', role: 'Backend · Mobile', color: '#e76f00', description: 'Desarrollo orientado a objetos, aplicaciones backend y ecosistema Android.' }
];

const aiTools = [
  { name: 'Cursor', icon: 'cursor.svg', color: '#f5f3ee', desc: 'Edición de código asistida, navegación del proyecto y ciclos rápidos de implementación.' },
  { name: 'Claude', icon: 'claude.svg', color: '#d97757', desc: 'Análisis, contraste de soluciones, documentación y revisión de decisiones técnicas.' },
  { name: 'ChatGPT', icon: 'chatgpt.png', color: '#74aa9c', desc: 'Exploración de ideas, resolución de problemas, aprendizaje y apoyo durante el desarrollo.' }
];

const TechStack: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [pushOffsets, setPushOffsets] = useState<{ [key: string]: { x: number; y: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Track mouse coordinates for radial background glow effect (from original code)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mx', `${x}px`);
    containerRef.current.style.setProperty('--my', `${y}px`);
  };

  const handleNodeMouseEnter = (tech: TechItem, index: number) => {
    setActiveTech(tech.id);
    if (!containerRef.current) return;
    
    // Set custom glow variable to match original color-mix calculation
    containerRef.current.style.setProperty(
      '--glow',
      `color-mix(in srgb, ${tech.color} 22%, transparent)`
    );

    // Calculate node displacement (push effect from original code)
    const activeEl = nodeRefs.current[index];
    if (!activeEl) return;
    const activeRect = activeEl.getBoundingClientRect();

    const newOffsets: { [key: string]: { x: number; y: number } } = {};
    nodeRefs.current.forEach((el, i) => {
      if (!el || i === index) return;
      const r = el.getBoundingClientRect();
      const dx = Math.sign(r.left - activeRect.left);
      const dy = Math.sign(r.top - activeRect.top);
      newOffsets[technologies[i].id] = { x: dx * 16, y: dy * 12 };
    });
    setPushOffsets(newOffsets);
  };

  const handleNodeMouseLeave = () => {
    setActiveTech(null);
    setPushOffsets({});
    if (containerRef.current) {
      containerRef.current.style.setProperty('--glow', 'rgba(157,140,255,.13)');
    }
  };

  // Draw connecting line canvas between nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const activeIndex = technologies.findIndex(t => t.id === activeTech);

      const centers = nodeRefs.current.map(node => {
        if (!node) return null;
        const r = node.getBoundingClientRect();
        return {
          x: r.left - rect.left + r.width / 2,
          y: r.top - rect.top + r.height / 2
        };
      });

      centers.forEach((p, i) => {
        if (!p || i === centers.length - 1) return;
        const nextP = centers[i + 1];
        if (!nextP) return;

        const isHighlighted = i === activeIndex || i + 1 === activeIndex;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nextP.x, nextP.y);
        ctx.strokeStyle = isHighlighted ? 'rgba(201,255,74,.75)' : 'rgba(157,140,255,.14)';
        ctx.lineWidth = isHighlighted ? 1.5 : 0.7;
        ctx.stroke();
      });
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, [activeTech, pushOffsets]);

  return (
    <section 
      id="stack" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[820px] py-16 bg-[#0b0b0e] text-white overflow-hidden border-y border-white/10 theme-transition isolate"
      style={{
        background: 'radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), var(--glow, rgba(157,140,255,.13)), transparent 68%), #0b0b0e'
      }}
    >
      {/* Canvas connections */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-55 z-0" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-space font-bold tracking-tight text-white mb-4"
          >
            Stack <span className="font-serif italic font-normal text-gray-400">tecnológico.</span>
          </motion.h2>
        </div>

        {/* Solar System Orbit Board */}
        <div className="relative h-[480px] sm:h-[620px] md:h-[760px] w-full max-w-[980px] mx-auto my-4 sm:my-8 flex items-center justify-center rounded-full scale-[0.88] sm:scale-100 origin-center">
          
          {/* Orbit rings with exact SVG/CSS styling from original */}
          <div className="absolute inset-0 m-auto w-[92%] sm:w-[88%] h-[75%] sm:h-[70%] rounded-full border border-[rgba(157,140,255,0.18)] -rotate-6 pointer-events-none shadow-[0_0_80px_rgba(157,140,255,0.05),inset_0_0_80px_rgba(157,140,255,0.04)]" />
          <div className="absolute inset-0 m-auto w-[60%] sm:w-[55%] h-[48%] sm:h-[43%] rounded-full border border-[rgba(201,255,74,0.16)] -rotate-6 pointer-events-none shadow-[0_0_0_105px_rgba(255,255,255,0.006)]" />

          {/* Technology Nodes / Planets */}
          {technologies.map((tech, index) => {
            const isActive = activeTech === tech.id;
            const offset = pushOffsets[tech.id] || { x: 0, y: 0 };
            
            const positions: { [key: string]: string } = {
              dotnet: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20',
              csharp: 'left-1/2 top-[7%]',
              react: 'left-[77%] top-[15%]',
              javascript: 'left-[91%] top-[39%]',
              html: 'left-[84%] top-[72%]',
              css: 'left-[61%] top-[89%]',
              mysql: 'left-[34%] top-[88%]',
              kotlin: 'left-[13%] top-[70%]',
              android: 'left-[7%] top-[39%]',
              git: 'left-[23%] top-[14%]',
              github: 'left-[68%] top-[34%]',
              docker: 'left-[68%] top-[65%]',
              cloudflare: 'left-[32%] top-[57%]',
              java: 'left-[32%] top-[34%]'
            };

            const isBottomHalf = ['css', 'mysql', 'kotlin', 'android'].includes(tech.id);

            return (
              <div
                key={tech.id}
                ref={el => nodeRefs.current[index] = el}
                onMouseEnter={() => handleNodeMouseEnter(tech, index)}
                onMouseLeave={handleNodeMouseLeave}
                onClick={() => handleNodeMouseEnter(tech, index)}
                style={{
                  transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) ${isActive ? 'scale(1.22)' : 'scale(1)'}`,
                  animationDelay: `${(index % 3) * -1.4}s`
                }}
                className={`absolute w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 animate-pulse ${positions[tech.id]} ${
                  isActive
                    ? 'z-40 border-2 border-white bg-dark-800 shadow-[0_0_65px_rgba(201,255,74,0.4)]'
                    : 'bg-radial from-[#292832] via-[#111116] to-[#111116] border border-white/10 shadow-[inset_-12px_-14px_28px_rgba(0,0,0,0.4),0_18px_35px_rgba(0,0,0,0.32)]'
                }`}
              >
                <div className={`w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] md:w-[62px] md:h-[62px] rounded-full p-2 sm:p-2.5 flex items-center justify-center bg-[#f5f3ee] shadow-[0_8px_22px_rgba(0,0,0,0.28)] ${tech.id === 'github' ? 'invert' : ''}`}>
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="absolute top-[calc(100%+6px)] sm:top-[calc(100%+11px)] left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-semibold text-[#bbb8c1] whitespace-nowrap">
                  {tech.name}
                </h3>

                {/* Active Popover Detail */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-[180px] sm:w-[230px] p-2.5 sm:p-3 rounded-xl bg-[#0a0a0d]/95 border border-[#3a3842] text-center shadow-2xl backdrop-blur-md z-50 ${
                      isBottomHalf ? 'bottom-[calc(100%+28px)]' : 'top-[calc(100%+28px)]'
                    }`}
                  >
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-accent-400 block mb-1">
                      {tech.role}
                    </span>
                    <p className="text-[10px] sm:text-xs text-[#ddd9e1] leading-relaxed">
                      {tech.description}
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
