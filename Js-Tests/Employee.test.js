const Employee = require("../libraries/employeeClass");

test('Get employee object', () => {
    const e = new Employee("jim");
    expect(typeof (e)).toBe("object");
});

test('getName', () => {
    const testValue = "jim";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('getID', () => {
    const testValue = "8888";
    const e = new Employee("jim", testValue);
    expect(e.getID()).toBe(testValue);
});

test('getEmail', () => {
    const testValue = "jim@hotmail.com";
    const e = new Employee("jim", 8888, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole', () => {
    const testValue = 'Employee';
    const e = new Employee("jim", 8888, "jim@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});
