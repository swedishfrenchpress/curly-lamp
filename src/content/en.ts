import type { Dict } from "./types";

/**
 * English is a faithful translation of sv.ts, not a second argument. When the
 * Swedish copy changes, this changes with it. Swedish institution names are
 * kept in Swedish with a gloss on first use; an English reader searching for
 * "Säkerhets- och integritetsskyddsnämnden" should find the real thing.
 */
const en: Dict = {
  lang: "en",
  langName: "English",
  otherLangName: "Svenska",
  dir: "ltr",

  site: {
    name: "Who Answers for Acus?",
    tagline: "A review of the public record on Palantir inside the Swedish police",
    description:
      "Swedish police have reportedly used an analysis platform from Palantir Technologies for at least five years. It is called Acus. No public authority has published a full description of what it does, when it entered use or where the data is stored.",
  },

  nav: {
    label: "Main navigation",
    items: [
      { route: "known", label: "What we know" },
      { route: "timeline", label: "Timeline" },
      { route: "acus", label: "What is Acus?" },
      { route: "questions", label: "The questions" },
      { route: "about", label: "About" },
    ],
    langSwitch: "Switch to Swedish",
    themeToggle: "Toggle light and dark mode",
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
  },

  home: {
    meta: {
      title: "Who Answers for Acus?",
      description:
        "Swedish police have reportedly used Palantir's analysis platform for at least five years. It is called Acus. The Justice Minister has been questioned twice in parliament. He says the Police Authority chooses its own IT services.",
    },
    hero: {
      title: "Who answers for Acus?",
      lead: "Swedish police have reportedly used Acus for at least five years. What does it do, where is the data stored, and who examined the system?",
    },

    statsBlock: {
      title: "Acus has operated for years. Basic facts remain undisclosed.",
      lead: "The figures come from published reporting and parliamentary records. The Police Authority has not publicly answered the questions behind them.",
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
      title: "Five questions nobody has answered",
      lead: "A member of parliament who sits on the Police Authority's supervisory board raised them in a written question and an interpellation. They remain unanswered.",
    },
    questionsCta: { route: "questions", label: "Read the questions in full" },

    quote: {
      text: "The Police Authority decides for itself which IT services it procures and uses in its operations.",
      attribution: "Gunnar Strömmer (M), Minister for Justice",
      context:
        "Answer to written question 2025/26:167, 19 November 2025. The questions concerned when the arrangement with Palantir began and where the analysed data is stored: in Sweden, within the EU, or in Palantir's cloud services outside the union. Neither was answered.",
      cite: ["fraga-167"],
    },

    convergence: {
      title: "Three developments now meet",
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
        "Police cameras collect images. Real-time facial recognition can identify people in them. Acus is reported to link police records with data from other sources. Together, these capabilities could form a connected system. Parliament has never publicly debated the analysis platform that links the information.",
    },

    notWhat: {
      title: "We are not alleging that the police broke the law",
      body: [
        "The public record does not show that the Police Authority acted unlawfully. Acus may have been lawfully procured, properly regulated and carefully supervised.",
        "The public cannot assess that without a description of what the system does, who supplies it, how it was procured and where the data is stored. No such description has been published.",
        "If the answers are unremarkable, it is hard to understand why they are not given.",
      ],
    },

    pressBlock: {
      title: "In the press",
      lead: "Read the newsrooms' own reporting on Acus, Palantir, and the Swedish police.",
    },

    share: {
      title: "Share the questions",
      lead: "Share the page, copy its link or download a campaign image. The site has no petition and collects no personal data.",
      shareLabel: "Share",
      copyLabel: "Copy link",
      copiedLabel: "Link copied",
      errorLabel: "The link could not be copied. Copy it from your browser instead.",
      downloadLabel: "Download campaign images",
      sourceLabel: "View every source",
      sourceRoute: "about",
      shareText:
        "Who answers for Acus? The Swedish police's analysis platform has been questioned in parliament, but basic questions remain unanswered.",
      assets: [
        {
          href: "/share/who-answers-acus-landscape-en.png",
          label: "Landscape image",
          meta: "PNG · 1200 × 630",
        },
        {
          href: "/share/who-answers-acus-square-en.png",
          label: "Square image",
          meta: "PNG · 1080 × 1080",
        },
      ],
    },
  },

  known: {
    meta: {
      title: "What we know. What we don't.",
      description:
        "Separating what has been reported and documented from what remains unknown about the Swedish police's use of Palantir's analysis platform Acus.",
    },
    hero: {
      title: "What we know. What we don't.",
      lead: "This page separates claims supported by published journalism and parliamentary records from questions that remain unanswered.",
    },

    knownBlock: {
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
        text: "On 19 November 2025 Strömmer answered that the Police Authority decides for itself which IT services it procures and uses in its operations, that those operations are covered by extensive regulation and oversight, and directed questions about procurement to the authority.",
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
      title: "What remains unknown",
    },
    unknownItems: [
      {
        text: "When the arrangement with Palantir actually began, and who inside the state decided on it.",
        cite: ["fraga-167"],
      },
      {
        text: "Where the analysed data is stored: in Sweden, within the EU, or in Palantir's cloud services outside the union. The question was put in exactly those terms and left unanswered.",
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
        text: "Whether any supervisory authority has examined Acus itself in operation rather than only the regulations around it.",
      },
      {
        text: "How an individual can find out whether they appear in the system, and what they can do about it.",
        cite: ["ip-301"],
      },
    ],

    method: {
      title: "How we handle what we cannot verify",
      body: [
        "The first register comes from published journalism and public parliamentary documents. We have not independently verified the journalism and do not claim to have done so. Where a claim comes from reporting, we say so.",
        "The parliamentary documents are primary sources and are linked directly. The originals show the minister's answers more fully than our summaries can.",
        "Corrections supported by public statements or official records are published openly.",
      ],
    },
  },

  timeline: {
    meta: {
      title: "Timeline",
      description:
        "From the 2025 investigation to the real-time facial recognition law that took effect on 1 July 2026, including the questions parliament asked and the answers it did not receive.",
    },
    hero: {
      title: "What happened, and in what order",
      lead: "Parliament asked what systems the police already used before approving real-time facial recognition. Those earlier questions about Acus remain unanswered.",
    },
    chapters: [
      {
        title: "From internal system to public record",
        lead:
          "Work is reported to have begun years before Acus becomes public.",
        entryDates: ["2020", "2025"],
      },
      {
        title: "The unanswered exchange",
        lead:
          "Parliament asks who authorised Acus, when it began and where the data is stored. The answers stop short.",
        entryDates: [
          "2025-11-06",
          "2025-11-19",
          "2026-01-23",
          "2026-02-16",
        ],
      },
      {
        title: "A separate power is legislated",
        lead:
          "While Acus remains undescribed, parliament creates rules for real-time facial recognition.",
        entryDates: ["2026-03", "2026-05-21", "2026-05-26", "2026-07-01"],
      },
      {
        title: "Where the record stands",
        lead:
          "The new law is in force. The earlier questions about Acus remain open.",
        entryDates: ["2026-07-25"],
      },
    ],
    entries: [
      {
        date: "2020",
        dateLabel: "Around 2020",
        kind: "reporting",
        kindLabel: "Reporting",
        title: "Work on Acus begins",
        body: "According to Dagens ETC's investigation, the Police Authority has worked on the Swedish version of Palantir's Gotham for at least five years. No authority has confirmed a start date. Parliament later asked for it but received no answer.",
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
        emphasis: "turning-point",
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
        title: "The minister does not address timing or storage",
        body: "Strömmer replies that the Police Authority decides for itself which IT services it procures and uses in its operations, that those operations are covered by extensive regulation and oversight, and that questions about procurement should go to the authority. The questions of timing and storage location are not addressed.",
        cite: ["fraga-167"],
        emphasis: "turning-point",
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
        body: "Police, and in certain cases the Security Service, may use real-time facial recognition where strictly necessary to locate or identify certain people. The permitted cases include suspected victims of human trafficking, an imminent risk that a person will commit a serious offence, and reasonable suspicion of a crime carrying at least four years' imprisonment. Use requires authorisation from a prosecutor or a court.",
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
        body: "No public answer explains how long Acus has been in use, where the data is stored, how the system was procured or why no Swedish or European supplier was chosen. Meanwhile, the Moderate Party has pledged to double the police camera surveillance target to 10,000 cameras by the end of 2029.",
        cite: ["m-kameror"],
        emphasis: "current",
      },
    ],
    closing: {
      title: "The public record now shows",
      body: [
        "Police reportedly use an analysis system whose scope remains undisclosed. Parliament has authorised real-time facial recognition, and the Moderate Party has pledged to double the police camera target.",
        "Parliament debated facial recognition. It has not publicly examined the analysis platform that may determine what happens to information after a person is identified.",
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
      title: "What is Acus, actually?",
      lead: "The public record does not establish exactly what Acus does. This page separates published reporting about Acus from general information about Palantir's platform.",
    },
    sections: [
      {
        title: "How Palantir's platform differs from a database",
        body: [
          "Palantir Technologies is an American software company whose Gotham platform is supplied to police, intelligence and defence agencies. The company does not normally build new registers. It builds a layer on top of the registers an agency already has.",
          "The platform brings data collected for different purposes, held in different systems and governed by different legal rules into a common model. People, phone numbers, vehicles, addresses and events can then be searched together and linked.",
          "A database stores records. A platform of this kind can expose relationships across several source registers that no single register contains.",
        ],
      },
      {
        title: "What that means in practice",
        body: [
          "If an investigator can look up a phone number in one system, see who paid an invoice in another and a vehicle movement in a third, assembling the picture takes work, time and decisions. Every step leaves a trace and can be challenged.",
          "Once the joining is already done, those steps disappear. According to Dagens ETC's investigation, an investigator can produce a detailed profile of a Swedish citizen in seconds.",
          "That speed also removes procedural friction. Separate searches, decisions and audit trails can provide opportunities to notice or challenge an incorrect link.",
        ],
      },
      {
        title: "Why the technical distinction matters",
        body: [
          "Descriptions of Acus shift between analysis tool, intelligence platform and AI program. Which it is matters.",
          "If the system only displays what a human asked for, it is a search tool. If it ranks, scores or suggests which people are of interest, it may shape decisions by a public authority. That raises different requirements for transparency, impact assessment and an individual's ability to have a decision reviewed.",
          "Petter Löberg's interpellation asked directly about non-transparent algorithms. The government gave no specific answer.",
        ],
      },
      {
        title: "Why embedded supplier staff matters",
        body: [
          "Public authorities routinely buy software. According to the reporting, Palantir employees also work inside police headquarters to build and operate Acus. That may leave part of the system's technical knowledge with the supplier rather than the state.",
          "According to the reporting the conditions are also unusually strict: staff are not to wear company branding, are to use unmarked bags, and may not discuss their work even with a partner.",
          "Secrecy about police methods can protect investigations. Secrecy about the identity and role of a core supplier also limits scrutiny of the contract and the state's dependence on that supplier.",
        ],
      },
      {
        title: "Dependence on a foreign supplier",
        body: [
          "An American supplier building and operating the system also raises questions about state control. What happens if the relationship ends, export conditions change, or US law gives American authorities a claim over data handled by an American company?",
          "That was the interpellation's fourth question. It too lacks a public answer.",
        ],
      },
    ],

    dataBlock: {
      title: "Data the system is said to work with",
      lead: "This list comes from published journalism, not from an official description. We have not seen system documentation and do not claim the list is complete or final.",
    },
    dataSources: [
      { text: "Police surveillance and criminal registers", cite: ["realtid", "gp"] },
      { text: "Data linked to Bank-ID", cite: ["realtid", "gp"] },
      { text: "Data from mobile operators", cite: ["realtid", "gp"] },
      { text: "Social media accounts and content", cite: ["realtid", "gp"] },
    ],
    dataFlow: {
      systemTitle: "Acus, the reported analysis layer",
      systemBody:
        "The reporting describes a Swedish platform based on Palantir Gotham that makes differently structured records searchable together.",
      useTitle: "An investigator's view",
      useBody:
        "The reported result is a combined profile assembled from several sources. The public record does not show which joins, searches, or safeguards are enabled in Sweden.",
      note:
        "This is a map of the reported data relationship, not a technical diagram of the Swedish installation.",
      cite: ["realtid", "gp"],
    },

    caveat: {
      title: "What this page is not",
      body: [
        "The sections on what Palantir's platform generally does draw on the company's own product descriptions and on public documentation from other countries where the system has been used. They do not necessarily describe the Swedish installation.",
        "Acus may be much more restricted than the broader platform. No public description confirms whether that is the case.",
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
      title: "The questions remain unanswered",
      lead: "A member of parliament who sits on the Police Authority's supervisory board raised every question below. We reproduce the questions and the government's responses.",
    },
    openQuestions: [
      {
        id: "duration",
        question: "How long has Acus been in use, and who decided on it?",
        why: "A system used for five years can shape how police work. Without a confirmed start date, the public cannot identify the decision that authorised it.",
        askedLabel: "Asked",
        asked:
          "Written question 2025/26:167, 6 November 2025, and interpellation 2025/26:301, 23 January 2026.",
        responseLabel: "The answer",
        response:
          "The Justice Minister stated that the Police Authority decides for itself which IT services it procures and uses in its operations, and that this is not something he or the government approves or receives special information about. Timing was not addressed.",
        status: "unanswered",
        statusLabel: "Unanswered",
        cite: ["fraga-167", "ip-301"],
      },
      {
        id: "storage",
        question:
          "Where is the data stored: in Sweden, within the EU, or in Palantir's cloud outside the union?",
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
      title: "What we are still researching",
      lead: "We publish the research agenda openly and work only from public records, published reporting, and documentation available for scrutiny.",
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
          "How does the platform handle registers that follow no common standard? What happens to the error rate when data from different sources is joined automatically?",
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
          "If realistic alternatives existed, the public record should explain why they were not chosen.",
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
      title: "How public-document requests work",
      body: [
        "Sweden's principle of public access gives anyone the right to request official documents from public authorities. You do not have to say who you are or why you are asking. The authority must respond promptly. If it refuses, it must state the ground for secrecy, and that decision can be appealed to the administrative court of appeal.",
        "A written refusal is also part of the public record. It identifies what the authority says it must protect and the legal basis it relies on. Several refusals may also reveal whether different authorities apply different grounds.",
        "We will publish our own requests and the responses we receive, whatever the outcome.",
      ],
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "Who is behind this site, how we handle sources, and how to correct us.",
    },
    hero: {
      title: "About this site",
      lead: "This site tracks the unanswered questions about Acus and links each claim to the public record.",
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
          "Where we do not know something, we write that we do not know it. Quotations are checked against the linked original before publication.",
        ],
      },
      {
        title: "Corrections",
        body: [
          "Corrections are published openly rather than made silently. This applies especially to corrections supplied through public statements or official records by the Police Authority or the Government Offices.",
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

    pressBlock: {
      title: "In the press",
      lead: "Every piece of journalism cited by the campaign, collected in one place.",
    },

    sourcesBlock: {
      title: "Everything we rely on",
      lead: "Journalism is collected above. Below are every public and advocacy source used by the campaign, with direct links to the originals.",
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
        title: "Explore",
        items: [
          { route: "questions", label: "The questions" },
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
      "The page at this address does not exist. Use the menu to return to the campaign.",
  },
};

export default en;
