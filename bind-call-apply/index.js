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
  }

  function demo() {
    console.log('\n\nBIND CALL APPLY');
    bindDemo();
    callDemo();
    applyDemo();
    // real world apply/ call demo
  };

  (context || this).demoLibs['bind-call-apply'] = demo;
})(window);
