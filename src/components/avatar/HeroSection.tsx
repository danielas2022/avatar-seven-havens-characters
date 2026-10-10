import { useState } from 'react';
import { Sparkles, Compass, Users, GitFork, Film, Tv, Play, Layers, ExternalLink, ShieldAlert } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { Link } from '@tanstack/react-router';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrailerIndex, setActiveTrailerIndex] = useState(0);

  const trailerList = [
    {
      title: 'Official Key Scene: Pavi, Jae & Fluffy Mount',
      badge: 'Main Anime Scene &bull; 2:14',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/trio-key-scene.png',
      desc: 'The official colorful anime still featuring Pavi, Jae, and their furry horned companion.',
    },
    {
      title: 'Pavi with Spirit Korra & Spirit Aang',
      badge: 'Past Avatars &bull; 1:45',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/pavi-spirits-official.png',
      desc: 'Deep dive into the psychic bond between young Pavi and past Avatars Korra and Aang.',
    },
    {
      title: 'Haven Desert Mount Expedition',
      badge: 'Wasteland Patrol &bull; 1:12',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/expedition-landscape.png',
      desc: 'Pavi riding her beast mount alongside Jae navigating the ruined canyon wastes.',
    },
  ];

  const currentTrailer = trailerList[activeTrailerIndex];

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
        {/* Top Header Badge & Official Logo */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            <span>Paramount+ Premiere &bull; October 9, 2026</span>
            <span className="text-muted-foreground/60">&bull;</span>
            <span className="text-foreground">Avatar Studios Official Animated Series</span>
          </div>

          {/* Official Title Logo */}
          <div className="flex justify-center mb-3">
            <img
              src="/imgs/canon/avatar-seven-havens-logo.png"
              alt="Avatar: Seven Havens Official Series Logo"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-xl"
            />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Avatar: Seven Havens
            </span>{' '}
            Characters &amp; Lore Wiki
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            The definitive anime guide for Paramount+&apos;s new animated epic. Meet the franchise&apos;s first Twin Avatars <strong className="text-foreground">Pavi</strong> &amp; <strong className="text-foreground">Nisha</strong>, airbender <strong className="text-foreground">Jae</strong>, the full voice cast, and explore the post-cataclysmic world 225 years after <em>The Legend of Korra</em>.
          </p>

          {/* Quick Section Jump Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="#characters"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-md transition-all"
            >
              <Users className="h-4 w-4" />
              <span>Explore 10 Characters</span>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-card border border-border hover:border-amber-500/50 text-foreground transition-all"
            >
              <Layers className="h-4 w-4 text-amber-500" />
              <span>Concept Art Gallery</span>
            </a>
            <a
              href="#twin-spotlight"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-card border border-border hover:border-rose-500/50 text-foreground transition-all"
            >
              <Sparkles className="h-4 w-4 text-rose-400" />
              <span>Twin Avatars Breakdown</span>
            </a>
            <Link
              to="/episodes"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-card border border-border hover:border-sky-500/50 text-foreground transition-all"
            >
              <Tv className="h-4 w-4 text-sky-400" />
              <span>Episode Tracker (13)</span>
            </Link>
          </div>
        </div>

        {/* Featured Video Trailer Section — FRONT & CENTER ON HOMEPAGE */}
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-amber-500/30 bg-black/90 shadow-2xl overflow-hidden mb-12 relative group">
          {/* Trailer Selectors */}
          <div className="flex border-b border-border/80 bg-zinc-950/90 overflow-x-auto">
            {trailerList.map((tr, idx) => (
              <button
                key={tr.title}
                type="button"
                onClick={() => {
                  setActiveTrailerIndex(idx);
                  setIsPlaying(false);
                }}
                className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 ${
                  activeTrailerIndex === idx
                    ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Film className="h-3.5 w-3.5" />
                <span>{tr.title}</span>
              </button>
            ))}
          </div>

          <div className="relative aspect-video w-full flex items-center justify-center bg-zinc-950">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={currentTrailer.src}
                title={currentTrailer.title}
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
                  src={currentTrailer.poster}
                  alt={currentTrailer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

                {/* Animated Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-rose-600 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 fill-white translate-x-0.5" />
                  </div>
                  <div className="text-center px-4">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide block drop-shadow-md">
                      {currentTrailer.title}
                    </span>
                    <span className="text-xs text-amber-300 font-medium drop-shadow">
                      Click to Play &bull; Paramount+
                    </span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600/90 text-white shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <Film className="h-3.5 w-3.5" />
                    <span>{currentTrailer.badge}</span>
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
                Episodes 1&ndash;3 Premiered October 9, 2026 on Paramount+
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.paramountplus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-foreground hover:text-amber-500 flex items-center gap-1 transition-colors"
              >
                <span>Stream on Paramount+</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span className="text-border">|</span>
              <Link
                to="/episodes"
                className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>Episode Guide</span>
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
            {CHARACTERS.slice(0, 7).map((c) => (
              <Link
                key={c.id}
                to="/characters/$slug"
                params={{ slug: c.id }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-card hover:border-amber-500/50 hover:bg-muted/50 transition-all group shadow-sm"
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
