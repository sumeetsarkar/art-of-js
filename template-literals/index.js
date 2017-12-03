(function(context) {

  // tagged literal function receives two parameters
  // tokens - string tokens, around the placeholders
  // values - list of values to replace in string literal placeholders
  function capitalize(tokens = [], ...values) {
    return tokens.reduce((acc, x, i) => {
      return acc + x + `${values[i] || ''}`.toUpperCase();
    }, '');
  }

  function demo() {
    console.log('\n\nTEMPLATE LITERALS');
    const person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 27
    }

    const { firstName, lastName, age } = person;

    const output = `
      First Name: ${firstName}\n
      Last Name: ${lastName}\n
      Age: ${age}
    `;
    console.log(output);

    const outputTaggedTemplate = capitalize`
      First Name: ${firstName}\n
      Last Name: ${lastName}\n
      Age: ${age}
    `;
    console.log(outputTaggedTemplate);
  };

  (context || this).demoLibs['template-literals'] = demo;
})(window);
