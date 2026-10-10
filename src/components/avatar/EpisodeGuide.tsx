import { useState } from 'react';
import { Tv, Calendar, CheckCircle2, Clock, Sparkles, ExternalLink, Play, Bell } from 'lucide-react';
import { BOOK_1_EPISODES } from '@/data/episodes';

export function EpisodeGuide() {
  const [filter, setFilter] = useState<'All' | 'Aired' | 'Upcoming'>('All');

  const filteredEpisodes = BOOK_1_EPISODES.filter((ep) => {
    if (filter === 'All') return true;
    return ep.status === filter;
  });

  const airedCount = BOOK_1_EPISODES.filter((ep) => ep.status === 'Aired').length;
  const upcomingCount = BOOK_1_EPISODES.filter((ep) => ep.status === 'Upcoming').length;

  return (
    <section id="episodes" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Tv className="h-3.5 w-3.5" />
            <span>Book 1: Havens &bull; 13 Episodes &bull; Paramount+</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Avatar: Seven Havens Characters Episode Guide &amp; Air Schedule
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Continuously updated broadcast calendar, synopsis breakdowns, and key debuts for all official Avatar: Seven Havens characters.
          </p>
        </div>

        {/* Live Broadcast Status Banner */}
        <div className="rounded-2xl border-2 border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-card to-emerald-950/30 p-5 sm:p-6 mb-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0 text-sky-400">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  CURRENT BROADCAST STATUS
                </span>
                <span className="text-xs text-muted-foreground">
                  Premiered Oct 9, 2026
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                Episodes 1&ndash;3 Streaming Now &bull; Ep 4 &ldquo;The Ruined Viaduct&rdquo; Premieres Oct 16
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {airedCount} episodes released &bull; {upcomingCount} episodes remaining in Season 1 &bull; Airs weekly on Fridays
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://www.paramountplus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Watch on Paramount+</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(['All', 'Aired', 'Upcoming'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === tab
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {tab === 'All' ? `All (${BOOK_1_EPISODES.length})` : tab === 'Aired' ? `Aired (${airedCount})` : `Upcoming (${upcomingCount})`}
            </button>
          ))}
        </div>

        {/* Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEpisodes.map((ep) => {
            const isAired = ep.status === 'Aired';
            return (
              <div
                key={ep.episodeNumber}
                className={`rounded-2xl border bg-card p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                  isAired
                    ? 'border-border/80 hover:border-emerald-500/50'
                    : 'border-border/60 hover:border-sky-500/40 opacity-90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      Episode {ep.episodeNumber < 10 ? `0${ep.episodeNumber}` : ep.episodeNumber}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isAired
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : 'bg-muted text-muted-foreground border-border'
                      }`}
                    >
                      {isAired ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      <span>{ep.status}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-foreground mb-1.5">
                    &ldquo;{ep.title}&rdquo;
                  </h3>

                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    <span>{ep.airDate}</span>
                    <span className="text-border">&bull;</span>
                    <span>24 min</span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {ep.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/80">
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-wide block mb-1.5">
                    Avatar: Seven Havens characters featured:
                  </span>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {ep.keyCharacters.map((char) => (
                      <span
                        key={char}
                        className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium"
                      >
                        {char}
                      </span>
                    ))}
                  </div>

                  {isAired ? (
                    <a
                      href="https://www.paramountplus.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold bg-emerald-600/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/25 transition-colors"
                    >
                      <Play className="h-3 w-3 fill-emerald-400" />
                      <span>Stream Now (Paramount+)</span>
                    </a>
                  ) : (
                    <div className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold bg-muted text-muted-foreground border border-border/50">
                      <Bell className="h-3 w-3" />
                      <span>Airing {ep.airDate}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
