import { useState } from 'react';
import { Tv, Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BOOK_1_EPISODES, Episode } from '@/data/episodes';

export function EpisodeGuide() {
  const [filter, setFilter] = useState<'All' | 'Aired' | 'Upcoming'>('All');

  const filteredEpisodes = BOOK_1_EPISODES.filter((ep) => {
    if (filter === 'All') return true;
    return ep.status === filter;
  });

  return (
    <section id="episodes" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Tv className="h-3.5 w-3.5" />
            <span>Book 1: Havens &bull; 13 Episodes</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Avatar: Seven Havens Episode Tracker
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Track air dates, synopses, and character appearances as Pavi and Nisha journey across the Seven Havens. Premiered October 9, 2026 on Paramount+.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center p-1 rounded-xl bg-muted/60 border border-border mt-6">
            {(['All', 'Aired', 'Upcoming'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1 text-xs font-medium rounded-lg transition-all ${
                  filter === tab
                    ? 'bg-sky-600 text-white shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filteredEpisodes.map((ep) => {
            const isAired = ep.status === 'Aired';
            return (
              <div
                key={ep.episodeNumber}
                className="rounded-xl border border-border/80 bg-card p-5 flex flex-col justify-between hover:border-sky-500/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      Episode {ep.episodeNumber}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isAired
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-muted text-muted-foreground border-border'
                      }`}
                    >
                      {isAired ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      <span>{ep.status}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    &ldquo;{ep.title}&rdquo;
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 text-sky-400" />
                    <span>{ep.airDate}</span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {ep.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider block mb-1.5">
                    Featured Characters:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ep.keyCharacters.map((char) => (
                      <span
                        key={char}
                        className="text-[10px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground font-medium"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
