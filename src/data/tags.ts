export const TAGS = [
  { id: "accountability", label: "Accountability" },
  { id: "boundaries", label: "Boundaries" },
  { id: "isolation", label: "Isolation" },
  { id: "lying", label: "Lying" },
  { id: "other-people", label: "Other people" },
  { id: "possessiveness", label: "Possessiveness" },
  { id: "sexual", label: "Sexual" },
  { id: "technology", label: "Technology" },
  { id: "violence", label: "Violence" },
] as const;

export type TagId = (typeof TAGS)[number]["id"];
