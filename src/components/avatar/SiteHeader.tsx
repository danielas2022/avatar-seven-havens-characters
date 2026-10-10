import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, Sparkles, Compass, Users, GitFork, BookOpen, Film, Tv, HelpCircle, Layers, Scale } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Characters', href: '/#characters', icon: Users },
    { label: 'Pavi vs Nisha', href: '/pavi-vs-nisha', icon: Scale },
    { label: 'Twin Avatars', href: '/#twin-spotlight', icon: Sparkles },
    { label: 'Art Gallery', href: '/#gallery', icon: Layers },
    { label: 'Voice Cast', href: '/voice-cast', icon: Film },
    { label: 'Relationships', href: '/relationship-chart', icon: GitFork },
    { label: 'World Lore', href: '/lore', icon: BookOpen },
    { label: 'Episodes', href: '/episodes', icon: Tv },
    { label: 'FAQ', href: '/#faq', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-amber-500/70 shadow-md shadow-amber-500/25 group-hover:scale-105 group-hover:ring-amber-400 transition-all shrink-0 bg-amber-950/40">
            <img
              src="/imgs/avatar-brand-logo.png"
              alt="Avatar Pavi"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-serif font-bold text-base sm:text-lg tracking-tight whitespace-nowrap bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            Seven Havens
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5"
            >
              <link.icon className="h-4 w-4 opacity-70" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="/#trailer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-sm transition-all"
          >
            <Film className="h-3.5 w-3.5" />
            <span>Trailer</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <link.icon className="h-4 w-4 text-amber-500" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
