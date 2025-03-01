import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
interface NavBarProps {
  isLanguageFrench: boolean;
  setIsLanguageFrench: (value: boolean) => void;
  translations: {
    features: string;
    howItWorks: string;
    pricing: string;
    contact: string;
    getStarted: string;
  };
}
const NavBar = ({
  isLanguageFrench,
  setIsLanguageFrench,
  translations
}: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/lovable-uploads/aacec3ea-3a6b-463b-a7a5-db75c2a93788.png" alt="Qromo Logo" className="h-8 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900">Qromo</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm" className="p-1" onClick={() => setIsLanguageFrench(!isLanguageFrench)}>
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{isLanguageFrench ? "EN" : "FR"}</span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Button variant="ghost" className="p-2" onClick={() => setIsLanguageFrench(!isLanguageFrench)}>
              <Globe className="h-5 w-5" />
              <span className="ml-2">{isLanguageFrench ? "EN" : "FR"}</span>
            </Button>
            
            <Link to="/#features" className="text-gray-600 hover:text-qromo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-qromo after:transition-all hover:after:w-full">
              {translations.features}
            </Link>
            
            <Link to="/#how-it-works" className="text-gray-600 hover:text-qromo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-qromo after:transition-all hover:after:w-full">
              {translations.howItWorks}
            </Link>
            
            <Link to="/pricing" className="text-gray-600 hover:text-qromo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-qromo after:transition-all hover:after:w-full">
              {translations.pricing}
            </Link>
            
            
            
            <Link to="/#contact" className="text-gray-600 hover:text-qromo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-qromo after:transition-all hover:after:w-full">
              {translations.contact}
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && <div className="md:hidden pt-4 pb-3 border-t mt-4 space-y-3 animate-fade-in">
            <Link to="/#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-qromo hover:bg-gray-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {translations.features}
            </Link>
            
            <Link to="/#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-qromo hover:bg-gray-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {translations.howItWorks}
            </Link>
            
            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-qromo hover:bg-gray-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {translations.pricing}
            </Link>
            
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-qromo hover:bg-gray-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {isLanguageFrench ? "À propos" : "About"}
            </Link>
            
            <Link to="/#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-qromo hover:bg-gray-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {translations.contact}
            </Link>
          </div>}
      </div>
    </nav>;
};
export default NavBar;