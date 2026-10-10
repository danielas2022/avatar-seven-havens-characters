import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { EpisodeGuide } from '@/components/avatar/EpisodeGuide';
import { envConfigs } from '@/config';
import { Tv } from 'lucide-react';

export const Route = createFileRoute('/episodes')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/episodes`;
    const title = 'Avatar Franchise Episode Guide & Seven Havens Roadmap | ATLA, Korra & Book 1';
    const description =
      'Complete episodic archive across the classic 61 chapters of Avatar: The Last Airbender, 52 episodes of The Legend of Korra, and the official Avatar Studios production roadmap for Avatar: Seven Havens.';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar episode guide, Avatar The Last Airbender episodes, Legend of Korra episodes, Avatar Seven Havens episodes, Seven Havens roadmap, Avatar Studios Paramount Plus',
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
  component: EpisodesPage,
});

function EpisodesPage() {
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
            <span className="text-foreground font-medium">Episodes</span>
          </nav>

          <EpisodeGuide />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
