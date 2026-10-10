export type VerificationStatus =
  | 'official_confirmed' // Explicitly confirmed by official studio / Paramount+ press releases
  | 'episode_verified'   // Confirmed through broadcast episodes (October 9, 2026 premiere)
  | 'inferred'           // Supported by canonical logic but not explicitly named
  | 'fan_theory'         // Community speculation / fan interpretation (clearly labeled)
  | 'unverified';        // Pending review / unconfirmed

export interface CanonicalSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  sourceType: 'Official Press' | 'Broadcast Episode' | 'Production Showcase' | 'Cast Announcement';
  verifiedDate: string;
  officialExcerpt?: string;
}

export interface CanonicalVoiceActor {
  id: string;
  characterId: string;
  name: string;
  characterName: string;
  roleType: 'Main Cast' | 'Supporting Cast' | 'Creature Voice';
  bio: string;
  notableCredits: string[];
  imdbSearchQuery: string;
  status: 'Official Studio Announcement' | 'Paramount+ Cast Press';
  sourceId: string;
}

export interface CanonicalEpisode {
  id: string; // e.g. "s1e01", "s1e02", "s1e03", or franchise "atla-s1e01"
  series: 'SEVEN_HAVENS' | 'ATLA' | 'TLOK';
  seriesTitle: string;
  eraLabel: string;
  seasonBook: string;
  episodeNumber: number;
  episodeCode: string;
  title: string;
  airDate: string;
  status: 'Broadcast Canon' | 'Classic Canon' | 'Modern Canon' | 'In Production';
  rating: string;
  imdbRating?: string;
  synopsis: string;
  thumbnailUrl: string;
  streamPlatform: string;
  streamUrl: string;
  animationStudio: string;
  sourceId: string;
}

export interface CanonicalAppearance {
  id: string;
  characterId: string;
  episodeId: string;
  appearanceType: 'Major Protagonist Focus' | 'Supporting Role' | 'Cameo / Vision' | 'Mentioned in Dialogue';
  verificationStatus: VerificationStatus;
  keyEvents: string;
  sourceId: string;
}

export interface CanonicalRelationship {
  id: string;
  sourceCharacterId: string;
  targetCharacterId: string;
  relationType: 'twin_avatar' | 'protector' | 'guardian_mentor' | 'spirit_guide' | 'squad_brother' | 'haven_elder' | 'antagonist';
  label: string;
  details: string;
  isCanon: boolean;
  verificationStatus: VerificationStatus;
  episodeContextId?: string;
  sourceId: string;
  verifiedDate: string;
}

export interface CanonicalCharacter {
  id: string; // Stable slug (pavi, nisha, jae, karthik, daemin, agam, zi, geet-ruhi, spirit-entity, aang, korra)
  name: string;
  alias: string;
  imageUrl: string;
  bending: 'Earth' | 'Air' | 'Water' | 'Fire' | 'Non-Bender' | 'Spirit' | 'Avatar (Multi)';
  element: string;
  elementColor: string;
  badgeBg: string;
  faction: string;
  voiceActorId: string;
  animalCompanion?: string;
  age?: string;
  homeHaven: string;
  quote: string;
  shortBio: string;
  fullBio: string;
  personality: string[];
  confirmedAbilities: string[];
  speculatedAbilities: string[];
  canonStatus: VerificationStatus;
  avatarStatus: 'Active Earth Avatar' | 'Twin Avatar' | 'Airbender Ally' | 'Guard Captain' | 'Waterbender Platoon' | 'Haven Elder' | 'Wanderer Ally' | 'Animal Guide' | 'Spirit Threat' | 'Past Avatar';
  firstAppearanceEpisodeId: string;
  keyMoments: string[];
  seriesEra: 'Seven Havens' | 'The Last Airbender' | 'The Legend of Korra';
  sourceId: string;
}
