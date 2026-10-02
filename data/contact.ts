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
<<<<<<< HEAD
<<<<<<< HEAD
    email: "",
=======
    email: "ajithkumarkg@dpsrkp.net",
>>>>>>> parent of 1a8b027 (many changes as said by hema maam)
=======
    email: "ajithkumarkg@dpsrkp.net",
>>>>>>> parent of 1a8b027 (many changes as said by hema maam)
    remark: "Teacher In-Charge",
    
  },
  {
    name: "Mr. Mukesh Kumar",
    role: "Vice Principal",
    email: "mukeshkumar@dpsrkp.net",
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
    email: "v09760arhaan@dpsrkp.net",
    remark: "Handles technical guidance and robotics workshops.",
    email: "",
  },
  {
    name: "Medhansh Tanmay Pandya",
    role: "Executive",
    email: "v09045medhansh@dpsrkp.net",
    remark: "For collaborations, parts and mechanical design",
    email: "",
  },
  {
    name: "Aryamman Ojha",
    role: "Executive",
    email: "v09145aryamman@dpsrkp.net",
    remark: "Specialises in Wireless communication and electronics.",
    email: "",
  },
  
  {
    name: "Adhiraj Jain",
    role: "Executive",
    email: "e11704adhiraj@dpsrkp.net",
    remark: "Specialises in Arduino and 3D Design.",
    email: "",
  },
   {
    name: "Naitik Jindal",
    role: "Executive",
    email: "r22639naitik@dpsrkp.net",
    remark: "Specialises in event planning and management.",
    email: "",
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
    name: "Kyraan Katyal",
    role: "Executive",
    remark: "For collaborations, parts and mechanical design",
    email: "",
  },
=======
>>>>>>> parent of 1a8b027 (many changes as said by hema maam)
=======
>>>>>>> parent of 1a8b027 (many changes as said by hema maam)

];

export const socials: Social[] = [
  { type: "github", url: "https://github.com/RoboKnights-Clan/RoboKnights-Clan.github.io" },
  { type: "linkedin", url: "www.linkedin.com/company/roboknights" },
  { type: "instagram", url: "https://www.instagram.com/roboknights_dpsrkp" },
  { type: "facebook", url: "https://facebook.com/roboknights" },
];
