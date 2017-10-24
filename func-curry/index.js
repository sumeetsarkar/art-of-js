(function(context) {

  function multiply(a, b) {
    return a * b;
  }

  function greet(language, person) {
    const greet = language === 'es' ? 'Hola' : 'Hello';
    console.log(`${greet} ${person.fname} ${person.lname}`)
  }

  function demo() {

    const twice = multiply.bind(this, 2);
    const thrice = multiply.bind(this, 3);
    
    console.log(twice(5));
    console.log(thrice(10));

    const johnSnow = {
      fname: 'John',
      lname: 'Snow'
    };

    greet('es', johnSnow);

    const greetInSpanish = greet.bind(this, 'es');
    const greetInEnglish = greet.bind(this, 'en');

    greetInSpanish(johnSnow);
    greetInEnglish(johnSnow);
  }

  (context || this).demoLibs['func-curry'] = demo;
})(window);
