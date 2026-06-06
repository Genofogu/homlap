import { motion } from "motion/react";
import { Heart, MapPin, Star } from "lucide-react";
import { Listing } from "../constants/data";

export const ListingCardSkeleton = () => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm animate-pulse">
    <div className="relative aspect-[4/3] bg-slate-100" />
    <div className="p-8 space-y-6">
      <div className="space-y-3">
        <div className="h-6 w-3/4 bg-slate-100 rounded-lg" />
        <div className="h-4 w-1/2 bg-slate-50 rounded-lg" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-slate-50 rounded-full" />
        <div className="h-6 w-16 bg-slate-50 rounded-full" />
      </div>
      <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
        <div className="h-8 w-24 bg-slate-100 rounded-lg" />
        <div className="h-10 w-32 bg-slate-200/50 rounded-xl" />
      </div>
    </div>
  </div>
);

export const ListingCard = ({ listing }: { listing: Listing }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-6 left-6">
        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-xl">
          {listing.type}
        </span>
      </div>
      <div className="absolute top-6 right-6">
        <button className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-slate-900 shadow-xl hover:bg-homlap hover:text-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">
            {listing.title}
          </h3>
          <p className="flex items-center text-xs font-medium text-slate-500">
            <MapPin className="w-3 h-3 mr-1 text-homlap" /> {listing.location}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
          <span className="text-sm font-extrabold">{listing.rating}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {listing.amenities.map((a: string) => (
          <span
            key={a}
            className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"
          >
            {a}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div>
          <span className="text-2xl font-black text-homlap tracking-tight">
            ₹{listing.price.toLocaleString()}
          </span>
          <span className="text-xs font-bold text-slate-400">/month</span>
        </div>
        <button className="bg-slate-950 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          View Details
        </button>
      </div>
    </div>
  </motion.div>
);
