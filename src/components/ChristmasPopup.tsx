import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "./ui/button";

const ChristmasPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Check if it's before December 27th
    const today = new Date();
    const endDate = new Date(today.getFullYear(), 11, 27); // December 27th

    if (today >= endDate) {
      return; // Don't show popup after December 26th
    }

    // Check if popup was already closed in this session
    const popupClosed = sessionStorage.getItem("christmasPopupClosed");
    if (popupClosed) {
      setHasBeenClosed(true);
      return;
    }

    // Show popup after 1 minute (30000ms)
    const timer = setTimeout(() => {
      if (!hasBeenClosed) {
        setShowPopup(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasBeenClosed]);

  const handleClose = () => {
    setShowPopup(false);
    setHasBeenClosed(true);
    sessionStorage.setItem("christmasPopupClosed", "true");
  };

  const handleJoin = () => {
    window.open(
      "https://criar.app.kitandasoft.ao/Seguranca/CreateAccount",
      "_blank",
    );
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 relative">
        {/* Snowflakes decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-4 text-2xl animate-bounce">
            ❄️
          </div>
          <div className="absolute top-8 right-8 text-xl animate-bounce delay-100">
            ❄️
          </div>
          <div className="absolute top-16 left-1/4 text-lg animate-bounce delay-200">
            ❄️
          </div>
          <div className="absolute bottom-20 right-4 text-xl animate-bounce delay-300">
            ❄️
          </div>
          <div className="absolute bottom-32 left-8 text-lg animate-bounce delay-150">
            ❄️
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-md"
        >
          <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Christmas Image */}
        <div className="relative h-48 bg-gradient-to-br from-red-600 via-red-500 to-green-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🎄</div>
            <div className="flex justify-center gap-2">
              <span className="text-3xl">🎁</span>
              <span className="text-3xl">⭐</span>
              <span className="text-3xl">🎁</span>
            </div>
          </div>
          {/* Snow effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            🎅 Feliz Natal e Boas Festas! 🎅
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            A equipa KitandaSoft deseja-lhe um Natal repleto de alegria, paz e
            prosperidade! Que 2025 traga muito sucesso para o seu negócio. 🌟
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleJoin}
            className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            <Gift className="h-5 w-5" />
            Aderir Agora
          </Button>

          {/* Decorative footer */}
          <div className="mt-4 flex justify-center gap-1 text-sm">
            <span>🔔</span>
            <span className="text-gray-500 dark:text-gray-400">
              Oferta especial de Natal
            </span>
            <span>🔔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasPopup;
