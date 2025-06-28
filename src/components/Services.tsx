import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Palette, 
  Zap,
  CheckCircle,
  ArrowRight,
  Server,
  Users,
  Settings,
  Target
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web Frontend',
      description: 'Creación de interfaces modernas y responsivas con React, Angular y las últimas tecnologías web.',
      features: ['React & Angular', 'Responsive Design', 'Animaciones CSS', 'Optimización SEO'],
      color: 'from-primary-400 to-accent-600',
      gradient: 'bg-gradient-to-br from-primary-500/20 to-accent-500/20'
    },
    {
      icon: Server,
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables con Java Spring Boot, Node.js y Python Django.',
      features: ['APIs RESTful', 'Microservicios', 'Autenticación JWT', 'Documentación'],
      color: 'from-terracotta-400 to-burnt-600',
      gradient: 'bg-gradient-to-br from-terracotta-500/20 to-burnt-500/20'
    },
    {
      icon: Database,
      title: 'Gestión de Bases de Datos',
      description: 'Diseño, optimización y mantenimiento de bases de datos SQL y NoSQL.',
      features: ['MySQL & PostgreSQL', 'MongoDB', 'Optimización', 'Backup & Recovery'],
      color: 'from-accent-400 to-primary-600',
      gradient: 'bg-gradient-to-br from-accent-500/20 to-primary-500/20'
    },
    {
      icon: Smartphone,
      title: 'Desarrollo Mobile',
      description: 'Aplicaciones móviles nativas y híbridas para iOS y Android.',
      features: ['React Native', 'Flutter', 'App Store Deploy', 'Push Notifications'],
      color: 'from-burnt-400 to-terracotta-600',
      gradient: 'bg-gradient-to-br from-burnt-500/20 to-terracotta-500/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Diseño de interfaces intuitivas y experiencias de usuario excepcionales.',
      features: ['Figma & Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'from-primary-400 to-burnt-600',
      gradient: 'bg-gradient-to-br from-primary-500/20 to-burnt-500/20'
    },
    {
      icon: Zap,
      title: 'Consultoría Técnica',
      description: 'Asesoramiento en arquitectura de software y mejores prácticas de desarrollo.',
      features: ['Code Review', 'Arquitectura', 'Performance', 'Mentoring'],
      color: 'from-terracotta-400 to-accent-600',
      gradient: 'bg-gradient-to-br from-terracotta-500/20 to-accent-500/20'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis y Planificación',
      description: 'Evaluamos tus necesidades y definimos la estrategia perfecta para tu proyecto.',
      icon: Target
    },
    {
      step: '02',
      title: 'Diseño y Prototipado',
      description: 'Creamos prototipos interactivos para validar la experiencia de usuario.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Desarrollo',
      description: 'Implementamos la solución utilizando las mejores prácticas y tecnologías modernas.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing y Deploy',
      description: 'Realizamos pruebas exhaustivas y desplegamos tu proyecto en producción.',
      icon: CheckCircle
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="py-20 relative overflow-hidden theme-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-warm-50 to-primary-50 dark:from-dark-900 dark:via-accent-900/10 dark:to-dark-900" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" />

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
              Mis Servicios
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
              Ofrezco soluciones completas de desarrollo web y móvil, desde la conceptualización 
              hasta el deployment, utilizando las tecnologías más modernas y eficientes.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-dark rounded-2xl p-8 hover-glow hover-scale group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-space font-bold text-gray-800 dark:text-white mb-4 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <CheckCircle size={16} className="text-accent-500 dark:text-accent-400 flex-shrink-0" />
                        <span className="font-inter text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center space-x-2 text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-inter font-semibold group-hover:translate-x-2 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Saber más</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-space font-bold gradient-text mb-4">
                Mi Proceso de Trabajo
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
                Un enfoque sistemático y probado para entregar proyectos exitosos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center space-y-4 group"
                >
                  {/* Step Number */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-space font-bold text-white">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-30" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon size={24} className="text-accent-500 dark:text-accent-400" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-space font-bold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 py-12"
          >
            <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold gradient-text mb-4">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-inter mb-8">
                Trabajemos juntos para crear algo increíble. Conversemos sobre tu idea 
                y cómo puedo ayudarte a hacerla realidad.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-inter font-semibold rounded-lg hover-glow hover-scale transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comenzar Proyecto
                </motion.button>
                <motion.a
                  href="https://wa.me/5491163704522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-primary-500/30 text-gray-700 dark:text-white font-inter font-semibold rounded-lg hover:bg-primary-500/10 hover-scale transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Gratis
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;