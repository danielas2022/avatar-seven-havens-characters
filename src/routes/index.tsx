import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { HeroSection } from '@/components/avatar/HeroSection';
import { TwinSpotlight } from '@/components/avatar/TwinSpotlight';
import { CharacterGrid } from '@/components/avatar/CharacterGrid';
import { GallerySection } from '@/components/avatar/GallerySection';
import { RelationshipChart } from '@/components/avatar/RelationshipChart';
import { VoiceCastTable } from '@/components/avatar/VoiceCastTable';
import { LoreSection } from '@/components/avatar/LoreSection';
import { TrailerSection } from '@/components/avatar/TrailerSection';
import { EpisodeGuide } from '@/components/avatar/EpisodeGuide';
import { FAQSection } from '@/components/avatar/FAQSection';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { CHARACTERS } from '@/data/characters';
import { FAQS } from '@/data/faqs';
import { envConfigs } from '@/config';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-amber-500/20 selection:text-amber-400">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TwinSpotlight />
        <CharacterGrid />
        <GallerySection />
        <RelationshipChart />
        <VoiceCastTable />
        <LoreSection />
        <TrailerSection />
        <EpisodeGuide />
        <FAQSection />

        {/* SEO Canonical Keywords Index & Topic Directory */}
        <section className="py-8 bg-muted/20 border-t border-border/40 text-xs text-muted-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-2">
              Official Avatar: Seven Havens Characters Index &amp; Topic Directory
            </h3>
            <p className="text-[11px] leading-relaxed mb-3">
              Explore every entry in our database for Avatar: Seven Havens characters. Covering twin Avatar: Seven Havens characters Pavi and Nisha, airbending Avatar: Seven Havens characters Jae and Karthik, waterbending Avatar: Seven Havens characters Daemin, and non-bending Avatar: Seven Havens characters Agam and Zi. This community directory indexes voice cast credits, episode timelines, concept art, and lore for all Avatar: Seven Havens characters.
            </p>
            <p className="text-[11px] leading-relaxed mb-3">
              Understanding the generational journey of Avatar: Seven Havens characters requires connecting the post-Cataclysm setting with past franchise legends. As new Avatar: Seven Havens characters awaken across the ruins, fans can compare Avatar: Seven Havens characters with historical masters like Aang, Korra, Zuko, and Toph. Our verified dossiers ensure all Avatar: Seven Havens characters are documented with authentic Paramount+ press sources. Whether analyzing elemental arts of Avatar: Seven Havens characters or following the journey of Avatar: Seven Havens characters in Book 1, this encyclopedia tracks every update for Avatar: Seven Havens characters.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] mb-3">
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Pavi (Earth Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Nisha (Twin Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Jae (Airbender Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Avatar Aang (Predecessor to Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Avatar Korra (Predecessor to Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Fire Lord Zuko (Inspiration for Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Toph Beifong (Lineage for Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Karthik (Guard Leader in Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Daemin (Waterbender in Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Agam (Haven Elder in Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Zi (Wasteland Scout in Avatar: Seven Havens characters)</span>
              <span className="px-2 py-0.5 rounded bg-muted border border-border/60">Geet &amp; Ruhi (Creature Companions for Avatar: Seven Havens characters)</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createFileRoute('/')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const title = 'Avatar: Seven Havens Characters Guide & Wiki | Full Cast, Pavi & Nisha';
    const description =
      'Complete guide to Avatar: Seven Havens characters (Paramount+ 2026). Explore profiles for twin Avatars Pavi and Nisha, Jae, full voice cast, relationship chart, episode guide, and lore 225 years after Korra.';

    // Schema.org Structured Data
    const structuredData = [
      // WebSite Schema
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Avatar: Seven Havens Characters Wiki',
        url: siteUrl,
        description: description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/#characters?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      // TVSeries Schema
      {
        '@context': 'https://schema.org',
        '@type': 'TVSeries',
        name: 'Avatar: Seven Havens',
        description:
          'Set 225 years after The Legend of Korra, the series follows young earthbender Pavi and her long-lost twin sister Nisha, who are revealed to be Twin Avatars in a post-cataclysmic world of seven fortified havens.',
        startDate: '2026-10-09',
        creator: [
          { '@type': 'Person', name: 'Michael Dante DiMartino' },
          { '@type': 'Person', name: 'Bryan Konietzko' },
        ],
        actor: [
          { '@type': 'Person', name: 'Saheli Khan' },
          { '@type': 'Person', name: 'Aishu Devan' },
          { '@type': 'Person', name: 'Major Curda' },
          { '@type': 'Person', name: 'Akshay Khanna' },
          { '@type': 'Person', name: 'Darren Barnet' },
          { '@type': 'Person', name: 'Sakina Jaffrey' },
          { '@type': 'Person', name: 'Dianne Doan' },
          { '@type': 'Person', name: 'Dee Bradley Baker' },
        ],
      },
      // ItemList Schema for Characters
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: CHARACTERS.map((char, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Person',
            name: char.name,
            alternateName: char.alias,
            description: char.shortBio,
            url: `${siteUrl}/characters/${char.id}`,
          },
        })),
      },
      // FAQPage Schema for Google Featured Snippets
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ];

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'Avatar Seven Havens characters, Avatar Seven Havens cast, Pavi Avatar Seven Havens, Nisha Avatar Seven Havens, Jae airbender, Avatar Seven Havens voice actors, Avatar Seven Havens relationship chart, Avatar Seven Havens twin avatars, Paramount Plus Avatar 2026',
        },
        // OpenGraph
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/logo.png` },
        { property: 'og:site_name', content: 'Avatar Seven Havens Characters' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${siteUrl}/logo.png` },
      ],
      links: [
        { rel: 'canonical', href: siteUrl },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData),
        },
      ],
    };
  },
  component: HomePage,
});
