export type Output = string | OutputLong;

export interface OutputLong {
    name?: string;
    alias?: string;
    mask?: boolean;
}
