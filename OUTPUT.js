location.host.split('.').map(e=>{
    return[...(e.match(/\w+/gi)||[])].map(e=>{
        var l=/[ a-zA-Zw]/gi,n=/[0-9]/gi
        var arr=[]
        var lc,lcc=1,st='',lcd
        e.split('').forEach(char=>{
            lcd=lc
            //console.log(lc,char)
            if(lc){
                if(lc!=char)(
                //console.log('reset:',lc,char),
                //console.log(l.test(lc),n.test(lc),lc,'reset',lc,char),
                lc=lc?l.test(lcd)?lcd:(console.log(lc,lcd),'\\d'):"",
                lc.length&&(lcc==1?
                (arr.push(`(${lc})`)):
                (arr.push(`${lcd}{${lcc}}`)))
                ,lcc=1);
            else (lcc++,console.log('none'));
            }
            lc=char
        })
        return arr
    })
})
