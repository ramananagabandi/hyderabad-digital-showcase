import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const stats = [
    { number: "275", label: "Experts dedicated to healthcare" },
    { number: "25", label: "Framework agreements" },
    { number: "+2600", label: "Assignments since 2017" }
  ];

  const expertise = [
    "Strategic advisors",
    "Program and project directors", 
    "Solution architects",
    "Clinical analysts",
    "IT and business analysts",
    "Developers and testers",
    "IT/infrastructure experts",
    "Project controllers"
  ];

  const services = [
    "Management support for major IT projects",
    "Cloud migration and strategy (AWS, Azure, VMware)",
    "Custom application development", 
    "Legacy application support and evolution",
    "Artificial Intelligence",
    "Contact centre and managed services",
    "Change management"
  ];

  return (
    <div className="pt-16 min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 bg-[url('https://www.cofomo.com/wp-content/uploads/2024/11/healthcarae-IT-digital-transformation-iStock-690610092.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white">Home</Link> &gt; <Link to="/industries" className="hover:text-white">Industries</Link> &gt; Healthcare
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            ENABLING THE DIGITAL TRANSFORMATION OF HEALTHCARE
          </h1>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              We are healthcare experts who have been consistently delivering on our commitments for close to a decade
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Cofomo has earned a reputation in delivering on our commitment. For the past several years, our team has been helping multiple health institutions with the planning, optimisation and migration of their IT infrastructure and have supported several innovative projects.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Our success has always been attributed to our renowned customer-first approach, as well as our high performing team who truly understands the technology and the systems in place, understands the reality of the ecosystem, and who is known for its ability to adapt to change.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              TALK TO OUR EXPERTS
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.cofomo.com/wp-content/uploads/2024/11/digital-transformation-healthcare-2-iStock-1387390400-1024x684.jpg"
                alt="Healthcare digital transformation"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                From cloud computing and intelligent platforms to software development and strategic consulting, Cofomo offers a one-stop shop for services and solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Today, health institutions must be ready to face the many challenges that come with the integration of the electronic health record (EHR). Delivering and managing large digital transformation initiatives is in our DNA.
              </p>
              <p className="text-lg text-muted-foreground">
                Our <strong>strategic advisors and business architects</strong> are recognized for their experience with large health IT projects and can accompany you at every step of the transition – helping you get the most out of it while limiting the impacts on your clinical operations, staff experience and patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Migration, Modernization, Development, Integration OF APPLICATIONS AND THE CLOUD
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Working with our team means you have the peace of mind that you will benefit from a careful, tailored and adapted deployment. From cloud computing and intelligent platforms to legacy application modernization or new software development, our team can support.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                TALK TO OUR EXPERTS
              </Button>
            </div>
            <div>
              <img 
                src="https://www.cofomo.com/wp-content/uploads/2024/11/transformation-numerique-infonuagique-sante.jpg"
                alt="Cloud transformation"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.cofomo.com/wp-content/uploads/2024/11/optimal-usage-IT-resources-iStock-1394183270.jpg"
                alt="IT resources optimization"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Get the most out of your IT team and avoid risks to your operations
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let us maintain and upgrade your legacy applications and infrastructures. Our experts ensures your operational continuity by proactively and reactively managing your existing applications. Your staff can then focus on what they bring the most value without getting bogged down in time-consuming maintenance tasks.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                DISCOVER OUR MANAGED SERVICES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/50 p-8 rounded-lg">
            <blockquote className="text-xl italic mb-4">
              "The Cofomo team was with us throughout the project. The experts quickly identified how to guide us through the change in order to limit any negative impacts on the way the clinical team collaborate and the quality of care we deliver, which we had just optimized. Their knowledge of our ecosystem strongly contributed to giving us the support we needed to manage change and ensure operational continuity."
            </blockquote>
            <cite className="font-bold">Director of a CIUSSS client to Cofomo</cite>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Diversified expertise adapting to any type of digital transformation in healthcare
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            By working with Cofomo, you gain access to a seasoned team of IT experts and healthcare professionals, including specialists in the management, support and delivery of digital transformation projects, whether large or small, as well as experts in medical imaging, laboratory services, pharmacy, telemedicine, and administrative and application processes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>OUR EXPERTS AT YOUR SERVICE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A BROAD RANGE OF EXPERTISE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90">
              TALK TO OUR EXPERTS
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Want more information about how we can help you?
          </h2>
          <div className="bg-muted/30 p-8 rounded-lg">
            <p className="text-sm text-muted-foreground mb-6">* indicates required fields</p>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">FIRST NAME*</label>
                  <input type="text" className="w-full p-3 border border-border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LAST NAME*</label>
                  <input type="text" className="w-full p-3 border border-border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">EMAIL*</label>
                <input type="email" className="w-full p-3 border border-border rounded-md" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;