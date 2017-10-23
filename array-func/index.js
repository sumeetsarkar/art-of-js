(function(context) {

  function demoForEach(items, func) {
    // Use of Arrow function
    items.forEach(func || (item => console.log(item)));
  }
  
  function demoFilter(items, func) {
    // Use of Arrow function
    return items.filter(func || (item => item.type === 'veg'));
  }

  function demoMap(items) {
    return items.map(item => {
      // Use of template string literals
      item.name = `chopped: ${item.name}`;
      return item;
    });
  }

  function demoReduce(bread, fillings, sauce) {
    const initial = { sandwich: {
      bread: bread,
      sauce: sauce,
      fillings: []
    }};

    return fillings.reduce((res, item) => {
      res.sandwich.fillings.push(item.name);
      return res;
    }, initial);
  }

  function demo() {
    console.log('\n\nARRAY FUNCTIONS');

    const breads = [
      'Wheat bread',
      'Honey oat bread',
    ];

    const sauces = [
      'Mayo',
      'Mustard',
      'Mint'
    ];

    const fillings = [
      {
        'name': 'Cheese',
        'type': 'veg'
      },
      {
        'name': 'Cucumber',
        'type': 'veg'
      },
      {
        'name': 'Tomatoes',
        'type': 'veg'
      },
      {
        'name': 'Chicken',
        'type': 'non-veg'
      },
      {
        'name': 'Lettuce',
        'type': 'veg'
      }
    ];

    console.log('Available Ingredients -----------------');
    console.log('Breads -----------------');
    demoForEach(breads);
    console.log('Fillings ---------------');
    demoForEach(fillings);
    console.log('Sauces -----------------');
    demoForEach(sauces);
    
    const bread = demoFilter(breads, b => b === 'Wheat bread');
    const sauce = demoFilter(sauces, b => b === 'Mustard');

    const vegFillings = demoFilter(fillings);
    const choppedFillings = demoMap(vegFillings);

    console.log('Final Ingredients -----------------');
    demoForEach(bread);
    demoForEach(vegFillings, f => console.log(f.name));
    demoForEach(sauce);

    /**
     * Expected output
     * {
     *  sandwich: {
     *    bread: '...',
     *    fillings: [ item1, item2, ...]
     *    sauce: [...]
     *  }
     * }
     */

    const sandwich = demoReduce(bread, choppedFillings, sauce);

    console.log('Here is your Sandwich! -----------------');
    console.log(sandwich);

    reduceExampleExtra();
  };

  function reduceExampleExtra() {
    const input = [
      {
        id: '1234',
        'name': 'John Doe',
        'age': 27,
      },{
        id: '5678',
        'name': 'James Bond',
        'age': 31,
      },
    ];
    const output = input.reduce((acc, emp) => {
      // Use of object destructuring
      const { name, age } = emp;
      // Use of object literals
      acc[emp.id] = { name, age };
      return acc;
    }, {});

    console.log(input);
    console.log(output);
  }

  (context || this).demoLibs['array-func'] = demo;
})(window);
