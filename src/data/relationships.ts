export interface GraphNode {
  id: string;
  name: string;
  role: string;
  category: 'avatars' | 'brigade' | 'haven' | 'companions' | 'antagonists';
  x: number; // percentage in SVG viewport
  y: number; // percentage in SVG viewport
  color: string;
  avatarChar: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
  type: 'twin' | 'guardian' | 'companion' | 'squad' | 'mentor' | 'hostile' | 'guide';
  details: string;
  isCanon: boolean;
  evidenceSource: string;
  episodeContext: string;
  verifiedDate: string;
}

export const RELATIONSHIP_NODES: GraphNode[] = [
  {
    id: 'pavi',
    name: 'Pavi',
    role: 'Earth Avatar (Twin)',
    category: 'avatars',
    x: 35,
    y: 45,
    color: '#d97706',
    avatarChar: 'P',
  },
  {
    id: 'nisha',
    name: 'Nisha',
    role: 'Co-Avatar (Twin)',
    category: 'avatars',
    x: 65,
    y: 45,
    color: '#e11d48',
    avatarChar: 'N',
  },
  {
    id: 'jae',
    name: 'Jae',
    role: 'Air Platoon Leader',
    category: 'brigade',
    x: 50,
    y: 18,
    color: '#0284c7',
    avatarChar: 'J',
  },
  {
    id: 'karthik',
    name: 'Karthik',
    role: 'Guard Captain',
    category: 'brigade',
    x: 82,
    y: 22,
    color: '#2563eb',
    avatarChar: 'K',
  },
  {
    id: 'daemin',
    name: 'Daemin',
    role: 'Water Vanguard',
    category: 'brigade',
    x: 18,
    y: 22,
    color: '#0891b2',
    avatarChar: 'D',
  },
  {
    id: 'agam',
    name: 'Agam',
    role: 'Haven Matron',
    category: 'haven',
    x: 18,
    y: 72,
    color: '#ca8a04',
    avatarChar: 'A',
  },
  {
    id: 'zi',
    name: 'Zi',
    role: 'Wasteland Courier',
    category: 'haven',
    x: 50,
    y: 82,
    color: '#7c3aed',
    avatarChar: 'Z',
  },
  {
    id: 'geet-ruhi',
    name: 'Geet & Ruhi',
    role: 'Cat-Monkeys',
    category: 'companions',
    x: 82,
    y: 72,
    color: '#10b981',
    avatarChar: 'G',
  },
  {
    id: 'spirit-entity',
    name: 'Dark Entity',
    role: 'Shadow Stalker',
    category: 'antagonists',
    x: 50,
    y: -4,
    color: '#4c1d95',
    avatarChar: 'S',
  },
];

export const RELATIONSHIP_EDGES: GraphEdge[] = [
  {
    id: 'e-twins',
    source: 'pavi',
    target: 'nisha',
    label: 'Twin Avatars',
    type: 'twin',
    details: 'Long-lost identical twins who split the sacred Avatar cycle. Synchronized elemental powers and shared psychic empathy.',
    isCanon: true,
    evidenceSource: 'Paramount+ Official Series Press Release (2026)',
    episodeContext: 'Episode 1: "On the Horizon"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-jae-pavi',
    source: 'jae',
    target: 'pavi',
    label: 'Protector & Escort',
    type: 'squad',
    details: 'Jae defied high command arrest warrants to smuggle Pavi safely out of Ellora.',
    isCanon: true,
    evidenceSource: 'Paramount+ Official Episode 2 Synopsis',
    episodeContext: 'Episode 2: "Into the Storm"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-jae-nisha',
    source: 'jae',
    target: 'nisha',
    label: 'Tactical Guide',
    type: 'squad',
    details: 'Jae coordinates escape routes and tempers Nisha\'s combative outbursts with strategic airbender foresight.',
    isCanon: true,
    evidenceSource: 'Avatar Studios Production Character Outlines',
    episodeContext: 'Episodes 2-3',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-karthik-nisha',
    source: 'karthik',
    target: 'nisha',
    label: 'Guardian & Mentor',
    type: 'guardian',
    details: 'Captain Karthik raised Nisha in secret inside the citadel garrison, shielding her identity from the Anti-Avatar Council.',
    isCanon: true,
    evidenceSource: 'Avatar Studios Character Dossier & Voice Cast Brief',
    episodeContext: 'Episode 1: "On the Horizon"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-karthik-jae',
    source: 'karthik',
    target: 'jae',
    label: 'Commander / Covert Support',
    type: 'squad',
    details: 'Karthik acts as Jae\'s superior officer while secretly misdirecting search hounds to ensure their safe flight.',
    isCanon: true,
    evidenceSource: 'Paramount+ Military Garrison Overview',
    episodeContext: 'Episode 1 & 2',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-daemin-jae',
    source: 'daemin',
    target: 'jae',
    label: 'Loyal Platoon Brother',
    type: 'squad',
    details: 'Daemin deserted the garrison alongside Jae to provide waterbending defense for the fleeing party.',
    isCanon: true,
    evidenceSource: 'Official Voice Cast Announcement (Darren Barnet / Major Curda)',
    episodeContext: 'Episode 2: "Into the Storm"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-agam-pavi',
    source: 'agam',
    target: 'pavi',
    label: 'Maternal Refuge',
    type: 'mentor',
    details: 'Agam provided hot meals, comfort, and cover to orphan Pavi in the market slums.',
    isCanon: false,
    evidenceSource: 'Dramatized character connection; role confirmed as haven elder by Paramount+',
    episodeContext: 'Episode 1: "On the Horizon"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-zi-party',
    source: 'zi',
    target: 'pavi',
    label: 'Wasteland Navigator',
    type: 'guide',
    details: 'Hired courier who pilots the party\'s sand-skiff through dangerous spirit-contaminated routes between havens.',
    isCanon: true,
    evidenceSource: 'Paramount+ Official Episode 3 Synopsis',
    episodeContext: 'Episode 3: "The Order"',
    verifiedDate: 'October 2026',
  },
  {
    id: 'e-geet-pavi',
    source: 'pavi',
    target: 'geet-ruhi',
    label: 'Companion Bond',
    type: 'companion',
    details: 'Geet and Ruhi are inseparable animal guardians bonded with each twin.',
    isCanon: true,
    evidenceSource: 'Official Creature Animation & Voice Reveal (Dee Bradley Baker)',
    episodeContext: 'Episodes 1-3',
    verifiedDate: 'October 2026',
  },
];
