import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function VideoSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-secondary/50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Watch & Learn
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-sm font-display font-bold text-foreground">
                See How It Works
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1152290288?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="GumDirect Explainer Video"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
