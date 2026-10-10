import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { CHARACTERS } from '@/data/characters';
import { envConfigs } from '@/config';
import {
  Shield,
  Sparkles,
  ArrowLeft,
  UserCheck,
  Compass,
  MapPin,
  Film,
  Calendar,
  CheckCircle2,
  GitFork,
  ArrowRight,
  Flame,
} from 'lucide-react';

export const Route = createFileRoute('/characters/$slug')({
  loader: ({ params }) => {
    const character = CHARACTERS.find((c) => c.id === params.slug);
    if (!character) {
      throw notFound();
    }
    return { character };
  },
  head: ({ loaderData }) => {
    const char = loaderData?.character;
    if (!char) return {};

    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/characters/${char.id}`;
    const title = `${char.name} (${char.alias}) | Avatar: Seven Havens Character Profile`;
    const description = `${char.name} in Avatar: Seven Havens (Paramount+ 2026). Voiced by ${char.voiceActor.name}. Bending: ${char.bending}. Discover ${char.name}'s backstory, key abilities, relationships, and role.`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: title,
      url: pageUrl,
      description,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Characters',
            item: `${siteUrl}/#characters`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: char.name,
            item: pageUrl,
          },
        ],
      },
      mainEntity: {
        '@type': 'Person',
        name: char.name,
        alternateName: char.alias,
        description: char.shortBio,
        jobTitle: char.avatarStatus,
      },
    };

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content: `${char.name}, ${char.name} Avatar Seven Havens, ${char.voiceActor.name}, ${char.alias}, ${char.bending} bending, Seven Havens characters`,
        },
        // OpenGraph
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: pageUrl },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [{ rel: 'canonical', href: pageUrl }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },
  component: CharacterDetailPage,
});

function CharacterDetailPage() {
  const { character } = Route.useLoaderData();

  // Find other characters for related suggestions
  const otherCharacters = CHARACTERS.filter((c) => c.id !== character.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-amber-500/20 selection:text-amber-400">
      <SiteHeader />

      <main className="flex-1 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <a href="/#characters" className="hover:text-foreground transition-colors">
              Characters
            </a>
            <span>/</span>
            <span className="text-foreground font-medium">{character.name}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mb-6 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Characters</span>
          </Link>

          {/* Character Header Hero */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Portrait Artwork */}
              <div className="md:col-span-5 relative">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 group bg-muted/40">
                  <img
                    src={character.imageUrl}
                    alt={`${character.name} - ${character.alias}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-md ${character.badgeBg}`}>
                      {character.bending} &bull; {character.avatarStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Character Details */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-amber-500" />
                    <span>{character.homeHaven}</span>
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {character.age || 'Avatar Franchise'}
                  </span>
                </div>

                <div className="mb-3">
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
                    {character.name}
                  </h1>
                  <span className="text-base sm:text-lg text-amber-500 font-medium">
                    ({character.alias})
                  </span>
                </div>

                {/* Voice actor pill */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 bg-muted/50 border border-border/60 px-3.5 py-2 rounded-xl mb-4 max-w-fit">
                  <UserCheck className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>
                    Voiced by <strong className="text-foreground">{character.voiceActor.name}</strong> ({character.voiceActor.notableRole})
                  </span>
                </div>

                {/* Quote block */}
                <blockquote className="italic text-xs sm:text-sm text-foreground/90 border-l-3 border-amber-500 pl-4 py-1.5 mb-5 bg-amber-500/5 rounded-r">
                  &ldquo;{character.quote}&rdquo;
                </blockquote>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {character.shortBio}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Bending Art
              </span>
              <span className="text-sm font-bold text-foreground">{character.bending}</span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Faction
              </span>
              <span className="text-xs font-bold text-foreground truncate block">{character.faction}</span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Companion
              </span>
              <span className="text-xs font-bold text-foreground truncate block">
                {character.animalCompanion || 'None'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Debut
              </span>
              <span className="text-xs font-bold text-foreground truncate block">
                {character.firstAppearance.split(':')[0]}
              </span>
            </div>
          </div>

          {/* Full Backstory & Canon Role */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Full Biography & Role in Seven Havens</span>
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {character.fullBio}
            </div>
          </section>

          {/* Key Elemental Abilities & Techniques */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-amber-500" />
              <span>Key Abilities & Elemental Techniques</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {character.keyAbilities.map((ability) => (
                <div
                  key={ability}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/50 text-xs text-foreground font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>{ability}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Canonical Moments */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-500" />
              <span>Key Moments in Book 1</span>
            </h2>
            <div className="space-y-2.5">
              {character.keyMoments.map((moment, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-muted/30 border border-border/60 text-xs text-muted-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono text-amber-500 font-bold text-xs mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{moment}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Character Relationships */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <GitFork className="h-5 w-5 text-sky-400" />
              <span>Character Relationships & Dynamics</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {character.relationships.map((rel) => (
                <div
                  key={rel.targetId}
                  className="p-4 rounded-xl bg-muted/30 border border-border/70 text-xs flex flex-col justify-between"
                >
                  <div className="mb-2">
                    <div className="flex items-center justify-between font-bold text-foreground text-sm mb-1">
                      <span>{rel.targetName}</span>
                      <span className="text-[10px] text-amber-500 font-semibold px-2 py-0.5 rounded bg-amber-500/10">
                        {rel.relation}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  {CHARACTERS.some((c) => c.id === rel.targetId) && (
                    <Link
                      to="/characters/$slug"
                      params={{ slug: rel.targetId }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline mt-2 self-start"
                    >
                      <span>View {rel.targetName}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Explore Other Characters */}
          <section className="pt-6 border-t border-border">
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              Explore More Characters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {otherCharacters.map((other) => (
                <Link
                  key={other.id}
                  to="/characters/$slug"
                  params={{ slug: other.id }}
                  className="p-3.5 rounded-xl border border-border/80 bg-card hover:border-amber-500/50 hover:bg-muted/30 transition-all text-xs group"
                >
                  <div className="font-bold text-foreground text-sm group-hover:text-amber-500 transition-colors mb-0.5">
                    {other.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground mb-1">
                    {other.alias}
                  </div>
                  <span className="text-[10px] text-amber-500 font-medium">
                    {other.bending} Bending &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
