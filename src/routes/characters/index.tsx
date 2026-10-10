import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { CharacterGrid } from '@/components/avatar/CharacterGrid';
import { TwinSpotlight } from '@/components/avatar/TwinSpotlight';
import { envConfigs } from '@/config';
import { Users, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/characters/')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/characters`;
    const title = 'Avatar: Seven Havens Characters Directory | Full Roster & Bios';
    const description =
      'Complete roster of characters in Avatar: Seven Havens (Paramount+ 2026). Explore bios, bending arts, factions, and voice actors for Pavi, Nisha, Jae, Karthik, Daemin, and more.';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar Seven Havens characters, Seven Havens character directory, Pavi, Nisha, Jae, Karthik, Daemin, Agam, Zi, Geet, Ruhi',
        },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: pageUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [{ rel: 'canonical', href: pageUrl }],
    };
  },
  component: CharactersIndexPage,
});

function CharactersIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-amber-500/20 selection:text-amber-400">
      <SiteHeader />

      <main className="flex-1 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Characters</span>
          </nav>

          {/* Directory Header Banner */}
          <div className="mb-8 p-6 rounded-3xl border border-border bg-card shadow-sm space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Avatar: Seven Havens Characters Roster &amp; Canon Database
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore the complete directory of official Avatar: Seven Havens characters. Documenting every figure in the 2026 series, our archive compares new Avatar: Seven Havens characters with historical franchise masters. Discover verified ability profiles for Avatar: Seven Havens characters Pavi, Nisha, Jae, Karthik, and companion Avatar: Seven Havens characters across all seven sanctuaries.
            </p>
          </div>

          <TwinSpotlight />
          <CharacterGrid />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
