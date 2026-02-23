import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Watch & Learn
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-md font-display font-bold text-foreground">
                See How It Works
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <video
                  ref={videoRef}
                  src="https://assets.cdn.filesafe.space/SkSvke1CC1EmduOo6QFL/media/699c72fb34011858238d798e.mp4"
                  controls={isPlaying}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  title="GumDirect Explainer Video"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
