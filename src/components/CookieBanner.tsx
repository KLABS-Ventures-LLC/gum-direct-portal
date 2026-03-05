import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "gumdirect_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto bg-foreground text-background rounded-2xl shadow-elevated p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-5 h-5 flex-shrink-0 text-accent mt-0.5 sm:mt-0" />
        <div className="flex-1 text-sm leading-relaxed text-background/70">
          We use cookies to improve your experience. By continuing to browse, you agree to our{" "}
          <Link to="/cookies" className="text-accent hover:underline font-medium">
            Cookie Policy
          </Link>
          .
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={dismiss}
            className="p-2 rounded-full hover:bg-background/10 transition-colors text-background/50 hover:text-background/80"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
