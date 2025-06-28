import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Languages } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Data Entry Specialist',
      company: 'MJ Relevamientos',
      period: 'Marzo 2024 - Actualidad',
      description: 'Relevamientos de productos de Higiene, Aguas y Refrescos para alimentar bases de datos analizadas por IA.',
      icon: Briefcase,
      color: 'from-primary-400 to-primary-600'
    },
    {
      title: 'Data Entry Specialist',
      company: 'CompuChange',
      period: 'Febrero 2023 - Marzo 2024',
      description: 'Optimización de procesos de entrada de datos y mantenimiento de bases de datos corporativas.',
      icon: Briefcase,
      color: 'from-accent-400 to-accent-600'
    },
    {
      title: 'Data Entry Specialist',
      company: 'TercerOjo / Softys',
      period: 'Diciembre 2021 - Enero 2023',
      description: 'Carga y registro de productos cosméticos en Excel para bases de datos de múltiples clientes.',
      icon: Briefcase,
      color: 'from-terracotta-400 to-terracotta-600'
    },
    {
      title: 'Técnico de Reparación',
      company: 'Independiente',
      period: 'Abril 2018 - Actualidad',
      description: 'Especializado en brindar soporte técnico, reparar y ensamblar equipos informáticos.',
      icon: Award,
      color: 'from-burnt-400 to-burnt-600'
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Sistemas de Información',
      school: 'UTN - FRD',
      period: 'Abril 2024 - Abril 2025',
      description: 'Formación integral en desarrollo de sistemas y tecnologías de la información.',
      icon: GraduationCap,
      color: 'from-primary-400 to-primary-600'
    },
    {
      title: 'Full Stack Java, Spring Boot',
      school: 'Coding Dojo',
      period: 'Agosto 2023 - Octubre 2024',
      description: 'Especialización en desarrollo Java con Spring Boot, MVC y Maven.',
      icon: GraduationCap,
      color: 'from-accent-400 to-accent-600'
    },
    {
      title: 'Full Stack Python, Django, Flask',
      school: 'Coding Dojo',
      period: 'Agosto 2023 - Octubre 2024',
      description: 'Desarrollo completo con Python utilizando Django, Flask y Tkinter.',
      icon: GraduationCap,
      color: 'from-terracotta-400 to-terracotta-600'
    },
    {
      title: 'Desarrollo Web, Node, React, Angular',
      school: 'CoderHouse',
      period: 'Diciembre 2021 - Mayo 2022',
      description: 'Formación completa en tecnologías web modernas y frameworks populares.',
      icon: GraduationCap,
      color: 'from-burnt-400 to-burnt-600'
    }
  ];

  const skills = [
    { name: 'Aprendizaje continuo', level: 95 },
    { name: 'Capacidad de adaptación', level: 90 },
    { name: 'Comunicación eficaz', level: 85 },
    { name: 'Trabajo en equipo', level: 92 },
    { name: 'Dominio de herramientas digitales', level: 88 },
    { name: 'Autodidacta', level: 94 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden theme-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-primary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-primary-900/20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
              Desarrollador Full Stack apasionado por la tecnología, con experiencia en múltiples lenguajes 
              y frameworks. Comprometido con el aprendizaje continuo y la excelencia técnica.
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div className="glass-dark rounded-2xl p-8 hover-glow">
              <h3 className="text-2xl font-space font-bold text-gray-800 dark:text-white mb-6">
                Mi Historia
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                <p>
                  Soy un desarrollador Full Stack con una sólida formación técnica y experiencia práctica 
                  en el desarrollo de aplicaciones web modernas. Mi pasión por la tecnología me ha llevado 
                  a especializarme en múltiples lenguajes de programación y frameworks.
                </p>
                <p>
                  Mi experiencia en Data Entry me ha enseñado la importancia de la precisión y la eficiencia, 
                  habilidades que aplico en cada proyecto de desarrollo. Busco constantemente oportunidades 
                  para aplicar mis conocimientos y contribuir al desarrollo de soluciones innovadoras.
                </p>
                <div className="flex items-center space-x-2 text-accent-500 dark:text-accent-400 pt-4">
                  <MapPin size={20} />
                  <span>Tigre, Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-500 dark:text-primary-400">
                  <Languages size={20} />
                  <span>Español (Nativo), Inglés (Intermedio B1)</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-dark rounded-2xl p-8 hover-glow">
              <h3 className="text-2xl font-space font-bold text-gray-800 dark:text-white mb-6">
                Habilidades Blandas
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300 font-inter font-medium">{skill.name}</span>
                      <span className="text-accent-500 dark:text-accent-400 font-inter font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-400 to-accent-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-space font-bold text-center gradient-text">
              Experiencia Profesional
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-dark rounded-2xl p-6 hover-glow hover-scale"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-space font-bold text-gray-800 dark:text-white">{exp.title}</h4>
                        <div className="flex items-center space-x-2 text-accent-500 dark:text-accent-400">
                          <Calendar size={16} />
                          <span className="font-inter text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-primary-500 dark:text-primary-400 font-inter font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-space font-bold text-center gradient-text">
              Formación Académica
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark rounded-2xl p-6 hover-glow hover-scale"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} flex-shrink-0`}>
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-space font-bold text-gray-800 dark:text-white mb-1">{edu.title}</h4>
                      <p className="text-accent-500 dark:text-accent-400 font-inter font-semibold mb-2">{edu.school}</p>
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar size={14} />
                        <span className="font-inter text-sm">{edu.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-inter text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;