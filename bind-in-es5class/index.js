(function (context) {

    function Driver(name) {
        this.name = name;
    }

    Driver.prototype.displayScore = function (score) {
        console.log("Score for " + this.name + ": " + score);
    };


    Driver.prototype.getScore = function () {
        setTimeout(function () {
            this.displayScore(10);
        }.bind(this), 1000);

        // another approach here without using this is:
        // var that = this;
        // setTimeout(function () {
        //     that.displayScore(10);
        // }, 1000);

        // another approach using arrow operator
        //setTimeout(() => this.displayScore(10), 1000);

    };

    function demo() {
        new Driver("Test driver").getScore();
    }

    (context || this).demoLibs['bind'] = demo;
})(window);
