(function(context) {

  function demoSimpleProxy() {
    const target = {};
    const handler = {
      get: function(obj, key) {
        return obj[key];
      },
      set: function(obj, key, value) {
        if (key === 'age' && value < 21)
          throw Error('Age cannot be less than 21');
        else
          obj[key] = value;
      }
    };
    const prObj = new Proxy(target, handler);
    prObj.name = 'John';
    prObj.age = 21;
    // prObj.age = 19;
    console.log(prObj.name);
    console.log(prObj.age);

    // once in proxy target should not be accessed directly
    // here we just want to see what target actually prints
    // target is a regular object just accessed via proxy prObj
    console.log(target);

    // however, a proxy object wraps actual object in target
    // and access proxies in handler
    console.log(prObj);

    // does that mean accessing prObj.handler or prObj.target
    // will give us target and handler? NO.
    console.log(prObj.target); // undefined
    console.log(prObj.handler); // undefined
  }

  function createProxy(target, handler) {
    return new Proxy(target, handler);
  }

  function demoProxyCreator() {
    const myProxyObj = createProxy({}, {
      get: function(obj, key) { return obj[key]; },
      set: function(obj, key, value) { obj[key] = value; }
    });
    myProxyObj.name = 'Johny Boy';
    myProxyObj.language = 'English';
    console.log(myProxyObj.name);
    console.log(myProxyObj.language);
  }

  function demo() {
    console.log('\n\PROXIES');
    demoSimpleProxy();
    demoProxyCreator();
  };

  (context || this).demoLibs['proxies'] = demo;
})(window);
  