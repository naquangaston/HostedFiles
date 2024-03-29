const { chromium } = require('playwright');

// get command line argsuments

const args = process.argv.slice(2);
// set song tittle to first argument and  artist to last argument

const songTitle = args[0];
const songArtist = args[1];

console.log(
  `Song Title: ${songTitle}\nArtist: ${songArtist}`
);

; (async () => {

  // Example usage
  //const songName = "Hello3";
  //const songList = ["Halle3lujah", "How3", "Hello5", "H3artb3at", "Hi5", "Heyho"];

  //const _sortedSongs = getTopSong(songName, ...songList);

  `function getTracks() {
    var trackList = [...document.querySelector("#searchPage").children[0].children[0].children[0].children[0].children[1].children[1].children]
    var tracks = trackList.map(track => {
      var title = track.children[0].children[1].children[1].children[0].innerText
      var url = track.children[0].children[1].children[1].children[0].href
      var artist = track.children[0].children[1].children[1].children[1].innerText
      return { artist, url, title }
    })
  }

  function GetCurrentSong() {
    var [title, artitst] = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA").children[0].children[0].children[0].children[0].innerText.split('\n')
    return { title, artist }
  }`
  const browser = await chromium.launch({ headless: true });
  console.log("Browser launched")
  const page = await browser.newPage();

  // Navigate to Spotify search page
  await page.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(args.join(' '))}`);
  //await page.waitForEvent("load")
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  var codeString = `
var convertNumberToLetter = char => char.replace(/[3]/g, 'e');
var sortSongs = (songName, ...songList) => songList.map(songObj => ({ ...songObj, matchCount: songObj.songname.toLowerCase().split('').reduce((acc, char, i, arr) => char.toLowerCase() === (isNaN(char) ? songName[i] : convertNumberToLetter(songName[i])) && arr.indexOf(char, i - 1) === songName.toLowerCase().indexOf(char.toLowerCase(), acc) ? acc + 1 : acc, 0) })).sort((a, b) => b.matchCount - a.matchCount).slice(0, Math.round(songList.length / 2));
var getTopSong = (name, ...list) => list.sort((a, b) => b.matchCount - a.matchCount)[0];
var setElement = url => (String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/) && String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/)[8].length == 11) ? String(url).match(/^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?)|(shorts\\/))\\??v?=?([^#\\&\\?]*).*/)[8] : false;
var [songName, views, datePosted, channelName] = contents[0].querySelectorAll("a#thumbnail")[0].parentNode.parentNode.children[1].innerText.split('\\n');
var songList_ = [...contents[0].querySelectorAll("a#thumbnail")].map(e => { var [_songName, views, datePosted, channelName] = e.parentNode.parentNode.children[1].innerText.split('\\n'), id = setElement(e.href); return { songname: _songName, views, datePosted, channelName, id } }).filter(e => e.datePosted);
getTopSong(search[2].value, ...songList_);
`;

  while (true) {
    if (await page.evaluate("document.readyState") == "complete") break;
  }
  console.log("Page is ready")
  while (true) {
    if (await page.evaluate("contents[0]")) break;
  }
  console.log("Contents loaded")
  
  var song = await page.evaluate(codeString)
  console.log(song)

  await page.close();

  //exit process
  await browser.close();

})();
