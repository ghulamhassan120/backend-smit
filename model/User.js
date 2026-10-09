const fs=require("fs");
const path=require("path");
const filePath=path.join(process.cwd(),"data","users.json")
const readData=async()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,fileData)=>{
            if(err){
                reject(err)
            }
            resolve(JSON.parse(fileData.toString()))
        })
    })
}
const writeData=async(data)=>{
     return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,JSON.stringify(data),(err)=>{
            if(err){
                reject(err)
            }
            resolve()
        })
    })
}
exports.createUser=async(email,password)=>{
    const users=await readData()
    const matched=users.find(u=>u.email===email)
    if (matched) {
        throw new Error("user Already Exist")
    } else {
        const userId=Date.now()
        const writeFile=await writeData([userId,...users,{email,password}])
    }
    return users
    
}