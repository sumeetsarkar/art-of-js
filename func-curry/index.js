(function(context) {

  function multiply(a, b) { return a * b; }

  function demo() {
    console.log('\n\nFUNCTION CURRYING');

    const twice = multiply.bind(this, 2);
    const thrice = multiply.bind(this, 3);

    console.log(twice(10));
    console.log(thrice(10));
  };

  (context || this).demoLibs['func-curry'] = demo;
})(window);
