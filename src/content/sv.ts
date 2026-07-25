import type { Dict } from "./types";

/**
 * Swedish is the primary language: this is a Swedish accountability story told
 * to Swedish voters, journalists and riksdagsledamöter. The English dictionary
 * is a faithful translation of this one, not a separate argument.
 *
 * Copy rules, applied throughout and stated publicly on /about:
 *  - Reporting is attributed ("enligt Dagens ETC:s granskning"), never asserted.
 *  - The government's own words do the work. We do not characterise them.
 *  - Where we do not know something, we say we do not know it. The gaps are
 *    the argument; papering over them would forfeit it.
 */
const sv: Dict = {
  lang: "sv",
  langName: "Svenska",
  otherLangName: "English",
  dir: "ltr",

  site: {
    name: "Vem svarar för Acus?",
    tagline: "En granskning av tystnaden kring Palantir hos svensk polis",
    description:
      "Svensk polis har enligt uppgift använt ett analyssystem från Palantir Technologies i minst fem år. Systemet heter Acus. Ingen ansvarig vill förklara hur det fungerar, hur länge det använts eller var svenskarnas data lagras.",
  },

  nav: {
    label: "Huvudmeny",
    items: [
      { route: "known", label: "Vad vi vet" },
      { route: "timeline", label: "Tidslinje" },
      { route: "acus", label: "Vad är Acus?" },
      { route: "questions", label: "Frågorna" },
      { route: "about", label: "Om sidan" },
    ],
    langSwitch: "In English",
    themeToggle: "Växla mellan ljust och mörkt läge",
    skipToContent: "Hoppa till innehåll",
    menu: "Meny",
    close: "Stäng",
  },

  home: {
    meta: {
      title: "Vem svarar för Acus?",
      description:
        "Svensk polis har enligt Dagens ETC:s granskning använt Palantirs analysplattform i minst fem år. Systemet heter Acus. Justitieministern har fått frågan två gånger i riksdagen — och svarat att det inte är hans bord.",
    },
    hero: {
      title: "Vem svarar för Acus?",
      lead: "Svensk polis har enligt publicerad granskning använt Acus, en analysplattform byggd med Palantirs teknik, i minst fem år. Leverantörens personal arbetar inne i polishuset. Polisen bekräftar inte relationen och justitieministern hänvisar IT-upphandlingen till myndigheten. De obesvarade frågorna är grundläggande: vad gör Acus, var lagras datan och vem har granskat systemet?",
      primaryCta: { href: "#share", label: "Dela frågan" },
      secondaryCta: { route: "known", label: "Vad vi vet" },
    },

    statsBlock: {
      title: "Fyra siffror",
      lead: "Ingen av dem är bekräftad av en myndighet. Det är själva poängen.",
    },
    stats: [
      {
        value: "5 år",
        label: "Så länge systemet enligt uppgift har varit i bruk",
        note: "Dagens ETC:s granskning anger minst fem år. Polismyndigheten har inte bekräftat något startdatum, och frågan om när samarbetet inleddes ställdes i riksdagen utan att besvaras.",
        cite: ["etc-granskning", "realtid", "fraga-167"],
      },
      {
        value: "8 månader",
        label: "Så länge polisen varken bekräftade eller förnekade",
        note: "Enligt rapporteringen avvisade Polismyndigheten under åtta månader frågor om relationen till Palantir med hänvisning till fara för rikets säkerhet.",
        cite: ["realtid", "etc-granskning"],
      },
      {
        value: "3 organ",
        label: "Tillsynsorgan som enligt uppgift inte informerades",
        note: "Polismyndighetens insynsråd, Integritetsskyddsmyndigheten och Säkerhets- och integritetsskyddsnämnden. Om uppgiften stämmer har systemet byggts utan att någon av de instanser som ska granska polisens registerhantering fått veta det.",
        cite: ["realtid"],
      },
      {
        value: "2 frågor",
        label: "Gånger frågan ställts formellt i riksdagen",
        note: "En skriftlig fråga i november 2025 och en interpellation med kammardebatt i februari 2026. Hur länge Acus använts och var datan lagras är fortfarande obesvarat.",
        cite: ["fraga-167", "ip-301", "ip-debatt"],
      },
    ],

    questionsBlock: {
      title: "Fem frågor som ingen har svarat på",
      lead: "De är inte retoriska. De ställdes av en riksdagsledamot som dessutom sitter i Polismyndighetens insynsråd, i två formella processer, och de är fortfarande öppna.",
    },
    questionsCta: { route: "questions", label: "Läs frågorna i sin helhet" },

    quote: {
      text: "Polismyndigheten avgör själv vilka IT-tjänster som myndigheten upphandlar och använder i sin verksamhet.",
      attribution: "Gunnar Strömmer (M), justitieminister",
      context:
        "Svar på skriftlig fråga 2025/26:167, den 19 november 2025. Frågorna gällde när samarbetet med Palantir inleddes och var den analyserade datan lagras — i Sverige, inom EU, eller i Palantirs molntjänster utanför unionen. Ingen av dem besvarades.",
      cite: ["fraga-167"],
    },

    convergence: {
      title: "Tre saker hände samtidigt",
      lead: "Var för sig är de politik. Tillsammans är de en infrastruktur — och den byggdes klart medan grundfrågan låg obesvarad.",
      steps: [
        {
          label: "Sedan cirka 2020",
          title: "Analysplattformen",
          body: "Ett system som enligt granskningen kopplar ihop polisens egna register med uppgifter från Bank-ID, mobiloperatörer och sociala medier, och som enligt uppgift kan sammanställa en detaljerad profil av en enskild person på sekunder.",
          cite: ["realtid", "gp"],
        },
        {
          label: "1 juli 2026",
          title: "Ansiktsigenkänning i realtid",
          body: "Riksdagen röstade den 26 maj 2026 igenom regeringens förslag om att polisen ska få använda AI för ansiktsigenkänning i realtid. Lagen trädde i kraft den 1 juli 2026. Användningen kräver tillstånd av åklagare eller domstol och är avgränsad till vissa allvarliga brott.",
          cite: ["prop-150", "juu28", "beslut"],
        },
        {
          label: "Till 2029",
          title: "Kamerorna",
          body: "Moderaterna har lovat att fördubbla målet för polisens kameraövervakning: från 5 000 kameror till utgången av 2027 till 10 000 kameror till utgången av 2029.",
          cite: ["m-kameror"],
        },
      ],
      closing:
        "Kameror som ser. Ansiktsigenkänning som identifierar. En analysplattform som kopplar ihop det som identifierats med allt annat staten vet om dig. Varje del har behandlats som en egen fråga. Ingen har behandlat dem som en helhet — och den enda delen som aldrig debatterades offentligt är den som binder ihop de andra.",
    },

    notWhat: {
      title: "Det här är inte ett påstående om att polisen begått brott",
      body: [
        "Vi påstår inte att Polismyndigheten har brutit mot lagen. Vi vet inte det. Det är möjligt att Acus är helt lagligt upphandlat, korrekt reglerat och noggrant granskat.",
        "Problemet är att ingen utomstående kan avgöra det. Ett system av den här räckvidden borde tåla en offentlig beskrivning av vad det gör, vem som levererar det, hur det upphandlades och var datan finns. Det är den beskrivningen som saknas.",
        "Om svaren är oproblematiska är det svårt att förstå varför de inte ges.",
      ],
    },

    pressBlock: {
      title: "I pressen",
      lead: "Läs redaktionernas egen rapportering om Acus, Palantir och svensk polis.",
    },

    share: {
      title: "Sprid frågan vidare",
      lead: "Dela den offentliga frågan, kopiera en direktlänk eller ladda ner en färdig bild. Sidan har ingen namninsamling och samlar inte in dina uppgifter.",
      shareLabel: "Dela",
      copyLabel: "Kopiera länk",
      copiedLabel: "Länken är kopierad",
      errorLabel: "Länken kunde inte kopieras. Kopiera den från webbläsaren i stället.",
      downloadLabel: "Ladda ner kampanjbilder",
      sourceLabel: "Se alla källor",
      sourceRoute: "about",
      shareText:
        "Vem svarar för Acus? Riksdagen har frågat om polisens analysplattform, men grundläggande frågor är fortfarande obesvarade.",
      assets: [
        {
          href: "/share/vem-svarar-acus-landscape-sv.png",
          label: "Liggande bild",
          meta: "PNG · 1200 × 630",
        },
        {
          href: "/share/vem-svarar-acus-square-sv.png",
          label: "Kvadratisk bild",
          meta: "PNG · 1080 × 1080",
        },
      ],
    },
  },

  known: {
    meta: {
      title: "Vad vi vet — och vad vi inte vet",
      description:
        "En sida som skiljer det som är rapporterat och dokumenterat från det som fortfarande är okänt om polisens användning av Palantirs analysplattform Acus.",
    },
    hero: {
      title: "Vad vi vet — och vad vi inte vet",
      lead: "Först kommer påståenden som stöds av publicerad journalistik och offentliga riksdagsdokument. Därefter, i ett separat register, frågorna som ställts och inte besvarats.",
    },

    knownBlock: {
      title: "Det här är rapporterat eller offentligt",
    },
    knownItems: [
      {
        text: "Svensk polis har enligt Dagens ETC:s granskning i minst fem år byggt och använt en analysplattform som bygger på Palantirs Gotham. Den svenska versionen kallas Acus.",
        cite: ["etc-granskning", "realtid", "gp"],
      },
      {
        text: "Systemet ska enligt granskningen sammanställa och visualisera uppgifter från polisens spanings- och brottsregister tillsammans med data från Bank-ID, mobiloperatörer och konton i sociala medier.",
        cite: ["realtid", "gp"],
      },
      {
        text: "Personal från Palantir arbetar enligt uppgift inne i polishuset på Kungsholmen. Villkoren beskrivs som ovanligt strikta: inga företagsloggor på kläder, omärkta väskor, och förbud mot att berätta om arbetet ens för sin partner.",
        cite: ["realtid"],
      },
      {
        text: "Polismyndigheten svarade under lång tid att den varken kan bekräfta eller förneka en relation med Palantir, med hänvisning till fara för rikets säkerhet.",
        cite: ["realtid", "etc-granskning"],
      },
      {
        text: "Varken Polismyndighetens insynsråd, Integritetsskyddsmyndigheten eller Säkerhets- och integritetsskyddsnämnden hade enligt granskningen informerats.",
        cite: ["realtid"],
      },
      {
        text: "Petter Löberg (S) ställde den 6 november 2025 en skriftlig fråga till justitieminister Gunnar Strömmer (M) om samarbetet. Löberg sitter själv i Polismyndighetens insynsråd.",
        cite: ["fraga-167", "realtid"],
      },
      {
        text: "Strömmer svarade den 19 november 2025 att Polismyndigheten själv avgör vilka IT-tjänster myndigheten upphandlar och använder i sin verksamhet, att verksamheten omfattas av omfattande regelverk och tillsyn, och hänvisade frågor om upphandlingen till myndigheten.",
        cite: ["fraga-167"],
      },
      {
        text: "Den 23 januari 2026 gick Löberg vidare med en interpellation med fem frågor, bland annat om algoritmisk transparens, rättsmedel för enskilda och risken med långsiktigt beroende av en amerikansk kommersiell aktör. Interpellationsdebatten hölls den 16 februari 2026.",
        cite: ["ip-301", "ip-debatt"],
      },
      {
        text: "Riksdagen beslutade den 26 maj 2026 att polisen ska få använda AI för ansiktsigenkänning i realtid. Lagen trädde i kraft den 1 juli 2026.",
        cite: ["prop-150", "juu28", "beslut"],
      },
    ],

    unknownBlock: {
      title: "Det här vet vi fortfarande inte",
    },
    unknownItems: [
      {
        text: "När samarbetet med Palantir faktiskt inleddes, och vem inom staten som fattade beslutet.",
        cite: ["fraga-167"],
      },
      {
        text: "Var den analyserade datan lagras — i Sverige, inom EU, eller i Palantirs molntjänster utanför unionen. Frågan ställdes ordagrant och lämnades obesvarad.",
        cite: ["fraga-167"],
      },
      {
        text: "Hur systemet upphandlades. Om det fanns en anbudsprocess, vilka leverantörer som deltog, vilka krav som ställdes och vad kontraktet är värt.",
      },
      {
        text: "Vad Acus tekniskt sett är. Beskrivningarna växlar mellan att kalla det en databas, ett analysverktyg och ett AI-system. Skillnaden har rättslig betydelse.",
      },
      {
        text: "Om någon svensk eller europeisk leverantör bedömdes, och på vilka grunder de i så fall valdes bort.",
      },
      {
        text: "Vilka spärrar som finns mot att uppgifter från olika register kombineras på sätt som inte var avsedda när de samlades in.",
      },
      {
        text: "Om någon tillsynsmyndighet har granskat systemet i drift — inte regelverket omkring det, utan systemet.",
      },
      {
        text: "Hur en enskild person kan få veta om hen förekommer i systemet, och vad hen kan göra åt det.",
        cite: ["ip-301"],
      },
    ],

    method: {
      title: "Hur vi hanterar det vi inte kan verifiera",
      body: [
        "Uppgifterna i det första registret kommer från publicerad journalistik och från offentliga riksdagsdokument. Vi har inte oberoende verifierat journalistiken och påstår inte att vi har det. Där en uppgift kommer från rapportering skriver vi ut det.",
        "Riksdagsdokumenten är primärkällor och länkas direkt. Läs dem gärna själv — ministerns svar är starkare i original än i vår sammanfattning.",
        "Rättelser som stöds av offentliga uttalanden eller allmänna handlingar publiceras öppet.",
      ],
    },
  },

  timeline: {
    meta: {
      title: "Tidslinje",
      description:
        "Från granskningen 2025 till lagen om ansiktsigenkänning i realtid den 1 juli 2026 — och de frågor som ställdes däremellan utan att besvaras.",
    },
    hero: {
      title: "Vad som hände, och i vilken ordning",
      lead: "Ordningen är hela poängen. Frågan om vad staten redan har ställdes innan riksdagen beslutade om vad staten skulle få därutöver. Den var obesvarad då. Den är obesvarad nu.",
    },
    chapters: [
      {
        title: "Från internt system till offentlig uppgift",
        lead:
          "Arbetet uppges ha börjat flera år innan Acus blev offentligt känt.",
        entryDates: ["2020", "2025"],
      },
      {
        title: "Frågorna som inte får svar",
        lead:
          "Riksdagen frågar vem som godkände Acus, när arbetet började och var datan lagras. Svaren stannar före sakfrågorna.",
        entryDates: [
          "2025-11-06",
          "2025-11-19",
          "2026-01-23",
          "2026-02-16",
        ],
      },
      {
        title: "En annan befogenhet blir lag",
        lead:
          "Medan Acus fortfarande är obeskrivet beslutar riksdagen om regler för ansiktsigenkänning i realtid.",
        entryDates: ["2026-03", "2026-05-21", "2026-05-26", "2026-07-01"],
      },
      {
        title: "Här står frågan nu",
        lead:
          "Den nya lagen har trätt i kraft. De tidigare frågorna om Acus är fortfarande öppna.",
        entryDates: ["2026-07-25"],
      },
    ],
    entries: [
      {
        date: "2020",
        dateLabel: "Cirka 2020",
        kind: "reporting",
        kindLabel: "Rapportering",
        title: "Arbetet med Acus inleds",
        body: "Enligt Dagens ETC:s granskning har Polismyndigheten arbetat med den svenska versionen av Palantirs Gotham i minst fem år. Exakt startdatum är inte bekräftat av någon myndighet — frågan ställdes senare i riksdagen och besvarades inte.",
        cite: ["etc-granskning", "realtid"],
        aside:
          "Årtalet är en följd av formuleringen ”minst fem år” i granskningen, inte ett bekräftat datum.",
      },
      {
        date: "2025",
        dateLabel: "2025",
        kind: "reporting",
        kindLabel: "Rapportering",
        title: "Dagens ETC publicerar granskningen",
        body: "Uppgifterna om Acus, om Palantir-personal inne i polishuset på Kungsholmen och om sekretessvillkoren blir offentliga. Polismyndigheten uppges under åtta månader varken ha bekräftat eller förnekat relationen, med hänvisning till fara för rikets säkerhet. Uppgifterna plockas upp av bland andra Göteborgs-Posten och Realtid.",
        cite: ["etc-granskning", "realtid", "gp"],
        emphasis: "turning-point",
      },
      {
        date: "2025-11-06",
        dateLabel: "6 november 2025",
        kind: "parliament",
        kindLabel: "Riksdagen",
        title: "Skriftlig fråga 2025/26:167",
        body: "Petter Löberg (S) frågar justitieminister Gunnar Strömmer (M) om regeringen godkänt eller informerats om samarbetet, när det inleddes, och var den analyserade datan lagras.",
        cite: ["fraga-167"],
      },
      {
        date: "2025-11-19",
        dateLabel: "19 november 2025",
        kind: "parliament",
        kindLabel: "Riksdagen",
        title: "Ministern svarar — utan att svara",
        body: "Strömmer hänvisar till att Polismyndigheten själv avgör vilka IT-tjänster den upphandlar och använder i sin verksamhet, att verksamheten omfattas av omfattande regelverk och tillsyn, och att frågor om upphandlingen bör ställas till myndigheten. Frågorna om tidpunkt och lagringsplats berörs inte.",
        cite: ["fraga-167"],
        emphasis: "turning-point",
      },
      {
        date: "2026-01-23",
        dateLabel: "23 januari 2026",
        kind: "parliament",
        kindLabel: "Riksdagen",
        title: "Interpellation 2025/26:301",
        body: "Löberg går vidare med fem frågor: om beslut som fattas på grundval av icke-transparenta algoritmer, om enskildas insyn och rättsmedel, om det gjorts en samlad rättslig och integritetsmässig konsekvensanalys, om risken med långsiktigt beroende av en amerikansk kommersiell aktör, och om regeringen avser införa striktare nationella riktlinjer för kommersiella AI-plattformar i brottsbekämpningen.",
        cite: ["ip-301"],
      },
      {
        date: "2026-02-16",
        dateLabel: "16 februari 2026",
        kind: "parliament",
        kindLabel: "Riksdagen",
        title: "Interpellationsdebatt i kammaren",
        body: "Frågan debatteras i riksdagens kammare. Ministern håller fast vid att polisen själv väljer sina verktyg och att svensk reglering ger tillräcklig tillsyn.",
        cite: ["ip-debatt"],
        aside:
          "Debatten finns i sin helhet på riksdagens webb-tv. Vi har ännu inte gått igenom utskriften rad för rad.",
      },
      {
        date: "2026-03",
        dateLabel: "Mars 2026",
        kind: "law",
        kindLabel: "Lagstiftning",
        title: "Proposition 2025/26:150",
        body: "Regeringen lägger fram förslaget om att polisen ska få använda AI för ansiktsigenkänning i realtid.",
        cite: ["prop-150"],
      },
      {
        date: "2026-05-21",
        dateLabel: "21 maj 2026",
        kind: "law",
        kindLabel: "Lagstiftning",
        title: "Justitieutskottet ställer sig bakom förslaget",
        body: "Utskottet tillstyrker propositionen i betänkande 2025/26:JuU28. Vänsterpartiet lämnar motion mot förslaget.",
        cite: ["juu28"],
      },
      {
        date: "2026-05-26",
        dateLabel: "26 maj 2026",
        kind: "law",
        kindLabel: "Lagstiftning",
        title: "Riksdagen röstar igenom lagen",
        body: "Polisen, och i vissa fall Säkerhetspolisen, ska få använda ansiktsigenkänning i realtid när det är absolut nödvändigt för att lokalisera eller identifiera vissa personer — bland annat vid misstänkt människohandel, vid överhängande risk för allvarlig brottslighet, och vid skälig misstanke om brott med minst fyra års fängelse i straffskalan. Användningen kräver tillstånd av åklagare eller domstol.",
        cite: ["beslut", "juu28"],
      },
      {
        date: "2026-07-01",
        dateLabel: "1 juli 2026",
        kind: "law",
        kindLabel: "Lagstiftning",
        title: "Lagen träder i kraft",
        body: "Ansiktsigenkänning i realtid blir tillåten för polisen under de villkor riksdagen beslutat.",
        cite: ["prop-150"],
      },
      {
        date: "2026-07-25",
        dateLabel: "Idag",
        kind: "politics",
        kindLabel: "Läget",
        title: "Frågorna från november 2025 är fortfarande obesvarade",
        body: "Hur länge Acus har använts, var datan lagras, hur systemet upphandlades och varför ingen svensk eller europeisk leverantör valdes — inget av detta har besvarats offentligt. Under tiden har Moderaterna lovat att fördubbla målet för polisens kameraövervakning till 10 000 kameror till utgången av 2029.",
        cite: ["m-kameror"],
        emphasis: "current",
      },
    ],
    closing: {
      title: "Sätt ihop det",
      body: [
        "Ett analyssystem vars omfattning ingen vill beskriva. En lag som ger polisen förmågan att identifiera personer i realtid. Ett vallöfte om att fördubbla antalet kameror som matar systemet med bilder.",
        "Riksdagen har debatterat den mittersta delen ordentligt. Den första delen — den som avgör vad som händer med informationen efter att någon identifierats — har aldrig varit föremål för ett offentligt beslut.",
      ],
    },
  },

  acus: {
    meta: {
      title: "Vad är Acus?",
      description:
        "En förklaring på vanlig svenska av vad Palantirs Gotham-plattform gör, vad den svenska versionen Acus uppges göra, och varför skillnaden mellan ”databas” och ”AI-system” har betydelse.",
    },
    hero: {
      title: "Vad är Acus, egentligen?",
      lead: "Kort svar: vi vet inte säkert, och det är ett problem i sig. Här är vad som är rapporterat, vad Palantirs plattform generellt gör, och var gränsen går mellan de två.",
    },
    sections: [
      {
        title: "Det Palantir säljer är inte en databas",
        body: [
          "Palantir Technologies är ett amerikanskt mjukvaruföretag som bland annat levererar plattformen Gotham till polis-, underrättelse- och försvarsmyndigheter. Företaget bygger normalt inte nya register. Det bygger ett lager ovanpå de register en myndighet redan har.",
          "Värdet ligger i sammankopplingen. Uppgifter som samlats in för olika ändamål, i olika system, med olika rättslig grund, förs samman till en gemensam modell där personer, telefonnummer, fordon, adresser och händelser blir sökbara objekt med relationer till varandra.",
          "Det är därför frågan ”är det bara en databas?” missar målet. En databas lagrar det någon lagt in. En plattform av det här slaget skapar nya samband som inte fanns i något av ursprungsregistren.",
        ],
      },
      {
        title: "Vad det innebär i praktiken",
        body: [
          "Om en utredare i ett system kan slå upp ett telefonnummer, i ett annat se vem som betalat en faktura och i ett tredje se en fordonsrörelse, krävs arbete, tid och beslut för att sätta ihop bilden. Varje steg lämnar spår och kan ifrågasättas.",
          "När sammankopplingen redan är gjord försvinner de stegen. Enligt Dagens ETC:s granskning ska en utredare på sekunder kunna få fram en detaljerad profil av en svensk medborgare.",
          "Sekunderna är inte problemet. Problemet är att den friktion som fanns däremellan också var en form av kontroll.",
        ],
      },
      {
        title: "Skillnaden mellan ”verktyg” och ”AI” är inte semantik",
        body: [
          "I beskrivningarna av Acus växlar orden: analysverktyg, underrättelseplattform, AI-program. Det spelar roll vilket det är.",
          "Om systemet bara visar uppgifter som en människa efterfrågat är det ett sökverktyg. Om det rangordnar, poängsätter eller föreslår vilka personer som är intressanta har det gått över till att påverka myndighetsbeslut — och då aktualiseras helt andra krav på transparens, konsekvensanalys och möjlighet för den enskilde att få ett beslut prövat.",
          "Det var i grunden detta Petter Löbergs interpellation försökte reda ut. Frågan om icke-transparenta algoritmer ställdes uttryckligen. Den fick inget preciserat svar.",
        ],
      },
      {
        title: "Varför inbäddad leverantörspersonal är ovanligt",
        body: [
          "Att en myndighet köper mjukvara är trivialt. Att leverantörens anställda sitter inne i myndighetens lokaler och bygger och driver systemet är något annat — det innebär att kompetensen om hur systemet faktiskt fungerar delvis ligger hos leverantören, inte hos staten.",
          "Enligt rapporteringen är villkoren dessutom ovanligt strikta: personalen ska inte bära företagets logotyp, ska använda omärkta väskor och får inte berätta om sitt arbete ens för sin partner.",
          "Sekretess kring polisens metoder är normalt och ofta befogat. Sekretess kring vilket företag som levererar en central del av infrastrukturen är en annan sak. Det första skyddar utredningar. Det andra skyddar mest en avtalsrelation från insyn.",
        ],
      },
      {
        title: "Beroendefrågan",
        body: [
          "Om en amerikansk leverantör bygger och driver systemet uppstår en fråga som inte handlar om integritet utan om suveränitet: vad händer om relationen upphör, om exportvillkor ändras, eller om amerikansk lagstiftning ger amerikanska myndigheter anspråk på data som hanteras av ett amerikanskt bolag?",
          "Det var interpellationens fjärde fråga. Också den saknar offentligt svar.",
        ],
      },
    ],

    dataBlock: {
      title: "Uppgifter systemet uppges arbeta med",
      lead: "Den här listan kommer från publicerad journalistik, inte från en officiell beskrivning. Vi har inte sett en systemdokumentation och påstår inte att listan är fullständig eller slutgiltig.",
    },
    dataSources: [
      { text: "Polisens spanings- och brottsregister", cite: ["realtid", "gp"] },
      { text: "Uppgifter kopplade till Bank-ID", cite: ["realtid", "gp"] },
      { text: "Uppgifter från mobiloperatörer", cite: ["realtid", "gp"] },
      { text: "Konton och innehåll i sociala medier", cite: ["realtid", "gp"] },
    ],
    dataFlow: {
      systemTitle: "Acus, det uppgivna analyslagret",
      systemBody:
        "Rapporteringen beskriver en svensk plattform baserad på Palantir Gotham som gör olika strukturerade register sökbara tillsammans.",
      useTitle: "Utredarens vy",
      useBody:
        "Det uppgivna resultatet är en samlad profil från flera källor. Offentliga handlingar visar inte vilka kopplingar, sökningar eller spärrar som är aktiva i Sverige.",
      note:
        "Detta är en karta över det rapporterade datasambandet, inte ett tekniskt schema över den svenska installationen.",
      cite: ["realtid", "gp"],
    },

    caveat: {
      title: "Vad den här sidan inte är",
      body: [
        "Avsnitten om vad Palantirs plattform generellt gör bygger på företagets egna produktbeskrivningar och på offentlig dokumentation från andra länder där systemet använts. De beskriver inte nödvändigtvis den svenska installationen.",
        "Det är fullt möjligt att Acus är kraftigt avgränsat jämfört med vad plattformen kan göra. Det vore i så fall bra att få veta.",
        "En fördjupad genomgång av Palantirs produktportfölj, av vilka spärrar företaget uppger att det bygger in, och av vilka svenska och europeiska leverantörer som hade kunnat leverera motsvarande funktion pågår. Den publiceras här när den är färdig och källbelagd.",
      ],
    },
  },

  questions: {
    meta: {
      title: "Frågorna",
      description:
        "De konkreta frågor som ställts till regeringen om polisens användning av Palantir, vad som faktiskt svarades, och vad som fortfarande utreds.",
    },
    hero: {
      title: "Ställda. Inte besvarade.",
      lead: "Varje fråga nedan har ställts formellt, i riksdagen, av en ledamot som dessutom sitter i Polismyndighetens insynsråd. Vi återger vad som frågades och vad som svarades, och låter läsaren bedöma avståndet däremellan.",
    },
    openQuestions: [
      {
        id: "duration",
        question: "Hur länge har Acus använts, och vem beslutade om det?",
        why: "Ett system som varit i drift i fem år har hunnit forma hur polisen arbetar. Om ingen kan säga när det började kan ingen heller säga vilket beslut som låg till grund för det.",
        askedLabel: "Ställd",
        asked: "Skriftlig fråga 2025/26:167, 6 november 2025, och interpellation 2025/26:301, 23 januari 2026.",
        responseLabel: "Svaret",
        response:
          "Justitieministern uppgav att Polismyndigheten själv avgör vilka IT-tjänster den upphandlar och använder i sin verksamhet, och att detta inte är något som han eller regeringen godkänner eller får särskild information om. Tidpunkten berördes inte.",
        status: "unanswered",
        statusLabel: "Obesvarad",
        cite: ["fraga-167", "ip-301"],
      },
      {
        id: "storage",
        question:
          "Var lagras datan — i Sverige, inom EU, eller i Palantirs moln utanför unionen?",
        why: "Svaret avgör vilken lagstiftning som gäller för uppgifterna, vem som i praktiken kan komma åt dem, och vad som händer med dem om relationen till leverantören förändras.",
        askedLabel: "Ställd",
        asked: "Skriftlig fråga 2025/26:167, 6 november 2025.",
        responseLabel: "Svaret",
        response:
          "Frågan ställdes ordagrant och besvarades inte. Ministern hänvisade i stället till att polisens behandling av uppgifter omfattas av omfattande regelverk och tillsyn.",
        status: "unanswered",
        statusLabel: "Obesvarad",
        cite: ["fraga-167"],
      },
      {
        id: "procurement",
        question: "Hur upphandlades systemet?",
        why: "Offentlig upphandling är offentlig av ett skäl. Om det fanns en anbudsprocess bör den gå att beskriva: vilka krav som ställdes, vilka som lämnade anbud, hur de utvärderades och vad avtalet är värt.",
        askedLabel: "Ställd",
        asked: "Skriftlig fråga 2025/26:167, 6 november 2025.",
        responseLabel: "Svaret",
        response:
          "Frågan hänvisades vidare till Polismyndigheten. Myndigheten har enligt rapporteringen avvisat frågor om relationen till Palantir med hänvisning till fara för rikets säkerhet.",
        status: "unanswered",
        statusLabel: "Obesvarad",
        cite: ["fraga-167", "realtid"],
      },
      {
        id: "vendor",
        question:
          "Varför en amerikansk militär- och underrättelseleverantör, och inte en svensk eller europeisk?",
        why: "Sverige har en betydande försvars- och säkerhetsindustri och en fungerande mjukvarusektor. Om ingen inhemsk eller europeisk leverantör bedömdes vara möjlig är det ett anmärkningsvärt besked. Om de bedömdes och valdes bort bör grunderna kunna redovisas.",
        askedLabel: "Ställd",
        asked:
          "Berörs indirekt av interpellationens fråga om långsiktigt beroende av en amerikansk kommersiell aktör, 23 januari 2026.",
        responseLabel: "Svaret",
        response:
          "Ministern har hållit fast vid att valet av verktyg är myndighetens eget. Något resonemang om leverantörsalternativ har inte redovisats offentligt.",
        status: "unanswered",
        statusLabel: "Obesvarad",
        cite: ["ip-301", "ip-debatt"],
      },
      {
        id: "oversight",
        question: "Vilket tillsynsorgan har faktiskt granskat Acus i drift?",
        why: "Att peka på att det finns tillsyn är inte samma sak som att tillsyn har utövats. Enligt granskningen hade varken insynsrådet, Integritetsskyddsmyndigheten eller Säkerhets- och integritetsskyddsnämnden informerats.",
        askedLabel: "Ställd",
        asked:
          "Interpellation 2025/26:301, 23 januari 2026, bland annat genom frågan om en samlad rättslig och integritetsmässig konsekvensanalys gjorts.",
        responseLabel: "Svaret",
        response:
          "Ministern beskrev det svenska regelverket och tillsynssystemet i allmänna ordalag. Någon uppgift om att en granskning av just detta system genomförts har inte lämnats.",
        status: "unanswered",
        statusLabel: "Obesvarad",
        cite: ["ip-301", "realtid"],
      },
    ],

    researchBlock: {
      title: "Det vi håller på att ta reda på",
      lead: "Vi publicerar forskningsagendan öppet och arbetar enbart med allmänna handlingar, publicerad journalistik och dokumentation som kan granskas.",
    },
    research: [
      {
        title: "Palantirs produktportfölj och uppgivna spärrar",
        question:
          "Vad säljer Palantir faktiskt till brottsbekämpande myndigheter, och vilka tekniska och avtalsmässiga begränsningar uppger företaget att det bygger in?",
        status: "in-progress",
        statusLabel: "Under arbete",
        detail:
          "Vi går igenom företagets egen produktdokumentation och offentligt material från andra länder där plattformen använts, för att kunna beskriva vad som är standardfunktionalitet och vad som är landsspecifikt.",
      },
      {
        title: "Datasammanslagning i praktiken",
        question:
          "Hur hanterar plattformen register som inte följer gemensamma standarder — och vad händer med felmarginalen när uppgifter från olika källor kopplas ihop automatiskt?",
        status: "in-progress",
        statusLabel: "Under arbete",
        detail:
          "Sammankoppling av data som samlats in för olika ändamål är där både nyttan och risken uppstår. Felaktiga kopplingar är inte ett teoretiskt problem; de får konsekvenser för enskilda.",
      },
      {
        title: "Upphandlingen",
        question:
          "Finns det ett diarienummer, ett avtal, en anbudsutvärdering eller ett upphandlingsbeslut som går att begära ut?",
        status: "open",
        statusLabel: "Öppen",
        detail:
          "Vi kartlägger vilka handlingar som rimligen bör existera hos Polismyndigheten och hos Upphandlingsmyndigheten, och vilka sekretessgrunder som kan komma att åberopas.",
      },
      {
        title: "Svenska och europeiska alternativ",
        question:
          "Vilka leverantörer hade kunnat bygga motsvarande funktion inom Sverige eller EU?",
        status: "open",
        statusLabel: "Öppen",
        detail:
          "Poängen är inte att peka ut en favorit. Poängen är att om det fanns realistiska alternativ blir frågan varför de inte valdes en fråga som förtjänar ett svar.",
      },
      {
        title: "Kostnaden",
        question: "Vad har detta kostat skattebetalarna, och över vilken period?",
        status: "open",
        statusLabel: "Öppen",
        detail:
          "Kostnadsuppgifter är ofta lättare att få ut än tekniska beskrivningar, och de kan i sig avslöja avtalets omfattning och löptid.",
      },
    ],

    foia: {
      title: "Så fungerar en begäran om allmän handling",
      body: [
        "Offentlighetsprincipen ger var och en rätt att begära ut allmänna handlingar hos svenska myndigheter. Du behöver inte uppge vem du är eller varför du frågar. Myndigheten ska svara skyndsamt, och om den avslår din begäran ska den ange på vilken sekretessgrund — ett beslut som går att överklaga till kammarrätten.",
        "Ett avslag är inte ett nederlag. Ett skriftligt avslag med angiven sekretessgrund är i sig information: det visar vad myndigheten anser sig behöva skydda och med vilket lagstöd. Flera avslag som pekar åt olika håll är ännu mer informativa.",
        "Vi kommer att publicera våra egna begäranden och de svar vi får, oavsett utfall.",
      ],
    },
  },

  about: {
    meta: {
      title: "Om sidan",
      description:
        "Vem som står bakom den här sidan, hur vi arbetar med källor, och hur du rättar oss.",
    },
    hero: {
      title: "Om den här sidan",
      lead: "En sida med ett enda syfte: att hålla en obesvarad fråga öppen tills den besvaras.",
    },
    sections: [
      {
        title: "Vad det här är",
        body: [
          "Vem svarar för Acus? är en fristående kampanj om öppenhet kring Polismyndighetens användning av analysplattformar från Palantir Technologies.",
          "Vi driver inte kravet att systemet ska avvecklas. Vi driver kravet att det ska beskrivas: hur länge det använts, var datan lagras, hur det upphandlades, vad det gör och vem som har granskat det.",
          "Om svaren visar sig vara oproblematiska är kampanjen över. Det vore ett bra utfall.",
        ],
      },
      {
        title: "Hur vi arbetar med källor",
        body: [
          "Publicerad journalistik attribueras till den redaktion som gjort arbetet. Vi skriver ”enligt granskningen”, inte ”det är bekräftat”, eftersom vi inte har verifierat den självständigt.",
          "Riksdagens och regeringens dokument är primärkällor och länkas direkt, så att du kan läsa vad som faktiskt sades i stället för vår sammanfattning av det.",
          "Där vi inte vet något skriver vi att vi inte vet det. Citat kontrolleras mot det länkade originalet före publicering.",
        ],
      },
      {
        title: "Rättelser",
        body: [
          "Rättelser publiceras öppet i stället för att göras i det tysta. Det gäller särskilt rättelser som lämnas genom offentliga uttalanden eller allmänna handlingar från Polismyndigheten eller Regeringskansliet.",
          "Ett svar på någon av frågorna på den här sidan publicerar vi i sin helhet, i original.",
        ],
      },
      {
        title: "Integritet",
        body: [
          "Sidan har ingen webbanalys, inga kakor, inga inbäddade tredjepartsskript och ingen inloggning. Vi sätter inget i din webbläsare utom ditt eventuella val av ljust eller mörkt läge, som stannar lokalt.",
          "Det vore märkligt att bedriva en kampanj om övervakning och samtidigt kartlägga sina läsare.",
        ],
      },
    ],

    pressBlock: {
      title: "I pressen",
      lead: "Alla journalistiska artiklar som kampanjen hänvisar till, samlade på ett ställe.",
    },

    sourcesBlock: {
      title: "Allt vi bygger på",
      lead: "Journalistiken finns samlad ovan. Nedan listas varje offentlig källa och opinionskälla som kampanjen använder, med direktlänkar till originalen.",
    },
    kindLabels: {
      primary: "Primärkälla",
      reporting: "Journalistik",
      advocacy: "Opinion",
    },
    kindNotes: {
      primary: "Offentliga handlingar från riksdagen, regeringen eller en part själv.",
      reporting:
        "Journalistiskt arbete. Uppgifter härifrån attribueras alltid i löpande text.",
      advocacy:
        "Skrivet från en position. Redovisas för fullständighetens skull, används aldrig som ensam grund för ett påstående.",
    },
  },

  footer: {
    wordmark: "Vem svarar för Acus?",
    line: "Frågorna ställdes i november 2025. De är fortfarande obesvarade.",
    credit: "Ett initiativ från",
    creditLink: { label: "NOTA Sverige", href: "https://nota.eu" },
    columns: [
      {
        title: "Läs",
        items: [
          { route: "known", label: "Vad vi vet" },
          { route: "timeline", label: "Tidslinje" },
          { route: "acus", label: "Vad är Acus?" },
        ],
      },
      {
        title: "Fördjupa",
        items: [
          { route: "questions", label: "Frågorna" },
          { route: "about", label: "Om sidan" },
        ],
      },
    ],
    legal:
      "Innehållet bygger på publicerad journalistik och offentliga handlingar. Uppgifter från rapportering attribueras till respektive redaktion och utgör inte påståenden om faktiska förhållanden från vår sida.",
    updated: "Senast uppdaterad",
  },

  ui: {
    sources: "Källor",
    source: "Källa",
    readMore: "Läs mer",
    unanswered: "Obesvarad",
    backHome: "Till startsidan",
    notFoundTitle: "Sidan finns inte",
    notFoundBody:
      "Länken leder ingenstans. Till skillnad från de flesta frågor på den här sidan går den här att svara på: sidan finns inte.",
  },
};

export default sv;
