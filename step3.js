const argv = process.argv;
const { default: axios } = require('axios');
const fs = require('fs');
const { fileURLToPath } = require('url');

async function webCat(bool,args){
    console.log(args)
    if(bool){
        const address = args[3]
        const filePath = args[4]
        try{
            let response1=await axios.get(address)
            console.log()
            fs.writeFile(filePath,response1.data,'utf8',(e)=>{
                console.log(e)
            })
        } catch(e){
            console.log('Error fetching  this',address)
        }
    }else{
for (let i = 2; i < args.length; i++) {
const path = args[i];
try{
    let response=await axios.get(path)
    console.log(response)
} catch(e){
    console.log('Error fetching',path)
}
}}}
if (argv[2]==='--out') {
    console.log('good to go')
    webCat(true,argv)
    }else{
webCat(false,argv)
    }