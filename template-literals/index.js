(function(context) {

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
  };

  (context || this).demoLibs['template-literals'] = demo;
})(window);
