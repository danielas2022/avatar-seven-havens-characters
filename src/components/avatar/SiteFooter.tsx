import { Compass, Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12 text-muted-foreground text-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden ring-2 ring-amber-500/60 shrink-0 bg-amber-950/40">
                <img
                  src="/imgs/avatar-brand-logo.png"
                  alt="Avatar Pavi"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-serif font-bold text-sm text-foreground">
                Seven Havens
              </span>
            </div>
            <p className="max-w-md leading-relaxed text-xs">
              The premier community encyclopedia and wiki dedicated to official Avatar: Seven Havens characters.
              Comprehensive profiles, voice actors, relationships, and episode guides across the post-cataclysmic world.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-[11px]">
              Explore Wiki
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#characters" className="hover:text-foreground transition-colors">
                  All Characters
                </a>
              </li>
              <li>
                <Link to="/pavi-vs-nisha" className="hover:text-foreground transition-colors text-amber-500 font-medium">
                  Pavi vs Nisha Comparison Tool
                </Link>
              </li>
              <li>
                <a href="/#twin-spotlight" className="hover:text-foreground transition-colors">
                  Twin Avatars Spotlight
                </a>
              </li>
              <li>
                <Link to="/voice-cast" className="hover:text-foreground transition-colors">
                  Voice Cast &amp; Credits
                </Link>
              </li>
              <li>
                <Link to="/relationship-chart" className="hover:text-foreground transition-colors">
                  Interactive Relationship Map
                </Link>
              </li>
              <li>
                <Link to="/lore" className="hover:text-foreground transition-colors">
                  World Lore &amp; Havens
                </Link>
              </li>
              <li>
                <Link to="/episodes" className="hover:text-foreground transition-colors">
                  Episodes &amp; Canon Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Focus Keyword Directory */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-[11px]">
              Featured Profiles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/characters/$slug" params={{ slug: 'pavi' }} className="hover:text-foreground transition-colors">
                  Pavi (Earth Avatar)
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'nisha' }} className="hover:text-foreground transition-colors">
                  Nisha (Twin Avatar)
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'jae' }} className="hover:text-foreground transition-colors">
                  Jae (Airbender Platoon)
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'aang' }} className="hover:text-foreground transition-colors">
                  Avatar Aang (Classic Legend)
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'korra' }} className="hover:text-foreground transition-colors">
                  Avatar Korra (Modern Legend)
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'zuko' }} className="hover:text-foreground transition-colors">
                  Fire Lord Zuko
                </Link>
              </li>
              <li>
                <Link to="/characters/$slug" params={{ slug: 'karthik' }} className="hover:text-foreground transition-colors">
                  Captain Karthik
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-muted-foreground/80 max-w-4xl leading-normal">
            &copy; {new Date().getFullYear()} avatarsevenhavenscharacters.com. An independent non-commercial fan encyclopedia and research portal.
            Avatar: Seven Havens, Avatar: The Last Airbender, The Legend of Korra, and all related characters, logos, and promotional imagery are trademarks and intellectual property of Paramount Global, Nickelodeon Animation Studio, and Avatar Studios.
            All materials are utilized for non-commercial commentary, critical review, and educational reference under 17 U.S. Code § 107 (Fair Use). Not endorsed by or affiliated with Paramount Global.
          </p>
          <div className="flex items-center gap-1 text-[11px] shrink-0">
            <span>Built for the Avatar fandom</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
