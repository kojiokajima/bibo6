export const guest = {
  email: "guest@mail.com",
  firstName: "Guest",
  lastName: "User",
  photoUrl: "",
  phoneNumber: 123123,
  platforms: ["LinkedIn", "Indeed", "Wantedly", "Company Website"],
  skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Redux", "MySQL", "PostgreSQL", "MongoDB", "Node.js", "express", "python"],
  companies: [
    {
      name: "bibo6 Inc",
      position: "Front End Developer",
      platforms: ["LinkedIn", "Wantedly"],
      questions: ["What is your favorite language?", "How old are you?"],
      requiredSkills: ["JavaScript", "React", "Redux"],
      preferedSkills: ["Node.js", "GraphQL"],
      minSalary: 600000,
      maxSalary: 800000,
      salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
      status: "In Process", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
      memo: "One of the best company in the world",
      isStared: true,
    },
    {
      name: "bibo8 Inc",
      position: "Back End Developer",
      platforms: ["LinkedIn"],
      questions: ["What is your favorite burger?", "How old is your laptop?", "HOHO"],
      requiredSkills: ["JavaScript", "Next.js"],
      preferedSkills: ["Node.js"],
      minSalary: 4000,
      maxSalary: null,
      salaryUnit: "/ month", // "/ year", "/ month", or "/ hour"
      status: "Applied", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
      memo: "Required a lot and challenging but looks great",
      isStared: true,
    },
  ]
}
