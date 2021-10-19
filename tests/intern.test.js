const Intern = require("../lib/intern");

test("Should create a new intern object if provided valid arguments", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
})

test("Should successfully set intern info", () => {
    const name = "Leah"
    const id = "268459"
    const email = "ileahd96@gmail.com"
    const school = "DePaul University"
    const engineer = new Intern(name, id, email, school)
    expect(engineer.name).toBe(name)
    expect(engineer.id).toBe(id)
    expect(engineer.email).toBe(email)
    expect(engineer.school).toBe(school)
})