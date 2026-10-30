// Technical Diagram & SVG Graphics Engine for Banking CBT Mock Test Platform
// Generates production-ready, responsive Inline SVG and structured AI Image Prompts

import { DiagramSpec } from '@/types/exam';

export interface SeatingPerson {
  letter: string;
  variable?: string; // e.g., "Delhi", "Manager", "Red"
  facing: 'IN' | 'OUT';
}

/**
 * 1. Circular / Square / Rectangular Seating Arrangement Diagram
 */
export function generateSeatingDiagram(
  persons: SeatingPerson[],
  title = 'Circular Seating Arrangement (8 Persons)'
): DiagramSpec {
  const width = 600;
  const height = 450;
  const cx = width / 2;
  const cy = height / 2 + 10;
  const radius = 130;
  const arrowLen = 28;
  const textRadius = 175;

  const count = persons.length || 8;
  const angleStep = (2 * Math.PI) / count;

  // Build person nodes around the circle
  const elements: string[] = [];

  persons.forEach((person, idx) => {
    // Start at -90 deg (12 o'clock)
    const angle = -Math.PI / 2 + idx * angleStep;
    const px = cx + radius * Math.cos(angle);
    const py = cy + radius * Math.sin(angle);

    // Directional arrow vector
    // Facing IN: points toward center (from outside inward)
    // Facing OUT: points away from center (from table outward)
    let arrowStartX = 0;
    let arrowStartY = 0;
    let arrowEndX = 0;
    let arrowEndY = 0;

    if (person.facing === 'IN') {
      arrowStartX = cx + (radius + arrowLen) * Math.cos(angle);
      arrowStartY = cy + (radius + arrowLen) * Math.sin(angle);
      arrowEndX = cx + (radius - 5) * Math.cos(angle);
      arrowEndY = cy + (radius - 5) * Math.sin(angle);
    } else {
      arrowStartX = cx + (radius - 5) * Math.cos(angle);
      arrowStartY = cy + (radius - 5) * Math.sin(angle);
      arrowEndX = cx + (radius + arrowLen) * Math.cos(angle);
      arrowEndY = cy + (radius + arrowLen) * Math.sin(angle);
    }

    // Label Position
    const lx = cx + textRadius * Math.cos(angle);
    const ly = cy + textRadius * Math.sin(angle);

    // Tick on perimeter
    const tickInnerX = cx + (radius - 8) * Math.cos(angle);
    const tickInnerY = cy + (radius - 8) * Math.sin(angle);
    const tickOuterX = cx + (radius + 8) * Math.cos(angle);
    const tickOuterY = cy + (radius + 8) * Math.sin(angle);

    elements.push(`
      <!-- Person ${person.letter} at Angle ${(idx * (360 / count)).toFixed(0)}° -->
      <line x1="${tickInnerX.toFixed(1)}" y1="${tickInnerY.toFixed(1)}" x2="${tickOuterX.toFixed(1)}" y2="${tickOuterY.toFixed(1)}" stroke="#1E293B" stroke-width="2" />
      <line x1="${arrowStartX.toFixed(1)}" y1="${arrowStartY.toFixed(1)}" x2="${arrowEndX.toFixed(1)}" y2="${arrowEndY.toFixed(1)}" stroke="${person.facing === 'IN' ? '#059669' : '#DC2626'}" stroke-width="2.5" marker-end="url(#${person.facing === 'IN' ? 'arrow-in' : 'arrow-out'})" />
      <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4" fill="#1E293B" />
      
      <!-- Label Card -->
      <g transform="translate(${lx.toFixed(1)}, ${ly.toFixed(1)})">
        <rect x="-24" y="-18" width="48" height="${person.variable ? '34' : '24'}" rx="5" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.06))" />
        <text x="0" y="${person.variable ? '-2' : '3'}" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${person.letter}</text>
        ${person.variable ? `<text x="0" y="11" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748B">${person.variable}</text>` : ''}
      </g>
    `);
  });

  const svgCode = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[380px]">
  <defs>
    <!-- Arrow marker for Facing IN (Green) -->
    <marker id="arrow-in" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#059669" />
    </marker>
    <!-- Arrow marker for Facing OUT (Red) -->
    <marker id="arrow-out" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#DC2626" />
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="100%" height="100%" fill="#F8FAFC" rx="10" />
  
  <!-- Title & Legend -->
  <text x="24" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${title}</text>
  <g transform="translate(${width - 210}, 20)">
    <line x1="0" y1="10" x2="20" y2="10" stroke="#059669" stroke-width="2.5" marker-end="url(#arrow-in)" />
    <text x="28" y="14" font-family="system-ui, sans-serif" font-size="11" fill="#334155" font-weight="600">Facing Center</text>
    <line x1="110" y1="10" x2="130" y2="10" stroke="#DC2626" stroke-width="2.5" marker-end="url(#arrow-out)" />
    <text x="138" y="14" font-family="system-ui, sans-serif" font-size="11" fill="#334155" font-weight="600">Facing Out</text>
  </g>

  <!-- Central Circular Table -->
  <circle cx="${cx}" cy="${cy}" r="${radius}" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="none" />
  <circle cx="${cx}" cy="${cy}" r="38" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5" />
  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1D4ED8">CIRCULAR TABLE</text>

  <!-- Persons & Arrows -->
  ${elements.join('\n')}
</svg>`;

  const imagePrompt = `Clean flat vector educational diagram on a pure white background (#FFFFFF), showing an ${count}-person circular seating arrangement table with sharp black directional arrows pointing inward and outward, crisp sans-serif labels ${persons.map((p) => p.letter).join(', ')}, minimalist technical blueprint style, high contrast, no clutter.`;

  return {
    diagramType: 'SEATING_DIAGRAM',
    svgCode,
    imagePrompt,
  };
}

/**
 * 2. Syllogism Venn Diagram
 */
export function generateSyllogismVennDiagram(config: {
  title?: string;
  setA: string;
  setB: string;
  setC?: string;
  relationType: 'ONLY_A_FEW' | 'SOME_NOT' | 'NO_RELATION' | 'ALL';
}): DiagramSpec {
  const width = 560;
  const height = 300;
  const { title = 'Syllogism Venn Diagram Representation', setA, setB, setC, relationType } = config;

  let content = '';

  if (relationType === 'ONLY_A_FEW') {
    // Overlapping A and B with shaded intersection + solid dot in A with red cross on B
    content = `
      <!-- Circle A -->
      <circle cx="210" cy="160" r="95" fill="rgba(59, 130, 246, 0.12)" stroke="#2563EB" stroke-width="2.5" />
      <text x="155" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1E40AF">${setA}</text>

      <!-- Circle B -->
      <circle cx="330" cy="160" r="95" fill="rgba(16, 185, 129, 0.12)" stroke="#059669" stroke-width="2.5" />
      <text x="385" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#065F46">${setB}</text>

      <!-- Shaded Intersection (Some A are B) -->
      <path d="M 270 82 A 95 95 0 0 1 270 238 A 95 95 0 0 1 270 82 Z" fill="rgba(37, 99, 235, 0.28)" />
      <text x="270" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1E3A8A">Common</text>

      <!-- Restricted Link: Some A are definitely NOT B -->
      <circle cx="165" cy="120" r="5" fill="#DC2626" />
      <line x1="165" y1="120" x2="310" y2="105" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="4,3" />
      <g transform="translate(310, 105)">
        <line x1="-7" y1="-7" x2="7" y2="7" stroke="#DC2626" stroke-width="3" />
        <line x1="-7" y1="7" x2="7" y2="-7" stroke="#DC2626" stroke-width="3" />
      </g>
      <rect x="180" y="90" width="110" height="20" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1" />
      <text x="235" y="104" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991B1B">Some ${setA} are not ${setB}</text>
    `;
  } else if (relationType === 'NO_RELATION') {
    // Two separate circles with connecting solid line and red cross in center
    content = `
      <!-- Circle A -->
      <circle cx="160" cy="160" r="85" fill="rgba(59, 130, 246, 0.12)" stroke="#2563EB" stroke-width="2.5" />
      <text x="160" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1E40AF">${setA}</text>

      <!-- Circle B -->
      <circle cx="400" cy="160" r="85" fill="rgba(239, 68, 68, 0.12)" stroke="#DC2626" stroke-width="2.5" />
      <text x="400" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#991B1B">${setB}</text>

      <!-- Solid Connector with Central Cross -->
      <line x1="245" y1="160" x2="315" y2="160" stroke="#DC2626" stroke-width="3" />
      <circle cx="280" cy="160" r="14" fill="#FFFFFF" stroke="#DC2626" stroke-width="2" />
      <line x1="272" y1="152" x2="288" y2="168" stroke="#DC2626" stroke-width="3" />
      <line x1="272" y1="168" x2="288" y2="152" stroke="#DC2626" stroke-width="3" />
      <text x="280" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991B1B">NO ${setA} IS ${setB}</text>
    `;
  } else {
    // Concentric or standard Venn
    content = `
      <circle cx="280" cy="160" r="105" fill="rgba(59, 130, 246, 0.12)" stroke="#2563EB" stroke-width="2.5" />
      <circle cx="280" cy="170" r="60" fill="rgba(16, 185, 129, 0.18)" stroke="#059669" stroke-width="2.5" />
      <text x="280" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#065F46">${setA}</text>
      <text x="280" y="95" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1E40AF">${setB}</text>
    `;
  }

  const svgCode = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[280px]">
  <rect width="100%" height="100%" fill="#F8FAFC" rx="10" />
  <text x="24" y="34" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${title}</text>
  <text x="24" y="52" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">TCS iON Standard Deductive Logic Representation</text>
  ${content}
</svg>`;

  const imagePrompt = `Clean flat vector educational diagram on a pure white background (#FFFFFF), showing a syllogism Venn diagram with overlapping circles ${setA} and ${setB}, semi-transparent blue and green fills, high-contrast red negation indicator, clear typography, professional textbook style.`;

  return {
    diagramType: 'SYLLOGISM_VENN',
    svgCode,
    imagePrompt,
  };
}

/**
 * 3. Direction & Distance Path Diagram
 */
export function generateDirectionPathDiagram(config: {
  title?: string;
  points: { id: string; x: number; y: number; label: string }[];
  connections: { from: string; to: string; distance: string }[];
  shortestDistance?: { from: string; to: string; distance: string };
}): DiagramSpec {
  const width = 600;
  const height = 400;
  const { title = 'Direction Sense Cartesian Tracking Diagram', points, connections, shortestDistance } = config;

  const pointMap = new Map(points.map((p) => [p.id, p]));

  const segments: string[] = [];
  connections.forEach((conn) => {
    const p1 = pointMap.get(conn.from);
    const p2 = pointMap.get(conn.to);
    if (!p1 || !p2) return;

    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;

    segments.push(`
      <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#2563EB" stroke-width="2.5" marker-end="url(#dir-arrow)" />
      <!-- Distance Badge -->
      <g transform="translate(${mx}, ${my})">
        <rect x="-18" y="-10" width="36" height="18" rx="4" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1" />
        <text x="0" y="3" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">${conn.distance}</text>
      </g>
    `);
  });

  let shortestPath = '';
  if (shortestDistance) {
    const p1 = pointMap.get(shortestDistance.from);
    const p2 = pointMap.get(shortestDistance.to);
    if (p1 && p2) {
      const mx = (p1.x + p2.x) / 2;
      const my = (p1.y + p2.y) / 2;
      shortestPath = `
        <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#DC2626" stroke-width="2" stroke-dasharray="6,4" />
        <g transform="translate(${mx}, ${my})">
          <rect x="-24" y="-11" width="48" height="20" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.5" />
          <text x="0" y="3" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991B1B">${shortestDistance.distance}</text>
        </g>
      `;
    }
  }

  const nodes = points.map(
    (p) => `
    <g transform="translate(${p.x}, ${p.y})">
      <circle cx="0" cy="0" r="6" fill="#1E293B" stroke="#FFFFFF" stroke-width="2" />
      <text x="0" y="-12" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0F172A">${p.label}</text>
    </g>
  `
  );

  const svgCode = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[350px]">
  <defs>
    <marker id="dir-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M 0 1 L 7 4 L 0 7 z" fill="#2563EB" />
    </marker>
    <!-- Compass Rose -->
    <g id="compass">
      <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
      <line x1="0" y1="-18" x2="0" y2="18" stroke="#64748B" stroke-width="1.5" />
      <line x1="-18" y1="0" x2="18" y2="0" stroke="#64748B" stroke-width="1.5" />
      <text x="0" y="-8" text-anchor="middle" font-size="9" font-weight="800" fill="#DC2626">N</text>
      <text x="0" y="15" text-anchor="middle" font-size="8" font-weight="700" fill="#64748B">S</text>
      <text x="12" y="3" text-anchor="middle" font-size="8" font-weight="700" fill="#64748B">E</text>
      <text x="-12" y="3" text-anchor="middle" font-size="8" font-weight="700" fill="#64748B">W</text>
    </g>
  </defs>

  <rect width="100%" height="100%" fill="#F8FAFC" rx="10" />
  
  <!-- Subtle Grid lines -->
  <g stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3,3">
    <line x1="50" y1="80" x2="550" y2="80" />
    <line x1="50" y1="160" x2="550" y2="160" />
    <line x1="50" y1="240" x2="550" y2="240" />
    <line x1="50" y1="320" x2="550" y2="320" />
  </g>

  <!-- Title & Compass -->
  <text x="24" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${title}</text>
  <use href="#compass" x="${width - 45}" y="45" />

  <!-- Segments & Shortest distance -->
  ${segments.join('\n')}
  ${shortestPath}

  <!-- Point Nodes -->
  ${nodes.join('\n')}
</svg>`;

  const imagePrompt = `Clean flat vector educational diagram on a pure white background (#FFFFFF), showing a 2D Cartesian coordinate direction sense path with connected blue segments, labeled points ${points.map((p) => p.label).join(', ')}, distance tags, dashed red hypotenuse vector, minimalist blueprint style.`;

  return {
    diagramType: 'DIRECTION_PATH',
    svgCode,
    imagePrompt,
  };
}

/**
 * 4. Blood Relation Family Tree Diagram
 */
export function generateFamilyTreeDiagram(config: {
  title?: string;
  members: { id: string; name: string; gender: 'M' | 'F'; gen: 1 | 2 | 3; x: number }[];
  couples: { p1: string; p2: string }[];
  siblings: { from: string; to: string }[];
  parentChild: { parentId: string; childId: string }[];
}): DiagramSpec {
  const width = 600;
  const height = 400;
  const { title = 'Blood Relation Family Tree Diagram', members, couples, siblings, parentChild } = config;

  // y coordinate per generation
  const genY = { 1: 85, 2: 200, 3: 315 };

  const memberMap = new Map(members.map((m) => [m.id, { ...m, y: genY[m.gen] }]));

  const lines: string[] = [];

  // Married couples: double horizontal line (=)
  couples.forEach((c) => {
    const m1 = memberMap.get(c.p1);
    const m2 = memberMap.get(c.p2);
    if (!m1 || !m2) return;
    const startX = Math.min(m1.x, m2.x) + 30;
    const endX = Math.max(m1.x, m2.x) - 30;
    lines.push(`
      <line x1="${startX}" y1="${m1.y - 3}" x2="${endX}" y2="${m1.y - 3}" stroke="#D97706" stroke-width="2.5" />
      <line x1="${startX}" y1="${m1.y + 3}" x2="${endX}" y2="${m1.y + 3}" stroke="#D97706" stroke-width="2.5" />
    `);
  });

  // Siblings: single horizontal line (—)
  siblings.forEach((s) => {
    const m1 = memberMap.get(s.from);
    const m2 = memberMap.get(s.to);
    if (!m1 || !m2) return;
    const startX = Math.min(m1.x, m2.x) + 30;
    const endX = Math.max(m1.x, m2.x) - 30;
    lines.push(`
      <line x1="${startX}" y1="${m1.y}" x2="${endX}" y2="${m1.y}" stroke="#2563EB" stroke-width="2" />
    `);
  });

  // Parent to child: vertical line (|)
  parentChild.forEach((pc) => {
    const parent = memberMap.get(pc.parentId);
    const child = memberMap.get(pc.childId);
    if (!parent || !child) return;
    const midY = (parent.y + child.y) / 2;
    lines.push(`
      <path d="M ${parent.x} ${parent.y + 25} L ${parent.x} ${midY} L ${child.x} ${midY} L ${child.x} ${child.y - 25}" fill="none" stroke="#64748B" stroke-width="2" />
    `);
  });

  // Render Member Nodes
  const memberNodes = members.map((m) => {
    const my = genY[m.gen];
    const isMale = m.gender === 'M';

    if (isMale) {
      // Male = Rectangle / Square
      return `
        <g transform="translate(${m.x}, ${my})">
          <rect x="-30" y="-22" width="60" height="44" rx="4" fill="#EFF6FF" stroke="#2563EB" stroke-width="2" />
          <text x="0" y="-2" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">${m.name}</text>
          <text x="0" y="12" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#2563EB">[Male (+)]</text>
        </g>
      `;
    } else {
      // Female = Circle / Ellipse
      return `
        <g transform="translate(${m.x}, ${my})">
          <circle cx="0" cy="0" r="24" fill="#FDF2F8" stroke="#DB2777" stroke-width="2" />
          <text x="0" y="-2" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#831843">${m.name}</text>
          <text x="0" y="11" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#DB2777">[Fem (-)]</text>
        </g>
      `;
    }
  });

  const svgCode = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[350px]">
  <rect width="100%" height="100%" fill="#F8FAFC" rx="10" />

  <!-- Title & Generation markers -->
  <text x="24" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${title}</text>
  
  <text x="24" y="${genY[1] + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94A3B8">GEN I (Grandparents)</text>
  <text x="24" y="${genY[2] + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94A3B8">GEN II (Parents)</text>
  <text x="24" y="${genY[3] + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94A3B8">GEN III (Children)</text>

  <!-- Legend -->
  <g transform="translate(${width - 240}, 20)">
    <rect x="0" y="-10" width="16" height="16" rx="2" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5" />
    <text x="22" y="2" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#334155">Male</text>
    <circle cx="70" cy="-2" r="8" fill="#FDF2F8" stroke="#DB2777" stroke-width="1.5" />
    <text x="84" y="2" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#334155">Female</text>
    <text x="140" y="2" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#D97706">=</text>
    <text x="155" y="2" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#334155">Couple</text>
  </g>

  <!-- Connecting Lines -->
  ${lines.join('\n')}

  <!-- Nodes -->
  ${memberNodes.join('\n')}
</svg>`;

  const imagePrompt = `Clean flat vector educational diagram on a pure white background (#FFFFFF), showing a 3-generation family tree diagram with squares for male members and circles for female members, connected by double gold lines for married couples and parent-to-child vertical links, sans-serif text, professional textbook style.`;

  return {
    diagramType: 'FAMILY_TREE',
    svgCode,
    imagePrompt,
  };
}

/**
 * 5. Machine Input-Output Box Diagram
 */
export function generateInputOutputBoxesDiagram(config: {
  title?: string;
  steps: { stepLabel: string; boxes: (string | number)[]; explanation?: string }[];
}): DiagramSpec {
  const width = 640;
  const height = 80 + config.steps.length * 75;
  const { title = 'Machine Input-Output Step-by-Step Box Flow', steps } = config;

  const rows: string[] = [];

  steps.forEach((st, sIdx) => {
    const y = 70 + sIdx * 75;
    const boxCount = st.boxes.length;
    const boxWidth = Math.min(65, (width - 160) / boxCount);
    const startX = 140;

    const boxElements = st.boxes
      .map((val, bIdx) => {
        const bx = startX + bIdx * (boxWidth + 8);
        return `
          <g transform="translate(${bx}, ${y})">
            <rect x="0" y="0" width="${boxWidth}" height="36" rx="5" fill="#FFFFFF" stroke="#0E3B64" stroke-width="1.8" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.05))" />
            <text x="${boxWidth / 2}" y="22" text-anchor="middle" font-family="Courier, monospace" font-size="13" font-weight="700" fill="#0E3B64">${val}</text>
          </g>
        `;
      })
      .join('\n');

    rows.push(`
      <!-- Step ${sIdx} -->
      <g>
        <rect x="20" y="${y + 2}" width="105" height="32" rx="4" fill="${sIdx === 0 ? '#1E293B' : '#EFF6FF'}" stroke="${sIdx === 0 ? '#0F172A' : '#3B82F6'}" stroke-width="1.2" />
        <text x="72" y="${y + 22}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${sIdx === 0 ? '#FFFFFF' : '#1D4ED8'}">${st.stepLabel}</text>
        ${boxElements}
        ${
          st.explanation
            ? `<text x="${startX + boxCount * (boxWidth + 8) + 12}" y="${y + 22}" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#059669">${st.explanation}</text>`
            : ''
        }
      </g>
      ${
        sIdx < steps.length - 1
          ? `
        <line x1="${startX + 40}" y1="${y + 40}" x2="${startX + 40}" y2="${y + 65}" stroke="#94A3B8" stroke-width="2" marker-end="url(#down-arrow)" />
        <line x1="${startX + (boxCount - 1) * (boxWidth + 8) + 20}" y1="${y + 40}" x2="${startX + (boxCount - 1) * (boxWidth + 8) + 20}" y2="${y + 65}" stroke="#94A3B8" stroke-width="2" marker-end="url(#down-arrow)" />
      `
          : ''
      }
    `);
  });

  const svgCode = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[420px]">
  <defs>
    <marker id="down-arrow" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
      <path d="M 0 0 L 3 5 L 6 0 z" fill="#94A3B8" />
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#F8FAFC" rx="10" />
  <text x="24" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0E3B64">${title}</text>
  <text x="24" y="48" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">TCS iON Shift Operations with Mathematical Transformations</text>

  ${rows.join('\n')}
</svg>`;

  const imagePrompt = `Clean flat vector educational diagram on a pure white background (#FFFFFF), showing a machine input-output box transformation flow with numbered rectangular boxes in rows, downward connecting gray arrows, monospace digits, high contrast, clean banking exam layout.`;

  return {
    diagramType: 'INPUT_OUTPUT_BOX',
    svgCode,
    imagePrompt,
  };
}
