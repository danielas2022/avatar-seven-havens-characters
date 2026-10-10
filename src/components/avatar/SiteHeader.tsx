import { useState } from 'react';
import { Link, usePathname } from '@/core/i18n/navigation';
import {
  Menu,
  X,
  Sparkles,
  Users,
  GitFork,
  BookOpen,
  Film,
  Tv,
  HelpCircle,
  Layers,
  Scale,
  ChevronDown,
  Play,
  Compass,
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCharactersActive =
    pathname === '/characters' ||
    pathname.startsWith('/characters/') ||
    pathname === '/pavi-vs-nisha';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-amber-500/70 shadow-md shadow-amber-500/25 group-hover:scale-105 group-hover:ring-amber-400 transition-all shrink-0 bg-amber-950/40">
            <img
              src="/imgs/avatar-brand-logo.png"
              alt="Avatar Pavi"
              width={40}
              height={40}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-serif font-bold text-base sm:text-lg tracking-tight whitespace-nowrap bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            Seven Havens
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-medium shrink-0">
          {/* Characters Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-ring group',
                isCharactersActive && 'text-amber-500 font-semibold bg-amber-500/10'
              )}
            >
              <Users
                className={cn(
                  'h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0',
                  isCharactersActive && 'opacity-100 text-amber-500'
                )}
              />
              <span>Characters</span>
              <ChevronDown className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-transform duration-200 group-data-[popup-open]:rotate-180 shrink-0" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-72 p-1.5 shadow-xl border border-border/80 bg-popover/95 backdrop-blur-md rounded-xl space-y-1"
            >
              <DropdownMenuItem
                render={<Link href="/characters" />}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5 text-amber-500">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground text-xs leading-none">All Characters</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-500 font-semibold">13 Profiles</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    Complete roster of confirmed heroes & villains
                  </span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<Link href="/pavi-vs-nisha" />}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5 text-orange-500">
                  <Scale className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground text-xs leading-none">Pavi vs Nisha</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-500/15 text-orange-500 font-semibold">Comparison</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    Twin Avatars elemental mastery & differences
                  </span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<a href="/#twin-spotlight" />}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 text-cyan-500">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-medium text-foreground text-xs leading-none">Twin Avatars Mystery</span>
                  <span className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    The 9-year-old dual reincarnation anomaly
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Relationships */}
          <Link
            href="/relationship-chart"
            className={cn(
              'px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 group',
              pathname === '/relationship-chart' && 'text-amber-500 font-semibold bg-amber-500/10'
            )}
          >
            <GitFork
              className={cn(
                'h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0',
                pathname === '/relationship-chart' && 'opacity-100 text-amber-500'
              )}
            />
            <span>Relationships</span>
          </Link>

          {/* Episodes */}
          <Link
            href="/episodes"
            className={cn(
              'px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 group',
              pathname === '/episodes' && 'text-amber-500 font-semibold bg-amber-500/10'
            )}
          >
            <Tv
              className={cn(
                'h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0',
                pathname === '/episodes' && 'opacity-100 text-amber-500'
              )}
            />
            <span>Episodes</span>
          </Link>

          {/* Voice Cast */}
          <Link
            href="/voice-cast"
            className={cn(
              'px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 group',
              pathname === '/voice-cast' && 'text-amber-500 font-semibold bg-amber-500/10'
            )}
          >
            <Film
              className={cn(
                'h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0',
                pathname === '/voice-cast' && 'opacity-100 text-amber-500'
              )}
            />
            <span>Voice Cast</span>
          </Link>

          {/* World Lore */}
          <Link
            href="/lore"
            className={cn(
              'px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 group',
              pathname === '/lore' && 'text-amber-500 font-semibold bg-amber-500/10'
            )}
          >
            <BookOpen
              className={cn(
                'h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0',
                pathname === '/lore' && 'opacity-100 text-amber-500'
              )}
            />
            <span>World Lore</span>
          </Link>

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-2.5 xl:px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-ring group">
              <Compass className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-colors shrink-0" />
              <span>More</span>
              <ChevronDown className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-transform duration-200 group-data-[popup-open]:rotate-180 shrink-0" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-64 p-1.5 shadow-xl border border-border/80 bg-popover/95 backdrop-blur-md rounded-xl space-y-1"
            >
              <DropdownMenuItem
                render={<a href="/#gallery" />}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5 text-purple-500">
                  <Layers className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-medium text-foreground text-xs leading-none">Art Gallery</span>
                  <span className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    Character concept art & stills
                  </span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<a href="/#faq" />}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-500">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-medium text-foreground text-xs leading-none">FAQ</span>
                  <span className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    Common questions & release dates
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />

          <a
            href="/#trailer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-sm shadow-amber-600/20 hover:shadow-md hover:shadow-amber-600/30 transition-all whitespace-nowrap shrink-0"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>Trailer</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted lg:hidden shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Section: Characters */}
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider px-3 mb-1.5">
              Characters & Twins
            </div>
            <div className="space-y-0.5">
              <Link
                href="/characters"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <span>All Characters</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-500 font-semibold">13</span>
              </Link>

              <Link
                href="/pavi-vs-nisha"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-md bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Scale className="h-3.5 w-3.5" />
                  </div>
                  <span>Pavi vs Nisha</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-500 font-semibold">Compare</span>
              </Link>

              <a
                href="/#twin-spotlight"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <span>Twin Avatars Mystery</span>
              </a>
            </div>
          </div>

          {/* Section: Series Guide */}
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider px-3 mb-1.5">
              Series Guide
            </div>
            <div className="space-y-0.5">
              <Link
                href="/relationship-chart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                  <GitFork className="h-3.5 w-3.5" />
                </div>
                <span>Relationships Map</span>
              </Link>

              <Link
                href="/episodes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Tv className="h-3.5 w-3.5" />
                </div>
                <span>Episodes Guide</span>
              </Link>

              <Link
                href="/voice-cast"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Film className="h-3.5 w-3.5" />
                </div>
                <span>Voice Cast & Credits</span>
              </Link>

              <Link
                href="/lore"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <BookOpen className="h-3.5 w-3.5" />
                </div>
                <span>World Lore & Seven Havens</span>
              </Link>
            </div>
          </div>

          {/* Section: Media & Extras */}
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider px-3 mb-1.5">
              Media & Extras
            </div>
            <div className="space-y-0.5">
              <a
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <span>Art Gallery</span>
              </a>

              <a
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                  <HelpCircle className="h-3.5 w-3.5" />
                </div>
                <span>FAQ & Lore Answers</span>
              </a>

              <a
                href="/#trailer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-3 py-2.5 px-4 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-sm transition-all"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Watch Official Trailer</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

