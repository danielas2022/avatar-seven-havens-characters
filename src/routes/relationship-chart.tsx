import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { RelationshipChart } from '@/components/avatar/RelationshipChart';
import { envConfigs } from '@/config';
import { GitFork, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/relationship-chart')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/relationship-chart`;
    const title = 'Avatar: Seven Havens Character Relationship Map | Interactive Chart';
    const description =
      'Interactive character relationship map for Avatar: Seven Havens. Visual graph connecting twin Avatars Pavi and Nisha, Jae, Captain Karthik, Daemin, Agam, Zi, animal companions Geet & Ruhi, and enemy factions.';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar Seven Havens relationship chart, character map Seven Havens, Pavi Nisha connection, Jae Karthik relationship, Avatar twin cycle graph',
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
  component: RelationshipChartPage,
});

function RelationshipChartPage() {
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
            <span className="text-foreground font-medium">Relationship Chart</span>
          </nav>

          {/* Directory Header Banner */}
          <div className="mb-8 p-6 rounded-3xl border border-border bg-card shadow-sm space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Avatar: Seven Havens Characters Relationship &amp; Alliance Network
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore the intricate network connecting all official Avatar: Seven Havens characters. From the cosmic twin bond between Avatar: Seven Havens characters Pavi and Nisha to the tactical protection of airbender Jae, this interactive map documents the shifting loyalties and guardian ties among Avatar: Seven Havens characters across Book 1.
            </p>
          </div>

          <RelationshipChart />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
