(function(context) {

  var globalVar = 'global var';
  let globalLet = 'global let';

  function demoVsVar() {
    console.log(demoVarDeclaredLater);
    var demoVarDeclaredLater = 'demo var declared later';

    // console.log(demoLetDeclaredLater); Uncaught ReferenceError: demoVarDeclaredLater is not defined
    let demoLetDeclaredLater = 'demo var declared later';

    for (var i = 0; i < 5; i ++) {
      setTimeout(() => console.log(`value of var i: ${i}`), 100);
    }
    
    for (let j = 0; j < 5; j ++) {
      setTimeout(() => console.log(`value of let i: ${j}`), 100);
    }
  }

  function demo() {
    console.log('\n\nLET CONST VAR');

    globalVar = 'global var changed in method scope';
    console.log(globalVar);
    globalLet = 'global let changed in method scope';
    console.log(globalLet);

    /*
    If a global let is defined again in child scope, will cause error
    Uncaught ReferenceError: globalLet is not defined
      let globalLet = 'global Let';
      console.log(globalLet);
    */

    var demoVar = 'demo var';
    let demoLet = 'global let';
    const demoConst = 'I am constant';

    console.log(demoVar);
    console.log(demoLet);
    console.log(demoConst);

    // demoConst = 'I am constant reassigned'; Uncaught TypeError: Assignment to constant variable.

    demoVsVar();
  };

  console.log(globalVar);
  console.log(globalLet);

  // console.log(demoVar); Uncaught ReferenceError: demoVar is not defined

  (context || this).demoLibs['let-const-var'] = demo;
})(window);
