export interface Character {
  id: string;
  name: string;
  alias: string;
  imageUrl: string;
  bending: 'Earth' | 'Air' | 'Water' | 'Fire' | 'Non-Bender' | 'Spirit' | 'Avatar (Multi)';
  elementColor: string;
  badgeBg: string;
  faction: string;
  voiceActor: {
    name: string;
    notableRole: string;
    imdbUrl?: string;
  };
  animalCompanion?: string;
  age?: string;
  homeHaven: string;
  quote: string;
  shortBio: string;
  fullBio: string;
  personality: string[];
  keyAbilities: string[];
  relationships: Array<{
    targetId: string;
    targetName: string;
    relation: string;
    description: string;
  }>;
  avatarStatus: 'Active Earth Avatar' | 'Twin Avatar' | 'Airbender Ally' | 'Guard Captain' | 'Waterbender Platoon' | 'Haven Elder' | 'Wanderer Ally' | 'Animal Guide' | 'Spirit Threat' | 'Past Avatar';
  firstAppearance: string;
  keyMoments: string[];
}

export const CHARACTERS: Character[] = [
  {
    id: 'pavi',
    name: 'Pavi',
    alias: 'The Reluctant Avatar',
    imageUrl: "/imgs/characters/pavi.jpg",
    bending: 'Earth',
    elementColor: 'from-amber-600 to-emerald-700 text-amber-500 border-amber-600/40',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    faction: 'Twin Avatars & Haven of Ellora',
    voiceActor: {
      name: 'Saheli Khan',
      notableRole: 'Rising animation talent & theatre performer',
    },
    animalCompanion: 'Geet (Cat-Monkey)',
    age: '9 years old',
    homeHaven: 'Haven of Ellora (Outer Ruins)',
    quote: 'I never asked to carry the world on my back. I just wanted to help our city survive another dusk.',
    shortBio: 'A 9-year-old earthbender discovering she is the reincarnation of the Avatar. Unlike past avatars, Pavi faces a fearful world that considers the Avatar a harbinger of the Cataclysm rather than a savior.',
    fullBio: `Pavi is a quiet, observant nine-year-old earthbender living on the dusty outskirts of the Haven of Ellora. When she first displays bending beyond earth, she is terrified—in the post-Cataclysm world, humanity regards the Avatar not as a revered protector, but as the mythological cause of the apocalypse that destroyed the Four Nations 225 years prior.

Accompanied by her mischievous cat-monkey companion Geet, Pavi's personality mirrors the gentle reluctance of young Aang combined with the steadfast resilience of traditional earthbenders. Her life shifts irrevocably when she discovers that she is not alone: her long-lost twin sister Nisha is also an active Avatar, splintering the sacred cycle for the first time in history.`,
    personality: ['Thoughtful', 'Compassionate', 'Reluctant Leader', 'Fiercely Loyal', 'Observant'],
    keyAbilities: [
      'Raw Seismic Sense (Developing)',
      'Subtle Earth & Dust Manipulation',
      'Emerging Multi-Elemental Intuition',
      'Empathic Connection to Spirits',
      'Acrobatic Escape Techniques'
    ],
    relationships: [
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Twin Sister & Co-Avatar',
        description: 'Long-lost identical twin. While Pavi represents restraint and grounding, Nisha embodies fiery impulse. Their bond shares the Avatar mantle.'
      },
      {
        targetId: 'jae',
        targetName: 'Jae',
        relation: 'Protective Platoon Leader',
        description: 'Airbender city guard officer who risks his rank and life to escort Pavi away from hostile bounty envoys.'
      },
      {
        targetId: 'karthik',
        targetName: 'Karthik',
        relation: 'Guard Commander',
        description: 'Commander who guarded Nisha and becomes an essential tactical guide for the sisters.'
      },
      {
        targetId: 'geet-ruhi',
        targetName: 'Geet',
        relation: 'Animal Companion',
        description: 'Loyal cat-monkey who alerts Pavi to spirit tremors and approaching patrols.'
      },
      {
        targetId: 'agam',
        targetName: 'Agam',
        relation: 'Haven Caretaker',
        description: 'Snack shop matron in Ellora who provided food and refuge to Pavi before the escape.'
      }
    ],
    avatarStatus: 'Active Earth Avatar',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Manifests accidental dual-bending during the Sandstorm Breach',
      'First psychic resonance with long-lost twin Nisha',
      'Fleeing the Haven of Ellora with Jae and Geet under pursuit of the Envoys'
    ]
  },
  {
    id: 'nisha',
    name: 'Nisha',
    alias: 'The Fiery Twin Avatar',
    imageUrl: "/imgs/characters/nisha.jpg",
    bending: 'Avatar (Multi)',
    elementColor: 'from-orange-600 to-rose-700 text-rose-400 border-rose-500/40',
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    faction: 'Twin Avatars & Citadel of Ellora',
    voiceActor: {
      name: 'Aishu Devan',
      notableRole: 'Critically acclaimed voice artist and dramatic actress',
    },
    animalCompanion: 'Ruhi (Cat-Monkey)',
    age: '9 years old',
    homeHaven: 'Haven of Ellora (Upper Citadel)',
    quote: 'If this broken world thinks the Avatar is a monster, I will show them what an Avatar can fight back against!',
    shortBio: 'Pavi’s long-lost twin sister, raised inside the fortified defenses of Ellora. Nisha is bold, fiery, and determined, manifesting explosive bending and an instinct for offensive combat.',
    fullBio: `Separated from Pavi at infancy following a mysterious spirit raid, Nisha was raised under the strict protection of City Guard Captain Karthik inside the inner citadel of Haven Ellora. Unlike Pavi's gentle demeanor, Nisha possesses a tempestuous, combative spirit reminiscent of young Korra.

When her Avatar powers ignite alongside Pavi's during a catastrophic spirit incursion, the truth of their shared soul is exposed. While Pavi seeks understanding and peaceful restoration, Nisha seeks power to protect their loved ones from the dark entity hunting them across the havens. Accompanied by her rambunctious cat-monkey Ruhi, Nisha's journey is one of channeling unbridled rage into disciplined mastery.`,
    personality: ['Fierce', 'Impulsive', 'Protective', 'Daring', 'Stubborn'],
    keyAbilities: [
      'High-Impact Explosive Bending',
      'Instinctual Elemental Transitions',
      'Close-Quarters Bending Combat',
      'Acrobatic Momentum Strikes',
      'Psychic Twin Link with Pavi'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Twin Sister & Co-Avatar',
        description: 'Her missing half. Together they unlock synchronized bending abilities that defy known avatar laws.'
      },
      {
        targetId: 'karthik',
        targetName: 'Karthik',
        relation: 'Guardian & Father Figure',
        description: 'Captain of the City Guard who raised Nisha with strict discipline to conceal her elemental anomaly.'
      },
      {
        targetId: 'jae',
        targetName: 'Jae',
        relation: 'Fellow Officer & Companion',
        description: 'Airbender who coordinates their tactical movements across hostile wilderness.'
      },
      {
        targetId: 'geet-ruhi',
        targetName: 'Ruhi',
        relation: 'Animal Companion',
        description: 'Nisha’s spirited cat-monkey companion, twin brother to Geet.'
      }
    ],
    avatarStatus: 'Twin Avatar',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Clashing with Haven security squads when discovering her hidden birthright',
      'First physical reunion and dual-element resonance with Pavi',
      'Defending the convoy during the battle of the ruined viaduct'
    ]
  },
  {
    id: 'jae',
    name: 'Jae',
    alias: 'Platoon Leader of the Bending Brigade',
    imageUrl: "/imgs/characters/jae.jpg",
    bending: 'Air',
    elementColor: 'from-sky-500 to-indigo-600 text-sky-400 border-sky-500/40',
    badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    faction: 'Haven of Ellora Bending Brigade',
    voiceActor: {
      name: 'Major Curda',
      notableRole: 'Star of "Riverdale" & Nickelodeon voice actor',
    },
    age: '19 years old',
    homeHaven: 'Haven of Ellora (Garrison Heights)',
    quote: 'Orders are easy to follow until the right thing means breaking every rule you swore to uphold.',
    shortBio: 'A disciplined airbender and platoon leader in Ellora’s defense garrison. Jae abandons his military status to protect the young twin Avatars on their perilous journey across the Seven Havens.',
    fullBio: `Jae is an agile, dutiful airbender who climbed through the ranks of the Ellora Bending Brigade through tactical intellect and calm under pressure. In a post-Cataclysm civilization where airbenders are sparse and primarily deployed as city scouts and glider couriers, Jae commands an elite tactical squad including waterbender Daemin.

When ordered by city magistrates to detain Pavi and Nisha as dangerous "Cataclysm entities," Jae witnesses the purity of the girls' spirits and makes the pivotal decision to defect. Serving as the primary elder brother and military shield for the young girls, Jae balances air nomad philosophy with the harsh realities of survival in the ruins.`,
    personality: ['Tactical', 'Protective', 'Principled', 'Calm', 'Agile'],
    keyAbilities: [
      'High-Speed Glider Aerial Maneuvers',
      'Defensive Air Vortexes & Gale Barriers',
      'Platoon Command & Tactical Evacuation',
      'Silent Scouting & Reconnaissance'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Ward & Protected Ally',
        description: 'Guides Pavi in remaining calm under combat duress.'
      },
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Ward & Sparring Partner',
        description: 'Often tempers Nisha’s reckless aggression with strategic restraint.'
      },
      {
        targetId: 'daemin',
        targetName: 'Daemin',
        relation: 'Trusted Platoon Member',
        description: 'Loyal waterbender squad-mate who joined Jae in breaking ranks.'
      },
      {
        targetId: 'karthik',
        targetName: 'Karthik',
        relation: 'Former Commander',
        description: 'Shares mutual respect with Captain Karthik despite tactical disagreements.'
      }
    ],
    avatarStatus: 'Airbender Ally',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Defying arrest directives to secure the twins’ escape through the Lower Sluice',
      'Aerial dogfight over the Great Ravine using jury-rigged gliders',
      'Negotiating passage with nomadic wasteland caravans'
    ]
  },
  {
    id: 'karthik',
    name: 'Karthik',
    alias: 'Captain of the Ellora City Guard',
    imageUrl: "/imgs/characters/karthik.png",
    bending: 'Air',
    elementColor: 'from-blue-600 to-cyan-600 text-blue-400 border-blue-500/40',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    faction: 'Ellora High Command & City Defense',
    voiceActor: {
      name: 'Akshay Khanna',
      notableRole: 'Celebrated Indian film and dramatic voice actor',
    },
    age: '42 years old',
    homeHaven: 'Haven of Ellora (High Spire)',
    quote: 'I promised to keep her alive in a world that burns everything it doesn’t understand. I intend to keep that promise.',
    shortBio: 'Veteran Airbender commander and stoic guardian of Nisha. Karthik carries dark secrets regarding the origin of the Twin Avatars and the fall of the old world.',
    fullBio: `Captain Karthik is the commanding general of the City Guard in the Haven of Ellora. A master airbender with scars from decades of skirmishes against aberrant spirit creatures and wasteland raiders, Karthik has kept Nisha’s identity hidden in plain sight inside the garrison.

Karthik knows far more about the Cataclysm of 200 years ago than he reveals to the civilian council. He holds ancient scrolls from the Order of the White Lotus, which collapsed during the crisis. When the twins are exposed, Karthik works from the shadows to mislead city hounds and buy Jae and the girls precious time to reach the Haven of the North.`,
    personality: ['Stoic', 'Authoritative', 'Strategist', 'Burdened', 'Steadfast'],
    keyAbilities: [
      'Master Airbender Martial Arts',
      'Compressed Air Blasts & Shockwaves',
      'Fortress Defense Tactics',
      'Knowledge of Pre-Cataclysm Lore & White Lotus Relics'
    ],
    relationships: [
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Adoptive Ward & Protege',
        description: 'Raised Nisha with firm discipline and unspoken fatherly devotion.'
      },
      {
        targetId: 'jae',
        targetName: 'Jae',
        relation: 'Mentored Officer',
        description: 'Selected Jae for command because of his incorruptible moral compass.'
      },
      {
        targetId: 'agam',
        targetName: 'Agam',
        relation: 'Longtime Confidante',
        description: 'Shares covert intelligence regarding city unrest with Agam.'
      }
    ],
    avatarStatus: 'Guard Captain',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Concealing Nisha during the Council’s emergency purge inspection',
      'Buying time at the Haven Gates against the Elite Envoys',
      'Revealing the White Lotus cipher journal to Jae'
    ]
  },
  {
    id: 'daemin',
    name: 'Daemin',
    alias: 'Waterbender Vanguard',
    imageUrl: "/imgs/characters/daemin.png",
    bending: 'Water',
    elementColor: 'from-cyan-500 to-teal-700 text-cyan-400 border-cyan-500/40',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    faction: 'Haven of Ellora Bending Brigade',
    voiceActor: {
      name: 'Darren Barnet',
      notableRole: 'Star of Netflix\'s "Never Have I Ever", "Gran Turismo", & "Blue Eye Samurai"',
    },
    age: '20 years old',
    homeHaven: 'Haven of Ellora (Aqueduct District)',
    quote: 'Water finds a way through solid rock given enough time. We just have to make our own way.',
    shortBio: 'A skilled waterbender and stalwart member of Jae’s brigade. Daemin provides heavy defensive water shields and tactical support during the twins\' exodus.',
    fullBio: `Daemin was raised in the damp sub-levels of Ellora’s Aqueduct District, where scarce water reserves from deep underground aquifers are distributed to the populace. Joining the Bending Brigade to ensure water security for the lower wards, Daemin became Jae’s most trusted battle partner.

In combat, Daemin employs precise, high-pressure water whips and ice flash-freezing to disarm opponents without inflicting lethal injuries. When Jae decides to risk everything to escort Pavi and Nisha, Daemin does not hesitate to follow his captain into exile.`,
    personality: ['Dependable', 'Resourceful', 'Good-humored', 'Protective', 'Skilled'],
    keyAbilities: [
      'High-Pressure Water Cannonades',
      'Ice Partitions & Caltrops',
      'Subterranean Moisture Detection',
      'Aqueduct Navigation & Fluid Dynamics'
    ],
    relationships: [
      {
        targetId: 'jae',
        targetName: 'Jae',
        relation: 'Close Friend & Squad Commander',
        description: 'Unwavering battle brother to Jae through numerous defense campaigns.'
      },
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Protective Escort',
        description: 'Helps teach Pavi how water bending principles balance earth resistance.'
      }
    ],
    avatarStatus: 'Waterbender Platoon',
    firstAppearance: 'Episode 2: "Into the Storm"',
    keyMoments: [
      'Freezing the gate locks during the tactical retreat from Haven Ellora',
      'Securing freshwater reservoirs during the passage across the Salt Dunes'
    ]
  },
  {
    id: 'agam',
    name: 'Agam',
    alias: 'Matriarch of the Ellora Bazaar',
    imageUrl: "/imgs/characters/agam.jpg",
    bending: 'Non-Bender',
    elementColor: 'from-amber-700 to-yellow-600 text-amber-300 border-amber-600/40',
    badgeBg: 'bg-amber-600/10 text-amber-300 border-amber-600/20',
    faction: 'Ellora Market Guild & Haven Civilians',
    voiceActor: {
      name: 'Sakina Jaffrey',
      notableRole: 'Emmy-nominated actress ("House of Cards", "Snowpiercer", "The Blacklist")',
    },
    age: '61 years old',
    homeHaven: 'Haven of Ellora (Central Market)',
    quote: 'Children belong in schools and sunny courtyards, not hunted through poisoned wastes. Take the flatbreads and run.',
    shortBio: 'Warm-hearted and shrewd street vendor who runs a prominent food stall in Ellora. Agam is an indispensable underground informant and surrogate grandmother.',
    fullBio: `Agam has lived in the Haven of Ellora for over six decades, observing the shifting tides of fear and politics from her corner snack shop. To the city authorities, she is merely a talkative old woman selling spiced lentils and roasted flatbread; to the children and underground resistance, she is a vital lifeline.

Agam provided young Pavi with warm meals and sheltered her from harsh winter squalls. When the alarm sounds across Ellora declaring the emergence of the Avatar, Agam risks her livelihood to provide the runaway group with travel rations, disguise cloaks, and safe passage through the merchant cellars.`,
    personality: ['Warm', 'Astute', 'Courageous', 'Generous', 'Streetwise'],
    keyAbilities: [
      'Underground Smuggler Networks',
      'Herbal Healing & Survival Salves',
      'Deceptive Civilian Camouflage',
      'Information Brokerage across Haven Quarters'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Surrogate Grandmother',
        description: 'Provided warmth and refuge to Pavi throughout her lonely childhood.'
      },
      {
        targetId: 'karthik',
        targetName: 'Karthik',
        relation: 'Old Companion',
        description: 'Maintains quiet mutual respect and passes intelligence regarding street whispers.'
      }
    ],
    avatarStatus: 'Haven Elder',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Distracting the city inspectors with a staged market riot',
      'Passing Pavi the carved medallion bearing the ancient symbol of the four nations'
    ]
  },
  {
    id: 'zi',
    name: 'Zi',
    alias: 'The Desert Scout & Courier',
    imageUrl: "/imgs/characters/zi.jpg",
    bending: 'Non-Bender',
    elementColor: 'from-purple-600 to-violet-800 text-purple-300 border-purple-500/40',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    faction: 'Independent Haven Couriers',
    voiceActor: {
      name: 'Dianne Doan',
      notableRole: 'Star of Cinemax\'s "Warrior", "Agents of S.H.I.E.L.D.", & "Descendants"',
    },
    age: '26 years old',
    homeHaven: 'Wasteland Nomad (Inter-Haven Routes)',
    quote: 'The maps from the old world lie. The earth moved, the seas boiled, and only the cautious survive between the havens.',
    shortBio: 'A battle-hardened courier and guide who navigates the uncharted, spirit-infested wilderness separating the Seven Havens.',
    fullBio: `Zi is one of the rare few brave enough to venture outside the sealed walls of the Seven Havens. Armed with a modified steam-rigged crossbow, directional sand-skiffs, and an uncanny knowledge of mutated spirit paths, Zi connects the isolated human sanctuaries.

When Jae and the twins escape Ellora, they hire Zi to lead them across the Shattered Expanse toward the second haven. Her pragmatic skepticism often clashes with Pavi’s idealism, but Zi’s combat prowess and navigation instincts repeatedly save the group from annihilation.`,
    personality: ['Independent', 'Sharp-tongued', 'Pragmatic', 'Fearless', 'Observant'],
    keyAbilities: [
      'Wasteland Sand-Skiff Piloting',
      'Grappling Rig & Crossbow Marksmanship',
      'Spirit Anomaly Tracking',
      'Barter & Inter-Haven Diplomatic Savvy'
    ],
    relationships: [
      {
        targetId: 'jae',
        targetName: 'Jae',
        relation: 'Hired Navigator & Tactical Ally',
        description: 'Trades barbs over military formality while respecting Jae\'s combat reflex.'
      },
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Kindred Spirit',
        description: 'Finds Nisha\'s fierce attitude reminiscent of her own rebellious youth.'
      }
    ],
    avatarStatus: 'Wanderer Ally',
    firstAppearance: 'Episode 3: "The Order"',
    keyMoments: [
      'Rescuing the convoy from a sinking quicksand sinkhole',
      'Guiding the party through the Ghost Forest during the lunar alignment'
    ]
  },
  {
    id: 'geet-ruhi',
    name: 'Geet & Ruhi',
    alias: 'The Twin Cat-Monkeys',
    imageUrl: "/imgs/characters/geet-ruhi.jpg",
    bending: 'Non-Bender',
    elementColor: 'from-emerald-500 to-teal-700 text-emerald-400 border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    faction: 'Avatar Animal Companions',
    voiceActor: {
      name: 'Dee Bradley Baker',
      notableRole: 'Legendary voice of Appa, Momo, Perry the Platypus, and Star Wars Clones',
    },
    age: 'Juvenile Creatures',
    homeHaven: 'Wasteland Flora & Ruined Sanctuaries',
    quote: '*Chitter-purr and aerial tail flip*',
    shortBio: 'Twin feline-simian creatures bonded respectively to Pavi and Nisha, continuing the cherished Avatar tradition of faithful animal companions.',
    fullBio: `Continuing the iconic lineage of Appa and Momo (ATLA) and Naga and Pabu (TLOK), Geet and Ruhi are agile, inquisitive cat-monkeys indigenous to the overgrown ruins of the post-Cataclysm world. Geet is bonded to Pavi—sporting a lighter fawn coat, gentle demeanor, and an uncanny ability to sniff out subterranean gemstone vibrations.

Ruhi is bonded to Nisha—featuring darker tiger-striped fur, razor-sharp pounces, and a propensity for pilfering guards\' key-rings. Whenever the twin Avatars resonate emotionally, the two cat-monkeys coordinate playful acrobatics and sound alarm calls when spiritual disturbances loom nearby.`,
    personality: ['Playful', 'Vigilant', 'Mischievous', 'Loyal', 'Intuitive'],
    keyAbilities: [
      'High-Dexterity Canopy & Wall Scrambling',
      'Early Spirit Anomaly Detection',
      'Tool & Key Retrieval',
      'Thermal Burrowing during Freezing Nights'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Geet\'s Human Bond',
        description: 'Geet curls around Pavi\'s neck and comforts her during night tremors.'
      },
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Ruhi\'s Human Bond',
        description: 'Ruhi rides on Nisha\'s shoulder and mimics her battle stances.'
      }
    ],
    avatarStatus: 'Animal Guide',
    firstAppearance: 'Episode 1: "On the Horizon"',
    keyMoments: [
      'Snatching the guard patrol\'s gate whistle to distract the search squad',
      'Alerting the company to the subterranean spirit demon beneath the viaduct'
    ]
  },
  {
    id: 'spirit-entity',
    name: 'The Dark Entity (Shadow Beast)',
    alias: 'The Cataclysm Stalker',
    imageUrl: "/imgs/characters/spirit-entity.png",
    bending: 'Spirit',
    elementColor: 'from-violet-900 to-slate-900 text-violet-400 border-violet-700/50',
    badgeBg: 'bg-violet-950/60 text-violet-300 border-violet-800/40',
    faction: 'Corrupted Spirit Realm',
    voiceActor: {
      name: 'Vocal Design & FX (Dee Bradley Baker)',
      notableRole: 'Distorted Spirit Audio Engineering',
    },
    homeHaven: 'The Void Between Havens',
    quote: '*Resonant low-frequency harmonic drone that bends ambient shadows*',
    shortBio: 'A colossal shadow entity that hunts the Twin Avatars across the wastelands, thought by ancient scholars to be connected to the cataclysmic rupture of the Spirit Portals.',
    fullBio: `Known by wasteland tribes simply as "The Shadow of the Ruin," this terrifying entity is a shape-shifting coalesced mass of corrupted spiritual energy. Unlike natural spirits who inhabit sacred groves, this creature feeds on elemental instability and raw human fear.

Throughout Book 1, it pursues Pavi and Nisha with relentless precision. Fan theories and in-universe scholarly fragments hint that it may be a remnant of dark spiritual energy spawned during the catastrophic severing of the physical and spirit worlds 225 years prior.`,
    personality: ['Relentless', 'Predatory', 'Inscrutable', 'Ancient'],
    keyAbilities: [
      'Corrosive Shadow Tendrils',
      'Elemental Absorption & Nullification',
      'Spatial Phase-Shifting',
      'Inducing Hallucinatory Spirit Tremors'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Primary Target',
        description: 'Seeks to consume the nascent Avatar light within Pavi.'
      },
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Primary Target',
        description: 'Drawn to the explosive raw power radiated by Nisha.'
      }
    ],
    avatarStatus: 'Spirit Threat',
    firstAppearance: 'Episode 2: "Into the Storm"',
    keyMoments: [
      'Emerging from the radioactive violet mist in the ravine',
      'Nearly engulfing the caravan before repelled by synchronized twin bending'
    ]
  },
  {
    id: 'korra-legacy',
    name: 'Avatar Korra (Legacy)',
    alias: 'The Predecessor & The Cataclysm Mystery',
    imageUrl: "/imgs/characters/korra.jpg",
    bending: 'Avatar (Multi)',
    elementColor: 'from-blue-700 to-cyan-500 text-cyan-300 border-cyan-500/40',
    badgeBg: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
    faction: 'Historical Avatar Cycle',
    voiceActor: {
      name: 'Janet Varney (Legacy Voice Archive)',
      notableRole: 'Original voice of Korra ("The Legend of Korra")',
    },
    age: '225 Years Prior',
    homeHaven: 'Southern Water Tribe / Republic City (Historical)',
    quote: 'The Avatar’s duty is to bring balance, even when the world forgets what balance means.',
    shortBio: 'The Avatar who preceded the Cataclysm by over two centuries. What happened during the final days of Korra\'s era is the foundational mystery that haunts the Seven Havens.',
    fullBio: `Set 225 years after the era of *The Legend of Korra*, *Avatar: Seven Havens* constantly grapples with the historical legacy of Korra. In this future, the grand technological advances of Republic City have fallen into legendary myth following the "Great Cataclysm."

Humanity believes that the Avatar failed or actively unleashed the apocalypse that split the earth into seven fortified havens. Because Korra had previously re-opened the Spirit Portals and severed the old past-life connections before forging a new cycle with Raava, scholars wonder: Did Raava fracture during the Cataclysm? And why did the Avatar reincarnate as twins?`,
    personality: ['Legendary', 'Determined', 'Complex', 'Transformative'],
    keyAbilities: [
      'Full Mastery of the Four Elements',
      'Energybending Mastery',
      'Avatar State Manifestation',
      'Spirit Portal Opening'
    ],
    relationships: [
      {
        targetId: 'pavi',
        targetName: 'Pavi',
        relation: 'Reincarnation Successor',
        description: 'Pavi strives to understand the fragmented echoes left behind in the Spirit World.'
      },
      {
        targetId: 'nisha',
        targetName: 'Nisha',
        relation: 'Reincarnation Successor',
        description: 'Nisha channels the unyielding, headstrong battle spirit reminiscent of Korra.'
      }
    ],
    avatarStatus: 'Past Avatar',
    firstAppearance: 'Historical Prologue & Statues in Ruined Temples',
    keyMoments: [
      'Discovery of Korra\'s weathered stone relief in the Sunken Sanctuary',
      'The cryptic vision received by Pavi at the Tree of Echoes'
    ]
  }
];
