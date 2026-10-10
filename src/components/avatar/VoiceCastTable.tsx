import { useState } from 'react';
import { Film, User, Search, Sparkles, Star } from 'lucide-react';
import { VOICE_CAST, CastMember } from '@/data/cast';
import { CHARACTERS } from '@/data/characters';

export function VoiceCastTable() {
  const [roleFilter, setRoleFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCast = VOICE_CAST.filter((member) => {
    const matchesRole = roleFilter === 'All' || member.roleType === roleFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.character.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.notableCredits.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesSearch;
  });

  return (
    <section id="voice-cast" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Film className="h-3.5 w-3.5" />
            <span>Voice Actors & Production Crew</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Voice Cast of Avatar: Seven Havens Characters
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            From Dee Bradley Baker to Saheli Khan, meet the talented actors voicing all official Avatar: Seven Havens characters.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-8">
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Main Cast', 'Supporting Cast', 'Creature Voice', 'Creator & Showrunner'].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setRoleFilter(role)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  roleFilter === role
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cast of Avatar: Seven Havens characters..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg text-xs sm:text-sm bg-muted/50 border border-border focus:outline-none focus:ring-1 focus:ring-emerald-500 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Cast Cards / Table Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCast.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-border/80 bg-card p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {CHARACTERS.find((c) => c.id === member.characterId)?.imageUrl ? (
                      <img
                        src={CHARACTERS.find((c) => c.id === member.characterId)!.imageUrl}
                        alt={member.character}
                        className="h-12 w-12 rounded-xl object-cover object-top border border-border/80 shadow-sm shrink-0"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-xl bg-muted/60 border border-border/80 flex items-center justify-center shrink-0">
                        <Film className="h-5 w-5 text-emerald-400" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400">
                        as {member.character} (Avatar: Seven Havens characters roster)
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    {member.roleType}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Notable Credits */}
              <div className="pt-3 border-t border-border">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider block mb-1.5">
                  Notable Roles / Works:
                </span>
                <div className="flex flex-wrap gap-1">
                  {member.notableCredits.map((credit) => (
                    <span
                      key={credit}
                      className="text-[10px] px-2 py-0.5 rounded bg-muted text-foreground/80 font-medium"
                    >
                      {credit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
