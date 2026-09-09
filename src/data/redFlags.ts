import type { TagId } from "./tags";

export type RedFlag = {
  id: string;
  title: string;
  description: string;
  tags: TagId[];
  alternateNames: string[];
  alternateNameLinks: RedFlagLink[];
  seeAlso: RedFlagLink[];
};

export type RedFlagLink = {
  id: string;
  title: string;
};

type RedFlagEntry = readonly [
  title: string,
  description: string,
  tags: TagId[],
  metadata?: RedFlagMetadata,
];

type RedFlagMetadata = {
  alternateNames?: string[];
  seeAlso?: string[];
};

const redFlagEntries: RedFlagEntry[] = [
  [
    "Covert contracts",
    "Doing favors or making sacrifices while expecting an unspoken return, then treating the other person as though they agreed to it.",
    [],
  ],
  [
    "DARVO",
    "Deny, Attack, and Reverse Victim and Offender: a pattern to escape accountability when confronted, where someone denies wrongdoing, attacks the person raising it, and casts themselves as the real victim.",
    ["accountability", "lying"],
  ],
  [
    "Deflection",
    "Redirecting a discussion away from their behavior; whataboutism is a common form.",
    ["accountability"],
    {
      alternateNames: ["Whataboutism"],
      seeAlso: ["shifting-blame", "darvo"],
    },
  ],
  [
    "Double binds",
    "Creating situations where either choice can be used against you.",
    [],
  ],
  [
    "Emotional blackmail",
    "Using fear, obligation, or guilt to force compliance.",
    ["possessiveness"],
  ],
  [
    "Emotional hostage-taking",
    "Making you responsible for keeping them emotionally stable.",
    [],
  ],
  [
    "Feigning helplessness",
    "Weaponized incompetence: intentionally claiming or performing inability so responsibility shifts to another person.",
    ["accountability"],
    {
      alternateNames: ["Weaponized incompetence"],
      seeAlso: ["household-labor-inequality", "shifting-blame"],
    },
  ],
  [
    "Gaslighting",
    "Repeatedly undermining your confidence in your memory, perception, feelings, judgment, or ability to make decisions.",
    ["lying"],
  ],
  [
    "Guilt-tripping",
    "Making you feel selfish, cruel, or ungrateful for not doing what they want.",
    [],
  ],
  [
    "Impossible standards",
    "Expectations designed so you can never quite succeed.",
    [],
  ],
  [
    "Manufactured urgency",
    "Pressuring you to decide before you have time to think.",
    [],
  ],
  [
    "Martyrdom",
    "Conspicuously suffering or sacrificing so that you feel indebted.",
    ["accountability"],
  ],
  [
    "Moving the goalposts",
    "Changing what is required of you after you meet an expectation.",
    ["accountability"],
  ],
  [
    "Playing the victim",
    "Portraying themselves as the injured party to escape accountability or control your response.",
    ["accountability"],
  ],
  [
    "Scorekeeping",
    "Treating favors and affection as debts you must repay.",
    [],
  ],
  [
    "Shifting blame",
    "Making their behavior your responsibility, or attributing harmful choices to other people, circumstances, or forces outside oneself.",
    ["accountability"],
    { seeAlso: ["deflection", "projection"] },
  ],
  [
    "Threatening abandonment",
    "Repeatedly threatening to leave, divorce, break up, etc. to obtain compliance.",
    ["possessiveness"],
  ],
  [
    "Threatening self-harm",
    "Using threats of self-injury or suicide as leverage to prevent someone from leaving or setting a boundary.",
    ["violence"],
  ],
  [
    "Ultimatums",
    "Using threats of consequences to force a choice, particularly where ordinary negotiation would be possible.",
    [],
  ],
  [
    "Weaponized vulnerability",
    "Using disclosures, distress, trauma, or emotional crises to prevent you from setting boundaries.",
    ["boundaries"],
  ],
  [
    "Bad-faith interpretations",
    "Consistently choosing the least charitable interpretation of what you say.",
    [],
  ],
  [
    "Cheating",
    "Concealing another committed relationship or presenting an agreed-upon monogamous relationship as exclusive when it is not.",
    ["sexual", "lying", "boundaries"],
  ],
  [
    "Circular arguments",
    "Keeping an argument going without allowing resolution.",
    [],
  ],
  [
    "Conversation hijacking",
    "Making every discussion about their feelings or grievances.",
    [],
  ],
  [
    "Half-truths",
    "Presenting selected facts in a way that creates a misleading impression.",
    ["lying"],
  ],
  [
    "Interrogation",
    "Demanding exhaustive explanations for ordinary behavior or interactions with other people, to monitor or control someone.",
    ["possessiveness", "other-people"],
  ],
  [
    "Invalidation",
    "Treating your feelings or experiences as illegitimate.",
    [],
  ],
  [
    "Lying",
    "Knowingly giving false information, or withholding material information so that someone reaches a false conclusion, to mislead or avoid accountability.",
    ["lying"],
  ],
  [
    "Minimization",
    "Portraying a concern, experience, or harm as insignificant, unimportant, or ridiculous.",
    ["accountability"],
  ],
  [
    "Plausible deniability",
    "Behaving in ways that are deliberately difficult to call out or prove.",
    ["lying", "accountability"],
  ],
  [
    "Projection",
    "Accusing you of motives or behaviors that are actually theirs.",
    ["accountability"],
  ],
  [
    "Straw-manning",
    "Putting words in your mouth: misrepresenting what someone said or believes so it is easier to dismiss or attack.",
    [],
    {
      alternateNames: ["Putting words in your mouth"],
      seeAlso: ["bad-faith-interpretations", "semantic-arguments"],
    },
  ],
  [
    "Revisionist history",
    "Repeatedly rewriting what happened to favor their position.",
    ["lying"],
  ],
  [
    "Sealioning",
    "Relentless supposedly-reasonable questioning used to exhaust you rather than understand you.",
    [],
  ],
  [
    "Selective memory",
    "Conveniently “forgetting” agreements or incidents.",
    ["lying", "accountability"],
  ],
  [
    "Semantic arguments",
    "Obsessing over wording to avoid addressing the substance of a complaint.",
    ["accountability"],
  ],
  [
    "Boundary testing",
    "Making small violations to discover what you will tolerate.",
    ["boundaries"],
    { seeAlso: ["deliberately-creating-exceptions", "mocking-boundaries"] },
  ],
  [
    "Breadcrumbing",
    "Giving just enough attention or hope to keep someone invested.",
    [],
  ],
  [
    "Forced intimacy",
    "Pushing emotional, sexual, financial, or practical closeness faster than you want.",
    ["sexual", "boundaries"],
  ],
  [
    "Future faking",
    "Making grand promises about a shared future without genuine intention or follow-through.",
    ["lying"],
  ],
  [
    "Grooming",
    "Gradually establishing trust, dependency, secrecy, or normalized boundary violations in preparation for exploitation or abuse.",
    ["sexual", "boundaries", "isolation"],
  ],
  [
    "Hoovering",
    "Attempting to pull someone back into a harmful relationship after separation, often through affection, apologies, promises, or crises.",
    [],
  ],
  [
    "Hot-and-cold behavior",
    "Intermittent reinforcement: an unpredictable alternation between affection or reward and rejection or mistreatment.",
    [],
    {
      alternateNames: ["Intermittent reinforcement"],
      seeAlso: ["breadcrumbing", "love-bombing", "on-again-off-again"],
    },
  ],
  [
    "Idealization",
    "Placing you on a pedestal in an intense or unrealistic way.",
    [],
  ],
  [
    "Love bombing",
    "Overwhelming someone with affection, attention, promises, gifts, or commitment, particularly to accelerate intimacy or create dependency.",
    ["possessiveness"],
  ],
  [
    "Mirroring",
    "Strategically copying your interests, values, personality, or aspirations to manufacture a sense of extraordinary compatibility.",
    ["lying"],
  ],
  [
    "Premature commitment",
    "Aggressively pushing exclusivity, marriage, moving in, etc.",
    ["possessiveness"],
  ],
  [
    "Arrogance",
    "Acting superior to others, dismissing their needs, boundaries, or contributions.",
    ["accountability"],
  ],
  [
    "Entitlement",
    "Expecting special treatment or exceptions that others don’t get, while disregarding fairness or other people’s needs.",
    ["accountability"],
  ],
  [
    "Belittling",
    "Belittling, mockery, or ridicule that makes someone feel small, incapable, or unworthy.",
    [],
    {
      alternateNames: ["Mockery"],
      seeAlso: ["name-calling", "humiliation", "negging"],
    },
  ],
  [
    "Contempt",
    "Treating someone with scorn, disgust, or a sense of superiority.",
    [],
  ],
  [
    "Damaging property",
    "Damaging belongings or surroundings, punching walls, or throwing objects to frighten, punish, or assert power.",
    ["violence"],
    { seeAlso: ["intimidation", "threats"] },
  ],
  [
    "Sadistic pleasure",
    "Taking apparent pleasure in another person’s pain, humiliation, distress, or vulnerability, including delight in deceiving, manipulating, or having power over them.",
    ["violence"],
  ],
  [
    "Humiliation",
    "Causing shame or embarrassment to diminish someone or gain control over them, especially in public.",
    [],
    { seeAlso: ["belittling", "jokes-at-your-expense"] },
  ],
  [
    "Intimidation",
    "Using fear, implied power, or threatening conduct to influence someone’s choices.",
    ["violence"],
  ],
  [
    "“Jokes” at your expense",
    "Especially when objections are answered with “you're too sensitive.”",
    [],
  ],
  [
    "Menacing body language",
    "Using posture, proximity, gestures, or facial expressions to make someone feel afraid.",
    ["violence"],
  ],
  [
    "Name-calling",
    "Using insulting labels to demean someone or undermine their self-worth.",
    [],
  ],
  [
    "Needling / baiting",
    "Deliberately provoking a reaction and then criticizing the reaction.",
    [],
  ],
  [
    "Passive aggression",
    "Expressing hostility or resentment indirectly through sarcasm, avoidance, deliberate delays, or subtle sabotage instead of addressing it openly.",
    [],
  ],
  [
    "Prejudice and bigotry",
    "Expressing or acting on biased, hostile, demeaning, or discriminatory attitudes toward someone because of their race, gender, religion, sexuality, disability, nationality, or other identity.",
    ["other-people"],
  ],
  [
    "Explosive anger",
    "Rage episodes: explosive anger that leaves others afraid, silenced, or focused on managing the outburst.",
    ["violence"],
    { seeAlso: ["intimidation", "walking-on-eggshells"] },
  ],
  [
    "Reactive-abuse baiting",
    "Provoking someone toward an extreme response and then using it to characterize them as the aggressor.",
    ["accountability"],
  ],
  [
    "Schroedinger's asshole",
    "Saying or doing something hurtful, offensive, or boundary-testing, then claiming it was ‘just a joke’ only when challenged.",
    ["accountability"],
  ],
  [
    "Silent treatment",
    "Deliberately refusing communication as punishment or control.",
    [],
  ],
  [
    "Stonewalling",
    "Persistently shutting down attempts to discuss problems.",
    [],
  ],
  [
    "Threats",
    "Stating or implying harmful consequences to force compliance or create fear.",
    ["violence"],
  ],
  [
    "Veiled threats",
    "Hinting at harmful consequences without saying them directly.",
    ["violence"],
  ],
  [
    "Withholding as punishment or leverage",
    "Deliberately withholding contact, support, affection, approval, information, or cooperation as punishment or leverage, or making warmth or intimacy depend on someone’s compliance—keeping validation perpetually just out of reach.",
    ["possessiveness"],
    {
      alternateNames: ["Punitive withdrawal"],
      seeAlso: ["silent-treatment", "stonewalling"],
    },
  ],
  [
    "Controlling behavior",
    "Restricting or demanding control over aspects of your life—such as money, clothing, food, friendships, hobbies, medical care, sleep, transportation, work or education, passwords, or ordinary personal decisions—to reduce your autonomy.",
    ["possessiveness", "boundaries"],
  ],
  [
    "Double standards",
    "Applying standards selectively—allowing themselves freedoms they deny you—to excuse their own actions, judge you more harshly, or avoid accountability.",
    ["accountability"],
    { seeAlso: ["entitlement", "making-excuses"] },
  ],
  [
    "Economic sabotage",
    "Interfering with employment, credit, education, etc. to make independence harder.",
    ["possessiveness", "isolation"],
  ],
  [
    "Financial abuse",
    "Restricting, exploiting, or sabotaging finances to make someone dependent.",
    ["possessiveness"],
  ],
  [
    "Gatekeeping resources",
    "Controlling access to essentials such as money, housing, transportation, or information.",
    ["possessiveness", "isolation"],
  ],
  [
    "Household labor inequality",
    "Consistently expecting one partner to carry an unfair share of domestic work, care work, or planning.",
    ["accountability"],
  ],
  [
    "Jealousy or possessiveness framed as care",
    "Controlling conduct portrayed as protection, care, or love.",
    ["possessiveness"],
    { seeAlso: ["controlling-behavior", "baseless-cheating-accusations"] },
  ],
  [
    "Micromanagement",
    "Excessively directing everyday decisions or tasks to reduce another person’s independence.",
    ["possessiveness"],
  ],
  [
    "Non-consensual location tracking",
    "Demanding access to, placing, or using an app or device to track someone's movements or location without their agreement.",
    ["possessiveness", "boundaries", "technology"],
    { seeAlso: ["digital-stalking", "constant-check-ins"] },
  ],
  [
    "Reproductive coercion",
    "Interfering with contraception, pregnancy decisions, or reproductive autonomy.",
    ["sexual", "boundaries", "possessiveness"],
  ],
  [
    "Sexual coercion",
    "Pressure, threats, guilt, persistence, or retaliation used to obtain sexual activity rather than freely given consent.",
    ["sexual", "boundaries", "violence"],
  ],
  [
    "Undermining your other relationships",
    "Starting or escalating disputes with friends, family, or community—including picking fights before or after outings—or treating them as rivals and demanding attention, so that socializing becomes difficult and those relationships get crowded out.",
    ["isolation", "other-people", "possessiveness"],
    { seeAlso: ["social-isolation", "discrediting-friends-and-family"] },
  ],
  [
    "Creating dependency",
    "Systematically making you more reliant on them financially, socially, practically, or emotionally.",
    ["isolation", "possessiveness"],
    { seeAlso: ["social-isolation", "economic-sabotage"] },
  ],
  [
    "Constant check-ins",
    "Continually demanding updates about someone's whereabouts or activities, with immediate response expectations, or otherwise demanding so much availability and attention that other relationships, responsibilities, or rest are crowded out.",
    ["isolation", "possessiveness"],
    { seeAlso: ["non-consensual-location-tracking", "digital-stalking"] },
  ],
  [
    "Loyalty tests",
    "Requiring proofs of allegiance, or repeated or escalating demonstrations of loyalty or commitment, in ways that put relationships, values, or independence at risk.",
    ["isolation", "possessiveness"],
    { seeAlso: ["baseless-cheating-accusations", "jealousy-tests"] },
  ],
  [
    "Discrediting friends and family",
    "Convincing you that everyone close to you is bad for you.",
    ["isolation", "other-people", "lying"],
  ],
  [
    "Sabotaging plans or big events",
    "Disrupting arrangements, goals, or important occasions—like birthdays, holidays, or work events—including by picking fights as a tactic, to undermine someone’s autonomy, confidence, or independence.",
    ["other-people", "possessiveness", "isolation"],
  ],
  [
    "Social isolation",
    "Progressively separating you from friends, family, coworkers, or community.",
    ["isolation"],
  ],
  [
    "Us against the world",
    "Isolating someone from supportive people and outside viewpoints to increase dependency.",
    ["isolation", "other-people"],
    { seeAlso: ["social-isolation", "creating-dependency"] },
  ],
  [
    "Baseless cheating accusations",
    "Accusing someone of cheating without credible evidence, or requiring messages, photos, location details, or other evidence to prove their loyalty, to justify control, surveillance, or punishment.",
    ["possessiveness", "sexual"],
    {
      alternateNames: ["Demanding proof of fidelity"],
      seeAlso: ["jealousy-tests", "retroactive-jealousy"],
    },
  ],
  [
    "Checking your phone",
    "Inspecting someone’s phone or messages without consent to search for evidence of disloyalty.",
    ["possessiveness", "boundaries", "technology"],
  ],
  [
    "Jealousy tests",
    "Creating situations designed to test whether someone will become jealous or prove their loyalty.",
    ["possessiveness"],
  ],
  [
    "Controlling your social media",
    "Monitoring or restricting someone’s posts, follows, likes, or other online interactions to pressure, impersonate, or control them.",
    ["possessiveness", "boundaries", "technology"],
  ],
  [
    "Possessiveness",
    "Treating someone as property or using ownership claims to limit their independence or relationships.",
    ["possessiveness"],
  ],
  [
    "Retroactive jealousy",
    "Obsessive control, interrogation, or punishment concerning relationships that occurred before the current relationship.",
    ["possessiveness", "sexual"],
  ],
  [
    "Treating ordinary interactions as flirting",
    "Recasting neutral social contact as flirtation to accuse, shame, or control someone.",
    ["possessiveness", "other-people"],
  ],
  [
    "Invading privacy",
    "Framing ordinary privacy or personal boundaries as evidence of dishonesty or disloyalty.",
    ["possessiveness", "boundaries"],
  ],
  [
    "Comparison",
    "Repeatedly comparing you unfavorably with exes, friends, siblings, etc.",
    ["other-people"],
  ],
  [
    "Provoking jealousy",
    "Intentionally making you jealous to increase your investment or insecurity.",
    ["possessiveness", "other-people"],
  ],
  [
    "Jekyll and Hyde",
    "Public/private personality switching: behaving charmingly around others while treating you very differently in private.",
    ["lying"],
  ],
  [
    "Smear campaigns",
    "Spreading damaging claims to undermine your reputation or credibility—often called character assassination—particularly after confrontation or separation.",
    ["other-people", "lying"],
    {
      alternateNames: ["Character assassination"],
      seeAlso: ["triangulation", "discrediting-friends-and-family"],
    },
  ],
  [
    "Splitting",
    "Casting people as entirely good or bad and abruptly reversing that view in ways that create conflict, instability, or pressure.",
    [],
  ],
  [
    "Triangulation",
    "Using other people or shared contacts to create jealousy, rivalry, pressure, or harassment; overwhelm you; or bypass your boundaries.",
    ["other-people", "possessiveness"],
  ],
  [
    "Using children as leverage",
    "Using children, access to them, or concerns about them to pressure or control someone.",
    ["other-people", "possessiveness"],
  ],
  [
    "Backhanded compliments",
    "Giving praise that contains a put-down, criticism, or insult meant to undermine confidence.",
    [],
  ],
  [
    "Chronic criticism",
    "Persistently finding fault in ways that erode confidence and make approval feel unattainable.",
    [],
  ],
  [
    "Competence undermining",
    "Repeatedly making you doubt your ability to handle things yourself.",
    [],
  ],
  [
    "Devaluation",
    "Shifting from idealizing you to treating you as inferior or worthless.",
    [],
  ],
  [
    "Infantilization",
    "Treating an adult partner like a child incapable of making decisions.",
    ["possessiveness"],
  ],
  [
    "Making you prove your worth",
    "Keeping acceptance or affection conditional on continual demonstrations of value.",
    [],
  ],
  [
    "Negging",
    "Calculated backhanded compliments or insults intended to lower confidence and increase desire for approval.",
    [],
  ],
  [
    "Objectification",
    "Treating someone primarily as a body, sexual object, status symbol, or source of utility while disregarding their autonomy or personhood.",
    ["sexual"],
  ],
  [
    "Pathologizing normal reactions",
    "Describing reasonable anger, sadness, or disagreement as evidence that you're “crazy,” “unstable,” etc.",
    [],
  ],
  [
    "Sharing private information",
    "Disclosing someone’s personal information, messages, or experiences without their consent, to control, shame, threaten, punish, or otherwise exert leverage over them.",
    ["boundaries"],
  ],
  [
    "Shallowness",
    "Valuing appearances over substance: judging or valuing someone mainly for their appearance or superficial traits rather than their character, feelings, or abilities.",
    [],
  ],
  [
    "Targeting insecurities or past trauma",
    "Targeting someone’s confidence, identity, past trauma, or other vulnerabilities to make them easier to control.",
    [],
    { seeAlso: ["competence-undermining", "weaponizing-therapy-language"] },
  ],
  [
    "Weaponizing therapy language",
    "Using therapy or psychological jargon to confuse, dismiss, pathologize, evade accountability, or control someone.",
    ["accountability"],
  ],
  [
    "Deliberately creating “exceptions”",
    "Inventing special circumstances that supposedly make another person’s stated limits not apply.",
    ["boundaries"],
  ],
  [
    "Digital stalking",
    "Using online accounts, devices, screen time, read receipts, or other digital activity to monitor, pressure, impersonate, or control someone without their consent.",
    ["boundaries", "possessiveness", "technology"],
  ],
  [
    "Mocking boundaries",
    "Ridiculing, trivializing, or belittling someone for stating or enforcing a boundary.",
    ["boundaries"],
  ],
  [
    "Secret pics or recordings",
    "Photographing or recording someone in a vulnerable or intimate situation without their consent or after they have refused.",
    ["sexual", "boundaries", "technology"],
  ],
  [
    "Privacy invasions",
    "Accessing personal space, information, or communications without permission.",
    ["boundaries"],
  ],
  [
    "Punishing boundaries",
    "Responding to a boundary or independent choice with anger, withdrawal, retaliation, or other pressure to make it costly.",
    ["boundaries", "isolation", "possessiveness"],
  ],
  [
    "Reading private messages",
    "Accessing someone’s messages or communications without permission to monitor or obtain private information.",
    ["boundaries", "possessiveness", "technology"],
  ],
  [
    "Refusing to accept ‘no’",
    "Repeatedly disregarding a clear refusal or boundary.",
    ["boundaries"],
    { seeAlso: ["sexual-boundary-violations", "repeated-unwanted-contact"] },
  ],
  [
    "Refusing to leave",
    "Remaining in someone’s space after being asked to leave in order to intimidate or control.",
    ["boundaries", "violence"],
  ],
  [
    "Repeated unwanted contact",
    "Continuing contact after a clear request to stop, or engaging in conduct that creates fear or disruption.",
    ["boundaries", "possessiveness"],
    { seeAlso: ["stalking", "showing-up-uninvited"] },
  ],
  [
    "Sexual boundary violations",
    "Ignoring stated sexual limits, consent, or refusal to obtain access or activity someone has not agreed to.",
    ["sexual", "boundaries"],
  ],
  [
    "Showing up uninvited",
    "Arriving at someone’s home, work, or activities without invitation after their wishes are clear.",
    ["boundaries", "possessiveness"],
  ],
  [
    "Stalking",
    "Repeated unwanted monitoring, contact, or presence that causes fear or disrupts daily life.",
    ["boundaries", "possessiveness"],
  ],
  [
    "Treating boundaries as rejection",
    "Interpreting another person’s limits as a personal rejection and using guilt or pressure to undo them.",
    ["boundaries"],
  ],
  [
    "Unwanted physical contact",
    "Touching someone without consent or after they have indicated they do not want it.",
    ["sexual", "boundaries", "violence"],
  ],
  [
    "Dangerous driving",
    "Driving recklessly, threatening to crash, abandoning someone in an unsafe place, or using a vehicle to frighten or control them.",
    ["violence"],
  ],
  [
    "Feeling unsafe around them",
    "A persistent sense of fear, unease, or need to protect yourself around someone, especially alongside boundary violations or other concerning behavior. Treat it as a reason to slow down, create distance, seek support, and pay attention to concrete patterns—not as proof of intent or a basis for stereotyping.",
    ["violence"],
  ],
  [
    "Harming or threatening children, pets, or loved ones",
    "Using harm or threats against people or animals you care about to frighten, punish, or control you.",
    ["violence", "other-people"],
  ],
  [
    "Physical violence",
    "Hitting, slapping, shoving, kicking, choking, restraining, or otherwise physically assaulting someone.",
    ["violence"],
  ],
  [
    "Pressuring with drugs or alcohol",
    "Using pressure, coercion, or force to make someone consume drugs or alcohol, especially to lower their ability to choose or leave.",
    ["violence", "boundaries"],
  ],
  [
    "Preventing you from getting help",
    "Stopping someone from contacting emergency services, getting necessary care, reporting abuse, or seeking legal protection.",
    ["violence", "isolation"],
  ],
  [
    "Stopping you from leaving",
    "Blocking exits, taking keys or transportation, locking someone in, or otherwise stopping them from leaving freely.",
    ["violence", "boundaries"],
  ],
  [
    "Weapons",
    "Displaying, threatening with, or using a weapon to frighten, harm, or control someone.",
    ["violence"],
  ],
  [
    "Demanding immediate forgiveness",
    "Pressuring someone to forgive quickly before acknowledging harm or making a meaningful repair.",
    ["accountability"],
  ],
  [
    "Fragile egos",
    "Responding to ordinary criticism, disagreement, or another person’s success with defensiveness, anger, or retaliation.",
    ["accountability"],
  ],
  [
    "Lack of self-reflection",
    "Repeatedly avoiding honest reflection on how their behavior affects others or making excuses instead of engaging with feedback.",
    ["accountability"],
  ],
  [
    "Making excuses",
    "Offering justifications that minimize harm instead of taking responsibility for it.",
    ["accountability"],
  ],
  [
    "Never apologizing",
    "Refusing to acknowledge harm or offer a genuine apology when one is warranted.",
    ["accountability"],
  ],
  [
    "Non-apologies",
    "Recognizable forms include “I'm sorry, but…,” “I'm sorry you feel that way,” apologies paired with blame, and apologies used to shut down discussion.",
    ["accountability"],
    {
      alternateNames: ["Conditional apologies"],
      seeAlso: ["making-excuses", "using-an-apology-to-end-discussion"],
    },
  ],
  [
    "Not getting help",
    "Repeatedly refusing appropriate support or help while ongoing harmful behavior remains unaddressed.",
    ["accountability"],
    { seeAlso: ["promises-without-change", "lack-of-self-reflection"] },
  ],
  [
    "Performative remorse",
    "Displaying regret for appearance or to regain access without meaningful accountability.",
    ["accountability", "lying"],
  ],
  [
    "Promises without change",
    "Apologies or commitments to improve that are not followed by sustained behavior change.",
    ["accountability", "lying"],
    { seeAlso: ["performative-remorse", "non-apologies"] },
  ],
  [
    "Avoiding accountability",
    "After causing harm, declining to acknowledge it, rebuild trust, or make amends—avoiding responsibility for harm you caused. Not to be confused with someone else choosing to step back from a toxic relationship, which is a healthy boundary, not a red flag.",
    ["accountability"],
  ],
  [
    "Retaliating when confronted",
    "Responding to concerns with punishment, anger, or counterattacks instead of engagement.",
    ["accountability", "violence"],
  ],
  [
    "Treating consequences as persecution",
    "Framing reasonable boundaries or consequences as unfair persecution to avoid accountability.",
    ["accountability"],
  ],
  [
    "Using an apology to end discussion",
    "Offering an apology to shut down discussion rather than engaging with the harm or repairing it.",
    ["accountability"],
  ],
  [
    "Drama triangle",
    "The Karpman drama triangle: creating or escalating difficulties, then positioning themselves as the rescuer to gain gratitude or dependence.",
    ["lying"],
  ],
  [
    "Crisis bonding",
    "Repeatedly using emergencies or intense conflict/reconciliation cycles to create closeness.",
    [],
  ],
  [
    "Constant chaos",
    "Inventing or escalating crises or emergencies to gain attention, control, or compliance, keeping the relationship in a recurring state of emergency that consumes attention and resources.",
    ["lying"],
    { alternateNames: ["Manufactured chaos"] },
  ],
  [
    "Common denominator",
    "A consistent pattern of conflict, disrespect, betrayal, or instability across all of someone’s close relationships that is not acknowledged or addressed—if every relationship has the same problems, they might be the common denominator.",
    ["accountability", "other-people"],
  ],
  [
    "On-again, off-again",
    "Repeated breakups and reunions: repeatedly ending and restarting the relationship in ways that create instability or keep someone off balance.",
    [],
  ],
  [
    "Sleep deprivation",
    "Prolonging conflict or demands in ways that repeatedly disrupt someone’s sleep and leave them exhausted.",
    ["violence"],
  ],
  [
    "Unpredictable punishment",
    "Responding to ordinary behavior with inconsistent penalties that keep others anxious and guessing.",
    [],
  ],
  [
    "Walking-on-eggshells",
    "Creating an atmosphere where someone constantly monitors themselves to avoid an outburst or punishment.",
    [],
  ],
  [
    "Forcing digital isolation",
    "Blocking or deleting contacts, or coercing someone to block people, to limit communication or social support.",
    ["isolation", "other-people", "technology"],
    { seeAlso: ["social-isolation", "controlling-your-social-media"] },
  ],
  [
    "Sharing private photos",
    "Sharing or threatening to share intimate images without consent.",
    ["sexual", "boundaries", "technology"],
  ],
  [
    "Impersonation",
    "Pretending to be someone else online to deceive, monitor, or damage them.",
    ["lying", "boundaries", "technology"],
  ],
  [
    "Unauthorized account access",
    "Entering someone’s digital accounts without permission.",
    ["boundaries", "technology"],
  ],
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

// Strips punctuation before comparing so titles like "“Jokes” at your
// expense" sort under J instead of before A (relying on Intl's
// ignorePunctuation isn't safe: it silently no-ops on ICU builds that
// lack the data for it).
const sortKey = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();

const flagsById = redFlagEntries
  .map(([title, description, tags, metadata = {}]) => ({
    id: createId(title),
    title,
    description,
    tags,
    metadata,
  }));

const flagById = new Map(flagsById.map((flag) => [flag.id, flag]));
const canonicalIds = new Set(flagById.keys());
const aliasIds = new Set<string>();

export const redFlags: RedFlag[] = flagsById
  .map((flag) => {
    const alternateNames = flag.metadata.alternateNames ?? [];
    const alternateNameLinks = alternateNames.map((title) => {
      const id = slugify(title);

      if (!id || canonicalIds.has(id) || aliasIds.has(id)) {
        throw new Error(`Duplicate or invalid alternate name: ${title}`);
      }

      aliasIds.add(id);
      return { id, title };
    });
    const seeAlso = (flag.metadata.seeAlso ?? []).map((id) => {
      if (id === flag.id) {
        throw new Error(`A red flag cannot link to itself: ${flag.title}`);
      }

      const target = flagById.get(id);
      if (!target) {
        throw new Error(`Unknown see-also target: ${id}`);
      }

      return { id: target.id, title: target.title };
    });

    const { metadata: _metadata, ...redFlag } = flag;
    return { ...redFlag, alternateNames, alternateNameLinks, seeAlso };
  })
  .sort((a, b) => sortKey(a.title).localeCompare(sortKey(b.title)));
