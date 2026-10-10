import { useState } from 'react';
import { Sparkles, Users, Film, Tv, Play, ExternalLink, ChevronRight, Volume2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrailerIndex, setActiveTrailerIndex] = useState(0);

  const trailerList = [
    {
      tabName: '正片剧照',
      title: 'Official Key Scene: Pavi, Jae & Mount',
      badge: 'Main Anime Scene • 2:14',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/trio-key-scene.png',
      desc: 'Pavi, Jae and their fluffy beast mount in the official animation still.',
    },
    {
      tabName: '前代神通',
      title: 'Pavi with Spirit Korra & Aang',
      badge: 'Past Avatars • 1:45',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/pavi-spirits-official.png',
      desc: 'Young Pavi spiritually connects with Korra and Aang.',
    },
    {
      tabName: '荒漠远征',
      title: 'Haven Canyon Mount Patrol',
      badge: 'Wasteland Patrol • 1:12',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0',
      poster: '/imgs/canon/expedition-landscape.png',
      desc: 'Pavi and Jae traversing the post-cataclysm ruins.',
    },
  ];

  const currentTrailer = trailerList[activeTrailerIndex];

  // 7 Core Main Characters for the Grand Anime Showcase
  const SEVEN_MAIN_CHARACTERS = [
    {
      id: 'pavi',
      name: 'Pavi',
      nameZh: '帕维',
      role: 'The Reluctant Avatar',
      roleZh: '新降世神通',
      bending: 'Earth',
      elementIcon: '🪨',
      elementBadge: 'Earth (土)',
      imageUrl: '/imgs/canon/pavi-canon-smile-face.png',
      ringClasses: 'ring-2 ring-emerald-500/80 group-hover:ring-emerald-400 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.55)]',
      badgeClasses: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      glowGradient: 'from-emerald-500/15 via-transparent to-transparent',
    },
    {
      id: 'nisha',
      name: 'Nisha',
      nameZh: '妮莎',
      role: 'The Twin Avatar',
      roleZh: '双生降世神通',
      bending: 'Avatar',
      elementIcon: '🔥',
      elementBadge: 'Twin Avatar (双生)',
      imageUrl: '/imgs/characters/nisha.jpg',
      ringClasses: 'ring-2 ring-rose-500/80 group-hover:ring-rose-400 group-hover:shadow-[0_0_24px_rgba(244,63,94,0.55)]',
      badgeClasses: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      glowGradient: 'from-rose-500/15 via-transparent to-transparent',
    },
    {
      id: 'jae',
      name: 'Jae',
      nameZh: '杰',
      role: 'Airbender Officer',
      roleZh: '御气护卫队长',
      bending: 'Air',
      elementIcon: '🌪️',
      elementBadge: 'Air (气)',
      imageUrl: '/imgs/canon/jae-canon-face.png',
      ringClasses: 'ring-2 ring-sky-400/80 group-hover:ring-sky-300 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.55)]',
      badgeClasses: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
      glowGradient: 'from-sky-500/15 via-transparent to-transparent',
    },
    {
      id: 'karthik',
      name: 'Karthik',
      nameZh: '卡尔蒂克',
      role: 'Guard Commander',
      roleZh: '防卫指挥官',
      bending: 'Air',
      elementIcon: '🌪️',
      elementBadge: 'Air Commander (气)',
      imageUrl: '/imgs/characters/karthik.png',
      ringClasses: 'ring-2 ring-cyan-400/80 group-hover:ring-cyan-300 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.55)]',
      badgeClasses: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      glowGradient: 'from-cyan-500/15 via-transparent to-transparent',
    },
    {
      id: 'daemin',
      name: 'Daemin',
      nameZh: '戴明',
      role: 'Water Soldier',
      roleZh: '御水突击先锋',
      bending: 'Water',
      elementIcon: '🌊',
      elementBadge: 'Water (水)',
      imageUrl: '/imgs/characters/daemin.png',
      ringClasses: 'ring-2 ring-blue-500/80 group-hover:ring-blue-400 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.55)]',
      badgeClasses: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      glowGradient: 'from-blue-500/15 via-transparent to-transparent',
    },
    {
      id: 'agam',
      name: 'Agam',
      nameZh: '阿加姆',
      role: 'Haven Matron',
      roleZh: '避难所庇护者',
      bending: 'Non-Bender',
      elementIcon: '🛡️',
      elementBadge: 'Haven Matron (体术)',
      imageUrl: '/imgs/characters/agam.jpg',
      ringClasses: 'ring-2 ring-amber-500/80 group-hover:ring-amber-400 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.55)]',
      badgeClasses: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      glowGradient: 'from-amber-500/15 via-transparent to-transparent',
    },
    {
      id: 'zi',
      name: 'Zi',
      nameZh: '齐长老',
      role: 'Haven Elder',
      roleZh: '避难所学者顾问',
      bending: 'Non-Bender',
      elementIcon: '📜',
      elementBadge: 'Haven Scholar (学者)',
      imageUrl: '/imgs/characters/zi.jpg',
      ringClasses: 'ring-2 ring-purple-500/80 group-hover:ring-purple-400 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]',
      badgeClasses: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      glowGradient: 'from-purple-500/15 via-transparent to-transparent',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-8 md:pb-20 border-b border-border/40">
      {/* Anime Cinematic Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* ========================================================================= */}
        {/* SECTION 1: 并列排布 (Parallel Split Layout) — Left Content + Right Video   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* LEFT COLUMN (lg:col-span-7): Anime Brand Title & Hook */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Live Streaming Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4 shadow-sm w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="font-bold tracking-wide">PARAMOUNT+ PREMIERE</span>
              <span className="text-muted-foreground/60">&bull;</span>
              <span className="text-foreground font-medium">October 9, 2026</span>
              <span className="text-muted-foreground/60 hidden sm:inline">&bull;</span>
              <span className="text-amber-300 font-semibold hidden sm:inline">Avatar Studios Official</span>
            </div>

            {/* Official Series Logo */}
            <div className="mb-4">
              <img
                src="/imgs/canon/avatar-seven-havens-logo.png"
                alt="Avatar: Seven Havens Official Series Logo"
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Avatar: Seven Havens Characters
              </span>{' '}
              Guide &amp; Wiki
            </h1>

            {/* Anime Synopsis */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
              The definitive wiki for all official <strong className="text-foreground">Avatar: Seven Havens characters</strong>. 225 years after <em>The Legend of Korra</em>, explore twin Avatars <strong className="text-amber-400 font-semibold">Pavi</strong> (Earth) &amp; <strong className="text-rose-400 font-semibold">Nisha</strong>, airbender guard <strong className="text-sky-400 font-semibold">Jae</strong>, voice cast, and detailed backstories for every one of the Avatar: Seven Havens characters.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#characters-roster"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <Users className="h-4 w-4" />
                <span>Explore Avatar: Seven Havens characters</span>
              </a>

              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 border border-amber-500/40 shadow-sm transition-all"
              >
                <Play className="h-4 w-4 fill-amber-400" />
                <span>Play Debut Trailer</span>
              </button>

              <Link
                to="/episodes"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-card hover:bg-muted/60 text-foreground border border-border/80 transition-all"
              >
                <Tv className="h-4 w-4 text-sky-400" />
                <span>13 Episodes</span>
              </Link>
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground border-t border-border/40 pt-4">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Book 1: Havens</span>
              </div>
              <span className="text-border">&bull;</span>
              <div>Studio: <span className="text-foreground font-medium">Avatar Studios</span></div>
              <span className="text-border">&bull;</span>
              <div>Network: <span className="text-foreground font-medium">Paramount+</span></div>
              <span className="text-border">&bull;</span>
              <div>Era: <span className="text-foreground font-medium">Post-Cataclysm (7 Havens)</span></div>
            </div>
          </div>

          {/* RIGHT COLUMN (lg:col-span-5): Anime Video Station (并列放置在右边) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-amber-500/30 bg-zinc-950 shadow-2xl overflow-hidden relative group">
              {/* Trailer Selector Tabs on top of player */}
              <div className="flex border-b border-zinc-800/80 bg-zinc-900/95 overflow-x-auto p-1.5 gap-1.5">
                {trailerList.map((tr, idx) => (
                  <button
                    key={tr.title}
                    type="button"
                    onClick={() => {
                      setActiveTrailerIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      activeTrailerIndex === idx
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                    }`}
                  >
                    <Film className="h-3.5 w-3.5" />
                    <span>{tr.tabName}</span>
                  </button>
                ))}
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
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
                    className="relative w-full h-full cursor-pointer group/player flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Poster Image */}
                    <img
                      src={currentTrailer.poster}
                      alt={currentTrailer.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/player:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30" />

                    {/* Anime Glowing Pulsing Play Button */}
                    <div className="relative z-10 flex flex-col items-center gap-2.5">
                      <div className="relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500/40 opacity-75"></span>
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-rose-600 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover/player:scale-110 transition-transform">
                          <Play className="h-7 w-7 fill-white translate-x-0.5" />
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide block drop-shadow-md">
                          {currentTrailer.title}
                        </span>
                        <span className="text-[11px] text-amber-300 font-medium">
                          ▶ 点击播放预告片段
                        </span>
                      </div>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600/90 text-white shadow-md backdrop-blur-sm flex items-center gap-1">
                        <Film className="h-3 w-3" />
                        <span>{currentTrailer.badge}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Player Underbar */}
              <div className="px-4 py-3 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-300 font-medium">Paramount+ 原创动画首播</span>
                </div>
                <a
                  href="https://www.paramountplus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>在线点播</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: 7人专属放大头像动画阵容 (7-Character Big Avatar Anime Showcase) */}
        {/* ========================================================================= */}
        <div id="characters-roster" className="pt-4">
          {/* Section Kicker Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CORE ANIME CAST &bull; 7 KEY AVATAR: SEVEN HAVENS CHARACTERS</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Official Avatar: Seven Havens Characters Roster
              </h2>
            </div>
            <a
              href="#characters"
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-amber-400 transition-colors"
            >
              <span>查看全部 10 位 Avatar: Seven Havens characters</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* 7 Big Character Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {SEVEN_MAIN_CHARACTERS.map((char) => (
              <Link
                key={char.id}
                to="/characters/$slug"
                params={{ slug: char.id }}
                className="group relative rounded-2xl bg-card/90 border border-border/80 hover:border-amber-500/60 p-3 sm:p-3.5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
              >
                {/* Background Elemental Ambient Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${char.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* BIG AVATAR PORTRAIT (放大头像容器) */}
                <div className="relative mb-3">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden ${char.ringClasses} transition-all duration-300 bg-zinc-900`}>
                    <img
                      src={char.imageUrl}
                      alt={char.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Element Icon Pip */}
                  <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs shadow-md">
                    {char.elementIcon}
                  </span>
                </div>

                {/* Character Name in Bold */}
                <div className="mb-1 w-full">
                  <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-amber-400 transition-colors block truncate">
                    {char.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium block">
                    {char.nameZh}
                  </span>
                </div>

                {/* Element Badge */}
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${char.badgeClasses} mb-1.5`}>
                  {char.elementBadge}
                </span>

                {/* Character Role Tag */}
                <span className="text-[10px] text-muted-foreground/80 line-clamp-1 mb-2">
                  Avatar: Seven Havens characters • {char.roleZh}
                </span>

                {/* Hover Action Prompt */}
                <span className="mt-auto text-[10px] font-bold text-amber-500/0 group-hover:text-amber-400 transition-all flex items-center gap-0.5">
                  <span>Avatar: Seven Havens characters profile</span>
                  <ChevronRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
