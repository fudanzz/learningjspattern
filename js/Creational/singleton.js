var SingletonTest = (function () {

    function Singleton(options) {

        options = options || {};
        this.name = "singletonTest";
        this.pointX = options.pointX || 5;
        this.pointY = options.pointX || 10;
    }

    var instance;
    var _static = {

        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;

        }

    }

    return _static;
})();

var singleTest = SingletonTest.getInstance({
    pointX: 11
})

var singleTest2 = SingletonTest.getInstance({
    pointX: 111
})

console.log(singleTest);


console.log(singleTest2);
