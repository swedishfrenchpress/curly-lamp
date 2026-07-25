import type { Dict } from "./types";

/**
 * English is a faithful translation of sv.ts, not a second argument. When the
 * Swedish copy changes, this changes with it. Swedish institution names are
 * kept in Swedish with a gloss on first use — an English reader searching for
 * "Säkerhets- och integritetsskyddsnämnden" should find the real thing.
 */
const en: Dict = {
  lang: "en",
  langName: "English",
  otherLangName: "Svenska",
  dir: "ltr",

  site: {
    name: "Who Answers for Acus?",
    tagline: "On the silence around Palantir inside the Swedish police",
    description:
      "Swedish police have reportedly used an analysis platform from Palantir Technologies for at least five years. It is called Acus. Nobody in authority will explain what it does, how long it has run, or where Swedish citizens' data is stored.",
  },

  nav: {
    label: "Main navigation",
    items: [
      { route: "known", label: "What we know" },
      { route: "timeline", label: "Timeline" },
      { route: "acus", label: "What is Acus?" },
      { route: "questions", label: "The questions" },
      { route: "tips", label: "Contact" },
      { route: "about", label: "About" },
    ],
    langSwitch: "På svenska",
    themeToggle: "Toggle light and dark mode",
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
  },

  home: {
    meta: {
      title: "Who Answers for Acus?",
      description:
        "Swedish police have reportedly used Palantir's analysis platform for at least five years. It is called Acus. The Justice Minister has been asked twice in parliament — and answered that it is not his department.",
    },
    hero: {
      eyebrow: "Swedish Police Authority · Palantir Technologies · Acus",
      title: "Who answers for Acus?",
      lead: "According to reporting by Dagens ETC, the Swedish Police Authority has used an analysis platform from the American company Palantir Technologies for at least five years. It is called Acus. The company's staff work inside police headquarters at Kungsholmen in Stockholm. The police will neither confirm nor deny that the relationship exists. The Justice Minister has been asked about it twice in parliament — and answered that it is not his department.",
      primaryCta: { route: "known", label: "What we know — and don't" },
      secondaryCta: { route: "timeline", label: "See the timeline" },
    },

    statsBlock: {
      eyebrow: "Where things stand",
      title: "Four numbers",
      lead: "Not one of them has been confirmed by a public authority. That is the point.",
    },
    stats: [
      {
        value: "5 years",
        label: "How long the system has reportedly been in use",
        note: "Dagens ETC's investigation reports at least five years. The Police Authority has confirmed no start date, and the question of when the arrangement began was put to the government in parliament and left unanswered.",
        cite: ["etc-granskning", "realtid", "fraga-167"],
      },
      {
        value: "8 months",
        label: "How long police would neither confirm nor deny",
        note: "According to the reporting, the Police Authority spent eight months refusing to confirm or deny a relationship with Palantir, citing danger to national security.",
        cite: ["realtid", "etc-granskning"],
      },
      {
        value: "3 bodies",
        label: "Oversight bodies reportedly not informed",
        note: "The Police Authority's own supervisory board, the Swedish Authority for Privacy Protection (IMY), and the Commission on Security and Integrity Protection (SIN). If accurate, the system was built without any of the bodies meant to scrutinise police data handling being told.",
        cite: ["realtid"],
      },
      {
        value: "2 questions",
        label: "Times it has been formally asked in parliament",
        note: "A written question in November 2025 and an interpellation with a floor debate in February 2026. How long Acus has been in use and where the data is stored remain unanswered.",
        cite: ["fraga-167", "ip-301", "ip-debatt"],
      },
    ],

    questionsBlock: {
      eyebrow: "The core",
      title: "Five questions nobody has answered",
      lead: "They are not rhetorical. They were put by a member of parliament who also sits on the Police Authority's own supervisory board, through two formal procedures, and they remain open.",
    },
    questionsCta: { route: "questions", label: "Read the questions in full" },

    quote: {
      text: "The Police Authority decides for itself which IT services it procures.",
      attribution: "Gunnar Strömmer (M), Minister for Justice",
      context:
        "Answer to written question 2025/26:167, 19 November 2025. The questions concerned when the arrangement with Palantir began and where the analysed data is stored — in Sweden, within the EU, or in Palantir's cloud services outside the union. Neither was answered.",
      cite: ["fraga-167"],
      unverifiedNote:
        "Translated from the Swedish original. Check against the source document before publication.",
    },

    convergence: {
      eyebrow: "Why now",
      title: "Three things happened at once",
      lead: "Separately they are policy. Together they are an infrastructure — and it was finished while the underlying question went unanswered.",
      steps: [
        {
          label: "Since around 2020",
          title: "The analysis platform",
          body: "A system that, according to the reporting, links the police's own registers with data from Bank-ID, mobile operators and social media accounts, and can reportedly assemble a detailed profile of an individual in seconds.",
          cite: ["realtid", "gp"],
        },
        {
          label: "1 July 2026",
          title: "Real-time facial recognition",
          body: "On 26 May 2026 parliament passed the government's bill allowing police to use AI for real-time facial recognition. The law entered into force on 1 July 2026. Use requires authorisation from a prosecutor or a court and is limited to certain serious offences.",
          cite: ["prop-150", "juu28", "beslut"],
        },
        {
          label: "By 2029",
          title: "The cameras",
          body: "The Moderate Party has pledged to double the target for police camera surveillance: from 5,000 cameras by the end of 2027 to 10,000 by the end of 2029.",
          cite: ["m-kameror"],
        },
      ],
      closing:
        "Cameras that watch. Facial recognition that identifies. An analysis platform that connects whoever was identified to everything else the state knows about them. Each part has been treated as a separate question. Nobody has treated them as one system — and the only part never debated in public is the part that joins the others together.",
    },

    notWhat: {
      eyebrow: "To be clear",
      title: "This is not an allegation that the police broke the law",
      body: [
        "We are not claiming that the Police Authority has acted unlawfully. We do not know that. It is entirely possible that Acus was lawfully procured, properly regulated and carefully supervised.",
        "The problem is that no outsider can tell. A system of this reach ought to survive a public description of what it does, who supplies it, how it was procured and where the data sits. That description is what is missing.",
        "If the answers are unremarkable, it is hard to understand why they are not given.",
      ],
    },

    share: {
      eyebrow: "What you can do",
      title: "Pass the question on",
      lead: "This site runs no petition and collects nothing about you. The most useful thing you can do is make sure more people know the question was asked and not answered — and that it gets asked again.",
      cta: [
        { route: "known", label: "Read the summary" },
        { route: "tips", label: "Do you know something?" },
      ],
    },
  },

  known: {
    meta: {
      title: "What we know — and what we don't",
      description:
        "Separating what has been reported and documented from what remains unknown about the Swedish police's use of Palantir's analysis platform Acus.",
    },
    hero: {
      eyebrow: "Summary",
      title: "What we know — and what we don't",
      lead: "The left column rests on published journalism and public parliamentary documents. The right column is questions that were asked and not answered. We keep them apart deliberately.",
    },

    knownBlock: {
      eyebrow: "Documented",
      title: "This has been reported or is on the public record",
    },
    knownItems: [
      {
        text: "According to Dagens ETC's investigation, the Swedish police have spent at least five years building and using an analysis platform based on Palantir's Gotham. The Swedish version is called Acus.",
        cite: ["etc-granskning", "realtid", "gp"],
      },
      {
        text: "The reporting describes a system that compiles and visualises data from police surveillance and criminal registers together with data from Bank-ID, mobile operators and social media accounts.",
        cite: ["realtid", "gp"],
      },
      {
        text: "Palantir staff reportedly work inside police headquarters at Kungsholmen. The conditions are described as unusually strict: no company-branded clothing, unmarked bags, and a prohibition on discussing the work even with a partner.",
        cite: ["realtid"],
      },
      {
        text: "For an extended period the Police Authority responded that it could neither confirm nor deny a relationship with Palantir, citing danger to national security.",
        cite: ["realtid", "etc-granskning"],
      },
      {
        text: "According to the investigation, neither the Police Authority's supervisory board, nor IMY, nor the Commission on Security and Integrity Protection had been informed.",
        cite: ["realtid"],
      },
      {
        text: "On 6 November 2025 Petter Löberg (Social Democrats) put a written question to Minister for Justice Gunnar Strömmer (Moderate Party) about the arrangement. Löberg himself sits on the Police Authority's supervisory board.",
        cite: ["fraga-167", "realtid"],
      },
      {
        text: "On 19 November 2025 Strömmer answered that the Police Authority decides for itself which IT services it procures, that its operations are covered by extensive regulation and oversight, and directed questions about procurement to the authority.",
        cite: ["fraga-167"],
      },
      {
        text: "On 23 January 2026 Löberg escalated with an interpellation posing five questions, including on algorithmic transparency, remedies for individuals, and the risk of long-term dependence on an American commercial actor. The floor debate was held on 16 February 2026.",
        cite: ["ip-301", "ip-debatt"],
      },
      {
        text: "On 26 May 2026 parliament decided that police may use AI for real-time facial recognition. The law entered into force on 1 July 2026.",
        cite: ["prop-150", "juu28", "beslut"],
      },
    ],

    unknownBlock: {
      eyebrow: "Unanswered",
      title: "This we still do not know",
    },
    unknownItems: [
      {
        text: "When the arrangement with Palantir actually began, and who inside the state decided on it.",
        cite: ["fraga-167"],
      },
      {
        text: "Where the analysed data is stored — in Sweden, within the EU, or in Palantir's cloud services outside the union. The question was put in exactly those terms and left unanswered.",
        cite: ["fraga-167"],
      },
      {
        text: "How the system was procured: whether there was a tender, which suppliers took part, what was required of them, and what the contract is worth.",
      },
      {
        text: "What Acus technically is. Descriptions move between calling it a database, an analysis tool and an AI system. The difference has legal consequences.",
      },
      {
        text: "Whether any Swedish or European supplier was assessed, and on what grounds any were ruled out.",
      },
      {
        text: "What safeguards exist against data from separate registers being combined in ways not intended when it was collected.",
      },
      {
        text: "Whether any supervisory authority has examined the system in operation — not the regulations around it, but the system.",
      },
      {
        text: "How an individual can find out whether they appear in the system, and what they can do about it.",
        cite: ["ip-301"],
      },
    ],

    method: {
      eyebrow: "On the evidence",
      title: "How we handle what we cannot verify",
      body: [
        "The left column comes from published journalism and public parliamentary documents. We have not independently verified the journalism and do not claim to have done so. Where a claim comes from reporting, we say so.",
        "The parliamentary documents are primary sources and are linked directly. Read them yourself — the minister's answers are stronger in the original than in our summary.",
        "If you find an error, we want to know. Corrections are published openly.",
      ],
    },
  },

  timeline: {
    meta: {
      title: "Timeline",
      description:
        "From the 2025 investigation to the real-time facial recognition law of 1 July 2026 — and the questions asked in between without being answered.",
    },
    hero: {
      eyebrow: "Chronology",
      title: "What happened, and in what order",
      lead: "The order is the whole point. The question of what the state already had was asked before parliament decided what the state should additionally get. It was unanswered then. It is unanswered now.",
    },
    entries: [
      {
        date: "2020",
        dateLabel: "Around 2020",
        kind: "reporting",
        kindLabel: "Reporting",
        title: "Work on Acus begins",
        body: "According to Dagens ETC's investigation, the Police Authority has worked on the Swedish version of Palantir's Gotham for at least five years. No authority has confirmed a start date — the question was later put in parliament and not answered.",
        cite: ["etc-granskning", "realtid"],
        aside:
          "The year follows from the phrase “at least five years” in the reporting; it is not a confirmed date.",
      },
      {
        date: "2025",
        dateLabel: "2025",
        kind: "reporting",
        kindLabel: "Reporting",
        title: "Dagens ETC publishes its investigation",
        body: "The existence of Acus, the presence of Palantir staff inside police headquarters at Kungsholmen, and the secrecy conditions become public. The Police Authority reportedly spent eight months neither confirming nor denying the relationship, citing danger to national security. The reporting is picked up by Göteborgs-Posten and Realtid among others.",
        cite: ["etc-granskning", "realtid", "gp"],
      },
      {
        date: "2025-11-06",
        dateLabel: "6 November 2025",
        kind: "parliament",
        kindLabel: "Parliament",
        title: "Written question 2025/26:167",
        body: "Petter Löberg (S) asks Minister for Justice Gunnar Strömmer (M) whether the government approved or was informed about the arrangement, when it began, and where the analysed data is stored.",
        cite: ["fraga-167"],
      },
      {
        date: "2025-11-19",
        dateLabel: "19 November 2025",
        kind: "parliament",
        kindLabel: "Parliament",
        title: "The minister answers — without answering",
        body: "Strömmer replies that the Police Authority decides for itself which IT services it procures, that its operations are covered by extensive regulation and oversight, and that questions about procurement should go to the authority. The questions of timing and storage location are not addressed.",
        cite: ["fraga-167"],
      },
      {
        date: "2026-01-23",
        dateLabel: "23 January 2026",
        kind: "parliament",
        kindLabel: "Parliament",
        title: "Interpellation 2025/26:301",
        body: "Löberg escalates with five questions: on decisions taken on the basis of non-transparent algorithms, on transparency and remedies for individuals, on whether a comprehensive legal and privacy impact assessment has been carried out, on the risk of long-term dependence on an American commercial actor, and on whether the government intends to introduce stricter national guidelines for commercial AI platforms in law enforcement.",
        cite: ["ip-301"],
      },
      {
        date: "2026-02-16",
        dateLabel: "16 February 2026",
        kind: "parliament",
        kindLabel: "Parliament",
        title: "Interpellation debate in the chamber",
        body: "The question is debated on the floor of parliament. The minister maintains that the police choose their own tools and that Swedish regulation provides sufficient oversight.",
        cite: ["ip-debatt"],
        aside:
          "The full debate is available on the Riksdag's web TV. We have not yet gone through the transcript line by line.",
      },
      {
        date: "2026-03",
        dateLabel: "March 2026",
        kind: "law",
        kindLabel: "Legislation",
        title: "Government bill 2025/26:150",
        body: "The government presents its proposal allowing police to use AI for real-time facial recognition.",
        cite: ["prop-150"],
      },
      {
        date: "2026-05-21",
        dateLabel: "21 May 2026",
        kind: "law",
        kindLabel: "Legislation",
        title: "The Justice Committee backs the bill",
        body: "The committee endorses the proposal in report 2025/26:JuU28. The Left Party files a motion against it.",
        cite: ["juu28"],
      },
      {
        date: "2026-05-26",
        dateLabel: "26 May 2026",
        kind: "law",
        kindLabel: "Legislation",
        title: "Parliament passes the law",
        body: "Police, and in certain cases the Security Service, may use real-time facial recognition where strictly necessary to locate or identify certain people — including suspected victims of human trafficking, where there is an imminent risk a person will commit a serious offence, and where someone is reasonably suspected of a crime carrying at least four years' imprisonment. Use requires authorisation from a prosecutor or a court.",
        cite: ["beslut", "juu28"],
      },
      {
        date: "2026-07-01",
        dateLabel: "1 July 2026",
        kind: "law",
        kindLabel: "Legislation",
        title: "The law enters into force",
        body: "Real-time facial recognition becomes lawful for the police under the conditions parliament set.",
        cite: ["prop-150"],
      },
      {
        date: "2026-07-25",
        dateLabel: "Today",
        kind: "politics",
        kindLabel: "Where we are",
        title: "The questions from November 2025 remain unanswered",
        body: "How long Acus has been in use, where the data is stored, how the system was procured, and why no Swedish or European supplier was chosen — none of it has been answered publicly. Meanwhile the Moderate Party has pledged to double the police camera surveillance target to 10,000 cameras by the end of 2029.",
        cite: ["m-kameror"],
      },
    ],
    closing: {
      title: "Put it together",
      body: [
        "An analysis system whose scope nobody will describe. A law giving police the ability to identify people in real time. An election pledge to double the number of cameras feeding the system images.",
        "Parliament debated the middle piece properly. The first piece — the one that determines what happens to the information after someone has been identified — has never been the subject of a public decision.",
      ],
    },
  },

  acus: {
    meta: {
      title: "What is Acus?",
      description:
        "A plain-language explanation of what Palantir's Gotham platform does, what the Swedish version Acus is reported to do, and why the difference between 'database' and 'AI system' matters.",
    },
    hero: {
      eyebrow: "Explainer",
      title: "What is Acus, actually?",
      lead: "Short answer: we do not know for certain, and that is itself the problem. Here is what has been reported, what Palantir's platform generally does, and where the line between the two sits.",
    },
    sections: [
      {
        title: "What Palantir sells is not a database",
        body: [
          "Palantir Technologies is an American software company whose Gotham platform is supplied to police, intelligence and defence agencies. The company does not normally build new registers. It builds a layer on top of the registers an agency already has.",
          "The value is in the joining. Data collected for different purposes, held in different systems, under different legal bases, is brought into a common model where people, phone numbers, vehicles, addresses and events become searchable objects with relationships to one another.",
          "This is why the question “is it just a database?” misses. A database stores what someone put in it. A platform of this kind generates connections that existed in none of the source registers.",
        ],
      },
      {
        title: "What that means in practice",
        body: [
          "If an investigator can look up a phone number in one system, see who paid an invoice in another and a vehicle movement in a third, assembling the picture takes work, time and decisions. Every step leaves a trace and can be challenged.",
          "Once the joining is already done, those steps disappear. According to Dagens ETC's investigation, an investigator can produce a detailed profile of a Swedish citizen in seconds.",
          "The seconds are not the problem. The problem is that the friction in between was also a form of control.",
        ],
      },
      {
        title: "The difference between 'tool' and 'AI' is not semantics",
        body: [
          "Descriptions of Acus shift between analysis tool, intelligence platform and AI program. Which it is matters.",
          "If the system only displays what a human asked for, it is a search tool. If it ranks, scores or suggests which people are of interest, it has crossed into shaping decisions by a public authority — and that triggers a very different set of requirements around transparency, impact assessment, and an individual's ability to have a decision reviewed.",
          "This is fundamentally what Petter Löberg's interpellation tried to establish. The question of non-transparent algorithms was put explicitly. It received no specific answer.",
        ],
      },
      {
        title: "Why embedded supplier staff is unusual",
        body: [
          "A public authority buying software is unremarkable. The supplier's employees sitting inside the authority's own building, building and running the system, is something else — it means the understanding of how the system actually works sits partly with the supplier rather than with the state.",
          "According to the reporting the conditions are also unusually strict: staff are not to wear company branding, are to use unmarked bags, and may not discuss their work even with a partner.",
          "Secrecy about police methods is normal and often justified. Secrecy about which company supplies a core part of the infrastructure is a different thing. The first protects investigations. The second mostly protects a contract from scrutiny.",
        ],
      },
      {
        title: "The dependence question",
        body: [
          "If an American supplier builds and runs the system, a question arises that is not about privacy but about sovereignty: what happens if the relationship ends, if export conditions change, or if US law gives American authorities a claim over data handled by an American company?",
          "That was the interpellation's fourth question. It too lacks a public answer.",
        ],
      },
    ],

    dataBlock: {
      eyebrow: "According to the reporting",
      title: "Data the system is said to work with",
      lead: "This list comes from published journalism, not from an official description. We have not seen system documentation and do not claim the list is complete or final.",
    },
    dataSources: [
      { text: "Police surveillance and criminal registers", cite: ["realtid", "gp"] },
      { text: "Data linked to Bank-ID", cite: ["realtid", "gp"] },
      { text: "Data from mobile operators", cite: ["realtid", "gp"] },
      { text: "Social media accounts and content", cite: ["realtid", "gp"] },
    ],

    caveat: {
      eyebrow: "Where the line sits",
      title: "What this page is not",
      body: [
        "The sections on what Palantir's platform generally does draw on the company's own product descriptions and on public documentation from other countries where the system has been used. They do not necessarily describe the Swedish installation.",
        "It is entirely possible that Acus is heavily constrained compared with what the platform can do. If so, it would be good to be told.",
        "A deeper review of Palantir's product portfolio, of the safeguards the company says it builds in, and of which Swedish and European suppliers could have delivered comparable capability is under way. It will be published here when it is finished and sourced.",
      ],
    },
  },

  questions: {
    meta: {
      title: "The questions",
      description:
        "The specific questions put to the Swedish government about police use of Palantir, what was actually answered, and what remains under investigation.",
    },
    hero: {
      eyebrow: "The questions",
      title: "Asked. Not answered.",
      lead: "Every question below was put formally, in parliament, by a member who also sits on the Police Authority's supervisory board. We set out what was asked and what was answered, and leave the distance between them to the reader.",
    },
    openQuestions: [
      {
        id: "duration",
        number: "01",
        question: "How long has Acus been in use, and who decided on it?",
        why: "A system that has run for five years has had time to shape how the police work. If nobody can say when it started, nobody can say what decision it rests on.",
        askedLabel: "Asked",
        asked:
          "Written question 2025/26:167, 6 November 2025, and interpellation 2025/26:301, 23 January 2026.",
        responseLabel: "The answer",
        response:
          "The Justice Minister stated that the Police Authority decides for itself which IT services it procures, and that this is not something he or the government approves or receives special information about. Timing was not addressed.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["fraga-167", "ip-301"],
      },
      {
        id: "storage",
        number: "02",
        question:
          "Where is the data stored — in Sweden, within the EU, or in Palantir's cloud outside the union?",
        why: "The answer determines which law governs the data, who can in practice reach it, and what happens to it if the relationship with the supplier changes.",
        askedLabel: "Asked",
        asked: "Written question 2025/26:167, 6 November 2025.",
        responseLabel: "The answer",
        response:
          "The question was put in exactly those terms and was not answered. The minister referred instead to the extensive regulation and oversight covering police data processing.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["fraga-167"],
      },
      {
        id: "procurement",
        number: "03",
        question: "How was the system procured?",
        why: "Public procurement is public for a reason. If there was a tender it should be describable: what was required, who bid, how bids were evaluated, and what the contract is worth.",
        askedLabel: "Asked",
        asked: "Written question 2025/26:167, 6 November 2025.",
        responseLabel: "The answer",
        response:
          "The question was referred onward to the Police Authority. According to the reporting, the authority has declined questions about its relationship with Palantir, citing danger to national security.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["fraga-167", "realtid"],
      },
      {
        id: "vendor",
        number: "04",
        question:
          "Why an American military and intelligence supplier rather than a Swedish or European one?",
        why: "Sweden has a substantial defence and security industry and a functioning software sector. If no domestic or European supplier was considered viable, that is a remarkable statement in itself. If they were considered and ruled out, the reasoning should be capable of being set out.",
        askedLabel: "Asked",
        asked:
          "Raised indirectly through the interpellation's question on long-term dependence on an American commercial actor, 23 January 2026.",
        responseLabel: "The answer",
        response:
          "The minister has maintained that the choice of tools is the authority's own. No reasoning about supplier alternatives has been set out publicly.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["ip-301", "ip-debatt"],
      },
      {
        id: "oversight",
        number: "05",
        question: "Which supervisory body has actually examined Acus in operation?",
        why: "Pointing out that oversight exists is not the same as oversight having been exercised. According to the investigation, neither the supervisory board, nor IMY, nor the Commission on Security and Integrity Protection had been informed.",
        askedLabel: "Asked",
        asked:
          "Interpellation 2025/26:301, 23 January 2026, including through the question of whether a comprehensive legal and privacy impact assessment had been carried out.",
        responseLabel: "The answer",
        response:
          "The minister described the Swedish regulatory and oversight framework in general terms. No statement has been made that an examination of this particular system was carried out.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["ip-301", "realtid"],
      },
    ],

    researchBlock: {
      eyebrow: "In progress",
      title: "What we are working on finding out",
      lead: "We publish this openly rather than waiting until everything is complete. If you hold something that belongs under any of these headings, we would like to hear from you.",
    },
    research: [
      {
        title: "Palantir's product portfolio and stated safeguards",
        question:
          "What does Palantir actually sell to law enforcement, and what technical and contractual limits does the company say it builds in?",
        status: "in-progress",
        statusLabel: "In progress",
        detail:
          "We are working through the company's own product documentation and public material from other countries where the platform has been used, in order to distinguish standard capability from country-specific configuration.",
      },
      {
        title: "Data harmonisation in practice",
        question:
          "How does the platform handle registers that follow no common standard — and what happens to the error rate when data from different sources is joined automatically?",
        status: "in-progress",
        statusLabel: "In progress",
        detail:
          "Joining data collected for different purposes is where both the value and the risk arise. Incorrect links are not a theoretical problem; they have consequences for individuals.",
      },
      {
        title: "The procurement",
        question:
          "Is there a case number, a contract, a bid evaluation or a procurement decision that can be requested?",
        status: "open",
        statusLabel: "Open",
        detail:
          "We are mapping which documents should reasonably exist at the Police Authority and the National Agency for Public Procurement, and which grounds for secrecy are likely to be invoked.",
      },
      {
        title: "Swedish and European alternatives",
        question:
          "Which suppliers could have built comparable capability within Sweden or the EU?",
        status: "open",
        statusLabel: "Open",
        detail:
          "The point is not to nominate a favourite. The point is that if realistic alternatives existed, why they were not chosen becomes a question that deserves an answer.",
      },
      {
        title: "The cost",
        question: "What has this cost taxpayers, and over what period?",
        status: "open",
        statusLabel: "Open",
        detail:
          "Cost figures are often easier to obtain than technical descriptions, and can themselves reveal the scope and duration of a contract.",
      },
    ],

    foia: {
      eyebrow: "Freedom of information",
      title: "We are requesting documents — and so can you",
      body: [
        "Sweden's principle of public access gives anyone the right to request official documents from public authorities. You do not have to say who you are or why you are asking. The authority must respond promptly, and if it refuses it must state the ground for secrecy — a decision that can be appealed to the administrative court of appeal.",
        "A refusal is not a defeat. A written refusal citing a specific ground is itself information: it shows what the authority believes it needs to protect and under what legal basis. Several refusals pointing in different directions are more informative still.",
        "We will publish our own requests and the responses we receive, whatever the outcome. If you have already requested something in this matter, we would like to see the reply.",
      ],
    },
  },

  tips: {
    meta: {
      title: "Contact",
      description:
        "Do you know something about Acus, the procurement, or how the system is used? Read this first — the risks are real and we are not going to downplay them.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Do you know something?",
      lead: "Read this entire page before contacting us. We are not going to soften the risks to make getting in touch feel easier.",
    },

    riskBlock: {
      eyebrow: "Read first",
      title: "Before you get in touch",
    },
    riskItems: [
      "Never use a work computer, work phone, work email account or work network. That includes simply reading this page.",
      "Assume your employer can see which network resources you use, and that access logs in internal systems are retained and can be reviewed after the fact.",
      "Do not tell colleagues you are considering getting in touch. Most leaks are traced through who knew, not through technology.",
      "If you are bound by secrecy or a duty of confidentiality, disclosure may carry legal consequences. The constitutional protections for informants in Swedish press and expression law are far-reaching but not unlimited, and the exceptions are real.",
      "We are not lawyers and cannot give you legal advice. If you are considering disclosing information covered by secrecy, speak to a lawyer, or to an established newsroom with source protection, before you speak to us.",
      "Consider whether a newsroom is the right recipient rather than us. Dagens ETC has already investigated this and enjoys constitutional source protection in a way that we do not. That is often the better choice, and we would rather say so than not.",
    ],

    channelsBlock: {
      eyebrow: "Channels",
      title: "How to reach us",
    },
    channelsPending:
      "We will not publish contact routes until they are properly set up. Posting an address before the practices around it work would be asking people to take a risk we cannot yet handle. Channels will appear here when they are ready.",

    cannotBlock: {
      eyebrow: "Honesty",
      title: "What we cannot promise you",
    },
    cannotItems: [
      "We are not a constitutionally protected newsroom. We are not covered by the source protection that applies to publications with a legally responsible editor.",
      "We cannot protect you from metadata generated by your operator, your employer or your internet provider before a message reaches us.",
      "We cannot guarantee that we will be able to reply, publish, or act on what you send.",
      "We can promise that we will not publish anything that identifies you without checking with you first, and that we would rather drop a claim than expose a source.",
    ],
  },

  about: {
    meta: {
      title: "About",
      description:
        "Who is behind this site, how we handle sources, and how to correct us.",
    },
    hero: {
      eyebrow: "About",
      title: "About this site",
      lead: "A site with a single purpose: to keep an unanswered question open until it is answered.",
    },
    sections: [
      {
        title: "What this is",
        body: [
          "Who Answers for Acus? is a standalone campaign for transparency about the Swedish Police Authority's use of analysis platforms from Palantir Technologies.",
          "We are not campaigning for the system to be shut down. We are campaigning for it to be described: how long it has run, where the data is stored, how it was procured, what it does, and who has examined it.",
          "If the answers turn out to be unremarkable, the campaign is over. That would be a good outcome.",
        ],
      },
      {
        title: "How we handle sources",
        body: [
          "Published journalism is attributed to the newsroom that did the work. We write “according to the investigation”, not “it is confirmed”, because we have not verified it independently.",
          "Parliamentary and government documents are primary sources and are linked directly, so you can read what was actually said rather than our summary of it.",
          "Where we do not know something, we write that we do not know it. Where a date or a quotation has not yet been checked against the original, we mark it.",
        ],
      },
      {
        title: "Corrections",
        body: [
          "If something here is wrong we want to know, and we correct openly rather than quietly. That applies also — especially — if the correction comes from the Police Authority or the Government Offices.",
          "Any answer to any of the questions on this site will be published in full, in the original.",
        ],
      },
      {
        title: "Privacy",
        body: [
          "This site runs no analytics, sets no cookies, embeds no third-party scripts and has no login. We put nothing in your browser except your choice of light or dark mode, which stays local.",
          "It would be strange to run a campaign about surveillance while profiling its readers.",
        ],
      },
    ],

    sourcesBlock: {
      eyebrow: "Sources",
      title: "Everything we rely on",
      lead: "The complete list. Please read them yourself — the parliamentary documents especially.",
    },
    kindLabels: {
      primary: "Primary source",
      reporting: "Journalism",
      advocacy: "Advocacy",
    },
    kindNotes: {
      primary:
        "Public documents from parliament, the government, or a party's own publication.",
      reporting:
        "Journalistic work. Claims taken from here are always attributed in the text.",
      advocacy:
        "Written from a position. Listed for completeness, never the sole basis for a claim.",
    },
    unverifiedLabel: "Date or wording not yet checked against the original",
  },

  footer: {
    wordmark: "Who Answers for Acus?",
    line: "The questions were asked in November 2025. They are still unanswered.",
    credit: "An initiative by",
    creditLink: { label: "NOTA Sverige", href: "https://nota.eu" },
    columns: [
      {
        title: "Read",
        items: [
          { route: "known", label: "What we know" },
          { route: "timeline", label: "Timeline" },
          { route: "acus", label: "What is Acus?" },
        ],
      },
      {
        title: "Act",
        items: [
          { route: "questions", label: "The questions" },
          { route: "tips", label: "Contact" },
          { route: "about", label: "About" },
        ],
      },
    ],
    legal:
      "This site draws on published journalism and public documents. Claims taken from reporting are attributed to the newsroom concerned and are not assertions of fact on our part.",
    updated: "Last updated",
  },

  ui: {
    sources: "Sources",
    source: "Source",
    readMore: "Read more",
    unanswered: "Unanswered",
    backHome: "Back to the start",
    notFoundTitle: "Page not found",
    notFoundBody:
      "This link goes nowhere. Unlike most questions on this site, that one has an answer: the page does not exist.",
  },
};

export default en;
