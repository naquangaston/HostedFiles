// ==UserScript==
// @name         Poser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://greasyfork.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/ResourceLoader_.js
// @run-at document-start
// ==/UserScript==
typeof globalRoot == "undefined" &&
  (globalRoot =
    typeof exports == "undefined"
      ? !this.Device
        ? typeof window == "undefined"
          ? this
          : globalThis || window || self || top
        : exports
      : this);

typeof GM_setValue == "undefined" &&
  (GM_setValue = function (key, v) {
    return (localStorage[key] = v);
  });
typeof GM_getValue == "undefined" &&
  (GM_getValue = function (key) {
    return localStorage[key];
  });

function getTag(str) {
  return (function (tagsReg, metaTag, getT) {
    console.log({ tagsReg, metaTag, getT });
    return (function (info, str) {
      console.log({ info, str });
      return (
        str.forEach((tag) => {
          !info[tag[1]] && (info[tag[1]] = []), info[tag[1]].push(tag[2]);
        }),
        info
      );
    })(
      {},
      (console.log({
        m: str.match(
          /\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+/gi
        )
      }),
      str
        .match(metaTag)[0]
        .match(tagsReg)
        .map((e) => e.match(getT)))
    );
  })(
    /(\/{2}[ ]+@(\w+)[ ]+([^\n]+))/gi,
    /\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+\/{2} ={2}\/UserScript={2}/gi,
    /\/{2}[ ]+@(\w+)[ ]+([^\n]+)/
  );
}
function log(t, i) {
  document.getElementById(`log${i || 1}`).innerText = t;
}
class Fork {
  #fet = async function (url, maxC = 5, c = 0, err) {
    if (c < maxC) {
      return await fetch(url).then(
        (a) => a,
        async (b) => await this.#fet(url, maxC, c + 1, b)
      );
    } else throw err;
  };
  #fetSearch = async function (obj) {
    var q = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
    return await this.#fet(
      `https://greasyfork.org/en/scripts.json?${q}`
    ).then((e) => e.json());
  };
  #fetScript = async function (id) {
    return await this.#fet(
      `https://greasyfork.org/en/scripts/${id}.json`
    ).then((r) => r.json());
  };
  #fetUser = async function (id) {
    return await this.#fet(
      `https://greasyfork.org/en/users/${id}.json`
    ).then((r) => r.json());
  };
  #fetCode = async function (id) {
    return await this.#fet(
      `https://greasyfork.org/en/scripts/${id}/code.user.js`
    )
      .then((r) => r.blob())
      .then((r) => r.text());
  };
  constructor(userID) {
    this.userID=userID
    var onload = null;
    Object.assign(this, {
      get onload() {
        return onload;
      },
      set onload(f) {
        onload = f;
      }
    });
  }
  async getScripts(){
    return await this.user(this.userID)
  }
  async script(id) {
    return await this.#fetScript(id);
  }
  async search(q) {
    return await this.#fetSearch({ q });
  }
  async user(id) {
    return await this.#fetUser(id);
  }
  async code(id) {
    return await this.#fetCode(id);
  }
}
var myFork = new Fork(472665);
Array.prototype.async = async function (func, method) {
  var supported = ["map", "forEach", "filter"];
  if (!supported.includes(method))
    throw `${method} is not supported:\n[${supported.join(
      " - "
    )}] are supported`;
  if (method == "map") {
    var a = Array.from(this);
    for (let i = 0; i < a.length; i++) {
      a[i] = await func(a[i], i);
    }
    return a;
  }
  if (method == "forEach") {
    for (let i = 0; i < this.length; i++) {
      await func(this[i]);
    }
  }
  if (method == "filter") {
    let r = [];
    for (let i = 0; i < this.length; i++) {
      if (await func(this[i])) r.push(this[i]);
    }
    return r;
  }
};
setValue = GM_setValue;
getValue = GM_getValue;
var step = getValue("step") || 0;
var isUpdate = getValue("update");
var info = JSON.parse(
  decodeURIComponent(location.hash.split("").splice(1).join("") || '{"e":"0"}')
);
!(function () {
  if (isUpdate) {
    if (info) {
      if (info.id) {
        localStorage[info.id];
      } else console.warn("Cant update script with no script ID present :/.");
    } else console.warn("Cant update script with no info present :/.");
    return;
  }
  info = { action: "getToken" };
  if (info.action == "getToken") {
    const Gorigin = new URL((opener && opener.location.href) || location.href)
      .origin;
    console.log("Retrieving Token");
    async function useCode(_info) {
      console.log(_info);
      try {
        var incrument = info.inc || 0.1;
        var { code, id } = _info;
        status("Getting resources");
        var Loader = new ResourceLoader();
        if (typeof js_beautify != "function") {
          console.log("importing goods");

          await Loader.loadResource(
            "https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_Formatter.js"
          );
          console.log("Two");
          await Loader.loadResource(
            "https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_obf.js"
          );
          console.log("done");
          js_beautify = globalRoot.js_beautify;
          JavaScriptObfuscator = globalRoot.JavaScriptObfuscator;
        }
        if (typeof js_beautify == "function") {
          console.log("Got js_");
          var { version } = await Loader.loadResource(
            `https://greasyfork.org/en/scripts/${id}.json`,
            true,
            false
          );
          var GMinfo = {
            code
          };
          status("Version:", version);
          let lines = code.split("\n");
          var cd = code
            .split("\n")
            .splice(0, lines.indexOf("// ==/UserScript==") + 1)
            .join("\n");
          var meta = lines
            .splice(
              lines.indexOf("// ==UserScript=="),
              lines.indexOf("// ==/UserScript==")
            )
            .splice(1);
          var keep = [];
          status("analysing code:");
          meta.map((line) => {
            try {
              var m = line.match(/(@)([\w]+)[ ]+(.+)/i);
              !GMinfo[m[2]] &&
                ((GMinfo[m[2]] = []), !keep.includes(m[2]) && keep.push(m[2]));
              GMinfo[m[2]].push(m[3]);
            } catch (err) {}
          });
          version = (Number(version) + incrument).toFixed(
            incrument.toString().split(".")[1].length
          );
          GMinfo.version = [version];
          code = code.replace(cd, "");
          status("encryting code:");
          var min = {
            code: JavaScriptObfuscator.obfuscate(code, {
              compact: false,
              numbersToExpressions: false,
              stringArrayShuffle: true,
              splitStrings: false,
              log: true,
              identifierNamesGenerator: "mangled",
              renameGlobals: false
            }).obfuscatedCode
          };
          status("Formating code:");
          min.code = ";" + globalRoot.js_beautify(min.code);
          var newCode = [
            "// ==UserScript==",
            keep
              .map((k) => GMinfo[k].map((e) => `// @${k} ${e}`).join("\n"))
              .join("\n"),
            min.code,
            "// ==/UserScript=="
          ].join("\n");
          //console.log({min,keep,GMinfo})
          /*script_version_code.value=*/ newCode;
          status("Posting-");
          console.log("Code:");
          /*document.getElementById('enable-source-editor-code').click()
            document.getElementsByName('commit')[0].click()*/
        }
      } catch (err) {
        console.log(err);
      }
    }
    function status(s) {
      opener.postMessage({ status: s }, Gorigin);
    }
    function getToken_() {
      const token = [...document.getElementsByName("authenticity_token")].pop()
        .value;
      onmessage = function (e) {
        if (e.origin == Gorigin) {
          console.log("Hnadled", e.data, e);
          e.data == true && opener.postMessage({ token }, Gorigin);
          e.data.info &&
            e.data.info.code &&
            (status("Pending code"), useCode(e.data.info));
        } else console.log("Unhandled Post", e);
      };
      console.log({ token });
      opener.postMessage(true, Gorigin);
      console.log("Posted");
    }
    function getToken() {
      var _ = setInterval(() => {
        try {
          [...document.getElementsByName("authenticity_token")].pop().value;
          clearInterval(_);
          getToken_();
        } catch (err) {}
      }, 1);
    }
    myFork.getScripts().then(console.log)
    document.readyState == "complete" ? getToken() : (onload = getToken());
    return;
  }
})();
