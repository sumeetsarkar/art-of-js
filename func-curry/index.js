(function(context) {

  function multiply(a, b) {
    return a * b;
  }

  function greet(language, person) {
    const greet = language === 'es' ? 'Hola' : 'Hello';
    console.log(`${greet} ${person.fname} ${person.lname}`);
  }

  function goodbye(language) {
    return function(person) {
      const goodbye = language === 'ru' ? 'Dasvidaniya' : 'Good bye';
      console.log(`${goodbye} ${person.fname} ${person.lname}`);
    }
  }

  function demo() {

    const johnSnow = {
      fname: 'John',
      lname: 'Snow'
    };
    
    // curried function call
    goodbye('ru')(johnSnow);
    // or
    const goodbyeInEnglish = goodbye('en');
    const goodbyeInRussian = goodbye('ru');

    goodbyeInEnglish(johnSnow);
    goodbyeInRussian(johnSnow);

    // regular function call
    greet('es', johnSnow);

    // curried using bind
    const greetInEnglish = greet.bind(this, 'en');
    const greetInSpanish = greet.bind(this, 'es');

    greetInEnglish(johnSnow);
    greetInSpanish(johnSnow);

    // also few other functions curried with bind
    const twice = multiply.bind(this, 2);
    const thrice = multiply.bind(this, 3);
    
    console.log(twice(5));
    console.log(thrice(10));
  }

  (context || this).demoLibs['func-curry'] = demo;
})(window);
