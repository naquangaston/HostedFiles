var ands=[...document.querySelectorAll('.d2l-rowshadeonhover-selected-static')]
var info={}
ands.forEach(e=>{
    var question=e.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML.replace('<d2l-html-block html="<p>','').replace('</p>"></d2l-html-block>','')
    let ans=e.children[1].children[0].children[0].children[0].children[0].children[0].innerHTML.replace('<d2l-html-block html="<p>','').replace('</p>"></d2l-html-block>','')
    info[question]=ans
})
localStorage.ans=JSON.stringify(info)
info=JSON.parse(localStorage.ans)
var q=document.querySelectorAll('.d2l-quiz-question-autosave-container')
q.forEach((e,____)=>{
    var question=e.children[0].children[6].children[0].children[0].children[0].children[0].outerHTML.replace('<d2l-html-block html="<p>','').replace('</p>"></d2l-html-block>','')
    var ans_=[...e.getElementsByClassName('d2l-rowshadeonhover')].map(_=>_.children[1].children[0].children[0].children[0].children[0].children[0].children[0].outerHTML.replace('<d2l-html-block html="<p>','').replace('</p>"></d2l-html-block>',''))
    let ans=info[question]
    if(ans&&ans_.indexOf(ans)>0){
        setTimeout(()=>{
            console.log('Found',question,ans,ans_.indexOf(ans))
        e.getElementsByClassName('d2l-rowshadeonhover')[ans_.indexOf(ans)].click()
        },100*____)
    }
})