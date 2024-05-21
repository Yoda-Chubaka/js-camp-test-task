const salaries={
    Progger: {
        salary: 1000,
        tax: "15%"
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
        name: "Masha",
        specialization: "Progger"
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

function calculateTeamFinanceReport(salaries, team) {
    let report = {
        totalBudgetTeam: 0,
    };

    for (let specialization in salaries) {
        report[`totalBudget${specialization}`] = 0;
    }

    for (let item of team) {
        if (item.specialization in salaries) {
            const salary = salaries[item.specialization].salary;
            const taxPercent = parseInt(salaries[item.specialization].tax);
            const salaryWithTax = Math.trunc(salary * (1 + taxPercent / 100));
            report.totalBudgetTeam += salaryWithTax;
            report[`totalBudget${item.specialization}`] += salaryWithTax;
        }
    }
    return report;
}

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