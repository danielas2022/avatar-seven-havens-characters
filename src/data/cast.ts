export interface CastMember {
  id: string;
  name: string;
  character: string;
  characterId: string;
  roleType: 'Main Cast' | 'Supporting Cast' | 'Creature Voice' | 'Creator & Showrunner';
  bio: string;
  notableCredits: string[];
  imdbSearchQuery: string;
}

export const VOICE_CAST: CastMember[] = [
  {
    id: 'saheli-khan',
    name: 'Saheli Khan',
    character: 'Pavi',
    characterId: 'pavi',
    roleType: 'Main Cast',
    bio: 'Rising dramatic talent chosen by Avatar Studios to voice the new Earth Avatar Pavi, bringing a delicate balance of childlike vulnerability and fierce determination.',
    notableCredits: ['Avatar: Seven Havens (Lead - Pavi)', 'Stage Productions & Young Voiceover Showcase'],
    imdbSearchQuery: 'Saheli Khan actor'
  },
  {
    id: 'aishu-devan',
    name: 'Aishu Devan',
    character: 'Nisha',
    characterId: 'nisha',
    roleType: 'Main Cast',
    bio: 'Dynamic actress bringing vocal power, intensity, and deep emotional resonance to Nisha, the bold and combative twin Avatar.',
    notableCredits: ['Avatar: Seven Havens (Lead - Nisha)', 'Animation & Audiobook Productions'],
    imdbSearchQuery: 'Aishu Devan actor'
  },
  {
    id: 'major-curda',
    name: 'Major Curda',
    character: 'Jae',
    characterId: 'jae',
    roleType: 'Main Cast',
    bio: 'American actor known for his television and voice work, delivering disciplined gravitas and brotherhood as the airbender platoon leader Jae.',
    notableCredits: ['Riverdale', 'Atypical', 'The Sound of Music Live!', 'Avatar: Seven Havens'],
    imdbSearchQuery: 'Major Curda'
  },
  {
    id: 'akshay-khanna',
    name: 'Akshay Khanna',
    character: 'Karthik',
    characterId: 'karthik',
    roleType: 'Main Cast',
    bio: 'Distinguished veteran actor lending his commanding, resonant baritone to Captain Karthik, the conflicted airbender commander and Nisha\'s guardian.',
    notableCredits: ['Drishyam 2', 'Dil Chahta Hai', 'Section 375', 'Avatar: Seven Havens'],
    imdbSearchQuery: 'Akshaye Khanna actor'
  },
  {
    id: 'darren-barnet',
    name: 'Darren Barnet',
    character: 'Daemin',
    characterId: 'daemin',
    roleType: 'Main Cast',
    bio: 'Acclaimed television and film star celebrated for his charismatic performances, voicing the loyal waterbender soldier Daemin in Jae\'s squad.',
    notableCredits: ['Never Have I Ever (Paxton Hall-Yoshida)', 'Blue Eye Samurai (Taigen)', 'Gran Turismo (Matty Davis)', 'Anyone But You'],
    imdbSearchQuery: 'Darren Barnet'
  },
  {
    id: 'sakina-jaffrey',
    name: 'Sakina Jaffrey',
    character: 'Agam',
    characterId: 'agam',
    roleType: 'Supporting Cast',
    bio: 'Emmy-level veteran stage and screen actress, infusing warmth, wisdom, and street-smart resilience into Agam, the Ellora haven elder and surrogate grandmother.',
    notableCredits: ['House of Cards (Linda Vasquez)', 'Snowpiercer (Mrs. Headwood)', 'The Blacklist', 'Timeless', 'Billions'],
    imdbSearchQuery: 'Sakina Jaffrey'
  },
  {
    id: 'dianne-doan',
    name: 'Dianne Doan',
    character: 'Zi',
    characterId: 'zi',
    roleType: 'Supporting Cast',
    bio: 'Versatile martial artist and actress acclaimed for complex action roles, voicing the pragmatic wasteland courier and survivalist Zi.',
    notableCredits: ['Warrior (Mai Ling)', 'Vikings (Yidu)', 'Marvel\'s Agents of S.H.I.E.L.D.', 'Descendants (Lonnie)'],
    imdbSearchQuery: 'Dianne Doan'
  },
  {
    id: 'dee-bradley-baker',
    name: 'Dee Bradley Baker',
    character: 'Geet & Ruhi (Cat-Monkeys)',
    characterId: 'geet-ruhi',
    roleType: 'Creature Voice',
    bio: 'The undisputed voice legend of creature design across the entire Avatar franchise (Appa, Momo, Naga, Pabu) and pop culture history, returning to breathe endearing life into twin cat-monkeys Geet and Ruhi.',
    notableCredits: ['Avatar: The Last Airbender (Appa & Momo)', 'Star Wars: The Clone Wars / Bad Batch', 'Phineas and Ferb (Perry the Platypus)', 'American Dad (Klaus)'],
    imdbSearchQuery: 'Dee Bradley Baker'
  },
  {
    id: 'michael-dante-dimartino',
    name: 'Michael Dante DiMartino',
    character: 'Series Co-Creator & Executive Producer',
    characterId: 'crew',
    roleType: 'Creator & Showrunner',
    bio: 'Legendary co-creator of the Avatar universe, co-running Avatar Studios and spearheading the creative vision of Seven Havens alongside Bryan Konietzko.',
    notableCredits: ['Avatar: The Last Airbender', 'The Legend of Korra', 'Avatar Studios'],
    imdbSearchQuery: 'Michael Dante DiMartino'
  },
  {
    id: 'bryan-konietzko',
    name: 'Bryan Konietzko',
    character: 'Series Co-Creator & Executive Producer',
    characterId: 'crew',
    roleType: 'Creator & Showrunner',
    bio: 'Worldbuilder, animator, and co-creator of the Avatar franchise, directing the art direction, elemental choreography, and expansive world design of Seven Havens.',
    notableCredits: ['Avatar: The Last Airbender', 'The Legend of Korra', 'Avatar Studios'],
    imdbSearchQuery: 'Bryan Konietzko'
  }
];
