(function(context) {

  function demo() {
    console.log('\n\nOBJECT LITERALS');

    const employee = {
      id: '1234',
      name: {
        title: 'Dr.',
        firstName: 'Strange',
        lastName: ''
      },
      address: {
        street: '890',
        locality: 'Fifth Avenue',
        city: 'Manhattan',
        state: 'New York',
      }
    };

    // Use of object destructuring
    const { title, firstName, lastName } = employee.name;
    const name = `${title} ${firstName} ${lastName}`;
  
    const { street, locality, city, state } = employee.address;
    const address = `${street} ${locality} ${city} ${state}`;
  
    // Use of object literals
    const employeeShort = {
      name,
      address,
      id: employee.id,
    };
  
    console.log(employee);
    console.log(employeeShort);
  }

  (context || this).demoLibs['object-literals'] = demo;
})(window);
