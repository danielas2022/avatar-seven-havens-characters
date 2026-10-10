import { Film, Play, Sparkles, Clock, ExternalLink } from 'lucide-react';

export function TrailerSection() {
  const trailerKeyScenes = [
    {
      timestamp: '0:18',
      title: 'The Cataclysmic Ruins of Republic City',
      description: 'First panoramic look at the overgrown, sunken metal spires of the ancient metropolis 225 years after Korra.'
    },
    {
      timestamp: '0:45',
      title: 'The Sandstorm Breach at Haven Ellora',
      description: 'Pavi inadvertently summons stone pillars and compressed air to shield market civilians from a spirit squall.'
    },
    {
      timestamp: '1:12',
      title: 'The Twin Avatar Resonance',
      description: 'Pavi and Nisha meet in the dark viaduct—their hands touch, igniting a blinding dual-colored elemental beacon.'
    },
    {
      timestamp: '1:48',
      title: 'The Shadow Beast Pursues',
      description: 'A colossal tendriled spirit monster erupts from the salt flat fissure as Jae pilots the group’s glider to safety.'
    }
  ];

  return (
    <section id="trailer" className="py-16 md:py-24 border-b border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3">
            <Film className="h-3.5 w-3.5" />
            <span>Official Media & Teaser Analysis</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Official Trailer Featuring Avatar: Seven Havens Characters
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Watch the official Paramount+ trailer revealing Avatar: Seven Havens characters Pavi, Nisha, and Jae navigating the Seven Havens.
          </p>
        </div>

        {/* Video Player & Breakdown Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* 16:9 Video Embed Player (Takes 2 Columns) */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-black/90 overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center group">
            {/* Embedded Paramount+ / Avatar Legends official YouTube trailer */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/ytauJfsyCE4?controls=1&rel=0" 
              title="Avatar: Seven Havens Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Key Scenes Breakdown */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-md flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-400" />
                <span>Trailer Scene Guide</span>
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Key lore clues and character debuts revealed in the preview footage:
              </p>

              <div className="space-y-3">
                {trailerKeyScenes.map((scene) => (
                  <div key={scene.timestamp} className="p-2.5 rounded-lg bg-muted/40 border border-border/50 text-xs">
                    <div className="flex items-center justify-between font-semibold text-foreground mb-1">
                      <span className="text-rose-400 font-mono text-[11px]">{scene.timestamp}</span>
                      <span className="text-[11px] font-bold text-right truncate ml-2">{scene.title}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {scene.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <a
                href="https://www.paramountplus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-sm"
              >
                <span>Stream on Paramount+</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
