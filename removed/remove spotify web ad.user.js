// @name remove spotify web ad
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author DannyWu
// @match https://open.spotify.com/album/1aNkIWX1Uz0mSUK3OAFygO
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
! function() {
    "use strict";
    document.querySelector(".Root__ads-container").remove()
}();