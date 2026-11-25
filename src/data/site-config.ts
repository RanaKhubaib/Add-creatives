export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  features: [string, string, string, string, string];
  process: [string, string, string];
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    website: string;
    logoPath: string;
  };
  menuItems: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
  services: Service[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "ADD Creatives",
    tagline: "Digital Solutions That drive Growth",
    phone: "+92 332 0424157",
    whatsapp: "923320424157",
    email: "info@addcreatives.com",
    address:
      "405 E Block PIA Main Boulevard, Block C PIA Housing Scheme, Lahore 54000, Pakistan",
    website: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.addcreatives.com").replace(
      /\/+$/,
      "",
    ),
    logoPath: "",
  },
  menuItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
    { label: "LinkedIn", href: "" },
  ],
  services: [
    {
      slug: "web-design-development",
      title: "Web Design and Development",
      shortDescription:
        "Clear, responsive websites that make it easier for the right people to choose your business.",
      icon: "PanelsTopLeft",
      features: [
        "User-focused website strategy",
        "Responsive visual design",
        "Fast, accessible development",
        "Search-ready page foundations",
        "Launch support and handover",
      ],
      process: ["Discover your goals", "Design and build", "Launch and improve"],
    },
    {
      slug: "seo",
      title: "SEO",
      shortDescription:
        "Practical search optimisation that helps the people looking for you find you.",
      icon: "Search",
      features: [
        "Technical site review",
        "Keyword and audience research",
        "On-page content improvements",
        "Local search foundations",
        "Progress reporting",
      ],
      process: ["Find the opportunities", "Improve the foundations", "Measure growth"],
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      shortDescription:
        "A considered social presence that gives your brand a consistent, useful voice.",
      icon: "MessagesSquare",
      features: [
        "Channel and audience planning",
        "Monthly content calendars",
        "Creative post development",
        "Community engagement guidance",
        "Performance reviews",
      ],
      process: ["Set the direction", "Create and publish", "Learn and refine"],
    },
    {
      slug: "branding-graphic-design",
      title: "Branding and Graphic Design",
      shortDescription:
        "Distinctive visual systems that help your business show up with confidence.",
      icon: "Shapes",
      features: [
        "Brand discovery and direction",
        "Logo and identity design",
        "Colour and typography system",
        "Marketing collateral",
        "Practical brand guidelines",
      ],
      process: ["Understand your story", "Shape the identity", "Bring it to life"],
    },
    {
      slug: "performance-ads",
      title: "Performance Ads",
      shortDescription:
        "Focused Google and Meta campaigns designed to connect spend with meaningful action.",
      icon: "ChartNoAxesCombined",
      features: [
        "Campaign and conversion planning",
        "Audience and keyword research",
        "Ad creative and copy",
        "Budget and bid management",
        "Transparent optimisation reports",
      ],
      process: ["Plan the campaign", "Launch and test", "Optimise what works"],
    },
    {
      slug: "content-video-production",
      title: "Content and Video Production",
      shortDescription:
        "Useful stories and polished video that make your brand easier to remember.",
      icon: "Clapperboard",
      features: [
        "Content concepts and scripting",
        "Brand-led photography direction",
        "Short-form video production",
        "Editing and motion graphics",
        "Platform-ready exports",
      ],
      process: ["Build the story", "Produce the content", "Share it with purpose"],
    },
  ],
};
