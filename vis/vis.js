const minDelay=20
var rising=true,dipping,lastTime=0
var _last2
var dipArray=[]
const showlines=false;
const allowDownloads=false
var _maxH_=256
console.log(
(((_maxH_+_maxH_+240)/3)/_maxH_)
)
var _avg_=0
function something(json){
	var bass=json.bassCounts
var lt=0;
var cSharp=bass.map(e=>{
    var waitTime=e.currentTime-(lt||e.currentTime);lt=e.currentTime
    const {bassArray,bassTimeAvg}=e;
    if(bassArray.length){
        var wt=bassArray[0].currentTime,lt_=bassArray[0].currentTime;
        console.log(bassArray)
        return bassArray.map(f=>{
            lt=0
            wt=f.currentTime-(lt_||f.currentTime);lt_=f.currentTime
            return `//longBass=true;\nif(active){\ntransform.localScale = Vector3.Lerp(transform.localScale, transform.localScale+(transform.localScale*${bassTimeAvg}));Task.Deley(${wt.toFixed(3)});\n}`
        }).join('\n')+'//longBass=false;'
        lt_=0
    }else return`if(active){\ntransform.localScale = Vector3.Lerp(transform.localScale, transform.localScale+(transform.localScale*${bassTimeAvg}));Task.Deley(${waitTime.toFixed(3)});\n}\n`
}).join('\n')
_download('_test_.cs',cSharp)
}
//'https://jsfiddle.net/Laoct5fm/'
var mt=false;
var lastH=0;
var _last=0
function msToTime(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}



var _arr=[]
let _0x='trans'
var _1x,_3x=50
var _max=false;
var Tout
var canT
var Iscr
function* Gen(arr){
while(true&&arr.length){
	for(let i=0;i<arr.length;i++){
		yield arr[i];
	}
}	
}
function AddE(target){
	var evs={
/*UiEvent, Event:The loading of a media is aborted*/
abort:function Listener(){
const args=arguments
let ev="abort"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A page has started printing, or if the print dialogue box has been closed*/
afterprint:function Listener(){
const args=arguments
let ev="afterprint"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*AnimationEvent:A CSS animation has completed*/
animationend:function Listener(){
const args=arguments
let ev="animationend"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*AnimationEvent:A CSS animation is repeated*/
animationiteration:function Listener(){
const args=arguments
let ev="animationiteration"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*AnimationEvent:A CSS animation has started*/
animationstart:function Listener(){
const args=arguments
let ev="animationstart"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A page is about to be printed*/
beforeprint:function Listener(){
const args=arguments
let ev="beforeprint"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:Before a document is about to be unloaded*/
beforeunload:function Listener(){
const args=arguments
let ev="beforeunload"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*FocusEvent:An element loses focus*/
blur:function Listener(){
const args=arguments
let ev="blur"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser can start playing the media (has buffered enough to begin)*/
canplay:function Listener(){
const args=arguments
let ev="canplay"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser can play through the media without stopping for buffering*/
canplaythrough:function Listener(){
const args=arguments
let ev="canplaythrough"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The content of a form element has changed*/
change:function Listener(){
const args=arguments
let ev="change"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:An element is clicked on*/
click:function Listener(){
const args=arguments
let ev="click"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:An element is right-clicked to open a context menu*/
contextmenu:function Listener(){
const args=arguments
let ev="contextmenu"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*ClipboardEvent:The content of an element is copied*/
copy:function Listener(){
const args=arguments
let ev="copy"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*ClipboardEvent:The content of an element is cutted*/
cut:function Listener(){
const args=arguments
let ev="cut"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:An element is double-clicked*/
dblclick:function Listener(){
const args=arguments
let ev="dblclick"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:An element is being dragged*/
drag:function Listener(){
const args=arguments
let ev="drag"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:Dragging of an element has ended*/
dragend:function Listener(){
const args=arguments
let ev="dragend"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:A dragged element enters the drop target*/
dragenter:function Listener(){
const args=arguments
let ev="dragenter"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:A dragged element leaves the drop target*/
dragleave:function Listener(){
const args=arguments
let ev="dragleave"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:A dragged element is over the drop target*/
dragover:function Listener(){
const args=arguments
let ev="dragover"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:Dragging of an element has started*/
dragstart:function Listener(){
const args=arguments
let ev="dragstart"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*DragEvent:A dragged element is dropped on the target*/
drop:function Listener(){
const args=arguments
let ev="drop"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The duration of a media is changed*/
durationchange:function Listener(){
const args=arguments
let ev="durationchange"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A media has reach the end ("thanks for listening")*/
ended:function Listener(){
const args=arguments
let ev="ended"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*ProgressEvent, UiEvent, Event:An error occurs while loading an external file*/
error:function Listener(){
const args=arguments
let ev="error"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*FocusEvent:An element gets focus*/
focus:function Listener(){
const args=arguments
let ev="focus"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*FocusEvent:An element is about to get focus*/
focusin:function Listener(){
const args=arguments
let ev="focusin"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*FocusEvent:An element is about to lose focus*/
focusout:function Listener(){
const args=arguments
let ev="focusout"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:An element is displayed in fullscreen mode*/
fullscreenchange:function Listener(){
const args=arguments
let ev="fullscreenchange"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:An element can not be displayed in fullscreen mode*/
fullscreenerror:function Listener(){
const args=arguments
let ev="fullscreenerror"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*HashChangeEvent:There has been changes to the anchor part of a URL*/
hashchange:function Listener(){
const args=arguments
let ev="hashchange"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*InputEvent, Event:An element gets user input*/
input:function Listener(){
const args=arguments
let ev="input"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:An element is invalid*/
invalid:function Listener(){
const args=arguments
let ev="invalid"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*KeyboardEvent:A key is down*/
keydown:function Listener(){
const args=arguments
let ev="keydown"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*KeyboardEvent:A key is pressed*/
keypress:function Listener(){
const args=arguments
let ev="keypress"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*KeyboardEvent:A key is released*/
keyup:function Listener(){
const args=arguments
let ev="keyup"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:An object has loaded*/
load:function Listener(){
const args=arguments
let ev="load"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:Media data is loaded*/
loadeddata:function Listener(){
const args=arguments
let ev="loadeddata"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:Meta data (like dimensions and duration) are loaded*/
loadedmetadata:function Listener(){
const args=arguments
let ev="loadedmetadata"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*ProgressEvent:The browser starts looking for the specified media*/
loadstart:function Listener(){
const args=arguments
let ev="loadstart"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A message is received through the event source*/
message:function Listener(){
const args=arguments
let ev="message"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The mouse button is pressed over an element*/
mousedown:function Listener(){
const args=arguments
let ev="mousedown"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The pointer is moved onto an element*/
mouseenter:function Listener(){
const args=arguments
let ev="mouseenter"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The pointer is moved out of an element*/
mouseleave:function Listener(){
const args=arguments
let ev="mouseleave"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The pointer is moved over an element*/
mousemove:function Listener(){
const args=arguments
let ev="mousemove"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The pointer is moved onto an element*/
mouseover:function Listener(){
const args=arguments
let ev="mouseover"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:The pointer is moved out of an element*/
mouseout:function Listener(){
const args=arguments
let ev="mouseout"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*MouseEvent:A user releases a mouse button over an element*/
mouseup:function Listener(){
const args=arguments
let ev="mouseup"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*WheelEvent:Deprecated. Use the wheel event instead*/
mousewheel:function Listener(){
const args=arguments
let ev="mousewheel"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser starts to work offline*/
offline:function Listener(){
const args=arguments
let ev="offline"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser starts to work online*/
online:function Listener(){
const args=arguments
let ev="online"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A connection with the event source is opened*/
open:function Listener(){
const args=arguments
let ev="open"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*PageTransitionEvent:User navigates away from a webpage*/
pagehide:function Listener(){
const args=arguments
let ev="pagehide"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*PageTransitionEvent:User navigates to a webpage*/
pageshow:function Listener(){
const args=arguments
let ev="pageshow"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*ClipboardEvent:Some content is pasted in an element*/
paste:function Listener(){
const args=arguments
let ev="paste"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A media is paused*/
pause:function Listener(){
const args=arguments
let ev="pause"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The media has been started or is no longer paused*/
play:function Listener(){
const args=arguments
let ev="play"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The media is playing after having been paused or stopped for buffering*/
playing:function Listener(){
const args=arguments
let ev="playing"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*PopStateEvent:The window's history changes*/
popstate:function Listener(){
const args=arguments
let ev="popstate"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser is downloading media data*/
progress:function Listener(){
const args=arguments
let ev="progress"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The playing speed of the media is changed*/
ratechange:function Listener(){
const args=arguments
let ev="ratechange"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:The document view is resized*/
resize:function Listener(){
const args=arguments
let ev="resize"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A form is reset*/
reset:function Listener(){
const args=arguments
let ev="reset"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:An element's scrollbar is being scrolled*/
scroll:function Listener(){
const args=arguments
let ev="scroll"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:Something is written in a search field*/
search:function Listener(){
const args=arguments
let ev="search"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:Skipping to a media position is finished*/
seeked:function Listener(){
const args=arguments
let ev="seeked"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:Skipping to a media position is started*/
seeking:function Listener(){
const args=arguments
let ev="seeking"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:User selects some text*/
select:function Listener(){
const args=arguments
let ev="select"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A <menu> element is shown as a context menu*/
show:function Listener(){
const args=arguments
let ev="show"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser is trying to get media data, but data is not available*/
stalled:function Listener(){
const args=arguments
let ev="stalled"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*StorageEvent:A Web Storage area is updated*/
storage:function Listener(){
const args=arguments
let ev="storage"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:A form is submitted*/
submit:function Listener(){
const args=arguments
let ev="submit"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The browser is intentionally not getting media data*/
suspend:function Listener(){
const args=arguments
let ev="suspend"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The playing position has changed (like when the user fast forwards to a different point in the media)*/
timeupdate:function Listener(){
const args=arguments
let ev="timeupdate"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The user opens or closes the <details> element*/
toggle:function Listener(){
const args=arguments
let ev="toggle"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*TouchEvent:The touch is interrupted*/
touchcancel:function Listener(){
const args=arguments
let ev="touchcancel"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*TouchEvent:A finger is removed from a touch screen*/
touchend:function Listener(){
const args=arguments
let ev="touchend"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*TouchEvent:A finger is dragged across the screen*/
touchmove:function Listener(){
const args=arguments
let ev="touchmove"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*TouchEvent:A finger is placed on a touch screen*/
touchstart:function Listener(){
const args=arguments
let ev="touchstart"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*TransitionEvent:A CSS transition has completed*/
transitionend:function Listener(){
const args=arguments
let ev="transitionend"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*UiEvent, Event:A page has unloaded (for <body>)*/
unload:function Listener(){
const args=arguments
let ev="unload"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The volume of the media has changed (includes setting the volume to "mute")*/
volumechange:function Listener(){
const args=arguments
let ev="volumechange"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*Event:The media has paused but is expected to resume (like when the media pauses to buffer more data)*/
waiting:function Listener(){
const args=arguments
let ev="waiting"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			},
/*WheelEvent:The mouse wheel rolls up or down over an element*/
wheel:function Listener(){
const args=arguments
let ev="wheel"
	return {
		event:target.addEventListener(ev,...args),
		remove:function(){
					return target.removeEventListener(ev,...args)
					}
				}
			}
}
	var list={
  "UiEvent": ["abort", "beforeunload", "error", "load", "resize", "scroll", "select", "unload"],
  "Event": ["abort", "afterprint", "beforeprint", "beforeunload", "canplay", "canplaythrough", "change", "durationchange", "ended", "error", "fullscreenchange", "fullscreenerror", "input", "invalid", "load", "loadeddata", "loadedmetadata", "message", "offline", "online", "open", "pause", "play", "playing", "progress", "ratechange", "resize", "reset", "scroll", "search", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "toggle", "unload", "volumechange", "waiting"],
  "AnimationEvent": ["animationend", "animationiteration", "animationstart"],
  "FocusEvent": ["blur", "focus", "focusin", "focusout"],
  "MouseEvent": ["click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseup"],
  "ClipboardEvent": ["copy", "cut", "paste"],
  "DragEvent": ["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop"],
  "ProgressEvent": ["error", "loadstart"],
  "HashChangeEvent": ["hashchange"],
  "InputEvent": ["input"],
  "KeyboardEvent": ["keydown", "keypress", "keyup"],
  "WheelEvent": ["mousewheel", "wheel"],
  "PageTransitionEvent": ["pagehide", "pageshow"],
  "PopStateEvent": ["popstate"],
  "StorageEvent": ["storage"],
  "TouchEvent": ["touchcancel", "touchend", "touchmove", "touchstart"],
  "TransitionEvent": ["transitionend"]
}

var type=(Object.keys(list).filter(e=>list[e].includes(arguments[1]))).pop()
//if(!type){throw `Listener ${arguments[1]} is not a valid or unsupported event type`}
	console.log(typeof arguments[0],arguments[0].constructor.name)
	return evs
}


function deCodebassArray({bassCounts}){
function groupBy(objectArray, property) {
   return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
         acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
   }, {});
}
bassCounts=groupBy(bassCounts,'bassTimeAvg')
Object.keys(bassCounts).map(e=>[e,bassCounts[e]]).forEach(e=>{
	console.log(e[0])
  e[1].forEach(({bassArray,bassTimeAvg,frame,currentTime})=>{
  //console.log({bassArray,bassTimeAvg,frame,currentTime})
	var duration=bassArray.length?bassArray[bassArray.length-1].stamp:0
  var baseLength=bassArray.length
	console.log(e[0],'@',currentTime,'has',baseLength,'hits','and last',duration,'ms')
  })
})
}
function _download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
var bassTimeAvg=0
var currentBassTime=0;
var bassCounts=[]
var dif=[]
var lastSt,bassArray=[]
class Time{
	#start_=NaN
	constructor(){
		this.ok=false
	}
	stop(){
		this.ok=false
	}
	start(){
		this.ok=true
		return this.#start_=performance.now()
	}
	get stamp(){
		return this.ok=performance.now()-this.#start_
	}
}
var time=new Time()
var bassTime=new Time()
var bassCount=0;
//(function(){})()
(function(){
	var [l,d,f,B,n]=["\u0070\u0072\u006f\u0074\u006f\u0074\u0079\u0070\u0065","\u0073\u0068\u0075\u0066\u0066\u006c\u0065","\u006c\u0065\u006e\u0067\u0074\u0068","\u0066\u006c\u006f\u006f\u0072","\u0072\u0061\u006e\u0064\u006f\u006d"];var s={set F(_){return Array},get F(){return Array},set E(_){return Math},get E(){return Math}};s["F"][l][d]=function x(arr= []){for (let O =(arr[f]? arr: this)[f]- 1; O >0; O--){const H =s.E[B](s.E[n]()* (O+ 1));const a =(arr[f]? arr: this)[O];(arr[f]? arr: this)[O]= (arr[f]? arr: this)[H];(arr[f]? arr: this)[H]= a};return (arr[f]? arr: this)}
})()

const Array_ =(function(){
	var [T,J,N,o,m]=["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073","\u006a\u006f\u0069\u006e","\u0066\u0072\u006f\u006d","\u006c\u0065\u006e\u0067\u0074\u0068","\u0070\u0075\u0073\u0068"];var U={set d(_){return Array},get d(){return Array}};return class Array_ extends Array {constructor(){super()}async async(func,method){var V=['map','forEach','filter'];if(!V[T](method))throw (`${method} is not V:\n[${V[J]('- ')}] are V`);if(method=='map'){var D=U.d[N](this);for(let w=0;w<D[o];w++){D[w]=await func(D[w],w)}return D}if(method=='forEach'){for(let w=0;w<this[o];w++){await func(this[w])}}if(method=='filter'){let M=[];for(let w=0;w<this[o];w++){if(await func(this[w]))M[m](this[w])}return M}}}
})()
var html=""
var vsA = false;
function getColors() {
  var color = "red",
    ct = "white";
  var arr = [];
  for (let i = 0; i <= 100; i++) {
    var pm = [10, -10];
    var px = [
      `${Math.floor(Math.random() * (pm[0] - pm[1] + 1)) + pm[1]}px`,
      `${Math.floor(Math.random() * (pm[0] - pm[1] + 1)) + pm[1]}px`
    ];
    var degm = [-10, 10];
    var deg = `${
      Math.floor(Math.random() * (degm[0] - degm[1] + 1)) + degm[1]
    }deg`;
    arr.push(
      `${i}% {color:${color}; transform: translate(${px}) rotate(${deg}); }`
    );
    color = color == "red" ? ct : "red";
  }
  console.log(arr.join("\n"));
}
function getColors2() {
  var arr = [];
  for (let i = 0; i <= 100 / 20; i++) {
    var pm = [10, -10];
    var px = [
      `${Math.floor(Math.random() * (pm[0] - pm[1] + 1)) + pm[1]}px`,
      `${Math.floor(Math.random() * (pm[0] - pm[1] + 1)) + pm[1]}px`
    ];
    var degm = [-10, 10];
    var deg = `${
      Math.floor(Math.random() * (degm[0] - degm[1] + 1)) + degm[1]
    }deg`;
    arr.push(`${i * 20}% {transform: translate(${px}) rotate(${deg}); }`);
  }
  console.log(arr.join("\n"));
}
getColors();
// https://www.myinstants.com/media/sounds/ylvis-cute.mp3 //
var cint;
var avg = 0,
  lim = [],
  fcolor = null;
var oldV = 0,
  newV = 0;

window.it = 0;
var current_C = document.body.style.backgroundColor;
window.onload = function () {
	var Idex=Gen([])
	var Iimg=document.getElementById('MyImg')
	var uploadButton=document.getElementById('UploadSave');
	function t_obj(obj,p,c){let _=c||{};for(let a in obj){
		let b=(p?p+'_':"")+a;typeof obj[a]=="object"?t_obj(obj[a],b,_):_[b]=obj[a]}return(_)}
	async function getContentSha({owner,repo,path}){
		console.log({owner,repo,path})
		var {data:{sha}}=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner,
  repo,
  path
});return sha
	}
  async function upLoadFile(repo,content, filename, path, b64 = false, ) {
	var sha
		try{sha=await getContentSha({owner,repo,path:`${path?path+'/':""}${filename}`})}catch(e){}
        const fileOutput = b64 ? content : Base64.encode(content);
		var _d={
            owner,
            repo,
            path: `${path?path+'/':""}${filename}`,
            message: `feat: Added ${filename} programatically`,
            content: fileOutput,
            committer: {
                name: `Octokit Bot`,
                email: 'hello@dennisokeeffe.com',
            },
            author: {
                name: 'Octokit Bot',
                email: 'hello@dennisokeeffe.com',
            },
        };
		sha?_d.sha=sha:null;
        const {data} = await octokit.rest.repos.createOrUpdateFileContents(_d);
        console.log(sha?'updated':"created", filename, 'Path:', path ? path + '/' : "")
        return data
    }
	function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
	/*
	const { Octokit, App }=window.Kit_
	console.log('Getting config')
	let config={
		auth:localStorage.auth||''
	}
	console.log('Logging in')
	function generateVar(c_,cc=15) {
        var c = `${makeid2(cc)}`;//"_0x" + makeid2(1) + makeid1(2) + makeid2(2)
		var toReturn
		try{
		toReturn=(!used[c]&&!keywords.includes(c)) ? (used[c] = c) : generateVar(c,cc)
		}catch(err){
		toReturn =generateVar(c,cc+1)
		}
		return toReturn
    }
	var newToken=generateVar();
	octokit = new Octokit({ auth: config.auth });
	var data={};
	try{data=(await octokit.rest.users.getAuthenticated()).data}catch(err){console.warn(err)}
	var{login}=data
	var loggedIn=!!login;*/
	uploadButton.onclick=async function(){
		let this_=this
		if(!logginIn){
			prompt(`Enter a valid ghp token to continue`,'ghp_***')
			try{data=(await octokit.rest.users.getAuthenticated()).data}catch(err){alert(err.message)}
		}
		login=data.login;
		var files=new Array_();
		files.push(...(window.Gfiles||[]))
		this_.innerText='loading Files'
		await files.async('map',async (file)=>{
			await upLoadFile('HostedFiles',top, `${data.name} - .${ext}`, 'audios/'+token, true).then(e=> e ,e_ => console.warn(e_.message||e_))
			const {name}=file;
			const reader = new FileReader();
			var content=await new Promise(a=>{
				reader.addEventListener("load", () => {
				a(reader.result.replace(/^data:([a-zA-Z]+)\/(png|jpg|[A-Za-z]+);base64,/, ""))}, false);reader.readAsDataURL(file);
			})
			
		})
	}
  function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function getEventLocation(element,event){
		var pos = getElementPosition(element);
    
    return {
    		x: (event.pageX - 0),
      	y: (event.pageY - 0)
    };
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
  
  var myRainbow = new Rainbow();
  current_C = document.body.style.backgroundColor;
  // Elements
  var myText = document.getElementById("myText");
  var MySelec = document.getElementById("MySelec");
  var audio = document.getElementById("audio");
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  var target = myText;

  var WIDTH = (canvas.width = window.innerWidth);
  var HEIGHT = (canvas.height = window.innerHeight);

  var ctx = canvas.getContext("2d");

  var mouseX = 0;
  var mouseY = 0;
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Local File //
  var localF={f:function(){}}
  var fbtn = document.getElementById("file");
	var ibtn = document.getElementById("file2");
  var Shuffle = document.getElementById("Shuffle");
  audio.addEventListener("ended",function(..._){
    localF.f(...arguments)
  })
  function n(e, a, s = audio) {
    if(allowDownloads){something({bassCounts})
		_download(`JSON - ${window.nowPlaying} - JSON.txt`,JSON.stringify({bassCounts}))
		_download(`JSON-Array - ${window.nowPlaying} - JSON.txt`,JSON.stringify({_arr}));
    _download(`Dip-Array - ${window.nowPlaying} - JSON.txt`,JSON.stringify({dipArray}));}

        let b;
		_arr=[]
		currentBassTime=0
		window.nowPlaying=e.name
        console.log(document.title="Now playing:", e.name);
				dipArray=[],lastTime=0
				dipping=true
					rising=false
				bassCounts=[];bassArray=[];
        (s.src.length?URL.revokeObjectURL(s.src):null,s.src = URL.createObjectURL(e)),
          s.load(),
          a &&
            (localF.f=function(...c){a(...c)});
      }
  fbtn.addEventListener("click", function () {
    var file = document.createElement("input");
    file.multiple = true;
    file.type = "file";
    file.accept = "audio/*";
    file.click();
    file.onchange = function () {
      var files = this.files;
			window.Gfiles=files
			function _f(){MySelec.innerHTML='';[...files].forEach((e,i)=>{
				var opt=document.createElement('option')
				opt.value=i;
				opt.innerText=e.name
				MySelec.append(opt)
			});}
      var curF = 0;
      var prevF = -1;
      var nextF = 1;
      var backSkip = false;
      function f() {
        if (curF < 0) curF = files.length - 1;
        if (curF == files.length) curF = 0;
        nextF = curF + 1;
        prevF = curF - 1;
        if (prevF < 0) prevF = files.length - 1;
        if (nextF < 0) prevF = files.length - 1;
        if (prevF == files.length) prevF = 0;
        if (nextF == files.length) nextF = 0;
				MySelec.selectedIndex=curF
        n(files[curF], function () {
          console.log("Ended");
          if (!backSkip) {
            curF++;
          }
          f();
        });
      }
      function back() {
        if (audio.currentTime > 1000) {
          audio.currentTime = 0;
        } else {
          backSkip = true;
          curF--;
          f();
          audio.currentTime = audio.duration;
        }
      }
      function playAll() {
        _f();f();
				Shuffle.onclick=function(){
					files=[...files].shuffle();
					MySelec.innerHTML=''
					curF=0;
					playAll()
				}
      }
			MySelec.onchange=function(e){
				curF=this.value
				audio.currentTime = audio.duration
				f()
			}
      playAll();
      //audio.src = URL.createObjectURL(files[0]);
      audio.oncanplaythrough = function () {
        audio.play();
      };
      audio.style.display = "block";
      if (!vsA) {
        visualize(0, audio);
        vsA = true;
      }
    };
  });
	AddE(ibtn).click(function(){
		var file = document.createElement("input");
    file.multiple = true;
    file.type = "file";
    file.accept = "image/*";
    file.click();
    file.onchange=function(){
			var files = this.files;
			window.Ifiles=files
			var f=[];
			for(let i=0;i<files.length;i++){
				f.push(URL.createObjectURL(files[i]))
			}
			Idex=Gen(f)
		}
	})
	ibtn.addEventListener

  // Desktop Audio //
  var captureBtn = document.getElementById("capture");
  captureBtn.addEventListener("click", async function () {
    var desktopStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    });
    video.src = desktopStream;
    video.muted = true;
    audio.style.display = "none";
    visualize(1, desktopStream);
  });

  // Microphone //
  var cbx = document.getElementById("cbx");
  canvas.addEventListener("mousemove",function(e){
	  var eventLocation = getEventLocation(this,e);
    var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // If transparency on the image
    if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
 				coord += " (Transparent color detected, cannot be converted to HEX)";
    }
    
    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
    // Draw the color and coordinates.
    html=[coord,hex];
},false);
  async function mic() {
    var micStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    audio.style.display = "none";
    visualize(2, micStream);
    cbx.addEventListener("change", async function () {
      var micMode = cbx.checked;
      if (micMode) {
        audio.style.display = "none";
        visualize(2, micStream);
      }
    });
  }

  mic();

  function visualize(from, source) {
    var context = new AudioContext();
    var select = document.querySelector("select#mode");
    if (0 == from) {
      var src = context.createMediaElementSource(source);
    } else if (1 == from) {
      var src = context.createMediaStreamSource(source);
    } else if (2 == from) {
      var src = context.createMediaStreamSource(source);
    }
    console.log(src);
    var analyser = context.createAnalyser();
    var listen = context.createGain();

    src.connect(listen);
    listen.connect(analyser);
    if (from == 0) {
      analyser.connect(context.destination);
    }
    analyser.fftSize = 2 ** 12;
    var frequencyBins = analyser.fftSize / 2;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    let dataArray = new Uint8Array(bufferLength);
    var dataHistory = [];

    renderFrame();

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      analyser.smoothingTimeConstant = 0;

      if (from == 2) {
        if (cbx.checked) {
          listen.gain.setValueAtTime(1, context.currentTime);
        } else {
          listen.gain.setValueAtTime(0, context.currentTime);
        }
      } else {
        listen.gain.setValueAtTime(1, context.currentTime);
      }

      var WIDTH = (canvas.width = window.innerWidth);
      var HEIGHT = (canvas.height = window.innerHeight);
      var sliceWidth = (WIDTH * 1.0) / bufferLength;

      var x = 0;
			var maxH=0;
      var scale = Math.log(frequencyBins - 1) / WIDTH;

      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
			lastH=0

      let mouseHz =
        -10 / Math.log(mouseX / WIDTH) / (Math.log(441000 / 2 - 1) / WIDTH);
      avg = 0;
      let myarr = [],
        lgn = bufferLength;
      let ignore = 1;

      if (select.value == "bar-graph") {
        analyser.getByteFrequencyData(dataArray);
        myarr = [...dataArray].splice(0, 10);
				lgn=bufferLength;
        for (var i = 0; i < bufferLength; i++) {
          let x = Math.floor(Math.log(i) / scale);
          barHeight = dataArray[i];
					maxH=[barHeight,maxH].sort((a,b)=>a-b).pop()
          avg += barHeight;
					let bh=barHeight
			let bha=barHeight>=((_avg_/100)*_maxH_)
			
          barHeight /= 2;
					if(lastH<=bh){lastH=bh}
					else if(bha&&showlines){
						lastH=0;
						ctx.fillStyle = "rgba(0,0,0,0)";
						ctx.fillRect(0, 0, WIDTH, HEIGHT);
						ctx.lineWidth = 1;
						ctx.strokeStyle = "#fff";
						ctx.beginPath();
						ctx.moveTo(x, 0);
						ctx.lineTo(x, HEIGHT);
						ctx.stroke();
						ctx.closePath();
						ctx.fillText(`${bh} H\n${i} In`,
                x,
                HEIGHT/2
            );
					}
          /* var r = barHeight + (25 * (i/bufferLength));
                             var g = 250 * (i/bufferLength);
                             var b = 50; */
          var h = 300 - (barHeight * 2 * 300) / 255;
          var s = 100 + "%";
          var l = barHeight * 2 < 64 ? (barHeight * 2 * 50) / 64 + "%" : "50%";
          ctx.fillStyle = "hsl(" + h + "," + s + "," + l + ")";
          // ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(
            x,
            HEIGHT - (barHeight * HEIGHT) / 255,
            Math.floor(Math.log(i + 1) / scale) -
              Math.floor(Math.log(i) / scale),
            HEIGHT
          );
        }
      } 
			else if (select.value == "waveform") {
        analyser.getByteFrequencyData(dataArray);
        let start = 0; //dataArray.find(a=> Math.max.apply('',dataArray));
        analyser.getByteTimeDomainData(dataArray);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        x = 0;
        lgn = bufferLength;
        for (var i = start; i < bufferLength; i++) {
          var v = dataArray[i] / 128.0;
          var y = (v * HEIGHT) / 2;
          avg += y;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          x = i * sliceWidth; //frequencyBins/analyser.sampleRate;
        }
        ctx.lineTo(WIDTH, ((dataArray[0] / 128.0) * HEIGHT) / 2);
        ctx.stroke();
      } 
			else if (select.value == "rgb-bar-graph") {
        //ctx.globalCompositeOperation = "hue";
        analyser.getByteFrequencyData(dataArray);
        var imgData = ctx.createImageData(WIDTH, HEIGHT);
        // for (var i = 0; i < bufferLength; i += 2) {
        //   let x = i / 3 *  WIDTH / bufferLength;
        //   var r = dataArray[i];
        //   var g = dataArray[i + 1];
        //   var b = dataArray[i + 2];

        lgn = imgData.data.length / 4;
        myarr = [...imgData.data].splice(0, 20);
        for (j = 0; j < imgData.data.length; j += 4) {
          let y = j / 4 / WIDTH;
          let x = Math.floor((((j / 4) % WIDTH) * bufferLength) / WIDTH);
          avg +=
            255 - dataArray[x + 1] <= y * (255 / HEIGHT) ? dataArray[x + 1] : 0;
          imgData.data[j + 0] =
            255 - dataArray[x] <= y * (255 / HEIGHT) ? dataArray[x] : 0;
          imgData.data[j + 1] =
            255 - dataArray[x + 1] <= y * (255 / HEIGHT) ? dataArray[x + 1] : 0;
          imgData.data[j + 2] =
            255 - dataArray[x + 2] <= y * (255 / HEIGHT) ? dataArray[x + 2] : 0;
          imgData.data[j + 3] = 255;
        }
        //ctx.putImageData(imgData, 0, 0);
        // ctx.fillStyle = "rgb(" + r + "," + 0 + "," + 0 + ")";
        // ctx.fillRect(x, HEIGHT - (r * HEIGHT / 255), 1, HEIGHT);
        // ctx.fillStyle = "rgb(" + 0 + "," + g + "," + 0 + ")";
        // ctx.fillRect(x, HEIGHT - (g * HEIGHT / 255), 1, HEIGHT);
        // ctx.fillStyle = "rgb(" + 0 + "," + 0 + "," + b + ")";
        // ctx.fillRect(x, HEIGHT - (b * HEIGHT / 255), 1, HEIGHT);
        // }
      } 
			else {
        if (typeof a) {
          analyser.getByteFrequencyData(dataArray);
          if (window.it % 2 == 0)
            dataHistory.unshift(new Uint8Array(dataArray));
          window.it++;
        }
        if (dataHistory.length > 32) {
          dataHistory.pop();
        }
        for (let j = 0; j < dataHistory.length; j++) {
          for (var i = 0; i < bufferLength; i++) {
            let x = Math.floor(Math.log(i) / scale);
            barHeight = dataHistory[j][i];
            /* var r = barHeight + (25 * (i/bufferLength));
                               var g = 250 * (i/bufferLength);
                               var b = 50; */
            var h = 300 - (barHeight * 300) / 255;
            var s = 100 + "%";
            var l = barHeight < 64 ? (barHeight * 50) / 64 + "%" : "50%";
            ctx.fillStyle = "hsl(" + h + "," + s + "," + l + ")";
            // ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            avg += (HEIGHT / dataHistory.length) * j;
            ctx.fillRect(
              x,
              (HEIGHT / dataHistory.length) * j,
              Math.floor(Math.log(i + 1) / scale) -
                Math.floor(Math.log(i) / scale),
              HEIGHT * j +
                1 / dataHistory.length -
                (HEIGHT * j) / dataHistory.length
            );
          }
        }
      }
			let totale_=avg;
      avg /= lgn;
	    var hasSrc=MyImg.src.replace((function(s){return function(){return[s.origin,s.pathname.split('/').reverse().splice(1).reverse().join('/'),'/'].join('')}}((new URL(location.href))))(),'')!='null'
      ctx.textBaseline = "bottom";
      ctx.textAlign = "left";
      ctx.font = "16px Courier";
      ctx.fillStyle = "white";
      var avg2 = 0,
        bass,
        avg3,avg4
      if (select.value == "bar-graph") {
        bass = [dataArray[10], [...dataArray].splice(3, 6)];
				bass[1].forEach((s) => (avg4 += s));
        avg4 /= bass[1].length;
        bass[1].forEach((s) => (avg2 += s));
        avg2 /= bass[1].length;
        avg2 = (avg2 / 255).toFixed(2);
        avg2 -= 1;
        avg2 *= -1;
        avg3 = bass[0];
      } else myarr.forEach((s) => (avg2 += s));
			target.style.display=select.value == "waveform"?"none":"block"
      target.style.animation =`${
              20e3*avg2.toFixed(2)
            }s ease 0s infinite normal none running shakee`
			/*
        avg2 < 0.6
          ? `${avg2.toFixed(2) * 3 * 100 * 18}s ease 0s infinite normal none running shakee`:
      avg2<0.5? `${avg2.toFixed(2) * 3 * 100 * 18}s ease 0s infinite normal none running shakee`
          : avg2<0.4? `${avg2.toFixed(2) * 3 * 100 * 17}s ease 0s infinite normal none running shakee`
          : avg2<0.3? `${avg2.toFixed(2) * 3 * 100 * 16}s ease 0s infinite normal none running shakee`
          :avg2<0.2? `${avg2.toFixed(2) * 3 * 100 * 28}s ease 0s infinite normal none running shakee`
          :`${
              avg2.toFixed(2) * 3 * 100 * 20
            }s ease 0s infinite normal none running shakee`;*/
			
      if (true) {
				Iimg.style.opacity=avg/100
        var numberOfItems = 256;
        var rainbow = new Rainbow();
        rainbow.setNumberRange(1, numberOfItems);
        rainbow.setSpectrum("black", "red");
        var s = "";
        let num=((256 * (avg / 100)) / 2)
        let num10=num*.5
        var hexColour =
          "#" + rainbow.colourAt((num+num10).toFixed(0));

        hasSrc?document.body.style.backgroundColor='black':document.body.style.backgroundColor = select.value == "waveform"?"#" + rainbow.colourAt(0):hexColour;
				//Iimg.src=null
        if (avg3 > 240) {
         if(!canT){
					 canT=true
					 //Iscr=Idex.next().value?(Idex.next().value):null
					 clearTimeout(Tout)
					 Tout=setTimeout(()=>(canT=false),10)
				 } //document.body.style.transition='background-color .3s';
					
					if(!bassTime.ok){
                        clearTimeout(_1x);([...Iimg.classList]).includes(_0x)?_1x=setTimeout(()=>{Iimg.classList.toggle(_0x)},5):(Iimg.classList.toggle(_0x),_1x=setTimeout(()=>{Iimg.classList.toggle(_0x)},_3x))
						Iscr=Idex.next().value?(Idex.next().value):null;
						currentBassTime=source.currentTime;bassTimeAvg=avg2.toFixed(3),bassTime.start()}
          hasSrc?null:document.body.style.backgroundColor = "white";Iimg.src=Iscr
					dif=[time.stamp,lastSt].sort((a,b)=>b-a)
					if((dif[0]-dif[1])<minDelay||lastSt>=time.stamp){
						bassArray.push({
							stamp:time.stamp,
							bassCount,
							currentTime:source.currentTime||0,
							frame:source.currentTime*60
						})
					}else (
						bassTime.ok&&(bassCounts.push({
							currentBassTime,
							currentTime:source.currentTime,
							bassArray,bassTimeAvg,
							frame:source.currentTime*60
																					})),
						bassCount=0,
						bassArray=[],
						bassTimeAvg=0,
						lastSt=(0/0),
						bassTime.stop()
					);
					lastSt=time.stamp
					bassCount++;
					time.start()
        }
				var dif_2=parseInt(avg.toFixed(0))-_last2
				if(Math.abs(dif_2)>60){
					if(dif_2>0&&!rising){
					//console.log([parseInt(avg.toFixed(0)),_last2])
						rising=true
						mt=true,
					_frame=source.currentTime
					//console.log('rising')
					_avg=avg
					_avg2=avg2
					_mst=msToTime(source.currentTime)
					_last=parseInt(avg.toFixed(0))
					}else if(dif_2<0){
					console.log([parseInt(avg.toFixed(0)),_last2])
					if(rising&&!dipping){
					}
					//console.log([parseInt(avg.toFixed(0)),_last2])
					//console.log('Dipping')
					dipping=true;rising=false
					if(mt){
						_arr.push([
						parseInt(_avg.toFixed(0)),
						_frame*60,
						_mst,
						_avg,
						_avg2
					]);
						mt=false;
					}
					}
				}
				_last2=parseInt(avg.toFixed(0))
        myText.innerText = (window.nowPlaying?
														[
					`avg%:${avg.toFixed(0)}`,
					//`T:${((_avg_/100)*_maxH_).toFixed(0)}`,
					`avg2:${avg2.toFixed(2)}`,
					window.nowPlaying,maxH,
					[
						currentBassTime.toFixed(3),
					  source.currentTime&&(source.currentTime.toFixed(3))||'nah'
					].join(' - '),
					bassTimeAvg,
					[...bassArray].map(e=>{
						try{return `${e.stamp.toFixed(0)} - ${(e.currentTime-bassArray[0].currentTime).toFixed(3)} - ${e.currentTime.toFixed(3)} - frame:${e.frame.toFixed(0)}`}
						catch(err){
							return [
								e.stamp.toFixed(0),
								(e.currentTime-bassArray[0].currentTime).toFixed(3),
								e.currentTime.toFixed(3),
								`frame:${e.frame.toFixed(0)}`
							].join(' - ')
						}
					}).join('\n')
				].join('\n'):false)||[
					`avg%:${avg.toFixed(0)}`,
					`style:${target.style.animation}`,
					`avg2:${avg2.toFixed(2)}`,
					html,
					hexColour
				].join('\n');
				_avg_=avg
      }
      /*ctx.fillText(`${mouseHz} Hz`,
                mouseX,
                mouseY
            );*/
    }
  }
};
