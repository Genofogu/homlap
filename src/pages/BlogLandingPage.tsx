import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../constants/blogData";

const BlogLandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | HOMLAP — Rental Guides, Insights & Updates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse the Homlap Blog for student living tips, property owner guidelines, rental search advice, and company updates in Greater Noida."
      );
    }
  }, []);

  const categories = [
    "All",
    "Homlap Updates",
    "Rental Guides",
    "Student Living",
    "Property Owners",
    "Greater Noida",
    "Company Journey",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === "All") return true;
    return post.category === selectedCategory;
  });

  // Identify featured post
  const featuredPost = BLOG_POSTS.find((post) => post.featured);

  // Exclude featured post from the grid when "All" is selected to avoid repetition
  const gridPosts = filteredPosts.filter((post) => {
    if (selectedCategory === "All" && featuredPost) {
      return post.slug !== featuredPost.slug;
    }
    return true;
  });

  return (
    <main className="pt-24 pb-24">
      {/* Blog Hero */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-[140%] h-[120%] bg-gradient-to-b from-homlap-light/30 via-transparent to-transparent -z-10 rounded-[100%]" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-homlap border border-homlap/10 shadow-sm">
              THE HOMLAP JOURNAL
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter">
              Homlap Blog
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Stories, updates, rental guides, property insights, and the journey behind Homlap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide py-2 px-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 border shadow-sm ${selectedCategory === category
                    ? "bg-slate-950 text-white border-slate-950 scale-105"
                    : "bg-white text-slate-600 hover:text-slate-900 border-slate-200/60 hover:bg-slate-50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Article Card (Only visible when "All" category is selected and a featured post exists) */}
          {selectedCategory === "All" && featuredPost && (
            <div className="mb-20">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap block mb-6">
                FEATURED ARTICLE
              </span>
              <Link to={`/blog/${featuredPost.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-0 group"
                >
                  <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-slate-100 min-h-[350px]">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="lg:col-span-5 p-10 md:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-xs font-bold text-slate-400">
                        <span className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-homlap-light text-homlap border border-homlap/10">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-homlap transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-500 font-medium leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-950 group-hover:text-homlap transition-colors">
                        Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          )}

          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
          </div>

          {/* Grid Layout */}
          <AnimatePresence mode="popLayout">
            {gridPosts.length > 0 ? (
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {gridPosts.map((post) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={post.slug}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                      >
                        <div className="aspect-[16/10] relative overflow-hidden bg-slate-50">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                          <div className="space-y-3">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/40">
                              {post.category}
                            </span>
                            <h3 className="text-xl font-black text-slate-900 leading-snug tracking-tight group-hover:text-homlap transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-[10px] text-slate-400 font-bold">
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </span>
                            </div>
                            <span className="inline-flex items-center font-black uppercase tracking-widest text-slate-900 group-hover:text-homlap transition-colors">
                              Read <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200"
              >
                <p className="text-slate-400 font-bold text-lg">No articles found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default BlogLandingPage;
