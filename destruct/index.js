(function(context) {

  function printAddress(address) {
    const {
      street,
      locality,
      city,
      state } = address;
    console.log(`${street}, ${locality}, ${city}, ${state}`);
  }

  function printName(name) {
    const { title, firstName, lastName } = name;
    console.log(`${title} ${firstName} ${lastName}`);
  }

  function demo() {
    console.log('\n\nDESTRUCTURING');

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

    const { id, name, address: addr } = employee;

    console.log(id);
    printName(name);
    printAddress(addr);
  };

  (context || this).demoLibs['destruct'] = demo;
})(window);
