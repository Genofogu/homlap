import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  Gift 
} from "lucide-react";
import { useEffect } from "react";

const ListPropertyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[120%] bg-gradient-to-b from-homlap-light/40 via-transparent to-transparent -z-10 rounded-[100%]" />
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-homlap border border-homlap/10 mb-8 shadow-sm">
              HOMLAP FOR OWNERS
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] mb-8 tracking-tighter">
              List Your Property <br />
              <span className="text-homlap">on Homlap</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
              Are you a property owner, builder, or property manager?
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              Homlap is currently accepting early property listings in Greater Noida. Join our early launch and showcase your property to students, professionals, and families looking for their next home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information & Availability Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Info Column */}
            <div className="lg:col-span-7 bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between space-y-8 shadow-sm">
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap block">
                  ONBOARDING NOW
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
                  Early Property Listings Open
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  We are currently onboarding property owners through a simple Google Form. Whether you own:
                </p>
                <ul className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    "PGs",
                    "Rental Rooms",
                    "Flats",
                    "Studio Apartments",
                    "Family Homes",
                    "Shared Apartments"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-slate-700 font-semibold text-sm">
                      <span className="w-2 h-2 rounded-full bg-homlap"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm font-medium leading-relaxed pt-4">
                  you can submit your property details and our team will review your listing.
                </p>
              </div>
            </div>

            {/* Availability Column */}
            <div className="lg:col-span-5 bg-emerald-50/50 p-10 md:p-12 rounded-[2.5rem] border-2 border-dashed border-emerald-200/80 flex flex-col justify-center space-y-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-100 flex items-center justify-center text-3xl shadow-sm">
                📍
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight">
                  Currently Available in Greater Noida
                </h3>
                <p className="text-emerald-800/85 font-medium leading-relaxed text-sm">
                  We are currently focusing on Greater Noida and nearby sectors including Alpha 1, Alpha 2, Beta 1, Gamma 1, and Delta 1.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700">
                    More cities coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why List With Homlap Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap-dark mb-4 block">
              PARTNER BENEFITS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Why list with Homlap
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Early Access Partner",
                desc: "Submit your listings early to gain an edge and establish an early partnership with us.",
                icon: Sparkles,
              },
              {
                title: "Increased Visibility",
                desc: "Put your property in front of high-intent searchers looking for rooms in Greater Noida.",
                icon: TrendingUp,
              },
              {
                title: "Direct Rental Inquiries",
                desc: "Receive calls and messages directly from tenants with zero middleman interference.",
                icon: MessageSquare,
              },
              {
                title: "Growing Greater Noida Community",
                desc: "Connect with thousands of students, professionals, and families moving to sectors like Alpha & Beta.",
                icon: Users,
              },
              {
                title: "Easy Listing Process",
                desc: "Fill out a quick, single-step Google Form, and our team will get it live after verification.",
                icon: CheckCircle2,
              },
              {
                title: "Free During Early Launch",
                desc: "List and promote your property completely free of charge during our initial rollout.",
                icon: Gift,
              },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -5,
                  borderColor: "#10B981",
                  backgroundColor: "#ECFDF5",
                }}
                className="p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-white transition-all group flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                  <point.icon className="w-8 h-8 text-slate-400 group-hover:text-homlap transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-homlap p-12 md:p-20 rounded-[3.5rem] text-center relative overflow-hidden shadow-2xl shadow-homlap/30">
            {/* Background decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-homlap-dark/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                Ready to List Your Property?
              </h2>
              <p className="text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
                Complete our property submission form and become one of the first property partners on Homlap.
              </p>
              <div className="pt-4">
                <a
                  href="https://forms.gle/rpuprPwkyBz5C6ee7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-homlap hover:bg-slate-50 px-10 py-5 rounded-[2rem] font-extrabold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 duration-200"
                >
                  <span>Click Here to List Property</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <p className="text-xs text-white/70 font-semibold max-w-lg mx-auto leading-relaxed">
                  After submitting the form, our team may contact you for verification before publishing your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListPropertyPage;
