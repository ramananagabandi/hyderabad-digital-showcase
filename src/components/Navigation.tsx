import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const servicesDropdown = [{
    name: "Consulting Services",
    path: "/services/consulting-services"
  }, {
    name: "Application Services & Solutions",
    path: "/services/application-services"
  }, {
    name: "Technologies & Platforms",
    path: "/services/technologies-platforms"
  }, {
    name: "Managed Services",
    path: "/services/managed-services"
  }, {
    name: "Professional Services",
    path: "/services/professional-services"
  }];
  const industriesDropdown = [{
    name: "Healthcare",
    path: "/industries/healthcare"
  }, {
    name: "Insurance",
    path: "/industries/insurance"
  }, {
    name: "Finance",
    path: "/industries/finance"
  }, {
    name: "Municipalities",
    path: "/industries/municipalities"
  }, {
    name: "Transportation",
    path: "/industries/transportation"
  }, {
    name: "Public Services",
    path: "/industries/public-services"
  }, {
    name: "Government",
    path: "/industries/government"
  }, {
    name: "Telecommunications",
    path: "/industries/telecommunications"
  }, {
    name: "Manufacturing",
    path: "/industries/manufacturing"
  }];
  const aboutDropdown = [{
    name: "Our Company",
    path: "/about/our-company"
  }, {
    name: "Leadership Team",
    path: "/about/leadership"
  }, {
    name: "Awards & Recognition",
    path: "/about/awards"
  }, {
    name: "Technology Partners",
    path: "/about/partners"
  }];
  const navItems = [{
    name: "CAREERS",
    path: "/careers"
  }, {
    name: "INSIGHTS",
    path: "/insights"
  }, {
    name: "CONTACT US",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6ca34434-3564-40a1-b874-3854639d51c6.png" 
              alt="COFOMO Tech Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-primary tracking-wider">COFOMO Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-primary/90 hover:text-primary flex items-center gap-1">
                SERVICES <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {servicesDropdown.map(item => <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="text-primary hover:text-primary/80">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-primary/90 hover:text-primary flex items-center gap-1">
                INDUSTRIES <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {industriesDropdown.map(item => <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="text-primary hover:text-primary/80">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/technologies" className={`text-sm font-medium transition-colors hover:text-primary/80 ${isActive("/technologies") ? "text-primary" : "text-primary/90"}`}>
              TECHNOLOGIES
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-primary/90 hover:text-primary flex items-center gap-1">
                ABOUT <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {aboutDropdown.map(item => <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="text-primary hover:text-primary/80">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors hover:text-primary/80 ${isActive(item.path) ? "text-primary" : "text-primary/90"}`}>
                {item.name}
              </Link>)}
            <div className="flex items-center space-x-4">
              <button className="text-primary/90 hover:text-primary">
                <Menu className="w-5 h-5" />
              </button>
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary/80 ${isActive(item.path) ? "text-primary" : "text-primary/90"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;