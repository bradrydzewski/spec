export type Service = string | ServiceLong;

export interface ServiceLong {
    parallel?: boolean;
    items: string[];
}
