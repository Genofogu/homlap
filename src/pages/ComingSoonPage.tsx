import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ComingSoonPage = ({ 
  title = "Coming Soon.", 
  desc = "We're working hard to bring this feature to you. Stay tuned for our official launch!" 
}: { title?: string, desc?: string }) => (
  <main className="pt-40 pb-40 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {word === "Soon." ? <span className="text-homlap">{word}</span> : word}{" "}
          </span>
        ))}
      </h1>
      <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto leading-relaxed px-4">
        {desc}
      </p>
      <div className="mt-12">
        <Link
          to="/"
          className="inline-block bg-slate-950 text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-slate-200 hover:bg-slate-900 transition-all active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  </main>
);

export default ComingSoonPage;
