import { Link } from "react-router-dom";
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6ca34434-3564-40a1-b874-3854639d51c6.png" 
                  alt="Cofomo Tech Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold">COFOMO Tech</span>
            </Link>
            <p className="text-white/80 mb-4 max-w-md">
              Empowering digital innovation and business performance. From strategic consulting 
              to professional services, we are here for you every step of the way.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@cofomotech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/careers" className="block text-white/80 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 mb-4">
              <Link to="/terms" className="block text-white/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2024 COFOMO Tech Private Limited. All rights reserved. | 100+ Clients Served | 200+ Projects Delivered
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;