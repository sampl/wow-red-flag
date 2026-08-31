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
      [
        "Deflection",
        "Redirecting a discussion away from their behavior; whataboutism is a common form.",
      ],
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
        "Weaponized incompetence: intentionally claiming or performing inability so responsibility shifts to another person.",
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
        "Weaponized vulnerability",
        "Using disclosures, distress, trauma, or emotional crises to prevent you from setting boundaries.",
      ],
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
      [
        "Maintaining a secret committed relationship",
        "Concealing another committed relationship or presenting an agreed-upon monogamous relationship as exclusive when it is not.",
      ],
      [
        "Minimization",
        "Portraying a concern, experience, or harm as insignificant, unimportant, or ridiculous.",
      ],
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
        "Straw-manning: misrepresenting what someone said or believes so it is easier to dismiss or attack.",
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
    ],
  },
  {
    title: "Affection as control",
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
        "Intermittent reinforcement: an unpredictable alternation between affection or reward and rejection or mistreatment.",
      ],
      [
        "Idealization",
        "Placing you on a pedestal in an intense or unrealistic way.",
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
    title: "Punishment and conflicts",
    flags: [
      [
        "“Jokes” at your expense",
        "Especially when objections are answered with “you're too sensitive.”",
      ],
      [
        "Belittling",
        "Belittling, mockery, or ridicule that makes someone feel small, incapable, or unworthy.",
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
        "Causing shame or embarrassment to diminish someone or gain control over them, especially in public.",
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
        "Name-calling",
        "Using insulting labels to demean someone or undermine their self-worth.",
      ],
      [
        "Needling / baiting",
        "Deliberately provoking a reaction and then criticizing the reaction.",
      ],
      [
        "Punching walls / throwing objects",
        "Violence around someone can function as intimidation even when they aren't physically struck.",
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
        "Withholding as punishment or leverage",
        "Deliberately withholding contact, support, affection, information, or cooperation as punishment or leverage.",
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
        "Demanding constant updates",
        "Continually demanding updates about someone's whereabouts or activities, including immediate response expectations.",
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
        "Household labor inequality",
        "Consistently expecting one partner to carry an unfair share of domestic work, care work, or planning.",
      ],
      [
        "Jealousy or possessiveness framed as care",
        "Controlling conduct portrayed as protection, care, or love.",
      ],
      [
        "Micromanagement",
        "Excessively directing everyday decisions or tasks to reduce another person’s independence.",
      ],
      [
        "Non-consensual location tracking",
        "Demanding access to, placing, or using an app or device to track someone's movements or location without their agreement.",
      ],
      [
        "Password demands",
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
    ],
  },
  {
    title: "Social isolation",
    flags: [
      [
        "Creating conflicts with your support network",
        "Starting or escalating disputes with friends, family, or community, including picking fights before or after outings so socializing becomes difficult.",
      ],
      [
        "Demanding constant availability and attention",
        "Demanding so much availability and attention that other relationships, responsibilities, or rest are crowded out.",
      ],
      [
        "Demanding loyalty tests",
        "Requiring proofs of allegiance or testing your loyalty in ways that put relationships, values, or independence at risk.",
      ],
      [
        "Dependency creation",
        "Systematically making you more reliant on them financially, socially, practically, or emotionally.",
      ],
      [
        "Discrediting friends and family",
        "Convincing you that everyone close to you is bad for you.",
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
        "Us against the world",
        "Isolating someone from supportive people and outside viewpoints to increase dependency.",
      ],
    ],
  },
  {
    title: "Jealousy & possessiveness",
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
        "Public/private personality switching",
        "Behaving charmingly around others while treating you very differently in private.",
      ],
      [
        "Recruiting allies",
        "Bringing friends/family into a conflict to overwhelm you.",
      ],
      [
        "Smear campaigns",
        "Spreading damaging claims to undermine your reputation or credibility—often called character assassination—particularly after confrontation or separation.",
      ],
      [
        "Splitting",
        "Casting people as entirely good or bad and abruptly reversing that view in ways that create conflict, instability, or pressure.",
      ],
      [
        "Third-party pressure or harassment",
        "Using other people or shared contacts to pressure, monitor, intimidate, relay messages, or bypass boundaries.",
      ],
      [
        "Triangulation",
        "Involving a third person to create jealousy, pressure, rivalry, or validation.",
      ],
      [
        "Using children as leverage",
        "Using children, access to them, or concerns about them to pressure or control someone.",
      ],
    ],
  },
  {
    title: "Undermining confidence",
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
    title: "Boundaries",
    flags: [
      [
        "Deliberately creating “exceptions”",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Digital stalking",
        "Using online accounts, devices, or digital activity to monitor someone without consent.",
      ],
      [
        "Mocking boundaries",
        "Disregarding clearly expressed limits, privacy, or consent to assert access or control.",
      ],
      [
        "Non-consensual intimate recordings",
        "Photographing or recording someone in a vulnerable or intimate situation without their consent or after they have refused.",
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
        "Refusing to accept ‘no’",
        "Repeatedly disregarding a clear refusal or boundary.",
      ],
      [
        "Refusing to leave",
        "Remaining in someone’s space after being asked to leave in order to intimidate or control.",
      ],
      [
        "Repeated unwanted contact",
        "Continuing contact after a clear request to stop, or engaging in conduct that creates fear or disruption.",
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
    title: "Physical safety",
    flags: [
      [
        "Harming or threatening to harm children, pets, or loved ones",
        "Using harm or threats against people or animals you care about to frighten, punish, or control you.",
      ],
      [
        "Physical violence",
        "Hitting, slapping, shoving, kicking, choking, restraining, or otherwise physically assaulting someone.",
      ],
      [
        "Preventing emergency, medical, or legal help",
        "Stopping someone from contacting emergency services, getting necessary care, reporting abuse, or seeking legal protection.",
      ],
      [
        "Pressuring or forcing drug or alcohol use",
        "Using pressure, coercion, or force to make someone consume drugs or alcohol, especially to lower their ability to choose or leave.",
      ],
      [
        "Reckless or dangerous driving",
        "Driving dangerously, threatening to crash, abandoning someone in an unsafe place, or using a vehicle to frighten or control them.",
      ],
      [
        "Trapping or preventing you from leaving",
        "Blocking exits, taking keys or transportation, locking someone in, or otherwise stopping them from leaving freely.",
      ],
      [
        "Weapon intimidation or use",
        "Displaying, threatening with, or using a weapon to frighten, harm, or control someone.",
      ],
    ],
  },
  {
    title: "Accountability",
    flags: [
      [
        "Avoiding meaningful support",
        "Repeatedly refusing appropriate support or help while ongoing harmful behavior remains unaddressed.",
      ],
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
        "Lack of self-reflection",
        "Repeatedly avoiding honest reflection on how their behavior affects others or making excuses instead of engaging with feedback.",
      ],
      [
        "Never apologizing",
        "Refusing to acknowledge harm or offer a genuine apology when one is warranted.",
      ],
      [
        "Non-apologies",
        "Recognizable forms include “I'm sorry, but…,” “I'm sorry you feel that way,” apologies paired with blame, and apologies used to shut down discussion.",
      ],
      [
        "Performative remorse",
        "Displaying regret for appearance or to regain access without meaningful accountability.",
      ],
      [
        "Promises without change",
        "Apologies or commitments to improve that are not followed by sustained behavior change.",
      ],
      [
        "Refusing repair",
        "Declining to address harm, rebuild trust, or take steps to make amends.",
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
        "Manufactured chaos",
        "Inventing or escalating crises or emergencies to gain attention, control, or compliance.",
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
        "Sabotaging important events",
        "Undermining birthdays, holidays, work events, or other important occasions, including by picking fights as a tactic.",
      ],
      [
        "Sleep deprivation through conflict",
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
    title: "Digital red flags",
    flags: [
      [
        "Controlling what you post",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
      ],
      [
        "Forcing digital isolation",
        "Blocking or deleting contacts, or coercing someone to block people, to limit communication or social support.",
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
        "Online activity monitoring",
        "Monitoring someone's online accounts, screen time, or digital activity to track or control them.",
      ],
      [
        "Technology-facilitated coercive control",
        "Using technology or online access to monitor, pressure, impersonate, or control someone.",
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
