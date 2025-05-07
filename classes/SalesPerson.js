require("./Employee.js")

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
}

module.exports = {
    SalesPerson,
}