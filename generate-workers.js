//this page is to create the employee HTML page
const generateWorkers = (team) => {
    // now for the intern card.
    const internCard = (intern) => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>  
                <h3 class="card-title text-light"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group>
                        <li class="list-group item">ID: ${intern.id}</li>
                        <li class="list-group item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group item">School: ${intern.school}</li>
                    </li>
                </ul>
            </div>
        </div>
        `;
        };


const html = [];

html.push(
    team
    .filter((employee) => employee.getRole() === 'Intern')
    .map((intern) => internCard(intern))
    .join('')
);

html.push(
    team
    .filter((employee) => employee.getRole() === 'Engineer')
    .map((engineer) => engineerCard(engineer))
    .join('')
);

html.push(
    team
    .filter((employee) => employee.getRole() === 'Manager')
    .map((manager) => managerCard(manager))
    .join('')
);

return html.join('');



};
