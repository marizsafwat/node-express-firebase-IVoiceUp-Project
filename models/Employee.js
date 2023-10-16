class Employee {
  constructor(id, name, email, group, status = null, date = null) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.group = group;
    this.date = date;
    this.status = status;
  }
}

module.exports = Employee;
