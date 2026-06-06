import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link2, 
  CheckCircle2,
  ChevronDown,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { BLOG_POSTS } from "../constants/blogData";

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const article = useMemo(() => {
    return BLOG_POSTS.find((post) => post.slug === slug);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    const categoryRelated = BLOG_POSTS.filter(
      (post) => post.category === article.category && post.slug !== article.slug
    );
    if (categoryRelated.length < 3) {
      const remainingCount = 3 - categoryRelated.length;
      const otherPosts = BLOG_POSTS.filter(
        (post) => post.category !== article.category && post.slug !== article.slug
      ).slice(0, remainingCount);
      return [...categoryRelated, ...otherPosts];
    }
    return categoryRelated.slice(0, 3);
  }, [article]);

  const nextRead = useMemo(() => {
    if (!article) return null;
    const currentIndex = BLOG_POSTS.findIndex((post) => post.slug === article.slug);
    const nextIndex = (currentIndex + 1) % BLOG_POSTS.length;
    return BLOG_POSTS[nextIndex];
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaqIndex(null);
    setMobileTocOpen(false);

    if (article) {
      // SEO Optimization: Window Title and Meta Tags
      document.title = `${article.seoTitle} | HOMLAP`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", article.seoDesc);
      }

      // Inject JSON-LD Structured Schema for SEO
      const schemaId = "blog-schema-jsonld";
      let script = document.getElementById(schemaId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.seoDesc,
        "image": article.coverImage,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Homlap",
          "logo": {
            "@type": "ImageObject",
            "url": window.location.origin + "/assets/Homscreen.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        }
      });

      return () => {
        // Cleanup schema script on unmount
        const oldScript = document.getElementById(schemaId);
        if (oldScript) {
          oldScript.remove();
        }
      };
    }
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Compensate for fixed header height
      setTimeout(() => {
        window.scrollBy(0, -100);
      }, 500);
    }
  };

  if (!article) {
    return (
      <main className="pt-40 pb-40 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Article Not Found</h1>
        <p className="text-slate-500 mb-8 font-medium">The article you are looking for does not exist or has been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 bg-slate-950 text-white px-8 py-4 rounded-[2rem] font-bold shadow-md hover:bg-slate-900 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to Blog</span>
        </Link>
      </main>
    );
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

  return (
    <main className="pt-24 pb-24">
      {/* Article Navigation Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-xs font-black text-homlap uppercase tracking-widest hover:text-homlap-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header & Cover */}
      <article className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Metadata Block */}
          <div className="max-w-4xl mx-auto space-y-6 text-center lg:text-left mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-homlap-light text-homlap border border-homlap/15">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter leading-[1.05]">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-4 gap-x-8 pt-4 border-y border-slate-100 py-6 text-xs text-slate-400 font-bold uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-slate-400" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Large Hero Image */}
          <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-16 shadow-sm">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Layout containing Sticky Navigation Sidebar and Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Desktop Left Sidebar: TOC and Share Links */}
            <aside className="lg:col-span-3 sticky top-32 space-y-8 hidden lg:block border-r border-slate-100 pr-6">
              {/* Table of Contents */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.20em] text-slate-400">
                  Table of Contents
                </h4>
                <ul className="space-y-3 text-sm">
                  {article.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleScrollTo(section.id)}
                        className="text-left font-semibold text-slate-500 hover:text-homlap transition-colors leading-snug cursor-pointer"
                      >
                        {section.heading.replace(/^\d+\.\s*/, "")}
                      </button>
                    </li>
                  ))}
                  {article.faqs.length > 0 && (
                    <li>
                      <button
                        onClick={() => handleScrollTo("faq-anchor")}
                        className="text-left font-semibold text-slate-500 hover:text-homlap transition-colors leading-snug cursor-pointer"
                      >
                        FAQ Checklist
                      </button>
                    </li>
                  )}
                </ul>
              </div>

              {/* Share Options */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-[0.20em] text-slate-400">
                  Share Article
                </h4>
                <div className="flex space-x-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 hover:bg-[#1DA1F2]/10 text-slate-400 hover:text-[#1DA1F2] border border-slate-100 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm"
                    aria-label="Share on X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 hover:bg-[#0A66C2]/10 text-slate-400 hover:text-[#0A66C2] border border-slate-100 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm relative group ${
                      copied
                        ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                        : "bg-slate-50 border-slate-100 text-slate-400 hover:bg-homlap-light hover:text-homlap"
                    }`}
                    aria-label="Copy link"
                  >
                    <Link2 className="w-4 h-4" />
                    <span className="absolute left-12 px-2.5 py-1 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-md whitespace-nowrap">
                      {copied ? "Copied!" : "Copy Link"}
                    </span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 max-w-2xl lg:max-w-none space-y-12">
              {/* Mobile Table of Contents Accordion */}
              <div className="lg:hidden bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="flex items-center justify-between w-full text-slate-900 font-extrabold text-sm uppercase tracking-wider"
                >
                  <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-homlap" /> Table of Contents</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileTocOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileTocOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-3 pl-6 border-l-2 border-slate-200 text-sm overflow-hidden"
                    >
                      {article.sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => {
                              handleScrollTo(section.id);
                              setMobileTocOpen(false);
                            }}
                            className="text-left font-semibold text-slate-600 hover:text-homlap py-1 block cursor-pointer"
                          >
                            {section.heading.replace(/^\d+\.\s*/, "")}
                          </button>
                        </li>
                      ))}
                      {article.faqs.length > 0 && (
                        <li>
                          <button
                            onClick={() => {
                              handleScrollTo("faq-anchor");
                              setMobileTocOpen(false);
                            }}
                            className="text-left font-semibold text-slate-600 hover:text-homlap py-1 block cursor-pointer"
                          >
                            FAQ Checklist
                          </button>
                        </li>
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Main Content Sections */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-medium">
                {article.sections.map((section) => (
                  <div key={section.id} id={section.id} className="space-y-6 mb-12 scroll-mt-28">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight pt-4">
                      {section.heading}
                    </h2>
                    
                    {section.subheading && (
                      <p className="text-slate-500 font-bold italic text-sm md:text-base leading-relaxed mt-1">
                        {section.subheading}
                      </p>
                    )}

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base md:text-lg text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {section.highlightText && (
                      <div className="p-6 md:p-8 my-6 border-l-4 border-homlap bg-emerald-50/40 rounded-r-[2rem] font-semibold text-slate-800 leading-relaxed text-sm md:text-base shadow-sm border border-slate-100/50">
                        {section.highlightText}
                      </div>
                    )}

                    {section.list && (
                      <ul className="space-y-4 pt-2">
                        {section.list.map((item, lIdx) => {
                          const parts = item.split(": ");
                          return (
                            <li key={lIdx} className="flex items-start space-x-3 text-slate-600 text-base md:text-lg leading-relaxed">
                              {section.listType === "numbers" ? (
                                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-emerald-100">
                                  {lIdx + 1}
                                </span>
                              ) : (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                              )}
                              <div>
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="text-slate-950 font-extrabold">{parts[0]}:</strong>{" "}
                                    {parts.slice(1).join(": ")}
                                  </>
                                ) : (
                                  item
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              {article.faqs.length > 0 && (
                <div id="faq-anchor" className="pt-10 border-t border-slate-100 scroll-mt-28">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight mb-8">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {article.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                          className="flex items-center justify-between w-full p-6 text-left font-extrabold text-slate-950 hover:text-homlap transition-colors cursor-pointer text-base md:text-lg"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                              openFaqIndex === index ? "rotate-180 text-homlap" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openFaqIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0 border-t border-slate-200/40 text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Share Widget */}
              <div className="lg:hidden py-8 border-y border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center">
                  <Share2 className="w-4 h-4 mr-2" /> Share Article
                </span>
                <div className="flex space-x-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 active:scale-95"
                    aria-label="Share on X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 active:scale-95"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center text-slate-500 active:scale-95 ${
                      copied ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-slate-50 border-slate-100"
                    }`}
                    aria-label="Copy link"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Suggested Reads Banner (CTAs to next content) */}
              {nextRead && (
                <div className="pt-10 border-t border-slate-100">
                  <Link to={`/blog/${nextRead.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-950 text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-transparent pointer-events-none" />
                      <div className="relative z-10 flex-grow space-y-4 max-w-xl text-center md:text-left">
                        <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-homlap">
                          SUGGESTED READ
                        </span>
                        <h4 className="text-2xl md:text-3xl font-black tracking-tight leading-tight group-hover:text-homlap transition-colors">
                          {nextRead.title}
                        </h4>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed line-clamp-2">
                          {nextRead.excerpt}
                        </p>
                      </div>
                      <div className="relative z-10 flex-shrink-0">
                        <span className="w-16 h-16 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:bg-homlap group-hover:text-white transition-all shadow-lg active:scale-95 duration-200">
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Cards Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center lg:text-left mb-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-homlap block mb-2">
              FURTHER READING
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
              Related Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
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
                      <span className="inline-block text-[9px] font-black uppercase tracking-wider text-slate-400">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 leading-snug tracking-tight group-hover:text-homlap transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <span>{post.readTime}</span>
                      <span className="inline-flex items-center text-slate-900 group-hover:text-homlap transition-colors">
                        Read <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
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

export default BlogArticlePage;
