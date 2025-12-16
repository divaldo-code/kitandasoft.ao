import { useEffect, useState } from "react";

const ChristmasDecorations = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Check if it's Christmas season (before December 27th)
    const today = new Date();
    const endDate = new Date(today.getFullYear(), 11, 27);
    
    if (today >= endDate) {
      return;
    }

    // Generate snowflakes
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      size: 10 + Math.random() * 15,
    }));
    setSnowflakes(flakes);
  }, []);

  // Check if it's Christmas season
  const today = new Date();
  const endDate = new Date(today.getFullYear(), 11, 27);
  
  if (today >= endDate) {
    return null;
  }

  return (
    <>
      {/* Falling Snowflakes */}
      <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white opacity-70 animate-fall"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              fontSize: `${flake.size}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>



      {/* CSS for animations */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.9);
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 1s ease-in-out infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
};

export default ChristmasDecorations;
