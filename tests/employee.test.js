const Employee = require("../lib/employee");

test("Should create a new employee object if provided valid arguments", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Should successfully set employee info", () => {
    const name = "Leah"
    const id = "268459"
    const email = "ileahd96@gmail.com"
    const employee = new Employee(name, id, email)
    expect(employee.name).toBe(name)
    expect(employee.id).toBe(id)
    expect(employee.email).toBe(email)
})