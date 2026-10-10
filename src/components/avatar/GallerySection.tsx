import { useState } from 'react';
import { Sparkles, Eye, ZoomIn, Layers, X, Info, Download, ShieldCheck } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Canon Concept Art' | 'Character Turnarounds' | 'Official Reveal' | 'World & Lore';
  imageUrl: string;
  description: string;
  productionNote: string;
  source: string;
}

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const galleryItems: GalleryItem[] = [
    {
      id: 'trio-key-scene',
      title: 'The Core Trio: Jae, Pavi & Horned Lynx Mount',
      subtitle: 'Official Color Animation Key Still',
      category: 'Official Reveal',
      imageUrl: '/imgs/canon/trio-key-scene.png',
      description: 'The landmark full-color animation still showing Jae in his crimson cowl, Pavi in her yellow-and-green robes, and their loyal lynx-eared beast companion with diamond markings set against the crystalline spires of Haven Ellora.',
      productionNote: 'First full-color production frame confirming the core cast relationship: Jae serves as military shield and elder brother figure to the young Avatar Pavi.',
      source: 'Avatar Studios / Paramount+ Production Key Still',
    },
    {
      id: 'pavi-spirits',
      title: 'Pavi with Spirit Korra & Spirit Aang',
      subtitle: 'Official Promotional Art with Past Avatar Guides',
      category: 'Official Reveal',
      imageUrl: '/imgs/canon/pavi-spirits-official.png',
      description: 'The historic reveal art showcasing 9-year-old Earth Avatar Pavi holding an ancient parchment, flanked by the towering ethereal spirit manifestations of Avatar Korra and Avatar Aang.',
      productionNote: 'Confirms that despite the 225-year time gap and the post-Korra Cataclysm, Pavi maintains spiritual continuity with past Avatars. Raava’s light bridges the generations.',
      source: 'Avatar Studios / Paramount+ Official Reveal',
    },
    {
      id: 'mount-expedition',
      title: 'Haven Canyon Mount Expedition',
      subtitle: 'Pavi & Jae Wasteland Patrol Landscape',
      category: 'World & Lore',
      imageUrl: '/imgs/canon/expedition-landscape.png',
      description: 'Atmospheric production artwork showing Pavi mounted upon her armored beast companion while Jae walks beside with his scout spear, surveying the red canyon wastes under an auroral sky.',
      productionNote: 'Demonstrates the desolate beauty of the post-Cataclysm environment outside the protective haven domes.',
      source: 'Avatar Studios Environment & Travel Concept',
    },
    {
      id: 'height-comparison',
      title: 'Jae & Pavi Height Turnaround Comparison',
      subtitle: 'Official Character Scale & Proportion Model Sheet',
      category: 'Character Turnarounds',
      imageUrl: '/imgs/canon/height-comparison.png',
      description: 'Essential production scale comparison sheet establishing the relative sizes of 19-year-old Airbender officer Jae in garrison armor and 9-year-old Earth Avatar Pavi in nomad travel clothes.',
      productionNote: 'Used by animation directors to maintain strict proportion and perspective consistency between adult benders and child avatars.',
      source: 'Nickelodeon Animation Model Turnaround Sheet',
    },
    {
      id: 'pavi-sketches',
      title: 'Pavi Turnarounds & Mount Sketches',
      subtitle: 'Early Animation Model Turnarounds & Creature Studies',
      category: 'Canon Concept Art',
      imageUrl: '/imgs/canon/mount-expedition.png',
      description: 'Pre-production model sheet illustrating Pavi’s martial arts poses, balance turnaround, and creature anatomy studies alongside the desert landscape concept.',
      productionNote: 'Shows the visual development team refining Pavi’s earthen stances and mount riding ergonomics.',
      source: 'Avatar Studios Visual Development Archive',
    },
    {
      id: 'jae-turnaround',
      title: 'Jae Airbender Officer Model Sheet',
      subtitle: 'Official Turnaround & Costume Design',
      category: 'Character Turnarounds',
      imageUrl: '/imgs/canon/jae-official-design.png',
      description: 'Full animation model turnaround of Jae, the 17-year-old Airbender officer from Haven Ellora. Highlights his crimson cowl, fur-lined pauldrons, combat boots, and aerodynamic flight posture.',
      productionNote: 'Jae’s design blends traditional Air Nomad silhouette with rugged post-apocalyptic Haven survivor armor, reflecting his role as city guard protector turned fugitive ally.',
      source: 'Nickelodeon Animation Production Leak / Model Sheet',
    },
    {
      id: 'announcement-lineup',
      title: 'Nickelodeon Official Series Announcement',
      subtitle: 'Paramount+ Official Press Lineup Card',
      category: 'Official Reveal',
      imageUrl: '/imgs/canon/announcement-card.png',
      description: 'Official promotional announcement card confirming Avatar: Seven Havens as the official sequel in the Avatar: The Last Airbender universe set 225 years after The Legend of Korra.',
      productionNote: 'Press confirmation that introduced the Seven Havens setting to the global fandom.',
      source: 'Paramount+ / Nickelodeon Press Kit',
    },
    {
      id: 'twin-resonance-poster',
      title: 'The Twin Avatar Duality Poster',
      subtitle: 'Fractured Raava Cycle Key Visual',
      category: 'Canon Concept Art',
      imageUrl: '/imgs/trailer-poster.png',
      description: 'Key promotional artwork capturing the ideological and elemental clash between Pavi’s grounded earthen defense and Nisha’s incandescent multi-element fury.',
      productionNote: 'Color palette specifically contrasts amber-gold (Earth Haven) with burning crimson-violet (Cataclysm Spirit Energy).',
      source: 'Paramount+ Key Marketing Asset',
    },
  ];

  const categories = ['All', 'Official Reveal', 'Character Turnarounds', 'Canon Concept Art', 'World & Lore'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 border-b border-border/40 bg-muted/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Official Art &amp; Leaked Design Archives</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Production Art &amp; Character Model Sheets
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Explore authentic canon artwork from Paramount+ and Avatar Studios, including character turnarounds for Pavi and Jae, past Avatar spirit guides, and environmental concept stills.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm font-semibold'
                    : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-black/60 text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <h3 className="font-serif text-base font-bold text-white drop-shadow truncate group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-300 drop-shadow truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-4 pt-3">
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 pb-3 pt-0 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/40 mt-1 pt-2">
                <span className="truncate max-w-[180px] font-mono text-[10px] text-amber-500/80">
                  {item.source}
                </span>
                <span className="font-medium text-foreground group-hover:text-amber-500 flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>Inspect</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox Dialog */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl border border-amber-500/40 bg-card overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large Image Preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/90 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-600/90 text-white shadow-md backdrop-blur-md flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>{selectedItem.category}</span>
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-64 sm:max-h-52 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-500 font-semibold">
                      {selectedItem.subtitle}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md self-start sm:self-auto">
                    Source: {selectedItem.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-4">
                  {selectedItem.description}
                </p>

                {/* Production Trivia Callout */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                  <Info className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-500 block mb-0.5">
                      Animation Production Context:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {selectedItem.productionNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
