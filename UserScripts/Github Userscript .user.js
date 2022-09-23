// ==UserScript==
// @name         Github Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://e926.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==
op=opener
onmessage=function(e){
    if(e.origin=="https://naquangaston.github.io/"){
        console.log('Hnadled',e.data,e)

    }else console.log('Unhandled Post',e)
}
async function getBase64(){
    return await axios.get(url, { responseType: 'arraybuffer' })
        .then((response) => {
        let image = btoa(
            new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
    });
}