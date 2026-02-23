import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function VideoSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-secondary">
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
                <video
                  src="https://assets.cdn.filesafe.space/SkSvke1CC1EmduOo6QFL/media/699c72fb34011858238d798e.mp4"
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
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
