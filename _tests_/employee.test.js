const Employee = require('..\lib\employee.js');


//write some expect toBe tests for the employee class
//needs name, id, email, getName(), getId(), getEmail(), getRole() methods.
//returns employee. 
test ('starting employee line of questioning', () => {
    const drone = new Employee();
    expect(typeof(drone)).tobe('object'); //idk my expectations are pretty low and I'm tired.
});