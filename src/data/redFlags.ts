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
      [
        "Covert contracts",
        "Doing favors or making sacrifices while expecting an unspoken return, then treating the other person as though they agreed to it.",
      ],
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
        "Repeatedly undermining your confidence in your memory, perception, feelings, judgment, or ability to make decisions.",
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
      ["Shifting blame", "Making their behavior your responsibility."],
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
        "Cheating",
        "Concealing another committed relationship or presenting an agreed-upon monogamous relationship as exclusive when it is not.",
      ],
      [
        "Circular arguments",
        "Keeping an argument going without allowing resolution.",
      ],
      [
        "Concealing material information",
        "Withholding material information so that someone reaches a false conclusion.",
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
        "Conditional affection",
        "Making warmth or intimacy depend on your compliance, or withholding it as punishment or leverage.",
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
    ],
  },
  {
    title: "Punishment and conflicts",
    flags: [
      [
        "Arrogance and entitlement",
        "Acting superior or expecting special treatment while dismissing other people’s needs, boundaries, or contributions.",
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
        "Damaging property",
        "Damaging belongings or surroundings, punching walls, or throwing objects to frighten, punish, or assert power.",
      ],
      [
        "Enjoying others' distress",
        "Taking apparent pleasure in another person’s pain, humiliation, distress, or vulnerability, including delight in deceiving, manipulating, or having power over them.",
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
        "“Jokes” at your expense",
        "Especially when objections are answered with “you're too sensitive.”",
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
        "Passive aggression",
        "Expressing hostility or resentment indirectly through sarcasm, avoidance, deliberate delays, or subtle sabotage instead of addressing it openly.",
      ],
      [
        "Prejudice and bigotry",
        "Expressing or acting on biased, hostile, demeaning, or discriminatory attitudes toward someone because of their race, gender, religion, sexuality, disability, nationality, or other identity.",
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
        "Schroedinger's asshole",
        "Saying or doing something hurtful, offensive, or boundary-testing, then claiming it was ‘just a joke’ only when challenged.",
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
        "Controlling aspects of your life",
        "Restricting or demanding control over aspects of your life—such as money, clothing, food, friendships, hobbies, medical care, sleep, transportation, work or education, passwords, or ordinary personal decisions—to reduce your autonomy.",
      ],
      [
        "Demanding constant updates",
        "Continually demanding updates about someone's whereabouts or activities, including immediate response expectations.",
      ],
      [
        "Double standards",
        "Applying standards selectively—allowing themselves freedoms they deny you—to excuse their own actions, judge you more harshly, or avoid accountability.",
      ],
      [
        "Economic sabotage",
        "Interfering with employment, credit, education, etc. to make independence harder.",
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
        "Creating dependency",
        "Systematically making you more reliant on them financially, socially, practically, or emotionally.",
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
        "Baseless cheating accusations",
        "Accusing someone of cheating without credible evidence to justify control, surveillance, or punishment.",
      ],
      [
        "Checking your phone",
        "Inspecting someone’s phone or messages without consent to search for evidence of disloyalty.",
      ],
      [
        "Competing with your friends/family for attention",
        "Treating friends or family as rivals and demanding attention that crowds out those relationships.",
      ],
      [
        "Demanding proof of fidelity",
        "Requiring messages, photos, location details, or other evidence to prove someone’s loyalty.",
      ],
      [
        "Interrogating you about other people",
        "Pressing for exhaustive details about ordinary interactions with other people to monitor or control them.",
      ],
      [
        "Jealousy tests",
        "Creating situations designed to test whether someone will become jealous or prove their loyalty.",
      ],
      [
        "Policing social media",
        "Monitoring or restricting someone’s posts, follows, likes, or online interactions to control them.",
      ],
      [
        "Possessive language or behavior",
        "Treating someone as property or using ownership claims to limit their independence or relationships.",
      ],
      [
        "Retroactive jealousy",
        "Obsessive control, interrogation, or punishment concerning relationships that occurred before the current relationship.",
      ],
      [
        "Treating ordinary interactions as flirting",
        "Recasting neutral social contact as flirtation to accuse, shame, or control someone.",
      ],
      [
        "Treating privacy as suspicious",
        "Framing ordinary privacy or personal boundaries as evidence of dishonesty or disloyalty.",
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
        "Provoking jealousy",
        "Intentionally making you jealous to increase your investment or insecurity.",
      ],
      [
        "Public/private personality switching",
        "Behaving charmingly around others while treating you very differently in private.",
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
        "Triangulation",
        "Using other people or shared contacts to create jealousy, rivalry, pressure, or harassment; overwhelm you; or bypass your boundaries.",
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
        "Attacking your identity",
        "Targeting someone’s confidence, identity, or vulnerabilities to make them easier to control.",
      ],
      [
        "Backhanded compliments",
        "Giving praise that contains a put-down, criticism, or insult meant to undermine confidence.",
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
        "Objectification",
        "Treating someone primarily as a body, sexual object, status symbol, or source of utility while disregarding their autonomy or personhood.",
      ],
      [
        "Pathologizing normal reactions",
        "Describing reasonable anger, sadness, or disagreement as evidence that you're “crazy,” “unstable,” etc.",
      ],
      [
        "Sharing private information",
        "Sharing private information to control, shame, threaten, punish, or otherwise exert leverage over someone.",
      ],
      [
        "Valuing appearances over substance",
        "Judging or valuing someone mainly for their appearance or superficial traits rather than their character, feelings, or abilities.",
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
        "Weaponizing therapy language",
        "Using therapy or psychological jargon to confuse, dismiss, pathologize, evade accountability, or control someone.",
      ],
      [
        "Withholding approval",
        "Keeping validation perpetually just out of reach.",
      ],
    ],
  },
  {
    title: "Boundaries",
    flags: [
      [
        "Deliberately creating “exceptions”",
        "Inventing special circumstances that supposedly make another person’s stated limits not apply.",
      ],
      [
        "Digital stalking",
        "Using online accounts, devices, or digital activity to monitor someone without consent.",
      ],
      [
        "Mocking boundaries",
        "Ridiculing, trivializing, or belittling someone for stating or enforcing a boundary.",
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
        "Responding to a boundary with anger, withdrawal, retaliation, or other pressure to make it costly.",
      ],
      [
        "Reading private messages",
        "Accessing someone’s messages or communications without permission to monitor or obtain private information.",
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
        "Ignoring stated sexual limits, consent, or refusal to obtain access or activity someone has not agreed to.",
      ],
      [
        "Sharing private information without permission",
        "Disclosing someone’s personal information, messages, or experiences without their consent.",
      ],
      [
        "Showing up uninvited",
        "Arriving at someone’s home, work, or activities without invitation after their wishes are clear.",
      ],
      [
        "Stalking",
        "Repeated unwanted monitoring, contact, or presence that causes fear or disrupts daily life.",
      ],
      [
        "Treating boundaries as rejection",
        "Interpreting another person’s limits as a personal rejection and using guilt or pressure to undo them.",
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
        "Dangerous driving",
        "Driving recklessly, threatening to crash, abandoning someone in an unsafe place, or using a vehicle to frighten or control them.",
      ],
      [
        "Feeling unsafe around them",
        "A persistent sense of fear, unease, or need to protect yourself around someone, especially alongside boundary violations or other concerning behavior. Treat it as a reason to slow down, create distance, seek support, and pay attention to concrete patterns—not as proof of intent or a basis for stereotyping.",
      ],
      [
        "Harming or threatening children, pets, or loved ones",
        "Using harm or threats against people or animals you care about to frighten, punish, or control you.",
      ],
      [
        "Physical violence",
        "Hitting, slapping, shoving, kicking, choking, restraining, or otherwise physically assaulting someone.",
      ],
      [
        "Pressuring with drugs or alcohol",
        "Using pressure, coercion, or force to make someone consume drugs or alcohol, especially to lower their ability to choose or leave.",
      ],
      [
        "Preventing you from getting help",
        "Stopping someone from contacting emergency services, getting necessary care, reporting abuse, or seeking legal protection.",
      ],
      [
        "Preventing you from leaving",
        "Blocking exits, taking keys or transportation, locking someone in, or otherwise stopping them from leaving freely.",
      ],
      [
        "Weapons",
        "Displaying, threatening with, or using a weapon to frighten, harm, or control someone.",
      ],
    ],
  },
  {
    title: "Accountability",
    flags: [
      [
        "Demanding immediate forgiveness",
        "Pressuring someone to forgive quickly before acknowledging harm or making a meaningful repair.",
      ],
      [
        "Externalizing blame",
        "Attributing harmful choices to other people, circumstances, or forces outside oneself.",
      ],
      [
        "Fragile egos",
        "Responding to ordinary criticism, disagreement, or another person’s success with defensiveness, anger, or retaliation.",
      ],
      [
        "Lack of self-reflection",
        "Repeatedly avoiding honest reflection on how their behavior affects others or making excuses instead of engaging with feedback.",
      ],
      [
        "Making excuses",
        "Offering justifications that minimize harm instead of taking responsibility for it.",
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
        "Not getting help",
        "Repeatedly refusing appropriate support or help while ongoing harmful behavior remains unaddressed.",
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
        "Framing reasonable boundaries or consequences as unfair persecution to avoid accountability.",
      ],
      [
        "Using an apology to end discussion",
        "Offering an apology to shut down discussion rather than engaging with the harm or repairing it.",
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
        "Creating or escalating difficulties, then positioning themselves as the rescuer to gain gratitude or dependence.",
      ],
      [
        "Crisis bonding",
        "Repeatedly using emergencies or intense conflict/reconciliation cycles to create closeness.",
      ],
      [
        "Demanding demonstrations of devotion",
        "Requiring repeated or escalating proof of loyalty or commitment to keep the relationship secure.",
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
        "Repeatedly ending and restarting the relationship in ways that create instability or keep someone off balance.",
      ],
      [
        "Sabotaging important events",
        "Undermining birthdays, holidays, work events, or other important occasions, including by picking fights as a tactic.",
      ],
      [
        "Sleep deprivation through conflict",
        "Prolonging conflict or demands in ways that repeatedly disrupt someone’s sleep and leave them exhausted.",
      ],
      [
        "Unpredictable punishment",
        "Responding to ordinary behavior with inconsistent penalties that keep others anxious and guessing.",
      ],
      [
        "Walking-on-eggshells",
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
