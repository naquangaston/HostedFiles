const _7=['\u006c\u0065\u006e\u0067\u0074\u0068','\u006f\u006e','\u0062\u0072','\u006c\u0065\u006e\u0067\u0074\u0068','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0072\u0065\u006d\u006f\u0076\u0065','\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065','\u0069\u0064','\u0061\u0070\u0070\u0065\u006e\u0064','\u0061\u0070\u0070\u0065\u006e\u0064','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0066\u0072\u0065\u0065\u007a\u0065','\u0073\u0074\u0079\u006c\u0065','\u006c\u0065\u006e\u0067\u0074\u0068','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u006e\u0061\u006d\u0065','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e','\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079','\u006c\u0065\u006e\u0067\u0074\u0068','\u0065\u006c\u0065\u006d\u0065\u006e\u0074','\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074'];class element {static br = new element(_2[2]);
    /**
     * @param {string}name HTML tag to be created; 
     * @param {object|CSSStyleDeclaration}obj object of attributes to be added; 
     */constructor(name, obj){this[_5[5]]= (function (){for (let i in arguments[0x0001]){arguments[0x0000][_8[8]](i, arguments[0x0001][i])};return arguments[0x0000]})(document[_27[27]](arguments[0x0000]), arguments[0x0001])};
    /**
     * @param {CSSStyleDeclaration}obj ; 
     * @returns {ThisType}; 
     */style(obj){for (let i in obj){this[_5[5]][_15[15]][i]= obj[i]};return this};
    /**
     * @param {HTMLElement}target element add to children list; 
     * @returns {ThisType}; 
     */append(target){this[_1117[17]][_10[10]](target[_6[6]]|| target);return this};
    /**
     * @param {HTMLElement}target element to append to; 
     * @returns {ThisType}; 
     */appendTo(target){(target[_22[22]]|| target)[_10[10]](this[_20[20]]);return this};
    /**
     * @param {String}event name of event; 
     * @param {Function}a callback for event; 
     * @returns {ThisType}; 
     */on(event, a){ this[_12[12]][_1[1]+event+'']= a; return this };
    /**
     * @param {CSSStyleRule}prop ; 
     * @param {String}value ; 
     * @returns ; 
     */set(prop, value){ this[_6[6]][prop]= value; return this };
    /**
     * Removes element from document; 
     * @returns {ThisType}; 
     */remove(){this[_7[17]][_0x0007[7]]();return this};
    /**
     * return property from element; 
     * @param {string}a prop name; 
     * @returns ; 
     */get(a){ return this[_13[13]][a]};get children(){return new (class {constructor(arr){for (var i = 0x0000; i < arr[_25[25]]; i += 0x0001){this[i]= arr[i]}; ;Object[_24[24]](this, _0[0], {get: function (){return arr[_25[25]]}}); ;Object[_14[14]](this)};item(i){return this[i]!= null ? this[i]: null};namedItem(name){for (var i = 0x0000; i < this[_16[16]]; i += 0x0001){if (this[i][_9[9]]=== name || this[i][_18[18]]=== name){return this[i]}};return null};get toArray(){return [...this]}})([...this[_7[17]][_23[23]]])}
    }