import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { VoiceCastTable } from '@/components/avatar/VoiceCastTable';
import { envConfigs } from '@/config';
import { Film, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/voice-cast')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/voice-cast`;
    const title = 'Avatar: Seven Havens Voice Cast & Actors | Full Cast';
    const description =
      'Full voice cast directory for Avatar: Seven Havens (Paramount+ 2026). Voice actors for Pavi (Saheli Khan), Nisha (Aishu Devan), Jae (Major Curda), and cast.';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar Seven Havens voice cast, voice actors Avatar Seven Havens, Saheli Khan, Aishu Devan, Major Curda, Dee Bradley Baker, Darren Barnet, Sakina Jaffrey, who voices Pavi',
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
  component: VoiceCastPage,
});

function VoiceCastPage() {
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
            <span className="text-foreground font-medium">Voice Cast</span>
          </nav>

          <VoiceCastTable />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
