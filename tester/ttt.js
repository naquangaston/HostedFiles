const { Octokit, App } = require("octokit");
var octokit, login;
async function getFs(path) { const fs = require('fs').promises; return await fs.readFile(path, { encoding: 'base64' }) }
async function wait_() {
    await new Promise((ok, b) => {
        var online
        var a = online;
        var int = setInterval(async () => {
            require('dns').resolve('www.google.com', e => {
                online = !e;
                if (a != online) {
                    console.log('Connectiong change online:', online, !online ? 'awaiting for conenction' : 'online')
                };
                a = online
                a && (ok(true), clearInterval(int));
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
    });
}, 1000);
let pls = {}
const { execSync } = require('child_process');
// stderr is sent to stderr of parent process
// you can set options.stdio if you want it to go elsewhere
const http = require("http");
const got = require('got');
let fs = require("fs");
var downloadings = {};
var downloadings2 = {};
var mycount = 0;
var urlExists = require('url-exists');
const { join } = require('path');
const { performance } = require('perf_hooks');
const { exit } = require('process');
const { Console } = require('console');
//const { js_beautify } = require('e:/html2/nodet');
var dps = 10;
var saved = {};
var ss = 0;
var failed = [];
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
var txt = [];
var fl = {}
var downlaoding = 0
async function getRemoteFile(file, url, meta, _ext, _fn) {
    if (Object.keys(downloadings).length > 10) { setTimeout(e => { getRemoteFile(file, url, meta) }, 100); return }
    //console.count()
    if (downloadings[file] || saved[file]) { return }
    downloadings[file] = performance.now();
    downlaoding++;
    console.log('Downloading', file)
    let localFile = fs.createWriteStream(file);
    const https = require("https")
    await new Promise((a) => {
        https.get(url, (resp) => {
            let data = '';
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', async () => {
                console.log('Downloaded', file, 'in', millisToMinutesAndSeconds(performance.now() - downloadings[file]), downlaoding, "Files left");
                delete downloadings[file];
                saved[file] = 1;
                //var content = await getFs(file)
                //upload(content, _ext, _fn,file)
                a()
                downlaoding--
            });
            resp.pipe(localFile)

        }).on("error", (err) => {
            downlaoding--
            console.log("Error: " + err.message); a(err);
            delete downloadings[file]
        });
    })
    return true;
}

function showProgress(file, cur, len, total, c) {
    console.clear();
    var txt =
        Object.keys(downloadings2).map(key => {
            var file2 = downloadings2[key];
            return file + " - " + (100.0 * cur / len).toFixed(2)
                + "% (" + (cur / 1048576).toFixed(2) + " MB) of total size: "
                + total.toFixed(2) + " MB";
        })
    //downloadings[file]=c;
    console.log(txt.join('\n'))

    /* console.log("Downloading " + file + " - " + (100.0 * cur / len).toFixed(2)
         + "% (" + (cur / 1048576).toFixed(2) + " MB) of total size: "
         + total.toFixed(2) + " MB");*/
}
var used = {};
var moobj = []
var path = `D:/e6/obj.json`;
var exist = fs.existsSync(path);
if (!exist) { fs.writeFileSync(path, '[]'); }

var download = async function (obj, meta, id, other) {
    //if(other=='e'){return} 
    if (used[id]) { return }
    else used[id] = 1
    let a = obj;
    var fn = `${a.id} ${meta.join(" ")}.${a.file.ext}`;
    // URL of the image
    const url = a.file.url;
    //console.log(url, fn)
    var ext = a.file.ext == 'webm' ? a.file.ext : a.file.ext == 'swf' ? a.file.ext : 'photo_gif';

    var path2 = `D:/e6/${ext}/`
    const path = `D:/e6/${ext}/${fn}`;
    let _id = Number(fn.split(' ')[0])
    if (moobj.filter(item => { return item.id == _id }).length) { return 0; console.log('Already have', _id) }
    if (!fs.existsSync('D:/e6')) { fs.mkdirSync('D:/e6') }
    if (fs.existsSync(path2)) {
        if (fs.existsSync(path)) { return }
        //console.log('Directory exists!');
    } else {
        fs.mkdirSync(path2)
        console.log('Created dir:', path2)
    }
    if (fs.existsSync(`D:/e6/gif/`)) {
        if (fs.existsSync(`D:/e6/gif/${fn}`)) { return }
        //console.log('Directory exists!');
    } else {
        fs.mkdirSync(`D:/e6/gif/`)
        console.log('Created dir:', `D:/e6/gif/`)
    }
    await getRemoteFile(path, url, meta, ext||'photo_gif', fn)
    ext == 'gif' && (console.log('gif copyied'), await getRemoteFile(`D:/e6/gif/${fn}`, url, meta))
    moobj.push({ id: a.id, name: path })
    fs.writeFileSync(`D:/e6/obj.json`, JSON.stringify(moobj));
    return true;
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
var maxPage = 10
async function get(meta = [], cb = dns) {
    var timout
    console.log('Searching for', ...meta)
    if (typeof meta != typeof []) {
        throw `List requried for tags but got ${typeof meta} instead\nLeave blank for no filters`
    }
    if (!meta.length) { meta = [''] };
    var post = [], done = 0;
    var pageindex = 0, max = 0;
    await new Promise((a, b) => {
        async function test(ind = pageindex, op) {
            timout = setTimeout(() => {
                console.warn('Page', pageindex, 'of', meta, 'timedout'); a();
            }, 60000);
            let don
            var page = 'https://e621.net/posts.json?limit=75&tags=' + meta.join('+') + '&page=' + pageindex;
            if (op) { page = op; }
            var np = 'https://e621.net/posts.json?limit=75&tags=' + meta.join('+') + '&page=' + ind++;
            try {
                await got(page).then(async response => {
                    clearTimeout(timout)
                    pageindex++;
                    //await done_()
                    var found = 0, founded = false;
                    var array = JSON.parse(response.body).posts;
                    if (!array[0] || pageindex >= maxPage) {
                        a();
                        done = 1;
                        return;
                    }
                    test();
                    post = array;
                    /*
                    for (let i = 0; i < post.length; i++) {
                        let p = post[i]
                        if (!!p.pools.length) {
                            for (let ii = 0; ii < p.pools.length; ii++) {
                                //console.log(p.pools[ii],p)
                                let pid=p.pools[ii]
                                !pls[pid]&&(pls[pid]=true);
                                const response = await got(`https://e621.net/pools/${pid}.json?limit=1000`);
                                //console.log(response)
                                const j = JSON.parse(response.body)
                                const { post_ids } = j
                                console.log('Name:', j.name)
                                pls[pid] = j.name;
                                for(let iii=0;iii<post_ids.length;iii++){
                                    let _id=post_ids[iii];
                                    const _response = await got(`https://e621.net/posts/${_id}.json`);
                                    const _j = JSON.parse(_response.body)
                                    //console.log(j.name,'Got',_j.id)
                                    post.push(_j)
                                }
                            }
                        }else console.log('No pools')
                    }*/
                    if (cb && typeof cb == typeof test) { cb(post, meta) }; console.log('Page', pageindex, 'Done', array.length);
                })
            } catch (error) {
                don = 1
                console.log('Done')
                console.log(error)
                b();
            }
            //console.log('Page', pageindex)
        }
        test();
    })
    post.map(e => { e.meta = meta; return e });
    return post
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
var ptr = ['D:\\e6\\photo_gif', 'D:\\e6\\webm', 'D:\\e6\\swf'];
function sleep(ms) {
    return new Promise((a, b) => {
        setTimeout(a, ms)
    })
}
const up_m = function (path, or) {
    if (fs.existsSync(path)) {
        const files = fs.readdirSync(path)

        if (files.length > 0) {
            files.forEach(function (filename) {
                if (fs.statSync(path + "/" + filename).isDirectory()) {
                    up_m(path + "/" + filename, or)
                } else {
                    let id = Number(filename.split(' ')[0])
                    if (filename.includes('big_butt') && filename.includes('video_games')) {
                        (fs.unlinkSync(path + "/" + filename)); console.log('Deleted ID:', id)
                        return;
                    }
                    if (filename.split('.').pop() == 'gif' && !or) {
                        //console.log(filename.split('.').pop(),id,true)
                        if (fs.existsSync(`D:/e6/gif/`)) {
                            if (fs.existsSync(`D:/e6/gif/${filename}`)) { return }
                            else { console.log('Copied', id, 'gif'); fs.writeFileSync(`D:/e6/gif/${filename}`, fs.readFileSync(path + "/" + filename)) }
                            //console.log('Directory exists!');
                        } else if (!or) {
                            fs.mkdirSync(`D:/e6/gif/`)
                            console.log('Created dir:', `D:/e6/gif/`)
                        }
                    } else if (path == 'D:/e6/gif' && filename.split('.').pop() != 'gif') { console.warn('Removed', id, 'Not gif', filename.split('.')); fs.unlinkSync(path + '/' + filename) }
                    else {
                        //console.log(filename.split('.').pop(),id,false)
                    }
                    moobj.filter(item => { return item.id == id }).forEach(file => { console.log('Deleting Dupe of pose', file.id); fs.existsSync(file.name) && (fs.unlinkSync(file.name)) })
                    moobj.push({ path, filename, id, name: path + "/" + filename })
                }
            })
            //fs.rmdirSync(path)
        } else {
            //fs.rmdirSync(path)
        }
    } else {
        console.log("Directory path not found.")
    }
}
const up_mGit = function (path, or) {
    if (fs.existsSync(path)) {
        const files = fs.readdirSync(path)

        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let filename = files[i]
                if (fs.statSync(path + "/" + filename).isDirectory()) {
                    up_mGit(path + "/" + filename, or)
                } else {
                    let id = Number(filename.split(' ')[0])
                    if (filename.includes('big_butt') && filename.includes('video_games')) {
                        (fs.unlinkSync(path + "/" + filename)); console.log('Deleted ID:', id)
                        return;
                    }
                    if (filename.split('.').pop() == 'gif' && !or) {
                        //console.log(filename.split('.').pop(),id,true)
                        if (fs.existsSync(`D:/e6/gif/`)) {
                            if (fs.existsSync(`D:/e6/gif/${filename}`)) { return }
                            else { console.log('Copied', id, 'gif'); fs.writeFileSync(`D:/e6/gif/${filename}`, fs.readFileSync(path + "/" + filename)) }
                            //console.log('Directory exists!');
                        } else if (!or) {
                            fs.mkdirSync(`D:/e6/gif/`)
                            console.log('Created dir:', `D:/e6/gif/`)
                        }
                    } else if (path == 'D:/e6/gif' && filename.split('.').pop() != 'gif') { console.warn('Removed', id, 'Not gif', filename.split('.')); fs.unlinkSync(path + '/' + filename) }
                    else {
                        //console.log(filename.split('.').pop(),id,false)
                    }
                    moobj.filter(item => { return item.id == id }).forEach(file => { console.log('Deleting Dupe of pose', file.id); fs.existsSync(file.name) && (fs.unlinkSync(file.name)) })
                    moobj.push({ path, filename, id, name: (path + "/" + filename) })
                }
            }
            //fs.rmdirSync(path)
        } else {
            //fs.rmdirSync(path)
        }
    } else {
        console.log("Directory path not found.")
    }
}
ptr.forEach(p => up_m(p, 0))
up_m("D:/e6/gif", 1)
console.log(moobj.length, 'Saved')
ptr.forEach(removeDir)
process.exit()
return
var tfiles = [];
var dns = async (e, meta) => {
    if (e && e.forEach) {
        //console.log('Got post')
        //console.log('Downloading img(s)')
        total = e.length;
        //console.log(total,e[0])
        for (let index = 0; index < e.length; index++) {
            const element = e[index];
            await download(element, meta, element.id, element.rating)
        }
    } else { console.log('No results') }
};
async function done_() {
    console.log('Waiting for Current downloads to finish', Object.keys(downloadings).length, 'Filse left')
    await new Promise((..._) => {
        var f = 0;
        const __ = setInterval(() => {
            if (Object.keys(downloadings).length != f) {
                console.log(Object.keys(downloadings).length, 'Filse left')
            }
            f = Object.keys(downloadings).length;
            if (Object.keys(downloadings).length < 2) { _[0](); clearInterval(__) }
        }, 1);
    })
    console.log('NO files left')
    return true;
}
async function deleteF({ owner, repo, path, message = "no msg", sha }) {
    await octokit.repos.deleteFile({
        owner,
        repo,
        path,
        message,
        sha
    });
}
async function getContentSha({ owner, repo, path }) {
    console.log({ owner, repo, path })
    var { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path
    }); return sha
}
async function upLoadFile(repo, content, filename, path, b64 = false,) {
    var sha
    try { sha = await getContentSha({ owner, repo, path: `${path ? path + '/' : ""}${filename}` }) } catch (e) { }
    const fileOutput = b64 ? content : Base64.encode(content);
    var _d = {
        owner,
        repo,
        path: `${path ? path + '/' : ""}${filename}`,
        message: `feat: Added ${filename} programatically`,
        content: fileOutput,
        committer: {
            name: `Gaston`,
            email: 'naquangaston@gmail.com',
        },
        author: {
            name: 'Gaston',
            email: 'naquangaston@gmail.com',
        },
    };
    sha ? _d.sha = sha : null;
    const { data } = await octokit.rest.repos.createOrUpdateFileContents(_d);
    console.log(sha ? 'updated' : "created", filename, 'Path:', path ? path + '/' : "")
    return data
}
async function uoLoadFromUrl({ url, path, outname, log }) {
    if (!url) throw new Error("\"url\" was not suplied");
    const u = new URL(url);
    var [l, w, e, i] = log ? ['log', 'warn', 'error', 'info'].map(e => {
        return log[e] || console[e]
    }) : [1, 2, 3].map(e => function () {/*no loggin*/ });
    l('requesting', u.pathname, '@', u.host)
    async function selfDownload() {

    }
    async function monkeyDownload() {
        //tampermonkey is better for cross domain request
    }
    //window.unsafewindow?(w('!',"")):(w(...(location.host!=u.host?["!",'tampermonkey not found. not using tampermonkey with the installed script will result in some domains blocking this request']:['!','tampermonkey not found']))
    //url tampermonkey stuff
}
async function upload(base64,path,name){
    return await upLoadFile('e6',base64,name,path,true)
}
var maxTs = 5, msend = 0
    ; (async () => {
        var toe = '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'

        octokit = new Octokit({
            auth: toe
        });

        // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
        var dat = (await octokit.rest.users.getAuthenticated()).data
        login=dat.login
        owner='naquangaston'
        console.log("Hello, %s", login);
        maxPage = 21
        for (let i = 0; i < moobj.length; i++) {
            //await new Promise()
        }
        console.log(moobj[0]);
        var list = []
        await wait_();
        await done_()
        await get(['inflation', 'egg'], dns)
        await get(['belly', 'egg'], dns)
        await get(['expansion', 'facesitting'], dns)
        await get(['inflation', 'facesitting'], dns)
        await get(['expansion', 'rimming'], dns)
        await get(['inflation', 'rimming'], dns)
        await get(['oral', 'expansion'], dns)
        await get(['anal', 'expansion'], dns)
        await get(['inflation', 'muzzle_(object)'], dns)
        await get(['inflation', 'canid', 'harness'], dns)
        await get(['bound', 'inflation', 'bondage'], dns)
        await get(['inflation', 'force_feeding'], dns)
        await get(['cum_inflation', 'animated', '3d_(artwork)'], dns)
        await get(['object_in_ass', 'inflation'], dns)
        await get(['inflation', 'forced'], dns)
        await get(['water_inflation'], dns)
        await get(['video_games', 'inflation'], dns)
        await get(['video_games', 'expansion'], dns)
        await get(['anal', 'expansion '], dns)
        await get(['cum_inflation', 'bdsm', '-etness', '-flash'], dns)
        list = [
            ...await get(['inflation', 'protogen']),
            ...await get(['inflation', 'blender_(software)', '-webm']),
            ...await get(['inflation', 'rubber_suit']),
            ...await get(['inflation', 'avali']),
            ...await get(['inflation', 'belly_inflation']),
            ...await get(['inflation', 'belly_expansion']),
            ...await get(['inflation', 'big_belly']),
            ...await get(['belly_expansion', 'big_belly']),
            ...await get(['butt_expansion', '-flash']),
            ...await get(['butt_inflation']),
            ...await get(['inflation', 'anal', '-flash']),
            ...await get(['inflation', 'beastars']),
            ...await get(['big_belly', 'hose']),
            ...await get(['inflation', 'water']),
            ...await get(['inflation', 'submissive']),
            ...await get(['inflation', 'renamon']),
            ...await get(['inflation', 'petplay']),
            ...await get(['inflation', 'hose']),
            //await get(['inflation', 'pony'], dns),
            ...await get(['inflation', 'bunny']),
            ...await get(['wickerbeast']),
            ...await get(['hobkin']),
            ...await get(['avali', 'inflation']),
            ...await get(['inflation', 'improvised_sex_toy', '-humman']),
            ...await get(['inflation', 'carrot']),
            ...await get(['inflation', 'muzz']),
            ...await get(['inflation', 'rubber']),
            ...await get(['inflation', 'buttplug', '-humman']),
            ...await get(['inflation', 'dreamertooth']),
            ...await get(['air_inflation']),
            ...await get(['inflation', 'water']),
            ...await get(['inflation', 'pokemon']),
            ...await get(['inflation', 'hyper_belly']),
            ...await get(['inflation', 'okuri']),
            ...await get(['inflation', 'ishiru']),
            ...await get(['inflation', 'bent_over']),
            ...await get(['inflation', 'dragon']),
            ...await get(['inflation', '-human', '-blueblaze95', '-oatmealpecheneg', 'renamon']),
            ...await get(['inflation', 'renamon', 'webm'])
        ]
        await get(['inflation', 'penetration'], dns)
        maxPage = 20
        await get(['inflation'], dns)
        console.log("done")
        process.exit()
        return !![0][1];
        var idf = {}
        var dups = 0
        var idfound = (e) => !idf[e.id] ? (idf[e.id] = true) : (dups++, !!0);
        var mysort = (a, b) => a.file.size - b.file.size;
        list = (list.sort(mysort).filter(idfound)).reverse()
        var element = {}
        for (let i = 0; i < list.length; i++) {
            if (downlaoding == 10) {
                await new Promise((a) => {
                    var loop = setInterval(() => {
                        if (downlaoding < 5) { clearInterval(loop); a() }
                    })
                })
            }
            element = list[i]
            var meta = list[i].meta
            try { download(element, meta, element.id, element.rating) } catch (err) { }
        }
        //await get(['inflation', 'webm',"-mario"],dns),
        console.log("done")

    })();
//get(['protogen']).then(dns)
process.on('uncaughtException', function (err) {
    if (err.code != 'ECONNREFUSED') throw err;
})
process.on('unhandledRejection', err => {
    console.log('error', err)
})