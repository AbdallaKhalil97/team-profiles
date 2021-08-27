const Engineer = require('../libraries/engineerClass');

test('getRole', () => {
    const testValue = 'Engineer';
    const e = new Engineer("tim", 7777, "tim@hotmail.com", "github");
    expect(e.getRole()).toBe(testValue);
});

test('getGithub', () => {
    const testValue = 'github';
    const e = new Engineer("tim", 7777, "tim@hotmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});