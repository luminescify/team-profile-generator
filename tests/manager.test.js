const Manager = require("../lib/manager");

test("Should create a new manager object if provided valid arguments", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})

test("Should successfully set manager info", () => {
    const name = "Leah"
    const id = "268459"
    const email = "ileahd96@gmail.com"
    const officeNumber = "560"
    const manager = new Manager(name, id, email, officeNumber)
    expect(manager.name).toBe(name)
    expect(manager.id).toBe(id)
    expect(manager.email).toBe(email)
    expect(manager.officeNumber).toBe(officeNumber)
})