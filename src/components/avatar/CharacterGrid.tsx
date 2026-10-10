import { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, Filter, ArrowRight, Shield, Sparkles, UserCheck, Flame, Droplets, Wind, Mountain, Ghost } from 'lucide-react';
import { CHARACTERS, Character } from '@/data/characters';

export function CharacterGrid() {
  const [selectedBending, setSelectedBending] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const bendingFilters = [
    { label: 'All', icon: Sparkles },
    { label: 'Earth', icon: Mountain },
    { label: 'Air', icon: Wind },
    { label: 'Water', icon: Droplets },
    { label: 'Non-Bender', icon: Shield },
    { label: 'Spirit', icon: Ghost },
  ];

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter((char) => {
      // Element filter
      const matchesBending =
        selectedBending === 'All' ||
        char.bending === selectedBending ||
        (selectedBending === 'Earth' && char.bending === 'Avatar (Multi)');

      // Search query filter
      const matchesQuery =
        !searchQuery.trim() ||
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.voiceActor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.faction.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesBending && matchesQuery;
    });
  }, [selectedBending, searchQuery]);

  return (
    <section id="characters" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3">
            <Filter className="h-3.5 w-3.5" />
            <span>Official Character Gallery & Roster</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Avatar: Seven Havens Characters Database &amp; Roster
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Official profiles, bending affinities, voice actors, and backstories for all Avatar: Seven Havens characters across the Seven Havens.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10">
          {/* Element Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-start">
            {bendingFilters.map((filter) => {
              const Icon = filter.icon;
              const isActive = selectedBending === filter.label;
              return (
                <button
                  key={filter.label}
                  type="button"
                  onClick={() => setSelectedBending(filter.label)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30 font-semibold scale-105'
                      : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 opacity-80" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by character or actor..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg text-xs sm:text-sm bg-muted/50 border border-border focus:outline-none focus:ring-1 focus:ring-amber-500 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Character Card Grid with Artwork */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCharacters.map((char) => (
            <div
              key={char.id}
              className="rounded-2xl border border-border/80 bg-card hover:border-amber-500/50 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden"
            >
              <div>
                {/* Character Anime Portrait Header */}
                <Link
                  to="/characters/$slug"
                  params={{ slug: char.id }}
                  className="block relative aspect-[4/3] w-full overflow-hidden bg-muted/30"
                >
                  <img
                    src={char.imageUrl}
                    alt={`${char.name} - ${char.alias}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Atmospheric overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Top Bending Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-md ${char.badgeBg}`}>
                      {char.bending}
                    </span>
                  </div>

                  {/* Top Haven Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/60 text-white/90 backdrop-blur-md">
                      {char.homeHaven.split('(')[0]}
                    </span>
                  </div>

                  {/* Bottom Portrait Name Strip */}
                  <div className="absolute bottom-2 left-4 right-4">
                    <h3 className="font-serif text-xl font-bold text-foreground drop-shadow group-hover:text-amber-500 transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-xs text-amber-500/90 font-medium drop-shadow">
                      {char.alias}
                    </p>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 pt-3">
                  <div className="text-[10px] font-semibold text-amber-500/90 tracking-wide uppercase mb-2">
                    Official Avatar: Seven Havens characters entry
                  </div>

                  {/* Voice Actor Credit */}
                  <div className="flex items-center gap-1.5 text-xs text-foreground/90 mb-3 bg-muted/50 px-2.5 py-1.5 rounded-lg border border-border/40">
                    <UserCheck className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">
                      Voiced by <strong className="text-foreground">{char.voiceActor.name}</strong>
                    </span>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {char.shortBio}
                  </p>

                  {/* Ability Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {char.keyAbilities.slice(0, 3).map((ability) => (
                      <span
                        key={ability}
                        className="text-[10px] px-2 py-0.5 rounded bg-muted/70 text-muted-foreground font-medium"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-muted-foreground font-mono">
                  {char.firstAppearance.split(':')[0]}
                </span>
                <Link
                  to="/characters/$slug"
                  params={{ slug: char.id }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Character Profile</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-12 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-3">
              No characters found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedBending('All');
              }}
              className="text-xs font-semibold text-amber-500 underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
