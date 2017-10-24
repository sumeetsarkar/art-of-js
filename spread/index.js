(function(context) {

  function basicSpread() {
    const name = {
      name: {
        title: 'Dr.',
        firstName: 'Strange',
        lastName: '',
      }
    };

    const address = {
      address: {
        street: '890',
        locality: 'Fifth Avenue',
        city: 'Manhattan',
        state: 'New York',
      }
    };

    // This is object spread
    const employee2 = {
      ...name,
      ...address,
      id: 1234,
    };
    console.log(employee2);

    // This is object literal and not object spread
    const employee = {
      name,
      address,
      id: 1234,
    };
    console.log(employee);

    const arr1 = [1, 2, 3, 4];
    const arr2 = [10, 20, 30, 40];
    // spread
    const arrMerged = [...arr1, ...arr2];

    console.log(arrMerged);
  }

  function functionSpread() {
    // regular stuff
    print('John', 'Doe');

    // function spread
    const arrName = ['John', 'Doe'];
    print(...arrName);

    const a = 'John';
    const b = 'Doe';
    // now this is interesting, guess the output
    print(...[...a,...b]);
  }

  function print(firstName, lastName) {
    console.log(`Hey ${firstName} ${lastName}`);
  }

  function rest() {
    const colors = ['red', 'green', 'blue', 'yellow', 'brown'];
    // rest
    const [ first, second, ...restOfColors ] = colors;
    console.log(first);
    console.log(second);
    console.log(restOfColors);
  }

  function demo() {
    console.log('\n\nSPREAD');
    basicSpread();
    functionSpread();
    rest();
  };

  (context || this).demoLibs['spread'] = demo;
})(window);
