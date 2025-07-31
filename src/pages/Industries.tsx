import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Shield, 
  CreditCard, 
  MapPin, 
  Truck, 
  Users, 
  Building, 
  Wifi, 
  Factory 
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "HEALTH",
      description: "We are proud to support health organizations in the development of digital solutions that various healthcare stakeholders can leverage to improve their workflow, communications and patient care across the entire care continuum.",
      details: "For the past several years, COFOMO TECH has been helping multiple healthcare institutions with the planning, optimization and migration of their IT infrastructure and supported several innovative projects.",
      highlight: "Proven healthcare experience"
    },
    {
      icon: Shield,
      title: "INSURANCE",
      description: "We get it. Insurance is a sector where it's essential to be agile and at the cutting edge of technology.",
      details: "We translate strategy into action and work diligently in this specialized environment to successfully complete large-scale projects and help stakeholders attain their objectives.",
      highlight: "Technology, expertise, and sustained growth"
    },
    {
      icon: CreditCard,
      title: "FINANCE",
      description: "The world runs on it and relies on it. This sector is a lynchpin of the economy, and the backbone upon which business depends.",
      details: "Our work with large financial clients has given us an insight on their culture, expectations, and especially the immense breadth of their technological needs.",
      highlight: "Security and complete compatibility"
    },
    {
      icon: MapPin,
      title: "MUNICIPALITIES",
      description: "Smart cities are here to stay. Municipalities must adapt to new paradigms and the complexities that come with them.",
      details: "Our experience with large urban centres has given us an expertise that allows us to support them in the best possible ways.",
      highlight: "Serving both cities and citizens"
    },
    {
      icon: Truck,
      title: "TRANSPORTATION",
      description: "Goods, material, and people need to move. Constantly and efficiently. Increasingly, that means correctly implementing a coherent digital transformation strategy.",
      details: "Experience makes the difference; our work with international airports, and major urban transportation networks has helped us become experts in diagnosing, planning, and implementing mobility solutions.",
      highlight: "Technology and innovation driving force"
    },
    {
      icon: Users,
      title: "PUBLIC SERVICES",
      description: "Our in-depth knowledge of how various major government departments function has given us the edge as we have been working closely with them for over 25+ years.",
      details: "Cloud computing, mobile solutions, IT continuity plans, and agile project management are just some of the ways we're supporting cities in improving the quality of life of their citizens.",
      highlight: "Judicious use of public resources"
    },
    {
      icon: Building,
      title: "GOVERNMENT",
      description: "Our in-depth knowledge of how various major government departments function has given us the edge as we have been working closely with them for over 25+ years.",
      details: "As we continue to implement and update frameworks, technologies, and processes, our business relationship with these major departments continues to evolve.",
      highlight: "Cutting-edge services for government"
    },
    {
      icon: Wifi,
      title: "TELECOMMUNICATIONS",
      description: "COFOMO TECH supports several major players in the communications sector in India.",
      details: "From telecommunications and Internet services to television broadcasting, our experts have been involved in a multitude of large-scale projects that have changed the way people consume information and entertainment.",
      highlight: "At the forefront of technological trends"
    },
    {
      icon: Factory,
      title: "MANUFACTURING",
      description: "Over the past several years, COFOMO TECH has provided consulting services as well as transformation and innovation solutions to major players in the manufacturing sector.",
      details: "We've implemented cutting-edge technologies, overseen the integration of software, and developed bespoke solutions adapted to the client context and environment.",
      highlight: "Key partner for optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent pt-24 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Industries we work with
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Specialized expertise across diverse sectors, delivering tailored solutions for unique industry challenges
          </p>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Badge 
                key={industry.title} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {industry.title}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={industry.title} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {industry.details}
                    </p>
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-semibold text-primary">
                        {industry.highlight}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our industry expertise can accelerate your digital transformation
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;