const { Employee } = require("./Employee");
class Manager extends Employee {
  #employeesManaged;
  constructor(department, employeesManaged, name, position, salary, isHired) {
    super(name, position, salary, isHired);
    this.department = department;
    this.#employeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  addEmployeeManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = {
  Manager,
};
