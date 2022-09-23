window.sPinner=function(){

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var snipping=false,autospin=true,delay=80,t={},reset=false
function snipe(){
    snipping=true;
    input.keyDown(32);setTimeout(()=>{input.keyUp(32);snipping=false},delay)
    for(let i=0;i<delay;i++){
        setTimeout(()=>{input.mouse(t.x,t.y)},i)
    }
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return t={
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function getRandomXY(){
    return {x:randomIntFromInterval(0,innerWidth),
            y:randomIntFromInterval(0,innerHeight)}
}
var sp=setInterval(()=>{
    var k=getRandomXY();!snipping&&autospin&&(input.mouse(k.x,k.y))
},50)
canvas.addEventListener('mousemove',function(e){getMousePos(canvas,e)})
canvas.addEventListener('click',function(e){getMousePos(canvas,e)})
canvas.addEventListener('mousedown',function(e){getMousePos(canvas,e)})
var sniper=true
        window.addEventListener('keydown', function (e) { const key = e.key; if(sniper&&(key=='r'||key=='f')){snipe()}});
  window.addEventListener('mousedown', function (e) { const key = e.key; if(autospin){reset=true;autospin=false}});
}
