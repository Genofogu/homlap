import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ } from "../constants/data";

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all shadow-sm hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className="font-extrabold text-slate-950 text-lg tracking-tight group-hover:text-homlap transition-colors">
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-homlap text-white" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
