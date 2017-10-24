(function(context) {

  const personJohnDoe = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    getFullName: function() {
      console.log(`${this.firstName} ${this.lastName}`);
    }
  }

  const personJamesBond = {
    firstName: 'James',
    lastName: 'Bond',
  };

  function print(shouldIndent) {
    const lb = shouldIndent ? '\n' : '';
    console.log(`${this.firstName} ${lb}${this.lastName}, ${lb}${this.age}`);
  }

  function greet(language, firstName, lastName) {
    let greet = 'Hello';
    if (language === 'es') {
      greet = 'Hola';
    }
    console.log(`${greet}, ${firstName} ${lastName}`);
  }

  function bindDemo() {
    console.log('\nBIND ----------');
    print.bind(personJohnDoe)();
    personJohnDoe.getFullName();
    personJohnDoe.getFullName.bind(personJamesBond)();
    const printJohnDoeWithIndent = print.bind(personJohnDoe, true);
    printJohnDoeWithIndent();
  }

  function callDemo() {
    console.log('\nCALL ----------');
    print.call(personJohnDoe);
    print.call(personJohnDoe, true);
    personJohnDoe.getFullName.call(personJamesBond);
  }

  function applyDemo() {
    console.log('\nAPPLY ----------');
    print.apply(personJohnDoe);
    print.apply(personJohnDoe, [true]);
    greet.apply(this, ['es', 'Sumeet', 'Sarkar']);

    const arr1 = [1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8];
    arr1.push.apply(arr1, arr2)
    console.log(arr1);

    console.log('name: ', getConfig('name'));
    console.log('server timeout: ', getConfig('server', 'timeout'));
  }

  function getConfig() {
    return getConfigWithCountryCode.apply(this, [countryCode, ...Array.from(arguments)]);
  }

  const countryCode = 'uk';
  const config = {
    'us': {
      name: 'United States Of America',
      server: {
        timeout: '300'
      },
    },
    'uk': {
      name: 'United Kingdom',
      server: {
        timeout: '500'
      }
    },
  }

  function getConfigWithCountryCode(countryCode = 'us', key1, key2) {
    const countryConfig = config[countryCode];
    if (key1 && key2)
      return countryConfig[key1] && countryConfig[key1][key2];
    return countryConfig[key1];
  }

  function demo() {
    console.log('\n\nBIND CALL APPLY');
    bindDemo();
    callDemo();
    applyDemo();
  };

  (context || this).demoLibs['bind-call-apply'] = demo;
})(window);
