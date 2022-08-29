//export default CustomLogging; for Exporting
; (function () {
  class CustomLogging {
    /**
     * 
     * @param {String} title Title of the custom log
     */
    constructor(title) {
      this.title = {
        body: title || "---",
        color: "darkgrey",
        size: "1rem"
      };

      this.body = {
        color: "#008f68",
        size: "1rem"
      };
    }
    setTitleBody(title) {
      this.title.body = title
    }

    setTitleStyle({ color, size }) {
      if (color !== undefined) this.title.color = color;
      if (size !== undefined) this.title.size = size;
    }

    setBodyStyle({ color, size }) {
      if (color !== undefined) this.body.color = color;
      if (size !== undefined) this.body.size = size;
    }
    /**
     * 
     * @param {String} body the text body of the log
     */
    log(body = "") {
      // the second line is now the body because the first references the content after the first %c for the title
      console.log(
        `%c${this.title.body} | %c${body}`,
        `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size
        };`,
        `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size
        }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
      );
    }
  }
  const custom = new CustomLogging;
  const _error = new CustomLogging('error');
  _error.setBodyStyle({ color: 'red', size: '2rem' });
  Object.assign(this || arguments[0], { CustomLog: CustomLogging,_error })
}).apply(typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this.encode = {} : (globalThis || self || window || top)) : exports : encode = {}, [typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this.encode = {} : (globalThis || self || window || top)) : exports : encode = {}]);


