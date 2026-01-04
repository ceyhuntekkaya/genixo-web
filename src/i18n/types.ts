export type Dictionary = {

    "general": {
        "ReadMore": string;

    },
    "about": {
        "WhoWeAre": string;
        "slogan":string;
        "short":string;

    },

    menu: {
        Home: string;
        Solutions: string;
        Products: string;
        SuccessStories: string;
        GovernmentSupport: string;
        AboutUs: string;
        Blog: string;
        ContactUs: string;
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


    "services": {
        "WebApplication": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "ArchitectureAsAService": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "CustomSoftwareDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "DevOpsServices": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "CloudDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "MobileDevelopment": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "ApplicationMaintenanceAndSupportServices": {
            "summary": string;
            "name": string;
            "description": string;
        },
        "DataScience": {
            "summary": string;
            "name": string;
            "description": string;
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
            "image"?: string;
        };
        "StudyScoreAI": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
        };
        "Egitimiste": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
        };
        "GenixoWorkAI": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
        };
        "GenixoAssistant": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
        };
        "TOMEREYadis": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
        };
        "RetiredTravelApp": {
            "name": string;
            "summary": string;
            "description": string;
            "features"?: string[];
            "image"?: string;
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

};