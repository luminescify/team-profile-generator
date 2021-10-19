const Manager = require("../lib/intern");

test("Should create a new manager object if provided valid arguments", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})

test("Should successfully set manager info", () => {
    const name = "Leah"
    const id = "268459"
    const email = "ileahd96@gmail.com"
    const officeNumber = "560"
    const engineer = new Intern(name, id, email, officeNumber)
    expect(engineer.name).toBe(name)
    expect(engineer.id).toBe(id)
    expect(engineer.email).toBe(email)
    expect(engineer.officeNumber).toBe(officeNumber)
})