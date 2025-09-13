import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Gamepad2, Puzzle, Palette, Code, Lightbulb, Users } from "lucide-react";

/**
 * Skills Section Component
 * Interactive 3D skill visualization with animated progress bars
 * and categorized skill sets with hover effects
 */
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("design");

  const skillCategories = {
    design: {
      title: "Game Design",
      icon: Gamepad2,
      color: "primary",
      skills: [
        { name: "Level Design", level: 95, description: "Creating engaging and balanced game environments" },
        { name: "Puzzle Design", level: 98, description: "Crafting mind-bending challenges and solutions" },
        { name: "Narrative Design", level: 85, description: "Weaving compelling stories into gameplay" },
        { name: "Game Mechanics", level: 92, description: "Designing core gameplay systems and interactions" },
        { name: "Player Psychology", level: 88, description: "Understanding player behavior and motivation" }
      ]
    },
    technical: {
      title: "Technical Skills",
      icon: Code,
      color: "accent",
      skills: [
        { name: "Unity & C#", level: 90, description: "Professional game development and scripting" },
        { name: "Unreal Engine", level: 75, description: "3D game development and Blueprint scripting" },
        { name: "AR/VR Development", level: 80, description: "Immersive experience creation" },
        { name: "3D Modeling", level: 70, description: "Asset creation in Blender and Maya" },
        { name: "Arduino/IoT", level: 85, description: "Physical computing for escape rooms" }
      ]
    },
    creative: {
      title: "Creative Arts",
      icon: Palette,
      color: "primary-glow",
      skills: [
        { name: "UI/UX Design", level: 92, description: "User interface and experience design" },
        { name: "Concept Art", level: 78, description: "Visual development and ideation" },
        { name: "Sound Design", level: 82, description: "Audio atmospheres and effects" },
        { name: "Animation", level: 75, description: "Character and environment animation" },
        { name: "Photography", level: 85, description: "Environmental and concept photography" }
      ]
    },
    soft: {
      title: "Leadership",
      icon: Users,
      color: "amber-warm",
      skills: [
        { name: "Team Leadership", level: 88, description: "Managing creative teams and projects" },
        { name: "Project Management", level: 90, description: "Agile methodologies and timeline management" },
        { name: "Client Communication", level: 95, description: "Stakeholder relations and presentations" },
        { name: "Problem Solving", level: 96, description: "Creative solutions to complex challenges" },
        { name: "Mentoring", level: 85, description: "Teaching and developing junior talent" }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-forest-deep/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning creative design, technical development, 
            and team leadership in the game industry.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r from-${category.color} to-primary-glow text-background shadow-lg scale-105`
                    : 'bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card/80'
                } border border-border/50 hover:border-primary/50`}
              >
                <IconComponent size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 glow-border">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                    <span className="text-primary-glow font-bold">{skill.level}%</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  
                  {/* Animated Skill Bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: "Years Experience", value: "8+", icon: Lightbulb },
            { label: "Projects Completed", value: "50+", icon: Puzzle },
            { label: "Technologies Mastered", value: "25+", icon: Code },
            { label: "Team Members Mentored", value: "15+", icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-card/60 transition-all duration-300">
                <IconComponent size={32} className="mx-auto mb-3 text-primary-glow" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;