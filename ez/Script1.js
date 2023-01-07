function updateTable(){
    var scrips=`{\"name\":\"New music player (Fixed)\",\"desc\":\"Music player for io flash games\",\"updated\":[13],\"created\":\"6/7/2020\",\"href\":\"https://greasyfork.org/en/scripts/404908-new-music-player-fixed\"}\n{\"name\":\".Discord profile ripper\",\"desc\":\"Allows user to see profile icons of people in dicord server much more clearly. This mod will also resend failed attachments. Only work on the web version of discord\",\"updated\":[13],\"created\":\"9/17/2020\",\"href\":\"https://greasyfork.org/en/scripts/411490-discord-profile-ripper\"}\n{\"name\":\"New cookie clicker autoplay\",\"desc\":\"A cookie clicker mod that auto clicks the cooke and auto upgrades\",\"updated\":[13],\"created\":\"5/25/2020\",\"href\":\"https://greasyfork.org/en/scripts/404079-new-cookie-clicker-autoplay\"}\n{\"name\":\"Zoom autoclose\",\"desc\":\"Autoclose the zoom page when zoom opens\",\"updated\":[13],\"created\":\"11/12/2020\",\"href\":\"https://greasyfork.org/en/scripts/416006-zoom-autoclose\"}\n{\"name\":\"2020-2021 Music player for io games & Discord profile ripper& youtube download free\",\"desc\":\"this mod is a combonation of the music player mod, discord mod, and my youtube mod all as one. my youtube mod includes theme toggle and playlist downlaoding auto downlaod certail videos etc. its all on the mod menu\",\"updated\":[13],\"created\":\"12/12/2020\",\"href\":\"https://greasyfork.org/en/scripts/418576-2020-2021-music-player-for-io-games-discord-profile-ripper-youtube-download-free\"}\n{\"name\":\"Auto quizzez AI bot 10ms delay [auto retry untill 100% awnser saver]\",\"desc\":\"this is a quizzez bot saves all questions it gets right and saves them that way the bot doesnt not have to get that same question wrong. it will auto use power ups. this mod only work on quizzes with streak enabled\",\"updated\":[13],\"created\":\"5/26/2020\",\"href\":\"https://greasyfork.org/en/scripts/404154-auto-quizzez-ai-bot-10ms-delay-auto-retry-untill-100-awnser-saver\"}\n{\"name\":\"New pizzapresser autoplay\",\"desc\":\"This mod and game is basicly the same at cookie clicker mod. auto clicks pizza auto upgrade and auto buying.\",\"updated\":[13],\"created\":\"5/25/2020\",\"href\":\"https://greasyfork.org/en/scripts/404078-new-pizzapresser-autoplay\"}`.split('\n')
var names=[];
var table=document.createElement('table')
var trs=[]
scripts.forEach(e=>{
var int=JSON.parse(e)
for(let a in int)(!names.join('').includes(a)&&(names.push(a)));
var tr=document.createElement('tr');
var a=document.createElement("a");
a.innerText=int.name;
a.href=int.href
var td=document.createElement('td');
td.append(a);
var td2=document.createElement('td');
td2.innerText=int.desc
var td3=document.createElement('td');
td3.innerText=int.created
var td4=document.createElement('td');
td4.innerText=int.updated;
([td,td2,td3,td4]).forEach(e=>tr.append(e));
trs.push(tr)
})
var tr=document.createElement('tr')
names.forEach(e=>{
    var td=document.createElement('td');td.innerText=e
    tr.append(td)
})
table.append(tr)
trs.forEach(e=>table.append(e))
return table
}
onerror = function (e) { Alert(e.message ? e.message : e, 5000, e.message ? e.constructor.name : null) };
document.onerror = onerror
onhashchange = function () {
    let block = 'block', none = 'none';
    (console.log('Hash change', location.hash), (function (a, b) {
        b == 'home' ? (id('none').style.display = block, id("items").style.display != "block" && (id('items').style.display = block)) : (id('none').style.display = none, id("items").style.display != "none" && (id("items").style.display = none))
        selectedTabid == 'home' && (this.document.getElementById('none').style.display = 'block')
        document.title = selectedTabid;
        if (!a.forEach) {
            for (let A in a) (
                (function (..._abc) {
                    try {
                        typeof _abc[1] == typeof function () { } ? null /* the selected item is a function we dont want that */
                            : (function (a, b, c) {
                                _abc[0] ? (
                                    !isvis(_abc[1]) ? null : a(_abc[1])[b](...c), console.log(_abc[1])
                                ) : !isvis(_abc[1]) ? a(_abc[1])[b](...c) : null;
                                //console(isvis(_abc[1],_abc[0]))
                            })
                                ($, 'slideToggle', [500, 'swing']);
                    } catch { }
                })
                    (a[A].id != b, a[A], 'none', 'block')
            );
        };
    })(this.document.getElementById('main').children, this.window.selectedTabid = decodeURIComponent(this.location.hash.split('#').pop()), /*selectedTabid != 'home' && (this.document.getElementById(selectedTabid).style.backgroundColor = localStorage[selectedTabid + '_backgroundColor2'],this.document.getElementById(selectedTabid).style.color = localStorage[selectedTabid + '_backgroundColor'])*/));
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
window.canalert = !0;
function id(e) {
    return document.getElementById(e);
}
function isvis(options) {
    return options.offsetParent !== null;
}
function err() { throw new Error('Test') }
function ev(str) {try { return eval(str) } catch (err) { onerror(err) }}
function setupimg() {
    var img = document.createElement('img');
    img.src = 'https://freepngimg.com/thumb/mouse_cursor_click/8-2-click-png-clipart-thumb.png';
    img.id = 'img01';
    document.body.append(img);
    img = img01;
    var b;
    window.ofx = '';
    window.ofy = ''
    var imgi = setInterval(e => {
        try {
            img.style.top = ofy;
            img.style.left = ofx;
        } catch (err) { }
    }, 10)
    function st(a, r) { var k = Object.keys(r); k.forEach(e => { a.style[e] = r[e]; }); };
    window.info = {};
    gameCanvas.onmousemove = function (e) {
        info.y = e.clientY
        info.x = e.clientX
    }
    setInterval(() => {
        try {
            window.ofx = info.x + 'px';
            window.ofy = info.y + 'px';
        } catch (err) { }
    }, 50)
    var r = { 'pointer-events:': 'none', 'transition': 'top 0.2s,left 0.2s', 'height': '50px', 'position': 'fixed', /*Sit on top of the page content */'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'background-color': 'rgba(0,0,0,0)', /* Black background with opacity*/'z-index': 5 /* Specify a stack order in case you're using a different order for other elements*/ };
    st(img01, r);
    img01.style.pointerEvents = 'none'
}
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
function bodyColor(t, l, i, p = selectedTabid) {
    var one = document.getElementById(t).value;
    var three = invertColor(one);
    var two = document.getElementById(l);
    two.style[i] = one;
    document.body.style.color = three
    document.body.style.backgroundColor = one;
    //selectedTabid != 'home' ? (document.getElementById(p).style.color = three) : (main.style.color = three);
    localStorage[`colors`] = JSON.stringify({ one, three });
    //localStorage[`${two}_${i}2`] = three;
    //localStorage[`${p}_${i}`] = one;
};
var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
function st(a, r) { var k = Object.keys(r); k.forEach(e => { a.style[e] = r[e]; }); };
onresize = (function (e) {
    let width = innerWidth;
    let something = mynav.children[0].children;
    let Colors = this.window.colors;
    var style1 = { 'border': `solid 2px ${Colors.three}` }
    var style2 = { 'border': `solid 5px ${Colors.three}` }
    if (!something.forEach) { something.forEach = [].forEach };
    if (width < 800) {
        //Using mobile size
        something.forEach(e2 => { st(e2, style1) })
    } else {
        //desktop size
        something.forEach(e2 => { st(e2, style2) })
    }
});
onclick = function (e) {
    if (e.target.tagName == 'img') (open(e.target.src, 'mywindow'));
}
function yon() { let arr = [1, 0]; return arr[Math.floor(Math.random() * arr.length)]; }
window.loaded = 0
function randomStr(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i--) {
        let rd = arr[Math.floor(Math.random() * arr.length)];
        let toadd = yon() ? (rd.toLowerCase()) : rd;
        ans += toadd
    }
    return ans;
}
!localStorage.zs && (localStorage.zs = randomStr(15, "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=_+[]{};,./<>?".split('')))
!localStorage.ids && (localStorage.ids = JSON.stringify({ a: { b: null } }))
function Login(uname, password, email) {
    if (!validateEmail(email)) { Alert("Enter a valid email"); return }
    var logins = JSON.parse(localStorage.ids)
    for (let id in logins) {
        let login = logins[id];
        if (login.uname == uname && login.password == password && login.email == email) {
            setCookie('Sessiont', uname+'\n'+password +'\n'+ email+'\n'+localStorage.icon, 5)
            user.innerText=login.uname;
            avatar.src=localStorage.icon;
            login.icon=localStorage.icon;
            //console.log(getCookie('Sessiont'))
            location.href = location.href.split(location.search).join('');
            return (login);
        }
    }
    return (null);
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
async function ConvettoData(file) {
    await new Promise((a, b) => {
        var reader = new FileReader();
        reader.onload = function (e) {
            window.res = e.target.result;
            //console.log(window.res)
            a()
        }
        reader.readAsDataURL(file)
    })
    setTimeout(()=>{delete window.res},1)
    return res;
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function signup(...stuff) {
    var email=stuff[2];

    if (!validateEmail(email)) {return };
    selectedTabid != 'Login' && (document.getElementById('Login').click());
    var logins = JSON.parse(localStorage.ids)
    if (logins.a) { delete logins.a };
    /*localStorage.ids.includes(email)&&(localStorage.msgs+="An account with that email already exist",*/
    logins[randomStr(50000, "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=_+[]{};,./<>?".split(''))] = { uname, password, email,icon:localStorage.icon };
    console.log('Login made');
    window.cu={ uname, password, email,icon:localStorage.icon };
    localStorage.ids = JSON.stringify(logins);
    localStorage.msgs += "Account created";
    location.href = location.href.split(location.search).join('');
}
!localStorage.msgs && (localStorage.msgs = '');
onload = (function (e, i = 0, id, width = 0, elem) {
    /*setupimg();*/location.hash.length && (onhashchange()); (all.style.display = 'none', ("this.location.hash.length && (this.location.href = this.location.href.split('#')[0])", this.window.colors = this.localStorage.colors ? JSON.parse(this.localStorage.colors) : { three: 'white', one: 'black' }, document.body.style.color = colors.three, document.body.style.backgroundColor = colors.one, this.document.getElementsByClassName('footer')[0].style.color = colors.three, myProgress.style.backgroundColor = colors.one, myBar.style.color = colors.one, myBar.style.backgroundColor = colors.three, myBar.style.width = '100%', /*this.setInterval(() => { var a = myBar.style.width; myBar.innerHTML = `<h3>Loading... ${a}%</h3>`},100)*/
        /*this.setTimeout(() => { myProgress.style.opacity = 0 }, 3000),
        this.setTimeout(() => { myProgress.remove(); all.style.display = 'block' }, 5000)*/
        //custom loading bar
        (myvol.onchange=function(e){e=e.target
            console.log((e.value*1)/100)
            myaudio.volume=(e.value*1)/100;v2.innerText=e.value
        }),
        (getCookie('Sessiont').length)&&(
            window. stuf=getCookie('Sessiont').split('\n'),
            user.innerText=sutf[0],
            avatar.src=stuf.pop(),delete window.stuf),
        this.window.width = this.innerWidth, this.window.something = mynav.children[0].children, this.window.style1 = { 'border': `solid 2px ${colors.three}` }, this.window.style2 = { 'border': `solid 5px ${colors.three}` }, this.window.something.forEach ? null : this.window.something.forEach = [].forEach, width < 800 ? something.forEach(e2 => { st(e2, style1) }) : something.forEach(e2 => { st(e2, style2) }), delete this.window.width, delete this.window.style1, delete this.window.style2, delete this.window.something,
        localStorage.msgs && (this.setTimeout(() => { localStorage.msgs = '' }, 1000)),
        (location.hash!="#Login") && !location.search.length && (window.g=1,i == 0 && (
            i = 1, width = 0,
            elem = document.getElementById("myBar"),
            this.window.time1 = performance.now(),
            this.setTimeout(() => { myProgress.style.opacity = 0 }, 2500),
            this.setTimeout(() => {
                myProgress.remove(), all.style.display = 'block';
                (function (a) {
                    for (let i in a) {
                        try { console.log(a[i].children[0].children[0].getBoundingClientRect()) } catch (err) { onerror(err) };
                    }
                })(items.children)
            }, 3000),
            id = setInterval(() => {
                (
                    document.getElementById("myProgress").style.maxWidth = this.innerWidth / 2,
                    document.getElementById("myProgress").style.maxHeight = "100px",
                    width >= 100 && (this.setTimeout(() => { window.canalert = !1 }, 1000), delete window.loaded, console.log(performance.now() - time1), this.clearInterval(id), i = 0),
                    !(width >= 100) && (width += 10, elem.style.width = width + '%', elem.innerHTML = `<h1>Loading... ${width + '%'}</h1>`)
                )
            }, 250)
        )
        ),
        this.setTimeout(()=>{
            (location.hash.length || location.search.length) && (
        (function (a) {
            for (let i in a) {
                try { console.log(a[i].children[0].children[0].getBoundingClientRect()) } catch (err) { onerror(err) };
            }
            window.canalert = !1;
            if (localStorage.msgs) Alert(localStorage.msgs);
            if (getCookie("Sessiont").length) { console.log('Already logged in') }
            var parms = [];
            file.onchange = async function (e) {
                console.log(file.files[0].type, 'Converting')
                var conv=await ConvettoData(file.files[0])
                console.log('done');
                localStorage.icon=conv;
            }
            location.search.length
            location.search.includes('birth') && ((function (a) {
                if (decodeURIComponent(location.search).split('?').pop().split('&').length != 4) {
                    localStorage.msgs += "Invalid login"
                    location.href = location.href.split(location.search).join('')
                    return;
                }
                window.p=1
                for (let i = 0; i < a.length; i++)(parms.push(a[i].split('=')[1]));
            })(decodeURIComponent(location.search).split("?").pop().split('&')))

        !location.search.includes('birth')&&((function(a){
            if(location.search.split('?').pop().split('&').length!=3){
                Alert('Invalid login')
            }
            for(let i=0;i<a.length;i++)(parms.push(a[i].split('=')[1]));
            })(decodeURIComponent(location.search).split("?").pop().split('&')))
            window.p?signup(...parms):Login(...parms);
        delete window.p
        })(items.children))
        },window.g?3000:(myProgress.remove(), all.style.display = 'block',100))
        ))
});