
export interface Service {
    id?: string;
    name?: string;
    tags?: Record<string, string>;

    /**
     * @deprecated
     */
    org?: string;

    /**
     * @deprecated
     */
    project?: string;
}

export type ServiceRef = string | string[] | ServiceRefLong;

export interface ServiceRefLong {
    sequential?: boolean;
    items: string[];
}
