import { type JobsType } from "@repo/datatypes";

interface ParamType {
    job?: string;
    company?: string;
}

export const getSelectedJobName = (
    jobsTypeList: JobsType[],
    param: ParamType
): string => {
    if (param.job) {
        const selectedJob = jobsTypeList.find(
            (item) => item.jobName.toLowerCase() === param.job?.toLowerCase()
        );
        return `Active ${selectedJob?.jobName} Jobs`;
    }

    if (param.company) {
        return `Jobs in ${param.company}`;
    }
    return "";
};

export const getSelectedCompanyName = (param: ParamType): string => {
    if (param.company) {
        return param.company;
    }
    return "";
};
