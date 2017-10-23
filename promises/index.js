(function(context) {

  function demo() {
    console.log('\n\nPROMISES');

    const timeoutPromise = () => new Promise((resolve, reject) => { setTimeout(resolve, 1000) });
    
    timeoutPromise()
      .then(() => console.log('Yo!'));

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
