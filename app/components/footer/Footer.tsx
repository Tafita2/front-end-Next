"use client";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import Copyright from "../copyright/Copyright";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vérifier quand afficher l'icône
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2 w-1/2">
            <h2 className="text-3xl font-bold text-green-200">Mon Portfolio</h2>
            <p className="mt-4 text-gray-400">
              Développeur Web Front-end passionné par la création d'expériences numériques modernes et performantes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-200">Nav</h3>
            <ul className="mt-4 space-y-3 ml-5">
              <li><ScrollLink to="accueil" smooth={true} duration={500} offset={-70} href="/"><span className="hover:text-gray-300 cursor-pointer text-lg">Accueil</span></ScrollLink></li>
              <li><ScrollLink to="a-propos" smooth={true} duration={500} offset={-70} href="/about"><span className="hover:text-gray-300 cursor-pointer">À propos</span></ScrollLink></li>
              <li><ScrollLink to="projets" smooth={true} duration={500} offset={-70} href="/projects"><span className="hover:text-gray-300 cursor-pointer">Projets</span></ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} offset={-70} href="/contact"><span className="hover:text-gray-300 cursor-pointer">Contact</span></ScrollLink></li>
            </ul>
          </div>

          <div className="md:ml-10">
            <h3 className="text-xl font-semibold text-green-200">Connexion</h3>
            <div className="mt-4 flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877F2]"><FaFacebook size={28} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#000000]"><FaTwitter size={28} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2]"><FaLinkedin size={28} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#181717]"><FaGithub size={28} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Copyright />
        </div>
      </div>

      {/* Bouton retour en haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="absolute -top-12 right-8 bg-gray-700 text-white p-2 rounded-full shadow-lg shadow-gray-800 hover:bg-black transition"
          aria-label="Retour en haut"
        >
          <HiOutlineChevronDoubleUp size={24} />
        </button>
      )}
      {/* <div>
        <Link href="/">
          <div className="absolute -top-12 right-8 bg-gray-700 text-white p-2 rounded-full shadow-lg shadow-gray-800 hover:bg-black transition">
            <HiOutlineChevronDoubleUp size={24} />
          </div>
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
