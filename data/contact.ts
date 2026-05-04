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
    role: "Head,RoboKnights",
    email: "",
    remark: "Teacher In-Charge",
    
  },
  {
    name: "Mr. Mukesh Kumar",
    role: "Vice Principal",
    remark: "Faculty advisor for RoboKnights and club activities.",
    email: "",
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
    remark: "Handles technical guidance and robotics workshops.",
    email: "",
  },
  {
    name: "Medhansh Tanmay Pandya",
    role: "Executive",
    remark: "For collaborations, parts and mechanical design",
    email: "",
  },
  {
    name: "Aryamman Ojha",
    role: "Executive",
    remark: "Specialises in Wireless communication and electronics.",
    email: "",
  },
  
  {
    name: "Adhiraj Jain",
    role: "Executive",
    remark: "Specialises in Arduino and 3D Design.",
    email: "",
  },
   {
    name: "Naitik Jindal",
    role: "Executive",
    remark: "Specialises in event planning and management.",
    email: "",
  },
  {
    name: "Kyraan Katyal",
    role: "Executive",
    remark: "For collaborations, parts and mechanical design",
    email: "",
  },

];

export const socials: Social[] = [
  { type: "github", url: "https://github.com/RoboKnights-Clan/RoboKnights-Clan.github.io" },
  { type: "linkedin", url: "www.linkedin.com/company/roboknights" },
  { type: "instagram", url: "https://www.instagram.com/roboknights_dpsrkp" },
  { type: "facebook", url: "https://facebook.com/roboknights" },
];
