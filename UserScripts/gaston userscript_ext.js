async function fimg(e) {
    if (!!e.pools.length) {
        console.log(e)
        for (let i = 0; i < e.pools.length; i++) {
            const pool = e.pools[i]
            console.log(!pls[pool], pls[pool], pls)
            if (pls[pool]) {
                _fimg(e)
                return
            }
            pls[pool] = true;
            let pid = pool
            console.log('Geting pool')
            const response = await fet(`https://${e6.value}.net/pools/${pid}.json`);
            const j = await response.json();
            const { post_ids } = j
            console.log('Name:', j.name)
            pls[pool] = j.name;
            forEachAsync(post_ids, async function (id) {
                //let id = post_ids[i_]
                if (id == e.id) { _fimg(e) }
                else {
                    //const response_ = await fetch(`https://${e6.value}.net/posts/${id}.json`);
                    //console.log({response_})
                    var rp = (await (await fet(`https://${e6.value}.net/posts/${id}.json`)).json()).post
                    ;(!rp||!rp.file||!rp.file.url) ? console.warn('Skipped', rp.id) : (console.log('Name:', j.name, rp.id), _fimg(rp))
                }
            }, 6)
        }
        return true
    } else { _fimg(e); return true }
}
var mypics=0,uploading=true
async function _fimg(e, ip = false) {
    if (done[e.id]) return;done[e.id] = e;

    if(uploading){
        let a=e;
        await new Promise(res=>{var _=setInterval(()=>{if(mypics<2){clearInterval(_);res()}},10)})
        mypics++
        var frame=open(`${a.file.url}#id=${a.id}`,a.id.toString(),'width=5,height=5')
        fr.push(frame)
        map[a.id]=frame
        frame.onload=function(b){console.log(a.id,'Loaded')}
        return
    }

    var url = e.file.url;
    var preview = e.preview.url
    var div_ = div
    div_.className = 'inblock';
    var Pimg = document.createElement("img")
    Pimg.src = preview
    div_.appendChild(Pimg)
    Pimg.classList.add('red')
    if (e.file.ext == 'webm') {
        var source = document.createElement("source")
        source.type = `video/mp4`
        source.src = url
        var video = document.createElement("video")
        video.loop = true
        video.controls = true
        video.appendChild(source)
        div_.appendChild(video)
        video.onclick = () => open(`http://${e6.value}.net/posts/${e.id}`)
        video.classList.add('green')
        allImgs.push([Pimg, video])
    } else {
        var Rimg = document.createElement('img')
        Rimg.classList.add('green')
        Rimg.src = url;
        Rimg.onclick = () => open(`http://${e6.value}.net/posts/${e.id}`)
        div_.appendChild(Rimg)
        allImgs.push([Pimg, Rimg])
    }
    //div.appendChild(div_)
    //$(Pimg).toggle();
    allImgs.forEach(img => {
        img.forEach(eimg => {
            eimg.style.width = IMG_size.value + '%'
        })
    })
}
