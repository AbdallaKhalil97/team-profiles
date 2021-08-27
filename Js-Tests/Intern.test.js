const Intern = require('../libraries/internClass');

test('getRole', () => {
    const testValue = 'Intern';
    const e = new Intern("karen", 7777, "karen@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test('getSchool', () => {
    const testValue = "MCC";
    const e = new Intern("karen", 7777, "karen@hotmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});