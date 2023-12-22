export type Ifile = File | Directory;

export interface Directory {
    name: string;
    files: File[];
}
