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

  function printNameDestructParams({ title, firstName, lastName }) {
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
    printNameDestructParams(name);
    printAddress(addr);

    // array destructuring
    const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [mon, tue, wed, ...restOfWeek] = arr;
    console.log(mon);
    console.log(tue);
    console.log(wed);
    console.log(restOfWeek);

    const [first, second, ...restOfNumbers] = [1, 2, 3, 4, 5];
    console.log(first);
    console.log(second);
    console.log(restOfNumbers);
  };

  (context || this).demoLibs['destruct'] = demo;
})(window);
