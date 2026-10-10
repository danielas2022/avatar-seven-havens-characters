import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { GitFork, Sparkles, Info, ArrowRight, ShieldCheck, Heart, User, ExternalLink } from 'lucide-react';
import { RELATIONSHIP_NODES, RELATIONSHIP_EDGES, GraphNode } from '@/data/relationships';
import { CHARACTERS } from '@/data/characters';

export function RelationshipChart() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('pavi');

  const selectedNode = RELATIONSHIP_NODES.find((n) => n.id === selectedNodeId) || RELATIONSHIP_NODES[0];
  const selectedCharacter = CHARACTERS.find((c) => c.id === selectedNodeId);

  // Find all edges connected to selected node
  const activeEdges = RELATIONSHIP_EDGES.filter(
    (e) => e.source === selectedNodeId || e.target === selectedNodeId
  );

  return (
    <section id="relationships" className="py-16 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <GitFork className="h-3.5 w-3.5" />
            <span>Interactive Visual Network</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Avatar: Seven Havens Characters Relationship Map
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Click on any character node to inspect alliances, mentor bonds, twin connections, and tactical escorts among all Avatar: Seven Havens characters across the Seven Havens.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* Visual SVG Map (Takes 2 Columns on desktop) */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-4 sm:p-6 relative overflow-hidden shadow-lg">
            {/* Map Legend */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-border/60 text-[11px] text-muted-foreground">
              <span className="font-medium text-foreground">Click a character node:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                  <span>Avatars</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500 inline-block" />
                  <span>Brigade</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span>Companions</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500 inline-block" />
                  <span>Nomads</span>
                </span>
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-background/50 rounded-xl border border-border/40 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="twinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>

                {/* Connecting Edges */}
                {RELATIONSHIP_EDGES.map((edge) => {
                  const source = RELATIONSHIP_NODES.find((n) => n.id === edge.source);
                  const target = RELATIONSHIP_NODES.find((n) => n.id === edge.target);
                  if (!source || !target) return null;

                  const isConnected =
                    edge.source === selectedNodeId || edge.target === selectedNodeId;

                  return (
                    <g key={edge.id} className="transition-opacity duration-300">
                      <line
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke={
                          isConnected
                            ? edge.type === 'twin'
                              ? 'url(#twinGradient)'
                              : '#38bdf8'
                            : '#52525b'
                        }
                        strokeWidth={isConnected ? (edge.type === 'twin' ? '1.2' : '0.8') : '0.35'}
                        strokeDasharray={edge.type === 'guardian' ? '1.5,1.5' : undefined}
                        className={isConnected ? 'animate-pulse' : 'opacity-40'}
                      />
                    </g>
                  );
                })}

                {/* Nodes */}
                {RELATIONSHIP_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isNeighbor = activeEdges.some(
                    (e) => e.source === node.id || e.target === node.id
                  );

                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className="cursor-pointer group"
                    >
                      {/* Outer pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="5.5"
                          fill="none"
                          stroke={node.color}
                          strokeWidth="0.6"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Node circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? '4.8' : isNeighbor ? '4.2' : '3.8'}
                        fill={isSelected ? node.color : '#18181b'}
                        stroke={node.color}
                        strokeWidth={isSelected ? '1' : '0.6'}
                        className="transition-all duration-200"
                      />

                      {/* Character initial */}
                      <text
                        x={node.x}
                        y={node.y + 1.2}
                        textAnchor="middle"
                        fontSize="2.8"
                        fontWeight="bold"
                        fill={isSelected ? '#ffffff' : node.color}
                        className="pointer-events-none select-none"
                      >
                        {node.avatarChar}
                      </text>

                      {/* Node Label */}
                      <text
                        x={node.x}
                        y={node.y + 4.8}
                        textAnchor="middle"
                        fontSize="2.4"
                        fill="#e4e4e7"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="pointer-events-none select-none drop-shadow"
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Node Detail Card */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white"
                  style={{ backgroundColor: selectedNode.color }}
                >
                  {selectedNode.role}
                </span>
                <span className="text-xs text-muted-foreground uppercase font-mono">
                  {selectedCharacter?.bending}
                </span>
              </div>

              {selectedCharacter?.imageUrl && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-border/60 shadow-md">
                  <img
                    src={selectedCharacter.imageUrl}
                    alt={selectedCharacter.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold text-white drop-shadow">
                      {selectedCharacter.name} &bull; {selectedCharacter.bending}
                    </span>
                  </div>
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                {selectedNode.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {selectedCharacter?.alias}
              </p>

              {/* Quote */}
              {selectedCharacter?.quote && (
                <p className="italic text-xs text-foreground/80 bg-muted/40 p-2.5 rounded-lg mb-5 border-l-2 border-primary">
                  &ldquo;{selectedCharacter.quote}&rdquo;
                </p>
              )}

              {/* Connections list */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-sky-400" />
                  <span>Bonds with Avatar: Seven Havens characters ({activeEdges.length})</span>
                </h4>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {activeEdges.map((edge) => {
                    const otherNodeId = edge.source === selectedNodeId ? edge.target : edge.source;
                    const otherNode = RELATIONSHIP_NODES.find((n) => n.id === otherNodeId);

                    return (
                      <div
                        key={edge.id}
                        onClick={() => setSelectedNodeId(otherNodeId)}
                        className="p-2.5 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/70 transition-colors cursor-pointer text-xs"
                      >
                        <div className="flex items-center justify-between font-semibold text-foreground mb-0.5">
                          <span>{otherNode?.name}</span>
                          <span className="text-[10px] text-primary px-1.5 py-0.2 rounded bg-primary/10">
                            {edge.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-tight">
                          {edge.details}
                        </p>
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
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                >
                  <span>View Full {selectedCharacter.name} Profile</span>
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
