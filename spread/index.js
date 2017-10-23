(function(context) {

  function demo() {
    console.log('\n\nSPREAD');

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
    const arrMerged = [...arr1, ...arr2];

    console.log(arrMerged);
  };

  (context || this).demoLibs['spread'] = demo;
})(window);
