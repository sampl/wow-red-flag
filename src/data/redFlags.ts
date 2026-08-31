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
        "Presenting selected facts in a way that creates a misleading impression.",
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
        "Knowingly giving false information to mislead or avoid accountability.",
      ],
      [
        "Lying by omission",
        "Withholding material information so that someone reaches a false conclusion.",
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
        "Misrepresenting what you said or believe so it is easier to dismiss or attack.",
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
        "Speaking or acting in ways that make someone feel small, incapable, or unworthy.",
      ],
      [
        "Contempt",
        "Treating someone with scorn, disgust, or a sense of superiority.",
      ],
      [
        "Destroying property",
        "Damaging belongings or surroundings to frighten, punish, or assert power.",
      ],
      [
        "Humiliation",
        "Causing shame or embarrassment to diminish someone or gain control over them.",
      ],
      [
        "Intimidation",
        "Using fear, implied power, or threatening conduct to influence someone’s choices.",
      ],
      [
        "Menacing body language",
        "Using posture, proximity, gestures, or facial expressions to make someone feel afraid.",
      ],
      [
        "Mockery",
        "Ridiculing someone’s words, feelings, or traits to dismiss or hurt them.",
      ],
      [
        "Name-calling",
        "Using insulting labels to demean someone or undermine their self-worth.",
      ],
      [
        "Needling / baiting",
        "Deliberately provoking a reaction and then criticizing the reaction.",
      ],
      [
        "Public humiliation",
        "Shaming or degrading someone in front of other people.",
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
        "Explosive anger that leaves others afraid, silenced, or focused on managing the outburst.",
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
        "Stating or implying harmful consequences to force compliance or create fear.",
      ],
      [
        "Veiled threats",
        "Hinting at harmful consequences without saying them directly.",
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
        "An ongoing pattern of restrictions, intimidation, and dependency that erodes another person’s autonomy.",
      ],
      [
        "Controlling access to money",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling clothing or appearance",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling food",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling friendships",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling hobbies",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling medical care",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling sleep",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling transportation",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Controlling work or education",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Demanding permission for ordinary independent decisions.",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      ["Double standards", "Freedoms for themselves that they deny you."],
      [
        "Economic sabotage",
        "Interfering with employment, credit, education, etc. to make independence harder.",
      ],
      [
        "Excessive rule-making",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Financial abuse",
        "Restricting, exploiting, or sabotaging finances to make someone dependent.",
      ],
      [
        "Gatekeeping resources",
        "Controlling access to essentials such as money, housing, transportation, or information.",
      ],
      [
        "Jealousy framed as protection",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Location-tracking demands",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Micromanagement",
        "Excessively directing everyday decisions or tasks to reduce another person’s independence.",
      ],
      [
        "Monitoring",
        "Demanding constant updates about where you are or what you're doing.",
      ],
      [
        "Password demands",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
      ],
      [
        "Possessiveness framed as love",
        "Restricting everyday choices, access, or freedom in ways that increase dependence and reduce autonomy.",
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
        "Starting or escalating disputes that strain relationships with friends, family, or community.",
      ],
      [
        "Demanding loyalty tests",
        "Requiring proofs of allegiance that put relationships, values, or independence at risk.",
      ],
      [
        "Dependency creation",
        "Systematically making you more reliant on them financially, socially, practically, or emotionally.",
      ],
      [
        "Discouraging outside perspectives",
        "Separating someone from supportive people or outside perspectives so they become more dependent.",
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
        "Demanding so much attention that other relationships, responsibilities, or rest are crowded out.",
      ],
      [
        "Punishing independence",
        "Responding to independent choices with anger, withdrawal, or other punishment.",
      ],
      [
        "Sabotaging plans",
        "Disrupting arrangements that support someone’s goals, relationships, or autonomy.",
      ],
      [
        "Social isolation",
        "Progressively separating you from friends, family, coworkers, or community.",
      ],
      [
        "Us-against-the-world framing",
        "Separating someone from supportive people or outside perspectives so they become more dependent.",
      ],
    ],
  },
  {
    title: "Jealousy and possessiveness",
    flags: [
      [
        "Accusations of cheating without reasonable basis",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Checking your phone",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Competing with your friends/family for attention",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Demanding proof of fidelity",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Demanding you block people",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Interrogating you about other people",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Jealousy tests",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Policing social media",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Possessive language or behavior",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Retroactive jealousy",
        "Obsessive control, interrogation, or punishment concerning relationships that occurred before the current relationship.",
      ],
      [
        "Treating ordinary interactions as flirting",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
      [
        "Treating privacy as evidence of dishonesty",
        "Treating ordinary independence or social contact as evidence of disloyalty in order to justify control.",
      ],
    ],
  },
  {
    title: "Social manipulation",
    flags: [
      [
        "Character assassination",
        "Spreading damaging claims to undermine someone’s reputation and credibility.",
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
        "Creating rivalry or conflict between people to gain influence or control.",
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
        "Using children, access to them, or concerns about them to pressure or control someone.",
      ],
      [
        "Using mutual friends as messengers",
        "Using shared contacts to relay pressure, monitor someone, or bypass boundaries.",
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
        "Targeting someone’s confidence, identity, or vulnerabilities to make them easier to control.",
      ],
      [
        "Chronic criticism",
        "Persistently finding fault in ways that erode confidence and make approval feel unattainable.",
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
        "Repeatedly causing someone to doubt their judgment, feelings, or ability to make decisions.",
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
        "Keeping acceptance or affection conditional on continual demonstrations of value.",
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
        "Targeting someone’s confidence, identity, or vulnerabilities to make them easier to control.",
      ],
      [
        "Weaponizing insecurities",
        "Targeting someone’s confidence, identity, or vulnerabilities to make them easier to control.",
      ],
      [
        "Weaponizing past trauma",
        "Targeting someone’s confidence, identity, or vulnerabilities to make them easier to control.",
      ],
      [
        "Weaponizing secrets",
        "Using private information to shame, threaten, or control someone.",
      ],
    ],
  },
  {
    title: "Boundary violations",
    flags: [
      [
        "Contacting you repeatedly after you've asked them to stop",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Deliberately creating “exceptions”",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Digital stalking",
        "Using online accounts, devices, or digital activity to monitor someone without consent.",
      ],
      [
        "Ignoring “no”",
        "Continuing to pressure or act after a clear refusal or lack of consent.",
      ],
      [
        "Mocking boundaries",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Privacy invasion",
        "Accessing personal space, information, or communications without permission.",
      ],
      [
        "Punishing boundaries",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Reading private messages",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Refusing to leave",
        "Remaining in someone’s space after being asked to leave in order to intimidate or control.",
      ],
      [
        "Repeatedly renegotiating a boundary after you've clearly answered.",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Sexual boundary violations",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Sharing private information without permission",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Showing up uninvited",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Stalking",
        "Repeated unwanted monitoring, contact, or presence that causes fear or disrupts daily life.",
      ],
      [
        "Testing boundaries",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Treating boundaries as rejection",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Unwanted physical contact",
        "Touching someone without consent or after they have indicated they do not want it.",
      ],
    ],
  },
  {
    title: "Accountability problems",
    flags: [
      [
        "Apology without behavioral change",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
      [
        "Avoiding meaningful support",
        "Repeatedly refusing appropriate support or help while ongoing harmful behavior remains unaddressed.",
      ],
      ["Conditional apologies", "“I'm sorry, but you…”"],
      [
        "Demanding immediate forgiveness",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
      [
        "Excuse-making",
        "Offering justifications that minimize harm instead of taking responsibility for it.",
      ],
      [
        "Externalizing blame",
        "Attributing harmful choices to other people, circumstances, or forces outside oneself.",
      ],
      [
        "Keeping different rules for themselves and you",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
      [
        "Lack of self-reflection",
        "Repeatedly avoiding honest reflection on how their behavior affects others or making excuses instead of engaging with feedback.",
      ],
      [
        "Never apologizing",
        "Refusing to acknowledge harm or offer a genuine apology when one is warranted.",
      ],
      ["Non-apologies", "“I'm sorry you feel that way.”"],
      [
        "Performative remorse",
        "Displaying regret for appearance or to regain access without meaningful accountability.",
      ],
      [
        "Refusing repair",
        "Declining to address harm, rebuild trust, or take steps to make amends.",
      ],
      [
        "Repeated promises to change followed by recurrence",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
      [
        "Retaliating when confronted",
        "Responding to concerns with punishment, anger, or counterattacks instead of engagement.",
      ],
      [
        "Treating consequences as persecution",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
      [
        "Using an apology to end discussion",
        "Avoiding responsibility for harm through denial, delay, double standards, or empty gestures.",
      ],
    ],
  },
  {
    title: "Relationship destabilization",
    flags: [
      [
        "Breakup threats",
        "Threatening to end the relationship to force compliance or silence concerns.",
      ],
      [
        "Chaos creation",
        "Creating confusion, conflict, or instability that keeps others off balance.",
      ],
      [
        "Constant crisis mode",
        "Keeping the relationship in a recurring state of emergency that consumes attention and resources.",
      ],
      [
        "Creating problems and then becoming the rescuer",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Crisis bonding",
        "Repeatedly using emergencies or intense conflict/reconciliation cycles to create closeness.",
      ],
      [
        "Demanding demonstrations of devotion",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Manufactured crises",
        "Inventing or escalating emergencies to gain attention, control, or compliance.",
      ],
      [
        "Picking fights before important events",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Recurring harmful relationship patterns",
        "A consistent pattern of conflict, disrespect, betrayal, or instability across close relationships that is not acknowledged or addressed.",
      ],
      [
        "Repeated breakups and reunions",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Sabotaging birthdays, holidays, work events, etc.",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Sleep deprivation through conflict",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Testing your loyalty",
        "Creating recurring uncertainty, conflict, or crises that keep the relationship off balance.",
      ],
      [
        "Unpredictable punishment",
        "Responding to ordinary behavior with inconsistent penalties that keep others anxious and guessing.",
      ],
      [
        "Walking-on-eggshells dynamics",
        "Creating an atmosphere where someone constantly monitors themselves to avoid an outburst or punishment.",
      ],
    ],
  },
  {
    title: "Digital forms",
    flags: [
      [
        "Account monitoring",
        "Reviewing someone’s online accounts or activity to track or control them.",
      ],
      [
        "Checking screen time/activity",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Controlling what you post",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Cyberstalking",
        "Using digital tools or platforms to repeatedly monitor, contact, or harass someone.",
      ],
      [
        "Demanding immediate text responses",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Demanding passwords",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Digital isolation",
        "Blocking/deleting contacts or interfering with someone's accounts.",
      ],
      [
        "Excessive calling/texting",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Image-based abuse",
        "Sharing or threatening to share intimate images without consent.",
      ],
      [
        "Impersonation",
        "Pretending to be someone else online to deceive, monitor, or damage them.",
      ],
      [
        "Location surveillance",
        "Using devices, apps, or accounts to track someone’s whereabouts without consent.",
      ],
      [
        "Reading DMs",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Technology-facilitated coercive control",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Tracking devices",
        "Placing or using technology to follow someone’s movements without their knowledge or agreement.",
      ],
      [
        "Unauthorized account access",
        "Entering someone’s digital accounts without permission.",
      ],
      [
        "Using read receipts as surveillance",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
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
