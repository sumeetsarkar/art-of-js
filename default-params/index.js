(function(context) {

  function greetWithoutDefaultParams(name, language) {
    switch(language || 'en') {
      case 'en': console.log(`Hello ${name}`); break;
      case 'es': console.log(`Hola ${name}`); break;
    }
  }

  function greetWithoutDefaultParamsCheckWithArguments(name, language) {
    // example of strict check
    if (arguments.length < 2) return;
    switch(language) {
      case 'en': console.log(`Hello ${name}`); break;
      case 'es': console.log(`Hola ${name}`); break;
    }
  }

  // function accepts param language with default value 'en'
  function greetWithDefaultParams(name, language = 'en') {
    switch(language) {
      case 'en': console.log(`Hello ${name}`); break;
      case 'es': console.log(`Hola ${name}`); break;
    }
  }

  function demo() {
    console.log('\n\nDEFAULT PARAMS');

    greetWithDefaultParams('John Doe');
    greetWithDefaultParams('John Doe', 'es');

    greetWithoutDefaultParams('James Bond');
    greetWithoutDefaultParams('James Bond', 'es');

    greetWithoutDefaultParamsCheckWithArguments('John Wick');
    greetWithoutDefaultParamsCheckWithArguments('John Wick', 'es');
  };

  (context || this).demoLibs['default-params'] = demo;
})(window);
