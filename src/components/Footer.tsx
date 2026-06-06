import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { SECTORS, PROPERTY_TYPES } from "../constants/data";

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <span className="text-homlap text-4xl font-black tracking-tighter mb-6 block">
            Homlap
          </span>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Modern rental housing platform for verified PGs, flats, and rooms
            across India. Zero brokerage, 100% verified.
          </p>
          <div className="flex space-x-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">
            POPULAR SECTORS
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            {SECTORS.map((s) => (
              <li key={s.name}>
                <Link
                  to="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">
            RENTAL TYPES
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            {PROPERTY_TYPES.map((t) => (
              <li key={t.name}>
                <Link
                  to={`/search?type=${t.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">
            SUPPORT
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <a href="/terms-of-service.html" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy.html" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 flex justify-center items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest w-full">
        <p className="text-center">
          © 2026 Homlap Solutions Private Limited.
          <Link
            to="https://genofogu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 transition-colors ml-2"
          >
            All Rights Reserved.
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
