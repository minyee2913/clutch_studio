export type Ifile = DataFile | Directory;

export interface DataFile {
    type: "data";
    name: string;
    data: File;
}

export interface Directory {
    type: "dir";
    name: string;
    files: Ifile[];
}
