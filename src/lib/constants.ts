import {
  BIRTHDAY,
  BRIDAL_SHOWER,
  CLIENTS,
  DESERVES,
  GROUP_SUPPORT,
  ICON_AND_MORE,
  ICON_AVAILABILITY,
  ICON_BAKERS,
  ICON_CATERERS,
  ICON_CLIENTS,
  ICON_DATE_COLOR,
  ICON_DECORATORS,
  ICON_DJS,
  ICON_EVENT,
  ICON_EYE,
  ICON_HARD_TO_KNOW,
  ICON_MAKEUP_ARTISTS,
  ICON_MATCHING,
  ICON_NO_COLD,
  ICON_PHOTOGRAPHERS,
  ICON_RECOMMENDATIONS,
  ICON_RENTAL_PROVIDERS,
  ICON_SEARCH_INSTA,
  ICON_TICK_CIRCLE,
  ICON_TICK_COLOR,
  ICON_TO_MANY,
  ICON_TO_QUICK,
  ICON_TREND_UP,
  ICON_VENDOR_GHOST,
  ICON_VIDEOGRAPHERS,
  ICON_ZERO,
  RELIABLE,
  RUNNING_ADS,
  STRESS_FREE,
  WEDDING,
} from "./images";

export const earlyAccessData = {
  navLinks: {
    menuItems: [
      { label: "Problem", href: "#problem" },
      { label: "How it works", href: "#howItWorks" },
      { label: "Benefits", href: "#benefits" },
      { label: "Join", href: "#join" },
    ],
    ctaLabel: "I'm a vendor",
    ctaHref: "/vendors",
  },
  heroSection: {
    tagline: "Early Access - $100 per event",
    images: [STRESS_FREE, WEDDING, BIRTHDAY, RELIABLE, BRIDAL_SHOWER],
    headlineBefore: [
      "Plan your event",
      "Plan your weddings",
      "Plan your birthday",
      "Find vendors fast",
      "Plan your bridal",
    ],
    headlineAfter: ["stress", "without", "parties", "and 100%", "shower with"],
    headlineHighlight: [
      "free.",
      "headaches.",
      "stress-free.",
      "reliable",
      "ease.",
    ],
    subtitle:
      "Skip the stress of searching instagram and get matched with vetted vendors for your event in minutes.",
    ctaLabel: "Join Early Access",
  },
  planningSection: {
    titleBefore: "Planning an event should not feel",
    titleHighlight: "overwhelming.",
    cards: [
      {
        description: "Searching Instagram takes hours",
        imageSrc: ICON_SEARCH_INSTA,
      },
      {
        description: "Vendors ghost or don't reply",
        imageSrc: ICON_VENDOR_GHOST,
      },
      {
        description: "Hard to know who to trust",
        imageSrc: ICON_HARD_TO_KNOW,
      },
      {
        description: "Too many referrals, not enough clarity",
        imageSrc: ICON_TO_MANY,
      },
      {
        description: "No quick way to compare options",
        imageSrc: ICON_TO_QUICK,
      },
    ],
  },
  howItWorksSection: {
    titleBefore: "Cevver does the vendor searching ",
    titleHighlight: "for you.",
    steps: [
      {
        stepNumber: "01",
        title: "Tell us about your event",
        description: "Share your event type, date, and location.",
      },
      {
        stepNumber: "02",
        title: "We match you with vendors",
        description: "Our curated network finds the right fit.",
      },
      {
        stepNumber: "03",
        title: "Get vetted recommendations",
        description: "Receive a shortlist of available, qualified vendors.",
      },
      {
        stepNumber: "04",
        title: "Book with confidence",
        description: "Connect directly and lock in your vendor.",
      },
    ],
  },
  whatYouGetSection: {
    titleBefore: "Flexible payment tiers starting from as low as ",
    titleHighlight: "$49",
    cards: [
      {
        description: "Vendor matching",
        subtitle: "Matched to your event type and needs",
        imageSrc: ICON_MATCHING,
      },
      {
        description: "Vetted recommendations",
        subtitle: "Only quality, reviewed vendors",
        imageSrc: ICON_RECOMMENDATIONS,
      },
      {
        description: "Verified availability",
        subtitle: "No more ghosting or guessing",
        imageSrc: ICON_DATE_COLOR,
      },
      {
        description: "Stress-free browsing",
        subtitle: "Curated options, not endless scrolling",
        imageSrc: GROUP_SUPPORT,
      },
      {
        description: "Support during matching",
        subtitle: "We're here to help you decide",
        imageSrc: ICON_TICK_COLOR,
      },
    ],
  },
  testimonialSection: {
    quote:
      '"I spent weeks looking for vendors on my own. Cevver would have saved me so much time and stress."',
    author: "— Chris Anthemum",
  },
};

export const vendorsData = {
  navLinks: {
    menuItems: [
      { label: "Why Cevver", href: "#vendorsLove" },
      { label: "Who can join", href: "#whoCanJoin" },
      { label: "Pricing", href: "#vendorEarlyAccess" },
      { label: "Join", href: "#join" },
    ],
    ctaLabel: "I'm planning an event",
    ctaHref: "/earlyaccess",
  },
  heroSection: {
    tagline: "Early Access is free",
    images: [RUNNING_ADS, CLIENTS, DESERVES],
    headlineBefore: [
      "Get more event clients",
      "Expand your market reach with",
      "Give your services",
    ],
    headlineAfter: ["without ", "100% ready to pay ", "the visibility it "],
    headlineHighlight: ["running ads.", "clients.", "deserves."],
    subtitle:
      "Join Cevver's early vendor community and get matched with people who are actively planning events.",
    ctaLabel: "Join Vendor List",
  },
  whyLoveCevverSection: {
    titleBefore: "Why vendors love",
    titleHighlight: "Cevver",
    cards: [
      {
        description: "Serious, ready-to-book clients",
        imageSrc: ICON_CLIENTS,
      },
      {
        description: "Leads without ads",
        imageSrc: ICON_SEARCH_INSTA,
      },
      {
        description: "Matching based on your availability",
        imageSrc: ICON_AVAILABILITY,
      },
      {
        description: "No cold DMs",
        imageSrc: ICON_NO_COLD,
      },
      {
        description: "Zero early access fees",
        imageSrc: ICON_ZERO,
      },
    ],
  },
  whoCanJoinSection: {
    titleBefore: "Who can ",
    titleHighlight: "join?",
    items: [
      { label: "Event planners", imageSrc: ICON_EVENT },
      { label: "Decorators", imageSrc: ICON_DECORATORS },
      { label: "Caterers", imageSrc: ICON_CATERERS },
      { label: "Makeup artists", imageSrc: ICON_MAKEUP_ARTISTS },
      { label: "Photographers", imageSrc: ICON_PHOTOGRAPHERS },
      { label: "Videographers", imageSrc: ICON_VIDEOGRAPHERS },
      { label: "DJs", imageSrc: ICON_DJS },
      { label: "Bakers", imageSrc: ICON_BAKERS },
      { label: "Rental providers", imageSrc: ICON_RENTAL_PROVIDERS },
      { label: "And more", imageSrc: ICON_AND_MORE },
    ],
  },
  vendorEarlyAccessSection: {
    comingSoonLabel: "Coming soon",
    titleBefore: "Vendor early access is ",
    titleHighlight: "free.",
    subtitle:
      "After launch, plans will Starting from $25. Early Access FREE Lock in early access now.",
    starting: "Starting from $25.",
    free: "Early Access FREE",
    price: "$50",
    priceUnit: "/month",
    features: [
      { text: "Verified badge", imageSrc: ICON_TICK_CIRCLE },
      { text: "Matching priority", imageSrc: ICON_TREND_UP },
      { text: "Visibility boost", imageSrc: ICON_EYE },
    ],
  },
};
