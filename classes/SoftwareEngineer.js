const { Employee } = require("./classes/Employee")

class SoftwareEngineer extends Employee {
    #programmingLanguages
    constructor(name, position, salary, isHired, programmingLanguages) {
        super(name, position, salary, isHired);
        this.#programmingLanguages = programmingLanguages;
    }
    get programmingLanguages() {
        return this.#programmingLanguages;
    }

    set programmingLanguages(language) {
        this.#programmingLanguages = language;
    }



    
}

module.exports = {
    SoftwareEngineer,
}