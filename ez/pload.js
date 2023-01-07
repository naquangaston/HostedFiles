var NavMenu = document.getElementById('NavMenu')||document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0]
var pages = [
    ['new.html', 'Home'],
    ['commet.html', 'Send Review'],
    ['about.html', 'About'],
    ['settings.html', 'Settings'],
    ['login.html', 'Login/Signup'],
    ['links.html', 'Links'],
    ['todo.html', 'ToDo List']
]
const [nil] = [(function () {
    var [_0xi52so, _0xs87py, _0xn38rk, _0xh93dl, _0xn68bx, _0xf11de] = ["\u0066\u006f\u0072\u0045\u0061\u0063\u0068", "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u0068\u0072\u0065\u0066", "\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074", "\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064", "\u0061\u0070\u0070\u0065\u006e\u0064"]


    pages[_0xi52so](([a, b]) => {
        var _0xr78iw = document[_0xs87py]('_0xr78iw')
        var _0xk13mq = document[_0xs87py]('a')
        _0xk13mq[_0xn38rk] = a
        _0xk13mq[_0xh93dl] = b, _0xr78iw[_0xn68bx](_0xk13mq)
        NavMenu[_0xf11de](_0xr78iw)
    })
})()]