import { Ifile } from "./directory";

export class FileBase {
    
    files: Ifile[] = [];

    setFolder(file: File[]): void {
        this.files.splice(0);

        file.forEach((v)=>{
            const path = v.webkitRelativePath.split("/");

            if (path.length > 1) {
                
            }
        });
    }
}

export const filebase = new FileBase();
