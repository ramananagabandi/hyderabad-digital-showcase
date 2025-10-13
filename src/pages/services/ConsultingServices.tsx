import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ConsultingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium">
              Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
              Strategic alignment, change management, and governance to drive your digital transformation success.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Consulting Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert guidance across every aspect of your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Strategy",
                description: "Comprehensive digital transformation roadmaps aligned with your business objectives.",
                features: ["Strategic Planning", "Technology Assessment", "ROI Analysis"]
              },
              {
                title: "Change Management",
                description: "Smooth organizational transitions with minimal business disruption.",
                features: ["Process Optimization", "Training Programs", "Communication Strategy"]
              },
              {
                title: "IT Governance",
                description: "Robust frameworks for technology decision-making and risk management.",
                features: ["Policy Development", "Risk Assessment", "Compliance Management"]
              },
              {
                title: "Business Analysis",
                description: "Deep insights into business processes and improvement opportunities.",
                features: ["Requirements Gathering", "Process Mapping", "Gap Analysis"]
              },
              {
                title: "Project Management",
                description: "Expert project delivery with proven methodologies and best practices.",
                features: ["Agile Methodology", "Risk Management", "Quality Assurance"]
              },
              {
                title: "Innovation Consulting",
                description: "Emerging technology adoption and innovation strategy development.",
                features: ["Technology Scouting", "Proof of Concepts", "Innovation Labs"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-card p-8 rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-hero py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let our consulting experts guide your digital transformation journey.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-semibold">
            Contact Our Consultants
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;