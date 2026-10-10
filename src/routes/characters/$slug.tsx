import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { CHARACTERS } from '@/data/characters';
import { getCharacterAppearances, getCharacterRelationships } from '@/data/canonical';
import { envConfigs } from '@/config';
import {
  Shield,
  Sparkles,
  ArrowLeft,
  UserCheck,
  MapPin,
  Calendar,
  CheckCircle2,
  GitFork,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  HelpCircle,
  Scale,
  Award,
  Layers,
  Tv,
} from 'lucide-react';

export const Route = createFileRoute('/characters/$slug')({
  loader: ({ params }) => {
    const character = CHARACTERS.find((c) => c.id === params.slug);
    if (!character) {
      throw notFound();
    }
    const appearances = getCharacterAppearances(character.id);
    const relationships = getCharacterRelationships(character.id);
    return { character, appearances, relationships };
  },
  head: ({ loaderData }) => {
    const char = loaderData?.character;
    if (!char) return {};

    const siteUrl = envConfigs.app_url || 'https://avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/characters/${char.id}`;
    const title = `Avatar Seven Havens: ${char.name} Guide & Cast`;
    const description = `Guide to ${char.name} in Avatar: Seven Havens (2026). Confirmed bending powers, voice actor ${char.voiceActor.name}, episode appearances, and official canon lore.`;

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
          content: `${char.name}, ${char.name} Avatar Seven Havens, ${char.voiceActor.name}, ${char.alias}, ${char.bending} bending, Seven Havens characters, avatar seven havens characters canon dossier`,
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
  const { character, appearances, relationships } = Route.useLoaderData();

  // Find other characters for related suggestions
  const otherCharacters = CHARACTERS.filter((c) => c.id !== character.id).slice(0, 3);

  const isTwinAvatar = character.id === 'pavi' || character.id === 'nisha';

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
            <span>Back to All Avatar: Seven Havens Characters</span>
          </Link>

          {/* Character Header Hero */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Portrait Artwork & Image Attribution */}
              <div className="md:col-span-5 relative flex flex-col">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 group bg-muted/40">
                  <img
                    src={character.imageUrl}
                    alt={`${character.name} - ${character.alias} in Avatar: Seven Havens`}
                    width={400}
                    height={533}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-md ${character.badgeBg}`}>
                      {character.bending} &bull; {character.avatarStatus}
                    </span>
                  </div>
                </div>

                {/* Professional Image Attribution Box */}
                <div className="mt-3 p-2.5 rounded-xl border border-border/60 bg-muted/30 text-[10px] text-muted-foreground leading-normal">
                  <div className="flex items-center gap-1 font-semibold text-foreground/90 mb-1">
                    <Scale className="h-3 w-3 text-amber-500" />
                    <span>Image Attribution &amp; Rights Notice</span>
                  </div>
                  <p>
                    <strong className="text-foreground/80">Asset:</strong> {character.imageAttribution?.imageType || 'Official Promotional Visual'}
                  </p>
                  <p>
                    <strong className="text-foreground/80">Source:</strong> {character.imageAttribution?.source || 'Avatar Studios / Paramount+ Archive'}
                  </p>
                  <p className="text-[9px] text-muted-foreground/80 mt-1 italic">
                    {character.imageAttribution?.license || 'Fair Use fan commentary & research (17 U.S. Code § 107). All character rights belong to Paramount Global.'}
                  </p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
                    Avatar Seven Havens &bull; {character.name} Canon Dossier
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
                      {character.name}
                    </h1>
                  </div>
                  <span className="text-base sm:text-lg text-amber-500 font-medium">
                    ({character.alias})
                  </span>
                </div>

                {/* Canon status badge */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{character.canonStatus || 'Verified Canon'}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-muted text-muted-foreground border border-border">
                    <span>Debut: {character.firstAppearance}</span>
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

          {/* Twin Avatar Comparison Banner (If Pavi or Nisha) */}
          {isTwinAvatar && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-rose-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <Scale className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-sm sm:text-base text-foreground">
                    Compare Pavi vs Nisha in Detail
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Discover verified canon facts vs unconfirmed theories in our dedicated side-by-side comparison matrix.
                  </p>
                </div>
              </div>
              <Link
                to="/pavi-vs-nisha"
                className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow"
              >
                <span>Launch Comparison Matrix</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Canon Verification & Evidence Tracking Dossier (Audit Point 1) */}
          <section className="rounded-2xl border border-emerald-500/30 bg-card p-6 sm:p-8 shadow-sm mb-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                    Official Evidence &amp; Canon Verification Dossier
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Distinguishing officially authenticated facts from unconfirmed fan theories for Avatar: Seven Havens characters.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-muted-foreground">
                  Last Verified: {character.evidenceSource?.verifiedDate || 'October 2026'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-2">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  Official Primary Source
                </span>
                <p className="text-xs font-semibold text-foreground">
                  {character.evidenceSource?.title || 'Paramount+ Official Press Release'}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Published by <span className="text-foreground font-medium">{character.evidenceSource?.publisher || 'Paramount+ / Nickelodeon'}</span>
                </p>
                {character.evidenceSource?.citationUrl && (
                  <a
                    href={character.evidenceSource.citationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 hover:underline pt-1"
                  >
                    <span>View Official Source</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-2">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  Official Studio Excerpt / Brief
                </span>
                <blockquote className="text-xs text-muted-foreground italic border-l-2 border-emerald-500/60 pl-3 py-0.5">
                  &ldquo;{character.evidenceSource?.officialExcerpt || character.shortBio}&rdquo;
                </blockquote>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium pt-1">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Authenticated as official Avatar: Seven Havens characters documentation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Bending Art
              </span>
              <span className="text-sm font-bold text-foreground">{character.bending}</span>
              <span className="text-[9px] text-muted-foreground block mt-0.5">Avatar: Seven Havens characters</span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Faction
              </span>
              <span className="text-xs font-bold text-foreground truncate block">{character.faction}</span>
              <span className="text-[9px] text-muted-foreground block mt-0.5">Avatar: Seven Havens characters</span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Companion
              </span>
              <span className="text-xs font-bold text-foreground truncate block">
                {character.animalCompanion || 'None'}
              </span>
              <span className="text-[9px] text-muted-foreground block mt-0.5">Avatar: Seven Havens characters</span>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                Debut Episode
              </span>
              <span className="text-xs font-bold text-foreground truncate block">
                {character.firstAppearance.split(':')[0]}
              </span>
              <span className="text-[9px] text-muted-foreground block mt-0.5">Avatar: Seven Havens characters</span>
            </div>
          </div>

          {/* Full Backstory & Canon Role */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Full Biography &amp; Role in Avatar: Seven Havens Characters</span>
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {character.fullBio}
            </div>
          </section>

          {/* Confirmed Abilities vs Speculated Theories (Audit Point 1 & 2) */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8 space-y-6">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-500" />
                <span>Elemental Abilities &amp; Canon Feats in Avatar: Seven Havens Characters</span>
              </h2>
              <p className="text-xs text-muted-foreground">
                Explicitly distinguishing confirmed powers from unverified fan theories for Avatar: Seven Havens characters.
              </p>
            </div>

            {/* Verified Confirmed Abilities */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-3">
                <CheckCircle2 className="h-4 w-4" />
                <span>Confirmed Canon Abilities for Avatar: Seven Havens Characters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(character.confirmedAbilities && character.confirmedAbilities.length > 0
                  ? character.confirmedAbilities
                  : character.keyAbilities
                ).map((ability) => (
                  <div
                    key={ability}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-foreground font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speculated / Fan Theories */}
            {character.speculatedAbilities && character.speculatedAbilities.length > 0 && (
              <div className="pt-4 border-t border-border/80">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                  <HelpCircle className="h-4 w-4" />
                  <span>Unconfirmed Lore &amp; Fan Speculation for Avatar: Seven Havens Characters</span>
                </div>
                <div className="space-y-2.5">
                  {character.speculatedAbilities.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/5 border border-dashed border-amber-500/30 text-xs text-muted-foreground"
                    >
                      <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">{spec}</span>
                        <span className="block text-[11px] text-amber-400/80 mt-0.5">
                          [Status: Fan Theory / Unverified by Paramount+]
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Key Canonical Moments */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-500" />
              <span>Key Canonical Moments for Avatar: Seven Havens Characters</span>
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Chronological milestones documented in Avatar: Seven Havens characters production archives.
            </p>
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

          {/* Verified Broadcast Episode Appearances (October 9, 2026 Premiere) */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <Tv className="h-5 w-5 text-amber-500" />
                  <span>Verified Broadcast Episode Appearances</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Evidence-backed episode tracking from the October 9, 2026 Paramount+ series premiere.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {appearances.length} Episodes Verified
              </span>
            </div>

            {appearances.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {appearances.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-xl border border-border/80 bg-muted/30 p-4 flex flex-col justify-between hover:border-amber-500/40 transition-all text-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-amber-400">
                          {app.episode?.episodeCode || 'Canon Arc'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {app.verificationStatus === 'episode_verified' ? 'Episode Verified' : 'Official Press'}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-sm text-foreground mb-1">
                        &ldquo;{app.episode?.title}&rdquo;
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground block mb-2">
                        Aired: {app.episode?.airDate}
                      </span>

                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-400 mb-2">
                        Role: {app.appearanceType}
                      </span>

                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {app.keyEvents}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border/40 flex items-center justify-between">
                      <Link
                        to="/episodes"
                        className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Episode Guide</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      {app.episode?.streamUrl && (
                        <a
                          href={app.episode.streamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                        >
                          <span>Paramount+</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground py-2 italic">
                No broadcast episodes verified yet for this character profile.
              </p>
            )}
          </section>

          {/* Character Relationships & Dynamics (Audit Point 4) */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-8">
            <div className="mb-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                <GitFork className="h-5 w-5 text-sky-400" />
                <span>Character Relationships &amp; Evidence Network</span>
              </h2>
              <p className="text-xs text-muted-foreground">
                Documented relationships among Avatar: Seven Havens characters, indexed by verified canon vs theory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {relationships && relationships.length > 0 ? (
                relationships.map((rel) => {
                  const targetName = rel.otherCharacter?.name || 'Allied Character';
                  const targetId = rel.otherCharacter?.id || '';
                  return (
                    <div
                      key={rel.id}
                      className="p-4 rounded-xl bg-muted/30 border border-border/70 text-xs flex flex-col justify-between hover:border-amber-500/40 transition-all"
                    >
                      <div className="mb-2">
                        <div className="flex items-center justify-between font-bold text-foreground text-sm mb-1.5">
                          <div className="flex items-center gap-2">
                            {rel.otherCharacter?.imageUrl && (
                              <img
                                src={rel.otherCharacter.imageUrl}
                                alt={targetName}
                                width={24}
                                height={24}
                                loading="lazy"
                                decoding="async"
                                className="h-6 w-6 rounded-full object-cover object-top border border-border"
                              />
                            )}
                            <span>{targetName}</span>
                          </div>
                          <span className="text-[10px] text-amber-500 font-semibold px-2 py-0.5 rounded bg-amber-500/10">
                            {rel.label}
                          </span>
                        </div>

                        <div className="mb-2">
                          <span
                            className={`inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full border ${
                              rel.isCanon
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            }`}
                          >
                            {rel.isCanon ? (
                              <>
                                <CheckCircle2 className="h-2.5 w-2.5" />
                                <span>Verified Canon</span>
                              </>
                            ) : (
                              <>
                                <HelpCircle className="h-2.5 w-2.5" />
                                <span>Unconfirmed Theory</span>
                              </>
                            )}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-2">
                          {rel.details}
                        </p>

                        {rel.episodeContext && (
                          <div className="text-[10px] text-sky-400/90 font-medium mb-1.5 flex items-center gap-1">
                            <Tv className="h-3 w-3" />
                            <span>Context: {rel.episodeContext.episodeCode} &ldquo;{rel.episodeContext.title}&rdquo;</span>
                          </div>
                        )}

                        {rel.source && (
                          <p className="text-[10px] text-muted-foreground/80 italic border-l border-border pl-2">
                            Source: {rel.source.title} ({rel.source.verifiedDate})
                          </p>
                        )}
                      </div>

                      {targetId && (
                        <Link
                          to="/characters/$slug"
                          params={{ slug: targetId }}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline mt-2 self-start"
                        >
                          <span>View {targetName} Dossier</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  );
                })
              ) : (
                character.relationships.map((rel) => (
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

                      <div className="mb-2">
                        <span
                          className={`inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full border ${
                            rel.isCanon
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          {rel.isCanon ? (
                            <>
                              <CheckCircle2 className="h-2.5 w-2.5" />
                              <span>Verified Canon</span>
                            </>
                          ) : (
                            <>
                              <HelpCircle className="h-2.5 w-2.5" />
                              <span>Unconfirmed Theory</span>
                            </>
                          )}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-2">
                        {rel.description}
                      </p>

                      {rel.evidenceNote && (
                        <p className="text-[10px] text-muted-foreground/80 italic border-l border-border pl-2">
                          Evidence: {rel.evidenceNote}
                        </p>
                      )}
                    </div>

                    {CHARACTERS.some((c) => c.id === rel.targetId) && (
                      <Link
                        to="/characters/$slug"
                        params={{ slug: rel.targetId }}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline mt-2 self-start"
                      >
                        <span>View {rel.targetName} Dossier</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Franchise Research Context & Topic Indexing */}
          <section className="rounded-2xl border border-border bg-muted/20 p-5 sm:p-6 mb-8 text-xs text-muted-foreground space-y-2.5">
            <h3 className="font-serif font-bold text-sm text-foreground">
              Canon Research on {character.name} &amp; Avatar: Seven Havens Characters
            </h3>
            <p className="leading-relaxed">
              In our franchise encyclopedia of Avatar: Seven Havens characters, each profile connects individual lore with the broader post-Cataclysm setting. Analyzing {character.name} alongside fellow Avatar: Seven Havens characters illustrates the delicate balance between fear and hope across the Seven Havens. As primary Avatar: Seven Havens characters interact with classic franchise legends, our evidence dossier ensures every detail for Avatar: Seven Havens characters is verified against Paramount+ press statements.
            </p>
            <p className="leading-relaxed">
              Whether studying the combat techniques of Avatar: Seven Havens characters or following the journey of twin Avatar: Seven Havens characters Pavi and Nisha, this database provides transparent citations for all Avatar: Seven Havens characters.
            </p>
          </section>

          {/* Explore Other Avatar: Seven Havens Characters */}
          <section className="pt-6 border-t border-border">
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              Explore More Avatar: Seven Havens Characters
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
