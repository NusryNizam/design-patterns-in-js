//Implementing an Immediately invoked function which returns an object with a method to get an instance.

let singleton = (function() {
    class NuclearReactor {
        constructor() {
            this.reactorId = Math.random().toString(16); 
        }

        log(msg) {
            console.log(`Reactor ID: ${this.reactorId} - ${msg}`);
        }
    }

    let instance = null;

    return {
        getInstance() {
            if(!instance) {
                instance = new NuclearReactor()
            }

            return instance;
        }
    }
})()

let newInstance = singleton.getInstance()
newInstance.log('Power 1')

let anotherInstance = singleton.getInstance()
anotherInstance.log('Power 2')

// Both instances print the same ID. Therefore, there is only one single instance
// and no other instances are created. 