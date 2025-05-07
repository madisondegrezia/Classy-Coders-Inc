class Employee {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary, isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    //Employee.#allEmployees.push(this);
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

  static getTotalPayroll() {
    let total = 0;
    let employeeArr = Employee.getEmployees();
    for (let i = 0; i < employeeArr.length; i++) {
      total += employeeArr[i].getSalary();
    }
    return total;
  }
}

module.exports = {
  Employee,
};
