import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  GitFork,
  Sparkles,
  Info,
  ArrowRight,
  ShieldCheck,
  Heart,
  User,
  ExternalLink,
  Mountain,
  Flame,
  Wind,
  Droplets,
  HelpCircle,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { RELATIONSHIP_NODES, RELATIONSHIP_EDGES, GraphNode } from '@/data/relationships';
import { CHARACTERS } from '@/data/characters';

export function RelationshipChart() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('pavi');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const selectedNode =
    RELATIONSHIP_NODES.find((n) => n.id === selectedNodeId) || RELATIONSHIP_NODES[0];
  const selectedCharacter = CHARACTERS.find((c) => c.id === selectedNodeId);

  // Filter nodes based on category
  const filteredNodes =
    activeCategory === 'All'
      ? RELATIONSHIP_NODES
      : activeCategory === 'Avatars'
      ? RELATIONSHIP_NODES.filter((n) => n.category === 'avatars')
      : activeCategory === 'Brigade'
      ? RELATIONSHIP_NODES.filter((n) => n.category === 'brigade')
      : activeCategory === 'Legends'
      ? RELATIONSHIP_NODES.filter((n) => n.category === 'legends')
      : RELATIONSHIP_NODES.filter(
          (n) => n.category === 'haven' || n.category === 'companions' || n.category === 'antagonists'
        );

  // Find all edges connected to selected node
  const activeEdges = RELATIONSHIP_EDGES.filter(
    (e) => e.source === selectedNodeId || e.target === selectedNodeId
  );

  // Element icon helper
  const renderElementIcon = (element: string) => {
    if (element.includes('Earth')) return <Mountain className="h-3 w-3 text-amber-500" />;
    if (element.includes('Fire')) return <Flame className="h-3 w-3 text-rose-500" />;
    if (element.includes('Air')) return <Wind className="h-3 w-3 text-sky-400" />;
    if (element.includes('Water')) return <Droplets className="h-3 w-3 text-cyan-400" />;
    return <Sparkles className="h-3 w-3 text-purple-400" />;
  };

  return (
    <section id="relationships" className="py-16 md:py-24 border-b border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <GitFork className="h-3.5 w-3.5" />
            <span>Interactive Visual Network</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Avatar: Seven Havens Characters Relationship Map
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Explore the dynamic alliances, twin spiritual bonds, military protection squads, and historical legends
            connecting official Avatar: Seven Havens characters across the Seven Havens. Click any character avatar to inspect evidence-backed bonds.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Avatars', 'Brigade', 'Legends', 'Haven & Allies'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Visual Constellation Map (8 Cols on Desktop) */}
          <div className="lg:col-span-8 rounded-3xl border border-border bg-gradient-to-br from-card/95 via-background to-card/90 backdrop-blur-md p-4 sm:p-6 relative overflow-hidden shadow-2xl min-h-[520px] sm:min-h-[620px] flex flex-col justify-between">
            {/* Ambient Lighting Gradients */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-12 w-72 h-72 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 left-1/3 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

            {/* Subtle Star / Constellation Grid Watermark */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px]"
              aria-hidden="true"
            />

            {/* Top Bar Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 pb-3 border-b border-border/50 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-foreground">Interactive Constellation</span>
                <span className="text-[11px] text-muted-foreground">&bull; Click any character to focus</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>Earth</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>Fire</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  <span>Air</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  <span>Water</span>
                </span>
              </div>
            </div>

            {/* Visual Canvas Area */}
            <div className="relative w-full flex-1 min-h-[440px] sm:min-h-[500px]">
              {/* SVG Underlying Connections Layer */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Glowing gradients for bonds */}
                  <linearGradient id="twinEnergyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>

                  <linearGradient id="airProtectorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>

                  <linearGradient id="spiritGuideGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Connecting Edges */}
                {RELATIONSHIP_EDGES.map((edge) => {
                  const source = RELATIONSHIP_NODES.find((n) => n.id === edge.source);
                  const target = RELATIONSHIP_NODES.find((n) => n.id === edge.target);
                  if (!source || !target) return null;

                  const isConnected =
                    edge.source === selectedNodeId || edge.target === selectedNodeId;

                  // Smooth quadratic curve midpoint calculation
                  const midX = (source.x + target.x) / 2;
                  const midY = (source.y + target.y) / 2 - (edge.type === 'twin' ? 4 : 2);
                  const pathData = `M ${source.x} ${source.y} Q ${midX} ${midY} ${target.x} ${target.y}`;

                  let strokeColor = '#71717a';
                  if (isConnected) {
                    if (edge.type === 'twin') strokeColor = 'url(#twinEnergyGlow)';
                    else if (edge.source === 'jae' || edge.target === 'jae')
                      strokeColor = 'url(#airProtectorGlow)';
                    else if (edge.source === 'korra' || edge.source === 'aang')
                      strokeColor = 'url(#spiritGuideGlow)';
                    else strokeColor = '#38bdf8';
                  }

                  return (
                    <g key={edge.id} className="transition-all duration-500">
                      {/* Active Outer Glow Path */}
                      {isConnected && (
                        <path
                          d={pathData}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={edge.type === 'twin' ? '2.4' : '1.8'}
                          className="opacity-40 blur-[1px]"
                        />
                      )}

                      {/* Main Stroke Path */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={
                          isConnected ? (edge.type === 'twin' ? '1.5' : '1.0') : '0.4'
                        }
                        strokeDasharray={
                          edge.type === 'guardian'
                            ? '2,2'
                            : isConnected && edge.type === 'twin'
                            ? '4,2'
                            : undefined
                        }
                        className={isConnected ? 'opacity-100' : 'opacity-25'}
                      />

                      {/* Mid-point Relationship Chip on Active Connections */}
                      {isConnected && (
                        <g>
                          <rect
                            x={midX - 7}
                            y={midY - 2}
                            width="14"
                            height="4"
                            rx="1.5"
                            fill="#18181b"
                            stroke={strokeColor}
                            strokeWidth="0.3"
                            className="opacity-95"
                          />
                          <text
                            x={midX}
                            y={midY + 0.8}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="1.8"
                            fontWeight="bold"
                            className="select-none tracking-tight"
                          >
                            {edge.label}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* HTML Interactive Character Node Tokens Layer */}
              <div className="absolute inset-0 pointer-events-none">
                {filteredNodes.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isNeighbor = activeEdges.some(
                    (e) => e.source === node.id || e.target === node.id
                  );

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer pointer-events-auto transition-transform duration-300 ${
                        isSelected
                          ? 'scale-115 z-30'
                          : isNeighbor
                          ? 'scale-105 z-20'
                          : 'opacity-85 hover:opacity-100 hover:scale-110 z-10'
                      }`}
                    >
                      {/* Avatar Shield & Portrait Photo */}
                      <div className="relative">
                        {/* Selected Ping Animation */}
                        {isSelected && (
                          <div
                            className="absolute -inset-1.5 rounded-full animate-ping opacity-40"
                            style={{ backgroundColor: node.color }}
                          />
                        )}

                        <div
                          className={`relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full overflow-hidden p-0.5 shadow-xl transition-all duration-300 ${
                            isSelected
                              ? 'ring-4 ring-offset-2 ring-offset-background shadow-2xl scale-105'
                              : isNeighbor
                              ? 'ring-2 ring-offset-1 ring-offset-background shadow-lg'
                              : 'ring-1 hover:ring-2 shadow-md'
                          }`}
                          style={{
                            boxShadow: isSelected ? `0 0 25px ${node.color}80` : undefined,
                            borderColor: node.color,
                          }}
                        >
                          <img
                            src={node.imageUrl}
                            alt={`${node.name} - Avatar: Seven Havens characters`}
                            className="h-full w-full object-cover object-top rounded-full bg-muted/60"
                            loading="lazy"
                          />
                        </div>

                        {/* Element Badge Indicator */}
                        <div
                          className="absolute -bottom-1 -right-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-border bg-card shadow-md flex items-center justify-center"
                          title={node.element}
                        >
                          {renderElementIcon(node.element)}
                        </div>
                      </div>

                      {/* Character Name Label Pill (High contrast in Light & Dark modes) */}
                      <div
                        className={`mt-1.5 px-2.5 py-0.5 rounded-full border shadow-md font-serif text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-amber-500/30 shadow-md'
                            : 'bg-card/95 text-foreground border-border/80 backdrop-blur-md group-hover:border-amber-500/50'
                        }`}
                      >
                        {node.name}
                      </div>

                      {/* Role subtitle on selected/neighbor */}
                      {(isSelected || isNeighbor) && (
                        <span className="text-[9px] text-muted-foreground font-mono mt-0.5 drop-shadow hidden sm:block">
                          {node.role}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Legend Guide */}
            <div className="relative z-10 pt-3 border-t border-border/50 text-[11px] text-muted-foreground flex flex-wrap items-center justify-between gap-2">
              <span>
                Viewing relationships for <strong className="text-foreground">{selectedNode.name}</strong>
              </span>
              <span className="text-[10px] font-mono text-amber-500">
                {activeEdges.length} Active Canon Bonds Tracked
              </span>
            </div>
          </div>

          {/* Right Column: Node Detail Inspection Dossier (4 Cols on Desktop) */}
          <div className="lg:col-span-4 rounded-3xl border border-border bg-card p-6 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              {/* Header with Avatar & Role */}
              <div className="flex items-center gap-4 pb-4 border-b border-border/70">
                <div
                  className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 shadow-lg shrink-0 bg-muted/40"
                  style={{ borderColor: selectedNode.color }}
                >
                  <img
                    src={selectedNode.imageUrl}
                    alt={selectedNode.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 inset-x-0 text-[9px] text-center font-bold py-0.5 text-white"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    {selectedNode.element.split(' ')[0]}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      {selectedNode.name}
                    </h3>
                  </div>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white mb-1 shadow-sm"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    {selectedNode.role}
                  </span>
                  <p className="text-[11px] text-muted-foreground">{selectedCharacter?.alias}</p>
                </div>
              </div>

              {/* Quote Snippet */}
              {selectedCharacter?.quote && (
                <blockquote className="my-4 italic text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border-l-3 border-amber-500">
                  &ldquo;{selectedCharacter.quote}&rdquo;
                </blockquote>
              )}

              {/* Active Connections List with Canon Evidence */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Info className="h-3.5 w-3.5 text-sky-400" />
                    <span>Evidence-Tracked Bonds ({activeEdges.length})</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {activeEdges.map((edge) => {
                    const otherNodeId =
                      edge.source === selectedNodeId ? edge.target : edge.source;
                    const otherNode = RELATIONSHIP_NODES.find((n) => n.id === otherNodeId);

                    return (
                      <div
                        key={edge.id}
                        onClick={() => setSelectedNodeId(otherNodeId)}
                        className="p-3 rounded-2xl bg-muted/30 border border-border/70 hover:bg-muted/70 hover:border-amber-500/50 transition-all cursor-pointer text-xs group"
                      >
                        <div className="flex items-center justify-between font-semibold text-foreground mb-1">
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full overflow-hidden border border-border shrink-0">
                              <img
                                src={otherNode?.imageUrl}
                                alt={otherNode?.name}
                                className="h-full w-full object-cover object-top"
                              />
                            </div>
                            <span className="group-hover:text-amber-500 transition-colors">
                              {otherNode?.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-amber-500 font-bold px-2 py-0.5 rounded bg-amber-500/10">
                            {edge.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                              edge.isCanon
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            }`}
                          >
                            <CheckCircle2 className="h-2.5 w-2.5" />
                            <span>
                              {edge.isCanon ? 'Verified Canon' : 'Unconfirmed Speculation'}
                            </span>
                          </span>

                          <span className="text-[10px] text-muted-foreground font-mono">
                            {edge.episodeContext}
                          </span>
                        </div>

                        <p className="text-[11px] text-muted-foreground leading-relaxed mb-1.5">
                          {edge.details}
                        </p>

                        <div className="text-[9px] text-muted-foreground/80 italic border-t border-border/40 pt-1 flex items-center justify-between">
                          <span className="truncate max-w-[180px]">
                            Source: {edge.evidenceSource}
                          </span>
                          <span className="shrink-0">{edge.verifiedDate}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Profile Action Link */}
            {selectedCharacter && (
              <div className="pt-4 border-t border-border">
                <Link
                  to="/characters/$slug"
                  params={{ slug: selectedCharacter.id }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-stone-950 transition-all shadow-md"
                >
                  <span>View Full {selectedCharacter.name} Dossier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
