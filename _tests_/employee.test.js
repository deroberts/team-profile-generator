const Employee = require('..\lib\Employee.js');


//write some expect toBe tests for the employee class
//needs name, id, email, getName(), getId(), getEmail(), getRole() methods.
//returns employee. 
test ('get employee name', () => {
    expect(new Employee('name', 'id', 'email').getName()).toBe('name');

    //idk my expectations are pretty low at this point.
});