export type Dictionary = {

    "general": {
        "ReadMore": string;
        "ctaMessage": string;
    },
    "about": {
        "WhoWeAre": string;
        "slogan": string;
        "short": string;
        "description": string;
        "values": {
            "dynamism": {
                "title": string;
                "content": string;
            };
            "passion": {
                "title": string;
                "content": string;
            };
            "professionalism": {
                "title": string;
                "content": string;
            };
        };
    },

    menu: {
        Home: string;
        Solutions: string;
        Products: string;
        SuccessStories: string;
        GovernmentSupport: string;
        NGSD: string;
        AboutUs: string;
        Blog: string;
        ContactUs: string;
        active?: {
            Solutions?: boolean;
            Products?: boolean;
            SuccessStories?: boolean;
            GovernmentSupport?: boolean;
            NGSD?: boolean;
            AboutUs?: boolean;
            Blog?: boolean;
            ContactUs?: boolean;
        };
        // Solutions submenu (services)
        WebApplication: string;
        SolutionArchitecture: string;
        CustomSoftwareDevelopment: string;
        DevOpsServices: string;
        CloudDevelopment: string;
        MobileDevelopment: string;
        SupportServices: string;
        DataScience: string;
        // Products submenu
        ILC: string;
        StudyScoreAI: string;
        Egitimiste: string;
        GenixoWorkAI: string;
        GenixoAssistant: string;
        TOMEREYadis: string;
        RetiredTravelApp: string;
    };
    welcome: {
        title: string;
    };
    hero: {
        subtitle: string;
        title: string;
        description: string;
        button: string;
    };


    "services": {
        "WebApplication": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "ArchitectureAsAService": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "CustomSoftwareDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "DevOpsServices": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "CloudDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "MobileDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "ApplicationMaintenanceAndSupportServices": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "DataScience": {
            "summary": string;
            "name": string;
            "description": string;
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
        },
        "general":{
            "ReadMore":string;
        }
    };

    "products": {
        "ILC": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "StudyScoreAI": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "Egitimiste": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "GenixoWorkAI": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "GenixoAssistant": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "TOMEREYadis": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
        "RetiredTravelApp": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image1"?: string;
            "image2"?: string;
            "longDescription"?: string;
            "active"?: boolean;
            "showOnHomepage"?: boolean;
            "videoLink"?: string;
        };
    };
    "ngsd": {
        "title": string;
        "subtitle": string;
        "forWho": {
            "title": string;
            "content": string;
        };
        "whatIs": {
            "title": string;
            "content": string;
        };
        "remote": {
            "title": string;
            "content": string;
        };
        "dynamic": {
            "title": string;
            "content": string;
        };
        "global": {
            "title": string;
            "content": string;
        };
    };
    "counter": {
        "items": Array<{
            "value": string;
            "label": string;
        }>;
    };
    "chooseUs": {
        "subtitle": string;
        "title": string;
        "items": Array<{
            "image": string;
            "title": string;
            "description": string;
            "link"?: string;
        }>;
    };
    "blogs"?: {
        [key: string]: {
            "title": string;
            "excerpt": string;
            "content": string;
            "date": string;
            "author": {
                "name": string;
                "title"?: string;
            };
            "image": string;
            "active"?: boolean;
        };
    };

};