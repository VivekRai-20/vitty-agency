import { Mail, Phone, Instagram, Facebook, Linkedin,  } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const linkStyle = "cursor-pointer hover:text-vittypalette-beige transition";

  return (
    <footer className="bg-vittypalette-brown text-white py-10 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Vitty Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">Vitty Agency</span>
          </div>
          <p className="text-sm">
            Helping coaches attract high-paying clients through SEO, Ads & AI content systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><ScrollLink to="hero" smooth duration={500} offset={-80} className={linkStyle}>Home</ScrollLink></li>
            <li><ScrollLink to="services" smooth duration={500} offset={-80} className={linkStyle}>Services</ScrollLink></li>
            <li><ScrollLink to="about" smooth duration={500} offset={-80} className={linkStyle}>About</ScrollLink></li>
            <li><ScrollLink to="testimonials" smooth duration={500} offset={-80} className={linkStyle}>Testimonials</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={500} offset={-80} className={linkStyle}>Contact</ScrollLink></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Mail className="w-4 h-4" />
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vittyagency@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
            >
                vittyagency@gmail.com
                </a>
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <Phone className="w-4 h-4" />
            <a href="https://wa.me/917777034392" target="_blank" rel="noreferrer" className="underline cursor-pointer">
              +91 7777034392
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/vitty.agency/?utm_source=ig_web_button_share_sheet" className="hover:text-vittypalette-beige cursor-pointer"><Instagram /></a>
            <a href="#" className="hover:text-vittypalette-beige cursor-pointer"><Facebook /></a>
            <a href="#" className="hover:text-vittypalette-beige cursor-pointer"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-vittypalette-cream mt-10">
        © {new Date().getFullYear()} Vitty Agency. All rights reserved.
      </div>
    </footer>
  );
}
