// data/contact.ts
export interface ContactPerson {
  name: string;
  role: string;
  email: string;
}

export interface Social {
  type: string;
  url: string;
}

export const contactInfo: ContactPerson[] = [
  {
    name: "Mr Ajith Kumar",
    role: "Teacher In-Charge",
    email: "ajithkumarkg@dpsrkp.net",
  },
  {
    name: "Medhansh Tanmay Pandya",
    role: "President",
    email: "medhansh@dpsrkp.net",
  },
];

export const socials: Social[] = [
  { type: "github", url: "https://github.com/roboknights" },
  { type: "linkedin", url: "https://linkedin.com/company/roboknights" },
  { type: "instagram", url: "https://instagram.com/roboknights" },
  { type: "facebook", url: "https://facebook.com/roboknights" },
];
