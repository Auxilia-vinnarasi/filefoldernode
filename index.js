const fs=require("fs");
const path=require("path");

const target="./";

fs.readdir(path.join(__dirname,target),
{withFileTypes:true},
(error,data)=>{
    const files=[];
    const directories=[];

    data.forEach((item)=>{
        if(item.isDirectory()){
            directories.push(item.name);
        }else{
            files.push(item.name);
        }
    });

    files.sort((a,b)=>(a.toLowerCase() > b.toLowerCase() ? 1 : -1));

    directories.sort((a,b)=>(a.toLowerCase() > b.toLowerCase() ? 1 : -1));
    
    console.log("Files");
    console.table(files);

    console.log("Directories");
    console.table(directories);


}
);