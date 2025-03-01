import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QrCode, LineChart, Users, ArrowRight, MessageSquare, Globe, Mail, Phone, MapPin, Handshake, Share, Briefcase, Check } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MessageUsForm from "@/components/MessageUsForm";

const Index = () => {
  const [isLanguageFrench, setIsLanguageFrench] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const translations = {
    nav: {
      features: isLanguageFrench ? "Fonctionnalités" : "Features",
      howItWorks: isLanguageFrench ? "Comment ça marche" : "How It Works",
      pricing: isLanguageFrench ? "Tarifs" : "Pricing",
      contact: isLanguageFrench ? "Contact" : "Contact",
      getStarted: isLanguageFrench ? "Commencer" : "Get Started"
    },
    hero: {
      transform: isLanguageFrench ? "Transformez votre entreprise aujourd'hui" : "Transform Your Business Today",
      title: isLanguageFrench ? "Révolutionnez vos promotions avec des QR Codes intelligents" : "Revolutionizing Business Promotions with Smart QR Codes",
      subtitle: isLanguageFrench ? "Prix flexibles, offres transparentes et engagement client à portée de main" : "Flexible pricing, seamless offers, and customer engagement at your fingertips",
      learnMore: isLanguageFrench ? "En savoir plus" : "Learn More"
    },
    features: {
      title: isLanguageFrench ? "Tout ce dont vous avez besoin pour développer votre entreprise" : "Everything you need to grow your business",
      subtitle: isLanguageFrench ? "Des fonctionnalités puissantes pour gérer et développer votre entreprise efficacement" : "Powerful features to help you manage and scale your business efficiently"
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="min-h-screen bg-white">
      <NavBar 
        isLanguageFrench={isLanguageFrench} 
        setIsLanguageFrench={setIsLanguageFrench} 
        translations={translations.nav} 
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-sm font-medium text-qromo bg-qromo/10 rounded-full"
          >
            {translations.hero.transform}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            {translations.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }} 
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2"
          >
            {translations.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.6 }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-qromo hover:bg-qromo-dark text-white px-6 sm:px-8 w-full sm:w-auto"
              onClick={scrollToFeatures}
            >
              {translations.hero.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {translations.features.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
              {translations.features.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="w-12 h-12 bg-qromo/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="h-6 w-6 text-qromo" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isLanguageFrench ? "Comment ça marche" : "How It Works"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
              {isLanguageFrench 
                ? "Commencez en quelques minutes avec notre processus simple en trois étapes" 
                : "Get started in minutes with our simple three-step process"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
            {steps.map((step, index) => <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-qromo text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Business Collaborations Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isLanguageFrench ? "Collaborations Commerciales" : "Business Collaborations"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
              {isLanguageFrench 
                ? "Découvrez comment nous travaillons avec des entreprises pour créer des solutions innovantes" 
                : "Discover how we work with businesses to create innovative solutions"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-qromo/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <collab.icon className="h-5 w-5 sm:h-6 sm:w-6 text-qromo" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {isLanguageFrench ? collab.titleFr : collab.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {isLanguageFrench ? collab.descriptionFr : collab.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isLanguageFrench ? "Nos Forfaits" : "Our Packages"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
              {isLanguageFrench 
                ? "Choisissez le forfait qui répond à vos besoins et à votre budget" 
                : "Choose the package that meets your needs and budget"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {isLanguageFrench ? "Basique" : "Basic"}
                </h3>
                <div className="bg-gray-100 px-3 py-1 rounded-full">
                  <span className="text-gray-600 text-sm font-medium">
                    {isLanguageFrench ? "Débutant" : "Starter"}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                $19<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-500 mb-6">
                {isLanguageFrench 
                  ? "Pour les individus et petits projets" 
                  : "For individuals and small projects"}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  isLanguageFrench ? "3 codes QR" : "3 QR codes",
                  isLanguageFrench ? "Analyses basiques" : "Basic analytics",
                  isLanguageFrench ? "Support par email" : "Email support",
                  isLanguageFrench ? "Templates standards" : "Standard templates"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-gray-500 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-auto bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                {isLanguageFrench ? "Commencer" : "Get Started"}
              </Button>
            </motion.div>

            {/* Bronze Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {isLanguageFrench ? "Bronze" : "Bronze"}
                </h3>
                <div className="bg-amber-700/10 px-3 py-1 rounded-full">
                  <span className="text-amber-800 text-sm font-medium">
                    {isLanguageFrench ? "De base" : "Basic"}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-500 mb-6">
                {isLanguageFrench 
                  ? "Pour les petites entreprises qui débutent" 
                  : "For small businesses just getting started"}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  isLanguageFrench ? "10 codes QR" : "10 QR codes",
                  isLanguageFrench ? "Analyses basiques" : "Basic analytics",
                  isLanguageFrench ? "Support par email" : "Email support",
                  isLanguageFrench ? "1 modèle personnalisé" : "1 custom template"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-auto bg-white text-amber-700 border border-amber-700 hover:bg-amber-700 hover:text-white transition-colors">
                {isLanguageFrench ? "Commencer" : "Get Started"}
              </Button>
            </motion.div>

            {/* Silver Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 flex flex-col relative"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {isLanguageFrench ? "Argent" : "Silver"}
                </h3>
                <div className="bg-gray-200 px-3 py-1 rounded-full">
                  <span className="text-gray-700 text-sm font-medium">
                    {isLanguageFrench ? "Populaire" : "Popular"}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                $99<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-500 mb-6">
                {isLanguageFrench 
                  ? "Pour les entreprises en croissance" 
                  : "For growing businesses with more demands"}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  isLanguageFrench ? "50 codes QR" : "50 QR codes",
                  isLanguageFrench ? "Analyses avancées" : "Advanced analytics",
                  isLanguageFrench ? "Support prioritaire" : "Priority support",
                  isLanguageFrench ? "5 modèles personnalisés" : "5 custom templates",
                  isLanguageFrench ? "Intégration aux réseaux sociaux" : "Social media integration"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-gray-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-auto bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                {isLanguageFrench ? "Commencer" : "Get Started"}
              </Button>
            </motion.div>

            {/* Gold Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8 shadow-md border border-amber-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {isLanguageFrench ? "Or" : "Gold"}
                </h3>
                <div className="bg-amber-400/20 px-3 py-1 rounded-full">
                  <span className="text-amber-700 text-sm font-medium">
                    {isLanguageFrench ? "Premium" : "Premium"}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                $199<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-gray-500 mb-6">
                {isLanguageFrench 
                  ? "Pour les grandes organisations avec des besoins avancés" 
                  : "For large organizations with advanced needs"}
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  isLanguageFrench ? "Codes QR illimités" : "Unlimited QR codes",
                  isLanguageFrench ? "Analyses en temps réel" : "Real-time analytics",
                  isLanguageFrench ? "Support dédié 24/7" : "24/7 dedicated support",
                  isLanguageFrench ? "Personnalisation avancée" : "Advanced customization",
                  isLanguageFrench ? "Accès API" : "API access",
                  isLanguageFrench ? "Gestion des rôles utilisateurs" : "User role management"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-colors">
                {isLanguageFrench ? "Contactez-nous" : "Contact Sales"}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isLanguageFrench ? "Contactez-nous" : "Get in Touch"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
              {isLanguageFrench ? "Notre équipe est là pour vous aider" : "Our team is here to help you succeed"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-qromo" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact.qromo@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-qromo" />
                </div>
                <h3 className="font-semibold mb-2">
                  {isLanguageFrench ? "Téléphone" : "Phone"}
                </h3>
                <p className="text-gray-600">+216 55 132 130</p>
                <p className="text-gray-600">+216 50 895 250</p>

              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-qromo" />
                </div>
                <h3 className="font-semibold mb-2">
                  {isLanguageFrench ? "Adresse" : "Address"}
                </h3>
                <p className="text-gray-600">Monastir, Tunisia</p>
              </div>
            </div>
            
            {/* Message Us Form */}
            <div className="lg:col-span-3">
              <MessageUsForm isLanguageFrench={isLanguageFrench} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              {isLanguageFrench ? "Prêt à transformer votre entreprise ?" : "Ready to transform your business?"}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2">
              {isLanguageFrench ? "Rejoignez des milliers d'entreprises qui utilisent déjà Qromo pour développer leur clientèle et augmenter leurs revenus." : "Join thousands of businesses already using Qromo to grow your customer base and increase revenue."}
            </p>
          </div>
        </div>
      </section>

      <Footer 
        isLanguageFrench={isLanguageFrench} 
        translations={{
          features: translations.nav.features,
          pricing: translations.nav.pricing,
          contact: translations.nav.contact
        }} 
      />

      {/* Chat Button */}
      <button 
        onClick={() => setShowChat(!showChat)} 
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-qromo hover:bg-qromo-dark text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-72 sm:w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
          <div className="p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-sm sm:text-base">
              {isLanguageFrench ? "Chat en direct" : "Live Chat"}
            </h3>
            <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 text-sm sm:text-base">
              {isLanguageFrench ? "👋 Bonjour! Comment pouvons-nous vous aider aujourd'hui?" : "👋 Hi there! How can we help you today?"}
            </p>
          </div>
        </div>
      )}
    </div>;
};

const features = [
  {
    icon: QrCode,
    title: "Smart QR Codes",
    description: "Generate and manage dynamic QR codes that adapt to your business needs."
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Track customer engagement and measure the success of your campaigns in real-time."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Build stronger relationships with your customers through personalized interactions."
  }
];

const steps = [
  {
    title: "Generate QR Code",
    description: "Create custom QR codes for your business in seconds with our intuitive platform."
  },
  {
    title: "Share with Customers",
    description: "Display your QR codes in-store or online for customers to easily access your offers."
  },
  {
    title: "Track & Analyze",
    description: "Monitor customer engagement and optimize your campaigns with real-time analytics."
  }
];

const collaborations = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    titleFr: "Partenariats Stratégiques",
    description: "Build strong relationships with partners to expand your market reach and enhance customer value.",
    descriptionFr: "Construisez des relations solides avec des partenaires pour étendre votre portée et améliorer la valeur client."
  },
  {
    icon: Share,
    title: "Resource Sharing",
    titleFr: "Partage de Ressources",
    description: "Access shared resources and expertise to optimize operations and reduce costs.",
    descriptionFr: "Accédez à des ressources partagées et à l'expertise pour optimiser les opérations et réduire les coûts."
  },
  {
    icon: Briefcase,
    title: "Business Integration",
    titleFr: "Intégration Commerciale",
    description: "Seamlessly integrate our QR solutions with your existing business processes and systems.",
    descriptionFr: "Intégrez parfaitement nos solutions QR à vos processus et systèmes commerciaux existants."
  }
];

export default Index;
