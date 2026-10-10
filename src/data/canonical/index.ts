export * from './types';
export * from './sources';
export * from './cast';
export * from './episodes';
export * from './appearances';
export * from './relationships';
export * from './characters';

import { CANONICAL_SOURCES } from './sources';
import { CANONICAL_VOICE_CAST } from './cast';
import { CANONICAL_EPISODES } from './episodes';
import { CANONICAL_APPEARANCES } from './appearances';
import { CANONICAL_RELATIONSHIPS } from './relationships';
import { CANONICAL_CHARACTERS } from './characters';
import {
  CanonicalCharacter,
  CanonicalEpisode,
  CanonicalAppearance,
  CanonicalRelationship,
  CanonicalVoiceActor,
  CanonicalSource,
} from './types';

// =========================================================================
// HELPER QUERY API (Cross-Entity Relational Lookups)
// =========================================================================

export function getCanonicalCharacter(id: string): CanonicalCharacter | undefined {
  return CANONICAL_CHARACTERS.find((c) => c.id === id);
}

export function getCanonicalEpisode(id: string): CanonicalEpisode | undefined {
  return CANONICAL_EPISODES.find((e) => e.id === id);
}

export function getCanonicalSource(id: string): CanonicalSource | undefined {
  return CANONICAL_SOURCES.find((s) => s.id === id);
}

export function getCanonicalVoiceActor(id: string): CanonicalVoiceActor | undefined {
  return CANONICAL_VOICE_CAST.find((v) => v.id === id);
}

/**
 * Returns all verified appearances for a given character, joined with episode metadata.
 */
export function getCharacterAppearances(characterId: string): Array<
  CanonicalAppearance & {
    episode: CanonicalEpisode | undefined;
    source: CanonicalSource | undefined;
  }
> {
  return CANONICAL_APPEARANCES.filter((app) => app.characterId === characterId).map((app) => ({
    ...app,
    episode: getCanonicalEpisode(app.episodeId),
    source: getCanonicalSource(app.sourceId),
  }));
}

/**
 * Returns all confirmed characters appearing in a given episode, joined with character metadata.
 */
export function getEpisodeAppearances(episodeId: string): Array<
  CanonicalAppearance & {
    character: CanonicalCharacter | undefined;
    voiceActor: CanonicalVoiceActor | undefined;
    source: CanonicalSource | undefined;
  }
> {
  return CANONICAL_APPEARANCES.filter((app) => app.episodeId === episodeId).map((app) => {
    const character = getCanonicalCharacter(app.characterId);
    return {
      ...app,
      character,
      voiceActor: character ? getCanonicalVoiceActor(character.voiceActorId) : undefined,
      source: getCanonicalSource(app.sourceId),
    };
  });
}

/**
 * Returns all relationships for a given character (as source or target), joined with connected character.
 */
export function getCharacterRelationships(characterId: string): Array<
  CanonicalRelationship & {
    otherCharacter: CanonicalCharacter | undefined;
    episodeContext: CanonicalEpisode | undefined;
    source: CanonicalSource | undefined;
  }
> {
  return CANONICAL_RELATIONSHIPS.filter(
    (rel) => rel.sourceCharacterId === characterId || rel.targetCharacterId === characterId
  ).map((rel) => {
    const otherId = rel.sourceCharacterId === characterId ? rel.targetCharacterId : rel.sourceCharacterId;
    return {
      ...rel,
      otherCharacter: getCanonicalCharacter(otherId),
      episodeContext: rel.episodeContextId ? getCanonicalEpisode(rel.episodeContextId) : undefined,
      source: getCanonicalSource(rel.sourceId),
    };
  });
}

/**
 * Comprehensive Character Dossier Aggregator
 */
export function getCharacterWithDetails(characterId: string) {
  const character = getCanonicalCharacter(characterId);
  if (!character) return undefined;

  const voiceActor = getCanonicalVoiceActor(character.voiceActorId);
  const appearances = getCharacterAppearances(characterId);
  const relationships = getCharacterRelationships(characterId);
  const source = getCanonicalSource(character.sourceId);

  return {
    ...character,
    voiceActor,
    appearances,
    relationships,
    source,
  };
}

/**
 * Comprehensive Episode Guide Aggregator
 */
export function getEpisodeWithDetails(episodeId: string) {
  const episode = getCanonicalEpisode(episodeId);
  if (!episode) return undefined;

  const characters = getEpisodeAppearances(episodeId);
  const source = getCanonicalSource(episode.sourceId);

  return {
    ...episode,
    characters,
    source,
  };
}
