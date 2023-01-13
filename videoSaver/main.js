const info={}
var toLoad=[
    'name','currentTime'
]
toLoad.forEach(key=>{
    localStorage[key]=localStorage[key]||''
    info[key]=localStorage[key]
})
function formSub(_this=HTMLFormElement){
    const con=this||_this
    if((con) instanceof HTMLFormElement){

    }

}