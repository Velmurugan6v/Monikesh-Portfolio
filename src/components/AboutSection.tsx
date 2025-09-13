import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutBackground from "../assets/about-background.jpg";

/**
 * About Me Section Component
 * Features nature-themed background with personal introduction
 * and design philosophy with animated text reveals
 */
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${aboutBackground})`,
          filter: "brightness(0.2)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-forest-deep/90 to-background/80" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Welcome to my creative universe! I'm Monika, a passionate game designer and escape room specialist 
                who believes in the magic that happens when nature's wisdom meets interactive storytelling.
              </p>
              
              <p className="text-lg leading-relaxed">
                With over 8 years of experience crafting immersive experiences, I specialize in creating 
                puzzle-driven adventures that challenge players while connecting them to the natural world. 
                My work spans from digital game design to physical escape room creation.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not designing the next mind-bending puzzle, you'll find me exploring forest trails, 
                studying organic patterns, or experimenting with sustainable design practices that inspire 
                my creative process.
              </p>
            </div>
          </motion.div>

          {/* Design Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-border">
              <h3 className="text-2xl font-bold mb-6 text-primary-glow flex items-center">
                <span className="w-2 h-2 bg-primary-glow rounded-full mr-3 animate-pulse" />
                Design Philosophy
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-warm rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Nature-Inspired:</strong> Drawing patterns and logic from organic systems
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-warm rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Player-Centric:</strong> Designing for growth, discovery, and "aha!" moments
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-warm rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Sustainable:</strong> Creating lasting experiences with minimal environmental impact
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-warm rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Collaborative:</strong> Building bridges between technology and human connection
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;