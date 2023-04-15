const argv = process.argv;
const { default: axios } = require('axios');
const fs = require('fs')

async function webCat(args){
for (let i = 2; i < args.length; i++) {
const path = args[i];
try{
    let response=await axios.get(path)
    console.log(response)
} catch(e){
    console.log('Error fetching',path)
}
}}

webCat(argv)