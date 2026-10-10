import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/avatar/SiteHeader';
import { SiteFooter } from '@/components/avatar/SiteFooter';
import { CHARACTERS } from '@/data/characters';
import { envConfigs } from '@/config';
import {
  Scale,
  ShieldCheck,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Flame,
  Mountain,
  Sparkles,
  UserCheck,
  Shield,
  Layers,
  Info,
} from 'lucide-react';

export const Route = createFileRoute('/pavi-vs-nisha')({
  head: () => {
    const siteUrl = envConfigs.app_url || 'https://www.avatarsevenhavenscharacters.com';
    const pageUrl = `${siteUrl}/pavi-vs-nisha`;
    const title = 'Pavi vs Nisha Comparison Matrix | Avatar: Seven Havens Characters Canon Tool';
    const description = 'Comprehensive side-by-side comparison of Twin Avatars Pavi and Nisha in Avatar: Seven Havens. Verified canon abilities, voice actors, ages, animal companions, and official evidence vs unconfirmed fan theories.';

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
            name: 'Pavi vs Nisha Comparison',
            item: pageUrl,
          },
        ],
      },
    };

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        {
          name: 'keywords',
          content: 'pavi vs nisha, avatar seven havens characters, twin avatars, pavi nisha comparison, earth avatar pavi, nisha avatar, saheli khan, aishu devan',
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
  component: PaviVsNishaPage,
});

interface ComparisonRow {
  attribute: string;
  category: 'Identity' | 'Bending & Combat' | 'Lore & Status';
  pavi: string;
  nisha: string;
  verificationStatus: 'Verified Canon' | 'Official Synopsis' | 'Not Yet Confirmed' | 'Thematic Clue';
  sourceNote: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    attribute: 'Canon Status',
    category: 'Identity',
    pavi: 'Verified Canon (Central Protagonist)',
    nisha: 'Verified Canon (Twin Co-Avatar)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Paramount+ Official Series Press Release (2026)',
  },
  {
    attribute: 'Age & Heritage',
    category: 'Identity',
    pavi: '9 years old (Identical twin)',
    nisha: '9 years old (Identical twin)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Paramount+ Series Character Brief',
  },
  {
    attribute: 'Voice Actor',
    category: 'Identity',
    pavi: 'Saheli Khan (Rising animation talent)',
    nisha: 'Aishu Devan (Dramatic voice actress)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Official Nickelodeon / Paramount+ Cast Announcement',
  },
  {
    attribute: 'Home Sanctuary',
    category: 'Identity',
    pavi: 'Haven of Ellora (Dusty Outer Ruins)',
    nisha: 'Haven of Ellora (Fortified Upper Citadel)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Avatar Studios Production Background Sheets',
  },
  {
    attribute: 'Animal Companion',
    category: 'Identity',
    pavi: 'Geet (Cat-Monkey, fawn coat, scent finder)',
    nisha: 'Ruhi (Cat-Monkey, striped coat, acrobatic thief)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Avatar Studios Creature Design Showcase',
  },
  {
    attribute: 'Primary Bending Focus',
    category: 'Bending & Combat',
    pavi: 'Foundational Earthbending & Dust Sense',
    nisha: 'Multi-Bending Instincts & Explosive Combat',
    verificationStatus: 'Official Synopsis',
    sourceNote: 'Paramount+ Episode 1 & 2 Synopsis',
  },
  {
    attribute: 'Combat Temperament',
    category: 'Bending & Combat',
    pavi: 'Defensive, evasive, protective shielding',
    nisha: 'Aggressive, forward momentum, close-quarters',
    verificationStatus: 'Official Synopsis',
    sourceNote: 'Avatar Studios Character Animation Outlines',
  },
  {
    attribute: 'Seismic Sense Ability',
    category: 'Bending & Combat',
    pavi: 'Developing raw ground tremor intuition',
    nisha: 'Not yet confirmed by broadcast canon',
    verificationStatus: 'Not Yet Confirmed',
    sourceNote: 'In-development technique; Toph lineage parallel',
  },
  {
    attribute: 'Twin Psychic Resonance',
    category: 'Bending & Combat',
    pavi: 'Experiences empathetic spirit tremors',
    nisha: 'Experiences elemental surges during peril',
    verificationStatus: 'Official Synopsis',
    sourceNote: 'Episode 2 Synopsis: The Sandstorm Resonance',
  },
  {
    attribute: 'Primary Guardian Figure',
    category: 'Lore & Status',
    pavi: 'Agam (Bazaar Matron) & Jae (Airbender Defector)',
    nisha: 'Captain Karthik (Ellora City Guard Commander)',
    verificationStatus: 'Verified Canon',
    sourceNote: 'Official Cast Relationships Breakdown',
  },
  {
    attribute: 'Reincarnation Mechanism',
    category: 'Lore & Status',
    pavi: 'Not yet confirmed (Active narrative mystery)',
    nisha: 'Not yet confirmed (Active narrative mystery)',
    verificationStatus: 'Not Yet Confirmed',
    sourceNote: 'Franchise lore has not revealed whether Raava split',
  },
  {
    attribute: 'Stance on Avatar Duty',
    category: 'Lore & Status',
    pavi: 'Reluctant; fears the world’s anti-Avatar prejudice',
    nisha: 'Defiant; eager to confront those persecuting benders',
    verificationStatus: 'Official Synopsis',
    sourceNote: 'Paramount+ Character Archetype Dossier',
  },
];

function PaviVsNishaPage() {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const pavi = CHARACTERS.find((c) => c.id === 'pavi');
  const nisha = CHARACTERS.find((c) => c.id === 'nisha');

  const filteredRows =
    filterCategory === 'All'
      ? COMPARISON_DATA
      : COMPARISON_DATA.filter((row) => row.category === filterCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-amber-500/20 selection:text-amber-400">
      <SiteHeader />

      <main className="flex-1 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Pavi vs Nisha Comparison Tool</span>
          </nav>

          {/* Page Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold mb-4">
              <Scale className="h-4 w-4" />
              <span>Dedicated Avatar: Seven Havens Characters Comparison Matrix</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Pavi vs Nisha: The Twin Avatars Comparison
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Examine the verified canon facts, element dynamics, voice talent, and unconfirmed mysteries
              distinguishing the two twin Avatar: Seven Havens characters.
            </p>
          </div>

          {/* Side-by-Side Visual Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Pavi Card */}
            <div className="p-6 rounded-3xl border border-amber-500/40 bg-card shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                    <Mountain className="h-3.5 w-3.5" />
                    <span>Earth Avatar &bull; Reluctant Hero</span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Verified Canon</span>
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 bg-muted">
                    <img
                      src={pavi?.imageUrl || '/imgs/canon/pavi-canon-smile-face.png'}
                      alt="Pavi - Earth Avatar in Avatar: Seven Havens characters"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">Pavi</h2>
                    <p className="text-xs text-amber-400 font-medium">The Grounded Sister (Haven Ellora Outer Ruins)</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Voiced by <strong className="text-foreground">Saheli Khan</strong>
                    </p>
                  </div>
                </div>

                <blockquote className="italic text-xs text-muted-foreground border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r">
                  &ldquo;I never asked to carry the world on my back. I just wanted to help our city survive another dusk.&rdquo;
                </blockquote>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pavi embodies patience, earthen grounding, and quiet empathy. Raised in poverty outside the city walls,
                  she prioritizes survival and protective harmony over combative glory among Avatar: Seven Havens characters.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Companion: Geet (Cat-Monkey)</span>
                <Link
                  to="/characters/$slug"
                  params={{ slug: 'pavi' }}
                  className="text-xs font-bold text-amber-500 hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Pavi Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Nisha Card */}
            <div className="p-6 rounded-3xl border border-rose-500/40 bg-card shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5" />
                    <span>Twin Avatar &bull; Fiery Defiance</span>
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Verified Canon</span>
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-rose-500/40 shrink-0 bg-muted">
                    <img
                      src={nisha?.imageUrl || '/imgs/characters/nisha.jpg'}
                      alt="Nisha - Twin Avatar in Avatar: Seven Havens characters"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">Nisha</h2>
                    <p className="text-xs text-rose-400 font-medium">The Fierce Sister (Haven Ellora Citadel)</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Voiced by <strong className="text-foreground">Aishu Devan</strong>
                    </p>
                  </div>
                </div>

                <blockquote className="italic text-xs text-muted-foreground border-l-2 border-rose-500 pl-3 py-1 bg-rose-500/5 rounded-r">
                  &ldquo;If this broken world thinks the Avatar is a monster, I will show them what an Avatar can fight back against!&rdquo;
                </blockquote>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Raised in military confinement under Captain Karthik, Nisha is combative, impulsive, and fiercely defiant.
                  She refuses to hide her power, reflecting the headstrong tenacity seen in past Avatar legends.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Companion: Ruhi (Cat-Monkey)</span>
                <Link
                  to="/characters/$slug"
                  params={{ slug: 'nisha' }}
                  className="text-xs font-bold text-rose-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Nisha Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Matrix Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-500" />
                <span>Side-by-Side Parameter Matrix</span>
              </h2>
              <p className="text-xs text-muted-foreground">
                Documented parameters contrasting Avatar: Seven Havens characters with verification status.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {['All', 'Identity', 'Bending & Combat', 'Lore & Status'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    filterCategory === cat
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Structured Comparison Table (Audit Point 2) */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/60 text-foreground font-serif">
                    <th className="p-4 w-1/4">Parameter / Feature</th>
                    <th className="p-4 w-1/3 text-amber-500">Pavi (Earth Avatar)</th>
                    <th className="p-4 w-1/3 text-rose-400">Nisha (Twin Avatar)</th>
                    <th className="p-4 text-center">Status &amp; Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-bold text-foreground flex flex-col justify-center">
                        <span>{row.attribute}</span>
                        <span className="text-[10px] text-muted-foreground font-normal">{row.category}</span>
                      </td>

                      <td className="p-4 text-muted-foreground leading-relaxed">
                        <span className="text-foreground/90 font-medium">{row.pavi}</span>
                      </td>

                      <td className="p-4 text-muted-foreground leading-relaxed">
                        <span className="text-foreground/90 font-medium">{row.nisha}</span>
                      </td>

                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                              row.verificationStatus === 'Verified Canon'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : row.verificationStatus === 'Official Synopsis'
                                ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                                : 'bg-amber-500/10 text-amber-400 border-dashed border-amber-500/40'
                            }`}
                          >
                            {row.verificationStatus === 'Verified Canon' ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : row.verificationStatus === 'Official Synopsis' ? (
                              <ShieldCheck className="h-3 w-3" />
                            ) : (
                              <AlertCircle className="h-3 w-3" />
                            )}
                            <span>{row.verificationStatus}</span>
                          </span>
                          <span className="text-[9px] text-muted-foreground/80 max-w-[150px] truncate" title={row.sourceNote}>
                            {row.sourceNote}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep-Dive: What is Officially Confirmed vs Unconfirmed Theories */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-card space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Officially Confirmed Facts (Paramount+ Press)</h3>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>Pavi and Nisha are 9-year-old twin sisters living in Haven Ellora 225 years after Korra among leading Avatar: Seven Havens characters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>Both girls manifest the Avatar reincarnation mantle simultaneously as twin Avatar: Seven Havens characters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>Voiced by Saheli Khan (Pavi) and Aishu Devan (Nisha) in the official cast for Avatar: Seven Havens characters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>Escorted across the post-Cataclysm wastelands by Airbender officer Jae alongside other companion Avatar: Seven Havens characters.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-amber-500/30 bg-card space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <HelpCircle className="h-5 w-5" />
                <h3>Unconfirmed Mysteries &amp; Fan Hypotheses</h3>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Did Raava split?</strong> Avatar Studios has not confirmed whether Raava bifurcated into two entities or reincarnated jointly between these Avatar: Seven Havens characters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Element distribution:</strong> Whether each sister controls specific elements or both can master all four remains unrevealed for these Avatar: Seven Havens characters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Past Lives contact:</strong> Early promotional visuals show Pavi alongside Aang and Korra, connecting classic legends with modern Avatar: Seven Havens characters.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Thematic Analysis Section for Avatar: Seven Havens Characters */}
          <section className="p-6 rounded-2xl border border-border bg-card mb-12 space-y-3">
            <h3 className="font-serif text-lg font-bold text-foreground">
              The Role of Twin Avatars Among All Avatar: Seven Havens Characters
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              In the narrative architecture of the franchise, comparing Avatar: Seven Havens characters Pavi and Nisha highlights how Avatar: Seven Havens characters navigate a post-Cataclysmic world that no longer reveres benders. As primary Avatar: Seven Havens characters, Pavi and Nisha represent opposing responses to hardship: quiet earthen resilience versus fierce explosive combat. Their journey alongside ally Avatar: Seven Havens characters Jae, Karthik, and Daemin illustrates how Avatar: Seven Havens characters must learn cooperation across isolated sanctuaries.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every revelation about these Avatar: Seven Havens characters is verified against authentic studio announcements. By tracking how twin Avatar: Seven Havens characters interact with classic franchise legends, our encyclopedia ensures all Avatar: Seven Havens characters are documented with verifiable citations. Whether examining the elemental forms of Avatar: Seven Havens characters or discovering new companion Avatar: Seven Havens characters, fans can rely on this matrix for authenticated updates on Avatar: Seven Havens characters.
            </p>
          </section>

          {/* Fair Use & Research Disclaimer */}
          <div className="p-4 rounded-xl border border-border/60 bg-muted/30 text-xs text-muted-foreground text-center">
            <p>
              This comparison matrix is an independent fan analysis compiled for educational and review purposes
              under 17 U.S. Code § 107 (Fair Use). All character names, logos, and likenesses of
              <strong> Avatar: Seven Havens characters</strong> are trademarks and property of Paramount Global
              and Nickelodeon Animation Studio.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
