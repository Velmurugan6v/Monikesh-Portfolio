import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

/**
 * Main Portfolio Index Page
 * Monika Sekar - Game Designer & Escape Room Specialist
 * 
 * Features:
 * - Animated particle background throughout
 * - Smooth scroll navigation between sections
 * - Responsive design optimized for all devices
 * - Nature-inspired color scheme with soft greens and earth tones
 * - Interactive elements with glow effects and 3D transforms
 */
const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Particle Background */}
        <HeroSection />
        
        {/* About Me Section */}
        <AboutSection />
        
        {/* Featured Projects Portfolio */}
        <ProjectsSection />
        
        {/* Professional Experience Timeline */}
        <ExperienceSection />
        
        {/* Skills & Expertise Interactive Display */}
        <SkillsSection />
        
        {/* Contact Form & Information */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-forest-deep/40 border-t border-border/30 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Monika Sekar. Crafted with passion for nature and gaming.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Designed with sustainable practices and eco-friendly inspiration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
