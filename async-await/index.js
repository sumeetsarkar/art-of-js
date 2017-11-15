(function(context) {

    async function asyncFetchDemo() {
      console.log('Fetch async initiating');
      const responsePromise = await fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=art%20o%20fjs')
      const responseJSON = await responsePromise.json();
      console.log(responseJSON);
      console.log('Fetch async responsed successfully');
    }

    function regularFetchDemo() {
      console.log('Fetch regular initiating');
      fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=art%20o%20fjs')
        .then(x => x.json())
        .then(x => console.log(x));
      console.log('Fetch regular responsed successfully');
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
      asyncFetchDemo();
      console.log('After asyncFetchDemo is called');
      regularFetchDemo();
      console.log('After regularFetchDemo is called');
      // asyncPromise();
    };
  
    (context || this).demoLibs['async-await'] = demo;
  })(window);
  