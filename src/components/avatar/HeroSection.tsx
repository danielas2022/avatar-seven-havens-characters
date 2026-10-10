import { Sparkles, Compass, Users, GitFork, Film, Tv, ShieldCheck, Flame } from 'lucide-react';

interface HeroSectionProps {
  onSearchChange?: (val: string) => void;
  searchTerm?: string;
}

export function HeroSection({ onSearchChange, searchTerm }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border/40">
      {/* Elemental Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30 mb-6 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 animate-spin" />
          <span>Paramount+ Premiere &bull; October 9, 2026</span>
          <span className="text-muted-foreground/60">&bull;</span>
          <span className="text-foreground">Avatar Studios Official Series</span>
        </div>

        {/* Main H1 Headline for SEO */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400 bg-clip-text text-transparent">
            Avatar: Seven Havens
          </span>{' '}
          Characters Guide & Wiki
        </h1>

        {/* High-Intent SEO Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          The definitive archive for Paramount+'s post-cataclysmic animated saga. Discover profiles for{' '}
          <strong className="text-foreground">Pavi</strong>, <strong className="text-foreground">Nisha</strong>,{' '}
          <strong className="text-foreground">Jae</strong>, full voice actors, interactive relationship maps, and lore 225 years after <em>The Legend of Korra</em>.
        </p>

        {/* Hero Quick Metrics Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-3.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Users className="h-3.5 w-3.5" />
              <span>Characters</span>
            </div>
            <div className="text-lg font-bold text-foreground">10+ Profiles</div>
            <p className="text-xs text-muted-foreground">Detailed stats & bios</p>
          </div>

          <div className="p-3.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Flame className="h-3.5 w-3.5" />
              <span>Twin Avatars</span>
            </div>
            <div className="text-lg font-bold text-foreground">Pavi & Nisha</div>
            <p className="text-xs text-muted-foreground">Historic dual cycle</p>
          </div>

          <div className="p-3.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <GitFork className="h-3.5 w-3.5" />
              <span>Network</span>
            </div>
            <div className="text-lg font-bold text-foreground">Interactive Map</div>
            <p className="text-xs text-muted-foreground">Factions & alliances</p>
          </div>

          <div className="p-3.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Tv className="h-3.5 w-3.5" />
              <span>Episodes</span>
            </div>
            <div className="text-lg font-bold text-foreground">Book 1: 13 Eps</div>
            <p className="text-xs text-muted-foreground">Air dates & synopsis</p>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#characters"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02]"
          >
            <Compass className="h-4 w-4" />
            <span>Browse Character Roster</span>
          </a>

          <a
            href="/relationship-chart"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-border bg-card/80 hover:bg-muted text-foreground transition-all hover:scale-[1.02]"
          >
            <GitFork className="h-4 w-4 text-sky-400" />
            <span>Interactive Relationship Chart</span>
          </a>

          <a
            href="#trailer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Film className="h-4 w-4 text-amber-500" />
            <span>Watch Trailer</span>
          </a>
        </div>
      </div>
    </section>
  );
}
