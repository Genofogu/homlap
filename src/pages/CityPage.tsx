import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SECTORS, FEATURED_LISTINGS } from "../constants/data";
import { ListingCard, ListingCardSkeleton } from "../components/ListingCard";

const CityPage = () => {
  const { slug } = useParams();
  const city = useMemo(() => SECTORS.find((c) => c.slug === slug), [slug]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!city)
    return <div className="pt-40 text-center font-black">City Not Found</div>;

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <Link
            to="/"
            className="text-xs font-black text-homlap uppercase tracking-widest flex items-center mb-6"
          >
            {" "}
            <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-4">
            Rentals in {city.name}
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Verified PGs, Flats, and Shared Apartments in {city.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((_, i) => <ListingCardSkeleton key={i} />)
            : FEATURED_LISTINGS.map((l) => (
              <ListingCard
                key={l.id}
                listing={{ ...l, title: `${l.title} in ${city.name}` }}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default CityPage;
