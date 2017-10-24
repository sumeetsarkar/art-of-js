(function(context) {

  function printUpperCase() {
    const self = this;
    console.log(self);
    self.string = self.string.toUpperCase();
    return function() {
      console.log(this); // window this
      console.log(this.string);
      console.log(self.string);
    }
  }

  function printUpperCaseFatArrow() {
    console.log(this);
    this.string = this.string.toUpperCase();
    return () => console.log(this.string);
  }

  function demo() {
    console.log('\n\nARROW FUNCTIONS');

    printUpperCase.call({ string: 'Hello John Doe' })();
    printUpperCaseFatArrow.call({ string: 'Hello John Doe' })();

    const person = {
      firstName: 'John',
      lastName: 'Doe',
      printNameFatArrow: () => `${this.firstName} ${this.lastName}`,
      printNameRegular: function() { return `${this.firstName} ${this.lastName}` },
      printName() { return `${this.firstName} ${this.lastName}` },
    }

    console.log(person.printNameFatArrow());
    console.log(person.printNameFatArrow.bind(person)());
    console.log(person.printNameRegular());
    console.log(person.printName());

    // remember, Arrow functions
    // 1. cannot be used for Generators, 
    // 2. do not get arguments object,
    // 3. cannot be used as constructors,
    // 4. call(), apply(), and bind() will not change the value of this
  };

  (context || this).demoLibs['arrow-func'] = demo;
})(window);
