class Employee {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employee.setEmployees(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }

  static getEmployees() {
    return Employee.#allEmployees;
  }

  static setEmployees(employee) {
    Employee.#allEmployees.push(employee);
  }

  //   static getTotalPayroll() {
  //     let total = 0;
  //     let employeeArr = Employee.getEmployees()
  //   }
}

module.exports = {
  Employee,
};
