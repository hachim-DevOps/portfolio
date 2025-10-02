import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2025 DevOps Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
