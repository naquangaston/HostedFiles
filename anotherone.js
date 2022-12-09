var { argv, mainModule } = require('process')
var path = mainModule.path
var fs = require("fs")
var res=[]


var keys_=[
    [5100,'e'],//throw key
    [1100,'q'],//roll key
    [100,'1','click left','space']//useur weapon and jump
]
var time=0;
var LongTime=keys_[0]
var shortTime=keys_[2]
//console.log({LongTime,shortTime,keys_:keys_.sort((a,b)=>b[0]-a[1])})
while(time<LongTime){
    keys.filter(e=>{
        return console.log(e)
    })
    time+=shortTime;
}

//process.exit()
var FireIndex=2
var FoodIndex=1
var TorchIndex=3
var AttackKey='q'
var UseFireballKeys=[FireIndex,'click left','e']
var UseFoodKeys=[FoodIndex,'2']
var HoldNonKeys=[2,1,1]
var maxTime=5100//5.2 seconds
var minWaitTime=32
var time=0;
var count=0
function send(key){return Array.isArray(key)?key.map(_key=>`{${_key} down}{${_key} up}`).join(''):`{${key} down}{${key} up}`;}
count++
res.push(`\nsend ${send(UseFireballKeys)}\nsleep ${minWaitTime}`)
time+=minWaitTime
count++
res.push(`send ${send(UseFoodKeys)}\nsleep ${minWaitTime}`)
time+=minWaitTime
while(time<maxTime){
    count++
    res.push(`send ${send(AttackKey)}\nsleep ${minWaitTime}`)
    //res.push(`send ${send(AttackKey)}`)
    //res.push(`sleep ${minWaitTime}`)
    time+=minWaitTime
}


fs.writeFileSync(`${path}/ahk_.txt`, ('if(banana2=1)\n{'+res.join('\n}\nif(banana2=1)\n{\n')+'\n}'))