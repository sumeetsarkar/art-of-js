(function(context) {

  // longRunningTask is a simple function taking url,
  // & callbacks for success and failure
  function longRunningTask(url, success, failure) {
    if(url) {
      return success('{\"name\":\"John Doe\",\"age\":27}');
    } else {
      return failure(404, 'no resource found');
    }
  }

  // successCallback returns another function which can be called later,
  // whilst still having access to data param in successCallback
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

  function failureCallback(error, reason) {
    return function() {
      console.log(`${error} - ${reason}`);
    }
  }

  function demo() {
    console.log('\n\nCLOSURES');
    // returns function from successCallback
    const returnVal = longRunningTask('sample-url', successCallback, failureCallback);
    // prints the data
    console.log(returnVal());
  };

  (context || this).demoLibs['closures'] = demo;
})(window);
