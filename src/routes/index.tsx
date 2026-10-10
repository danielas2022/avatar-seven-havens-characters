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
