import { PORT } from "../../backend";

export const COMMON_PATHS = {
    api: "/api",
    auth: "/auth",
    jobs: "/jobs",
};

export const REQUEST_BASE_URL = {
    url: `http://localhost:${PORT}${COMMON_PATHS.api}`,
};

export const LOCATION_BASE_URL = {
    url: `https://us1.locationiq.com/v1/autocomplete`,
};

export const PATH_PARAMS = {
    job: "/:job",
    company: "/:company",
};

export const NAVIGATION_PATHS = {
    home: "/",
    company: "/company",
    companies: "/companies",
    salary: "/salary",
    login: "/login",
    jobsType: "/jobs-type",
    industryType: "/industry-type",
    employer: "/employer",
    signup: "/signup",
    proflie: "/profile",
    jobs: COMMON_PATHS.jobs,
    api: COMMON_PATHS.api,
    auth: COMMON_PATHS.auth,
};

// Footer Pages paths
export const FOOTER_PATHS = {
    aboutUs: "/aboutUs",
    careers: "/careers",
    employersHome: "/employersHome",
    fraudAlert: "/fraudAlert",
    privacyPolicy: "/privacyPolicy",
    reportIssue: "/reportIssue",
    terms: "/terms",
    trustAndSafety: "/trustAndSafety",
};
