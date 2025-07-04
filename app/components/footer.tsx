
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1f4e79] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo et Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo-lacledupret.jpg"
                  alt="Lacledupret Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">LACLEDUPRET</h3>
                <p className="text-sm text-blue-200">Coach Financement Immobilier</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Nicolas SZEFEROWICZ, expert en financement immobilier, vous accompagne 
              pour optimiser votre prêt et réaliser vos projets immobiliers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors p-2" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors p-2" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors p-2" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation - Masqué sur mobile, visible sur tablette+ */}
          <div className="hidden sm:block">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-100 hover:text-white transition-colors text-sm">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-blue-100 hover:text-white transition-colors text-sm">À Propos</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Ressources - Masqué sur mobile, visible sur tablette+ */}
          <div className="hidden sm:block">
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-blue-100 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/temoignages" className="text-blue-100 hover:text-white transition-colors text-sm">Témoignages</Link></li>
              <li><Link href="/faq" className="text-blue-100 hover:text-white transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <a href="tel:0618461094" className="text-blue-100 hover:text-white transition-colors text-sm">
                  06 18 46 10 94
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <a href="mailto:contact@coachlacledupret.fr" className="text-blue-100 hover:text-white transition-colors text-sm break-all">
                  contact@coachlacledupret.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Partout en France (Visio)</span>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="https://calendly.com/contact-coachlacledupret"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center block sm:inline-block"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-blue-600 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-xs sm:text-sm text-center md:text-left">
              © 2025 Lacledupret - Nicolas SZEFEROWICZ. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6 text-xs sm:text-sm">
              <Link href="/mentions-legales" className="text-blue-100 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-blue-100 hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/cgv" className="text-blue-100 hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
