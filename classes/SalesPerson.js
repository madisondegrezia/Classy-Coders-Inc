const { Employee } = require("./classes/Employee")

class SalesPerson extends Employee {
    #totalSales
    constructor(name, position, salary, isHired, clients, totalSales) {
        super(name, position, salary, isHired);
        this.clients = clients;
        this.#totalSales = 0;
    }

    getSalesNumbers() {
        return this.#totalSales;
    }

    makeSale(amount) {
        this.#totalSales += amount;
    }

    findClient(client){
        return this.clients.find((c) => c === client) || null;
    }
}

module.exports = {
    SalesPerson,
}