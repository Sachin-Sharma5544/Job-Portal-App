export const getSelectedJobName = (trendingJobs, param): string => {
    if (param.job) {
        const selectedJob = trendingJobs.find(
            (item) => item.jobName.toLowerCase() === param.job.toLowerCase()
        );
        return `Trending ${selectedJob?.jobName} Jobs`;
    }

    if (param.company) {
        return `${param.company} Company Jobs`;
    }
    return "";
};

export const getSelectedCompanyName = (param): string => {
    if (param.company) {
        return `${param.company}`;
    }
    return "";
};
