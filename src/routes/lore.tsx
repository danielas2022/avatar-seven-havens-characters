import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { LoreSection } from '@/components/avatar/LoreSection';
import { envConfigs } from '@/config';
import { BookOpen } from 'lucide-react';

export const Route = createFileRoute('/lore')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/lore`;
    const title = 'Avatar: Seven Havens World Lore & Cataclysm Guide';
    const description =
      'World lore guide for Avatar: Seven Havens (Paramount+ 2026). Discover the Cataclysm 225 years after Korra, the 7 fortified havens, and twin Avatar mechanics.';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar Seven Havens lore, The Cataclysm Avatar, Seven Havens setting, Korra status in Seven Havens, why is Avatar feared, Haven of Ellora',
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
  component: LorePage,
});

function LorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-amber-500/20 selection:text-amber-400">
      <SiteHeader />

      <main className="flex-1 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">World Lore</span>
          </nav>

          <LoreSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
