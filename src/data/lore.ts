export interface LoreEntry {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  keyHighlights: string[];
}

export const LORE_ENTRIES: LoreEntry[] = [
  {
    id: 'the-cataclysm',
    title: 'The Cataclysm',
    subtitle: 'The Apocalypse That Ended the Four Nations Era',
    summary: 'Occurring approximately two centuries after Avatar Korra, an unprecedented cosmic rupture collapsed the physical biosphere and spirit boundaries.',
    content: [
      'For over a millennium, the Avatar preserved harmony between humans and spirits, water, earth, fire, and air. However, approximately two centuries after the reign of Avatar Korra, an apocalyptic event known across surviving oral history as "The Cataclysm" decimated the globe.',
      'According to fragmentary archives, the spiritual portals opened during Korra’s era experienced catastrophic harmonic destabilization. The earth fractured, coastlines sank, and massive tracts of habitable continents turned into irradiated, spirit-scorched badlands.',
      'In the ashes of this collapse, civilization collapsed back into isolated pockets of survival, and the memory of the Avatar transformed from celebrated protector into a cursed figure held responsible for humanity’s downfall.'
    ],
    keyHighlights: [
      'Occurred roughly 200 years prior to the events of Seven Havens',
      'Severed the global connectivity established during the Republic City era',
      'Resulted in the formation of uninhabitable spirit badlands separating humanity'
    ]
  },
  {
    id: 'the-seven-havens',
    title: 'The Seven Havens',
    subtitle: 'Humanity\'s Last Fortified Sanctuaries',
    summary: 'With 90% of the Earth\'s surface inhospitable, surviving populations took refuge inside seven massive, isolated fortified strongholds.',
    content: [
      'The Seven Havens represent humanity’s desperate adaptation to an inhospitable planet. Built upon ancient geographical anomalies and subterranean aquifers, each Haven operates as an independent, high-walled city-state.',
      'Haven of Ellora (Haven One): Built into a vast sandstone amphitheater, relying on deep waterworks and guarded by the elite Bending Brigade under Captain Karthik.',
      'Haven of the Biodome (Haven Two): A technological geodesic refuge powered by geothermal steam generators.',
      'The remaining five havens span tundra fortresses, coastal sea-spires, and subterranean cavern networks, each governed by isolationist councils terrified of outside contact.'
    ],
    keyHighlights: [
      'Seven autonomous fortified sanctuaries across the globe',
      'Travel between havens is nearly impossible without skilled wasteland couriers like Zi',
      'Governed by councils strictly policing bending manifestations and spirit incursions'
    ]
  },
  {
    id: 'the-avatar-stigma',
    title: 'The Avatar Stigma',
    subtitle: 'From Revered Peacekeeper to Feared Destroyer',
    summary: 'Why humanity in 2026 hunts the Avatar: the tragic inversion of the Avatar mythos in Seven Havens.',
    content: [
      'In previous generations, the discovery of a new Avatar brought global celebration, pilgrimages from the White Lotus, and honor to the avatar’s home village. In *Seven Havens*, the discovery of an Avatar is treated as a five-alarm existential catastrophe.',
      'Widespread doctrine across the Havens teaches that an individual wielding all four elements inherently destabilizes the planetary balance, citing the Cataclysm as historical proof.',
      'Because of this pervasive dogma, young Pavi and Nisha must hide their abilities from neighbors, friends, and city magistrates who view their very existence as an omen of total annihilation.'
    ],
    keyHighlights: [
      'The Avatar is blamed for triggering the global Cataclysm',
      'Bounty envoys and city magistrates actively hunt elemental anomalies',
      'The twin sisters must redeem the sacred title while running for their lives'
    ]
  },
  {
    id: 'twin-avatars-mystery',
    title: 'The Twin Avatars Mystery',
    subtitle: 'Breaking the Ancient Cycle of Raava',
    summary: 'For the first time in 10,000 years of franchise lore, two living Avatars walk the Earth at the same time.',
    content: [
      'From Wan to Korra, the Avatar Spirit (Raava) has always reincarnated into a single human soul upon the physical death of the predecessor.',
      'Pavi and Nisha are identical twins born at the exact same astrological moment. Somehow, the Avatar mantle bifurcated across both sisters.',
      'Scholars and spirits speculate whether Raava herself split, or whether the soul of the Avatar split into complementary halves: one representing grounding, earth, and spiritual intuition (Pavi), the other embodying fire, kinetic force, and offensive combat (Nisha).'
    ],
    keyHighlights: [
      'First twin Avatars in franchise history',
      'Pavi and Nisha share a psychic elemental resonance and synchronized combat stances',
      'Unlocks unprecedented cooperative bending maneuvers never before seen in the Avatar universe'
    ]
  }
];
