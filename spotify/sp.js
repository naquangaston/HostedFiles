// get first node js argument and set it to userid 
const { firefox } = require('playwright');


async function sleep(ms) {
    return new Promise(a => setTimeout(a, ms))
}
!async function () {
    var userid = process.argv[2]

    var url = `https://open.spotify.com/user/${userid}/playlists`

    const browser = await firefox.launch({ headless: false });

    console.log("Browser launched")

    async function createPage(url, wairForLoad) {
        var page = await browser.newPage();
        url && (await page.goto(url));
        if (wairForLoad) {
            while (true) {
                if (await page.evaluate("document.readyState") == "complete") break;
            }
            console.log("Page loaded");
        }
        return page;
    }
    var ytPage
    async function searchYT(searchText) {
        var codeString = `var convertNumberToLetter = char => char.replace(/[3]/g, 'e');var sortSongs = (songName, ...songList) => songList.map(songObj => ({ ...songObj, matchCount: songObj.songname.toLowerCase().split('').reduce((acc, char, i, arr) => char.toLowerCase() === (isNaN(char) ? songName[i] : convertNumberToLetter(songName[i])) && arr.indexOf(char, i - 1) === songName.toLowerCase().indexOf(char.toLowerCase(), acc) ? acc + 1 : acc, 0) })).sort((a, b) => b.matchCount - a.matchCount).slice(0, Math.round(songList.length / 2));var getTopSong = (name, ...list) => list.sort((a, b) => b.matchCount - a.matchCount)[0];var setElement = url => (String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/) && String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/)[8].length == 11) ? String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/)[8] : false;var [songName, views, datePosted, channelName] = contents[0].querySelectorAll("a#thumbnail")[0].parentNode.parentNode.children[1].innerText.split('\\n');var songList_ = [...contents[0].querySelectorAll("a#thumbnail")].map(e => { var [_songName, views, datePosted, channelName] = e.parentNode.parentNode.children[1].innerText.split('\\n'), id = setElement(e.href); return { songname: _songName, views, datePosted, channelName, id } }).filter(e => e.datePosted);getTopSong(search[2].value, ...songList_);`;

        if (!ytPage) {
            ytPage = await createPage("https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620");
            while (true) {
                await sleep(1);
                if (ytPage.evaluate("location.href") == "https://www.youtube.com/") break;
            }
        }

        // Navigate to Spotify search page
        await ytPage.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchText)}`);

        while (true) {
            if (await ytPage.evaluate("document.readyState") == "complete") break;
        }
        console.log("YT is ready")
        while (true) {
            if (await ytPage.evaluate("contents[0]")) break;
        }
        console.log("Contents loaded")

        var song = await ytPage.evaluate(codeString)
        await ytPage.goto("https://www.youtube.com/")
        return song;
    }

    var playlistPage = await browser.newPage();

    await playlistPage.goto(url)

    //log that page is opened
    console.log("Page opened");

    while (true) {
        await sleep(1)
        try {
            if (await playlistPage.evaluate(`!!document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > section > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a")`)) break;
        } catch { }
    }
    console.log("Playlist page loaded");
    var list = await playlistPage.evaluate(`var playLists=document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > section > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a").children,findhref2=function(e,t){var r=[];function n(e){if(e.tagName.toLowerCase()==(t||'a')){r.push(e);if(e.children.length){e=e.children;e.forEach=[].forEach;e.forEach(function(e){n(e)})}}else{if(e.children.length){e=e.children;e.forEach=[].forEach;e.forEach(function(e){n(e)})}}}n(e);return r};[...playLists].map(function(e){return{arthur:e.innerText.split('\\n')[2],name:e.innerText.split('\\n')[0],href:findhref2(e)[0].href}}).filter(e=>e.arthur.startsWith('By ')&&!e.arthur.startsWith('By Spotify'));`)
    console.log(list)
    //Search playing and get song data
    var obj = {}
    for (var i = 0; i < list.length; i++) {
        let playlist = list[i]
        console.log("Starting Playlist: " + playlist.arthur + " - " + playlist.name)
        obj[playlist.name] = { arthur: playlist.arthur, songs: [] }
        let currentPage = await createPage(playlist.href)
        var shouldSkip=false
        while (true) {
            await sleep(1)
            try {
                if (await currentPage.evaluate(`!!document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.ShMHCGsT93epRGdxJp2w.Ss6hr6HYpN4wjHJ9GHmi > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)")`)) break;
                if (await currentPage.evaluate(`document.querySelector("button.Button-sc-1dqy6lx-0:nth-child(2)")&&!document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.ShMHCGsT93epRGdxJp2w.Ss6hr6HYpN4wjHJ9GHmi > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)")`)){shouldSkip=true;break;};
            } catch { }
        }
        if (shouldSkip) {
            console.log("Skipping Playlist: " + playlist.arthur + " - " + playlist.name)
            delete obj[playlist.name];
            continue;
        }
        console.log("Playlist page loaded");
        await sleep(3000)
        await currentPage.mouse.move(440, 490);
        var songlist = [];
        var lastSonglist = null;

        do {
            let Songs = await currentPage.evaluate(`[...document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.ShMHCGsT93epRGdxJp2w.Ss6hr6HYpN4wjHJ9GHmi > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2)").children].map(e=>{var[title,artist]=e.children[0].children[1].innerText.split('\\n');return {title,artist}})`);
            songlist = [...songlist, ...Songs];

            // Use Set to remove duplicates
            songlist = Array.from(new Set(songlist.map(JSON.stringify))).map(JSON.parse);

            // Check if the songlist is the same as the last version
            if (JSON.stringify(songlist) === JSON.stringify(lastSonglist)) {
                break;
            }

            // Update lastSonglist with the current songlist
            lastSonglist = [...songlist];

            await currentPage.mouse.wheel(0, 500);
            await sleep(1000);
        } while (true);

        // show how many songs where found
        console.log("Found " + songlist.length + " songs");
        obj[playlist.name].songs = songlist;
        currentPage.close();
        await sleep(1000);
    }
    console.log("Finished Getting playlist data");
    console.log(obj) 

}()