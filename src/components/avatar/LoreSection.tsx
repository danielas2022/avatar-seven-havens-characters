import { useState } from 'react';
import { BookOpen, AlertTriangle, Shield, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { LORE_ENTRIES } from '@/data/lore';

export function LoreSection() {
  const [activeLoreId, setActiveLoreId] = useState<string>(LORE_ENTRIES[0].id);

  const activeEntry = LORE_ENTRIES.find((entry) => entry.id === activeLoreId) || LORE_ENTRIES[0];

  return (
    <section id="lore" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Post-Cataclysm Worldbuilding</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            The Lore of the Seven Havens
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Set 225 years after <em>The Legend of Korra</em>, explore the historical apocalypse, the isolated city-states, and the tragic inversion of the Avatar legend.
          </p>
        </div>

        {/* Tabbed Lore Reader */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Sidebar Tabs */}
          <div className="space-y-2">
            {LORE_ENTRIES.map((entry) => {
              const isActive = entry.id === activeLoreId;
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveLoreId(entry.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isActive
                      ? 'border-amber-500/50 bg-amber-500/10 text-foreground font-semibold shadow-sm'
                      : 'border-border/60 bg-card hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="text-sm font-serif font-bold text-foreground mb-1">
                    {entry.title}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 font-normal">
                    {entry.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Reading Pane */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-md">
            <div className="mb-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500">
                Avatar Archives &bull; 225 AF (After Fall)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1 mb-2">
                {activeEntry.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground/90">
                {activeEntry.subtitle}
              </p>
            </div>

            {/* Summary Callout */}
            <div className="p-4 rounded-xl bg-muted/40 border-l-4 border-amber-500 mb-6 text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {activeEntry.summary}
            </div>

            {/* Detailed Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              {activeEntry.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Highlights Bulleted */}
            <div className="pt-4 border-t border-border">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                <span>Canon Highlights</span>
              </h4>
              <ul className="space-y-1.5">
                {activeEntry.keyHighlights.map((highlight, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
