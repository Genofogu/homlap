import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 220 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Text "Homlap" */}
        <text
          x="0"
          y="55"
          className="fill-primary font-bold"
          style={{ 
            fontSize: "56px", 
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            letterSpacing: "-0.04em",
            fontWeight: 800
          }}
        >
          Homlap
        </text>
        
        {/* Smile Curve */}
        <path
          d="M12 72C40 88 115 88 142 72"
          className="stroke-primary"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
