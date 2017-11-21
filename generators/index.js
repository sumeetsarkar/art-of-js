(function(context) {
  
  function *foo(x) {
    yield 1;
    yield 2;
    yield x;
  }

  function *bar(x) {
    const y = 10 * (yield (x + 2));
    const z = yield (y / 5);
    return (x + y + z);
  }

  function demo() {
    console.log('\n\nGENERATORS');

    const iter = foo(3);
    console.log(iter.next()); // { value:1, done:false }
    console.log(iter.next()); // { value:2, done:false }
    console.log(iter.next()); // { value:3, done:false }
    console.log(iter.next()); // { value:undefined, done:true }

    for (const v of foo(10)) {
      console.log(v);
    }

    const iterBar = bar(100);
    console.log(iterBar.next());    // { value:102, done:false }
    console.log(iterBar.next(5));   // { value:10, done:false }
    console.log(iterBar.next(30));  // { value:180, done:true }
  };

  (context || this).demoLibs['generators'] = demo;
})(window);
    