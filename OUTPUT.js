console.log(location.host)
var d='https://apps.gwinnett.k12.ga.us/dca/student/dashboard'.split('.').map(e=>{
    return[...(e.match(/\w+/gi)||[])].map(e=>{
		console.log('--map')
        var l=/[ a-zA-Zw]/gi,n=/[0-9]/gi
        var arr=[]
        var lc=e[0],lcc=1,st='',lcd
		
		var cd=char=>{
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
        }
        ;[...e.split(''),''].splice(1).forEach(char=>{
			//console.log(lc,char)
			var l=/[a-zA-Z]/gi,n=/\d/gi
			lc==char?(lcc++):((l.test(lc)||n.test(lc))&&(arr.push(lcc==1?`${lc}`:`${lc}{${lcc}}`)),l.test(lc)&&(arr.push(lcc==1?`${lc}`:`${lc}{${lcc}}`)),console.log(lc,char,lcc,l.test(lc),n.test(lc)),lcc=1);
			lc=char
		})
        return [arr.join(''),e]
    })
})
console.log(d)
