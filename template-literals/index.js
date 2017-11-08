(function(context) {

  function capitalize(tokens = [], ...values) {
    return tokens.reduce((acc, x, i) => {
      if (values.length > i)
        return acc + x + `${values[i]}`.toUpperCase();
      return acc;
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
