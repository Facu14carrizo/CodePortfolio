import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Code, Database, Globe, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://demo-link.com',
      color: 'from-primary-400 to-accent-600'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y sincronización en la nube.',
      image: 'https://images.pexels.com/photos/3277804/pexels-photo-3277804.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'frontend',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://demo-link.com',
      color: 'from-terracotta-400 to-burnt-600'
    },
    {
      id: 3,
      title: 'Restaurant API',
      description: 'API RESTful para gestión de restaurantes con autenticación JWT, CRUD completo y documentación con Swagger.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
      category: 'backend',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://api-docs-link.com',
      color: 'from-accent-400 to-primary-600'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con gráficos interactivos, pronósticos y geolocalización automática.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'Chart.js', 'API Weather'],
      category: 'fullstack',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://demo-link.com',
      color: 'from-burnt-400 to-terracotta-600'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Aplicación móvil de banca digital con autenticación biométrica y transacciones seguras.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      category: 'mobile',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://demo-link.com',
      color: 'from-primary-400 to-burnt-600'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Sitio web personal con animaciones 3D, modo oscuro/claro y optimización SEO.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/Facu14carrizo',
      demo: 'https://demo-link.com',
      color: 'from-terracotta-400 to-accent-600'
    }
  ];

  const filters = [
    { id: 'all', name: 'Todos', icon: Code, count: projects.length },
    { id: 'frontend', name: 'Frontend', icon: Globe, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: Database, count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', icon: Code, count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
    <section id="projects" className="py-20 relative overflow-hidden theme-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-accent-50 dark:from-dark-900 dark:via-primary-900/10 dark:to-dark-900" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4">
              Mis Proyectos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades técnicas y creatividad. 
              Cada proyecto refleja mi compromiso con la calidad y la innovación.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'glass-dark text-gray-600 dark:text-gray-300 hover:bg-primary-500/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon size={20} />
                <span>{filter.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-dark rounded-2xl overflow-hidden hover-glow group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-space font-bold text-gray-800 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-inter text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-primary-500/30 rounded-lg text-gray-700 dark:text-white hover:bg-primary-500/10 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        <span className="font-inter text-sm">Código</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white hover:opacity-90 transition-opacity duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        <span className="font-inter text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12"
          >
            <motion.a
              href="https://github.com/Facu14carrizo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-warm-600 to-warm-700 dark:from-gray-700 dark:to-gray-600 text-white font-inter font-semibold rounded-lg hover-glow hover-scale transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              <span>Ver todos mis proyectos en GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;