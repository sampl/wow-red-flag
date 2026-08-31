export type RedFlag = {
  id: string;
  title: string;
  category: string;
  description: string;
};

type RedFlagEntry = readonly [title: string, description: string];

type RedFlagCategorySource = {
  title: string;
  flags: RedFlagEntry[];
};

const categorySources: RedFlagCategorySource[] = [
  {
    title: "Emotional manipulation",
    flags: [
      ["Blame-shifting", "Making their behavior your responsibility."],
      [
        "DARVO",
        "Deny, Attack, and Reverse Victim and Offender when confronted.",
      ],
      ["Deflection", "Redirecting a discussion away from their behavior."],
      [
        "Double binds",
        "Creating situations where either choice can be used against you.",
      ],
      [
        "Emotional blackmail",
        "Using fear, obligation, or guilt to force compliance.",
      ],
      [
        "Emotional hostage-taking",
        "Making you responsible for keeping them emotionally stable.",
      ],
      [
        "Feigning helplessness",
        "Claiming inability in order to make you take responsibility for them.",
      ],
      [
        "Gaslighting",
        "Repeatedly undermining your confidence in your memory, perception, or judgment.",
      ],
      [
        "Guilt-tripping",
        "Making you feel selfish, cruel, or ungrateful for not doing what they want.",
      ],
      [
        "Impossible standards",
        "Expectations designed so you can never quite succeed.",
      ],
      [
        "Manufactured urgency",
        "Pressuring you to decide before you have time to think.",
      ],
      [
        "Martyrdom",
        "Conspicuously suffering or sacrificing so that you feel indebted.",
      ],
      [
        "Moving the goalposts",
        "Changing what is required of you after you meet an expectation.",
      ],
      [
        "Playing the victim",
        "Portraying themselves as the injured party to escape accountability or control your response.",
      ],
      [
        "Scorekeeping",
        "Treating favors and affection as debts you must repay.",
      ],
      [
        "Threatening abandonment",
        "Repeatedly threatening to leave, divorce, break up, etc. to obtain compliance.",
      ],
      [
        "Threatening self-harm",
        "Using threats of self-injury or suicide as leverage to prevent someone from leaving or setting a boundary.",
      ],
      [
        "Ultimatums",
        "Using threats of consequences to force a choice, particularly where ordinary negotiation would be possible.",
      ],
      [
        "Weaponized incompetence",
        "Deliberately or conveniently doing things badly so you will take them over.",
      ],
      [
        "Weaponized vulnerability",
        "Using disclosures, distress, trauma, or emotional crises to prevent you from setting boundaries.",
      ],
      ["Whataboutism", "Answering criticism by bringing up something you did."],
    ],
  },
  {
    title: "Distorting reality",
    flags: [
      [
        "Bad-faith interpretation",
        "Consistently choosing the least charitable interpretation of what you say.",
      ],
      [
        "Circular arguments",
        "Keeping an argument going without allowing resolution.",
      ],
      [
        "Conversation hijacking",
        "Making every discussion about their feelings or grievances.",
      ],
      [
        "Half-truths",
        "A pattern of half-truths that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Interrogation",
        "Demanding exhaustive explanations for ordinary behavior.",
      ],
      [
        "Invalidation",
        "Treating your feelings or experiences as illegitimate.",
      ],
      [
        "Lying",
        "A pattern of lying that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Lying by omission",
        "A pattern of lying by omission that can undermine trust, autonomy, or emotional safety.",
      ],
      ["Minimization", "“It wasn't that bad.”"],
      [
        "Plausible deniability",
        "Behaving in ways that are deliberately difficult to call out or prove.",
      ],
      [
        "Projection",
        "Accusing you of motives or behaviors that are actually theirs.",
      ],
      [
        "Putting words in your mouth",
        "A pattern of putting words in your mouth that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Revisionist history",
        "Repeatedly rewriting what happened to favor their position.",
      ],
      [
        "Sealioning",
        "Relentless supposedly-reasonable questioning used to exhaust you rather than understand you.",
      ],
      [
        "Selective memory",
        "Conveniently “forgetting” agreements or incidents.",
      ],
      [
        "Semantic arguments",
        "Obsessing over wording to avoid addressing the substance of a complaint.",
      ],
      [
        "Straw-manning",
        "Replacing your actual position with an exaggerated version that's easier to attack.",
      ],
      [
        "Trivializing",
        "Portraying something important to you as ridiculous or insignificant.",
      ],
    ],
  },
  {
    title: "Affection as a means of control",
    flags: [
      [
        "Boundary testing",
        "Making small violations to discover what you will tolerate.",
      ],
      [
        "Breadcrumbing",
        "Giving just enough attention or hope to keep someone invested.",
      ],
      [
        "Conditional love",
        "Communicating that affection depends upon compliance.",
      ],
      [
        "Forced intimacy",
        "Pushing emotional, sexual, financial, or practical closeness faster than you want.",
      ],
      [
        "Future faking",
        "Making grand promises about a shared future without genuine intention or follow-through.",
      ],
      [
        "Grooming",
        "Gradually establishing trust, dependency, secrecy, or normalized boundary violations in preparation for exploitation or abuse.",
      ],
      [
        "Hoovering",
        "Attempting to pull someone back into a harmful relationship after separation, often through affection, apologies, promises, or crises.",
      ],
      [
        "Hot-and-cold behavior",
        "Alternating intense closeness with sudden distance.",
      ],
      [
        "Idealization",
        "Placing you on a pedestal in an intense or unrealistic way.",
      ],
      [
        "Intermittent reinforcement",
        "Unpredictably alternating affection/reward with rejection or mistreatment, which can make the relationship unusually difficult to disengage from.",
      ],
      [
        "Love bombing",
        "Overwhelming someone with affection, attention, promises, gifts, or commitment, particularly to accelerate intimacy or create dependency.",
      ],
      [
        "Mirroring",
        "Strategically copying your interests, values, personality, or aspirations to manufacture a sense of extraordinary compatibility.",
      ],
      [
        "Premature commitment",
        "Aggressively pushing exclusivity, marriage, moving in, etc.",
      ],
      [
        "Withholding affection",
        "Deliberately removing warmth or intimacy as punishment or leverage.",
      ],
    ],
  },
  {
    title: "Punishment and conflict tactics",
    flags: [
      [
        "“Jokes” at your expense",
        "Especially when objections are answered with “you're too sensitive.”",
      ],
      [
        "Belittling",
        "A pattern of belittling that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Contempt",
        "A pattern of contempt that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Destroying property",
        "A pattern of destroying property that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Humiliation",
        "A pattern of humiliation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Intimidation",
        "A pattern of intimidation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Menacing body language",
        "A pattern of menacing body language that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Mockery",
        "A pattern of mockery that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Name-calling",
        "A pattern of name-calling that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Needling / baiting",
        "Deliberately provoking a reaction and then criticizing the reaction.",
      ],
      [
        "Public humiliation",
        "A pattern of public humiliation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Punching walls / throwing objects",
        "Violence around someone can function as intimidation even when they aren't physically struck.",
      ],
      [
        "Punitive withdrawal",
        "Withdrawing contact or support specifically to punish.",
      ],
      [
        "Rage episodes",
        "A pattern of rage episodes that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Reactive-abuse baiting",
        "Provoking someone toward an extreme response and then using it to characterize them as the aggressor.",
      ],
      [
        "Silent treatment",
        "Deliberately refusing communication as punishment or control.",
      ],
      [
        "Stonewalling",
        "Persistently shutting down attempts to discuss problems.",
      ],
      [
        "Threats",
        "A pattern of threats that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Veiled threats",
        "A pattern of veiled threats that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Withholding",
        "Deliberately withholding information, affection, money, cooperation, etc. as leverage.",
      ],
    ],
  },
  {
    title: "Control and coercion",
    flags: [
      [
        "Coercive control",
        "A pattern of coercive control that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling access to money",
        "A pattern of controlling access to money that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling clothing or appearance",
        "A pattern of controlling clothing or appearance that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling food",
        "A pattern of controlling food that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling friendships",
        "A pattern of controlling friendships that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling hobbies",
        "A pattern of controlling hobbies that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling medical care",
        "A pattern of controlling medical care that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling sleep",
        "A pattern of controlling sleep that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling transportation",
        "A pattern of controlling transportation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling work or education",
        "A pattern of controlling work or education that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding permission for ordinary independent decisions.",
        "A pattern of demanding permission for ordinary independent decisions that can undermine trust, autonomy, or emotional safety.",
      ],
      ["Double standards", "Freedoms for themselves that they deny you."],
      [
        "Economic sabotage",
        "Interfering with employment, credit, education, etc. to make independence harder.",
      ],
      [
        "Excessive rule-making",
        "A pattern of excessive rule-making that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Financial abuse",
        "A pattern of financial abuse that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Gatekeeping resources",
        "A pattern of gatekeeping resources that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Jealousy framed as protection",
        "A pattern of jealousy framed as protection that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Location-tracking demands",
        "A pattern of location-tracking demands that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Micromanagement",
        "A pattern of micromanagement that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Monitoring",
        "Demanding constant updates about where you are or what you're doing.",
      ],
      [
        "Password demands",
        "A pattern of password demands that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Possessiveness framed as love",
        "A pattern of possessiveness framed as love that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Reproductive coercion",
        "Interfering with contraception, pregnancy decisions, or reproductive autonomy.",
      ],
      [
        "Sexual coercion",
        "Pressure, threats, guilt, persistence, or retaliation used to obtain sexual activity rather than freely given consent.",
      ],
      ["Surveillance", "Checking phones, messages, location, browsing, etc."],
    ],
  },
  {
    title: "Social isolation",
    flags: [
      [
        "Creating conflicts with your support network",
        "A pattern of creating conflicts with your support network that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding loyalty tests",
        "A pattern of demanding loyalty tests that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Dependency creation",
        "Systematically making you more reliant on them financially, socially, practically, or emotionally.",
      ],
      [
        "Discouraging outside perspectives",
        "A pattern of discouraging outside perspectives that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Discrediting friends and family",
        "Convincing you that everyone close to you is bad for you.",
      ],
      [
        "Making socializing “not worth it”",
        "Starting fights before/after outings until you stop going.",
      ],
      [
        "Monopolizing your time",
        "A pattern of monopolizing your time that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Punishing independence",
        "A pattern of punishing independence that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Sabotaging plans",
        "A pattern of sabotaging plans that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Social isolation",
        "Progressively separating you from friends, family, coworkers, or community.",
      ],
      [
        "Us-against-the-world framing",
        "A pattern of us-against-the-world framing that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Jealousy and possessiveness",
    flags: [
      [
        "Accusations of cheating without reasonable basis",
        "A pattern of accusations of cheating without reasonable basis that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Checking your phone",
        "A pattern of checking your phone that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Competing with your friends/family for attention",
        "A pattern of competing with your friends/family for attention that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding proof of fidelity",
        "A pattern of demanding proof of fidelity that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding you block people",
        "A pattern of demanding you block people that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Interrogating you about other people",
        "A pattern of interrogating you about other people that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Jealousy tests",
        "A pattern of jealousy tests that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Policing social media",
        "A pattern of policing social media that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Possessive language or behavior",
        "A pattern of possessive language or behavior that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Retroactive jealousy",
        "Obsessive control, interrogation, or punishment concerning relationships that occurred before the current relationship.",
      ],
      [
        "Treating ordinary interactions as flirting",
        "A pattern of treating ordinary interactions as flirting that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Treating privacy as evidence of dishonesty",
        "A pattern of treating privacy as evidence of dishonesty that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Social manipulation",
    flags: [
      [
        "Character assassination",
        "A pattern of character assassination that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Comparison",
        "Repeatedly comparing you unfavorably with exes, friends, siblings, etc.",
      ],
      [
        "Jealousy induction",
        "Intentionally making you jealous to increase your investment or insecurity.",
      ],
      [
        "Playing people against one another",
        "A pattern of playing people against one another that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Proxy harassment",
        "Recruiting other people to contact, pressure, monitor, or intimidate you.",
      ],
      [
        "Public/private personality switching",
        "Behaving charmingly around others while treating you very differently in private.",
      ],
      [
        "Recruiting allies",
        "Bringing friends/family into a conflict to overwhelm you.",
      ],
      [
        "Smear campaigns",
        "Attempting to damage your reputation, particularly after confrontation or separation.",
      ],
      [
        "Triangulation",
        "Involving a third person to create jealousy, pressure, rivalry, or validation.",
      ],
      [
        "Using children as leverage",
        "A pattern of using children as leverage that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Using mutual friends as messengers",
        "A pattern of using mutual friends as messengers that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Undermining confidence and identity",
    flags: [
      [
        "Approval withholding",
        "Keeping validation perpetually just out of reach.",
      ],
      [
        "Attacking your identity",
        "A pattern of attacking your identity that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Chronic criticism",
        "A pattern of chronic criticism that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Competence undermining",
        "Repeatedly making you doubt your ability to handle things yourself.",
      ],
      [
        "Devaluation",
        "Shifting from idealizing you to treating you as inferior or worthless.",
      ],
      [
        "Eroding self-trust",
        "A pattern of eroding self-trust that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Goal sabotage",
        "Interfering with things that would make you more confident or independent.",
      ],
      [
        "Infantilization",
        "Treating an adult partner like a child incapable of making decisions.",
      ],
      [
        "Making you prove your worth",
        "A pattern of making you prove your worth that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Negging",
        "Calculated backhanded compliments or insults intended to lower confidence and increase desire for approval.",
      ],
      [
        "Pathologizing normal reactions",
        "Describing reasonable anger, sadness, or disagreement as evidence that you're “crazy,” “unstable,” etc.",
      ],
      [
        "Weaponizing diagnoses or therapy language",
        "A pattern of weaponizing diagnoses or therapy language that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Weaponizing insecurities",
        "A pattern of weaponizing insecurities that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Weaponizing past trauma",
        "A pattern of weaponizing past trauma that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Weaponizing secrets",
        "A pattern of weaponizing secrets that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Boundary violations",
    flags: [
      [
        "Contacting you repeatedly after you've asked them to stop",
        "A pattern of contacting you repeatedly after you've asked them to stop that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Deliberately creating “exceptions”",
        "A pattern of deliberately creating “exceptions” that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Digital stalking",
        "A pattern of digital stalking that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Ignoring “no”",
        "A pattern of ignoring “no” that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Mocking boundaries",
        "A pattern of mocking boundaries that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Privacy invasion",
        "A pattern of privacy invasion that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Punishing boundaries",
        "A pattern of punishing boundaries that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Reading private messages",
        "A pattern of reading private messages that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Refusing to leave",
        "A pattern of refusing to leave that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Repeatedly renegotiating a boundary after you've clearly answered.",
        "A pattern of repeatedly renegotiating a boundary after you've clearly answered that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Sexual boundary violations",
        "A pattern of sexual boundary violations that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Sharing private information without permission",
        "A pattern of sharing private information without permission that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Showing up uninvited",
        "A pattern of showing up uninvited that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Stalking",
        "A pattern of stalking that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Testing boundaries",
        "A pattern of testing boundaries that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Treating boundaries as rejection",
        "A pattern of treating boundaries as rejection that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Unwanted physical contact",
        "A pattern of unwanted physical contact that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Accountability problems",
    flags: [
      [
        "Apology without behavioral change",
        "A pattern of apology without behavioral change that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Avoiding meaningful support",
        "Repeatedly refusing appropriate support or help while ongoing harmful behavior remains unaddressed.",
      ],
      ["Conditional apologies", "“I'm sorry, but you…”"],
      [
        "Demanding immediate forgiveness",
        "A pattern of demanding immediate forgiveness that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Excuse-making",
        "A pattern of excuse-making that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Externalizing blame",
        "A pattern of externalizing blame that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Keeping different rules for themselves and you",
        "A pattern of keeping different rules for themselves and you that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Lack of self-reflection",
        "Repeatedly avoiding honest reflection on how their behavior affects others or making excuses instead of engaging with feedback.",
      ],
      [
        "Never apologizing",
        "A pattern of never apologizing that can undermine trust, autonomy, or emotional safety.",
      ],
      ["Non-apologies", "“I'm sorry you feel that way.”"],
      [
        "Performative remorse",
        "A pattern of performative remorse that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Refusing repair",
        "A pattern of refusing repair that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Repeated promises to change followed by recurrence",
        "A pattern of repeated promises to change followed by recurrence that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Retaliating when confronted",
        "A pattern of retaliating when confronted that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Treating consequences as persecution",
        "A pattern of treating consequences as persecution that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Using an apology to end discussion",
        "A pattern of using an apology to end discussion that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Relationship destabilization",
    flags: [
      [
        "Breakup threats",
        "A pattern of breakup threats that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Chaos creation",
        "A pattern of chaos creation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Constant crisis mode",
        "A pattern of constant crisis mode that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Creating problems and then becoming the rescuer",
        "A pattern of creating problems and then becoming the rescuer that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Crisis bonding",
        "Repeatedly using emergencies or intense conflict/reconciliation cycles to create closeness.",
      ],
      [
        "Demanding demonstrations of devotion",
        "A pattern of demanding demonstrations of devotion that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Manufactured crises",
        "A pattern of manufactured crises that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Picking fights before important events",
        "A pattern of picking fights before important events that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Recurring harmful relationship patterns",
        "A consistent pattern of conflict, disrespect, betrayal, or instability across close relationships that is not acknowledged or addressed.",
      ],
      [
        "Repeated breakups and reunions",
        "A pattern of repeated breakups and reunions that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Sabotaging birthdays, holidays, work events, etc.",
        "A pattern of sabotaging birthdays, holidays, work events, etc that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Sleep deprivation through conflict",
        "A pattern of sleep deprivation through conflict that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Testing your loyalty",
        "A pattern of testing your loyalty that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Unpredictable punishment",
        "A pattern of unpredictable punishment that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Walking-on-eggshells dynamics",
        "A pattern of walking-on-eggshells dynamics that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
  {
    title: "Digital forms",
    flags: [
      [
        "Account monitoring",
        "A pattern of account monitoring that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Checking screen time/activity",
        "A pattern of checking screen time/activity that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Controlling what you post",
        "A pattern of controlling what you post that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Cyberstalking",
        "A pattern of cyberstalking that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding immediate text responses",
        "A pattern of demanding immediate text responses that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Demanding passwords",
        "A pattern of demanding passwords that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Digital isolation",
        "Blocking/deleting contacts or interfering with someone's accounts.",
      ],
      [
        "Excessive calling/texting",
        "A pattern of excessive calling/texting that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Image-based abuse",
        "Sharing or threatening to share intimate images without consent.",
      ],
      [
        "Impersonation",
        "A pattern of impersonation that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Location surveillance",
        "A pattern of location surveillance that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Reading DMs",
        "A pattern of reading dms that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Technology-facilitated coercive control",
        "A pattern of technology-facilitated coercive control that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Tracking devices",
        "A pattern of tracking devices that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Unauthorized account access",
        "A pattern of unauthorized account access that can undermine trust, autonomy, or emotional safety.",
      ],
      [
        "Using read receipts as surveillance",
        "A pattern of using read receipts as surveillance that can undermine trust, autonomy, or emotional safety.",
      ],
    ],
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const usedIds = new Map<string, number>();

const createId = (title: string) => {
  const baseId = slugify(title);
  const count = (usedIds.get(baseId) ?? 0) + 1;
  usedIds.set(baseId, count);
  return count === 1 ? baseId : baseId + "-" + count;
};

// Categories are intentionally curated. Keep flags alphabetized by title within each category.
export const redFlagCategories = categorySources.map(
  ({ title: category, flags }) => ({
    title: category,
    flags: flags.map(([title, description]) => ({
      id: createId(title),
      title,
      category,
      description,
    })),
  }),
);
