export interface ApplicationDetail {
  slug: string;
  hero: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
  };
  challenges: {
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
  solution: {
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
  technical: {
    heading: string;
    intro: string;
    specs: string[];
    suitableFor: string[];
  };
  compliance: {
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
  cta: {
    heading: string;
    description: string;
  };
}

export const applicationDetails: Record<string, ApplicationDetail> = {
  beverages: {
    slug: "beverages",
    hero: {
      label: "Beverages",
      title: "Acacia Gum for Beverage Formulations",
      subtitle: "High-performance natural emulsifier for citrus oils, flavor concentrates, and soft drink systems.",
      description: "GumDirect's spray-dried Acacia Senegal delivers stable emulsions, consistent clouding, and reliable batch performance across beverage applications.",
    },
    challenges: {
      heading: "Common Beverage Formulation Challenges",
      intro: "Beverage manufacturers frequently encounter:",
      items: [
        "Oil separation in citrus emulsions",
        "Poor dispersion of flavor oils",
        "Cloud instability over shelf life",
        "Inconsistent batch-to-batch performance",
        "Viscosity control issues at higher solids",
      ],
      closing: "Formulation stability directly impacts product appearance, flavor delivery, and shelf-life reliability.",
    },
    solution: {
      heading: "How GumDirect Supports Beverage Systems",
      intro: "Our spray-dried Acacia Senegal is selected and processed to provide:",
      items: [
        "Strong oil-in-water emulsification capacity",
        "Uniform dispersion in aqueous systems",
        "Low viscosity at effective inclusion rates",
        "Stable performance across varying pH ranges",
        "Consistent particle size for predictable behavior",
      ],
      closing: "Each batch is tested and documented to ensure repeatable performance in industrial beverage production.",
    },
    technical: {
      heading: "Why Spray-Dried Acacia Senegal?",
      intro: "Acacia Senegal (E414) is widely used in beverage systems due to its:",
      specs: [
        "High purity (≥99%)",
        "Excellent emulsifying properties",
        "Fine powder format (<250µm)",
        "Neutral taste and odor",
        "Low impact on final viscosity",
      ],
      suitableFor: [
        "Citrus oil emulsions",
        "Flavor concentrates",
        "Clouding agents",
        "Energy drinks",
        "Wine clarification systems",
      ],
    },
    compliance: {
      heading: "Documentation Available",
      intro: "To support beverage manufacturers and regulatory requirements, we provide:",
      items: [
        "Certificate of Analysis (COA) for each batch",
        "Safety Data Sheets (SDS)",
        "Technical Specification Sheets",
        "HACCP & ISO compliance documentation upon request",
      ],
      closing: "All material is supplied with full batch traceability.",
    },
    cta: {
      heading: "Discuss Your Beverage Application",
      description: "Our team can support formulation discussions, documentation requests, and commercial supply inquiries.",
    },
  },
};
