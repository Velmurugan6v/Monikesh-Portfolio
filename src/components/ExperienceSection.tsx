import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";

/**
 * Experience Timeline Component
 * Interactive timeline showcasing professional experience
 * with animated cards and achievement highlights
 */
const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Senior Game Designer",
      company: "Mystic Interactive Studios",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading the design of nature-themed escape room experiences and educational puzzle games. Specializing in AR/VR integration and sustainable game development practices.",
      achievements: [
        "Led design team of 8 developers on 3 major projects",
        "Increased player engagement by 150% through innovative puzzle mechanics",
        "Implemented eco-friendly development practices reducing carbon footprint by 40%",
        "Mentored 12 junior designers in sustainable game design principles"
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "Python", "AR Foundation"],
      isActive: true
    },
    {
      id: 2,
      title: "Experience Designer",
      company: "Escape the Ordinary",
      location: "Portland, OR",
      period: "2020 - 2022",
      description: "Designed and built immersive physical escape rooms with environmental themes. Collaborated with local conservation groups to create educational experiences.",
      achievements: [
        "Created 5 award-winning escape room experiences",
        "Achieved 98% customer satisfaction rating",
        "Partnered with 3 environmental organizations for educational content",
        "Trained 25+ staff members in sustainable operations"
      ],
      technologies: ["Arduino", "Raspberry Pi", "3D Printing", "Laser Cutting", "Sound Design"],
      isActive: false
    },
    {
      id: 3,
      title: "Game Design Intern",
      company: "GreenLeaf Games",
      location: "Seattle, WA",
      period: "2019 - 2020",
      description: "Supported the development of mobile puzzle games focused on environmental awareness. Contributed to game mechanics design and user interface development.",
      achievements: [
        "Designed 20+ puzzle levels for flagship mobile game",
        "Conducted user testing sessions with 200+ participants",
        "Contributed to 2 games that reached 1M+ downloads",
        "Received 'Outstanding Intern' award for innovative design solutions"
      ],
      technologies: ["React Native", "Figma", "Adobe Creative Suite", "Firebase"],
      isActive: false
    },
    {
      id: 4,
      title: "Freelance Puzzle Designer",
      company: "Independent",
      location: "Remote",
      period: "2018 - 2019",
      description: "Created custom puzzle experiences for escape room businesses and educational institutions. Specialized in nature-themed and environmental education content.",
      achievements: [
        "Completed 15+ freelance projects across 3 countries",
        "Developed signature 'Forest Logic' puzzle methodology",
        "Built network of 50+ industry professionals",
        "Featured in Escape Room Designer Quarterly magazine"
      ],
      technologies: ["Paper Prototyping", "Photoshop", "Illustrator", "CAD Software"],
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From indie game development to leading design teams, here's how my passion 
            for nature-inspired gaming has evolved over the years.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10"
                     style={{ 
                       backgroundColor: experience.isActive ? 'hsl(var(--glow-green))' : 'hsl(var(--primary))',
                       boxShadow: experience.isActive ? '0 0 20px hsl(var(--glow-green)/0.6)' : 'none'
                     }} 
                />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 card-hover glow-border">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        {experience.isActive && (
                          <span className="px-3 py-1 bg-glow-green/20 text-glow-green rounded-full text-xs font-semibold border border-glow-green/30">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-primary-glow mb-3">
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="flex items-center text-sm font-semibold text-foreground mb-2">
                        <Award size={16} className="mr-2 text-primary-glow" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1 h-1 bg-primary-glow rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary-glow rounded text-xs border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;