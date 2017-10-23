(function(context) {
  function multiplesOf2(x) {
    return x % 2 === 0;
  }

  function traverse(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++)
      result.push(func(arr[i]));
    return result;
  }

  function demo() {
    console.log('\n\nFUNCTIONAL PROGRAMMING');
    const arr = [1,2,3,4,5,6,7,8];
    let result = traverse(arr, multiplesOf2);
    console.log(result);
    result = traverse(arr, function (x) {
      return x * x;
    });
    console.log(result);
    result = traverse(arr, (x) => 10 * x );
    console.log(result);
  };

  (context || this).demoLibs['func-prog'] = demo;
})(window);
