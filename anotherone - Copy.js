//npm i dns & npm i http & npm i got & npm i fs & npm i url-exists & npm i path & npm i perf_hooks & npm i https
async function wait_() {
    await new Promise((ok, b) => {
        var online
        var a = online;
        var int = setInterval(async () => {
            require('dns').resolve('www.google.com', e => {
                online = !e;
                if (a != online) {
                    console.log('Connectiong change online:', online, !online ? 'awaiting for conenction' : 'online')
                }
                a = online
                a && (ok(true), clearInterval(int))
            })
        }, 1000);
    });
    return 1
}
var online_
var a_ = online_;
setInterval(async () => {
    require('dns').resolve('www.google.com', e => {
        online_ = !e;
        if (a_ != online_) {
            console.log('Connectiong change online:', online_, !online_ ? 'awaiting for conenction' : 'online')
        }
        a_ = online_
    })
}, 1000);
const http = require("http");
const got = require('got');
let fs = require("fs");
var downloadings = {};
var mycount = 0;
var urlExists = require('url-exists');
const { join } = require('path');
const { performance } = require('perf_hooks');
const { exit } = require('process');
const { POINT_CONVERSION_COMPRESSED } = require('constants');
const { constants } = require('crypto');
var dps = 10;
var saved = {};
var ss = 0;
var failed = [];
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getRemoteFile(file, url, meta) {
    if (Object.keys(downloadings).length > 10) { setTimeout(e => { getRemoteFile(file, url, meta) }, 100); return }
    console.count()
    if (downloadings[file] || saved[file]) { return }
    downloadings[file] = performance.now()
    console.log('Downloading', file)
    let localFile = fs.createWriteStream(file);
    const https = require("https")
    const request = https.get(url, function (response) {
        ss++
        var len = parseInt(response.headers['content-length'], 10);
        var cur = 0;
        var total = len / 1048576; //1048576 - bytes in 1 Megabyte

        response.on('data', function (chunk) {
            cur += chunk.length;
            //showProgress(file, cur, len, total);
        });

        response.on('end', function () {
            console.log('Downloaded', file, 'in', millisToMinutesAndSeconds(performance.now() - downloadings[file]));
            ss--;
            mycount++;
            delete downloadings[file]
            var txt = [];
            //console.log("Download complete",file);
            //console.clear()
            Object.keys(downloadings).forEach(e => {
                txt.push(downloadings[e]);
            })
            //console.log(Object.keys(downloadings).length<20?txt.sort().join('\n'):`${Object.keys(downloadings).length} Files left`)
            //console.log(Math.floor((total / mycount) * 100), 'Complete Downloading', Object.keys(downloadings).length, 'files');
            if (!Object.keys(downloadings).length) {
                console.log("done")
                //process.exit(1)
            }
            saved[file] = 1;
        });

        response.pipe(localFile);
    });
}

function showProgress(file, cur, len, total) {
    //console.clear();
    console.log(file + " - " + (100.0 * cur / len).toFixed(2)
        + "% (" + (cur / 1048576).toFixed(2) + " MB) of total size: "
        + total.toFixed(2) + " MB");
    return;
    downloadings[file] = file + " - " + (100.0 * cur / len).toFixed(2)
        + "% (" + (cur / 1048576).toFixed(2) + " MB) of total size: "
        + total.toFixed(2) + " MB";
    var txt = [];
    console.clear()
    Object.keys(downloadings).forEach(e => {
        txt.push(downloadings[e]);
    })
    console.log(Object.keys(downloadings).length < 20 ? txt.sort().join('\n') : `${Object.keys(downloadings).length} Files left ${ss}`)

    /* console.log("Downloading " + file + " - " + (100.0 * cur / len).toFixed(2)
         + "% (" + (cur / 1048576).toFixed(2) + " MB) of total size: "
         + total.toFixed(2) + " MB");*/
}
var used = {};
var download = function (obj, meta, id, other) {
    //if(other=='e'){return}
    if (used[id]) { return }
    else used[id] = 1
    let a = obj;
    var fn = a.id + ' ' + meta.join(' ') + '.' + a.file.ext;
    // URL of the image
    const url = a.file.url;
    //console.log(url, fn)
    var ext = a.file.ext == 'webm' ? a.file.ext : a.file.ext == 'swf' ? a.file.ext : 'photo_gif';
    ext = other ? other : ext;
    var path2 = `C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6\\${ext}\\`
    const path = `C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6\\${ext}\\${fn}`;
    if (!fs.existsSync('C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6')) { fs.mkdirSync('C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6') }
    if (fs.existsSync(path2)) {
        if (fs.existsSync(path)) { console.log('Already have this file'); return }
        //console.log('Directory exists!');
    } else {
        fs.mkdirSync(path2)
        console.log('Created dir:', path2)
    }
    try { dlf(path, url, meta) } catch (err) {
        console.log('Falled to download', fn);
    }
};
function Dp(e) {
    var max = e.length - 1;
    for (let index = 0; index < e.length; index++) {
        (async (stuff) => {
            const a = stuff;
            const https = require('https');
            var fn = a.id + '.' + a.file.ext;
            // URL of the image
            const url = a.file.url;
            //console.log(url, fn)
            var path2 = `D:/tester/${meta.join(' ') + a.file.ext}`
            const path = `D:/tester/${meta.join(' ') + a.file.ext}/${fn}`;
            try {
                await fs.promises.access(path2);
                // The check succeeded
            } catch (error) {
                //console.log('Making Dir', path2)
                fs.mkdir(path2, (e) => { })
            }
            https.get(url, async (res) => {
                // Image will be stored at this path
                const filePath = fs.createWriteStream(path);
                console.log('got', fn)
                res.pipe(filePath);
                filePath.on('finish', () => {
                    filePath.close();
                    console.log('Added', fn);
                })
            })
        })(e[index])

    }
}
async function get(meta = [], cb) {
    console.log('Searching for', ...meta)
    if (typeof meta != typeof []) {
        throw `List requried for tags but got ${typeof meta} instead\nLeave blank for no filters`
    }
    if (!meta.length) { meta = [''] };
    var post = [], done = 0;
    var pageindex = 0, max = 0;
    await new Promise((a, b) => {
        function test(ind = pageindex, op) {
            let don
            var page = 'https://e621.net/post?tags=' + meta.join('+') + '&page=' + pageindex;
            if (op) { page = op; }
            var np = 'https://e621.net/post?tags=' + meta.join('+') + '&page=' + ind++;
            urlExists(np, function (err, exists) {
                //if(!done){test(ind,page);}
                //console.log('Got page',ind)
            });
            got(page, { json: true }).then(response => {
                test();
                pageindex++;
                var found = 0, founded = false;
                var array = response.body["posts"];
                if (!array[0]) {
                    a();
                    done = 1;
                    return;
                }
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    var tags = element.tags;
                    Object.keys(tags).forEach(e => {
                        if (tags[e].length) {
                            tags[e].forEach(c => {
                                meta.forEach(d => {
                                    if (d == c || c.includes(d)) {
                                        founded = 1;
                                    }
                                })
                            })
                        }
                    });
                    if (founded) {
                        post.push(element);
                        found++;
                    }
                }
                if (cb && typeof cb == typeof test) { cb(post, meta) }; console.log('Page', pageindex, 'Done', array.length);
            }).catch(error => {
                don = 1
                console.log('Done')
                b();
            });
            //console.log('Page', pageindex)
        }
        test();
    })
    return post;
}
const getDir = function (_path = '', root, constaint = '') {
    var dirs = [];
    if (fs.existsSync(root)) {
        console.log('Locating', _path, 'in', root)
        var fin = 0;
        var att = 0;
        function ag(..._) {
            //if(fin){return}
            const files = fs.readdirSync(_[1])
            if (_[2] == _[0] && _[1].includes(constaint)) { console.log('Found it'); dirs.push(_[1]); fin = _[1]; return }
            if (dirs.length) { return }
            console.log('Trying', _[1])
            if (files.length > 0) {
                files.forEach(function (filename) {
                    try {
                        if (fs.statSync(_[1] + "/" + filename).isDirectory()) {
                            //if(filename==_[0]){fin=root + "/" + filename}
                            att++;
                            !dirs.length ? ag(_[0], _[1] + "/" + filename, filename) : null;
                        } else {
                            //fs.unlinkSync(path + "/" + filename)
                        }
                    } catch (err) {
                        //no permission to use folder/file
                    }
                })
                //fs.rmdirSync(path)
            } else {
                //fs.rmdirSync(path)
            }
        }
        ag(_path, root);
        if (dirs.length) { return dirs[0] };
    } else {
        console.log("Directory path not found.")
    }
}
const getAudio = function (root) {
    var got_ = {};
    var filesL = [];
    if (fs.existsSync(root)) {
        //console.log('Locating', _path, 'in', root)
        var fin = 0;
        var att = 0;
        function ag(dir) {
            const files = fs.readdirSync(dir)
            //if (_[1] == _[2]) {filesL.push(_[0]); fin = _[0]; return; }
            //console.log('Trying', _[0])
            if (files.length > 0) {
                files.forEach(function (filename) {
                    if (fs.statSync(dir + "/" + filename).isDirectory()) {
                        //if(filename==_[0]){fin=root + "/" + filename}
                        att++;
                        ag(dir + "/" + filename)
                    } else {
                        var p_ = dir + "/" + filename;
                        if (filename.split('.').pop().match(/(mp3|wav)/g) && !got_[p_.split(/\([0-9]+\)/g).join('')]) {
                            got_[p_.split(/\([0-9]+\)/g).join('')] = p_;
                            filesL.push([p_, filename.split(/\([0-9]+\)/g).join('')])
                            console.log('added', filename.split(/\([0-9]+\)/g).join(''))
                        } //else console.log([p_, filename.split('.').pop().match(/(mp3|wav)/g)])
                        //fs.unlinkSync(path + "/" + filename)
                    }
                })
                //fs.rmdirSync(path)
            } else {
                //fs.rmdirSync(path)
            }
        }
        ag(root);
        if (filesL.length) { return filesL };
    } else {
        console.log("Directory path not found.")
    }
}
function dlf(url, path) {
    const http = require('http'); // or 'https' for https:// URLs
    const fs = require('fs');
    const file = fs.createWriteStream(path);
    var t = performance.now()
    const request = http.get(url, function (response) {
        response.pipe(file);
        console.log('Downlaoded', url, 'in', millisToMinutesAndSeconds(performance.now() - t), 'minutes')
    });

}
const removeDir = function (path) {
    if (fs.existsSync(path)) {
        const files = fs.readdirSync(path)

        if (files.length > 0) {
            files.forEach(function (filename) {
                if (fs.statSync(path + "/" + filename).isDirectory()) {
                    removeDir(path + "/" + filename)
                } else {
                    fs.unlinkSync(path + "/" + filename)
                }
            })
            fs.rmdirSync(path)
        } else {
            fs.rmdirSync(path)
        }
    } else {
        console.log("Directory path not found.")
    }
}
var total = 0;
var ptr = ['C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6\\photo_gif', 'C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6\\webm', 'C:\\Users\\Naqua\\OneDrive\\Desktop\\eee\\e6\\swf'];
//ptr.forEach(removeDir);
function sleep(ms) {
    return new Promise((a, b) => {
        setTimeout(a, ms)
    })
}
var tfiles = [];
var dns = async (e, meta) => {
    if (e && e.forEach) {
        //console.log('Got post')
        //console.log('Downloading img(s)')
        total = e.length;
        //console.log(total,e[0])
        for (let index = 0; index < e.length; index++) {
            const element = e[index];
            download(element, meta, element.id, element.rating)
        }
    } else { console.log('No results') }
};
(async () => {
    var proargs=[]
    process.argv.forEach((...e)=>{
        if(!(e[1]<2)){
            proargs.push(e[0])
        }
    })
    proargs=proargs.map(eval);
    this.del=proargs[0];this.start=proargs[1]
    var vrchat = getDir('VRChat', 'C://Users/Naqua/Desktop', 'common')//.filter(_=>_.includes("steamapps\common\VRChat"))[0];
    console.log('Found Dir')
    console.log(vrchat)
    fs.existsSync(vrchat + '/Mods') ? null : fs.mkdirSync(vrchat + '/Mods');
    var https = require("https");
    var mods = vrchat + '/Mods'
    var urls = [
        "https://dl.emmvrc.com/downloads/emmVRCLoader.dll",
        "https://api.vrcmg.com/v0/mods/264/MuteTTS.dll",
        "https://api.vrcmg.com/v0/mods/246/ReModCE.Loader.dll",
        "https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll",
        "https://api.vrcmg.com/v0/mods/89/AdvancedSafety.dll",
        "https://api.vrcmg.com/v0/mods/255/RPCSanity.dll",
        "https://api.vrcmg.com/v0/mods/214/ml_clv.dll",
        "https://api.vrcmg.com/v0/mods/157/ViewPointTweaker.dll",
        "https://api.vrcmg.com/v0/mods/82/CameraMinus.dll",
        "https://api.vrcmg.com/v0/mods/52/JoinNotifier.dll",
        "https://api.vrcmg.com/v0/mods/252/RealFly.dll",
        "https://api.vrcmg.com/v0/mods/183/ImmersiveTouch.dll",
        "https://api.vrcmg.com/v0/mods/249/UpdateChecker.dll",
    ]
    for (let index in urls) {
        let url = urls[index]
        let file = urls[index].split('/').pop();
        this[file] = performance.now();
        await new Promise((..._) => {
            https.get(url, (res) => {
                // Image will be stored at this path
                const path = mods + '/' + file;
                const filePath = fs.createWriteStream(path);
                res.pipe(filePath);
                filePath.on('finish', () => {
                    filePath.close();
                    _[0](file);
                    console.log('Download Completed', file, 'in', millisToMinutesAndSeconds(performance.now() - this[file]));
                    delete this[file]
                });
            });
        });
    };
    process.exit();
    //removeDir(desktop)
    //await wait_()
    //download2(td, desktop)
    //process.exit(1)
})();
//get(['protogen']).then(dns)
process.on('uncaughtException', function (err) {
    console.log('Error', err);
})
process.on('unhandledRejection', err => {
    console.log('error', err)
})