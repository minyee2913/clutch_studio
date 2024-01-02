import { Directory, Ifile } from "./directory";

export class FileBase {
    
    files: Ifile[] = [];

    setFolder(file: FileList): void {
        this.files.splice(0);

        for (const f of file) {
            const paths = f.webkitRelativePath.split("/");

            let relative:Directory | undefined;
            paths.forEach((p, i)=>{
                if (i === paths.length - 1) {
                    if (relative !== undefined) {
                        relative.files.push(
                            {
                                type: "data",
                                name: p,
                                data: f,
                            },
                        )
                    }
                    } else {
                    if (relative !== undefined) {
                        const find = relative?.files.find(v=>v.name === p);

                        if (!find) {
                            relative?.files.push(
                                {
                                    type: "dir",
                                    name: p,
                                    files: [],
                                }
                            );
                        }

                        relative = relative?.files.find(v=>v.name === p) as Directory;
                    } else {
                        const find = this.files.find(v=>v.name === p);

                        if (!find) {
                            this.files.push(
                                {
                                    type: "dir",
                                    name: p,
                                    files: [],
                                }
                            );
                        }

                        relative = this.files.find(v=>v.name === p) as Directory;
                    }
                }
            });
        }

        console.log(JSON.stringify(this.files, null, 4));
    }
}

export const filebase = new FileBase();
