// Pocket Oracle - data file.
// Edit freely: add verbs, objects, change weights. Keep it ASCII:
// non-ASCII letters are written as \uXXXX escapes (e.g. \u0105 = a with ogonek).
// Loaded by index.html via <script src="data.js">.
//
// LANGUAGES
// Each entry in LANGS is one language; the first entry is the reference.
// Every language must have the same shape as the reference: the same number
// of weekdays, months, years, signs, verbs and objects per verb, in the same
// order. The Oracle picks positions, not words, so a reading stays the same
// prophecy when the language is switched. index.html warns in the console
// if a language drifts out of shape.
//
// Templates use {placeholders}. Readout numbers use the language's decimal
// separator; vector components are joined with listSep.

// Weekday weights, Monday..Sunday (only used inside the 80% weekday branch).
const WEEKDAY_WEIGHTS = [15, 10, 12, 12, 20, 15, 12];

const LANGS = {

    // ===== ENGLISH =====
    en: {
        name: 'English',
        flag: '<svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><clipPath id="flag-gb-t"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath><path d="M0,0v30h60v-30z" fill="#012169"/><path d="M0,0L60,30M60,0L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0L60,30M60,0L0,30" clip-path="url(#flag-gb-t)" stroke="#c8102e" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#c8102e" stroke-width="6"/></svg>',
        decimal: '.',
        listSep: ', ',

        ui: {
            waiting: 'The stars are waiting.',
            nameLabel: 'Your Name',
            namePlaceholder: 'Name',
            signLabel: 'Your Sign',
            consult: 'CONSULT!',
            methodology: 'Methodology',
            ariaLang: 'Language',
            ariaDate: 'About the date',
            ariaName: 'Why we need your name',
            ariaSign: 'Why we need your sign',
            ariaMethod: 'Methodology'
        },

        // Aries..Pisces, same order as the <select> in index.html
        signs: [
            'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
            'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
        ],

        // Full time phrases. Weekdays Monday..Sunday.
        weekdays: [
            'next Monday', 'next Tuesday', 'next Wednesday', 'next Thursday',
            'next Friday', 'next Saturday', 'next Sunday'
        ],
        months: [
            'next January', 'next February', 'next March', 'next April',
            'next May', 'next June', 'next July', 'next August',
            'next September', 'next October', 'next November', 'next December'
        ],
        years: ['in a year', 'in 2 years', 'in 3 years'],

        sentence: '{time}, you will {verb} {obj}.',
        teaser: 'You will {verb} {obj}...',

        readout: {
            fidelity: 'Collapse fidelity: {value}%',
            entanglement: 'Entanglement index: {value}',
            margin: 'Heisenberg margin: +/- {value} {unit}',
            vector: 'Destiny eigenvector: ({value})'
        },
        // [form for 1, form for 2-3]
        units: {
            days: ['day', 'days'],
            weeks: ['week', 'weeks'],
            months: ['month', 'months']
        },

        // [verb phrase, objects that make sense with it]
        verbs: [
            ['befriend', [
                'a panda bear',
                'your neighbour\'s cat',
                'a suspicious pigeon',
                'a retired magician',
                'the office printer',
                'a very confident goose',
                'a raccoon wearing a tiny tuxedo',
                'a sentient tumbleweed',
                'a street performer who only plays the triangle',
                'a moth that loves high fashion'
            ]],
            ['lose', [
                'your left sock',
                'an argument with a toaster',
                'faith in humanity',
                'the TV remote',
                'a staring contest with a toddler',
                'your sense of direction',
                'a high-stakes game of rock-paper-scissors with a mirror',
                'your phone while holding it in your hand',
                'a wrestling match against a fitted sheet',
                'your dignity at a corporate icebreaker'
            ]],
            ['find', [
                'a coin from a country that does not exist',
                'inner peace in a parking lot',
                'the meaning of life behind the fridge',
                'a spare key that opens nothing',
                'your true calling as a mime',
                'a potato shaped like your ex',
                'a USB drive labeled "DO NOT OPEN" containing photos of soup',
                'a half-eaten kebab with immaculate vibes',
                'a secret trapdoor under your doormat',
                'the missing piece of a puzzle you never owned'
            ]],
            ['adopt', [
                'a cactus with abandonment issues',
                'a philosophy you do not understand',
                'a stray shopping cart',
                'a tamagotchi',
                'three goldfish named Steve',
                'a strict sourdough schedule',
                'an emotional support brick',
                'a Victorian child\'s ghost',
                'a passive-aggressive roomba',
                'a dramatic fake plant that demands water'
            ]],
            ['be chased by', [
                'an overly friendly golden retriever',
                'a tax auditor on rollerblades',
                'an angry swan',
                'your own reflection',
                'a marketing email',
                'a man selling encyclopedias',
                'a swarm of overly aggressive Wi-Fi signals',
                'a parade float that got loose',
                'a mime trying to enclose you in an invisible box',
                'a runaway wheel of parmesan cheese'
            ]],
            ['accidentally invent', [
                'a new kind of sandwich',
                'a dance move banned in 4 countries',
                'a religion',
                'a word that catches on',
                'a perpetual motion machine (it will not work)',
                'a cheese-based currency',
                'a tea format that aggressively offends the British',
                'a quiet way to open a bag of chips at 2 AM',
                'a toaster that roasts your life choices instead of bread',
                'a sport involving unicycles and soup spoons'
            ]],
            ['win', [
                'a lifetime supply of mayonnaise',
                'a duel against a vending machine',
                'a raffle you did not enter',
                'the respect of a local crow',
                'second place in a hot dog eating contest',
                'a staring contest with a statue',
                'a gold medal in aggressive nap taking',
                'an award for "Most Dramatic Sigh in an Open Office"',
                'a debate against a chatbot using pure nonsensical slang',
                'a free pass to break one small public rule per month'
            ]],
            ['argue with', [
                'a self-checkout machine',
                'a seagull over a sandwich',
                'your GPS',
                'a mime (and lose)',
                'a fortune cookie',
                'your smart fridge',
                'a door that says "PULL" when you push it',
                'a potted fern about political economy',
                'a rogue automatic paper towel dispenser',
                'a parking meter that refuses your valid currency'
            ]],
            ['learn to play', [
                'the kazoo',
                'the bagpipes, badly',
                'chess against a chicken',
                'the triangle professionally',
                'dead with remarkable conviction',
                'the spoons',
                'the accordion just to spite your neighbors',
                'air guitar with actual acoustic resonance',
                'the harp, but only heavy metal covers',
                'a melodica using only your nose'
            ]],
            ['receive', [
                'a mysterious parcel full of rubber ducks',
                'a letter from your future self',
                'an apology from a pigeon',
                'a promotion you did not apply for',
                'an unsolicited haircut',
                'a knighthood by mistake',
                'a legally binding subpoena signed by Santa Claus',
                'a cursed heirloom that smells faintly of cinnamon',
                'a certificate of authenticity for your weirdness',
                'a passive-aggressive postcard from an old roommate'
            ]],
            ['go viral for', [
                'sneezing at a funeral',
                'parallel parking perfectly',
                'teaching a cat to high-five',
                'falling into a fountain gracefully',
                'a very long hiccup',
                'your opinion on spoons',
                'tripping over absolutely nothing on live TV',
                'aggressively eating a whole onion like an apple',
                'mistaking a mannequin for an old classmate',
                'explaining quantum physics to a confused opossum'
            ]],
            ['discover', [
                'that you are allergic to Mondays',
                'a secret room in your fridge',
                'a new species of dust bunny',
                'that your plant has been judging you',
                'a talent for yodeling',
                'that the moon owes you money',
                'a hidden micro-society living in your junk drawer',
                'that your dog has a secret second family down the street',
                'a forgotten $20 bill in a jacket you bought recently',
                'that you are the rightful heir to an abandoned bouncy castle'
            ]],
            ['summon', [
                'a minor demon that only steals left socks',
                'a medieval peasant who is terrified of your microwave',
                'a Victorian ghost who critiques your interior design',
                'a portal to a realm made entirely of stale garlic bread',
                'an ancient deity of forgotten passwords',
                'a confused Renaissance painter',
                'a goblin market inside your local laundromat',
                'a chorus of frogs that sings 80s pop hits',
                'a friendly spirit that folds your laundry incorrectly',
                'the legendary spirit of bad timing'
            ]],
            ['unintentionally haunt', [
                'a local IKEA showroom',
                'the office breakroom microwave',
                'a specific aisle in the grocery store',
                'a hipster coffee shop\'s Wi-Fi router',
                'a public park bench',
                'the elevator in your apartment building',
                'a self-service car wash',
                'a very specific thread on Reddit',
                'a high school drama club rehearsal',
                'an automated phone tree menu'
            ]],
            ['be promoted to', [
                'Chief Nap Officer of your household',
                'Supreme Overlord of the neighborhood cats',
                'Senior Manager of Procrastination',
                'Official Quality Inspector of Couch Pillows',
                'Grandmaster of Overthinking Simple Decisions',
                'Lead Diplomat to the Pigeon Council',
                'Director of Unfinished Side Projects',
                'Head of the Local Snack Custody Committee',
                'President of the Anti-Early-Morning Club',
                'Captain of the Sinking Ship of Your Own Schedule'
            ]],
            ['accidentally join', [
                'an underground competitive bingo league',
                'a secret cult dedicated to worshipping an old microwave',
                'a flash mob that never actually starts dancing',
                'a high-stakes duck racing syndicate',
                'a support group for people terrified of folding chairs',
                'a rival neighborhood watch group by standing in the wrong line',
                'a rogue choir that only sings elevator music',
                'a synchronized swimming team for non-swimmers',
                'an extreme croquet tournament',
                'a secret society of people who pretend to know how taxes work'
            ]],
            ['challenge', [
                'a swan to a formal duel',
                'a chess grandmaster to a game of Tic-Tac-Toe',
                'a squirrel for control of a specific oak tree',
                'your microwave to a race against time',
                'a street sign to a standing jump contest',
                'a group of teenagers to an unprovoked dance-off',
                'a local mayor to a staring contest',
                'a GPS navigation system to a route-finding race',
                'a vending machine to an arm wrestling match',
                'a flock of seagulls to a sing-off'
            ]]
        ],

        // Texts for the "?" popups. Each paragraph is a separate string.
        info: {
            name: {
                title: 'The Observer Term',
                paragraphs: [
                    "Until you provide your name, your existence is a superposition of every possible person. A prophecy computed in this state is averaged across all of humanity and is therefore useless: it predicts that someone, somewhere, will do something.",
                    "Stating your name is a measurement event. It collapses your personal wavefunction onto a single eigenstate, allowing the Oracle to read probabilities, one of which will be presented."
                ]
            },
            sign: {
                title: 'The Boundary Condition',
                paragraphs: [
                    "At the moment of birth, the neutrino streams from celestial bodies imprint an initial state on the infant's quantum foam.",
                    "We cannot measure it directly (the hospital would not let us), so we approximate it with a zodiac sign, accurate to within roughly one twelfth of the sun-positions and adjusted for precession/rotation."
                ]
            },
            date: {
                title: 'Temporal Decoherence',
                paragraphs: [
                    "Prophetic coherence decays with a half-life of 86 000 (-/+500) seconds. After that, environmental entropy (traffic, small talk, email) renders the signal unusable and a fresh reading is required.",
                    "This is why your horoscope changes daily, and why reading yesterday's is not only useless but mildly hazardous."
                ]
            },
            method: {
                title: 'Methodology',
                paragraphs: [
                    "Unlike conventional astrologers, the Oracle is fully reproducible. Ask twice, get the same answer. This is not a limitation; it is peer review.",
                    "Readings are computed on a 128-qubit destiny register and driven by a Small Fast Chaotic engine. Zero randomness is involved: your fate was precomputed.",
                    "Peer-reviewed by our peers (us). Not approved by any scientific body. Not disapproved either; we did not ask."
                ]
            }
        }
    },

    // ===== POLSKI =====
    pl: {
        name: 'Polski',
        flag: '<svg viewBox="0 0 16 10" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M0,0h16v5h-16z" fill="#fff"/><path d="M0,5h16v5h-16z" fill="#dc143c"/></svg>',
        decimal: ',',
        listSep: ';\u00a0',   // no-break space: the vector never splits across lines

        ui: {
            waiting: 'Gwiazdy czekaj\u0105.',
            nameLabel: 'Twoje imi\u0119',
            namePlaceholder: 'Imi\u0119',
            signLabel: 'Tw\u00f3j znak zodiaku',
            consult: 'WR\u00d3\u017b!',
            methodology: 'Metodologia',
            ariaLang: 'J\u0119zyk',
            ariaDate: 'O dacie',
            ariaName: 'Po co nam twoje imi\u0119',
            ariaSign: 'Po co nam tw\u00f3j znak',
            ariaMethod: 'Metodologia'
        },

        signs: [
            'Baran', 'Byk', 'Bli\u017ani\u0119ta', 'Rak', 'Lew', 'Panna',
            'Waga', 'Skorpion', 'Strzelec', 'Kozioro\u017cec', 'Wodnik', 'Ryby'
        ],

        weekdays: [
            'w przysz\u0142y poniedzia\u0142ek', 'w przysz\u0142y wtorek', 'w przysz\u0142\u0105 \u015brod\u0119', 'w przysz\u0142y czwartek',
            'w przysz\u0142y pi\u0105tek', 'w przysz\u0142\u0105 sobot\u0119', 'w przysz\u0142\u0105 niedziel\u0119'
        ],
        months: [
            'w przysz\u0142ym styczniu', 'w przysz\u0142ym lutym', 'w przysz\u0142ym marcu', 'w przysz\u0142ym kwietniu',
            'w przysz\u0142ym maju', 'w przysz\u0142ym czerwcu', 'w przysz\u0142ym lipcu', 'w przysz\u0142ym sierpniu',
            'w przysz\u0142ym wrze\u015bniu', 'w przysz\u0142ym pa\u017adzierniku', 'w przysz\u0142ym listopadzie', 'w przysz\u0142ym grudniu'
        ],
        years: ['za rok', 'za 2 lata', 'za 3 lata'],

        // Polish: verb phrase already carries its preposition, objects are
        // declined to match it. No past tense in 2nd person (it is gendered).
        sentence: '{time} {verb} {obj}.',
        teaser: '{verb} {obj}...',

        readout: {
            fidelity: 'Wierno\u015b\u0107 kolapsu: {value}%',
            entanglement: 'Indeks spl\u0105tania: {value}',
            margin: 'Margines Heisenberga: +/- {value} {unit}',
            vector: 'Wektor w\u0142asny przeznaczenia: ({value})'
        },
        units: {
            days: ['dzie\u0144', 'dni'],
            weeks: ['tydzie\u0144', 'tygodnie'],
            months: ['miesi\u0105c', 'miesi\u0105ce']
        },

        verbs: [
            ['zaprzyja\u017anisz si\u0119 z', [
                'pand\u0105 wielk\u0105',
                'kotem s\u0105siada',
                'podejrzanym go\u0142\u0119biem',
                'emerytowanym iluzjonist\u0105',
                'biurow\u0105 drukark\u0105',
                'bardzo pewn\u0105 siebie g\u0119si\u0105',
                'szopem w malutkim smokingu',
                'my\u015bl\u0105cym krzakiem z westernu',
                'ulicznym grajkiem, kt\u00f3ry gra wy\u0142\u0105cznie na tr\u00f3jk\u0105cie',
                'wyrafinowan\u0105 \u0107m\u0105 zakochan\u0105 w wysokiej modzie'
            ]],
            ['stracisz', [
                'lew\u0105 skarpetk\u0119',
                'argumenty w k\u0142\u00f3tni z tosterem',
                'wiar\u0119 w ludzko\u015b\u0107',
                'pilota do telewizora',
                'twarz w pojedynku na spojrzenia z brzd\u0105cem',
                'orientacj\u0119 w terenie',
                'oszcz\u0119dno\u015bci \u017cycia, graj\u0105c z lustrem w papier, kamie\u0144, no\u017cyce',
                'telefon, trzymaj\u0105c go w r\u0119ce',
                'si\u0142y w zapasach z prze\u015bcierad\u0142em z gumk\u0105',
                'godno\u015b\u0107 na firmowej integracji'
            ]],
            ['znajdziesz', [
                'monet\u0119 z kraju, kt\u00f3ry nie istnieje',
                'wewn\u0119trzny spok\u00f3j na parkingu',
                'sens \u017cycia za lod\u00f3wk\u0105',
                'zapasowy klucz, kt\u00f3ry niczego nie otwiera',
                'prawdziwe powo\u0142anie w zawodzie mima',
                'ziemniaka \u0142udz\u0105co podobnego do swojej by\u0142ej po\u0142\u00f3wki',
                'pendrive z napisem \u201eNIE OTWIERA\u0106\u201d, a na nim same zdj\u0119cia zupy',
                'nadgryzionego kebaba o nieskazitelnej aurze',
                'tajn\u0105 zapadni\u0119 pod wycieraczk\u0105',
                'brakuj\u0105cy element uk\u0142adanki, kt\u00f3rej nigdy nie by\u0142o w twoim domu'
            ]],
            ['adoptujesz', [
                'kaktusa z l\u0119kiem przed porzuceniem',
                'filozofi\u0119, kt\u00f3rej nie rozumiesz',
                'bezpa\u0144ski w\u00f3zek sklepowy',
                'tamagotchi',
                'trzy z\u0142ote rybki, wszystkie o imieniu Zdzisiek',
                'rygorystyczny grafik karmienia zakwasu',
                'ceg\u0142\u0119 wsparcia emocjonalnego',
                'ducha wiktoria\u0144skiego dziecka',
                'pasywno-agresywnego robota odkurzaj\u0105cego',
                'sztuczn\u0105 ro\u015blin\u0119, kt\u00f3ra histerycznie domaga si\u0119 podlewania'
            ]],
            ['b\u0119dzie ci\u0119 goni\u0107', [
                'nadmiernie przyjacielski golden retriever',
                'kontroler skarbowy na rolkach',
                'w\u015bciek\u0142y \u0142ab\u0119d\u017a',
                'twoje w\u0142asne odbicie',
                'e-mail marketingowy',
                'akwizytor z encyklopediami',
                'r\u00f3j przesadnie agresywnych sygna\u0142\u00f3w Wi-Fi',
                'zbieg\u0142a platforma z parady',
                'mim, kt\u00f3ry pr\u00f3buje zamkn\u0105\u0107 ci\u0119 w niewidzialnym pude\u0142ku',
                'rozp\u0119dzone ko\u0142o parmezanu'
            ]],
            ['przypadkiem wymy\u015blisz', [
                'nowy rodzaj kanapki',
                'krok taneczny zakazany w 4 krajach',
                'now\u0105 religi\u0119',
                's\u0142owo, kt\u00f3re si\u0119 przyjmie',
                'perpetuum mobile (nie zadzia\u0142a)',
                'walut\u0119 opart\u0105 na serze',
                'spos\u00f3b parzenia herbaty, kt\u00f3ry \u015bmiertelnie obra\u017ca Brytyjczyk\u00f3w',
                'bezszelestny spos\u00f3b otwierania paczki chips\u00f3w o drugiej w nocy',
                'toster, kt\u00f3ry zamiast chleba przypieka twoje \u017cyciowe wybory',
                'now\u0105 dyscyplin\u0119 sportu z udzia\u0142em monocykli i \u0142y\u017cek do zupy'
            ]],
            ['wygrasz', [
                'do\u017cywotni zapas majonezu',
                'pojedynek z automatem z przek\u0105skami',
                'loteri\u0119, w kt\u00f3rej nie bierzesz udzia\u0142u',
                'szacunek miejscowej wrony',
                'drugie miejsce w konkursie jedzenia hot dog\u00f3w',
                'pojedynek na spojrzenia z pomnikiem',
                'z\u0142oty medal w agresywnym ucinaniu drzemek',
                'nagrod\u0119 za \u201eNajbardziej dramatyczne westchnienie w open space\u201d',
                'debat\u0119 z chatbotem, pos\u0142uguj\u0105c si\u0119 wy\u0142\u0105cznie bezsensownym slangiem',
                'darmow\u0105 przepustk\u0119 na z\u0142amanie jednego drobnego przepisu miesi\u0119cznie'
            ]],
            ['pok\u0142\u00f3cisz si\u0119 z', [
                'kas\u0105 samoobs\u0142ugow\u0105',
                'mew\u0105 o kanapk\u0119',
                'w\u0142asn\u0105 nawigacj\u0105 GPS',
                'mimem (i przegrasz)',
                'ciasteczkiem z wr\u00f3\u017cb\u0105',
                'w\u0142asn\u0105 inteligentn\u0105 lod\u00f3wk\u0105',
                'drzwiami z napisem \u201eDO SIEBIE\u201d, kt\u00f3re pchasz od siebie',
                'paprotk\u0105 w doniczce o ekonomi\u0119 polityczn\u0105',
                'automatycznym podajnikiem r\u0119cznik\u00f3w papierowych, kt\u00f3ry si\u0119 zbuntowa\u0142',
                'parkometrem, kt\u00f3ry nie przyjmuje twoich ca\u0142kowicie prawdziwych pieni\u0119dzy'
            ]],
            ['nauczysz si\u0119 gra\u0107', [
                'na kazoo',
                'na dudach, fatalnie',
                'w szachy z kur\u0105',
                'zawodowo na tr\u00f3jk\u0105cie',
                'rol\u0119 trupa z niezwyk\u0142ym przekonaniem',
                'na \u0142y\u017ckach',
                'na akordeonie, wy\u0142\u0105cznie na z\u0142o\u015b\u0107 s\u0105siadom',
                'na powietrznej gitarze z prawdziwym rezonansem akustycznym',
                'na harfie, ale wy\u0142\u0105cznie metalowe covery',
                'na melodyce, u\u017cywaj\u0105c wy\u0142\u0105cznie nosa'
            ]],
            ['dostaniesz', [
                'tajemnicz\u0105 paczk\u0119 pe\u0142n\u0105 gumowych kaczuszek',
                'list od siebie z przysz\u0142o\u015bci',
                'przeprosiny od go\u0142\u0119bia',
                'awans, o kt\u00f3ry wcale si\u0119 nie starasz',
                'niezam\u00f3wione strzy\u017cenie',
                'tytu\u0142 szlachecki przez pomy\u0142k\u0119',
                'prawnie wi\u0105\u017c\u0105ce wezwanie do s\u0105du podpisane przez \u015awi\u0119tego Miko\u0142aja',
                'przekl\u0119t\u0105 rodzinn\u0105 pami\u0105tk\u0119, kt\u00f3ra lekko pachnie cynamonem',
                'certyfikat autentyczno\u015bci swojego dziwactwa',
                'pasywno-agresywn\u0105 poczt\u00f3wk\u0119 od dawnego wsp\u00f3\u0142lokatora'
            ]],
            ['zas\u0142yniesz w sieci z', [
                'kichni\u0119cia na pogrzebie',
                'perfekcyjnego parkowania r\u00f3wnoleg\u0142ego',
                'nauczenia kota przybijania pi\u0105tki',
                'wdzi\u0119cznego wpadni\u0119cia do fontanny',
                'bardzo d\u0142ugiej czkawki',
                'w\u0142asnej opinii na temat \u0142y\u017cek',
                'potkni\u0119cia si\u0119 o absolutnie nic na \u017cywo w telewizji',
                'agresywnego jedzenia ca\u0142ej cebuli jak jab\u0142ka',
                'pomylenia manekina z dawnym koleg\u0105 ze szko\u0142y',
                't\u0142umaczenia fizyki kwantowej zdezorientowanemu oposowi'
            ]],
            ['odkryjesz', [
                'u siebie alergi\u0119 na poniedzia\u0142ki',
                'tajne pomieszczenie w lod\u00f3wce',
                'nowy gatunek k\u0142\u0119bka kurzu',
                'dowody na to, \u017ce twoja ro\u015blina od dawna ci\u0119 ocenia',
                'w sobie talent do jod\u0142owania',
                'weksel, na mocy kt\u00f3rego Ksi\u0119\u017cyc wisi ci kas\u0119',
                'ukryte mikrospo\u0142ecze\u0144stwo w szufladzie z rupieciami',
                'drug\u0105, tajn\u0105 rodzin\u0119 swojego psa na ko\u0144cu ulicy',
                'zapomnian\u0105 dwudziestk\u0119 w kurtce, kt\u00f3ra wci\u0105\u017c ma metk\u0119',
                'testament, w kt\u00f3rym zapisano ci porzucony dmuchany zamek'
            ]],
            ['przywo\u0142asz', [
                'pomniejszego demona, kt\u00f3ry kradnie wy\u0142\u0105cznie lewe skarpetki',
                '\u015bredniowiecznego ch\u0142opa, kt\u00f3ry panicznie boi si\u0119 twojej mikrofal\u00f3wki',
                'wiktoria\u0144skiego ducha, kt\u00f3ry krytykuje tw\u00f3j wystr\u00f3j wn\u0119trz',
                'portal do krainy w ca\u0142o\u015bci zbudowanej z czerstwego chleba czosnkowego',
                'pradawne b\u00f3stwo zapomnianych hase\u0142',
                'zdezorientowanego malarza z epoki renesansu',
                'targ goblin\u00f3w w osiedlowej pralni samoobs\u0142ugowej',
                'ch\u00f3r \u017cab \u015bpiewaj\u0105cy przeboje z lat 80.',
                'przyjaznego ducha, kt\u00f3ry \u017ale sk\u0142ada twoje pranie',
                'legendarnego ducha fatalnego wyczucia czasu'
            ]],
            ['niechc\u0105cy zaczniesz nawiedza\u0107', [
                'pokazowe pokoje w pobliskiej IKEI',
                'mikrofal\u00f3wk\u0119 w biurowej kuchni',
                'jedn\u0105 konkretn\u0105 alejk\u0119 w supermarkecie',
                'router Wi-Fi w hipsterskiej kawiarni',
                '\u0142awk\u0119 w parku miejskim',
                'wind\u0119 w swoim bloku',
                'myjni\u0119 samoobs\u0142ugow\u0105',
                'bardzo konkretny w\u0105tek na Reddicie',
                'pr\u00f3by szkolnego k\u00f3\u0142ka teatralnego',
                'automatyczne menu infolinii'
            ]],
            ['awansujesz na', [
                'Naczelnego Dyrektora ds. Drzemek w swoim domu',
                'Najwy\u017cszego W\u0142adc\u0119 okolicznych kot\u00f3w',
                'Starszego Kierownika ds. Prokrastynacji',
                'Oficjalnego Inspektora Jako\u015bci Poduszek Kanapowych',
                'Arcymistrza Rozkminiania Prostych Decyzji',
                'G\u0142\u00f3wnego Dyplomat\u0119 przy Radzie Go\u0142\u0119bi',
                'Dyrektora ds. Niedoko\u0144czonych Projekt\u00f3w Pobocznych',
                'Przewodnicz\u0105cego Osiedlowej Komisji ds. Pieczy nad Przek\u0105skami',
                'Prezesa Klubu Przeciwnik\u00f3w Wczesnych Pobudek',
                'Kapitana Ton\u0105cego Statku W\u0142asnego Grafiku'
            ]],
            ['przypadkiem do\u0142\u0105czysz do', [
                'podziemnej ligi wyczynowego bingo',
                'tajnej sekty oddaj\u0105cej cze\u015b\u0107 starej mikrofal\u00f3wce',
                'flash moba, kt\u00f3ry nigdy nie zaczyna ta\u0144czy\u0107',
                'syndykatu wy\u015bcig\u00f3w kaczek o wysokie stawki',
                'grupy wsparcia dla os\u00f3b panicznie boj\u0105cych si\u0119 krzese\u0142 sk\u0142adanych',
                'konkurencyjnej stra\u017cy osiedlowej, staj\u0105c w niew\u0142a\u015bciwej kolejce',
                'zbuntowanego ch\u00f3ru, kt\u00f3ry \u015bpiewa wy\u0142\u0105cznie muzyk\u0119 z windy',
                'dru\u017cyny p\u0142ywania synchronicznego dla niep\u0142ywaj\u0105cych',
                'turnieju krokieta ekstremalnego',
                'tajnego stowarzyszenia ludzi, kt\u00f3rzy udaj\u0105, \u017ce rozumiej\u0105 podatki'
            ]],
            ['wyzwiesz', [
                '\u0142ab\u0119dzia na oficjalny pojedynek',
                'arcymistrza szachowego na parti\u0119 w k\u00f3\u0142ko i krzy\u017cyk',
                'wiewi\u00f3rk\u0119 do walki o kontrol\u0119 nad pewnym d\u0119bem',
                'swoj\u0105 mikrofal\u00f3wk\u0119 na wy\u015bcig z czasem',
                'znak drogowy na konkurs skoku w dal z miejsca',
                'grup\u0119 nastolatk\u00f3w na bitw\u0119 taneczn\u0105 bez \u017cadnego powodu',
                'miejscowego w\u00f3jta na pojedynek na spojrzenia',
                'nawigacj\u0119 GPS na wy\u015bcig w wyznaczaniu trasy',
                'automat z przek\u0105skami na si\u0142owanie si\u0119 na r\u0119k\u0119',
                'stado mew na pojedynek wokalny'
            ]]
        ],

        info: {
            name: {
                title: 'Cz\u0142on obserwatora',
                paragraphs: [
                    "Dop\u00f3ki nie podasz imienia, twoje istnienie jest superpozycj\u0105 wszystkich mo\u017cliwych os\u00f3b. Przepowiednia obliczona w tym stanie jest u\u015bredniona po ca\u0142ej ludzko\u015bci, a przez to bezu\u017cyteczna: przewiduje, \u017ce kto\u015b, gdzie\u015b, co\u015b zrobi.",
                    "Podanie imienia jest aktem pomiaru. Powoduje kolaps twojej osobistej funkcji falowej do jednego stanu w\u0142asnego, dzi\u0119ki czemu Wyrocznia mo\u017ce odczyta\u0107 prawdopodobie\u0144stwa, z kt\u00f3rych jedno zostanie ci przedstawione."
                ]
            },
            sign: {
                title: 'Warunek brzegowy',
                paragraphs: [
                    "W chwili narodzin strumienie neutrin z cia\u0142 niebieskich odciskaj\u0105 stan pocz\u0105tkowy na matrycy \u015bwiadomości niemowl\u0119cia.",
                    "Nie mo\u017cemy go zmierzy\u0107 bezpo\u015brednio (szpital si\u0119 nie zgodzi\u0142), wi\u0119c przybli\u017camy go znakiem zodiaku, z dok\u0142adno\u015bci\u0105 do mniej wi\u0119cej jednej dwunastej po\u0142o\u017ce\u0144 S\u0142o\u0144ca, z poprawk\u0105 na precesj\u0119 i rotacj\u0119."
                ]
            },
            date: {
                title: 'Dekoherencja czasowa',
                paragraphs: [
                    "Sp\u00f3jno\u015b\u0107 proroctwa zanika z okresem p\u00f3\u0142trwania 86 000 (-/+500) sekund. Po tym czasie entropia otoczenia (korki, pogaw\u0119dki, e-maile) czyni sygna\u0142 bezu\u017cytecznym i potrzebny jest nowy odczyt.",
                    "Dlatego tw\u00f3j horoskop zmienia si\u0119 codziennie, a czytanie wczorajszego jest nie tylko bezu\u017cyteczne, ale i lekko niebezpieczne."
                ]
            },
            method: {
                title: 'Metodologia',
                paragraphs: [
                    "W przeciwie\u0144stwie do konwencjonalnych astrolog\u00f3w Wyrocznia jest w pe\u0142ni powtarzalna. Zapytaj dwa razy, a dostaniesz t\u0119 sam\u0105 odpowied\u017a. To nie ograniczenie, to recenzja naukowa.",
                    "Odczyty s\u0105 obliczane na 128-kubitowym rejestrze przeznaczenia, nap\u0119dzanym silnikiem Small Fast Chaotic. Nie ma w tym ani krzty losowo\u015bci: tw\u00f3j los zosta\u0142 obliczony z g\u00f3ry.",
                    "Zrecenzowane przez r\u00f3wnych nam (czyli przez nas). Niezatwierdzone przez \u017cadne gremium naukowe. Nieodrzucone r\u00f3wnie\u017c; nie pytali\u015bmy."
                ]
            }
        }
    }
};
