(function(context) {

  function demo() {
    console.log('\n\nPROMISES');

    // a promise generator function, returning new promise
    // which executes a setTimeout resolving after 1 sec
    const timeoutPromise = () => new Promise((resolve, reject) => { setTimeout(resolve, 1000) });
    
    // simple promise and then
    timeoutPromise()
      .then(() => console.log('Yo!'));

    // promise chaining
    timeoutPromise()
      .then(() => timeoutPromise())
      .then(() => console.log('YoYo!'));

    timeoutPromise()
      .then(() => timeoutPromise())
      .then(() => timeoutPromise())
      .then(() => console.log('YoYoYo!'));
  };

  (context || this).demoLibs['promises'] = demo;
})(window);
