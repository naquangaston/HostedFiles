// ==UserScript==
// @name         auto quiz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       *://instruction.gwinnett.k12.ga.us/*

// @icon         https://www.google.com/s2/favicons?sz=64&domain=ga.us
// @grant        none
// ==/UserScript==
console.log('ZLoading')
HTMLDivElement.prototype.childLoop=function(...a){return childrenLoop.apply(this,...a)}
function childrenLoop(ele){
    ele=ele||this
    return ele.children.length==1?childrenLoop(ele.children[0]):(ele.children)
}
findhref=function (a,b){
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
};
console.log(document.onreadystatechange=function(e){
    console.log(e)
    if(document.readyState=="complete"){
        HTMLDivElement.prototype.childLoop=function(...a){return childrenLoop.apply(this,...a)}
        function childrenLoop(ele){
            ele=ele||this
            return ele.children.length==1?childrenLoop(ele.children[0]):(ele.children)
        }
        setTimeout(()=>{
            try{
                function fg(q){
                    var [a,b]=[...q.childLoop()].pop().childLoop()
                    var [c,d]=[a.childLoop()[0].children[0].children[0].shadowRoot.children[0].innerText,b.children[1].childLoop()]
                    var index=localStorage[c]=(localStorage.getItem(c)?Number(localStorage[c]):null||-1)>d.length-1?localStorage[c]=0:(localStorage.getItem(c)?Number(localStorage[c]):null||-1)+1;
                    console.log(document.getElementsByTagName('button'))
                    d[index].click()
                    document.getElementsByTagName('button')[3].click()
            }
            var loop=setInterval(()=>{
                if(document.querySelector("#d2l_form > div > div > div.dco.d2l-quiz-question-autosave-container")){fg(document.querySelector("#d2l_form > div > div > div.dco.d2l-quiz-question-autosave-container"),clearInterval(loop))}
            },1000)
            console.log('2')
        }catch(err){
            console.log(err)
        }
        },1000)
        console.log('3')
    }
})
