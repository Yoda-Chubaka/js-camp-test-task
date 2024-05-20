const salaries={
    Progger: { // specialization type 'Progger'
        salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
        tax: "15%" // tax percent; presented as a string with template `{tax}%` where 'tax' is an integer;  min: "0%", max: "99%"
    },
    Tester: {
        salary: 1000,
        tax: "10%"
    },
    Manager: {
        salary: 1000,
        tax: "10%"
    },
    Designer: {
        salary: 600,
        tax: "30%"
    },
    Artist: {
        salary: 1500,
        tax: "15%"
    },
    TeamLead: {
        salary: 1000,
        tax: "99%"
    },
    Architect: {
        salary: 9000,
        tax: "34%"
    }
}

const team = [
    {
        name: "Masha", // name of team member
        specialization: "Progger" // specialization should be picked from `salaries` otherwise member should be ignored in the report
    },
    {
        name: "Vasya",
        specialization: "Tester"
    },
    {
        name: "Taras",
        specialization: "Tester"
    },
    {
        name: "Misha",
        specialization: "Manager"
    },
    {
        name: "Max",
        specialization: "Designer"
    },
    {
        name: "Vova",
        specialization: "Designer"
    },
    {
        name: "Leo",
        specialization: "Artist"
    },
    {
        name: "Alexander",
        specialization: "TeamLead"
    },
    {
        name: "Gaudi",
        specialization: "Architect"
    },
    {
        name: "Koolhas",
        specialization: "Architect"
    },
    {
        name: "Foster",
        specialization: "Architect"
    },
    {
        name: "Napoleon",
        specialization: "General"
    }
]


// // OPTION 1
// function calculateTeamFinanceReport(salaries, team) {
//     let report = {
//         totalBudgetTeam: 0,
//     };

//     // Initialize total budgets for each specialization
//     for (let specialization in salaries) {
//         report[`totalBudget${specialization}`] = 0;
//     }

//     // Calculate total budget for the team
//     for (let member of team) {
//         if (member.specialization in salaries) {
//             let salary = salaries[member.specialization].salary;
//             let taxPercent = parseInt(salaries[member.specialization].tax);
//             let salaryWithTax = Math.floor(salary * (1 + taxPercent / 100));
//             report.totalBudgetTeam += salaryWithTax;
//             report[`totalBudget${member.specialization}`] += salaryWithTax;
//         }
//     }

//     return report;
// }


// OPTION 2
// function calculateTeamFinanceReport(salaries, team){
//  const res = { sumAllSalary: 0 };

//  for (const employee of team) {
//    if (!res.hasOwnProperty(employee.specialization)) {
//      res[employee.specialization] = salaries[employee.specialization].salary;
//    } else {
//      res[employee.specialization] += salaries[employee.specialization].salary;
//    }
//    res.sumAllSalary += salaries[employee.specialization].salary;
//   }

//  return res;
// }


// function calculateTeamFinanceReport(salaries, team){
//   const bySpec = team.reduce((acc, { specialization: spec }) => {
//     if (!Object.hasOwn(acc, spec)) acc[spec] = 0;
//     const { salary, tax } = salaries[spec];
//     const k = 1 + parseFloat(tax) / 100;
//     acc[spec] += salary * k;

//     return acc;
//   }, {});

//   const totalBudgetTeam = Object.values(bySpec).reduce((acc, c) => acc + c);
//   const result = Object.fromEntries(Object.entries(bySpec).map(([key, value]) => ['totalBudget' + key, value]));

//   return { totalBudgetTeam, ...result };
// }



const salaries1 = {
   Manager: { salary: 1000, tax: "10%" },
   Designer: { salary: 600, tax: "30%" },
   Artist: { salary: 1500, tax: "15%" },}
const team1 = [
   { name: "Misha", specialization: "Manager" },
   { name: "Max", specialization: "Designer" },
   { name: "Vova", specialization: "Designer"},
   { name: "Leo", specialization: "Artist"},]
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))



const salaries2 = {
   TeamLead: { salary: 1000, tax: "99%" },
   Architect: { salary: 9000, tax: "34%" },}
const team2 = [
   { name: "Alexander", specialization: "TeamLead" },
   { name: "Gaudi", specialization: "Architect" },
   { name: "Koolhas", specialization: "Architect" },
   { name: "Foster", specialization: "Architect" },
   { name: "Napoleon", specialization: "General" },]
const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))