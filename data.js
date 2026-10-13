// Pocket Oracle - data file.
// Edit freely: add verbs, objects, change weights. Keep it ASCII.
// Loaded by index.html via <script src="data.js">.

// Weekday weights (only used inside the 80% weekday branch).
const WEEKDAYS = [
    ['Monday',    15],
    ['Tuesday',   10],
    ['Wednesday', 12],
    ['Thursday',  12],
    ['Friday',    20],
    ['Saturday',  15],
    ['Sunday',    12]
];

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// verb phrase -> objects that make sense with it
const VERBS = {
    'befriend': [
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
    ],
    'lose': [
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
    ],
    'find': [
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
    ],
    'adopt': [
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
    ],
    'be chased by': [
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
    ],
    'accidentally invent': [
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
    ],
    'win': [
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
    ],
    'argue with': [
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
    ],
    'learn to play': [
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
    ],
    'receive': [
        'a mysterious parcel full of rubber ducks',
        'a letter from your future self',
        'an apology from a pigeon',
        'a promotion you did not apply for',
        'an unsolicited haircut',
        'a knighthood by mistake',
        'a legally binding subpoena signed by Santa Claus',
        'a cursed heirloom that smells faint of cinnamon',
        'a certificate of authenticity for your weirdness',
        'a passive-aggressive postcard from an old roommate'
    ],
    'go viral for': [
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
    ],
    'discover': [
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
    ],
    'summon': [
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
    ],
    'unintentionally haunt': [
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
    ],
    'be promoted to': [
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
    ],
    'accidentally join': [
        'a underground competitive bingo league',
        'a secret cult dedicated to worshipping an old microwave',
        'a flash mob that never actually starts dancing',
        'a high-stakes duck racing syndicate',
        'a support group for people terrified of folding chairs',
        'a rival neighborhood watch group by standing in the wrong line',
        'a rogue choir that only sings elevator music',
        'a synchronized swimming team for non-swimmers',
        'an extreme croquet tournament',
        'a secret society of people who pretend to know how taxes work'
    ],
    'challenge': [
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
    ]
};


// Texts for the "?" popups. Each paragraph is a separate string.
const INFO = {
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
            "At the moment of birth, the neutrino streams from celestial bodies imprints an initial state on the infant's quantum foam.",
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
};
