const argv = process.argv;
const fs = require('fs')

function checkFileAndReadFile(args){

for (let i = 2; i < args.length; i++) {

    const path = `./${args[i]}`
    fs.access(path, fs.F_OK, (err) => {

        if (err) {
          console.log("file doesn't exist")
          return
        }
        fs.readFile(path, 'utf8', function(err,data){

      console.log(data)
        })
        //file exists
      })    
}
}

checkFileAndReadFile(argv)