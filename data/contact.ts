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
    remark: "Faculty advisor for RoboKnights and club activities.",
  },
  {
    name: "Medhansh Tanmay Pandya",
    role: "President",
    email: "medhansh@dpsrkp.net",
    remark: "For collaborations, sponsorships, or general queries.",
  },
  {
    name: "Arhaan Sharma",
    role: "Vice President",
    email: "arhaan@dpsrkp.net",
    remark: "Handles technical guidance and robotics workshops.",
  },
];

export const socials: Social[] = [
  { type: "github", url: "https://github.com/roboknights" },
  { type: "linkedin", url: "https://linkedin.com/company/roboknights" },
  { type: "instagram", url: "https://instagram.com/roboknights" },
  { type: "facebook", url: "https://facebook.com/roboknights" },
];
