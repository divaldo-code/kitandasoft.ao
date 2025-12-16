import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ChristmasPreloader = () => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const location = useLocation();

  const dismissPreloader = useCallback(() => {
    if (isAnimating) {
      setIsAnimating(false);
      setTimeout(() => {
        setShowPreloader(false);
      }, 800);
    }
  }, [isAnimating]);

  useEffect(() => {
    // Check if it's Christmas season (before December 27th)
    const today = new Date();
    const endDate = new Date(today.getFullYear(), 11, 27);
    
    if (today >= endDate) {
      return;
    }

    // Only show on home page
    const isHomePage = location.pathname === "/" || location.pathname === "/index" || location.pathname === "";
    
    // Check if preloader was already shown in this session
    const preloaderShown = sessionStorage.getItem("christmasPreloaderShown");
    
    if (isHomePage && !preloaderShown) {
      setShowPreloader(true);
      sessionStorage.setItem("christmasPreloaderShown", "true");
    }
  }, [location.pathname]);

  // Add event listeners for user interaction
  useEffect(() => {
    if (!showPreloader) return;

    const handleInteraction = () => {
      dismissPreloader();
    };

    // Mouse events
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("mousedown", handleInteraction);
    
    // Touch events for mobile
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("touchmove", handleInteraction);
    
    // Scroll events
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("wheel", handleInteraction);

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("wheel", handleInteraction);
    };
  }, [showPreloader, dismissPreloader]);

  if (!showPreloader) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      style={{ 
        backgroundColor: "#151522",
        transitionDuration: "800ms"
      }}
    >
      {/* Loading Text */}
      <div className="text-[#E8F6F8] text-xl md:text-2xl mb-8 font-medium">
        A carregar a magia do Natal...
      </div>

      {/* Animated Christmas Tree SVG */}
      <div className="tree-container">
        <svg viewBox="0 0 255 350" className="w-48 h-64 md:w-64 md:h-80">
          {/* Tree trunk */}
          <rect x="102" y="280" width="50" height="60" fill="#8B4513" rx="4" />
          
          {/* Tree layers with gradient */}
          <defs>
            <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E8B57" />
              <stop offset="100%" stopColor="#1a5c38" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Tree shape */}
          <polygon points="127,20 50,120 200,120" fill="url(#treeGradient)" />
          <polygon points="127,70 30,180 220,180" fill="url(#treeGradient)" />
          <polygon points="127,130 10,280 240,280" fill="url(#treeGradient)" />
          
          {/* Star on top */}
          <polygon 
            points="127,5 132,18 146,18 135,27 139,40 127,32 115,40 119,27 108,18 122,18" 
            fill="#FFD700"
            filter="url(#glow)"
            className="animate-pulse"
          />
          
          {/* Christmas ornaments with animation */}
          <circle cx="90" cy="100" r="8" fill="#B74551" className="ornament animate-twinkle" style={{ animationDelay: "0s" }} />
          <circle cx="160" cy="95" r="8" fill="#4169E1" className="ornament animate-twinkle" style={{ animationDelay: "0.3s" }} />
          <circle cx="70" cy="160" r="10" fill="#FFD700" className="ornament animate-twinkle" style={{ animationDelay: "0.6s" }} />
          <circle cx="180" cy="155" r="10" fill="#B74551" className="ornament animate-twinkle" style={{ animationDelay: "0.9s" }} />
          <circle cx="127" cy="140" r="8" fill="#32CD32" className="ornament animate-twinkle" style={{ animationDelay: "1.2s" }} />
          <circle cx="50" cy="230" r="12" fill="#4169E1" className="ornament animate-twinkle" style={{ animationDelay: "1.5s" }} />
          <circle cx="200" cy="225" r="12" fill="#FFD700" className="ornament animate-twinkle" style={{ animationDelay: "1.8s" }} />
          <circle cx="127" cy="210" r="10" fill="#B74551" className="ornament animate-twinkle" style={{ animationDelay: "2.1s" }} />
          <circle cx="85" cy="250" r="10" fill="#32CD32" className="ornament animate-twinkle" style={{ animationDelay: "2.4s" }} />
          <circle cx="170" cy="255" r="10" fill="#4169E1" className="ornament animate-twinkle" style={{ animationDelay: "2.7s" }} />
          
          {/* Garland/tinsel effect */}
          <path 
            d="M60,110 Q127,130 190,110" 
            stroke="#FFD700" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            className="animate-pulse"
          />
          <path 
            d="M40,175 Q127,200 210,175" 
            stroke="#FFD700" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path 
            d="M20,250 Q127,280 230,250" 
            stroke="#FFD700" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Loading Bar */}
      <div className="w-72 md:w-80 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#B74551] rounded-full"
          style={{
            animation: "loading 5s linear forwards"
          }}
        />
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              fontSize: `${10 + Math.random() * 15}px`,
              animation: `snowfall ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 0 8px currentColor);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.9);
            filter: drop-shadow(0 0 4px currentColor);
          }
        }
        
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
        
        .ornament {
          filter: drop-shadow(0 0 6px currentColor);
        }
      `}</style>
    </div>
  );
};

export default ChristmasPreloader;
