import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { PROPERTY_TYPES, SECTORS } from "../constants/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-homlap text-3xl font-black tracking-tighter">
              Homlap
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-600 hover:text-homlap transition-colors"
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("sectors")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-sm font-semibold transition-colors ${activeDropdown === "sectors" ? "text-homlap" : "text-slate-600 hover:text-homlap"}`}
              >
                Sectors{" "}
                {activeDropdown === "sectors" ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === "sectors" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-[60]"
                  >
                    <div className="space-y-2 text-left">
                      {SECTORS.map((sector) => (
                        <Link
                          key={sector.name}
                          to="/coming-soon"
                          className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-homlap-light hover:text-homlap rounded-lg transition-colors"
                        >
                          {sector.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("types")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-sm font-semibold transition-colors ${activeDropdown === "types" ? "text-homlap" : "text-slate-600 hover:text-homlap"}`}
              >
                Rentals{" "}
                {activeDropdown === "types" ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === "types" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-[60]"
                  >
                    <div className="space-y-2">
                      {PROPERTY_TYPES.map((type) => (
                        <Link
                          key={type.name}
                          to={`/search?type=${type.slug}`}
                          className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-homlap-light hover:text-homlap rounded-lg transition-colors"
                        >
                          <type.icon className="w-4 h-4" />
                          <span>{type.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/blog"
              className="text-sm font-semibold text-slate-600 hover:text-homlap transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/list-property"
              className="bg-homlap text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-homlap/20 hover:bg-homlap-dark transition-all"
            >
              List Property
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-8 space-y-6"
        >
          <Link to="/" className="block text-xl font-bold">
            Home
          </Link>
          <div className="space-y-4 pt-2 border-t border-slate-50">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
              SECTORS
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SECTORS.map((sector) => (
                <Link
                  key={sector.name}
                  to="/coming-soon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-homlap transition-colors"
                >
                  {sector.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xl font-bold"
          >
            Blog
          </Link>
          <Link
            to="/list-property"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-homlap text-white text-center py-4 rounded-xl font-bold"
          >
            List Your Property
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
