import { useState } from 'react';
import { Sparkles, Compass, Users, GitFork, Film, Tv, Play, Flame, ExternalLink, ShieldAlert } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { Link } from '@tanstack/react-router';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Avatar Studios official trailer query or embed URL
  const trailerEmbedUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0';

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-20 border-b border-border/40">
      {/* Elemental Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            <span>Paramount+ Premiere &bull; October 9, 2026</span>
            <span className="text-muted-foreground/60">&bull;</span>
            <span className="text-foreground">Avatar Studios Official Animated Series</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Avatar: Seven Havens
            </span>{' '}
            Characters & Lore Wiki
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The definitive anime guide for Paramount+&apos;s new animated epic. Meet the franchise&apos;s first Twin Avatars <strong className="text-foreground">Pavi</strong> &amp; <strong className="text-foreground">Nisha</strong>, airbender <strong className="text-foreground">Jae</strong>, the full voice cast, and explore the post-cataclysmic world 225 years after <em>The Legend of Korra</em>.
          </p>
        </div>

        {/* Featured Video Trailer Section — FRONT & CENTER ON HOMEPAGE */}
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-amber-500/30 bg-black/90 shadow-2xl overflow-hidden mb-12 relative group">
          <div className="relative aspect-video w-full flex items-center justify-center bg-zinc-950">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={trailerEmbedUrl}
                title="Avatar: Seven Havens Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                {/* Poster Background */}
                <img
                  src="/imgs/hero-banner.png"
                  alt="Avatar: Seven Havens Official Series Trailer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

                {/* Animated Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-rose-600 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 fill-white translate-x-0.5" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide block drop-shadow-md">
                      Watch Official Debut Trailer
                    </span>
                    <span className="text-xs text-amber-300 font-medium drop-shadow">
                      Paramount+ &bull; 2 min 14 sec
                    </span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600/90 text-white shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <Film className="h-3.5 w-3.5" />
                    <span>Official Trailer &bull; Book 1: Havens</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Under-Player Information Bar */}
          <div className="p-4 sm:p-5 bg-card border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-mono text-xs font-bold">
                NOW STREAMING
              </span>
              <p className="text-xs text-muted-foreground">
                First 3 Episodes Premiered October 9, 2026 on Paramount+
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#characters"
                className="text-xs font-semibold text-foreground hover:text-amber-500 flex items-center gap-1 transition-colors"
              >
                <span>Browse Characters</span>
                <Compass className="h-3.5 w-3.5" />
              </a>
              <span className="text-border">|</span>
              <Link
                to="/episodes"
                className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>13-Episode Guide</span>
                <Tv className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Character Portrait Strip */}
        <div className="mb-4 text-center">
          <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-3">
            Quick Jump to Featured Characters
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {CHARACTERS.slice(0, 6).map((c) => (
              <Link
                key={c.id}
                to="/characters/$slug"
                params={{ slug: c.id }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-card hover:border-amber-500/50 hover:bg-muted/50 transition-all group"
              >
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  className="h-6 w-6 rounded-full object-cover object-top border border-border/60 group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-bold text-foreground group-hover:text-amber-500 transition-colors">
                  {c.name}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  ({c.bending.split(' ')[0]})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
