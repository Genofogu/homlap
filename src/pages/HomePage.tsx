import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle2,
  Zap,
  Heart,
  Phone,
  GraduationCap,
  Users,
  ShieldCheck,
  Key
} from "lucide-react";
import { Link } from "react-router-dom";
import { SECTORS, PROPERTY_TYPES, FEATURED_LISTINGS, TESTIMONIALS, FAQS } from "../constants/data";
import FAQItem from "../components/FAQItem";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[120%] bg-gradient-to-b from-homlap-light/40 via-transparent to-transparent -z-10 rounded-[100%]" />
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-homlap border border-homlap/10 mb-8 shadow-sm">
              ZERO BROKERAGE PLATFORM
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.95] mb-8 tracking-tighter">
              Find your perfect home <br />{" "}
              <span className="text-homlap">without the stress.</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Explore verified PGs, flats, rooms, and rental homes across India.
              <br />Seamless discovery, direct contacts, premium living.
            </p>
            <div className="mb-12 flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Currently Available in Greater Noida
              </span>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">
                More cities coming soon.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/coming-soon"
              className="bg-[#000000] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all shadow-xl shadow-black/20 border border-white/10 active:scale-95"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/assets/google-play-logo.svg" alt="Google Play" className="w-7 h-7" />
              </div>
              <div className="text-left leading-none">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                  GET IT ON
                </div>
                <div className="text-lg font-black tracking-tight">
                  Google Play
                </div>
              </div>
            </Link>
            <Link
              to="/coming-soon"
              className="bg-[#000000] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all shadow-xl shadow-black/20 border border-white/10 active:scale-95"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.03.04-2.28.67-3.02 1.52-.66.76-1.24 1.94-1.09 3.06 1.14.09 2.29-.6 3.01-1.43z" />
                </svg>
              </div>
              <div className="text-left leading-none">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                  DOWNLOAD ON THE
                </div>
                <div className="text-lg font-black tracking-tight">
                  App Store
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
              WHAT ARE YOU LOOKING FOR?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              A Home for every lifestyle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTY_TYPES.map((type, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -5,
                  borderColor: "#10B981",
                  backgroundColor: "#ECFDF5",
                }}
                className="p-4 sm:p-6 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 bg-white transition-all group flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                  <type.icon className="w-10 h-10 text-slate-400 group-hover:text-homlap transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <Link
                  to={`/rentals/${type.slug}`}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-homlap flex items-center transition-colors"
                >
                  Explore Category <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                  alt="Lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-2 sm:right-4 lg:-bottom-10 lg:-right-10 lg:right-auto bg-white p-4 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-slate-50 max-w-[220px] sm:max-w-[280px] lg:max-w-xs">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-homlap rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-900">
                    100% Verified
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Every property on Homlap is physically verified by our team.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
                  TRUST & SAFETY
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.95]">
                  Why thousands <br /> choose Homlap.
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  {
                    title: "Verified Listings",
                    desc: "No more fake photos or ghost properties.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "No Brokerage",
                    desc: "Connect directly and save thousands.",
                    icon: Zap,
                  },
                  {
                    title: "Affordable Rentals",
                    desc: "The best homes that fit your budget.",
                    icon: Heart,
                  },
                  {
                    title: "Instant Move-In",
                    desc: "Complete your papers, pay online, and move in immediately.",
                    icon: Key,
                  },
                  {
                    title: "Student Friendly",
                    desc: "Curated rentals near universities.",
                    icon: GraduationCap,
                  },
                  {
                    title: "Family Friendly",
                    desc: "Safe, gated communities for families.",
                    icon: Users,
                  },
                ].map((point, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <point.icon className="w-5 h-5 text-homlap" />
                      <h3 className="font-extrabold text-slate-950 tracking-tight">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-24">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap mb-4 block">
            OUR PROCESS
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            How it works
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {[
            {
              step: "01",
              title: "Download Homlap",
              desc: "Get the Homlap app on your mobile device from Google Play or App Store.",
            },
            {
              step: "02",
              title: "Explore Properties",
              desc: "Browse through verified listings in Greater Noida with detailed photos and amenities.",
            },
            {
              step: "03",
              title: "Instant & Scheduled Visits",
              desc: "Book a physical or virtual tour of the property at your preferred time slot.",
            },
            {
              step: "04",
              title: "Pay & Move In",
              desc: "Complete the secure paperless agreement, pay the deposit, and move in instantly.",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative group text-center lg:text-left">
              <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 pointer-events-none group-hover:text-homlap/10 transition-colors">
                {step.step}
              </div>
              <div className="relative space-y-6">
                <h3 className="text-3xl font-black tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Loved by thousands of renters
            </h2>
          </div>

          <div className="w-full flex space-x-8 pb-12 overflow-x-auto scrollbar-hide px-4">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-sm"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed italic mb-10">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-homlap-light flex items-center justify-center font-black text-homlap tracking-tighter border border-homlap/10">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-950 tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* App Download Footer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-homlap p-6 sm:p-12 lg:p-24 rounded-[2rem] sm:rounded-[4rem] relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16 shadow-2xl shadow-homlap/40">
            <div className="relative z-10 flex-1 text-center lg:text-left space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                Download Homlap & <br className="hidden lg:block" /> Find Your
                Next Home.
              </h2>
              <p className="text-lg text-white/80 font-medium max-w-xl">
                Download the Homlap app to save properties, message owners
                instantly, and stay updated with new listings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/coming-soon"
                  className="bg-[#000000] hover:bg-slate-900 text-white w-52 py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-black/20 border border-white/10 active:scale-95"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src="/assets/google-play-logo.svg" alt="Google Play" className="w-7 h-7" />
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      GET IT ON
                    </div>
                    <div className="text-lg font-black tracking-tight">
                      Google Play
                    </div>
                  </div>
                </Link>
                <Link
                  to="/coming-soon"
                  className="bg-[#000000] hover:bg-slate-900 text-white w-52 py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-black/20 border border-white/10 active:scale-95"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.03.04-2.28.67-3.02 1.52-.66.76-1.24 1.94-1.09 3.06 1.14.09 2.29-.6 3.01-1.43z" />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      DOWNLOAD ON THE
                    </div>
                    <div className="text-lg font-black tracking-tight">
                      App Store
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block flex-1 relative w-full h-[400px]">
              <div className="absolute top-0 right-0 w-[300px] h-[600px] bg-white/10 rounded-[3rem] backdrop-blur-xl border border-white/20 rotate-12 -z-1" />
              <div className="absolute top-10 right-20 w-[300px] h-[600px] bg-white rounded-[3rem] shadow-2xl p-4 rotate-6 group">
                <div className="w-full h-full bg-slate-950 rounded-[2.5rem] overflow-hidden">
                  <img
                    src="./assets/Homscreen.png"
                    alt="App"
                    className="w-full h-full object-fit opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
