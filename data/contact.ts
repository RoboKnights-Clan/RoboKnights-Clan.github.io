export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  remark?: string; // optional field
}

export interface Social {
  type: string;
  url: string;
}

export const contacts: ContactPerson[] = [
  {
    name: "Mr Ajith Kumar",
    role: "Teacher In-Charge",
    email: "ajithkumarkg@dpsrkp.net",
    remark: "Head,RoboKnights",
  },
  {
    name: "Mr. Mukesh Kumar",
    role: "Vice Principal",
    email: "arhaan@dpsrkp.net",
    remark: "Faculty advisor for RoboKnights and club activities.",
  },
  {
    name: "RoboKnights",
    role: "",
    email: "Roboknights@dpsrkp.net",
    remark: "",
  },
  {
    name: "Arhaan Sharma",
    role: "Executive",
    email: "arhaan@dpsrkp.net",
    remark: "Handles technical guidance and robotics workshops.",
  },
  {
    name: "Medhansh Tanmay Pandya",
    role: "Executive",
    email: "medhansh@dpsrkp.net",
    remark: "For collaborations, sponsorships, or general queries.",
  },
  {
    name: "Aryamman Ojha",
    role: "Executive",
    email: "aryamman@dpsrkp.net",
    remark: "Specialises in Wireless communication and electronics.",
  },
  
  {
    name: "Adhiraj Jain",
    role: "Executive",
    email: "adhiraj@dpsrkp.net",
    remark: "Specialises in Arduino and 3D Design.",
  },

];

export const socials: Social[] = [
  { type: "github", url: "https://github.com/RoboKnights-Clan/RoboKnights-Clan.github.io" },
  { type: "linkedin", url: "www.linkedin.com/company/roboknights" },
  { type: "instagram", url: "https://www.instagram.com/roboknights_dpsrkp" },
  { type: "facebook", url: "https://facebook.com/roboknights" },
];
