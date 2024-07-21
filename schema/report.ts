export interface Report {
    type?: "junit" | "xunit" | "nunit";
    path?: string;
}

export type ReportList = Report | Report[]
