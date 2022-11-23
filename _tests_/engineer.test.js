const Engineer = require('../lib/Engineer.js');

test('get Github account', () => {
 expect(new Engineer('name', 'email', 'github').getGithub()).toBe('github')
 //idk I'm tired.
});