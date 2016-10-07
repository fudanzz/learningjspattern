var newObject = {};

var newObject = Object.create(null);

var newObject = new Object();

newObject.name = 'newone';

newObject['age'] = 23;

// 3. Object.defineProperty
Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(newObject);
