import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

/**
 * Projects Section Component
 * Showcases portfolio projects in an interactive grid layout
 * with hover effects, project details, and technology tags
 */
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Mystic Forest Adventure",
      role: "Lead Game Designer",
      description: "An immersive escape room experience blending digital puzzles with physical environments. Players navigate through enchanted forest challenges using AR technology.",
      image: project1,
      tools: ["Unity", "C#", "Blender", "AR Foundation", "Adobe Creative Suite"],
      achievements: [
        "Designed 15+ interconnected puzzles",
        "Implemented AR plant identification system",
        "Created storyline with 3 different endings",
        "Achieved 95% player satisfaction rating"
      ],
      link: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Echoes of the Ancient Grove",
      role: "Experience Designer & Puzzle Creator",
      description: "A physical escape room featuring nature-inspired mechanical puzzles and environmental storytelling. Winner of Best Themed Experience 2023.",
      image: project2,
      tools: ["Arduino", "Laser Cutting", "3D Printing", "Sound Design", "Lighting"],
      achievements: [
        "Designed 8 unique mechanical puzzles",
        "Created immersive soundscape with 45+ audio cues",
        "Built custom electronic components",
        "Reduced setup time by 60% through modular design"
      ],
      link: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "WildCraft: Survival Puzzle",
      role: "UI/UX Designer & Game Mechanics Designer",
      description: "Mobile puzzle game teaching wilderness survival skills through engaging mini-games and resource management challenges.",
      image: project3,
      tools: ["Figma", "React Native", "Firebase", "Adobe Illustrator", "Lottie"],
      achievements: [
        "Designed 50+ puzzle mechanics",
        "Created educational content for 20+ survival skills",
        "Achieved 4.8/5 App Store rating",
        "Featured in Google Play's Indie Games Festival"
      ],
      link: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-forest-deep/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my journey through immersive game design and escape room creation, 
            where each project tells a story of innovation and player engagement.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden card-hover glow-border ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-primary/80 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-2 bg-primary-glow/80 backdrop-blur-sm rounded-full text-background hover:bg-primary-glow transition-colors">
                      <Play size={20} />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-glow font-semibold">{project.role}</p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary-glow rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary-glow rounded-full text-sm border border-primary/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                      View Project
                    </button>
                    <button className="px-6 py-3 border border-primary-glow text-primary-glow rounded-full font-semibold hover:bg-primary-glow hover:text-background transition-colors duration-200">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;