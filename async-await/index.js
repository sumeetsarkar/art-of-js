(function(context) {

    async function asyncDemo() {
      console.log('Fetch initiating');
      await fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=art%20o%20fjs')
        .then(x => x.json())
        .then(x => console.log(x));
      console.log('Fetch responsed successfully');
    }

    function getPromise(value) {
      return new Promise((resolve, reject) =>
                                setTimeout(() =>
                                  resolve(value), 1000) );
    }

    async function asyncPromise() {
      // await can be only used in async functions
      console.log('asyncPromise initiated');
      const result1 = await getPromise(100);
      console.log('Result 1 recevied');
      const result2 = await getPromise(200);
      console.log('Result 2 recevied');
      console.log(result1 + result2);
      console.log('After result is printed');
    }

    function demo() {
      console.log('\n\nASYNC AWAIT DEMO');
      asyncDemo();
      console.log('After asyncDemo is called first time');
      asyncDemo();
      console.log('After asyncDemo is called second time');
      asyncPromise();
    };
  
    (context || this).demoLibs['async-await'] = demo;
  })(window);
  