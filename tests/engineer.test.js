const Engineer = require("../lib/engineer");

test("Should create a new engineer object if provided valid arguments", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})

test("Should successfully set engineer info", () => {
    const name = "Leah"
    const id = "268459"
    const email = "ileahd96@gmail.com"
    const github = "https://www.github.com/luminescify"
    const engineer = new Engineer(name, id, email, github)
    expect(engineer.name).toBe(name)
    expect(engineer.id).toBe(id)
    expect(engineer.email).toBe(email)
    expect(engineer.github).toBe(github)
})