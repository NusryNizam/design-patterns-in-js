class Vehicle {
    constructor(type){
        this.type = type
    }
    print() {
        console.log(`Type: ${this.type}, Make: ${this.make}, Model: ${this.model}`);
    }
    drive() {
        console.log(`__Drive__`);
    }
}

class Car extends Vehicle {
    constructor() {
        super('car')
    }
}

class Bus extends Vehicle {
    constructor(){
        super('bus')
    }
}

// The builder object returns an object with methods which can be chained because the 
// return in those methods are referencing the builder object.

let builderObj = (function() {
    instance = null

    return {
        create(type) {
            switch(type){
                case "car":
                    instance = new Car();
                    break;
                case "bus":
                    instance = new Bus();
                    break;
                default:
                    instance = new Car();
            }

            return this
        },
        make(make) {
            instance.make = make
            return this
        },
        model(model) {
            instance.model = model
            return this
        },
        color(color) {
            instance.color = color
            return this
        },
        build() {
            if(!instance.model || !instance.make) 
                throw Error("Please specify the Model and Make")
            return instance
        }
    }
})()

// chaining methods to create the instance.
let bus = builderObj.create('bus').model('Leyland').make('2021').color('White').build()
console.log(bus)