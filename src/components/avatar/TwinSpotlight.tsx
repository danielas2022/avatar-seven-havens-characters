import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Shield, Flame, Compass, ArrowRight, HeartHandshake, Mountain } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';

export function TwinSpotlight() {
  const pavi = CHARACTERS.find((c) => c.id === 'pavi')!;
  const nisha = CHARACTERS.find((c) => c.id === 'nisha')!;

  const [activeTab, setActiveTab] = useState<'both' | 'pavi' | 'nisha'>('both');

  return (
    <section id="twin-spotlight" className="py-16 md:py-24 border-b border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Franchise First &bull; The Split Avatar Cycle</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            The Twin Avatars: Pavi & Nisha
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            For 10,000 years from Avatar Wan to Avatar Korra, Raava’s light reincarnated into a single vessel.
            In <em>Avatar: Seven Havens</em>, the Avatar Cycle has fractured across identical twin sisters, creating unprecedented dual avatars.
          </p>

          {/* Quick toggle tab on mobile */}
          <div className="inline-flex items-center p-1 rounded-xl bg-muted/60 border border-border mt-6">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'both' ? 'bg-background text-foreground shadow-sm font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pavi')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'pavi' ? 'bg-amber-600 text-white shadow-sm font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pavi (Earth)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('nisha')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'nisha' ? 'bg-rose-600 text-white shadow-sm font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Nisha (Fire/Multi)
            </button>
          </div>
        </div>

        {/* Side-by-Side Cards with Artwork */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pavi Card */}
          {(activeTab === 'both' || activeTab === 'pavi') && (
            <div className="rounded-3xl border border-amber-500/40 bg-card overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/80 transition-all">
              {/* Artwork Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <img
                  src="/imgs/canon/trio-key-scene.png"
                  alt="Pavi - The Reluctant Avatar"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-white shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <Mountain className="h-3.5 w-3.5" />
                    <span>Earth Avatar &bull; Age 9</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-6 right-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground drop-shadow">
                    {pavi.name}
                  </h3>
                  <span className="text-sm font-semibold text-amber-500 drop-shadow">
                    {pavi.alias}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 pt-2">
                <p className="text-xs text-muted-foreground mb-4">
                  Voiced by <strong className="text-foreground">{pavi.voiceActor.name}</strong> &bull; Companion:{' '}
                  <span className="text-amber-500 font-semibold">{pavi.animalCompanion}</span>
                </p>

                <blockquote className="italic text-xs sm:text-sm text-foreground/80 border-l-2 border-amber-500 pl-3 py-1 mb-5 bg-amber-500/5 rounded-r">
                  &ldquo;{pavi.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {pavi.shortBio}
                </p>

                {/* Abilities */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-amber-500" />
                    Key Elemental Gifts
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pavi.keyAbilities.slice(0, 4).map((ability) => (
                      <span
                        key={ability}
                        className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 sm:px-8 border-t border-border/60 bg-muted/20 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Haven of Ellora (Outer Ruins)</span>
                <Link
                  to="/characters/$slug"
                  params={{ slug: 'pavi' }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-all"
                >
                  <span>Full Character Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Nisha Card */}
          {(activeTab === 'both' || activeTab === 'nisha') && (
            <div className="rounded-3xl border border-rose-500/40 bg-card overflow-hidden shadow-xl flex flex-col justify-between group hover:border-rose-500/80 transition-all">
              {/* Artwork Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <img
                  src={nisha.imageUrl}
                  alt="Nisha - The Fiery Twin Avatar"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600/90 text-white shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5" />
                    <span>Twin Avatar &bull; Age 9</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-6 right-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground drop-shadow">
                    {nisha.name}
                  </h3>
                  <span className="text-sm font-semibold text-rose-400 drop-shadow">
                    {nisha.alias}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 pt-2">
                <p className="text-xs text-muted-foreground mb-4">
                  Voiced by <strong className="text-foreground">{nisha.voiceActor.name}</strong> &bull; Companion:{' '}
                  <span className="text-rose-400 font-semibold">{nisha.animalCompanion}</span>
                </p>

                <blockquote className="italic text-xs sm:text-sm text-foreground/80 border-l-2 border-rose-500 pl-3 py-1 mb-5 bg-rose-500/5 rounded-r">
                  &ldquo;{nisha.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {nisha.shortBio}
                </p>

                {/* Abilities */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5 text-rose-400" />
                    Key Elemental Gifts
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {nisha.keyAbilities.slice(0, 4).map((ability) => (
                      <span
                        key={ability}
                        className="text-xs px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 sm:px-8 border-t border-border/60 bg-muted/20 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Haven of Ellora (Upper Citadel)</span>
                <Link
                  to="/characters/$slug"
                  params={{ slug: 'nisha' }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Full Character Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* The Mystery Explained Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-border/80 bg-muted/30 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center shrink-0 shadow-md">
            <HeartHandshake className="h-5 w-5 text-white" />
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
            <strong className="text-foreground">Why Are There Two Avatars?</strong> In the 225 years following Avatar Korra,
            the severing of the physical and spirit planes fragmented Raava’s reincarnation flow. Pavi and Nisha share the cosmic cycle:
            when they touch hands or harmonize stances, their combined bending surpasses any single Avatar in living memory.
          </div>
          <Link
            to="/lore"
            className="shrink-0 text-xs font-semibold text-amber-500 hover:underline flex items-center gap-1"
          >
            <span>Read Lore Wiki</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
