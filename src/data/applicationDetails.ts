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
  emulsions: {
    slug: "emulsions",
    hero: {
      label: "Emulsions",
      title: "Acacia Gum for Emulsion Systems",
      subtitle: "Reliable stabilization for oil-in-water emulsions across food, beverage, and flavor applications.",
      description: "GumDirect's spray-dried Acacia Senegal provides consistent emulsification performance, controlled viscosity, and dependable batch uniformity.",
    },
    challenges: {
      heading: "Common Emulsion Stability Challenges",
      intro: "Formulators working with oil-in-water systems often face:",
      items: [
        "Phase separation over time",
        "Droplet coalescence",
        "Inconsistent droplet size distribution",
        "Viscosity imbalance at functional inclusion rates",
        "Reduced stability under temperature variation",
      ],
      closing: "Emulsion stability is critical for product clarity, shelf life, and performance reliability.",
    },
    solution: {
      heading: "Stabilization Through Controlled Processing",
      intro: "Our spray-dried Acacia Senegal is selected for applications requiring:",
      items: [
        "Strong surface-active properties",
        "Effective encapsulation of oil droplets",
        "Stable droplet suspension",
        "Low viscosity at functional dosage",
        "Predictable behavior across production batches",
      ],
      closing: "Fine particle size and controlled drying improve dispersion efficiency during hydration.",
    },
    technical: {
      heading: "Why Acacia Senegal Performs in Emulsions",
      intro: "Acacia Senegal contains natural arabinogalactan-protein complexes that contribute to:",
      specs: [
        "Efficient oil droplet stabilization",
        "Long-term suspension stability",
        "Resistance to coalescence",
        "Compatibility with flavor oils and essential oils",
      ],
      suitableFor: [
        "Citrus oil emulsions",
        "Flavor concentrates",
        "Fragrance systems",
        "Spray-dried flavor encapsulation",
        "Nutritional emulsions",
      ],
    },
    compliance: {
      heading: "Documentation & Quality Control",
      intro: "Each batch is supplied with:",
      items: [
        "Certificate of Analysis (COA)",
        "Safety Data Sheet (SDS)",
        "Technical specification sheet",
        "Batch-level traceability documentation",
      ],
      closing: "Manufactured and handled under HACCP and ISO-aligned quality systems.",
    },
    cta: {
      heading: "Discuss Your Emulsion Requirements",
      description: "Whether developing a new system or optimizing an existing formulation, our team can support your technical and supply needs.",
    },
  },
  confectionery: {
    slug: "confectionery",
    hero: {
      label: "Confectionery",
      title: "Acacia Gum for Confectionery Applications",
      subtitle: "Natural binding, glazing, and film-forming performance for stable and consistent confectionery products.",
      description: "GumDirect's spray-dried Acacia Senegal supports texture control, surface finish, and structural stability across a wide range of confectionery systems.",
    },
    challenges: {
      heading: "Common Confectionery Formulation Challenges",
      intro: "Confectionery manufacturers often encounter:",
      items: [
        "Sugar crystallization instability",
        "Poor surface glazing or uneven coating",
        "Structural weakness in gummy systems",
        "Inconsistent binding in compressed sweets",
        "Moisture migration affecting texture",
      ],
      closing: "Maintaining visual appeal and texture consistency is critical in confectionery production.",
    },
    solution: {
      heading: "Functional Support in Confectionery Systems",
      intro: "Our spray-dried Acacia Senegal provides:",
      items: [
        "Effective film-forming properties",
        "Controlled binding performance",
        "Improved surface glazing",
        "Stabilization against crystallization",
        "Consistent dispersion during mixing",
      ],
      closing: "Its fine particle size allows uniform hydration and predictable functionality in industrial processes.",
    },
    technical: {
      heading: "Why Acacia Senegal Is Used in Confectionery",
      intro: "Acacia Senegal is valued for its:",
      specs: [
        "Neutral taste and odor",
        "Excellent film-forming capability",
        "Low viscosity at functional inclusion rates",
        "Natural origin (E414 compliant)",
      ],
      suitableFor: [
        "Hard candy glazing",
        "Chocolate panning",
        "Gummy texturizing",
        "Soft candy binding",
        "Sugar coating systems",
      ],
    },
    compliance: {
      heading: "Quality & Regulatory Support",
      intro: "We supply:",
      items: [
        "Certificate of Analysis (COA) for each batch",
        "Safety Data Sheets (SDS)",
        "Technical specifications",
        "HACCP & ISO-aligned documentation",
      ],
      closing: "All batches are traceable from source to delivery.",
    },
    cta: {
      heading: "Discuss Your Confectionery Application",
      description: "Our team can support formulation discussions, documentation needs, and commercial supply requirements.",
    },
  },
  supplements: {
    slug: "supplements",
    hero: {
      label: "Dietary Supplements",
      title: "Acacia Gum for Dietary Supplement Applications",
      subtitle: "Functional binding, encapsulation, and stabilization for nutraceutical and supplement formulations.",
      description: "GumDirect's spray-dried Acacia Senegal supports consistent performance in powders, capsules, tablets, and liquid supplement systems.",
    },
    challenges: {
      heading: "Common Supplement Formulation Challenges",
      intro: "Nutraceutical manufacturers often encounter:",
      items: [
        "Poor binding in tablet compression",
        "Capsule flowability inconsistencies",
        "Ingredient segregation in powder blends",
        "Stability issues in liquid supplements",
        "Regulatory documentation requirements",
      ],
      closing: "Precision and consistency are essential in supplement manufacturing environments.",
    },
    solution: {
      heading: "Functional Performance in Supplement Systems",
      intro: "Our spray-dried Acacia Senegal provides:",
      items: [
        "Reliable binding properties for tablet systems",
        "Improved powder flow characteristics",
        "Stabilization in liquid supplement matrices",
        "Controlled viscosity in suspension systems",
        "Neutral sensory profile",
      ],
      closing: "Fine particle size ensures predictable dispersion and uniform blending during manufacturing.",
    },
    technical: {
      heading: "Why Acacia Senegal Is Used in Supplements",
      intro: "Acacia Senegal (E414) is valued for its:",
      specs: [
        "Natural origin",
        "High purity (≥99%)",
        "Low viscosity at functional dosage",
        "Neutral taste and odor",
        "Compatibility with active ingredients",
      ],
      suitableFor: [
        "Tablet binding",
        "Capsule formulations",
        "Powder blends",
        "Liquid supplements",
        "Fiber-based nutraceutical products",
      ],
    },
    compliance: {
      heading: "Regulatory & Quality Support",
      intro: "To support supplement manufacturers, we provide:",
      items: [
        "Certificate of Analysis (COA) per batch",
        "Safety Data Sheets (SDS)",
        "Technical specification sheets",
        "HACCP & ISO-aligned documentation",
        "Halal and Kosher certification (where required)",
      ],
      closing: "All material is supplied with full batch traceability.",
    },
    cta: {
      heading: "Discuss Your Supplement Formulation",
      description: "Our team can support your technical documentation needs and commercial supply requirements.",
    },
  },
};
