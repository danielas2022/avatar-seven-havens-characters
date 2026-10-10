import { useState, useMemo } from 'react';
import { Tv, Calendar, Sparkles, ExternalLink, Play, Film, Award, CheckCircle2, Clapperboard, Star } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { FRANCHISE_EPISODES, SeriesEra, Episode } from '@/data/episodes';
import { CANONICAL_CHARACTERS } from '@/data/canonical';

export function EpisodeGuide() {
  const [selectedEra, setSelectedEra] = useState<SeriesEra>('ALL');

  const filteredEpisodes = useMemo(() => {
    if (selectedEra === 'ALL') return FRANCHISE_EPISODES;
    return FRANCHISE_EPISODES.filter((ep) => ep.series === selectedEra);
  }, [selectedEra]);

  const atlaCount = FRANCHISE_EPISODES.filter((ep) => ep.series === 'ATLA').length;
  const tlokCount = FRANCHISE_EPISODES.filter((ep) => ep.series === 'TLOK').length;
  const sevenHavensCount = FRANCHISE_EPISODES.filter((ep) => ep.series === 'SEVEN_HAVENS').length;

  return (
    <section id="episodes" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3 shadow-sm">
            <Film className="h-3.5 w-3.5" />
            <span>Classic Canon &bull; Modern Era &bull; Seven Havens Next-Gen</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            Avatar Franchise Episode Guide &amp; Seven Havens Roadmap
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            The comprehensive episodic archive across all animated generations: from the 61 legendary chapters of <em>Avatar: The Last Airbender</em> and 52 episodes of <em>The Legend of Korra</em> to the brand-new <em>Avatar: Seven Havens</em> production arcs.
          </p>
        </div>

        {/* Authentic Franchise Status Banner */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-card to-sky-950/30 p-5 sm:p-6 mb-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
              <Clapperboard className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  OFFICIAL ANIMATED CANON
                </span>
                <span className="text-xs text-muted-foreground">
                  Avatar Studios &bull; Nickelodeon &bull; Paramount+
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                Classic Legends (ATLA &amp; Korra) Streaming Now &bull; Seven Havens in Active Production
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Stream 113 remastered classic episodes on Paramount+ while following the official Avatar Studios animation roadmap for all brand-new Avatar: Seven Havens characters.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://www.paramountplus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-lg shadow-orange-600/20 transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Stream Classic Episodes</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
            <a
              href="#characters"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-foreground border border-border transition-all"
            >
              <Award className="h-4 w-4 text-amber-400" />
              <span>Explore Cast Roster</span>
            </a>
          </div>
        </div>

        {/* Franchise Era Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedEra('ALL')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
              selectedEra === 'ALL'
                ? 'bg-amber-600 text-white shadow-md font-bold'
                : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            All Series &amp; Arcs ({FRANCHISE_EPISODES.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedEra('ATLA')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
              selectedEra === 'ATLA'
                ? 'bg-amber-600 text-white shadow-md font-bold'
                : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            Avatar: The Last Airbender (Classic • {atlaCount})
          </button>
          <button
            type="button"
            onClick={() => setSelectedEra('TLOK')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
              selectedEra === 'TLOK'
                ? 'bg-sky-600 text-white shadow-md font-bold'
                : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            The Legend of Korra (Classic • {tlokCount})
          </button>
          <button
            type="button"
            onClick={() => setSelectedEra('SEVEN_HAVENS')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
              selectedEra === 'SEVEN_HAVENS'
                ? 'bg-emerald-600 text-white shadow-md font-bold'
                : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            Avatar: Seven Havens (New Roadmap • {sevenHavensCount})
          </button>
        </div>

        {/* Visual Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep) => {
            const isClassicATLA = ep.series === 'ATLA';
            const isKorra = ep.series === 'TLOK';
            const isSevenHavens = ep.series === 'SEVEN_HAVENS';

            return (
              <div
                key={ep.id}
                className="rounded-2xl border border-border/80 bg-card hover:border-amber-500/60 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden group"
              >
                <div>
                  {/* Episode Screenshot / Artwork Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <img
                      src={ep.thumbnailUrl}
                      alt={`${ep.title} animation still`}
                      width={640}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                    {/* Series & Era Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-md shadow-md ${
                          isClassicATLA
                            ? 'bg-amber-600/90 text-white'
                            : isKorra
                            ? 'bg-sky-600/90 text-white'
                            : 'bg-emerald-600/90 text-white'
                        }`}
                      >
                        {ep.seriesTitle}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-zinc-300 backdrop-blur-md border border-white/10">
                        {ep.seasonBook}
                      </span>
                    </div>

                    {/* Rating / Production Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/75 text-amber-300 backdrop-blur-md border border-amber-500/30 flex items-center gap-1 shadow-md">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span>{ep.rating}</span>
                      </span>
                    </div>

                    {/* Bottom Screenshot Bar: Episode Code & Title Preview */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                      <span className="font-mono font-bold text-amber-400 drop-shadow">
                        {ep.episodeCode}
                      </span>
                      <span className="text-[11px] text-zinc-400 drop-shadow flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{ep.airDate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-amber-400 transition-colors">
                      &ldquo;{ep.title}&rdquo;
                    </h3>

                    {/* Production / Studio Credit */}
                    <div className="text-[11px] text-muted-foreground font-medium mb-3 flex items-center gap-1.5">
                      <Clapperboard className="h-3 w-3 text-amber-500" />
                      <span>{ep.animationStudio}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {ep.synopsis}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Key Characters & Streaming Link */}
                <div className="px-5 pb-5 pt-3 border-t border-border/80 bg-muted/20">
                  <div className="mb-3">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Avatar: Seven Havens characters &amp; legends featured:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ep.characterIds && ep.characterIds.length > 0 ? (
                        ep.characterIds.map((charId) => {
                          const character = CANONICAL_CHARACTERS.find((c) => c.id === charId);
                          if (!character) {
                            return (
                              <span
                                key={charId}
                                className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium border border-border/60"
                              >
                                {charId}
                              </span>
                            );
                          }
                          return (
                            <Link
                              key={charId}
                              to="/characters/$slug"
                              params={{ slug: charId }}
                              className="inline-flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full bg-card hover:bg-muted text-foreground hover:text-amber-400 font-medium border border-border/80 shadow-xs transition-colors group/char"
                            >
                              <img
                                src={character.imageUrl}
                                alt={character.name}
                                width={14}
                                height={14}
                                loading="lazy"
                                decoding="async"
                                className="h-3.5 w-3.5 rounded-full object-cover object-top shrink-0 border border-border/60"
                              />
                              <span>{character.name}</span>
                            </Link>
                          );
                        })
                      ) : (
                        ep.keyCharacters.map((char) => (
                          <span
                            key={char}
                            className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium border border-border/60"
                          >
                            {char}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {isSevenHavens ? (
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Avatar Studios Active Development</span>
                      </span>
                      <a
                        href="#characters"
                        className="text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center gap-0.5 transition-colors"
                      >
                        <span>View Profiles</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={ep.streamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 transition-all hover:border-amber-500/60"
                    >
                      <Play className="h-3.5 w-3.5 fill-amber-400" />
                      <span>Watch Episode on {ep.streamPlatform}</span>
                      <ExternalLink className="h-3 w-3 opacity-70 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Franchise Note */}
        <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-border/60 text-center max-w-4xl mx-auto">
          <h4 className="font-serif font-bold text-base text-foreground mb-2">
            The Avatar Television Universe Timeline &amp; Continuity
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            The Avatar cycle spans from the ancient era of Avatar Wan, through Avatar Aang's Hundred Year War victory in <em>The Last Airbender</em>, to Avatar Korra's spiritual reconciliation, culminating 225 years later in the post-cataclysm journey of official <strong className="text-foreground">Avatar: Seven Havens characters</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-amber-500">
            <span>Avatar Aang Era (99 AG)</span>
            <span className="text-border">&bull;</span>
            <span>Avatar Korra Era (170 AG)</span>
            <span className="text-border">&bull;</span>
            <span className="text-emerald-400">Seven Havens Era (395 AG &bull; Post-Cataclysm)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
