//Example - https://codepen.io/jh3y/pen/opNYWy

var $ = (function () {
  //chaining - Ensure all methods return context to be chained.
  //window available? nodejs vs web client
  //conflict resolution for '$'
  //array methods, object methods, collections

  class myLibrary {
    constructor() {
    }
    debounce(cb, T) {
      let timer;
      return function () {
        const ctx = this, args = arguments;
        clearTimeout(timer); //Keep clearing timeout for every event.
        timer = setTimeout(function () {
          cb.apply(ctx, args); //Only gets exxecuted if there was no event in the last 'T' ms.
        }, T);
      }
    }

    throttle(cb, T) {
      let flag = true;
      return function () {
        const ctx = this, args = arguments;
        if (flag) { //first time and after every 'T' ms this flag will be true
          cb.apply(ctx, args);
          flag = false;
          setTimeout(() => {
            flag = true;
          }, T);
        }
      }
    }

    flatten = (data, depth) => { //Flatten based on the depth
      const output = [];
      if (!depth) depth = 1;
      function flattenHelper(data, currDepth, maxDepth) {
        if (currDepth <= maxDepth) {
          if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
              flattenHelper(data[i], currDepth + 1, maxDepth);
            }
          } else if (typeof data === 'object') {
            for (let prop in data) {
              if (data.hasOwnProperty(prop)) {
                flattenHelper(data[prop], currDepth + 1, maxDepth);
              }
            }
          } else {
            output.push(data);
          }
        } else {
          output.push(data);
        }
      }
      flattenHelper(data, 0, depth);
      return output;
    }
    /*sample Input -> { 'var1': 1, 'var2': 2, 'var3': { 'a': 10, 'b': ['1', '2'] }, 'var4': 4 };
    sample Output -> "{"var1":1,"var2":2,"var3":{"a":10,"b":["1","2"]},"var4":4}"*/
    stringify = (data) => { //stringify JSON to object.
      if (typeof data !== 'object')
        throw 'data is not valid.';
      let output = '';
      //return string
      function stringifyHelper(data) {
        if (typeof data === "string" || typeof data === "boolean" || typeof data === "number") {
          output = `${output}${data}`;
        } else if (Array.isArray(data)) {
          output = output + "["
          for (let i = 0; i < data.length; i++) {
            stringifyHelper(data[i]);
            output = i === data.length - 1 ? output : output + ","
          }
          output = output + "]"
        } else if (typeof data === "object") {
          output = output + "{";
          let maxLength = Object.keys(data).length;
          for (const [i, [key, value]] of Object.entries(Object.entries(data))) {
            output = `${output}"${key}":`;
            stringifyHelper(value);
            output = parseInt(i) === maxLength - 1 ? output : output + ","
          }
          output = output + "}"
        }
      }
      stringifyHelper(data);
      return output;
    }
    parse = (str) => { //string to object.
      //return obj;
    }
  }
  return new myLibrary();
  //export default myLibrary;
})();