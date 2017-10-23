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
  };

  (context || this).demoLibs['arrow-func'] = demo;
})(window);
