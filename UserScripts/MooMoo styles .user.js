// ==UserScript==
// @name         MooMoo styles
// @namespace    http://tampermonkey.net/
// @version      3.9
// @description  Moomoo.io/Sploop.io mod [Texture pack editor/ MUSIC PLAYER/HAT KEYBINDS/ MUSIC VISUALIZER/ SKIN SWITCHER/ ANTI-KICK/AUTO LOGIN]
// @author       Gaston
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sploop.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://tjmoomoo.ml/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require      https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@main/UserScripts/Updater.js
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_addValueChangeListener
// ==/UserScript==
// Save the original console methods before overriding them
const consoleLogOriginal = console.log;
const consoleWarnOriginal = console.warn;
const consoleErrorOriginal = console.error;

(function() {
    class CustomLogging {
        constructor(title) {
            this.title = {
                body: title || "---",
                color: "darkgrey",
                size: "1rem"
            };
            this.body = {
                color: "#008f68",
                size: "1rem"
            };
        }

        setTitleBody(title) {
            this.title.body = title;
            return this;
        }

        setTitleStyle({ color, size }) {
            if (color !== undefined) this.title.color = color;
            if (size !== undefined) this.title.size = size;
            return this;
        }

        setBodyStyle({ color, size }) {
            if (color !== undefined) this.body.color = color;
            if (size !== undefined) this.body.size = size;
            return this;
        }

        log(body = "") {
            consoleLogOriginal(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`,
                `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
            );
        }

        warn(body = "") {
            consoleWarnOriginal(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`,
                `color: orange; font-weight: bold; font-size: ${this.body.size};`
            );
        }

        error(body = "") {
            consoleErrorOriginal(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`,
                `color: red; font-weight: bold; font-size: ${this.body.size};`
            );
        }
    }

    // Expose CustomLog to the global scope
    window.CustomLog = CustomLogging;
})();

const logger = new CustomLog("Script Logger");

function overrideConsoleMethod(methodName, originalMethod) {
    console[methodName] = function(...args) {
        // Check if any of the arguments is an object (excluding null)
        const containsObject = args.some(arg => typeof arg === 'object' && arg !== null);

        // Retrieve the caller function's name
        let callerFunctionName = 'Anonymous';

        try {
            // Throw an error to get the stack trace
            throw new Error();
        } catch (e) {
            if (e.stack) {
                // Parse the stack trace to get the caller function
                const stackLines = e.stack.split('\n');

                // The stack trace format varies between environments
                // For modern browsers, the third line is the caller
                // Adjust the index if needed based on your environment
                if (stackLines.length >= 3) {
                    const callerLine = stackLines[2];

                    // Extract the function name from the caller line
                    // This regex works for Chrome and Firefox
                    const functionNameMatch = callerLine.match(/at\s+(.*?)\s*\(/);

                    if (functionNameMatch && functionNameMatch[1]) {
                        callerFunctionName = functionNameMatch[1];
                    } else {
                        callerFunctionName = 'Anonymous';
                    }
                }
            }
        }

        if (callerFunctionName === 'Anonymous') {
            // Use the method name as placeholder (e.g., 'Log', 'Warn', 'Error')
            callerFunctionName = methodName.charAt(0).toUpperCase() + methodName.slice(1);
        }

        if (!containsObject) {
            // If no objects, format the arguments for better presentation
            const formattedMessage = args.map(arg => String(arg)).join(' ');
            // Include the caller function name
            logger[methodName](`[${callerFunctionName}] ${formattedMessage}`);
        } else {
            // If there are objects, log them as they are, including the caller function name
            originalMethod.call(console, `[${callerFunctionName}]`, ...args);
        }
    };
}

// Override console methods
overrideConsoleMethod('log', consoleLogOriginal);
overrideConsoleMethod('warn', consoleWarnOriginal);
overrideConsoleMethod('error', consoleErrorOriginal);


///⣿⣿⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿
///⣿⣿⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿
///⣿⣿⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿
///⣿⣿⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿
///⣿⣿⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘
///⣿⣿⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇
///⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿
///⣿⣿⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿
///⣿⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋⢀⠁⢘⣯⣿⣿
///⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿
///⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃⢀⢀⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟
///⣿⣿⣿⣟⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉⢀⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀⡀⠉⠛⠛⠷⣯⣳⠈⣾⡽
///⣿⢿⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁⢀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿
///⣿⣻⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁⢀⢀⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷
///⣿⢷⣻⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸
///⠸⣟⣯⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯
///⣇⠹⣟⣾⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿
///⣿⣆⠹⣷⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿
///⡙⠾⣆⠹⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾
///⣿⣷⡌⢦⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞
///⣿⣽⣆⠹⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿
///⢻⣽⣿⡄⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿
///⡄⢿⣿⣷⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸
///⣷⡈⢿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄
///⣿⣷⡈⢿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧
///⣿⣿⣿⣄⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿
///⣿⣿⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿
///⣿⣿⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷


let keybinds = GM_getValue('keybinds')||{};


// OK OK I KNOW ITS OBFUSCATED BUT I CANT FIND THE ORIGANL ONE I MADE PLS DONT BAN ME
const styleUrl='https://raw.githubusercontent.com/naquangaston/HostedFiles/main/moostyle.js'

// a list of bad word
const wordWurl='https://raw.githubusercontent.com/naquangaston/HostedFiles/main/moomooWords.json'

const useChat=false;
var badWords= GM_getValue('moowords')||[]
var reg=new RegExp(`(${[...new Set(badWords.join(' ').match(/[\w\d]+/gi))].join('|')})`,'gi')

const filter1=s=>s.replaceAll(reg,function(a,b,c){return a.length>1?a.split(/[aeiou]+/gi).join('*'):a})
const lolzcatFilterold = (s) => {
    return s.toLowerCase().split('l').join('w').replaceAll(/l/g,'w').replaceAll(/(l|e)(?!d)/gi, function(match) {
        const block = {
            "l": 'w',
        };
        return block[match[0]] || match;
    }).replace(/s/g, 'z').replace(/th/g, 'd').replace(/e^d/g, function(match, offset, string) {
        // Check if "ee" is already present in the string
        if (string.slice(offset - 1, offset + 1) === 'ee') {
            return 'e';
        }
        return 'e';
    }).replace(/w{2,}/g, 'wl').replaceAll(/e{2,}/gi,'ee').replaceAll(/.r/gi,e=>e.replace('r','w'))
};
const filter2 = (input) => {
    return input
        .toLowerCase()
        .replace(/l/g, 'w')                // Replace all 'l' with 'w'
        .replace(/th/g, 'd')               // Replace 'th' with 'd'
        .replace(/s/g, 'z')                // Replace 's' with 'z'
        .replace(/ee+/gi, 'ee')            // Normalize multiple 'e's to 'ee'
        .replace(/w{2,}/g, 'wl')           // Replace consecutive 'w's with 'wl'
        .replace(/(r)(?!\b)/gi, 'w')       // Replace 'r' with 'w' unless at word boundaries
        .replace(/e(?=d)/gi, 'e')          // Ensure 'e' followed by 'd' is normalized
        .replace(/l|e(?!d)/gi, (match) => {
        const replacements = {
            'l': 'w',
        };
        return replacements[match] || match;
    });
};

const game_= new class{
    #spawnFunction=function(){}
    #testFunction=function(){}
    #autoSpawn=false
    #timeOut=1000
    #sleep=function(ms){return new Promise(a=>setTimeout(a,ms))}
    #int=0
    #stopped=0
    #start_=async function(){
        while(true){
            let a=this.#sleep
            let b=this.#testFunction
            let c=this.#spawnFunction
            await a(0)
            if(this.#stopped)break;
            b()&&(
                await a(this.#timeOut),
                console.log('Spawning into game'),
                c(),await a(this.#timeOut)
            )
        }
        this.#stopped=false
        console.log('Done',this.#stopped)
    }
    set timeOut(n){
        this.#timeOut=Number.isNaN(n)?1000:Number(n)
    }
    get timeOut(){
        return this.#timeOut
    }
    start(){
        this.#start_()
    }
    stop(){
        this.#stopped=true
    }
    set autoSpawn(b){
        this.#autoSpawn=!!b
    }
    get autoSpawn(){
        return this.#autoSpawn
    }
    set testFunction(f){
        this.#testFunction=f
    }
    get testFunction(){
        return this.#testFunction
    }
    set spawnFunc(f){
        this.#spawnFunction=f
    }
    get spawnFunc(){
        return this.#spawnFunction
    }
}
class bool{
    constructor(status){
        if(status)this.toggle();
    }
    #status=false
    toggle(){
        this.#status=!this.#status
    }
    get status(){
        return this.#status
    }
    set status(a){
        this.#status=!!a
    }
}
class element {
    static get br() {
        return new element("br");
    }
    constructor(name, obj) {
        //findhref2(id('skin-message'))[0].constructor.name

        this.element = name.constructor.name.includes('HTML')&&(name)||(function () {
            for (let i in arguments[1]) {
                arguments[0].setAttribute(i, arguments[1][i]);
            }
            return arguments[0];
        })(document.createElement(arguments[0]), arguments[1]);
    }
    style(obj) {
        for (let i in obj) {
            this.element.style[i] = obj[i];
        }
        return this;
    }
    append(target,...targets) {
        this.element.append(target.element || target);
        console.log("T:",{targets,fe:targets&&targets.forEach})
        for(let i=0;i<targets.length;i++){
            let a=targets[i];
            console.log('Appending:',{element:a,target:this})
            this.element.append(a.element || a);
        }
        return this;
    }
    appendTo(target) {
        try{(target.element || typeof target=='string'?document.querySelector(target):target).append(this.element);}
        catch{
            (target.element||target).append(this.element)
        }
        finally{
            console.warn('Failed to appent',{this:this,target})
        }
        return this;
    }
    on(event, a) {
        this.element[`on${event}`] = a;
        return this;
    }
    set(prop, value) {
        this.element[prop] = value;
        return this;
    }
    remove() {
        this.element.remove();
        return this;
    }
    get() {
        return this.element[arguments[0]];
    }
    get children() {
        return new (class $ {
            constructor(arr) {
                for (var i = 0; i < arr.length; i += 1) {
                    this[i] = arr[i];
                }

                // length is readonly
                Object.defineProperty(this, "length", {
                    get: function () {
                        return arr.length;
                    }
                });

                // a HTMLCollection is immutable
                Object.freeze(this);
            }
            item(i) {
                return this[i] != null ? this[i] : null;
            }
            namedItem(name) {
                for (var i = 0; i < this.length; i += 1) {
                    if (this[i].id === name || this[i].name === name) {
                        return this[i];
                    }
                }
                return null;
            }
            get toArray() {
                return [...this];
            }
        })([...this.element.children]);
    }
}
const alt=name.includes('alt')
function isHidden(el) {
    return (el.offsetParent === null)
}
function random(arr){return arr[Math.floor(Math.random() * arr.length)];}
function dispatchAllMouseEvents(target) {
    const mouseEvents = ['click','mouseover', 'mouseenter', 'mousemove', 'mousedown', 'mouseup', 'mouseout', 'mouseleave'];

    mouseEvents.forEach(eventName => {
        let ev=new Event(eventName, { bubbles: true, isTrusted: true })
        if(target[`on${eventName}`])target[`on${eventName}`](ev);
        target.dispatchEvent(ev);
    });
}
function dispatchAllInputEvents(target, value) {
    const inputEvents = ['focus', 'input', 'change', 'blur'];

    inputEvents.forEach(eventName => {
        let ev=new Event(eventName, { bubbles: true, isTrusted: true })
        if(target[`on${eventName}`])target[`on${eventName}`](ev)

        if (eventName === 'input') {
            target.value = value;
        }
        target.dispatchEvent(ev);
    });
}

var _setUp=false
findhref2=function (a,b){
    var res=[];

    function part2(e){
        if(e.tagName.toLowerCase()==(b||'a')){
            res.push(e);
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }else{
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }
    };
    part2(a);
    return res
}

function add_Style(f){
    var[uc,j,p,w]=["\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074","\u0074\u0065\u0078\u0074\u0043\u006f\u006e\u0074\u0065\u006e\u0074","\u0068\u0065\u0061\u0064","\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"],
        yd={get k(){return document}}
    var d=yd["k"][uc]("style")
    d[j]=f
    yd["k"][p][w](d)
}
function copyElm(element) {
    if (!(element instanceof Element)) {
        throw new Error("Provided argument is not a DOM element.");
    }

    // Create a new element of the same type
    const newElement = document.createElement(element.tagName);

    // Copy all attributes
    for (let attr of element.attributes) {
        newElement.setAttribute(attr.name, attr.value);
    }

    // Copy all styles
    newElement.style.cssText = element.style.cssText;

    // Copy class list
    newElement.className = element.className;

    // Copy inner HTML content
    newElement.innerHTML = element.innerHTML;

    return newElement;
}
_copyElm=copyElm
async function SetUpSploop() {
    try {
        const result = await _SetUpSploop();
        console.log('Sploop Returned:', result);
    } catch (e) {
        console.error('Sploop Error:', e);
    }
}

async function _SetUpSploop(){
    var spinSpeed = 3.1; //Change the speed that the spikes rotate

    (async function() {
        const spikeUrls = new Set([
            // Remove spikes that you don't want to spin
            "https://sploop.io/img/entity/spike.png?v=1923912",     // wood spike
            "https://sploop.io/img/entity/hard_spike.png?v=1923912", // hard spike
            "https://sploop.io/img/entity/big_spike.png?v=1923912"   // castle spike
        ]);

        // Helper: Determine category from original type and file name.
        function getCategoryFromName(originalType, name) {
            if (name.includes("inv_")) {
                return "inventory";
            } else if (name.includes("hat")) {
                return "hat";
            } else if (name.includes("accessory")) {
                return "accessory";
            } else {
                return originalType;
            }
        }

        // Load your allImages array from GM storage (or default to an empty array)
        let allImages = await GM_getValue('allImaes', []);
        let stuff = {};

        // Populate our 'stuff' object from saved images, sorting by category.
        for (const e of allImages) {
            try {
                let urlObj = new URL(e.key);
                let parts = urlObj.pathname.split('/');
                let originalType = parts[2] || 'unknown';
                let name = parts[3] || 'unknown';
                let type = getCategoryFromName(originalType, name);
                if (!stuff[type]) stuff[type] = {};
                // Use the same key for saving and loading; store both current src and default.
                let savedSrc = await GM_getValue(`${type}_${name}`, e.key);
                stuff[type][name] = { src: savedSrc, default: e.key };
            } catch (err) {
                console.error('Error parsing saved image:', err);
            }
        }

        // Create the panel using your custom 'element' class and append it to #da-right
        let panel = new element(document.getElementById('da-right'));
        let title = new element('h2');
        title.set('innerText', 'Texture Pack Editor');
        title.style({ fontSize: '16px', margin: '0 0 10px 0' });
        panel.append(title);

        // Helper: Create an image input group with label, input, preview, and reset button.
        function createImageInput(type, name, src, defaultSrc) {
            let container = new element('div');
            container.style({ marginBottom: '5px' });

            let label = new element('label');
            label.set('innerText', name);
            label.style({ display: 'block', fontSize: '12px' });

            // Create a flex container for input, preview, and reset button
            let row = new element('div');
            row.style({ display: 'flex', alignItems: 'center' });

            let input = new element('input', { type: 'text' });
            input.style({ width: '50%', fontSize: '12px' });
            input.element.value = src;

            // Create a mini preview of the image, placed to the right of the input
            let preview = new element('img', { src: src });
            preview.style({ width: '50px', height: 'auto', marginLeft: '10px' });

            // Create a reset button that reverts to the default image URL.
            let resetBtn = new element('button');
            resetBtn.set('innerText', 'Reset');
            resetBtn.style({ fontSize: '12px', marginLeft: '10px' });
            resetBtn.element.addEventListener('click', async function() {
                input.element.value = defaultSrc;
                await GM_setValue(`${type}_${name}`, defaultSrc);
                // Update stuff with both the current src and retain the default.
                stuff[type][name] = { src: defaultSrc, default: defaultSrc };
                preview.element.src = defaultSrc;
                console.log(`Reset ${type}_${name} to default`);
            });

            // Update GM storage and preview when the input changes.
            input.element.addEventListener('change', async function() {
                let newSrc = input.element.value;
                await GM_setValue(`${type}_${name}`, newSrc);
                // Update stuff while retaining the original default.
                stuff[type][name] = { src: newSrc, default: defaultSrc };
                preview.element.src = newSrc;
                console.log(`Updated ${type}_${name} to ${newSrc}`);
            });

            row.append(input, preview, resetBtn);
            container.append(label, row);
            return container;
        }

        // Organize UI by type: create a container for each type with its heading and inputs.
        for (const type in stuff) {
            // Create a container for this type.
            let typeContainer = new element('div');
            typeContainer.style({
                marginBottom: '10px',
                borderBottom: '1px solid #444',
                paddingBottom: '5px'
            });

            let typeHeading = new element('h3');
            typeHeading.set('innerText', type);
            typeHeading.style({ fontSize: '14px', margin: '10px 0 5px 0' });
            typeContainer.append(typeHeading);

            // Loop through all images in this type and add their input groups.
            for (const name in stuff[type]) {
                const imageData = stuff[type][name];
                let inputGroup = createImageInput(type, name, imageData.src, imageData.default);
                typeContainer.append(inputGroup);
            }

            // Append the type container to the panel.
            panel.append(typeContainer);
        }

        // Helper: Record each new spike draw if it's not already in allImages,
        // update the 'stuff' object and add its input group to the UI.
        function recordSpike(img, x, y, width, height) {
            const key = `${img.src}`;
            if (!allImages.some(record => record.key === key)) {
                allImages.push({ key, src: img.src });
                console.log(`img recorded for texture pack: ${key}`);
                try {
                    let urlObj = new URL(img.src);
                    let parts = urlObj.pathname.split('/');
                    let originalType = parts[2] || 'unknown';
                    let name = parts[3] || 'unknown';
                    let type = getCategoryFromName(originalType, name);
                    if (!stuff[type]) {
                        stuff[type] = {};
                        let typeContainer = new element('div');
                        typeContainer.style({
                            marginBottom: '10px',
                            borderBottom: '1px solid #444',
                            paddingBottom: '5px'
                        });
                        let typeHeading = new element('h3');
                        typeHeading.set('innerText', type);
                        typeHeading.style({ fontSize: '14px', margin: '10px 0 5px 0' });
                        typeContainer.append(typeHeading);
                        panel.append(typeContainer);
                    }
                    if (!stuff[type][name]) {
                        // Store both the current and default src as img.src.
                        stuff[type][name] = { src: img.src, default: img.src };
                        let inputGroup = createImageInput(type, name, img.src, img.src);
                        panel.append(inputGroup);
                    }
                } catch (err) {
                    console.error('Error processing new spike image:', err);
                }
            }
        }

        // Save the updated allImages array back to GM storage when leaving the page.
        window.onbeforeunload = async function() {
            await GM_setValue('allImaes', allImages);
        };

        // Expose recordSpike globally for external calls.
        window.recordSpike = recordSpike;

        // Save the original drawImage method.
        const ogdraw = CanvasRenderingContext2D.prototype.drawImage;

        // Function to update and spin the spike image.
        const spikeUpdate = (ctx, img, x, y, width, height, rotation) => {
            ctx.save();
            ctx.translate(x + width / 2, y + height / 2);
            ctx.rotate(rotation);
            ogdraw.call(ctx, img, -width / 2, -height / 2, width, height);
            ctx.restore();
        };

        // Overwrite drawImage to hook into spike rendering.
        CanvasRenderingContext2D.prototype.drawImage = function(img, ...args) {
            if (
                this.canvas && this.canvas.id === "game-canvas" &&
                img instanceof HTMLImageElement && img.src
            ) {
                let x, y, width, height;
                if (args.length === 2) {
                    [x, y] = args;
                    width = img.width;
                    height = img.height;
                } else if (args.length === 4) {
                    [x, y, width, height] = args;
                } else if (args.length === 8) {
                    [,,,, x, y, width, height] = args;
                } else {
                    return ogdraw.apply(this, [img, ...args]);
                }
                recordSpike(img, x, y, width, height);
                if (spikeUrls.has(img.src)) {
                    // Draw the original spike image invisibly.
                    this.globalAlpha = 0;
                    ogdraw.apply(this, [img, ...args]);
                    this.globalAlpha = 1;
                    const rotation = (performance.now() / 1000 * spinSpeed) % (2 * Math.PI);
                    spikeUpdate(this, img, x, y, width, height, rotation);
                } else {
                    // Render mapped images from our stuff object.
                    try {
                        let o = new URL(img.src);
                        let parts = o.pathname.split('/');
                        let originalType = parts[2] || 'unknown';
                        let name = parts[3] || 'unknown';
                        let type = getCategoryFromName(originalType, name);
                        let mappedSrc = (stuff && stuff[type] && stuff[type][name] && stuff[type][name].src)
                        ? stuff[type][name].src
                        : img.src;
                        let mappedImg = new Image();
                        mappedImg.src = mappedSrc;
                        ogdraw.apply(this, [mappedImg, ...args]);
                    } catch (err) {
                        console.error('Error mapping image:', err);
                        ogdraw.apply(this, [img, ...args]);
                    }
                }
            } else {
                return ogdraw.apply(this, [img, ...args]);
            }
        };

        // Optional: Adding a subtle watermark text element.
        const textElement = document.createElement('span');
        const data = atob('QnkgR2FzdG9u');
        textElement.textContent = data;
        textElement.style.position = 'absolute';
        textElement.style.top = '0';
        textElement.style.left = '80px';
        textElement.style.zIndex = '9999';
        textElement.style.color = 'rgba(0, 0, 0, 0.05)';
        document.body.appendChild(textElement);
    })();




    _log=console.log


    let rainbowInt=GM_getValue('rbi')||100
    const hats={
        update(){
            [...document.getElementsByClassName('menu-item')].map(e=>({name:e.className,e})).filter(e=>e.name=="menu-item").map(e=>(e.button=findhref2(e.e,'button')[0],e.canBuy=findhref2(e.e,'button')[0].innerText=='BUY',e)).forEach(e=>{
                var n=e.e.children[1].children[0].innerText.split(' ').join('')
                e.bn=findhref2(e.e,'button')[0].innerText;
                e.equiped=e.bn=='UNEQUIP'
                e.buy=function(){
                    hats[n].e.scrollIntoView()
                    hats.update();
                    if(!hats[n].canBuy)return;
                    hats[n].button.onmouseup({target:hats[n].button,isTrusted:true})
                    hats.update()
                }
                e.equip=function(){
                    hats[n].e.scrollIntoView()
                    hats.update()
                    if(e.equiped){
                        return
                    };
                    if(hats[n].canBuy)hats[n].buy();
                    hats[n].button.onmouseup({target:hats[n].button,isTrusted:true})
                    setTimeout(hats.update,100)
                }
                hats[n]=e
            })
        }}
    _hats=hats
    const chatFilter=new bool(!!GM_getValue('chatFilter'))
    const StaySignedIn=new bool(!!GM_getValue('StaySignedIn'))
    const AntiKickTOggle=new bool(!!GM_getValue('AntiKickTOggle'))
    const StreamerMode=new bool(!!GM_getValue('StreamerMode'))
    const lolFilter=new bool(!!GM_getValue('lolFilter'))
    const rainbowFit=new bool(!!GM_getValue('rainbowFit'))
    const autoConnectOldServer=new bool(!!GM_getValue('autoConnectOldServer'))
    const filterF=({target})=>{!chatFilter.status?null:target.value=filter1(target.value)}
    const filterA=({target})=>{!lolFilter.status?null:target.value=filter2(target.value)}
    let parent=id('game-left-content-main')
    let getPS=()=>id('enter-password').value;
    let getE=()=>id('enter-mail').value;
    let ad_spots=["#game-bottom-content",'#game-right-content-main']
    var loginForm=await wfs('#pop-login')
    var loginButton=await wfs('#main-login-button')
    var login=loginForm.querySelector('#login')
    login.addEventListener('click',()=>{
        console.log('updated stuff')
        GM_setValue('PI',{p:getPS(),e:getE()})
    })
    wfs('#chat').then(e => {
        const chat = document.getElementById('chat');
        var c = copyElm(chat);
        function handleChatInput(event) {
            // Log when Enter key is pressed
            if (event.key === 'Enter') {
                console.log('Enter key pressed in chat');
                chat.focus();
                chat.value=c.value;
                const newEvent = new KeyboardEvent(event.type, event);
                chat.dispatchEvent(newEvent);
            }
        }
        c.id = 'chat2';
        chat.parentNode.append(document.createElement('br'));
        chat.parentNode.append(c);

        chat.onfocus = function (e) {
            if(useChat){
                c.focus();
                chat.parentElement.style.display = 'block';
                c.focus();
            }
            //c.focus();
            //chat.parentElement.style.display = 'block';
            //c.focus();
        };

        let onkeyupOld = window.onkeyup;
        let onkeydownOld = window.onkeydown;

        window.onkeyup = function (event) {
            if (chat === document.activeElement || c === document.activeElement) {
                // Chat is focused, do nothing
                return;
            }
            if (onkeyupOld) {
                onkeyupOld(event);
            }
        };

        window.onkeydown = function (event) {
            if (chat === document.activeElement || c === document.activeElement || event.target.tagName=='input') {
                // Chat is focused, do nothing
                return;
            }
            if (onkeydownOld) {
                onkeydownOld(event);
            }
        };


        function isLetterOrNumberKey(key) {
            return /^[a-zA-Z0-9]$/.test(key);
        }

        // Add event listener to handle chat input
        c.addEventListener('keypress', ({ target, key }) => {
            if (isLetterOrNumberKey(key)) {
                chat.value = target.value;
                [filterF].forEach(f => f({ target }));
            }
            handleChatInput(event);
        });

        ;(useChat?c:chat).addEventListener('keyup', (e) => {
            const { target, key, code } = e;
            console.log(e);
            let i = true; // code != 'KeyL'
            chat.value = target.value;
            isLetterOrNumberKey(key) && i && ([filterF, filterA].forEach(f => f({ target: chat })));
        });

        ;(useChat?c:chat).addEventListener('keydown', ({ target, key }) => {
            if (isLetterOrNumberKey(key)) {
                chat.value = target.value;
                [filterF].forEach(f => f({ target: chat }));
            }
        });
    }).then(console.log,console.warn)

    function isLetterOrNumberKey(key) {
        return /^[0-9a-zA-Z]$/.test(key)&&key.length==1
    }

    if(alt){
        if(typeof GM_getValue('alts')=='number'){GM_setValue('alts',{})}
        var ThisAlt
        for(let i=1;true;i++){
            if(!GM_getValue('alts')[i]){
                ThisAlt=i
                let o=GM_getValue('alts')
                o[i]=true
                GM_setValue('alts',o)
                break;
            }
        }
        console.log('alt:',ThisAlt)
        addEventListener('unload',function(){
            if(alt){
                let o=GM_getValue('alts')
                o[ThisAlt]=false;
                GM_setValue('alts',o)
            }
        })
    }
    console.log('Set called',SetUpSploop.callee)
    var localFit=null
    function loadFit(a=0,b=0,c=0){
        skinIndex(0)
        try{!Number.isNaN(a)&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`skin${a}`))[0].click());}catch(err){
            console.warn('Failed to Skin',a)
        }
        skinIndex(1)
        try{!Number.isNaN(b)&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`accessory${b}`))[0].click());}catch(err){
            console.warn('Failed to accessory$',a)
        }
        skinIndex(2)
        !Number.isNaN(c)&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`back${c}`))[0].click());
        skinIndex(0)
    }
    _loadFit=loadFit
    _GM_setValue=GM_setValue
    _GM_getValue=GM_getValue
    function skinIndex(index){
        findhref2(id('skins-categories'),'img')[index].click()
    }
    new Promise((a,b)=>(b=setInterval(()=>(findhref2(id('skins-middle-main'),'img').length&&(clearInterval(b),a())),100))).then(async e=>{
        await sleep(1000)
        if(!alt){
            loadFit(GM_getValue('skin'),GM_getValue('accessory$'),GM_getValue('BACK'))
        }
    })
    id('game-left-content-main').style.overflow='scroll'
    id('da-right').parentNode.style.overflow='scroll'
    if(_setUp)return;
    var css_=`
#log{
    background-color: rgba(0,0,0,0);
    color: lightgreen;
}
.empty{
    content: attr(value);
}
select,select:focus{
    background-color: rgba(0,0,0,0);
    outline: none;
    border: none;
    color: rgb(255, 136, 0);
}
button{
    background-color: rgba(0,0,0,0);
    outline: none;
    border: 2px solid rgb(208, 255, 0);
    color: rgb(94, 255, 0);
}
button:hover,input:focus{
    background-color: rgba(0,0,0,0);
    outline: none;
    border: 2px solid rgb(255, 0, 0);
    color: rgb(0, 132, 255);
}
#skin-message{
	border: 2px solid red;
    background-color: rgba(0,0,0,0);
}
.green{border: 2px solid green;}
.red{border: 2px solid blue;}
::-webkit-scrollbar{
    display:none;
}
span.first{
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
}
span.middle{
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}
span.last{
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
}
del{
    text-decoration: line-through;
    color: red;
    border-radius: 3px;
    border: 1px solid coral;
    background-color: rgba(111,8,8,1);
}
ins{
    background-color: rgba(7,92,7,1);
    color: rgba(56,233,56,1);
    border-radius: 3px;
    border: 1px solid lightgreen;
}
textarea{
    text-overflow: clip;

}`
    add_Style(css_)
    GM_getValue('sm')&&(StreamerMode.toggle())
    await wfs('#clan-menu')
    await wfs('#pop-login')
    let clans=id('clan-menu')
    game_.autoSpawn=true
    game_.timeOut=5000
    game_.testFunction=function(){
        return !isHidden(play)
    }
    game_.spawnFunc=function(){
        if(alt){
            dispatchAllInputEvents(nickname,`${GM_getValue('nn')}'s alt${ThisAlt}`)
            randomFit.element.click()
            const{skin,back,accessory}=localStorage
            localFit={skin,back,accessory}
            console.log('Got fit',localFit)
        }else if(localFit){
            const{skin,back,accessory}=localFit
            loadFit(skin,accessory,back)
        }
        play.click()
        setTimeout(resetSkin,200)
    }
    var sleep=(ms)=>new Promise(a=>setTimeout(a,ms));
    async function wfs(s, timeout = 3000) {
        return await new Promise((resolve, reject) => {
            let startTime = performance.now();
            function checkSelector() {
                if (document.querySelector(s)) {
                    resolve(document.querySelector(s));
                } else if (performance.now() - startTime >= timeout) {
                    reject(new Error("Timeout waiting for selector"));
                } else {
                    requestAnimationFrame(checkSelector);
                }
            }
            checkSelector();
        });
    }
    var resetted=false
    async function resetSkin(){
        dispatchAllInputEvents(nickname,GM_getValue('nn'))
        skinIndex(0)
        !resetted&&(await sleep(2000))
        !Number.isNaN(GM_getValue('skin'))&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`skin${GM_getValue('skin')}`))[0].click());
        skinIndex(1)
        !resetted&&(await sleep(100))
        !Number.isNaN(GM_getValue('accessory'))&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`accessory${GM_getValue('accessory')}`))[0].click());
        !resetted&&(await sleep(100))
        skinIndex(2)
        !resetted&&(await sleep(100))
        !Number.isNaN(GM_getValue('back'))&&(findhref2(id('skins-middle-main'),'img').filter(e=>e.src.includes(`back${GM_getValue('back')}`))[0].click());
        !resetted&&(await sleep(100))
        resetted&&(skinIndex(0))
        resetted=1
    }
    _game_=game_
    _setUp=true

    var staySign= new element(_copyElm(login)).set('id','login2').set('innerText',`Stay Signed In:${StaySignedIn.status}`).on('click',e=>{StaySignedIn.toggle();e.target.innerText=`Stay Signed In:${StaySignedIn.status}`;GM_setValue('StaySignedIn',StaySignedIn.status)}).style({display:'inline-block'}).element
    loginForm.children[1].insertBefore(staySign,login)
    !function(){
        var[o,k,z,d,f,j]=["\u006d\u0061\u0070","\u0066\u006f\u0072\u0045\u0061\u0063\u0068","\u006c\u006f\u0067","\u006c\u0065\u006e\u0067\u0074\u0068","\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e","\u0072\u0065\u006d\u006f\u0076\u0065"],hu={get sn(){return console}};ad_spots[o]($)[k](s=>{hu["sn"][z]({s});s[d]&&([...s[0][f]][k](x=>x[j]()))})
    }()
    var mainAd=id('da-right')
    // Create script description element
    const scriptDescription = new element('div').style({ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#000', border: '1px solid #ddd', marginBottom: '10px' }).append(
        new element('h2').set('innerText', 'MooMoo/Sploop styles')
    ).append(
        new element('p').set('innerText', 'This script can:')
    )  .append(
        new element('ul')
        .append(new element('li').set('innerText', 'Change the game\'s look'))
        .append(new element('li').set('innerText', 'Add a built-in YouTube embed video player'))
        .append(new element('li').set('innerText', 'Include a random fit generator button'))
        .append(new element('li').set('innerText', 'Implement anti-kick functionality from being AFK'))
        .append(new element('li').set('innerText', 'Create alts'))
        .append(new element('li').set('innerText', 'Automatically join the game and turn on antikick for alts'))
        .append(new element('li').set('innerText', 'Hat keybinds that are saved locally!'))
    );

    // Append script description to the mainAd parent node
    scriptDescription.appendTo(mainAd);

    // Create disclaimer element with click-to-hide functionality
    const disclaimer = new element('div')
    .style({ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '5px', cursor: 'pointer' })
    .set('innerText', 'Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.')
    .on('click', function () {
        this.remove();
        localStorage.seen=1
    }).appendTo("#game-bottom-content")
    if(localStorage.seen==1)disclaimer.element.remove();

    id('lostworld-io_300x250_2').remove()
    new element('br').appendTo(parent)
    var userName
    async function tsm(){
        await wfs('#player-container')
        var s=id('player-container')
        s.style.display='none'
        if(StreamerMode.status){
            !userName&&(
                userName=(await wfs('#nickname-value')).innerText
            );
            userName=='SPLOOP.IO'?(userName=null):(await wfs('#nickname-value')).innerText='streamerMode';
            (await wfs('#change-username')).style.display='none';
        }else if(userName){
            (await wfs('#nickname-value')).innerText=userName;
            (await wfs('#change-username')).style.display='block';
        }
        s.style.display='flex'
    }
    const menu = new element('div',{id:"keybinds"}).style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }).appendTo(parent);
    var AntiKickButton=new element('button').set('innerText',`AntiKick:${AntiKickTOggle.status}`).on('click',function(e){AntiKickTOggle.toggle();e.target.innerText=`AntiKick:${AntiKickTOggle.status}`;AntiKickTOggle.status?game_.start():game_.stop()}).appendTo(menu)
    //new element('br').appendTo(menu)
    var chatFilterButton=new element('button').set('innerText',`chatFilter:${chatFilter.status}`).on('click',function(e){chatFilter.toggle();e.target.innerText=`chatFilter:${chatFilter.status}`;}).appendTo(menu)
    var chatFilterButton2=new element('button').set('innerText',`lolFilter:${lolFilter.status}`).on('click',function(e){lolFilter.toggle();e.target.innerText=`lolFilter:${lolFilter.status}`;}).appendTo(menu)
    //new element('br').appendTo(menu)

    var StreamerModeToggle=new element('button').set('innerText',`StreamerMode:${StreamerMode.status}`).on('click',function(e){
        StreamerMode.toggle();e.target.innerText=`StreamerMode:${StreamerMode.status}`;
        GM_setValue('sm',StreamerMode.status)
        tsm()
    }).appendTo(menu)
    //new element('br').appendTo(menu)
    var SpawnAlt=new element('button').set('innerText','SpawnAlt').on('click',function(e){
        GM_setValue('skin',localStorage.skin||0)
        GM_setValue('accessory',localStorage.accessory||0)
        GM_setValue('back',localStorage.back||0)

        GM_setValue('server',id('server-select').selectedOptions[0].getAttribute('region'))
        GM_setValue('gm',[id('ffa-mode'),id('sandbox-mode'),id('event-mode')].map(e=>[...e.classList].includes('dark-blue-button-3-active')).indexOf(true))
        var create = id('create_clan');
        var leave = id('leave_clan');
        var clanName = id('clan-menu-clan-name-input');
        var inclan = create.style.display == 'none';
        if (!inclan) {
            var createButton = id('create-clan-button');
            var clanNameInput = id('clan-menu-clan-name-input');

            // Dispatch various events on the clan name input element
            clanNameInput.dispatchEvent(new Event('focus', { bubbles: true }));
            clanNameInput.dispatchEvent(new Event('input', { bubbles: true }));
            clanNameInput.dispatchEvent(new Event('change', { bubbles: true }));
            clanNameInput.value = 'Alts';  // Set the value of the input
            clanNameInput.dispatchEvent(new Event('blur', { bubbles: true }));

            // Click the create button
            createButton.click();
            createButton.dispatchEvent(new Event('click'));
            new Promise(a=>{
                var int=setInterval(()=>{
                    if(clans.children[0].innerText!="Clans")(clearInterval(int),a())
                },200)
                }).then(a=>{
                _GM_setValue('clan',clans.children[0].innerText)
            })
        }
        open(location.href,'alt'+Date.now())

    }).appendTo(menu)
    //new element('br').appendTo(menu)
    var discordJoinButton=new element(findhref2(id('skin-message'))[0])

    randomFit=new element('button').appendTo(menu).on('click',function(e){var[v,k]=["\u0066\u006f\u0072\u0045\u0061\u0063\u0068","\u0063\u006c\u0069\u0063\u006b"];findhref2(id('skins-categories'),'img')[v]((g,f)=>{g[k]();random(findhref2(id('skins-middle-main'),'img'))[k]()})}).set('innerText','Generate Random Fit')

    new element('span').set('innerText','Rainbow Fit Speed:').appendTo(menu)
    var rainbowIntInput=new element('input',{
        id:"rainbowInt",
        value:rainbowInt||1000,size:3
    }).on('change',function({target}){
        let{value}=target
        rainbowInt=value
    }).appendTo(menu)
    new element('br').appendTo(menu)
    new element('br').appendTo(menu)




    !function(){var [j,e,u,l,n,i]=["\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e","\u0069\u006e\u0073\u0065\u0072\u0074\u0041\u0064\u006a\u0061\u0063\u0065\u006e\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074","\u0073\u0074\u0079\u006c\u0065","\u006f\u006e","\u0073\u0065\u0074","\u0065\u006c\u0065\u006d\u0065\u006e\u0074"];id('skin-message')[j][1][e]('afterend',new element('button',{class:"button-type-1 blue-discord-button text-shadowed-3",})[u]({height:"15%",position:"absolute",top:"15%"})[l]('click',function(m){var[v,k]=["\u0066\u006f\u0072\u0045\u0061\u0063\u0068","\u0063\u006c\u0069\u0063\u006b"];findhref2(id('skins-categories'),'img')[v]((q,s)=>{q[k]();random(findhref2(id('skins-middle-main'),'img'))[k]()})})[n]('innerText','Generate Random Fit')[i])}()

    ! function() {
        var [g, w, p, h, k, v] = ["\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e", "\u0069\u006e\u0073\u0065\u0072\u0074\u0041\u0064\u006a\u0061\u0063\u0065\u006e\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0074\u0079\u006c\u0065", "\u006f\u006e", "\u0073\u0065\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074"];
        let _a=new element('button', {
            class: "button-type-1 blue-discord-button text-shadowed-3",id:"reset-button"
        })[p]({
            height: "15%",
            left: "8%",
            position: "absolute"
        })[h]('click', function(a) {
            resetSkin()
        })[k]('innerText', 'Reset Fit')
        __a=_a
        id('skin-message')[g][1][w]('afterend', _a[v])
    }()
    ! function() {
        var [g, w, p, h, k, v] = ["\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e", "\u0069\u006e\u0073\u0065\u0072\u0074\u0041\u0064\u006a\u0061\u0063\u0065\u006e\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0074\u0079\u006c\u0065", "\u006f\u006e", "\u0073\u0065\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074"];
        id('skin-message')[g][1][w]('afterend', new element('button', {
            class: "button-type-1 blue-discord-button text-shadowed-3",
        })[p]({
            height: "15%",
            left: "50%",
            position: "absolute"
        })[h]('click', function(a) {
            const{skin,back,accessory}=localStorage
            localFit={skin,back,accessory}
            GM_setValue('skin',localStorage.skin||0)
            GM_setValue('accessory',localStorage.accessory||0)
            GM_setValue('back',localStorage.back||0)
        })[k]('innerText', 'Save Fit')[v])
    }()
    !function(){
        var [k,m,s,z,t,e,f,g,n]=["\u0065\u006c\u0065\u006d\u0065\u006e\u0074","\u0073\u0074\u0079\u006c\u0065","\u0073\u0065\u0074","\u0073\u0074\u0061\u0074\u0075\u0073","\u0061\u0070\u0070\u0065\u006e\u0064\u0054\u006f","\u006f\u006e","\u0074\u006f\u0067\u0067\u006c\u0065","\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074","\u0063\u006c\u0069\u0063\u006b"];var c=new element(copyElm(__a[k]))[m]({left:"19%",top:'60%'})[s]('innerText',`rainbowFit:${rainbowFit[z]}`)[t]('#skin-message')[e]('click',async function({target}){rainbowFit[f]();target[g]=`rainbowFit:${rainbowFit[z]}`;while(rainbowFit[z]){await sleep(rainbowInt);randomFit[k][n]()}})
        }()

    addEventListener('unload',function(){
        GM_setValue('keybinds',keybinds)
        GM_setValue('rbi',rainbowInt)
        if(GM_getValue('skin')){
            localStorage.skin=GM_getValue('skin')
        }
        if(GM_getValue('accessory')){
            localStorage.accessory=GM_getValue('accessory')
        }
        if(GM_getValue('back')){
            localStorage.accessory=GM_getValue('accessory')
        }
    })
    if(alt){
        let server=GM_getValue('server')
        var s=id('server-select')
        new Promise(a=>{
            var int=setInterval(()=>{
                if(id('small-waiting').style.display=='none')(clearInterval(int),a())
            },200)
            })
            .then(a=>{
            ;[id('ffa-mode'),id('sandbox-mode'),id('event-mode')][GM_getValue('gm')].click()
            new Promise(a=>{
                var int=setInterval(()=>{
                    if(id('small-waiting').style.display=='none')(clearInterval(int),a())
                },200)
                }).then(e=>{
                let index = s.selectedIndex=[...id('server-select').options].map(e=>e.getAttribute('region')).indexOf(server)
                s.dispatchEvent(new Event('click'));

                // Simulate a change event
                s.selectedIndex = index;
                s.dispatchEvent(new Event('change'));
                AntiKickButton.element.dispatchEvent(new Event('click'));
                new Promise(a=>{
                    var int=setInterval(()=>{
                        if(document.querySelector(sploopMenu).style.display!="flex")(clearInterval(int),a(id('clan-menu')))
                    },200)
                    }).then(j=>{
                    j.style.display='block'
                    let clanName=GM_getValue('clan')
                    let clan=[...id('clan_menu_content').children].filter(e=>e.getElementsByTagName('p')[0].innerText==_GM_getValue('clan'))
                    let clan2=(_GM_getValue('clan_')&&_GM_getValue('clan_').name,[...id('clan_menu_content').children].filter(e=>e.getElementsByTagName('p')[0].innerText==_GM_getValue('clan_').name))
                    if(clan.length){
                        let joinButton=clan[0].children[1].children[0]
                        joinButton.onmouseup({ bubbles: true, isTrusted: true })
                    }else if(clan2.length){
                        let joinButton=clan2[0].children[1].children[0]
                        joinButton.onmouseup({ bubbles: true, isTrusted: true })
                    }else{
                        console.warn('Cant find clan',clanName,'Or',(_GM_getValue('clan_')?_GM_getValue('clan_').name:null))
                    }
                    let c=(ms)=>new Promise(a=>setTimeout(a,ms))
                    async function leaveClan(){
                        dispatchAllMouseEvents(id('leave-clan-button'))
                        while(id('create_clan').style.display!='block'){
                            await c(100)
                        }
                        return true
                    }
                    GM_addValueChangeListener('clan_',function(a,b,c){
                        console.log({c,SelfClan:id('create_clan').style.display!='block'},)
                        if(c.inCLan){
                            if(id('create_clan').style.display!='block'){
                                console.log('Leaving Existing clan')
                                leaveClan().then(async e=>{
                                    while(id('create_clan').style.display=='block'){
                                        let clan=[...id('clan_menu_content').children].filter(e=>e.getElementsByTagName('p')[0].innerText==c.name)
                                        let joinButton=clan[0].children[1].children[0]
                                        joinButton.onmouseup({ bubbles: true, isTrusted: true })
                                        await c(100)
                                    }
                                })
                            }else{
                                console.log('Joining newCLan')
                                ;(async e=>{
                                    while(id('create_clan').style.display=='block'){
                                        let clan=[...id('clan_menu_content').children].filter(e=>e.getElementsByTagName('p')[0].innerText==c.name)
                                        let joinButton=clan[0].children[1].children[0]
                                        joinButton.onmouseup({ bubbles: true, isTrusted: true })
                                        await c(100)
                                    }
                                })()
                            }
                        }
                    })
                })
            })
        })
        id('play').addEventListener('click',function name(params) {
            const{nickname,skin,back,accessory}=localStorage
            !loadFit&&(localFit={skin,back,accessory},console.log('Saved LocalFit'))
            })
        document.title='Sploop.io - Fast Alt'
    }
    else{
        id('play').addEventListener('click',function name(params) {
            const{nickname,skin,back,accessory}=localStorage
            GM_setValue('skin',localStorage.skin||0)
            GM_setValue('accessory',localStorage.accessory||0)
            GM_setValue('back',localStorage.back||0)
            GM_setValue('nn',localStorage.nickname)
            GM_setValue('gm',[id('ffa-mode'),id('sandbox-mode'),id('event-mode')].map(e=>[...e.classList].includes('dark-blue-button-3-active')).indexOf(true))
        })
        var oldText=''
        _loop=setInterval(()=>{

            clans.children[0].innerText!=oldText&&(oldText=clans.children[0].innerText,GM_setValue('clan_',{
                inCLan:id('create_clan').style.display!='block',
                name:clans.children[0].innerText
            }))

        })
        document.title='Sploop.io - Fast Main'
        var percentSpeed=50
        await (async function(){
            while(!Object.keys(hats).splice(1).length)(hats.update(),await sleep(0))
            console.log('Hidden:',isHidden(loginButton))
            if(!isHidden(loginButton)&&StaySignedIn.status){
                console.log('Logging in :>')
                loginButton.click();
                await sleep(100)
                if(GM_getValue('PI')){
                    let r=GM_getValue('PI')
                    dispatchAllInputEvents(id('enter-mail'),r.e)
                    dispatchAllInputEvents(id('enter-password'),r.p)
                    await sleep(1000)
                    login.click();
                    while(!isHidden(loginButton))await sleep(1000)
                }else alert('You have to login at least once :<')
            }
            console.log('hats loaded')
            id('nav-skins').click()
            await sleep(100)
            id('nav-game').click();
            id('reset-button').click()
            const hats_  = Object.keys(hats).splice(1);
            hats_.forEach(hat => {
                const textElement = new element('span').set('innerText', `Hat ${hat} Key: `)

                const input = new element('input',{size:8,id:`${hat}_key`}).set('type', 'text').set('value', '').on('keydown', function(e) {
                    e.preventDefault();
                    // Set the input value to the key code of the key that was pressed
                    this.value = e.code;
                    // Set the keybind for the hat to the key code
                    keybinds[hat] = e.code;
                }).style({
                    'background-color':'rgba(0,0,0,0)',
                    color:'white'
                }).set('value',keybinds[hat]||'Add key...')
                const removeB=new element('button',{
                    id:`Remove_${hat}_key`
                }).set('innerText','Remove X Binding').on('click',function(e){
                    delete keybinds[hat]
                    input.set('value','Add key...')
                })
                menu.append(textElement,input,removeB)
                input.on('blur', function() {
                    const key = this.value.toLowerCase();
                    if (key) {
                        //keybinds[hat] = key;
                        console.log(`Keybind set for ${hat}: ${key}`);
                    }
                });
            });

            // Event listener to handle key presses
            document.addEventListener('keydown', function(e) {
                const key = e.code;
                // Check if the pressed key is a keybind for any hat

                hats_.forEach(hat => {
                    if (keybinds[hat] && keybinds[hat] === key) {
                        // Handle hat equipping logic here
                        console.log(`Equipping ${hat} with key: ${key}`);
                        hats[hat].equip()
                    }
                });
            });
            return 'Loaded Hats keys'
        })().then(console.log,console.warn)
        ! async function (){
            for(;;)(await sleep(0),await tsm())
        }()
    }
    if(id('game-bottom-content')){(id('game-bottom-content').style.maxWidth='100%',id('game-bottom-content').style.maxHeight='100%');(id('game-bottom-content').innerHTML=`<iframe height="100%" style="width: 100%;border-top-left-radius: 15px;overflow: hidden;border-top-right-radius: 15px;" scrolling="no" title="Audio Visualizer" src="https://naquangaston.github.io/HostedFiles/vis/" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">\nSee the Pen <a href="https://codepen.io/_Gaston-/pen/YzRRxXB">\nAudio Visualizer</a> by Gaston (<a href="https://codepen.io/_Gaston-">@_Gaston-</a>)\non <a href="https://codepen.io">CodePen</a>.\n</iframe>`);id('game-bottom-content').style.width='80%'}

}
const localStorage_={
    getItem(a){
        return GM_getValue(a)
    },
    setItem(a,b){
        GM_setValue(a,b)
        GM_setValue("LC",this)
        return this.getItem(a)
    }

}

window.once=window.on;
let moomooMenu='#mainMenu'
let sploopMenu='#homepage'
document.addEventListener('keydown', function (e) {
    if (e.key === "`") {
        if($(moomooMenu)&&$(moomooMenu).toggle){$(moomooMenu).toggle();console.log('Toggled MooMoo')}
        if($(sploopMenu)&&$(sploopMenu).toggle){
            document.querySelector(sploopMenu).style.display=document.querySelector(sploopMenu).style.display=="none"?"flex":"none"
            console.log('Toggled Sploop')
        }
    };
}); //spectator mode!
$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});
$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
var [info2,myPlayer]=[window.info2||{},window.myPlayer||[]]
window.selects=window.selects||[]
function pingcheck(){
    if(location.href.includes('sploop'))return;
    var ping2=document.createElement('h1');ping2.id='Ping2';topInfoHolder.append(ping2);setInterval(()=>{
        ping2.innerText=pingDisplay.innerText+`DPS:${window.dps} Dir:${myPlayer.dir}`
        pingDisplay.innerText.split(' ')[1].split(' m')[0]*1>window.pchek&&(chat(`Ping:${pingDisplay.innerText.split(' ')[1].split(' m')[0]}`))
    },500)
    window.ping=100;
    setInterval(()=>{
        ping=pingDisplay.innerText.split(' ')[1].split(' m')[0]*1
        ping>window.pchek&&(chat(`Ping:${pingDisplay.innerText.split(' ')[1].split(' m')[0]}`))
    },500);ab=1;i2=80;setInterval(()=>{ping>pckech&&(chat(`ping:${ping}`))},500)
    window.pckech=150
}

var code_=GM_getValue('styles.js')
var excuted=false
if(GM_getValue('styles.js')){eval(code_);excuted=true;}
console.log('Checking for styles updates')

fetch(styleUrl).then(e=>e.text()).then(e=>(GM_setValue('styles.js',e),e!=code_&&(console.log('Styles.js as updated')),!excuted&&(eval(e))))

fetch(wordWurl).then(e=>e.json()).then(e=>(GM_setValue('moowords',e),(e.join()!=badWords.join())&&(console.log('Filtered List updated')),e)).then(e=>(badWords=e,reg=new RegExp(`(${[...new Set(badWords.join(' ').match(/[\w\d]+/gi))].join('|')})`,'gi')));



;
(function() {
    const imagesArray = [];
    var categorizedImages = {
        inventory: [],
        players: [],
        entities: {},
        buttons: {},
        boss: null,
        bossDrop: null,
        playerDrop: [],
        animals: [],
        bossDetected: false,
        playerPosition: null
    };

    const buttonNames = ['clan_button_out.png', 'chat_button_out.png', 'hat_button_out.png'];
    const bossNames = ['mammoth_body.png', 'gcow.png', 'dragon_2_body.png', 'dragon_2_left_wing.png', 'dragon_2_right_wing.png', 'dragon_2_head.png'];
    const animalNames = ['cow.png', 'wolf.png', 'shark.png', 'duck.png']; // Added duck.png
    const bossDropName = 'chest.png';
    const playerDropName = 'lootbox.png';
    const teamCrownName = 'team_crown.png';
    const mapName = 'map.png';
    const playerDotName = 'our_dot.png';
    const mapDotName = 'map_dot.png';

    const originalDrawImage = CanvasRenderingContext2D.prototype.drawImage;
    const originalClearRect = CanvasRenderingContext2D.prototype.clearRect;

    const getCanvasCenter = (canvas) => {
        return { x: canvas.width / 2, y: canvas.height / 2 };
    };

    const calculateDistanceFromCenter = (imgCenterX, imgCenterY, centerX, centerY) => {
        const dx = imgCenterX - centerX;
        const dy = imgCenterY - centerY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const extractImageNameAndType = (src) => {
        const parts = src.split('/');
        const filename = parts.pop().split('?')[0]; // Extract the filename without query params
        const type = parts.pop(); // The directory before the filename is considered the type
        return { type, name: filename };
    };


    const drawHitbox = (context, x, y, width, height) => {
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.strokeRect(x, y, width, height);
    };

    const updateImageArray = (img, x, y, canvas, context) => {
        const imageSrc = img.src || img.toDataURL();
        const { x: centerX, y: centerY } = getCanvasCenter(canvas);

        // Adjust the dimensions for the scaled images
        const imgWidth = img.width / 2;
        const imgHeight = img.height / 2;

        // Directly use the provided coordinates
        var imgX, imgY
        imgX = x; imgY = y;



        // Calculate the center of the image
        const imgCenterX = imgX + imgWidth / 2;
        const imgCenterY = imgY + imgHeight / 2;

        const distance = calculateDistanceFromCenter(imgCenterX, imgCenterY, centerX, centerY);

        const { type, name } = extractImageNameAndType(imageSrc);

        // Skip images created from data URIs
        if (name.startsWith('data:')) return;

        // Store the coordinates correctly
        const imageObject = { src: imageSrc, x: imgX, y: imgY, width: imgWidth, height: imgHeight, distance, name, type };

        // Handle specific buttons
        if (buttonNames.includes(name)) {
            categorizedImages.buttons[name] = imageObject;
        }
        // Handle inventory items
        else if (name.startsWith('game-rank')) {
            categorizedImages.players.push(imageObject);
        }

        else if (name.includes('inv_') && type === 'entity') {
            const itemName = name.replace('inv_', '');

            if (imgY < centerY) {
                // Above the center, it's an upgrade
                categorizedImages.upgrades = categorizedImages.upgrades || [];
                categorizedImages.upgrades.push({ ...imageObject, name: itemName });
            } else {
                // Below the center, it's actual inventory
                categorizedImages.inventory.push({ ...imageObject, name: itemName });
            }
        }

        // Handle player skins (adjusted for type 'skins')
        else if (name.includes('body') && type === 'skins') {
            //categorizedImages.players.push(imageObject);

            // Draw the red hitbox around the player image
            drawHitbox(context, imgX, imgY, imgWidth, imgHeight);
        }else if (name.startsWith('game-rank')){
            categorizedImages.players.push(imageObject);

        }
        // Handle boss parts
        else if (bossNames.includes(name)) {
            if (name.startsWith('dragon_2')) {
                // Handle dragon boss parts by calculating the middle
                if (!categorizedImages.boss) {
                    categorizedImages.boss = { parts: [], type: 'Dragon', centerX: 0, centerY: 0 };
                }
                categorizedImages.boss.parts.push(imageObject);
                categorizedImages.boss.centerX += imgCenterX;
                categorizedImages.boss.centerY += imgCenterY;

                // Calculate the final center when all parts are added
                if (categorizedImages.boss.parts.length === 4) { // Assuming dragon has 4 parts
                    categorizedImages.boss.centerX /= 4;
                    categorizedImages.boss.centerY /= 4;
                }
            } else {
                // Handle other single-part bosses
                categorizedImages.boss = imageObject;
            }
        }
        // Handle boss drop
        else if (name === bossDropName) {
            categorizedImages.bossDrop = imageObject;
        }
        // Handle player drop
        else if (name === playerDropName) {
            categorizedImages.playerDrop.push(imageObject);
        }
        // Handle animals
        else if (animalNames.includes(name)) {
            categorizedImages.animals.push(imageObject);
        }
        // Detect boss presence using teamcrown.png, and whether map.png is in the array
        else if (name === teamCrownName) {
            const isBoss = !imagesArray.some(img => img.name === mapName);
            if (isBoss) {
                categorizedImages.bossDetected = true;
            }
        }
        // Detect player position on mini-map
        else if (name === playerDotName) {
            categorizedImages.playerPosition = imageObject;
        }
        // Handle other entities by categorizing them into their own arrays based on their name
        else if (type === 'entity') {
            try{
                if (!categorizedImages.entities[name]) {
                    categorizedImages.entities[name] = [];
                }
                categorizedImages.entities[name].push(imageObject);
            }catch(err){
                console.log(err)
            }
        }

        // Update the global imagesArray as well
        imagesArray.push(imageObject);
    };


    const clearArrays = () => {
        imagesArray.length = 0;
        for (let key in categorizedImages) {
            if (Array.isArray(categorizedImages[key])) {
                categorizedImages[key].length = 0;
            } else if (typeof categorizedImages[key] === 'object') {
                for (let innerKey in categorizedImages[key]) {
                    categorizedImages[key][innerKey].length = 0;
                }
            }
        }
        categorizedImages.boss = null; // Reset the boss
        categorizedImages.bossDrop = null; // Reset the boss drop
        categorizedImages.bossDetected = false; // Reset boss detection
        categorizedImages.playerPosition = null; // Reset player position
    };

    const tracer = (context) => {
        const { boss, bossDrop, playerDrop ,players} = categorizedImages;
        let playerPosition=getCanvasCenter()
        if (playerPosition) {
            context.strokeStyle = 'yellow';
            context.lineWidth = 1.5;

            // Draw line to Boss
            if (boss) {
                context.beginPath();
                context.moveTo(playerPosition.x + playerPosition.width / 2, playerPosition.y + playerPosition.height / 2);
                const bossX = boss.centerX || boss.x + boss.width / 2;
                const bossY = boss.centerY || boss.y + boss.height / 2;
                context.lineTo(bossX, bossY);
                context.stroke();
            }

            // Draw line to Boss Drop
            if (bossDrop) {
                context.beginPath();
                context.moveTo(playerPosition.x + playerPosition.width / 2, playerPosition.y + playerPosition.height / 2);
                context.lineTo(bossDrop.x + bossDrop.width / 2, bossDrop.y + bossDrop.height / 2);
                context.stroke();
            }

            // Draw lines to Player Drops
            if (playerDrop.length > 0) {
                playerDrop.forEach(drop => {
                    context.beginPath();
                    context.moveTo(playerPosition.x + playerPosition.width / 2, playerPosition.y + playerPosition.height / 2);
                    context.lineTo(drop.x + drop.width / 2, drop.y + drop.height / 2);
                    context.stroke();
                });
            }
            if (players.length > 0) {
                players.forEach(player => {
                    context.beginPath();
                    context.moveTo(playerPosition.x + playerPosition.width / 2, playerPosition.y + playerPosition.height / 2);
                    context.lineTo(player.x + player.width / 2, player.y + player.height / 2);
                    context.stroke();
                });
            }
        }
    };




    // Expose the arrays and functions globally
    window.imagesArray = imagesArray;
    window.tracer = tracer;
})();