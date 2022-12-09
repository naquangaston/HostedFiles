!async function () {
    var { argv, mainModule } = require('process')
    var path = mainModule.path
    var fs = require("fs")
    var array = []
    fs.existsSync(`${path}/working.txt`) ? null : fs.writeFileSync(`${path}/working.txt`, "")
    const https = require("https");
    const { exec, execSync } = require('child_process')
    if(argv.length==3){
        [...argv[2].match(/[0-9]+/gi)].forEach(num=>argv.push(num))
    }
    argv = argv.filter(e=>{try{eval(e);return true}catch(err){};return false}).map(Number).splice(2)
    console.log('Validating ids', argv)
    for (let i = 0; i < argv.length; i++) {
        await new Promise(done => {
            const id = argv[i]
            https.get(`https://api.roblox.com//marketplace/productinfo?assetId=${id}`, (resp) => {
                let data = '';
                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', (b) => {
                    var json = JSON.parse(`${data}`)
                    if (json.errors) {
                        console.warn(id, 'is not a valid product id')
                    } else {
                        if (json.Description=='[ Content Deleted ]'||json.name=='[ Content Deleted ]'||json.Description.startsWith("(Removed for violations of Roblox Terms of Use)")) {
                            console.log("ID:", id, 'is deleted')
                        } else {
                            console.log("ID:", id, 'is avalible')
                            array.push(id)
                            fs.writeFileSync(`${path}/working.txt`, array.join('\n'))
                        }
                    }
                    done()
                });
            }).on("error", (err) => {
                console.log("Error: " + err.message); a(err);
            });
        })
    }
}()