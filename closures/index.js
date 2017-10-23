(function(context) {

  function successCallback(data) {
    return function() {
      const minimumAge = 21;
      data = JSON.parse(data);
      if (data.age < minimumAge) {
          return `Deny User - Age less than ${minimumAge}`;
      }
      return 'Allow User';
    }
  }

  function longRunningTask(url, success, failure) {
    if(url) {
      return success('{\"name\":\"John Doe\",\"age\":27}');
    } else {
      return failure(404, 'no resource found');
    }
  }

  function failureCallback(error, reason) {
    return function() {
      console.log(`${error} - ${reason}`);
    }
  }

  function demo() {
    console.log('\n\nCLOSURES');
    const returnVal = longRunningTask('sample-url', successCallback, failureCallback);
    console.log(returnVal());
  };

  (context || this).demoLibs['closures'] = demo;
})(window);
