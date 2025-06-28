import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'facu14carrizo@gmail.com',
      href: 'mailto:facu14carrizo@gmail.com',
      color: 'from-primary-400 to-accent-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 9 11 6370-4522',
      href: 'tel:+5491163704522',
      color: 'from-terracotta-400 to-burnt-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Tigre, Buenos Aires, Argentina',
      href: 'https://maps.google.com/?q=Tigre,Buenos+Aires,Argentina',
      color: 'from-accent-400 to-primary-600'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
      href: '#',
      color: 'from-burnt-400 to-terracotta-600'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Facu14carrizo',
      color: 'hover:text-warm-500 dark:hover:text-warm-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/facu14carrizo',
      color: 'hover:text-primary-500 dark:hover:text-primary-400'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5491163704522',
      color: 'hover:text-terracotta-500 dark:hover:text-terracotta-400'
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 relative overflow-hidden theme-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-primary-50 to-accent-50 dark:from-dark-900 dark:via-primary-900/10 dark:to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />

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
              Contacto
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escuchar sobre tu idea. 
              Conversemos y hagamos algo increíble juntos.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-space font-bold text-gray-800 dark:text-white mb-6">
                  Información de Contacto
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed mb-8">
                  Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. 
                  No dudes en contactarme a través de cualquiera de estos medios.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="glass-dark rounded-2xl p-6 hover-glow hover-scale group block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-space font-bold text-gray-800 dark:text-white mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-inter">
                      {info.value}
                    </p>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-space font-bold text-gray-800 dark:text-white">
                  Sígueme en
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-dark rounded-lg hover:bg-primary-500/20 transition-all duration-300 ${link.color} text-gray-600 dark:text-gray-300`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <link.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-space font-bold text-gray-800 dark:text-white mb-6">
                Envíame un mensaje
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-terracotta-500/20 border border-terracotta-500/30 rounded-lg mb-6"
                >
                  <CheckCircle size={20} className="text-terracotta-500" />
                  <span className="text-terracotta-600 dark:text-terracotta-400 font-inter">
                    ¡Mensaje enviado exitosamente! Te responderé pronto.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-accent-500/20 border border-accent-500/30 rounded-lg mb-6"
                >
                  <AlertCircle size={20} className="text-accent-500" />
                  <span className="text-accent-600 dark:text-accent-400 font-inter">
                    Error al enviar el mensaje. Intenta nuevamente.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'El nombre es requerido' })}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-primary-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="text-accent-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'El email es requerido',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-primary-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-accent-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'El asunto es requerido' })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-primary-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                  {errors.subject && (
                    <p className="text-accent-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'El mensaje es requerido' })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-primary-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  {errors.message && (
                    <p className="text-accent-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-inter font-semibold rounded-lg hover-glow hover-scale transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 py-8 border-t border-primary-200/30 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FC</span>
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-inter">
                © 2025 Facundo Carrizo. Todos los derechos reservados.
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Globe size={16} />
              <span className="font-inter text-sm">
                Desarrollado con ❤️ en Argentina
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;