
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus", href: "#campus" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
                href="#home"
                className="flex items-center"
                aria-label="Tula's International School"
                >
                <img
                    src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
                    alt="Tula's International School logo"
                    className="h-14 w-14 object-contain"
                />
                </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-800 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;