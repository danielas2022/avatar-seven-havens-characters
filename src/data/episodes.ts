export interface Episode {
  episodeNumber: number;
  title: string;
  book: number;
  bookTitle: string;
  airDate: string;
  status: 'Aired' | 'Upcoming';
  synopsis: string;
  keyCharacters: string[];
}

export const BOOK_1_EPISODES: Episode[] = [
  {
    episodeNumber: 1,
    title: 'On the Horizon',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 9, 2026',
    status: 'Aired',
    synopsis: 'In the fortified Haven of Ellora, young earthbender Pavi inadvertently unlocks multi-elemental abilities during a sandstorm breach, triggering panic among citizens who fear the return of the world-destroying Avatar.',
    keyCharacters: ['Pavi', 'Jae', 'Karthik', 'Nisha', 'Agam', 'Geet']
  },
  {
    episodeNumber: 2,
    title: 'Into the Storm',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 9, 2026',
    status: 'Aired',
    synopsis: 'As the Ellora Council orders an immediate purge of elemental anomalies, Platoon Leader Jae risks court-martial to aid Pavi\'s escape. Meanwhile, inside the upper citadel, Nisha\'s secret powers violently erupt.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Daemin', 'The Dark Entity']
  },
  {
    episodeNumber: 3,
    title: 'The Order',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 9, 2026',
    status: 'Aired',
    synopsis: 'The twin sisters come face to face for the first time in their lives, causing an unprecedented resonance wave that shatters old Avatar dogma. They enlist the elusive courier Zi to escape the city limits.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Karthik', 'Zi', 'Geet & Ruhi']
  },
  {
    episodeNumber: 4,
    title: 'The Faceless',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 16, 2026',
    status: 'Upcoming',
    synopsis: 'Traversing the Salt Dunes, the fleeing group encounters a nomadic enclave that conceals their identities from roving spirit hunters.',
    keyCharacters: ['Pavi', 'Nisha', 'Zi', 'Daemin']
  },
  {
    episodeNumber: 5,
    title: 'The One Left Behind',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 23, 2026',
    status: 'Upcoming',
    synopsis: 'Back in Ellora, Captain Karthik faces interrogation from the High Magistrate while secretly transmitting cipher coordinates to Jae.',
    keyCharacters: ['Karthik', 'Agam']
  },
  {
    episodeNumber: 6,
    title: 'The Night of the Inflicted',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'October 30, 2026',
    status: 'Upcoming',
    synopsis: 'A lunar eclipse aggravates dormant spirit wounds across the wasteland, forcing the party to take shelter inside a sunken pre-Cataclysm shrine.',
    keyCharacters: ['Pavi', 'Nisha', 'The Dark Entity', 'Geet & Ruhi']
  },
  {
    episodeNumber: 7,
    title: 'What Lies Beneath',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'November 6, 2026',
    status: 'Upcoming',
    synopsis: 'Exploring the submerged corridors of the shrine, Pavi discovers ancient murals depicting the final days of Avatar Korra and the origin of the Cataclysm.',
    keyCharacters: ['Pavi', 'Jae', 'Avatar Korra (Murals)']
  },
  {
    episodeNumber: 8,
    title: 'The Envoys, Part 1',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'November 13, 2026',
    status: 'Upcoming',
    synopsis: 'Elite trackers dispatched by the Unified Haven Coalition ambush the sand-skiff at the boundary of the Second Haven.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Daemin', 'Zi']
  },
  {
    episodeNumber: 9,
    title: 'The Envoys, Part 2',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'November 20, 2026',
    status: 'Upcoming',
    synopsis: 'Surrounded and outmatched, the twins attempt a synchronized elemental stance to break the enemy blockade.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Daemin']
  },
  {
    episodeNumber: 10,
    title: 'Ghosts and Spirits',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'November 27, 2026',
    status: 'Upcoming',
    synopsis: 'Pavi and Nisha enter a spiritual vision plane where they confront the lingering specter that has tracked them since Ellora.',
    keyCharacters: ['Pavi', 'Nisha', 'The Dark Entity']
  },
  {
    episodeNumber: 11,
    title: 'Battle of the Ruins',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'December 4, 2026',
    status: 'Upcoming',
    synopsis: 'The forces of the Haven Coalition clash with rampaging dark spirits in the desolate ruins of an ancient metropolis.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Karthik', 'Zi']
  },
  {
    episodeNumber: 12,
    title: 'The Dome',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'December 11, 2026',
    status: 'Upcoming',
    synopsis: 'The companions arrive at the mysterious Second Haven—a hermetically sealed geodesic biodome guarded by reclusive energy benders.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Zi']
  },
  {
    episodeNumber: 13,
    title: 'The Root Chakra',
    book: 1,
    bookTitle: 'Book 1: Havens',
    airDate: 'December 18, 2026',
    status: 'Upcoming',
    synopsis: 'In a breathtaking season finale, Pavi and Nisha must unify their fractured spiritual links to unlock the first cosmic gate and prevent the collapse of Haven Two.',
    keyCharacters: ['Pavi', 'Nisha', 'Jae', 'Karthik', 'The Dark Entity']
  }
];
