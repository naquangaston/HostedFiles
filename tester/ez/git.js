import ReactMarkdown from 'https://esm.sh/react-markdown@7?bundle'
import {
  Octokit
} from "https://cdn.skypack.dev/octokit"
console.log(`React.js@${React.version}`)
console.log(_download)

  ! function() {
    const asyncFunction = async function() {}.constructor;

    function r(a) {
      return Math.floor(Math.random() * a.length);
    }

    function makeid(length) {
      length++
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }

    function Array2(array, methods = {}) {
      return Object.assign(new Array(...array), methods)
    }



    function d_(str) {
      var arr = [...str.match(/\{[^\}]+\}/gi)].map(e => {
        var info = {
          r: true
        }
        var string1 = e.split('').splice(1, e.length - 2).join('')
        var string2 = string1.split('')
        if (!string1[0].match(/[\w\d]/gi)) {
          info.r = false
          var j = string2.splice(0, 1)[0]
          return [e, [...string2.join('').split(','), 0, j, j]]
        } else {
          return [e, Array2([string1, 1, ''], {
            map2: function(f = function() {}) {
              var a = [];
              for (let i = 0; i < this.length; i++) {
                a.push(f(this[i], i, this.length))
              }
              return a
            }
          })]
        }
      })
      var arrIndex = 0;
      var part = '',
        newStr = [],
        pindex = 0
      for (let i = 0; i < str.length; i++) {
        const char = arr[arrIndex][0][pindex]
        const length = arr[arrIndex][0].length
        const match = part.length == length
        if (char == str[i]) {
          pindex++
          part += char
          if (match) {
            newStr.push(arr[arrIndex][1]);
            part = ''
          }
        } else {
          newStr.push(part.replace('{?', ""))
          part = '';
        }
      }
      var myReg = new RegExp(`${arr.map(e => { return e[0].split('?').join('\\?') }).join('|')}`, 'gi')
      var parts = str.split(myReg)
      var index = 0
      var newArr = []
      parts.forEach((e) => {
        if (e.length) {
          try {
            newArr.push(e)
            arr[0] && (newArr.push(arr[0][1]), arr.splice(0, 1))
          } catch (err) {
            console.log(str, err, index)
          }
        } else {
          if (arr[0]) {
            newArr.push(arr[0][1])
            arr.splice(0, 1)
          }
        }
      })
      newArr = newArr.filter(e => typeof e != 'number')
      return newArr
    }

    function makeid(length) {
      length++
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }


    function r(a) {
      return Math.floor(Math.random() * a.length);
    }

    function st(a) {
      if (typeof a == typeof String()) {
        return a
      };
      var b;
      if (JSON.stringify(a) == undefined) {
        b = a.toString()
      } else b = JSON.stringify(a);
      console.log({
        a,
        b
      });
      return b
    }
    var strobj = {}
    var rexp = {
      "current_user_url": "https://api.github.com/user",
      "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
      "authorizations_url": "https://api.github.com/authorizations",
      "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
      "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
      "emails_url": "https://api.github.com/user/emails",
      "emojis_url": "https://api.github.com/emojis",
      "events_url": "https://api.github.com/events",
      "feeds_url": "https://api.github.com/feeds",
      "followers_url": "https://api.github.com/user/followers",
      "following_url": "https://api.github.com/user/following{/target}",
      "gists_url": "https://api.github.com/gists{/gist_id}",
      "hub_url": "https://api.github.com/hub",
      "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
      "issues_url": "https://api.github.com/issues",
      "keys_url": "https://api.github.com/user/keys",
      "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
      "notifications_url": "https://api.github.com/notifications",
      "organization_url": "https://api.github.com/orgs/{org}",
      "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
      "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
      "public_gists_url": "https://api.github.com/gists/public",
      "rate_limit_url": "https://api.github.com/rate_limit",
      "repository_url": "https://api.github.com/repos/{owner}/{repo}",
      "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
      "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
      "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
      "starred_gists_url": "https://api.github.com/gists/starred",
      "topic_search_url": "https://api.github.com/search/topics?q={query}{&page,per_page}",
      "user_url": "https://api.github.com/users/{user}",
      "user_organizations_url": "https://api.github.com/user/orgs",
      "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
      "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
    }
    console.log('Loading Git api')
    class GitMethod {
      constructor(name, url, parms = []) {
        var base = [url],
          a = "",
          b = "",
          c = [""],
          d = [""],
          opt = [],
          id = makeid(r(new Array(10)))
        try {
          base = d_(url)
        } catch (err) {
          base = [url]
        };
        base.filter(part => {
          if (Array.isArray(part) && part.filter(e => typeof e == "number")[0]) {
            parms.push(part[0])
          } else if (Array.isArray(part) && part.filter(e => typeof e == "number").length) {
            opt.push(part[0])
          }
        }), this.name = name, this.parms = Array2(parms, {
          map2: function(f = function() {}) {
            var a = [];
            for (let i = 0; i < this.length; i++) {
              a.push(f(this[i], i, this.length))
            }
            return a
          }
        })
        a = parms.length ? parms.map(p => `${p}=""`).join(',') : "",
          b = opt.length ? `${id}={${opt.map(p => `${p}:""`).join(',')}}` : "",
          c = [a, b].filter(e => e.length).join(','),
          d = [parms.length ? parms.join(',') : "", opt.length ? opt.map(o => `${o}:${id}.${o}`) : ""].filter(e => e.length).join(','),
          //console.log({sd:JSON.stringify(base), parms, a, b, c, d, opt })
          /*var [req,opt]=[[],[]];
          base.forEach(e=>{
          	if(Array.isArray(e)){
          		var level
          		e.forEach((a,b)=>{if(typeof a=='number')(level=[a,b])})
          		var args=e.splice(0,level[1]),r=!!e.splice(0,1)[0],joiner=e[0]
          		//console.log({args,level,r,joiner})
          		
          		var argMap=r?args.join(','):`{${args.join(',')}}`
          		var argCheck=
          		r?args.map(e=>`if(typeof ${e}=='undefined')throw "${e} is not defined"`):args.map(e=>`if(typeof ${e}=='undefined')console.warn("${e} is not defined");`)
          		console.log({argMap,argCheck})
          	}
          })
          var reg=/\{.?[\w\,]+\}/gi
          this.name=name;this.url=url
          this.get=function(){}*/
          this.name = name;
        this.url = url
        this.get = function() {}
        var cc = `const obj={${d}}
const base=${JSON.stringify(base)}
var Nurl = '';
base.forEach(e => {
if (Array.isArray(e)) {
var a = [
[],
[],
[],
[]
],
index = 0,
lt = typeof String();
for (let i = 0; i < e.length; i++) {
if (typeof e[i] != lt) {
index++
}
a[index].push(e[i]);
lt = typeof e[i]
}
var object = {
q: a[0],
required: !!a[1][0],
joiner: a[2][0] || "",
start: a[2][1] || ""
};
let parms = Array2(object.q, {
map2: function (f = function () { }) {
var a = [];
for (let i = 0; i < this.length; i++) {
a.push(f(this[i], i, this.length))
}
return a
}
});
var info = new Object();
info.keys = function keys() {
return Object.keys(this).map(name => [{
name,
value: this[name]
}][0])
};
var missed = false;
if (typeof obj == 'object') {
Array.isArray(obj) ? (parms.map2((a, b, c) => {
obj[b][0] == a ? (obj[b][1] ? info[a] = obj[b][1] : (a, 'from', obj[b], !object.required ? 'was omintted' : "has no value")) : ((a, 'is not', obj[b][0]))
})) : (info._keys = Array2(info.keys.apply(obj), {
map2: function (f = function () { }) {
var a = [];
for (let i = 0; i < this.length; i++) {
a.push(f(this[i], i, this.length))
}
return a
}
}), ('k:', info._keys), parms.filter((a) => {
return !((info._keys.filter(o => o.name == a)), info._keys.filter(o => o.name == a).length ? (info._keys.filter(o => o.name == a)[0].value ? (info[a] = info._keys.filter(o => o.name == a)[0].value, true) : ((a, 'from', info._keys.filter(o => o.name == a)[0], !object.required ? 'was omintted' : "has no value"), false)) : ((a, !object.required ? 'was omintted from' : "has no value", obj), false))
}).forEach(key => {
missed = true;
console[object.required ? "error" : 'warn']('Key:' + key, !object.required ? 'was omintted' : "is required")
}))
}
if (!missed) {
Nurl += (object.start + info._keys.map(e => e.value).join(object.joiner))
}
} else Nurl += e; /*console.log('N:',Nurl,object,info)*/
});
return ((function () {
var p=this.pathname+this.search
return new Promise(a => {
const octokit = new Octokit({
auth: _token,
});
return octokit.request(p).then(_user=>_user.data,b=>b).then(a)
})
}).apply((function () {
return arguments[0]
})((function () {
return new URL(Nurl)
}).apply(new XMLHttpRequest()))))`
        var get_ = new Function(c, cc)
        this.parms = c
        this.body = cc
        this.get = get_
        this.get_ = get_.toString()
        //this.json=JSON.stringify(obj)
      }
    }
    var mess = []
    var auto_ = {}
    class GItApi {
      #token = ""
      #onlogin = function() {}
      get token() {
        return this.#token
      }
      set token(token) {
        mess.forEach(e => e.token = token);
        this.#token = token
      }
      get onlogin() {
        return this.#onlogin
      }
      set onlogin(f = function() {}) {
        if (f instanceof Function || f instanceof asyncFunction) {
          this.#onlogin = f
        } else throw `${f} is not a function.`
      }
      async login(token) {
        this.token = token || this.token
        const {
          data
        } = await (new Octokit({
          auth: this.token
        })).request("/user")
        const {
          id,
          login,
          name
        } = data
        this.owner = {
          id,
          login,
          name
        }
        this.onlogin(data)
      }
      constructor(token, o = {}) {
        o = o || {}
        const {
          login
        } = o;
        this.token = token;
        login && (this.login())
      }
    }
    class k extends Object {
      constructor(...a) {
        super(...a)
      }
      #arr = [];
      get length() {
        return this.#arr.length
      }
      push(item) {
        this.#arr.push(item)
      }
    }
    GItApi.prototype.keys = new k()
    const defined = {}
    for (let i in rexp) {
      const name = i.split('_').reverse().splice(1).reverse().join('_');
      const prop = [name[0].toUpperCase() + name.split('').splice(1).join(''),
        rexp[i]
      ];
      if (!defined[name.split('_')[0]]) {
        defined[name.split('_')[0]] = []
      };
      defined[name.split('_')[0]].push(prop)
      //Object.defineProperty(this, prop[0], { writable: false, value: new GitMethod(...prop) })
    }
    //console.log(defined)
    for (let i in defined) {
      var arr = defined[i].sort((a, b) => a[0].length - b[0].length)


      var sp = arr[0][0]
      arr.forEach(prop => {
        var ar = [
          prop[0].split(sp).join('').length,
          prop[0].split(sp),
          prop[0].split(sp)[1].split('').splice(1).join("")
        ]
        var m = (new GitMethod(...prop)) //!ar[0] ? new GitMethod(...prop) : (new GitMethod(...prop))
        GItApi.prototype.keys.push(!ar[0] ? sp : ar[2])
        mess.push(m);
        //console.log('setting',prop,!ar?sp:ar[2])
        ;
        (!ar[0] ? strobj : strobj[sp])[!ar[0] ? sp : ar[2]] = m;
        //console.log(!ar[0] ? GItApi.prototype : GItApi.prototype[sp])
        auto_[!ar[0] ? sp : ar[2]] = m
        Object.defineProperty(!ar[0] ? GItApi.prototype : GItApi.prototype[sp], !ar[0] ? sp : ar[2], {
          writable: true,
          value: Object.assign(m)
        })

      })
    }
    _download('yes.json', JSON.stringify(auto_))
    console.log(JSON.stringify(auto_))
    this.GitHubApi = GItApi;
    return GItApi
  }.apply(globalThis)


var api = new GitHubApi('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', {
  login: true
})
console.log(api.token)
api.onlogin = function(e) {
  console.log('Logged in as', this.owner.name, this.owner.id)
  //console.log(api.User.repositories)
  api.User.get(this.owner.login).then(a => {
    console.log('Got', a)
  }, b => console.warn(b.message))
}

function loop(json){
    var arr=['{']
for(let i in json){
    var start=i;
    var t=typeof json[i]
    var c=json[i]
    if(t=='string'){
        
    }
    var b=`"${i}":${c}`
    arr.push(b)
    console.log(t,b)
}
    arr.push('}')
    return arr.join('\n')
}
loop({yes:2,no:"yes"})