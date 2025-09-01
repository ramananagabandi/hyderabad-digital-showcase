import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Shield, DollarSign, Truck, Users, Wifi, Factory, Hospital, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "HEALTH",
      path: "/industries/healthcare",
      description: "We are proud to support health organizations in the development of digital solutions that various healthcare stakeholders can leverage to improve their workflow, communications and patient care across the entire care continuum.",
      details: "For the past several years, COFOMO Tech has been helping multiple health healthcare institutions with the planning, optimisation and migration of their IT infrastructure and supported several innovative projects.",
      highlights: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine Solutions"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Sante.png"
    },
    {
      icon: Shield,
      title: "INSURANCE",
      path: "/industries/insurance",
      description: "We get it. Insurance is a sector where it's essential to be agile and at the cutting edge of technology.",
      details: "We translate strategy into action and work diligently in this specialized environment to successfully complete large-scale projects and help stakeholders attain their objectives.",
      highlights: ["Regulatory Compliance", "Real-time Processing", "Agile Solutions"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Insurance.png"
    },
    {
      icon: DollarSign,
      title: "FINANCE",
      path: "/industries/finance",
      description: "The world runs on it and relies on it. This sector is a lynchpin of the economy, and the backbone upon which business depends.",
      details: "Our work with large financial clients has given us an insight on their culture, expectations, and especially the immense breadth of their technological needs.",
      highlights: ["Security", "Digital Transformation", "Compliance"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Finance.png"
    },
    {
      icon: Building2,
      title: "MUNICIPALITIES",
      path: "/industries/municipalities",
      description: "Smart cities are here to stay. Municipalities must adapt to new paradigms and the complexities that come with them.",
      details: "Our experience with large urban centres has given us an expertise that allows us to support them in the best possible ways.",
      highlights: ["Smart Cities", "Digital Services", "Citizen Experience"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Municipalites.png"
    },
    {
      icon: Truck,
      title: "TRANSPORTATION",
      path: "/industries/transportation",
      description: "Goods, material, and people need to move. Constantly and efficiently. Increasingly, that means correctly implementing a coherent digital transformation strategy.",
      details: "Experience makes the difference; our work with international airports, and major urban transportation networks has helped us become experts in diagnosing, planning, and implementing mobility solutions.",
      highlights: ["Mobility Solutions", "Smart Infrastructure", "Logistics"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Transportation-1.png"
    },
    {
      icon: Users,
      title: "PUBLIC SERVICES",
      path: "/industries/public-services",
      description: "Our in-depth knowledge of how various major government departments function has given us the edge as we have been working closely with them for over 25 years.",
      details: "Cloud computing, mobile solutions, IT continuity plans, and agile project management are just some of the ways we're supporting cities in improving the quality of life of their citizens.",
      highlights: ["Government Expertise", "Cloud Solutions", "Citizen Services"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Services-publics.png"
    },
    {
      icon: MapPin,
      title: "GOVERNMENT",
      path: "/industries/government",
      description: "Our in-depth knowledge of how various major government departments function has given us the edge as we have been working closely with them for over 25 years.",
      details: "As we continue to implement and update frameworks, technologies, and processes, our business relationship with these major departments continues to evolve.",
      highlights: ["25+ Years Experience", "Framework Implementation", "Technology Updates"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Gouvernement-1.png"
    },
    {
      icon: Wifi,
      title: "TELECOMMUNICATIONS",
      path: "/industries/telecommunications",
      description: "COFOMO Tech supports several major players in the communications sector globally.",
      details: "From telecommunications and Internet services to television broadcasting, our experts have been involved in a multitude of large-scale projects that have changed the way people consume information and entertainment.",
      highlights: ["Broadcasting", "Internet Services", "Mobile Solutions"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Telecommunication.png"
    },
    {
      icon: Factory,
      title: "MANUFACTURING",
      path: "/industries/manufacturing",
      description: "Over the past several years, COFOMO Tech has provided consulting services as well as transformation and innovation solutions to major players in the manufacturing sector.",
      details: "We've implemented cutting-edge technologies, overseen the integration of software, and developed bespoke solutions adapted to the client context and environment.",
      highlights: ["Process Optimization", "Integration Solutions", "Innovation"],
      image: "https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Manufacturing-1.png"
    }
  ];

  const industryLinks = [
    "HEALTH", "INSURANCE", "FINANCE", "MUNICIPALITIES", "TRANSPORTATION", 
    "PUBLIC SERVICES", "GOVERNMENT", "TELECOMMUNICATIONS", "MANUFACTURING"
  ];

  return (
    <div className="pt-16 min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 bg-[url('https://www.cofomo.com/wp-content/uploads/2025/06/Bannieres-web-sections-services-1387x430-1-1024x317.png')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white">Home</Link> &gt; Industries
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            INDUSTRIES WE WORK WITH
          </h1>
        </div>
      </section>

      {/* Industries Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center text-center">
            <div className="flex flex-wrap gap-1 justify-center text-sm">
              {industryLinks.slice(0, 6).map((industry, index) => (
                <span key={industry}>
                  <Link to={`#${industry.toLowerCase().replace(' ', '')}`} className="hover:text-primary font-medium">
                    {industry}
                  </Link>
                  {index < 5 && <span className="mx-2">|</span>}
                </span>
              ))}
            </div>
            <div className="w-full flex flex-wrap gap-1 justify-center text-sm mt-2">
              {industryLinks.slice(6).map((industry, index) => (
                <span key={industry}>
                  <Link to={`#${industry.toLowerCase().replace(' ', '')}`} className="hover:text-primary font-medium">
                    {industry}
                  </Link>
                  {index < industryLinks.slice(6).length - 1 && <span className="mx-2">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={industry.title} 
                  id={industry.title.toLowerCase().replace(' ', '')}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-primary">{industry.title}</h2>
                    <p className="text-lg mb-4 text-foreground">
                      {industry.description}
                    </p>
                    <p className="text-base text-muted-foreground mb-6">
                      {industry.details}
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="font-bold text-foreground">
                        Proven {industry.title.toLowerCase()} experience
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Work with experts who understand the specifics of the {industry.title.toLowerCase()} environment.
                      </p>
                    </div>
                    <Link to={industry.path}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;