import type { OfferKey } from "@/content/offers";

export type JourneyStep = {
    time: string;
    text: string;
};

type Product = {
    name: string;
    summary: string;
    description: string;
    features?: (string | { title: string; description: string })[];
    webLink?: string;
    logo?: string;
    image1?: string;
    image2?: string;
    longDescription?: string;
    active?: boolean;
    showOnHomepage?: boolean;
    videoLink?: string;
    problemsTitle?: string;
    problemsSubtitle?: string;
    problems?: Array<{ title: string; description: string }>;
};

/** Site chrome and shared strings: `common.json`, `products.json`, `seo.json`. Page copy lives in `pages/*.json`. */
export type Dictionary = {
    menu: {
        Home: string;
        Services: string;
        CaseStudies: string;
        HowWeWork: string;
        Pricing: string;
        AboutUs: string;
        Blog: string;
        ContactUs: string;
        Products: string;
        ILC: string;
        StudyScoreAI: string;
        Egitimiste: string;
        GenixoWorkAI: string;
        GenixoAssistant: string;
        TOMEREYadis: string;
        RetiredTravelApp: string;
    };
    offers: Record<OfferKey, { name: string; summary: string }>;
    chrome: {
        cta: string;
        tagline: string;
        menuOpen: string;
        menuClose: string;
        language: string;
        viewAll: string;
        pages: string;
        skip: string;
        backToTop: string;
        primaryNav: string;
    };
    footer: {
        services: string;
        company: string;
        resources: string;
        contact: string;
        memberships: string;
        aiReadiness: string;
        howWeWork: string;
        whatWeDontDo: string;
        dataSecurity: string;
        cyberpark: { title: string; description: string };
        tbd: { title: string; description: string };
        alte: { title: string; description: string };
    };
    ui: {
        inShort: string;
        home: string;
        sources: string;
        related: string;
        updated: string;
        author: string;
        faq: string;
        today: string;
        withAi: string;
        measure: string;
        readScenario: string;
        readCase: string;
        bookCall: string;
        direct: string;
        todo: string;
        notFoundTitle: string;
        notFoundBody: string;
        articleCta: { title: string; lead: string };
        profile: { articles: string; ctaTitle: string; ctaLead: string };
        caseFacts: {
            industry: string;
            size: string;
            duration: string;
            stack: string;
        };
    };
    blog: {
        latestBlog: string;
        fromNewsRoom: string;
        readFull: string;
    };
    contactForm: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        messageLabel: string;
        messageDescription: string;
        messagePlaceholder: string;
        budgetLabel: string;
        budgetPlaceholder: string;
        submitButton: string;
        submitting: string;
        successMessage: string;
        errorMessage: string;
        connectionError: string;
        botDetectedMessage: string;
    };
    products: {
        hero?: { backgroundImage: string };
        ILC: Product;
        StudyScoreAI: Product;
        Egitimiste: Product;
        GenixoWorkAI: Product;
        GenixoAssistant: Product;
        TOMEREYadis: Product;
        RetiredTravelApp: Product;
    };
    seo?: {
        pages?: Record<string, { title?: string; description?: string }>;
    };
};
