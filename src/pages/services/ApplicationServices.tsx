import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Smartphone } from "lucide-react";

const ApplicationServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Application Services & Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Software development, business agility, agile development, and cloud modernization solutions.
            </p>
            <Button variant="secondary" size="lg" className="bg-accent text-primary hover:bg-accent/90">
              Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Custom Development</h3>
              <p className="text-muted-foreground mb-6">
                Tailored software solutions built with modern technologies and best practices.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Web Applications</li>
                <li>• Enterprise Software</li>
                <li>• API Development</li>
                <li>• Legacy Modernization</li>
              </ul>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Scalable cloud-native applications and migration services.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Cloud Migration</li>
                <li>• Microservices Architecture</li>
                <li>• DevOps & CI/CD</li>
                <li>• Container Orchestration</li>
              </ul>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-muted-foreground mb-6">
                Cross-platform mobile applications for iOS and Android.
              </p>
              <ul className="text-left space-y-2 text-sm">
                <li>• Native iOS & Android</li>
                <li>• React Native</li>
                <li>• Progressive Web Apps</li>
                <li>• Mobile Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Technologies We Use</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["React", "Node.js", "Python", "Java", "AWS", "Azure", "Docker", "Kubernetes"].map((tech) => (
              <div key={tech} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationServices;