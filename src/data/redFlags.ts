export type RedFlag = {
  id: string;
  title: string;
  category: string;
  description: string;
};

export type RedFlagCategory = {
  title: string;
  flags: RedFlag[];
};

// Categories are intentionally curated. Keep flags alphabetized by title within each category.
export const redFlagCategories: RedFlagCategory[] = [
  {
    title: "Emotional manipulation",
    flags: [
      {
        id: "guilt-trips",
        title: "Guilt trips",
        category: "Emotional manipulation",
        description:
          "Weaponizing guilt, accusing others of mistakes or negligence, blaming others for things in their life not going their way, implying that others are failing them, and manipulating situations to punish when they feel they have been wronged.",
      },
      {
        id: "idolizing",
        title: "Idolizing",
        category: "Emotional manipulation",
        description:
          "Over-the-top praise, boosting egos when they have something to gain, lavish compliments, grand gestures of affection, or love bombing.",
      },
      {
        id: "negging",
        title: "Negging",
        category: "Emotional manipulation",
        description:
          "Condescending comments and advice, backhanded compliments, cutting people down, especially when others get status or attention.",
      },
    ],
  },
  {
    title: "Emotional regulation",
    flags: [
      {
        id: "anger",
        title: "Out-of-control anger",
        category: "Emotional regulation",
        description:
          "Tantrums, explosive and volatile reactions to not getting attention or getting their way, accusations and blame, yelling, or fighting.",
      },
    ],
  },
  {
    title: "Personal accountability and growth",
    flags: [
      {
        id: "responsibility",
        title: "Avoiding responsibility",
        category: "Personal accountability and growth",
        description:
          "Refusal to acknowledge consequences of their behavior or accept that their decisions matter, deflecting responsibility onto others instead.",
      },
      {
        id: "therapy",
        title: "Avoiding therapy",
        category: "Personal accountability and growth",
        description:
          "Avoiding professional help even when they report extreme distress, not staying in therapy, making excuses not to go, only trying alternative therapies, or seeking therapists who enable rather than challenge.",
      },
      {
        id: "self-awareness",
        title: "Low self-awareness",
        category: "Personal accountability and growth",
        description:
          "Inability or refusal to understand how their behavior impacts others, stonewalling, avoiding self-reflection, and making excuses.",
      },
    ],
  },
  {
    title: "Relationship patterns",
    flags: [
      {
        id: "arrogance",
        title: "Arrogance",
        category: "Relationship patterns",
        description:
          "Belief that they are better than other people, feeling entitled to resources that are not theirs, and controlling or manipulating others to get what they want.",
      },
      {
        id: "relationship-history",
        title: "Turbulent relationship history",
        category: "Relationship patterns",
        description:
          "A consistent pattern of past toxic relationships, claims that others are “out to get them,” a history of infidelity, or name-calling and disrespecting past partners or friends.",
      },
    ],
  },
];
