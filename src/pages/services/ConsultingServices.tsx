import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ConsultingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Consulting Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Strategic alignment, change management, and governance to drive your digital transformation success.
            </p>
            <Button variant="secondary" size="lg" className="bg-accent text-primary hover:bg-accent/90">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let our consulting experts guide your digital transformation journey.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Our Consultants
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;