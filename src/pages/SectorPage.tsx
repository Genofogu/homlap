import React, { useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { SECTOR_PAGE_DATA } from "../constants/seoData";
import { SECTORS } from "../constants/data";

const SectorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const data = slug ? SECTOR_PAGE_DATA[slug] : null;

  useEffect(() => {
    if (data) {
      document.title = data.seoTitle;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", data.seoDesc);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", data.seoDesc);
        document.head.appendChild(metaDescription);
      }
    }
  }, [data]);

  if (!data || !slug) {
    return <Navigate to="/" replace />;
  }

  // Get other sectors for the "You may also like" section
  const otherSectors = SECTORS.filter((s) => s.slug !== slug);
  const IconComponent = data.icon;

  const handleScrollToSectors = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("related-sectors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-homlap-light/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl"
          >
            {/* Status Badge */}
            <span className="inline-flex items-center gap-1.2 px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {data.badge}
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] mb-8 tracking-tighter">
              {data.heading}
            </h1>

            {/* Icon Container */}
            <div className="w-20 h-20 rounded-[2rem] bg-homlap-light flex items-center justify-center mb-8 mx-auto border border-homlap/10 shadow-sm">
              <IconComponent className="w-10 h-10 text-homlap" />
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-2xl mx-auto mb-12">
              {data.desc.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features Coming Soon */}
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-sm max-w-xl mx-auto mb-12">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-6 text-center">
                {data.featuresTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-left">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-homlap"></span>
                    <span className="text-sm font-semibold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#related-sectors"
                onClick={handleScrollToSectors}
                className="bg-homlap text-white px-10 py-5 rounded-[2rem] font-bold shadow-xl shadow-homlap/20 hover:bg-homlap-dark transition-all active:scale-95 text-sm"
              >
                {data.ctaText}
              </a>
              <Link
                to="/"
                className="border border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-5 rounded-[2rem] font-bold transition-all active:scale-95 text-sm"
              >
                {data.backText}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section id="related-sectors" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
              You May Also Like
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Explore Other Sectors
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {otherSectors.map((sector, idx) => (
              <Link key={idx} to={`/sectors/${sector.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm cursor-pointer hover:border-homlap hover:bg-homlap-light/30 transition-all flex flex-col justify-between h-40 group text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-homlap transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-950 tracking-tight group-hover:text-homlap transition-colors">
                      {sector.name}
                    </h4>
                    <div className="flex items-center text-[10px] uppercase font-black text-slate-400 tracking-widest mt-2 group-hover:text-homlap transition-colors">
                      View Listings <ChevronRight className="ml-0.5 w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SectorPage;
