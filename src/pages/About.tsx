import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Client-Centric",
      description: "We prioritize our clients' success and build lasting partnerships"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve clients worldwide while staying rooted in Hyderabad"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      description: "15+ years in technology leadership and business strategy"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      description: "Expert in cloud architecture and digital transformation"
    },
    {
      name: "Amit Patel",
      role: "Head of Development",
      description: "Full-stack development specialist with proven track record"
    },
    {
      name: "Sneha Reddy",
      role: "Project Director",
      description: "Agile methodology expert ensuring timely project delivery"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              About TechSolutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Driving Digital Innovation
              <br />
              Since 2016
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Based in the heart of India's technology hub, Hyderabad, we've been at the 
              forefront of digital transformation, helping businesses leverage technology 
              for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We believe in transforming ideas into 
                  reality through cutting-edge software development and strategic IT consulting.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To be the leading IT solutions provider in India, recognized globally for our 
                  innovation, quality, and commitment to client success. We envision a future where 
                  technology seamlessly integrates with business processes to create extraordinary value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships with 
              clients, partners, and team members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">2016 - The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded in Hyderabad with a vision to bridge the gap between technology 
                    and business needs. Started with a small team of passionate developers.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">2018 - Expansion</h3>
                  <p className="text-muted-foreground">
                    Grew our team to 20+ professionals and expanded our service offerings 
                    to include cloud solutions and mobile app development.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">2021 - Global Reach</h3>
                  <p className="text-muted-foreground">
                    Extended our services to international markets and achieved the milestone 
                    of serving 20+ clients with 30+ successful projects.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">2024 - Present</h3>
                  <p className="text-muted-foreground">
                    Today, we proudly serve 25+ clients with 40+ delivered projects, 
                    continuing to innovate and lead in the IT solutions space.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-elegant">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-white/80">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">40+</div>
                    <div className="text-white/80">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">8+</div>
                    <div className="text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-white/80">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who lead our company and drive our success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card border-0 text-center group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;