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




function calculateTeamFinanceReport(salaries, team) {
  const proffNames = Object.keys(salaries);
  let proffesions = new Map();
  let dept = {};
  let value = 0;

  for (let i = 0; i < team.length; i++) {
    let specialization = team[i].specialization;
    proffNames.forEach(proffesion => {
      if (specialization === proffesion) {
        value = salaries[proffesion]['salary'] || 0;
        if (!dept[proffesion]) {
          proffesions.set(proffesion, 0);
          dept[proffesion] = 0;
        }
        dept[proffesion] = value;
        let v = proffesions.get(proffesion);
        value = v + value;
        proffesions.set(proffesion, value);
      }
    });
  }
  return proffesions
}

console.log(Array.from(calculateTeamFinanceReport(salaries, team).entries()));


function totalMembers(teams, selectedTeam) {
     return teams.filter(team => team === selectedTeam)?.length;
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