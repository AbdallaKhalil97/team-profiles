const Manager = require('../libraries/managerClass');

test ('getRole', () => {
    const testValue = 'Manager';
    const e = new Manager("timbo", 7777, "timbo@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test('getOffice', () => {
    const testValue = '11';
    const e = new Manager("timbo", 7777, "timbo@hotmail.com", testValue);
    expect(e.getOffice()).toBe(testValue);
});