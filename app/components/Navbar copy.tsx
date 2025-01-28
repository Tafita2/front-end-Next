<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-4" : "bg-gray-200 py-2"}`}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <ScrollLink
        to="accueil"
        smooth={true}
        duration={500}
        className="text-2xl font-bold text-gray-800 cursor-pointer"
      >
        <img className="rounded-full" src="/images/logos/drian.png" alt="Logo" width="105" height="25" />
      </ScrollLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <motion.div key={link.path} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="relative">
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              spy={true} // Permet de détecter la section active
              offset={-70} // Ajuster pour que le scroll s'arrête au bon endroit
              activeClass="text-blue-600 font-semibold border-b-2 border-blue-600"
              className="relative text-gray-600 uppercase hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden rounded-full shadow-lg shadow-gray-800 p-3 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer">
        {isOpen ? <HiX size={30} color="red" /> : <HiMenu size={30} />}
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="md:hidden border-t bg-white overflow-hidden">
        {navLinks.map((link, index) => (
          <motion.div key={link.path} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8, delay: index * 0.1 }}>
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-600 font-semibold"
              className="block px-6 py-3 text-center uppercase text-gray-600 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</nav>
