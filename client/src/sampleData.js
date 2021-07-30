export const defaultPlatForms = ["LinkedIn"]
export const defaultSkills = ["HTML", "CSS", "JavaScript", "React", "Next", "Redux", "MySQL", "PostgreSQL", "MongoDB"]
const platformArr = [
  {
    name: "Indeed",
    url: "https://google.com",
    appliedAt: "2021-09-20",
    respondedAt: "2021-09-25",
    isReponded: true,
  },
  {
    name: "Facebook",
    url: "https://google.com",
    appliedAt: "2021-09-21",
    respondedAt: "2021-09-26",
    isReponded: true,
  },
  {
    name: "Wantedly",
    url: "https://google.com",
    appliedAt: "2021-09-22",
    respondedAt: "",
    isReponded: false,
  },
]

export const items1 = [
  {
    name: "CICCC",
    position: "Front End Developer",
    platforms: [...platformArr],
    questions: ["What is you name?", "How old are you?"],
    requiredSkills: ["JavaScript", "React", "Next"],
    preferedSkills: ["JavaScript", "React", "Next"],
    salary: 600000,
    salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
    status: "In Process", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
    memo: "Maybe good company Maybe good company Maybe good company Maybe good companyMaybe good company",
    isStared: false,
  },
  {
    name: "Red Academy",
    position: "Front End Developer",
    platforms: [...platformArr],
    questions: ["What is your parents' name?", "How old are your parents?"],
    requiredSkills: ["JavaScript", "React", "Redux", "MongoDB"],
    preferedSkills: ["JavaScript", "React", "Redux", "MongoDB"],
    salary: 650000,
    salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
    status: "Applied", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
    memo: "Maybe good company",
    isStared: true,
  },
  {
    name: "Langara CollageLangara Collage",
    position: "Front End Developer",
    platforms: [...platformArr],
    questions: ["What is your grand parents' name?", "How old are your grand parents?"],
    requiredSkills: ["JavaScript", "React", "PostgreSQL"],
    preferedSkills: ["JavaScript", "React", "PostgreSQL"],
    salary: 750000,
    salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
    status: "Not Applied", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
    memo: "Maybe good company",
    isStared: true,
  },
  {
    name: "HAHAHA Uni",
    position: "Front End Developer",
    platforms: [...platformArr],
    questions: ["What is your grand parents' name?", "How old are your grand parents?"],
    requiredSkills: ["JavaScript", "React", "PostgreSQL"],
    preferedSkills: ["JavaScript", "React", "PostgreSQL"],
    salary: 850000,
    salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
    status: "Failed", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
    memo: "Maybe good company",
    isStared: true,
  },
  {
    name: "Chuo University",
    position: "Front End Developer",
    platforms: [...platformArr],
    questions: ["What is your grand parents' name?", "How old are your grand parents?"],
    requiredSkills: ["JavaScript", "React", "PostgreSQL"],
    preferedSkills: ["JavaScript", "React", "PostgreSQL"],
    salary: 950000,
    salaryUnit: "/ year", // "/ year", "/ month", or "/ hour"
    status: "Succeeded", // "Not Applied", "Applied", "In Process", "Failed" or "Succeeded"
    memo: "Maybe good company",
    isStared: true,
  },
]

export const users = [
  {
    id: "aaaaaaa",
    email: "a@gmail.com",
    // password: "aaa",
    firstName: "aFirst",
    lastName: "aLast",
    photoUrl: "aa.com",
    phoneNumber: 123123,
    platforms: [...defaultPlatForms, "Wantedly"],
    skills: [...defaultSkills, "AWS", "Node.js"],
    companies: [...items1]
  },
  {
    id: "bbbbbbb",
    email: "b@gmail.com",
    // password: "bbb",
    firstName: "bFirst",
    lastName: "bLast",
    photoUrl: "bb.com",
    phoneNumber: 234234,
    platforms: [...defaultPlatForms, "Indeed"],
    skills: [...defaultSkills, ""],
    companies: [...items1]
  },
]

