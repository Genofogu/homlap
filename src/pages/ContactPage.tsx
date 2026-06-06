import { motion } from "motion/react";
import { Mail, Instagram, Youtube, Linkedin } from "lucide-react";

const ContactPage = () => (
  <main className="pt-40 pb-40 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-4"
    >
      <div className="w-20 h-20 bg-homlap/10 text-homlap rounded-3xl flex items-center justify-center mx-auto mb-10">
        <Mail className="w-10 h-10" />
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter">
        Get in <span className="text-homlap">Touch.</span>
      </h1>
      <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
        Have questions or need assistance? Our support team is here to help you
        find your perfect home.
      </p>
      <a
        href="mailto:support@homlap.com"
        className="inline-flex items-center space-x-4 bg-slate-950 text-white px-6 py-4 sm:px-10 sm:py-6 rounded-2xl sm:rounded-[2.5rem] font-bold text-base sm:text-2xl shadow-2xl shadow-slate-200 hover:bg-slate-900 transition-all active:scale-95"
      >
        <span>support@homlap.com</span>
      </a>
      <div className="mt-16 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="p-8 bg-slate-50 rounded-3xl">
          <h3 className="font-black text-slate-900 mb-2">Customer Support</h3>
          <p className="text-slate-500 text-sm">Typical response time: 2-4 hours</p>
        </div>
        <div className="p-8 bg-slate-50 rounded-3xl">
          <h3 className="font-black text-slate-900 mb-2">Business Inquiries</h3>
          <p className="text-slate-500 text-sm">For partnerships and listings</p>
        </div>
      </div>
      <div className="mt-12 pt-8 flex flex-col items-center space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Connect with us on social media</p>
        <div className="flex space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-50 hover:bg-homlap-light text-slate-500 hover:text-homlap rounded-2xl flex items-center justify-center transition-all border border-slate-100 active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-50 hover:bg-homlap-light text-slate-500 hover:text-homlap rounded-2xl flex items-center justify-center transition-all border border-slate-100 active:scale-95"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-50 hover:bg-homlap-light text-slate-500 hover:text-homlap rounded-2xl flex items-center justify-center transition-all border border-slate-100 active:scale-95"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  </main>
);

export default ContactPage;
