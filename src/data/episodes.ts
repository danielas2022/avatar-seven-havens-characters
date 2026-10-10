export type SeriesEra = 'ALL' | 'ATLA' | 'TLOK' | 'SEVEN_HAVENS';

export interface Episode {
  id: string;
  series: 'ATLA' | 'TLOK' | 'SEVEN_HAVENS';
  seriesTitle: string;
  eraLabel: string;
  seasonBook: string;
  episodeNumber: number;
  episodeCode: string;
  title: string;
  airDate: string;
  status: 'Classic Canon' | 'Modern Canon' | 'In Production';
  rating: string;
  imdbRating?: string;
  synopsis: string;
  thumbnailUrl: string;
  streamPlatform: string;
  streamUrl: string;
  animationStudio: string;
  keyCharacters: string[];
}

export const FRANCHISE_EPISODES: Episode[] = [
  // =========================================================================
  // CLASSIC SERIES: AVATAR: THE LAST AIRBENDER (2005 - 2008)
  // =========================================================================
  {
    id: 'atla-s1e01',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2005)',
    seasonBook: 'Book 1: Water',
    episodeNumber: 1,
    episodeCode: 'S1 • Ep 01',
    title: 'The Boy in the Iceberg',
    airDate: 'February 21, 2005',
    status: 'Classic Canon',
    rating: '★ 8.2 / 10',
    imdbRating: '8.2',
    synopsis: 'Southern Water Tribe siblings Katara and Sokka discover young Air Nomad Avatar Aang frozen inside an iceberg with his flying bison Appa, igniting the legendary legacy that precedes modern Avatar: Seven Havens characters by over three centuries.',
    thumbnailUrl: '/imgs/episodes/atla-s1e01-iceberg.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'JM Animation & DR Movie',
    keyCharacters: ['Aang', 'Katara', 'Sokka', 'Appa', 'Prince Zuko']
  },
  {
    id: 'atla-s1e12',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2005)',
    seasonBook: 'Book 1: Water',
    episodeNumber: 12,
    episodeCode: 'S1 • Ep 12',
    title: 'The Storm',
    airDate: 'June 3, 2005',
    status: 'Classic Canon',
    rating: '★ 9.1 / 10',
    imdbRating: '9.1',
    synopsis: 'A violent ocean tempest forces Aang and Zuko to confront their painful origin traumas, establishing the spiritual burden of destiny mirrored across upcoming generations of Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/atla-s1e12-storm.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'JM Animation',
    keyCharacters: ['Aang', 'Katara', 'Sokka', 'Prince Zuko', 'Uncle Iroh']
  },
  {
    id: 'atla-s1e20',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2005)',
    seasonBook: 'Book 1: Water',
    episodeNumber: 20,
    episodeCode: 'S1 • Ep 20',
    title: 'The Siege of the North, Part 2',
    airDate: 'December 2, 2005',
    status: 'Classic Canon',
    rating: '★ 9.7 / 10',
    imdbRating: '9.7',
    synopsis: 'When Admiral Zhao slays the Moon Spirit, Aang bonds with the Ocean Spirit La to form the colossal Koizilla, displaying the raw primal spirit power studied by historians among Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/atla-s1e20-koizilla.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'DR Movie',
    keyCharacters: ['Aang (Ocean Spirit)', 'Princess Yue', 'Katara', 'Zuko', 'Admiral Zhao']
  },
  {
    id: 'atla-s2e06',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2006)',
    seasonBook: 'Book 2: Earth',
    episodeNumber: 6,
    episodeCode: 'S2 • Ep 06',
    title: 'The Blind Bandit',
    airDate: 'May 5, 2006',
    status: 'Classic Canon',
    rating: '★ 9.3 / 10',
    imdbRating: '9.3',
    synopsis: 'Aang discovers blind earthbending prodigy Toph Beifong dominating underground tournament Earth Rumble VI. Her revolutionary seismic sense techniques directly inspire young earthbender Pavi among Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/atla-s2e06-blind-bandit.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'JM Animation',
    keyCharacters: ['Toph Beifong', 'Aang', 'Katara', 'Sokka', 'The Boulder']
  },
  {
    id: 'atla-s2e20',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2006)',
    seasonBook: 'Book 2: Earth',
    episodeNumber: 20,
    episodeCode: 'S2 • Ep 20',
    title: 'The Crossroads of Destiny',
    airDate: 'December 1, 2006',
    status: 'Classic Canon',
    rating: '★ 9.6 / 10',
    imdbRating: '9.6',
    synopsis: 'Deep within the glowing crystal catacombs of Ba Sing Se, Azula mortally strikes Aang in the Avatar State, creating a cosmic severance event chronicled in ancient archives of Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/atla-s2e20-crossroads.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'DR Movie',
    keyCharacters: ['Aang', 'Katara', 'Zuko', 'Azula', 'Uncle Iroh']
  },
  {
    id: 'atla-s3e21',
    series: 'ATLA',
    seriesTitle: 'Avatar: The Last Airbender',
    eraLabel: 'Classic Era (2008)',
    seasonBook: 'Book 3: Fire',
    episodeNumber: 21,
    episodeCode: 'S3 • Ep 21',
    title: "Sozin's Comet, Part 4: Avatar Aang",
    airDate: 'July 19, 2008',
    status: 'Classic Canon',
    rating: '★ 9.9 / 10 Masterpiece',
    imdbRating: '9.9',
    synopsis: 'The climactic series finale of the classic show. Aang enters the Avatar State to subdue Phoenix King Ozai through energybending, establishing the golden standard of peace remembered by all Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/atla-s3e21-sozins-comet.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'JM Animation',
    keyCharacters: ['Avatar Aang', 'Fire Lord Ozai', 'Fire Lord Zuko', 'Katara', 'Toph']
  },

  // =========================================================================
  // MODERN SERIES: THE LEGEND OF KORRA (2012 - 2014)
  // =========================================================================
  {
    id: 'tlok-s1e01',
    series: 'TLOK',
    seriesTitle: 'The Legend of Korra',
    eraLabel: 'Modern Era (2012)',
    seasonBook: 'Book 1: Air',
    episodeNumber: 1,
    episodeCode: 'S1 • Ep 01',
    title: 'Welcome to Republic City',
    airDate: 'April 14, 2012',
    status: 'Modern Canon',
    rating: '★ 8.5 / 10',
    imdbRating: '8.5',
    synopsis: 'Southern Water Tribe Avatar Korra travels to bustling Republic City to master airbending under Tenzin, inaugurating the technological metropolis whose ruins now shelter modern Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/tlok-s1e01-republic-city.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Studio Mir',
    keyCharacters: ['Avatar Korra', 'Tenzin', 'Lin Beifong', 'Mako', 'Bolin']
  },
  {
    id: 'tlok-s2e07',
    series: 'TLOK',
    seriesTitle: 'The Legend of Korra',
    eraLabel: 'Modern Era (2013)',
    seasonBook: 'Book 2: Spirits',
    episodeNumber: 7,
    episodeCode: 'S2 • Ep 07',
    title: 'Beginnings, Part 1',
    airDate: 'October 18, 2013',
    status: 'Modern Canon',
    rating: '★ 9.6 / 10',
    imdbRating: '9.6',
    synopsis: 'Korra learns the origin of the first Avatar Wan and the light spirit Raava 10,000 years prior, revealing the mystical reincarnation rules that uniquely divide the twin Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/tlok-s2e07-wan-beginnings.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Studio Pierrot & Studio Mir',
    keyCharacters: ['Avatar Wan', 'Raava', 'Vaatu', 'Lion Turtles', 'Avatar Korra']
  },
  {
    id: 'tlok-s3e13',
    series: 'TLOK',
    seriesTitle: 'The Legend of Korra',
    eraLabel: 'Modern Era (2014)',
    seasonBook: 'Book 3: Change',
    episodeNumber: 13,
    episodeCode: 'S3 • Ep 13',
    title: 'Venom of the Red Lotus',
    airDate: 'August 22, 2014',
    status: 'Modern Canon',
    rating: '★ 9.7 / 10',
    imdbRating: '9.7',
    synopsis: 'Poisoned with metallic venom, Korra enters an unstoppable berserk Avatar State to defeat the flying anarchist Zaheer in aerial combat, an iconic spectacle referenced in the combat lore of Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/tlok-s3e13-red-lotus.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Studio Mir',
    keyCharacters: ['Avatar Korra', 'Zaheer', 'Jinora', 'Mako', 'Bolin']
  },
  {
    id: 'tlok-s4e02',
    series: 'TLOK',
    seriesTitle: 'The Legend of Korra',
    eraLabel: 'Modern Era (2014)',
    seasonBook: 'Book 4: Balance',
    episodeNumber: 2,
    episodeCode: 'S4 • Ep 02',
    title: 'Korra Alone',
    airDate: 'October 10, 2014',
    status: 'Modern Canon',
    rating: '★ 9.4 / 10',
    imdbRating: '9.4',
    synopsis: 'Haunted by physical trauma and spectral illusions, Korra wanders the Earth Kingdom searching for spiritual reconnection, directly paralleling the isolation felt by young Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/episodes/tlok-s4e02-korra-alone.png',
    streamPlatform: 'Paramount+ / Netflix',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Studio Mir',
    keyCharacters: ['Avatar Korra', 'Toph Beifong', 'Katara', 'Naga']
  },

  // =========================================================================
  // NEW SERIES: AVATAR: SEVEN HAVENS (AVATAR STUDIOS ROADMAP & STORY ARCS)
  // =========================================================================
  {
    id: 'seven-havens-arc-01',
    series: 'SEVEN_HAVENS',
    seriesTitle: 'Avatar: Seven Havens',
    eraLabel: 'New Series (Avatar Studios)',
    seasonBook: 'Book 1: Havens',
    episodeNumber: 1,
    episodeCode: 'Book 1 • Arc 01',
    title: 'Pilot: The Twin Avatars Awakening',
    airDate: 'In Active Production',
    status: 'In Production',
    rating: 'Highly Anticipated',
    synopsis: 'In the fortified haven of Ellora 225 years after Korra, young earthbender Pavi inadvertently unlocks multi-elemental bending during a wasteland dust storm, revealing the split reincarnation among Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/canon/trio-key-scene.png',
    streamPlatform: 'Paramount+ / Avatar Studios',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Avatar Studios & Flying Bark Productions',
    keyCharacters: ['Pavi (Earth Avatar)', 'Jae (Airbender)', 'Nisha (Twin Avatar)', 'Geet', 'Mount']
  },
  {
    id: 'seven-havens-arc-02',
    series: 'SEVEN_HAVENS',
    seriesTitle: 'Avatar: Seven Havens',
    eraLabel: 'New Series (Avatar Studios)',
    seasonBook: 'Book 1: Havens',
    episodeNumber: 2,
    episodeCode: 'Book 1 • Arc 02',
    title: 'Past Spirits: Korra & Aang Resonance',
    airDate: 'Storyboard Complete',
    status: 'In Production',
    rating: 'Highly Anticipated',
    synopsis: 'Pavi meditates in a forgotten spirit shrine, encountering visionary echoes of Avatar Korra and Aang to uncover why the sacred cycle splintered into two distinct Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/canon/pavi-spirits-official.png',
    streamPlatform: 'Paramount+ / Avatar Studios',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Avatar Studios & Flying Bark Productions',
    keyCharacters: ['Pavi', 'Spirit Korra', 'Spirit Aang', 'Geet']
  },
  {
    id: 'seven-havens-arc-03',
    series: 'SEVEN_HAVENS',
    seriesTitle: 'Avatar: Seven Havens',
    eraLabel: 'New Series (Avatar Studios)',
    seasonBook: 'Book 1: Havens',
    episodeNumber: 3,
    episodeCode: 'Book 1 • Arc 03',
    title: 'The Haven Canyon Mount Patrol',
    airDate: 'Animation In Progress',
    status: 'In Production',
    rating: 'Highly Anticipated',
    synopsis: 'Platoon Leader Jae guides the newly awakened twins through perilous canyon ruins on their loyal horned beast mount, evading military reconnaissance hunting all rogue Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/canon/mount-expedition.png',
    streamPlatform: 'Paramount+ / Avatar Studios',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Avatar Studios & Flying Bark Productions',
    keyCharacters: ['Pavi', 'Jae', 'Nisha', 'Captain Karthik', 'Beast Mount']
  },
  {
    id: 'seven-havens-arc-04',
    series: 'SEVEN_HAVENS',
    seriesTitle: 'Avatar: Seven Havens',
    eraLabel: 'New Series (Avatar Studios)',
    seasonBook: 'Book 1: Havens',
    episodeNumber: 4,
    episodeCode: 'Book 1 • Arc 04',
    title: 'Wasteland Caravan & The Great Skiff',
    airDate: 'Visual Dev & Layout',
    status: 'In Production',
    rating: 'Highly Anticipated',
    synopsis: 'Traversing the post-cataclysm irradiated salt plains, the party joins a nomadic haven convoy to safeguard water supplies and evade rogue spirits stalking Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/canon/expedition-landscape.png',
    streamPlatform: 'Paramount+ / Avatar Studios',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Avatar Studios & Flying Bark Productions',
    keyCharacters: ['Pavi', 'Nisha', 'Daemin (Waterbender)', 'Zi (Wasteland Scout)']
  },
  {
    id: 'seven-havens-arc-05',
    series: 'SEVEN_HAVENS',
    seriesTitle: 'Avatar: Seven Havens',
    eraLabel: 'New Series (Avatar Studios)',
    seasonBook: 'Book 1: Havens',
    episodeNumber: 5,
    episodeCode: 'Book 1 • Arc 05',
    title: 'The Citadel Lineup & Haven Council',
    airDate: 'Pre-Production Roadmap',
    status: 'In Production',
    rating: 'Highly Anticipated',
    synopsis: 'The Haven Ellora High Council convenes in the fortified inner ring, debating whether the emergence of twin Avatars heralds another apocalypse or final salvation for all Avatar: Seven Havens characters.',
    thumbnailUrl: '/imgs/canon/announcement-lineup.png',
    streamPlatform: 'Paramount+ / Avatar Studios',
    streamUrl: 'https://www.paramountplus.com',
    animationStudio: 'Avatar Studios & Flying Bark Productions',
    keyCharacters: ['Agam (Haven Matron)', 'Captain Karthik', 'Pavi', 'Nisha', 'Jae']
  }
];
