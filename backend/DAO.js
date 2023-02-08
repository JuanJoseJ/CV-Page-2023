const fs = require('fs')
function readAllJSON() {
    return new Promise((resolve, reject)=>{
        try {
            fs.readFile('./static/content.json', (err, data) => {
                if (err) {
                    throw err;
                }else{
                    resolve (JSON.parse(data))
                }
            });
        } catch (error) {
            console.log(error)
            reject(error);
        }
    })
}

module.exports = {readAllJSON}