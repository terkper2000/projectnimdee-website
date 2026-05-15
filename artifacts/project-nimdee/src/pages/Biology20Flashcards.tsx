import { useState, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft, ChevronRight, Shuffle, RotateCcw,
  ChevronLeft, ChevronRight as ChevronRightIcon, FlipHorizontal2,
} from "lucide-react";

/* ── FlipCard Component ──────────────────────────────────────────── */

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
  minHeight?: string;
  className?: string;
}

function FlipCard({ front, back, isFlipped, onFlip, minHeight = "200px", className = "" }: FlipCardProps) {
  return (
    <div
      className={`relative cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl ${className}`}
      style={{ perspective: "1200px" }}
      onClick={onFlip}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onFlip(); } }}
      tabIndex={0}
      role="group"
      aria-label={isFlipped ? "Flashcard – showing answer. Press Enter or Space to flip back." : "Flashcard – showing question. Press Enter or Space to flip."}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          minHeight,
        }}
      >
        {/* Front face */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full"
        >
          {front}
        </div>
        {/* Back face */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full"
        >
          {back}
        </div>
        {/* Height spacer */}
        <div style={{ minHeight, visibility: "hidden" }} aria-hidden="true" />
      </div>
    </div>
  );
}

/* ── Inline SVG Diagrams ─────────────────────────────────────────── */

function PyramidDiagram() {
  return (
    <svg viewBox="0 0 300 210" className="w-full max-w-[280px] mx-auto mt-3" role="img" aria-label="Ecological Pyramid of Energy">
      <polygon points="150,12 174,12 200,52 100,52" fill="#fb7185" stroke="white" strokeWidth="1.5"/>
      <text x="150" y="37" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Tertiary: 10 kJ</text>
      <polygon points="100,52 200,52 226,92 74,92" fill="#f97316" stroke="white" strokeWidth="1.5"/>
      <text x="150" y="77" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Secondary: 100 kJ</text>
      <polygon points="74,92 226,92 252,132 48,132" fill="#eab308" stroke="white" strokeWidth="1.5"/>
      <text x="150" y="117" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Primary: 1,000 kJ</text>
      <polygon points="48,132 252,132 278,172 22,172" fill="#14b8a6" stroke="white" strokeWidth="1.5"/>
      <text x="150" y="157" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Producers: 10,000 kJ</text>
      <text x="150" y="195" textAnchor="middle" fill="#64748b" fontSize="9">~90% of energy lost as heat at each level</text>
    </svg>
  );
}

function NitrogenCycleDiagram() {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-[280px] mx-auto mt-3" role="img" aria-label="Simplified Nitrogen Cycle">
      <rect x="110" y="5" width="80" height="30" rx="6" fill="#3b82f6"/>
      <text x="150" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Atmosphere N₂</text>
      <rect x="10" y="80" width="80" height="30" rx="6" fill="#22c55e"/>
      <text x="50" y="100" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">Soil NH₄⁺/NO₃⁻</text>
      <rect x="110" y="80" width="80" height="30" rx="6" fill="#14b8a6"/>
      <text x="150" y="100" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">Producers</text>
      <rect x="210" y="80" width="80" height="30" rx="6" fill="#f97316"/>
      <text x="250" y="100" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">Consumers</text>
      <rect x="110" y="155" width="80" height="30" rx="6" fill="#8b5cf6"/>
      <text x="150" y="170" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Dead matter</text>
      <text x="150" y="183" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">(decomposers)</text>
      <line x1="150" y1="35" x2="55" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <text x="80" y="60" textAnchor="middle" fill="#3b82f6" fontSize="7.5">Fixation</text>
      <line x1="90" y1="95" x2="110" y2="95" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <text x="100" y="88" textAnchor="middle" fill="#22c55e" fontSize="7">Assimil.</text>
      <line x1="190" y1="95" x2="210" y2="95" stroke="#14b8a6" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <text x="200" y="88" textAnchor="middle" fill="#14b8a6" fontSize="7">Eating</text>
      <line x1="250" y1="110" x2="175" y2="155" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <line x1="150" y1="110" x2="150" y2="155" stroke="#14b8a6" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <line x1="150" y1="155" x2="55" y2="110" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <text x="72" y="140" textAnchor="middle" fill="#8b5cf6" fontSize="7">Ammonif.</text>
      <line x1="38" y1="80" x2="130" y2="35" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arr)"/>
      <text x="76" y="48" textAnchor="middle" fill="#64748b" fontSize="7">Denitrif.</text>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
}

function PhotosynthesisDiagram() {
  return (
    <svg viewBox="0 0 300 160" className="w-full max-w-[300px] mx-auto mt-3" role="img" aria-label="Photosynthesis Overview">
      <rect x="10" y="10" width="125" height="130" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="72" y="32" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">LIGHT REACTIONS</text>
      <text x="72" y="46" textAnchor="middle" fill="#166534" fontSize="8">(Thylakoid membrane)</text>
      <text x="72" y="72" textAnchor="middle" fill="#15803d" fontSize="8">IN: H₂O + light</text>
      <text x="72" y="90" textAnchor="middle" fill="#15803d" fontSize="8">OUT: ATP + NADPH</text>
      <text x="72" y="108" textAnchor="middle" fill="#15803d" fontSize="8">RELEASE: O₂</text>
      <text x="72" y="130" textAnchor="middle" fill="#64748b" fontSize="7">Water splitting (photolysis)</text>
      <rect x="165" y="10" width="125" height="130" rx="8" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5"/>
      <text x="227" y="32" textAnchor="middle" fill="#713f12" fontSize="9" fontWeight="bold">CALVIN CYCLE</text>
      <text x="227" y="46" textAnchor="middle" fill="#713f12" fontSize="8">(Stroma)</text>
      <text x="227" y="72" textAnchor="middle" fill="#92400e" fontSize="8">IN: CO₂ + ATP + NADPH</text>
      <text x="227" y="90" textAnchor="middle" fill="#92400e" fontSize="8">OUT: G3P → Glucose</text>
      <text x="227" y="108" textAnchor="middle" fill="#92400e" fontSize="8">RETURN: ADP + NADP⁺</text>
      <text x="227" y="130" textAnchor="middle" fill="#64748b" fontSize="7">RuBisCO fixes CO₂ to RuBP</text>
      <line x1="135" y1="75" x2="165" y2="75" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrd)"/>
      <text x="150" y="68" textAnchor="middle" fill="#64748b" fontSize="7">ATP</text>
      <text x="150" y="88" textAnchor="middle" fill="#64748b" fontSize="7">NADPH</text>
      <defs>
        <marker id="arrd" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
}

function RespirationDiagram() {
  return (
    <svg viewBox="0 0 300 180" className="w-full max-w-[300px] mx-auto mt-3" role="img" aria-label="Cellular Respiration Stages">
      {[
        { x: 5, label: "Glycolysis", sub: "Cytoplasm", atp: "2 ATP", color: "#3b82f6", text: "white" },
        { x: 80, label: "Pyruvate Ox.", sub: "Matrix", atp: "0 ATP", color: "#8b5cf6", text: "white" },
        { x: 155, label: "Krebs Cycle", sub: "Matrix", atp: "2 ATP", color: "#f97316", text: "white" },
        { x: 230, label: "ETC", sub: "Inner membrane", atp: "~32-34 ATP", color: "#14b8a6", text: "white" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="30" width="68" height="80" rx="6" fill={s.color}/>
          <text x={s.x + 34} y="52" textAnchor="middle" fill={s.text} fontSize="8.5" fontWeight="bold">{s.label}</text>
          <text x={s.x + 34} y="67" textAnchor="middle" fill={s.text} fontSize="7.5" opacity="0.85">{s.sub}</text>
          <text x={s.x + 34} y="95" textAnchor="middle" fill={s.text} fontSize="9" fontWeight="bold">{s.atp}</text>
          {i < 3 && <line x1={s.x + 68} y1="70" x2={s.x + 77} y2="70" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrr)"/>}
        </g>
      ))}
      <text x="4" y="130" fill="#1e293b" fontSize="7.5" fontWeight="bold">Glucose</text>
      <text x="4" y="142" fill="#64748b" fontSize="7">(6C)</text>
      <text x="4" y="165" fill="#475569" fontSize="8" fontWeight="bold">Total aerobic ATP: ~36–38 per glucose</text>
      <text x="4" y="178" fill="#64748b" fontSize="7">Fermentation (no O₂): only 2 ATP</text>
      <defs>
        <marker id="arrr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8"/>
        </marker>
      </defs>
    </svg>
  );
}

function HeartFlowDiagram() {
  return (
    <svg viewBox="0 0 300 175" className="w-full max-w-[300px] mx-auto mt-3" role="img" aria-label="Heart Blood Flow Circuits">
      <rect x="5" y="60" width="70" height="55" rx="6" fill="#3b82f6"/>
      <text x="40" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Right Heart</text>
      <text x="40" y="96" textAnchor="middle" fill="white" fontSize="7.5">RA → RV</text>
      <text x="40" y="110" textAnchor="middle" fill="white" fontSize="7">Deoxygenated</text>
      <rect x="113" y="5" width="74" height="55" rx="6" fill="#22c55e"/>
      <text x="150" y="27" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Lungs</text>
      <text x="150" y="42" textAnchor="middle" fill="white" fontSize="7.5">Gas exchange</text>
      <text x="150" y="56" textAnchor="middle" fill="white" fontSize="7">O₂ ↑ CO₂ ↓</text>
      <rect x="225" y="60" width="70" height="55" rx="6" fill="#ef4444"/>
      <text x="260" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Left Heart</text>
      <text x="260" y="96" textAnchor="middle" fill="white" fontSize="7.5">LA → LV</text>
      <text x="260" y="110" textAnchor="middle" fill="white" fontSize="7">Oxygenated</text>
      <rect x="113" y="120" width="74" height="50" rx="6" fill="#f97316"/>
      <text x="150" y="142" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Body</text>
      <text x="150" y="158" textAnchor="middle" fill="white" fontSize="7.5">Systemic circuit</text>
      <text x="150" y="166" textAnchor="middle" fill="white" fontSize="7">O₂ → tissues</text>
      <path d="M75,75 Q113,30 113,30" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrh)"/>
      <text x="90" y="44" fill="#3b82f6" fontSize="7">Pulm. art.</text>
      <path d="M187,30 Q225,30 225,75" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrh)"/>
      <text x="206" y="44" fill="#ef4444" fontSize="7">Pulm. vein</text>
      <path d="M295,115 Q295,145 187,145" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrh)"/>
      <text x="256" y="145" fill="#ef4444" fontSize="7">Aorta</text>
      <path d="M113,145 Q5,145 5,115" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrh)"/>
      <text x="40" y="155" fill="#3b82f6" fontSize="7">Vena cava</text>
      <defs>
        <marker id="arrh" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
}

function NephronDiagram() {
  return (
    <svg viewBox="0 0 300 175" className="w-full max-w-[300px] mx-auto mt-3" role="img" aria-label="Simplified Nephron">
      <circle cx="40" cy="40" r="28" fill="#f97316" opacity="0.85"/>
      <text x="40" y="37" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Glomerulus</text>
      <text x="40" y="50" textAnchor="middle" fill="white" fontSize="7">Filtration</text>
      <rect x="75" y="15" width="60" height="50" rx="6" fill="#3b82f6" opacity="0.9"/>
      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">PCT</text>
      <text x="105" y="52" textAnchor="middle" fill="white" fontSize="6.5">Reabsorption</text>
      <text x="105" y="62" textAnchor="middle" fill="white" fontSize="6.5">(glucose, AA)</text>
      <path d="M142,40 Q175,40 175,70 Q175,130 155,130" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M155,130 Q135,130 135,100 Q135,70 155,70" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <text x="175" y="100" fill="#8b5cf6" fontSize="7" fontWeight="bold">↓ H₂O out</text>
      <text x="95" y="100" fill="#22c55e" fontSize="7" fontWeight="bold">Na⁺ out</text>
      <text x="148" y="56" fill="#64748b" fontSize="7">Loop of Henle</text>
      <rect x="165" y="55" width="60" height="50" rx="6" fill="#eab308" opacity="0.9"/>
      <text x="195" y="75" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">DCT</text>
      <text x="195" y="90" textAnchor="middle" fill="white" fontSize="6.5">Na⁺ reabsorb.</text>
      <text x="195" y="100" textAnchor="middle" fill="white" fontSize="6.5">(aldosterone)</text>
      <rect x="235" y="105" width="60" height="50" rx="6" fill="#14b8a6" opacity="0.9"/>
      <text x="265" y="125" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">Collecting</text>
      <text x="265" y="138" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">Duct</text>
      <text x="265" y="150" textAnchor="middle" fill="white" fontSize="6.5">H₂O (ADH)</text>
      <text x="5" y="170" fill="#475569" fontSize="8" fontWeight="bold">→ Urine to ureter → bladder → excreted</text>
    </svg>
  );
}

/* ── NEW: Heart Anatomy Diagram ──────────────────────────────────── */

function HeartAnatomyDiagram() {
  return (
    <svg viewBox="0 0 320 250" className="w-full max-w-[320px] mx-auto mt-3" role="img" aria-label="Heart Anatomy – 4 Chambers and 4 Valves">
      <defs>
        <marker id="aB" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3z" fill="#3b82f6"/></marker>
        <marker id="aR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3z" fill="#dc2626"/></marker>
      </defs>

      {/* ── Right Atrium (RA) ── */}
      <rect x="4" y="18" width="100" height="68" rx="9" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.8"/>
      <text x="54" y="38" textAnchor="middle" fill="#1e40af" fontSize="8.5" fontWeight="bold">Right Atrium (RA)</text>
      <text x="54" y="52" textAnchor="middle" fill="#1d4ed8" fontSize="7.5">Receives deoxygenated</text>
      <text x="54" y="63" textAnchor="middle" fill="#1d4ed8" fontSize="7.5">blood from body</text>
      <text x="54" y="79" textAnchor="middle" fill="#64748b" fontSize="7">via SVC &amp; IVC</text>

      {/* ── Tricuspid Valve (RA → RV) ── */}
      <line x1="54" y1="86" x2="54" y2="104" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#aB)"/>
      <rect x="18" y="87" width="72" height="14" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1"/>
      <text x="54" y="98" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="bold">Tricuspid Valve</text>

      {/* ── Right Ventricle (RV) ── */}
      <rect x="4" y="104" width="100" height="78" rx="9" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5"/>
      <text x="54" y="126" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">Right Ventricle (RV)</text>
      <text x="54" y="141" textAnchor="middle" fill="#dbeafe" fontSize="7.5">Pumps to lungs</text>
      <text x="54" y="154" textAnchor="middle" fill="#dbeafe" fontSize="7">Pulmonary circulation</text>
      <text x="54" y="167" textAnchor="middle" fill="#93c5fd" fontSize="7">→ Pulmonary valve →</text>
      <text x="54" y="178" textAnchor="middle" fill="#93c5fd" fontSize="7">Pulmonary artery</text>

      {/* ── Left Atrium (LA) ── */}
      <rect x="216" y="18" width="100" height="68" rx="9" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.8"/>
      <text x="266" y="38" textAnchor="middle" fill="#991b1b" fontSize="8.5" fontWeight="bold">Left Atrium (LA)</text>
      <text x="266" y="52" textAnchor="middle" fill="#b91c1c" fontSize="7.5">Receives oxygenated</text>
      <text x="266" y="63" textAnchor="middle" fill="#b91c1c" fontSize="7.5">blood from lungs</text>
      <text x="266" y="79" textAnchor="middle" fill="#64748b" fontSize="7">via pulmonary veins</text>

      {/* ── Mitral Valve (LA → LV) ── */}
      <line x1="266" y1="86" x2="266" y2="104" stroke="#dc2626" strokeWidth="2" markerEnd="url(#aR)"/>
      <rect x="230" y="87" width="72" height="14" rx="4" fill="#fecaca" stroke="#dc2626" strokeWidth="1"/>
      <text x="266" y="98" textAnchor="middle" fill="#991b1b" fontSize="7" fontWeight="bold">Mitral (Bicuspid) Valve</text>

      {/* ── Left Ventricle (LV) ── */}
      <rect x="216" y="104" width="100" height="78" rx="9" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5"/>
      <text x="266" y="126" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">Left Ventricle (LV)</text>
      <text x="266" y="141" textAnchor="middle" fill="#fee2e2" fontSize="7.5">Pumps to body</text>
      <text x="266" y="154" textAnchor="middle" fill="#fee2e2" fontSize="7">Systemic circulation</text>
      <text x="266" y="167" textAnchor="middle" fill="#fca5a5" fontSize="7">→ Aortic valve →</text>
      <text x="266" y="178" textAnchor="middle" fill="#fca5a5" fontSize="7">Aorta</text>

      {/* ── Lungs (centre) ── */}
      <rect x="112" y="50" width="96" height="48" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5"/>
      <text x="160" y="69" textAnchor="middle" fill="#166534" fontSize="8.5" fontWeight="bold">LUNGS</text>
      <text x="160" y="82" textAnchor="middle" fill="#15803d" fontSize="7.5">Gas Exchange</text>
      <text x="160" y="93" textAnchor="middle" fill="#166534" fontSize="7">O₂ in  •  CO₂ out</text>

      {/* RV → Lungs (pulmonary artery — blue) */}
      <path d="M104,138 Q112,105 112,74" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#aB)"/>
      <text x="88" y="118" fill="#3b82f6" fontSize="6.5" fontWeight="bold">Pulm.</text>
      <text x="85" y="128" fill="#3b82f6" fontSize="6.5" fontWeight="bold">Artery</text>

      {/* Lungs → LA (pulmonary veins — red) */}
      <path d="M208,74 Q208,105 216,138" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#aR)"/>
      <text x="213" y="118" fill="#dc2626" fontSize="6.5" fontWeight="bold">Pulm.</text>
      <text x="210" y="128" fill="#dc2626" fontSize="6.5" fontWeight="bold">Veins</text>

      {/* Aorta exit from LV downward → body */}
      <path d="M266,182 Q266,215 160,225" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#aR)"/>
      <text x="245" y="212" fill="#dc2626" fontSize="7" fontWeight="bold">Aorta</text>

      {/* Body → RA via vena cava */}
      <path d="M112,225 Q54,225 54,182" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,2" markerEnd="url(#aB)"/>

      {/* Body box */}
      <rect x="112" y="212" width="96" height="30" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5"/>
      <text x="160" y="226" textAnchor="middle" fill="#9a3412" fontSize="8" fontWeight="bold">Body (tissues)</text>
      <text x="160" y="237" textAnchor="middle" fill="#c2410c" fontSize="7">O₂ delivered, CO₂ collected</text>

      {/* SVC / IVC labels */}
      <text x="6" y="15" fill="#1d4ed8" fontSize="6.5" fontWeight="bold">SVC ↓</text>
      <text x="6" y="200" fill="#1d4ed8" fontSize="6.5" fontWeight="bold">IVC ↑</text>

      {/* Legend note */}
      <text x="160" y="248" textAnchor="middle" fill="#94a3b8" fontSize="6.5">Blue = deoxygenated · Red = oxygenated</text>
    </svg>
  );
}

/* ── NEW: Lymphatic System Diagram ───────────────────────────────── */

function LymphaticSystemDiagram() {
  return (
    <svg viewBox="0 0 280 310" className="w-full max-w-[280px] mx-auto mt-3" role="img" aria-label="Lymphatic System Overview">
      <defs>
        <marker id="aL" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5z" fill="#8b5cf6"/></marker>
      </defs>

      {/* Title */}
      <text x="140" y="12" textAnchor="middle" fill="#1e293b" fontSize="9.5" fontWeight="bold">Lymphatic System</text>

      {/* ── Body silhouette (simplified outline) ── */}
      {/* Head */}
      <ellipse cx="140" cy="40" rx="22" ry="25" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
      <text x="140" y="45" textAnchor="middle" fill="#92400e" fontSize="7">Head</text>
      {/* Neck */}
      <rect x="131" y="65" width="18" height="18" fill="#fef3c7" stroke="#d97706" strokeWidth="1"/>
      {/* Torso */}
      <rect x="90" y="83" width="100" height="130" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"/>
      {/* Left arm */}
      <rect x="55" y="88" width="34" height="90" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      {/* Right arm */}
      <rect x="191" y="88" width="34" height="90" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      {/* Left leg */}
      <rect x="97" y="213" width="36" height="88" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      {/* Right leg */}
      <rect x="147" y="213" width="36" height="88" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>

      {/* ── Thoracic Duct (main lymph vessel, left side) ── */}
      <path d="M140,205 Q128,175 130,140 Q131,115 133,95" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <text x="108" y="155" fill="#7c3aed" fontSize="7" fontWeight="bold">Thoracic</text>
      <text x="108" y="165" fill="#7c3aed" fontSize="7" fontWeight="bold">Duct</text>
      {/* Thoracic duct arrow up to left subclavian */}
      <path d="M133,95 Q128,85 118,83" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#aL)"/>
      <text x="97" y="80" fill="#7c3aed" fontSize="6.5">→ L. subclavian</text>

      {/* ── Right Lymphatic Duct (shorter, right side) ── */}
      <path d="M147,105 Q158,95 168,88" stroke="#8b5cf6" strokeWidth="1.8" fill="none" markerEnd="url(#aL)"/>
      <text x="155" y="82" fill="#7c3aed" fontSize="6.5">R. duct →</text>
      <text x="155" y="91" fill="#7c3aed" fontSize="6.5">R. subclavian</text>

      {/* ── Cervical lymph nodes (neck) ── */}
      <circle cx="127" cy="73" r="5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <circle cx="153" cy="73" r="5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <text x="86" y="73" fill="#5b21b6" fontSize="7" fontWeight="bold">Cervical</text>
      <text x="86" y="82" fill="#5b21b6" fontSize="7" fontWeight="bold">nodes</text>
      <line x1="106" y1="73" x2="122" y2="73" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2,2"/>

      {/* ── Thymus (upper chest, immune maturation) ── */}
      <rect x="122" y="92" width="36" height="22" rx="5" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.5"/>
      <text x="140" y="101" textAnchor="middle" fill="#3b0764" fontSize="7.5" fontWeight="bold">Thymus</text>
      <text x="140" y="111" textAnchor="middle" fill="#5b21b6" fontSize="6.5">T-cell maturation</text>
      {/* Callout line */}
      <line x1="158" y1="103" x2="192" y2="96" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="194" y="93" fill="#5b21b6" fontSize="6.5">T-cells</text>
      <text x="194" y="103" fill="#5b21b6" fontSize="6.5">mature here</text>

      {/* ── Axillary lymph nodes (armpits) ── */}
      <circle cx="89" cy="118" r="6" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <circle cx="191" cy="118" r="6" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <text x="38" y="112" fill="#5b21b6" fontSize="7" fontWeight="bold">Axillary</text>
      <text x="38" y="122" fill="#5b21b6" fontSize="7" fontWeight="bold">nodes</text>
      <line x1="67" y1="118" x2="83" y2="118" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="198" y="115" fill="#5b21b6" fontSize="7">Axillary</text>
      <text x="198" y="125" fill="#5b21b6" fontSize="7">nodes</text>

      {/* ── Spleen (left abdomen, immune filter) ── */}
      <ellipse cx="108" cy="167" rx="18" ry="14" fill="#f9a8d4" stroke="#be185d" strokeWidth="1.5"/>
      <text x="108" y="164" textAnchor="middle" fill="#9d174d" fontSize="7.5" fontWeight="bold">Spleen</text>
      <text x="108" y="174" textAnchor="middle" fill="#be185d" fontSize="6.5">Filters blood</text>
      {/* Callout */}
      <line x1="90" y1="167" x2="62" y2="170" stroke="#be185d" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="15" y="163" fill="#9d174d" fontSize="6.5">Filters blood,</text>
      <text x="15" y="173" fill="#9d174d" fontSize="6.5">destroys old</text>
      <text x="15" y="183" fill="#9d174d" fontSize="6.5">RBCs, immune</text>

      {/* ── Mesenteric / abdominal nodes ── */}
      <circle cx="155" cy="172" r="5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <circle cx="168" cy="160" r="4" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <circle cx="165" cy="185" r="4" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <text x="180" y="158" fill="#5b21b6" fontSize="6.5">Mesenteric</text>
      <text x="180" y="168" fill="#5b21b6" fontSize="6.5">nodes</text>
      <text x="180" y="178" fill="#5b21b6" fontSize="6.5">(abdomen)</text>

      {/* Lymph vessels connecting nodes to thoracic duct */}
      <line x1="89" y1="124" x2="132" y2="155" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="155" y1="172" x2="140" y2="190" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3,2"/>

      {/* ── Inguinal lymph nodes (groin) ── */}
      <circle cx="115" cy="220" r="5.5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <circle cx="165" cy="220" r="5.5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.2"/>
      <text x="75" y="218" fill="#5b21b6" fontSize="7" fontWeight="bold">Inguinal</text>
      <text x="75" y="228" fill="#5b21b6" fontSize="7" fontWeight="bold">nodes</text>
      <line x1="100" y1="220" x2="109" y2="220" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="178" y="218" fill="#5b21b6" fontSize="7">Inguinal</text>
      <text x="178" y="228" fill="#5b21b6" fontSize="7">nodes</text>

      {/* Lymph vessels from legs up */}
      <line x1="115" y1="215" x2="137" y2="195" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="165" y1="215" x2="143" y2="195" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3,2"/>

      {/* Legend */}
      <circle cx="88" cy="296" r="5" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1"/>
      <text x="98" y="300" fill="#4c1d95" fontSize="7">Lymph nodes</text>
      <line x1="148" y1="296" x2="164" y2="296" stroke="#8b5cf6" strokeWidth="2"/>
      <text x="168" y="300" fill="#4c1d95" fontSize="7">Lymph vessels</text>
    </svg>
  );
}

/* ── Flashcard Data ───────────────────────────────────────────────── */

type Unit = "A" | "B" | "C" | "D";

interface Flashcard {
  id: string;
  unit: Unit;
  front: string;
  back: string;
  diagram?: React.ReactNode;
  tag: string;
}

const allCards: Flashcard[] = [
  // ── Unit A ──────────────────────────────────────────────────────
  {
    id: "a1", unit: "A", tag: "10% Rule",
    front: "What is the 10% rule and why does it limit food chain length?",
    back: "Only ~10% of energy at one trophic level transfers to the next — ~90% is lost as heat during metabolism.\n\nThis limits most food chains to 4–5 levels: at 5 levels from 10,000 kJ, only 10 kJ remains — too little to support another predator.",
    diagram: <PyramidDiagram />,
  },
  {
    id: "a2", unit: "A", tag: "Ecological Pyramids",
    front: "Compare the three types of ecological pyramids. Which can be inverted?",
    back: "Energy (kJ/m²/yr) — NEVER inverted. Most reliable.\nBiomass (g/m²) — CAN be inverted in aquatic systems where phytoplankton have low standing biomass but high turnover.\nNumbers (count) — CAN be inverted when one large producer (tree) hosts many consumers, or one host supports many parasites.",
    diagram: <PyramidDiagram />,
  },
  {
    id: "a3", unit: "A", tag: "GPP & NPP",
    front: "What is the difference between GPP and NPP?",
    back: "GPP (Gross Primary Productivity) = total energy fixed by producers through photosynthesis.\n\nNPP (Net Primary Productivity) = GPP minus the plant's own cellular respiration.\n\nNPP = GPP − Plant Respiration\n\nNPP is what's actually available to consumers. Tropical rainforests have highest NPP (~2,200 g/m²/yr); open ocean is lowest (~125 g/m²/yr).",
  },
  {
    id: "a4", unit: "A", tag: "Nitrogen Cycle",
    front: "List the 5 main processes of the nitrogen cycle, including the bacteria responsible.",
    back: "1. Nitrogen Fixation: N₂ → NH₄⁺ (Rhizobium in legume roots, Azotobacter, lightning)\n2. Nitrification: NH₄⁺ → NO₂⁻ → NO₃⁻ (Nitrosomonas, Nitrobacter)\n3. Assimilation: NO₃⁻ absorbed by plant roots → amino acids, proteins\n4. Ammonification: dead matter → NH₄⁺ (decomposers — bacteria, fungi)\n5. Denitrification: NO₃⁻ → N₂ (Pseudomonas, anaerobic) — returns N to atmosphere",
    diagram: <NitrogenCycleDiagram />,
  },
  {
    id: "a5", unit: "A", tag: "Bioaccumulation",
    front: "Distinguish bioaccumulation from biomagnification. Why are fat-soluble toxins worse?",
    back: "Bioaccumulation = build-up of a toxin in ONE organism's tissues because it is absorbed faster than excreted.\n\nBiomagnification = increasing toxin concentration at successive trophic levels as consumers eat many prey.\n\nFat-soluble (lipophilic) toxins like DDT and PCBs cannot be excreted via kidneys — they accumulate in fatty tissues indefinitely and become millions of times more concentrated by the top of the food chain.",
  },
  {
    id: "a6", unit: "A", tag: "Photosynthesis",
    front: "Write the overall equation for photosynthesis. What type of reaction is it?",
    back: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nAnabolic reaction — building complex molecules from simple ones using energy input.\n\nOccurs in chloroplasts. CO₂ from atmosphere; H₂O from soil; light from sun. Glucose is stored chemical energy; O₂ is released as a byproduct of photolysis (water splitting).",
  },
  {
    id: "a7", unit: "A", tag: "Cellular Respiration",
    front: "Write the overall equation for cellular respiration. What type of reaction is it?",
    back: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36–38 ATP\n\nCatabolic reaction — breaking down complex molecules to release energy.\n\nOccurs in mitochondria (mainly) and cytoplasm. Glucose is oxidized completely; energy released is captured as ATP for cellular work.",
  },
  {
    id: "a8", unit: "A", tag: "Open/Closed System",
    front: "Why is the biosphere described as an open system for energy but closed for matter?",
    back: "Energy — OPEN SYSTEM: Solar energy continuously enters from the Sun; heat continuously exits into space. Energy flows one-way through trophic levels and is never recycled — it must be continuously resupplied.\n\nMatter — CLOSED SYSTEM: Atoms cycle continuously between biotic and abiotic components (biogeochemical cycles). Carbon, nitrogen, phosphorus atoms are never destroyed — they are recycled indefinitely.",
  },
  {
    id: "a9", unit: "A", tag: "Carbon Cycle",
    front: "List 4 processes that move carbon through the carbon cycle and the direction of movement.",
    back: "1. Photosynthesis: atmosphere → organisms (CO₂ fixed into glucose)\n2. Cellular Respiration: organisms → atmosphere (organic molecules oxidized → CO₂)\n3. Decomposition: dead matter → atmosphere (decomposers release CO₂)\n4. Combustion: fossil fuels/biomass → atmosphere (burning releases stored CO₂)\n5. Ocean exchange: atmosphere ↔ ocean (CO₂ dissolves as H₂CO₃)\n6. Sedimentation: organisms → geological reservoir (fossilisation over millions of years)",
  },
  {
    id: "a10", unit: "A", tag: "Human Impact",
    front: "What is eutrophication? What human activities cause it and what are the ecological effects?",
    back: "Eutrophication = nutrient over-enrichment of a water body, usually by excess nitrogen (N) and phosphorus (P).\n\nCauses: agricultural fertilizer runoff, sewage, urban storm-water.\n\nEffects: Algal blooms → algae die → decomposers consume all dissolved O₂ → hypoxia → fish kills → 'dead zones'.\n\nAlberta example: Many prairie lakes suffer from eutrophication due to agricultural runoff, especially in southern Alberta.",
  },
  {
    id: "a11", unit: "A", tag: "Phosphorus Cycle",
    front: "Why is the phosphorus cycle the slowest biogeochemical cycle? Why is phosphorus ecologically important?",
    back: "Slowest because: phosphorus has NO atmospheric gaseous phase — it only moves through weathering (rock → soil/water), biological uptake, death, decomposition, and sedimentation. Geological timescale without human input.\n\nEcological importance: phosphorus is essential for ATP, DNA/RNA, cell membranes (phospholipids), and bone (Ca₃(PO₄)₂). Often the primary limiting nutrient in aquatic ecosystems.",
  },
  {
    id: "a12", unit: "A", tag: "Indigenous Knowledge",
    front: "What is Traditional Ecological Knowledge (TEK) and how does it contribute to understanding ecosystems?",
    back: "TEK = multi-generational Indigenous knowledge about local ecosystems, accumulated through careful observation and oral traditions over centuries.\n\nContributions:\n• Documents long-term ecosystem change (timescales exceeding Western datasets)\n• Identifies indicator species for ecosystem health\n• Demonstrates sustainable resource management (e.g., cultural burning to maintain prairie)\n• Informed modern ecology about keystone species roles (e.g., bison in prairie systems)\n• Guides habitat restoration efforts in Alberta",
  },
  {
    id: "a13", unit: "A", tag: "Biogeochemical Cycles",
    front: "Describe two specific human impacts on the nitrogen cycle and their ecological consequences.",
    back: "1. Synthetic fertilizers (Haber-Bosch process): Doubles the natural rate of nitrogen fixation globally. Excess NO₃⁻ leaches into waterways → eutrophication → algal blooms → oxygen depletion → dead zones (e.g., Gulf of Mexico hypoxic zone).\n\n2. Combustion of fossil fuels: Releases NOₓ gases → atmospheric deposition of nitrogen → increases productivity in some ecosystems, disrupting species balance favoring fast-growing N-loving plants.",
  },
  {
    id: "a14", unit: "A", tag: "Acid Precipitation",
    front: "What causes acid precipitation and what are its ecological effects?",
    back: "Cause: SO₂ + NOₓ from burning fossil fuels dissolve in atmospheric water → H₂SO₄ (sulfuric acid) + HNO₃ (nitric acid) → rain/snow with pH < 5.6.\n\nEffects:\n• Lowers lake pH → kills fish, aquatic invertebrates\n• Leaches Ca²⁺ and Mg²⁺ from forest soils → tree die-off\n• Dissolves limestone structures (statues, buildings)\n• Alberta lakes vulnerable — thin glacially scraped soils provide little buffering capacity",
  },
  {
    id: "a15", unit: "A", tag: "Great Oxygenation Event",
    front: "What were stromatolites and why are they significant to the history of Earth's atmosphere?",
    back: "Stromatolites = layered microbial mats built by ancient cyanobacteria — the world's first photosynthetic organisms.\n\nSignificance: The Great Oxygenation Event (~2.4 billion years ago). Cyanobacteria released O₂ as a byproduct of photosynthesis, gradually transforming Earth's early reducing (anaerobic) atmosphere into an O₂-rich atmosphere.\n\nThis made aerobic life possible and led to the ozone layer (O₃) which shields Earth from UV radiation — enabling terrestrial life to eventually evolve.",
  },

  // ── Unit B ──────────────────────────────────────────────────────
  {
    id: "b1", unit: "B", tag: "Natural Selection",
    front: "State the four conditions required for natural selection to occur.",
    back: "1. Overproduction: more offspring produced than the environment can support → competition.\n2. Heritable Variation: individuals differ in heritable traits (due to mutation, sexual reproduction).\n3. Inheritance: advantageous traits must be genetically transmitted to offspring.\n4. Differential Survival & Reproduction: individuals with advantageous traits survive more and reproduce more ('fitness').\n\nKey: NS selects from EXISTING variation — it does not create new traits or direct mutations.",
  },
  {
    id: "b2", unit: "B", tag: "Niche",
    front: "Distinguish habitat from ecological niche. What is the difference between fundamental and realized niche?",
    back: "Habitat = WHERE an organism lives (its 'address').\nNiche = WHAT it does — food, activity time, tolerances, interactions (its 'profession').\n\nFundamental niche: Full range an organism CAN occupy without competition.\nRealized niche: Actual niche occupied in nature — smaller due to competition, predation, and disease.\n\nCompetitive exclusion principle: Two species with identical niches cannot coexist indefinitely — one eliminates the other.",
  },
  {
    id: "b3", unit: "B", tag: "Taxonomy",
    front: "Write the taxonomic hierarchy from broadest to most specific and state the rules of binomial nomenclature.",
    back: "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species\nMnemonic: 'Do Kind Physicists Come Over For Good Soup?'\n\nBinomial Nomenclature (Linnaeus, 1758):\n• Genus capitalized, species epithet lowercase\n• Both italicized when typed; underlined when handwritten\n• Example: Canis lupus (grey wolf)\n• Genus abbreviated after first use: C. lupus\n• Latin/Latinized Greek — universal scientific language",
  },
  {
    id: "b4", unit: "B", tag: "Evidence for Evolution",
    front: "List and briefly explain 5 types of evidence supporting evolutionary theory.",
    back: "1. Fossil record: Documents progression of life forms; transitional fossils (Tiktaalik, Archaeopteryx) show change over time.\n2. Homologous structures: Same bone structure, different function → common ancestry (human arm / whale flipper / bat wing).\n3. Vestigial structures: Non-functional remnants of ancestral structures (human coccyx, whale pelvic bones, appendix).\n4. Biogeography: Species distribution matches evolutionary history and continental drift (Galápagos finches).\n5. Molecular biology: DNA and protein sequences show evolutionary relatedness (humans and chimps share ~98.7% DNA).",
  },
  {
    id: "b5", unit: "B", tag: "Lamarck vs Darwin",
    front: "Compare Lamarck's hypothesis of evolution with Darwin's theory of natural selection.",
    back: "Lamarck (1809): Organisms develop traits through use/disuse during their lifetime and pass these ACQUIRED traits to offspring. Giraffe stretched its neck → offspring born with longer necks. INCORRECT — acquired traits cannot be inherited (no genetic mechanism).\n\nDarwin & Wallace (1859): Heritable variation already exists in populations. Environment selects which variants survive and reproduce more. Populations change over generations — NOT individuals during their lifetimes. SUPPORTED by genetics, fossils, molecular biology.",
  },
  {
    id: "b6", unit: "B", tag: "Adaptations",
    front: "Describe the three types of adaptations. Give one Alberta example of each.",
    back: "Structural: Physical body features that improve survival.\n• Example: Thick winter fur coat of Arctic wolves for insulation.\n\nPhysiological: Internal biochemical/metabolic processes.\n• Example: Antifreeze proteins in Arctic grayling fish blood prevent ice crystal formation.\n\nBehavioural: Actions (learned or instinctive) that increase fitness.\n• Example: Snowshoe hares are nocturnal during winter to avoid diurnal hawks.",
  },
  {
    id: "b7", unit: "B", tag: "Homologous vs Analogous",
    front: "What is the difference between homologous and analogous structures? Which supports common ancestry?",
    back: "Homologous structures: Same underlying bone structure, DIFFERENT functions. Evidence of COMMON ANCESTRY (divergent evolution).\nExample: Human arm / whale flipper / bat wing / horse foreleg — all have humerus + radius + ulna + carpals.\n\nAnalogous structures: Similar FUNCTION, DIFFERENT structure. Evidence of CONVERGENT EVOLUTION — not shared ancestry.\nExample: Bird wing (bone + feathers) vs insect wing (chitin membrane) — same function, completely different structure.",
  },
  {
    id: "b8", unit: "B", tag: "Six Kingdoms",
    front: "Name the six kingdoms and state which are prokaryotic vs eukaryotic.",
    back: "PROKARYOTIC (no nucleus, membrane-bound organelles):\n• Eubacteria — typical bacteria (E. coli, Streptococcus, cyanobacteria)\n• Archaebacteria — extremophiles (methanogens, halophiles, thermophiles)\n\nEUKARYOTIC (have nucleus, membrane-bound organelles):\n• Protista — mostly unicellular (Amoeba, Paramecium, algae)\n• Fungi — absorptive heterotrophs (mushrooms, mould, yeast)\n• Plantae — multicellular autotrophs (mosses to flowering plants)\n• Animalia — multicellular heterotrophs (invertebrates to mammals)",
  },
  {
    id: "b9", unit: "B", tag: "Population Dynamics",
    front: "Define carrying capacity (K). Compare J-curve and S-curve population growth.",
    back: "Carrying capacity (K) = maximum population size an environment can sustainably support given available resources.\n\nJ-curve (exponential growth): Population grows without limit — requires unlimited resources. Unrealistic long-term; can occur briefly when a species colonizes new habitat.\n\nS-curve (logistic growth): Growth is rapid when population is small (resources abundant), then slows as population approaches K, and levels off at K. Realistic model. As population grows, density-dependent limiting factors increase in intensity.",
  },
  {
    id: "b10", unit: "B", tag: "Speciation",
    front: "Distinguish allopatric from sympatric speciation. What role does reproductive isolation play?",
    back: "Allopatric: Geographic barrier (mountain, river, glacier) physically separates one population → each evolves independently → accumulate different mutations → reproductive isolation → two species. MOST COMMON TYPE. Alberta example: different ground squirrel species on either side of the Rockies.\n\nSympatric: New species arises within same geographic area — usually through polyploidy (extra chromosome sets) in plants, or dramatic niche partitioning.\n\nReproductive isolation = necessary for speciation — once two populations cannot interbreed (even if they meet again), they are separate species.",
  },
  {
    id: "b11", unit: "B", tag: "Species Interactions",
    front: "Complete the species interaction table: Mutualism, Commensalism, Parasitism, Competition. Give an Alberta example of each.",
    back: "Mutualism (+/+): Both benefit. Alberta example: mycorrhizal fungi + aspen tree roots (fungi help water/nutrient uptake; tree provides photosynthate).\n\nCommensalism (+/0): One benefits, other unaffected. Example: Cattle egrets follow bison to catch disturbed insects.\n\nParasitism (+/−): Parasite benefits; host harmed (rarely killed immediately). Example: Tapeworm in moose intestine.\n\nPredation (+/−): Predator benefits; prey dies. Example: Wolf hunting elk in Jasper.\n\nCompetition (−/−): Both harmed. Example: Wolves and coyotes competing for prey in Alberta foothills.",
  },
  {
    id: "b12", unit: "B", tag: "Limiting Factors",
    front: "What is the difference between density-dependent and density-independent limiting factors? Give two examples of each.",
    back: "Density-Dependent: Effect becomes stronger as population grows (related to crowding).\nExamples: Disease (spreads faster in dense population), food competition, predation (predators attracted to abundant prey), territorial stress.\n\nDensity-Independent: Effect is the same regardless of population size.\nExamples: Wildfire, extreme cold snap, flooding, volcanic eruption, drought — kill a proportion of population regardless of density.\n\nNote: Most populations are regulated by BOTH types acting simultaneously.",
  },
  {
    id: "b13", unit: "B", tag: "Evolutionary Patterns",
    front: "Compare gradualism and punctuated equilibrium. What evidence supports each?",
    back: "Gradualism: Evolution is slow and continuous through accumulation of small changes. Predicts many transitional forms in fossil record. Supported by Darwin's original theory and many continuous evolutionary sequences observed in fossil records.\n\nPunctuated Equilibrium (Gould & Eldredge, 1972): Long periods of stasis (little change) separated by geologically rapid bursts of evolution. Supported by the observation that many fossil lineages show sudden appearance, then long stability — the 'gaps' that troubled Darwin.\n\nBoth models are observed in different taxonomic groups.",
  },
  {
    id: "b14", unit: "B", tag: "Ecological Hierarchy",
    front: "List the levels of ecological organisation from individual to biosphere. Define community and ecosystem.",
    back: "Individual → Population → Community → Ecosystem → Biome → Biosphere\n\nCommunity = all populations of different species living in the same area at the same time (biotic component only).\n\nEcosystem = community + its abiotic environment (soil, water, climate, minerals, etc.). Includes all biotic and abiotic interactions.\n\nAlberta example: Elk Island National Park community = bison, elk, wolves, aspen, grasses, fungi. Ecosystem includes soil, hydrology, climate.",
  },
  {
    id: "b15", unit: "B", tag: "Vestigial Structures",
    front: "What is a vestigial structure? Give three examples and explain what each suggests about ancestry.",
    back: "Vestigial structure = a non-functional remnant of a structure that was functional in an ancestor. Strong evidence of evolutionary descent.\n\n1. Human coccyx: Remnant of a tail — common in our primate ancestors who had tails for balance.\n2. Whale pelvic bones: Remnant hindlimb skeleton — whales descended from terrestrial four-limbed ancestors.\n3. Human appendix: Remnant of a larger cecum used for cellulose digestion in herbivorous ancestors.\n\nOther examples: Snake hindlimb remnants, ear-moving muscles in humans (other mammals use them), nictitating membrane (third eyelid) — visible in some people as a pink flap at inner corner of eye.",
  },

  // ── Unit C ──────────────────────────────────────────────────────
  {
    id: "c1", unit: "C", tag: "Light Reactions",
    front: "What are the inputs and outputs of the light-dependent reactions? Where do they occur?",
    back: "Location: THYLAKOID MEMBRANES (grana)\n\nINPUTS: H₂O (water), light energy (photons), ADP + Pᵢ, NADP⁺\n\nOUTPUTS: ATP, NADPH, O₂\n\nKey events: 1) PSII — water splitting (photolysis) releases O₂ and electrons. 2) ETC — electrons flow → pump H⁺ → ATP via chemiosmosis. 3) PSI — electrons re-energized → reduce NADP⁺ to NADPH. PSII occurs FIRST despite the numbering.",
    diagram: <PhotosynthesisDiagram />,
  },
  {
    id: "c2", unit: "C", tag: "Calvin Cycle",
    front: "Describe the three phases of the Calvin cycle. What are the inputs and outputs?",
    back: "Location: STROMA\nInputs: CO₂, ATP, NADPH | Outputs: G3P (glucose precursor), ADP, NADP⁺\n\n1. Carbon Fixation: RuBisCO attaches CO₂ to RuBP (5C) → unstable 6C → two 3-PGA\n2. Reduction: 3-PGA → G3P using ATP + NADPH\n3. Regeneration: 5 of 6 G3P → regenerate 3 RuBP (uses ATP); 1 G3P exits\n\n6 turns needed per glucose. Net: 18 ATP + 12 NADPH consumed per glucose made.",
    diagram: <PhotosynthesisDiagram />,
  },
  {
    id: "c3", unit: "C", tag: "C3 vs C4 vs CAM",
    front: "Compare C3, C4, and CAM photosynthesis pathways.",
    back: "C3 Plants: First product = 3-PGA (3C). CO₂ fixed directly by RuBisCO. Susceptible to photorespiration in heat. Examples: wheat, soybeans, most trees. Temperate climates.\n\nC4 Plants: First product = OAA (4C) in mesophyll; CO₂ concentrated near RuBisCO in bundle sheath → minimizes photorespiration. Examples: corn, sugarcane. Hot, sunny habitats.\n\nCAM Plants: Stomata open at NIGHT (store CO₂ as organic acids); closed during day → minimizes water loss. Examples: cacti, pineapple. Desert/arid habitats. Slowest growth but highest water efficiency.",
  },
  {
    id: "c4", unit: "C", tag: "Chromatography",
    front: "What is paper chromatography and how is Rf calculated? List typical Rf values for plant pigments.",
    back: "Paper chromatography separates pigments by polarity — less polar pigments travel farther with the solvent because they have weaker attraction to the polar paper.\n\nRf = distance pigment moved ÷ distance solvent front moved\n(Rf ranges 0 to 1; higher = less polar = travels farther)\n\nTypical Rf values:\n• Beta-carotene: ~0.95 (LEAST polar, highest Rf)\n• Xanthophylls: ~0.70\n• Chlorophyll a: ~0.65\n• Chlorophyll b: ~0.45 (MOST polar, lowest Rf)",
  },
  {
    id: "c5", unit: "C", tag: "Pigments",
    front: "Name the four main photosynthetic pigment groups and their light absorption properties.",
    back: "1. Chlorophyll a (bright green): PRIMARY pigment. Absorbs violet-blue (~430 nm) and RED (~680 nm). Directly drives light reactions in PSI and PSII.\n\n2. Chlorophyll b (yellow-green): Accessory. Absorbs blue (~453 nm) and orange-red (~642 nm). Transfers energy to chlorophyll a.\n\n3. Carotenoids — beta-carotene (orange), xanthophylls (yellow): Absorb blue-violet (400–500 nm). Also photoprotective — prevent chlorophyll from being bleached by excess light.\n\n4. Phycobilins (red/blue): In red algae and cyanobacteria. Absorb green-yellow light (500–600 nm) unavailable to chlorophylls.",
  },
  {
    id: "c6", unit: "C", tag: "Spectra",
    front: "Distinguish between absorption spectrum and action spectrum. How are they related?",
    back: "Absorption spectrum: Shows which wavelengths a specific pigment ABSORBS. Measured with a spectrophotometer — light passed through purified pigment solution.\nChlorophyll a peaks: violet-blue (~430 nm) and red (~680 nm). Green reflected.\n\nAction spectrum: Shows which wavelengths drive the most PHOTOSYNTHESIS. Measured by O₂ production or CO₂ uptake at different wavelengths.\n\nRelationship: They closely mirror each other — confirming that the wavelengths a pigment absorbs are the wavelengths that power the reaction. Green light is least effective in BOTH spectra.",
  },
  {
    id: "c7", unit: "C", tag: "Glycolysis",
    front: "Describe glycolysis: location, O₂ requirement, inputs, outputs.",
    back: "Location: CYTOPLASM (not in mitochondria)\nO₂ required? NO — anaerobic (oldest metabolic pathway; universal to all cells)\n\nInputs: 1 glucose (6C) + 2 ATP (investment phase)\nOutputs: 2 pyruvate (3C each) + 4 ATP (payoff) = NET 2 ATP + 2 NADH\n\nProcess: Glucose split in half via 10 enzyme-catalyzed steps. Investment of 2 ATP first, then 4 ATP harvested = net gain of 2 ATP. NADH carries electrons to ETC (if O₂ available) or used in fermentation.",
  },
  {
    id: "c8", unit: "C", tag: "Krebs Cycle",
    front: "What happens in the Krebs cycle? Give the products per glucose (2 turns).",
    back: "Location: MITOCHONDRIAL MATRIX\nRequires O₂: Indirectly (ETC must accept electrons generated here)\n\nEach acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C) → fully oxidized back to CO₂.\n\nPer turn: 3 NADH + 1 FADH₂ + 1 ATP + 2 CO₂\nPer glucose (2 turns): 6 NADH + 2 FADH₂ + 2 ATP + 4 CO₂\n\nKey: NADH and FADH₂ are electron carriers that bring high-energy electrons to the ETC for the main ATP harvest.",
  },
  {
    id: "c9", unit: "C", tag: "ETC & ATP Yield",
    front: "Describe the ETC and chemiosmosis. What is the total ATP yield from aerobic respiration?",
    back: "Location: INNER MITOCHONDRIAL MEMBRANE\nNADH and FADH₂ donate electrons to protein complexes → electrons flow toward O₂ → energy pumps H⁺ into intermembrane space → H⁺ flows back through ATP synthase → ATP synthesized.\n\nFinal electron acceptor: O₂ → forms H₂O\n\nATP Yield per glucose:\nGlycolysis: 2 ATP\nKrebs cycle: 2 ATP\n10 NADH × 2.5 ATP: ~25 ATP\n2 FADH₂ × 1.5 ATP: ~3 ATP\nTotal: ~32–38 ATP\n\nFermentation produces only 2 ATP (18–19× less efficient).",
    diagram: <RespirationDiagram />,
  },
  {
    id: "c10", unit: "C", tag: "Fermentation",
    front: "Compare lactic acid and alcoholic fermentation. When does each occur and why?",
    back: "Both: Anaerobic. Produce only 2 ATP. Regenerate NAD⁺ so glycolysis can continue.\n\nLactic acid fermentation:\nPyruvate + NADH → Lactic acid + NAD⁺\nWho: Animal muscle cells (intense exercise), some bacteria\nApplications: yogurt, cheese, sauerkraut, sourdough\n\nAlcoholic fermentation:\nPyruvate → Acetaldehyde + CO₂ (then) → Ethanol + NAD⁺\nWho: Yeast, some plant cells\nApplications: bread (CO₂ makes it rise), beer, wine, biofuels\n\nEthanol is toxic to yeast above ~15% — limits wine alcohol content.",
  },
  {
    id: "c11", unit: "C", tag: "Photosystems",
    front: "What is the difference between Photosystem I (PSI) and Photosystem II (PSII)?",
    back: "PSII (P680): Absorbs light at 680 nm. OCCURS FIRST in the sequence. Water is split here (photolysis) → O₂ released → electrons energized. Electrons enter the ETC and pump H⁺ → ATP via chemiosmosis.\n\nPSI (P700): Absorbs light at 700 nm. Re-energizes electrons from the ETC. Electrons reduce NADP⁺ → NADPH (used in Calvin cycle).\n\nMemory aid: Despite the numbers, PSII comes before PSI — named in order of discovery, not reaction order.",
  },
  {
    id: "c12", unit: "C", tag: "Factors",
    front: "List four factors that limit photosynthesis rate and describe the effect of each.",
    back: "1. Light intensity: Rate increases to saturation point; too much UV can damage pigments. Limiting at low light.\n2. CO₂ concentration: Increases Calvin cycle rate (more substrate for RuBisCO) until saturation.\n3. Temperature: Rate increases to optimum (~30°C for most plants); enzymes denature above ~40°C → rate drops sharply.\n4. Water: Photolysis requires water; drought causes stomata to close (CO₂ entry blocked) → rate drops dramatically.\n5. Wavelength: Red (~680 nm) and blue (~430 nm) light most effective; green (~550 nm) reflected — least useful.",
  },
  {
    id: "c13", unit: "C", tag: "RuBisCO",
    front: "What is RuBisCO and why is it important? What problem does it cause?",
    back: "RuBisCO = ribulose-1,5-bisphosphate carboxylase/oxygenase. The enzyme that catalyzes carbon fixation in the Calvin cycle — attaches CO₂ to RuBP (5C) to start glucose synthesis.\n\nImportance: Most abundant protein on Earth; responsible for virtually all organic carbon entering the biosphere.\n\nProblem — Photorespiration: At high temperatures and low CO₂, RuBisCO binds O₂ instead of CO₂ → wasteful cycle that releases CO₂ WITHOUT producing ATP. C4 and CAM plants evolved strategies to concentrate CO₂ near RuBisCO to minimize this.",
  },
  {
    id: "c14", unit: "C", tag: "ATP",
    front: "Describe ATP structure, how energy is released from it, and three uses in the cell.",
    back: "Structure: Adenosine (adenine + ribose sugar) + 3 phosphate groups. Energy stored in the covalent bonds between phosphate groups.\n\nEnergy release: Hydrolysis — ATP + H₂O → ADP + Pᵢ + ~30 kJ/mol. Bond between 2nd and 3rd phosphate broken.\n\nThree cellular uses:\n1. Muscle contraction (energizes myosin for power stroke, detaches cross-bridges, pumps Ca²⁺)\n2. Active transport (pumps molecules against concentration gradient, e.g., Na⁺/K⁺ pump)\n3. Biosynthesis (anabolic reactions — building proteins, DNA, polysaccharides)",
  },
  {
    id: "c15", unit: "C", tag: "Pyruvate Oxidation",
    front: "What happens during pyruvate oxidation? Where does it occur and what does it produce?",
    back: "Location: MITOCHONDRIAL MATRIX (pyruvate transported in from cytoplasm)\n\nEach pyruvate (3C) → Acetyl-CoA (2C):\n• CO₂ released (1 per pyruvate = 2 per glucose) — decarboxylation\n• NAD⁺ reduced to NADH (1 per pyruvate = 2 per glucose)\n• CoA (coenzyme A) attaches → Acetyl-CoA\n\nPer glucose: 2 pyruvate → 2 Acetyl-CoA + 2 CO₂ + 2 NADH\nATP produced: 0 (but NADH carries energy to ETC)\n\nAcetyl-CoA then enters the Krebs cycle.",
  },
  {
    id: "c16", unit: "C", tag: "Chloroplast Structure",
    front: "Identify 5 chloroplast structures and state the function of each.",
    back: "1. Outer & inner membranes: Enclose the chloroplast; control molecule entry/exit.\n2. Stroma: Fluid-filled space; site of Calvin cycle. Contains RuBisCO, enzymes, ribosomes, DNA.\n3. Thylakoid membranes: Internal folded membranes; site of light reactions. Contain photosystems, ETC, and ATP synthase.\n4. Grana (stacks of thylakoids): Maximize surface area for light capture and light reactions.\n5. Thylakoid lumen: Interior of thylakoid sac; H⁺ accumulates here during light reactions → drives ATP synthase.",
  },

  // ── Unit D ──────────────────────────────────────────────────────
  {
    id: "d1", unit: "D", tag: "Blood Types",
    front: "Complete the ABO blood type table: antigens, antibodies, and compatible donors for each type.",
    back: "Type A: Antigen A on RBCs | Antibody anti-B in plasma | Can receive: A, O\nType B: Antigen B on RBCs | Antibody anti-A in plasma | Can receive: B, O\nType AB: Antigens A + B | No antibodies | Can receive: A, B, AB, O (universal recipient)\nType O: No antigens | Antibodies anti-A AND anti-B | Can receive: O only (universal donor)\n\nKey: If antibody meets its matching antigen → agglutination (clumping) → dangerous transfusion reaction.\nRh⁺ = has Rh antigen; Rh⁻ = lacks it. Rh⁻ individuals can develop anti-Rh antibodies if exposed to Rh⁺ blood.",
  },
  {
    id: "d2", unit: "D", tag: "Erythroblastosis",
    front: "Explain erythroblastosis fetalis: what causes it, when it occurs, and how it is prevented.",
    back: "Cause: Rh incompatibility — Rh⁻ mother carrying Rh⁺ fetus.\n\nSequence:\n1st pregnancy: Rh⁻ mother usually fine — some Rh⁺ fetal blood enters mother at delivery → immune system slowly makes anti-Rh antibodies (IgG class — small enough to cross placenta).\n\n2nd+ Rh⁺ pregnancy: Mother's anti-Rh antibodies cross placenta → attach to fetal Rh⁺ RBCs → hemolysis → severe anemia, jaundice, organ damage, potentially fatal.\n\nPrevention: RhoGAM (anti-D immunoglobulin) injection given to Rh⁻ mothers within 72 hrs of delivery — neutralizes Rh⁺ fetal cells before mother can form antibodies.",
  },
  {
    id: "d3", unit: "D", tag: "Immune System",
    front: "Describe the three lines of immune defence.",
    back: "1st Line (non-specific external barriers): Intact skin, mucous membranes, stomach acid (pH 1–2), lysozyme in tears/saliva, cilia in respiratory tract, normal microbiome.\n\n2nd Line (non-specific internal): Phagocytosis (neutrophils, macrophages engulf pathogens), inflammation (histamine → vasodilation → warmth, swelling, redness), fever (inhibits pathogen growth), NK cells (kill infected/cancerous cells), interferons (warn nearby cells), complement proteins (punch holes in bacteria).\n\n3rd Line (specific adaptive immunity): B lymphocytes → plasma cells → antibodies specific to ONE antigen. T lymphocytes — helper T (coordinate immune response) + cytotoxic T (kill infected cells). Memory cells → rapid response to future exposure (basis of vaccination).",
  },
  {
    id: "d4", unit: "D", tag: "Muscle Types",
    front: "Compare the three types of muscle tissue.",
    back: "Skeletal Muscle: Striated (banded), multinucleate, VOLUNTARY. Attached to bone via tendons. Fast contraction; fatigues quickly. Controls body movement.\n\nCardiac Muscle: Striated, branched fibres connected by intercalated discs and gap junctions, INVOLUNTARY, autorhythmic. Found ONLY in heart. Fatigue-resistant (mitochondria-rich). Contracts rhythmically 24/7.\n\nSmooth Muscle: NON-striated (smooth), uninucleate, INVOLUNTARY. Found in walls of hollow organs (gut, blood vessels, bladder, uterus). Slowest contraction; most fatigue-resistant. Controlled by autonomic NS and hormones.",
  },
  {
    id: "d5", unit: "D", tag: "Sliding Filament",
    front: "Explain the sliding filament model of muscle contraction. What role does ATP play?",
    back: "Actin (thin) and myosin (thick) filaments slide past each other — sarcomere shortens; filament lengths unchanged.\n\nSteps: Nerve impulse → ACh released → action potential in muscle → SR releases Ca²⁺ → Ca²⁺ binds troponin → tropomyosin shifts → myosin-binding sites on actin exposed → myosin head binds (cross-bridge) → power stroke (actin pulled in) → ATP binds myosin → cross-bridge released → ATP hydrolyzed → myosin re-cocked → cycle repeats while Ca²⁺ and ATP present.\n\nATP's 3 roles: 1) Energize (cock) myosin head. 2) Release cross-bridge after power stroke. 3) Pump Ca²⁺ back into SR (relaxation). Rigor mortis = no ATP → cross-bridges cannot release.",
  },
  {
    id: "d6", unit: "D", tag: "Nephron",
    front: "Describe the four processes of urine formation in the nephron.",
    back: "1. Filtration (Glomerulus / Bowman's Capsule): Blood pressure forces water, glucose, amino acids, urea, ions into Bowman's capsule. Proteins and blood cells stay in blood (too large).\n\n2. Reabsorption: Useful molecules taken back into bloodstream — glucose (100%) and amino acids in PCT; Na⁺, Cl⁻, water throughout tubule.\n\n3. Secretion: Wastes moved from blood → tubule fluid — H⁺, K⁺, NH₄⁺, drugs (e.g., penicillin) added to forming urine.\n\n4. Excretion: Final concentrated urine exits collecting duct → ureter → bladder → expelled.",
    diagram: <NephronDiagram />,
  },
  {
    id: "d7", unit: "D", tag: "ADH & Aldosterone",
    front: "Compare the functions of ADH and aldosterone in kidney regulation.",
    back: "ADH (Antidiuretic Hormone):\n• Source: Posterior pituitary gland\n• Trigger: Blood osmolarity rises (dehydration) → hypothalamus detects → ADH released\n• Effect: Inserts aquaporins into collecting duct membrane → more water reabsorbed → concentrated urine, smaller volume, blood osmolarity restored\n• Blocked by: Alcohol → increased urine output (diuresis)\n\nAldosterone:\n• Source: Adrenal cortex (steroid hormone)\n• Trigger: Low blood Na⁺ or low blood pressure → renin-angiotensin-aldosterone system (RAAS)\n• Effect: Promotes Na⁺ reabsorption in DCT → water follows osmotically → blood pressure and volume rise",
  },
  {
    id: "d8", unit: "D", tag: "Heart & Circulation",
    front: "Trace blood flow through both circulatory circuits starting and ending at the right atrium.",
    back: "Pulmonary Circuit (deoxygenated → oxygenated):\nRight atrium → Right ventricle → Pulmonary arteries → Lung capillaries (O₂ in, CO₂ out) → Pulmonary veins → Left atrium\n\nSystemic Circuit (oxygenated → deoxygenated):\nLeft atrium → Left ventricle → Aorta → Arteries → Arterioles → Capillaries (O₂ to tissues, CO₂ from tissues) → Venules → Veins → Superior/inferior vena cava → Right atrium\n\nValves: Tricuspid (RA→RV), Pulmonary semilunar (RV→PA), Mitral/bicuspid (LA→LV), Aortic semilunar (LV→Aorta). All prevent backflow.",
    diagram: <HeartFlowDiagram />,
  },
  {
    id: "d9", unit: "D", tag: "Enzyme Inhibition",
    front: "Compare competitive, non-competitive, and irreversible enzyme inhibition.",
    back: "Competitive: Inhibitor mimics substrate; competes for ACTIVE SITE. Reversible — adding more substrate displaces inhibitor. Active site shape UNCHANGED.\nExample: Statins block active site of HMG-CoA reductase.\n\nNon-Competitive: Inhibitor binds ALLOSTERIC SITE (different location). Changes active site shape so substrate cannot bind. Adding more substrate does NOT help — shape already altered.\nExample: Many nerve agents block acetylcholinesterase via allosteric sites.\n\nIrreversible: Inhibitor permanently binds (often covalently) to enzyme → enzyme disabled. Must be replaced.\nExample: Aspirin permanently blocks COX enzymes; sarin gas permanently inhibits acetylcholinesterase.",
  },
  {
    id: "d10", unit: "D", tag: "Respiratory System",
    front: "Describe gas exchange at the alveoli. What structural features maximise efficiency?",
    back: "Location: Alveoli (air sacs in lungs) — ~300 million per lung; total surface area ~70 m².\n\nGas exchange: O₂ diffuses from alveolar air → blood (high → low [O₂]). CO₂ diffuses from blood → alveolar air (high → low [CO₂]).\n\nStructural features:\n• Alveolar walls one cell thick (simple squamous epithelium) → minimal diffusion distance\n• Rich capillary network surrounding each alveolus → continuous blood flow\n• Enormous surface area (tennis court equivalent)\n• Moist lining → gases dissolve before diffusing\n• Surfactant: reduces surface tension → prevents alveolar collapse on exhalation",
  },
  {
    id: "d11", unit: "D", tag: "Digestion",
    front: "Describe the enzymatic digestion of proteins, carbohydrates, and lipids. Where does each occur?",
    back: "CARBOHYDRATES:\n• Mouth: salivary amylase breaks starch → maltose\n• Small intestine: pancreatic amylase + disaccharidases (maltase, sucrase, lactase) → monosaccharides\n\nPROTEINS:\n• Stomach: pepsin (activated by HCl, pH 1.5–2) breaks proteins → peptides\n• Small intestine: trypsin + chymotrypsin (pancreatic) → smaller peptides; peptidases → amino acids\n\nLIPIDS:\n• Small intestine only: bile emulsifies fat → droplets\n• Pancreatic lipase breaks triglycerides → fatty acids + glycerol\n• Absorbed as micelles → lacteals (lymph system)",
  },
  {
    id: "d12", unit: "D", tag: "Blood Components",
    front: "Describe the four components of blood and their functions.",
    back: "Plasma (~55%): Liquid matrix — water (90%) + dissolved proteins (albumin maintains osmotic pressure; fibrinogen for clotting; antibodies) + glucose, hormones, CO₂ as HCO₃⁻, ions.\n\nRed Blood Cells / Erythrocytes (~44%): Biconcave discs, no nucleus at maturity, contain hemoglobin. Carry O₂ (as HbO₂) and some CO₂. Made in red bone marrow. Lifespan ~120 days.\n\nWhite Blood Cells / Leukocytes (<1%): Neutrophils (phagocytosis), lymphocytes (B cells → antibodies; T cells → cell-mediated immunity), monocytes, eosinophils.\n\nPlatelets / Thrombocytes (<1%): Cell fragments; release clotting factors when vessel wall damaged → initiate coagulation cascade.",
  },
  {
    id: "d13", unit: "D", tag: "Digestive Structures",
    front: "What is the role of bile in digestion? Where is it made and stored?",
    back: "Made by: LIVER (hepatocytes)\nStored in: GALLBLADDER\nReleased into: Small intestine (via bile duct) when fat-containing chyme enters duodenum\n\nFunction: EMULSIFICATION of lipids — bile salts (detergent-like molecules) break large fat globules into tiny fat droplets, vastly increasing surface area for pancreatic lipase to act on.\n\nImportant: Bile does NOT digest anything chemically (it is NOT an enzyme). It physically prepares fats for enzymatic digestion by lipase.\n\nBile also contains: bile pigments (bilirubin from hemoglobin breakdown, excreted in feces), cholesterol, and bicarbonate.",
  },
  {
    id: "d14", unit: "D", tag: "Breathing",
    front: "Describe the mechanics of inhalation and exhalation. Which muscles are involved?",
    back: "INHALATION (active):\n• Diaphragm contracts → moves downward → thoracic volume increases\n• External intercostal muscles contract → ribs move up and out → thoracic volume increases further\n• Increased volume → decreased lung pressure (below atmospheric) → air flows IN\n\nEXHALATION AT REST (passive):\n• Diaphragm and external intercostals RELAX\n• Thoracic volume decreases → lung pressure rises above atmospheric → air pushed OUT\n\nFORCED EXHALATION (exercise/coughing):\n• Internal intercostal muscles + abdominal muscles actively contract → forceful air expulsion\n\nPlural membranes create negative pressure that keeps lungs adhered to thoracic wall, preventing collapse.",
  },
  {
    id: "d15", unit: "D", tag: "Absorption",
    front: "Where does nutrient absorption mainly occur? Describe the structures that facilitate it.",
    back: "Location: SMALL INTESTINE (most absorption occurs here)\n\nStructures:\n• Villi: Finger-like projections of intestinal wall (~1 mm tall). Multiply surface area ~10×.\n• Microvilli (brush border): Microscopic projections on each epithelial cell. Multiply surface area further. Total increase: ~600-fold.\n• Capillaries within villi: Glucose and amino acids absorbed here → portal vein → liver.\n• Lacteals within villi: Lymph capillaries — fatty acids and glycerol (as chylomicrons) absorbed here → lymph system → bypasses liver initially.\n\nLarge intestine: Absorbs remaining water, ions (Na⁺, Cl⁻), and vitamins K and B₁₂ produced by gut bacteria.",
  },
  {
    id: "d16", unit: "D", tag: "Blood Vessels",
    front: "Compare the structure and function of arteries, capillaries, and veins.",
    back: "Arteries: Thick walls (smooth muscle + elastic fibres), no valves. Carry blood AWAY from heart at HIGH pressure. Elastic recoil maintains flow between heartbeats. Arterioles (small arteries) control blood pressure through vasoconstriction/vasodilation.\n\nCapillaries: Only 1-cell-thick endothelium; no smooth muscle. SMALLEST vessels — form networks (capillary beds). Site of all gas, nutrient, and waste EXCHANGE between blood and tissues.\n\nVeins: Thin walls, LOW pressure, have valves (prevent backflow). Carry blood TOWARD heart. Blood moved by skeletal muscle contractions squeezing veins + breathing (negative pressure in thorax). Venules collect from capillaries → merge into veins.",
  },
  // ── NEW Unit D Diagram Cards ─────────────────────────────────────
  {
    id: "d17", unit: "D", tag: "Heart Anatomy",
    front: "Label and describe the four chambers of the heart and the four valves between them.",
    back: "RIGHT SIDE (receives deoxygenated blood from body):\n• Right Atrium (RA): Receives blood via SVC + IVC\n• Tricuspid Valve (3 cusps): RA → RV — prevents backflow\n• Right Ventricle (RV): Pumps via pulmonary valve → pulmonary artery → lungs\n\nLEFT SIDE (receives oxygenated blood from lungs):\n• Left Atrium (LA): Receives blood from pulmonary veins\n• Mitral/Bicuspid Valve (2 cusps): LA → LV — prevents backflow\n• Left Ventricle (LV): Pumps via aortic valve → aorta → body\n\nMemory: Left ventricle has THICKER walls — must push blood around entire body at higher pressure.",
    diagram: <HeartAnatomyDiagram />,
  },
  {
    id: "d18", unit: "D", tag: "Lymphatic System",
    front: "Describe the major structures of the lymphatic system and their functions.",
    back: "VESSELS: Lymphatic capillaries → lymphatic vessels → ducts. One-way flow (no pump — moved by muscle contractions + breathing). Valves prevent backflow.\n\nTHORACIC DUCT: Largest lymph vessel. Drains lymph from most of body → left subclavian vein → returns to blood circulation.\n\nLYMPH NODES: Filter lymph; contain lymphocytes. Clusters at neck (cervical), armpits (axillary), groin (inguinal), abdomen (mesenteric). Swell during infection.\n\nTHYMUS: Upper chest; where T-lymphocytes mature and learn self-tolerance. Active in childhood.\n\nSPLEEN: Filters blood, destroys old RBCs, stores platelets, produces lymphocytes. Largest lymphoid organ.\n\nFUNCTION: Returns excess interstitial fluid to blood, transports dietary fats (chylomicrons) from intestines, and mounts immune responses.",
    diagram: <LymphaticSystemDiagram />,
  },
];

/* ── Helpers ─────────────────────────────────────────────────────── */

const unitColors: Record<Unit | "all", { badge: string; active: string; tag: string; accent: string }> = {
  all:  { badge: "bg-primary text-primary-foreground", active: "border-b-primary", tag: "bg-muted", accent: "#64748b" },
  A:    { badge: "bg-teal-600 text-white", active: "border-b-teal-600", tag: "bg-teal-50 text-teal-700", accent: "#0d9488" },
  B:    { badge: "bg-lime-600 text-white", active: "border-b-lime-600", tag: "bg-lime-50 text-lime-700", accent: "#65a30d" },
  C:    { badge: "bg-amber-600 text-white", active: "border-b-amber-600", tag: "bg-amber-50 text-amber-700", accent: "#d97706" },
  D:    { badge: "bg-rose-600 text-white", active: "border-b-rose-600", tag: "bg-rose-50 text-rose-700", accent: "#e11d48" },
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Main Component ─────────────────────────────────────────────── */

type FilterUnit = "all" | Unit;

export default function Biology20Flashcards() {
  const [filter, setFilter] = useState<FilterUnit>(() => {
    const u = new URLSearchParams(window.location.search).get("unit");
    return (u && (["A", "B", "C", "D"] as string[]).includes(u)) ? u as FilterUnit : "all";
  });
  const [deck, setDeck] = useState<Flashcard[]>(allCards);
  const [idx, setIdx] = useState(0);
  const [deckFlipped, setDeckFlipped] = useState(false);
  const [gridFlipped, setGridFlipped] = useState<Record<string, boolean>>({});

  const filtered = filter === "all" ? deck : deck.filter(c => c.unit === filter);
  const card = filtered[idx] ?? filtered[0];
  const progress = filtered.length > 0 ? ((idx + 1) / filtered.length) * 100 : 0;

  const handleFilter = useCallback((f: FilterUnit) => {
    setFilter(f);
    setIdx(0);
    setDeckFlipped(false);
  }, []);

  const go = useCallback((dir: 1 | -1) => {
    setDeckFlipped(false);
    setTimeout(() => {
      setIdx(i => {
        const len = filter === "all" ? deck.length : deck.filter(c => c.unit === filter).length;
        return (i + dir + len) % len;
      });
    }, 80);
  }, [filter, deck]);

  const shuffle = useCallback(() => {
    setDeck(prev => shuffleArray(prev));
    setIdx(0);
    setDeckFlipped(false);
    setGridFlipped({});
  }, []);

  const reset = useCallback(() => {
    setDeck(allCards);
    setIdx(0);
    setDeckFlipped(false);
    setGridFlipped({});
  }, []);

  const toggleGridFlip = useCallback((id: string) => {
    setGridFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const uc = unitColors[card?.unit ?? "all"];

  /* ── Deck card faces ──────────────────────────────────────────── */
  const deckFront = card ? (
    <Card className="w-full h-full shadow-md border-2 border-border bg-card">
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${uc.badge}`}>Unit {card.unit}</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${uc.tag}`}>{card.tag}</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <FlipHorizontal2 className="w-3.5 h-3.5" />
            Click to flip
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center text-center py-4">
          <p className="text-lg md:text-xl font-serif font-bold text-foreground leading-snug">{card.front}</p>
        </div>
        <div className="mt-4 pt-3 border-t flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Question — tap or press Enter/Space to reveal</span>
          <span className="text-xs font-mono text-muted-foreground">{card.id.toUpperCase()}</span>
        </div>
      </CardContent>
    </Card>
  ) : null;

  const deckBack = card ? (
    <Card className="w-full h-full shadow-md border-2 border-primary/30 bg-primary/5">
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${uc.badge}`}>Unit {card.unit}</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${uc.tag}`}>{card.tag}</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-primary font-semibold">
            Answer
          </span>
        </div>
        <div className="flex-1 overflow-y-auto">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-line mb-3">{card.back}</p>
          {card.diagram && (
            <div className="mt-3 bg-muted/30 border rounded-xl p-3">
              {card.diagram}
            </div>
          )}
        </div>
        <div className="mt-4 pt-3 border-t flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <FlipHorizontal2 className="w-3.5 h-3.5" /> Click to go back to question
          </span>
          <span className="text-xs font-mono text-muted-foreground">{card.id.toUpperCase()}</span>
        </div>
      </CardContent>
    </Card>
  ) : null;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/biology-20" className="hover:text-primary transition-colors">Biology 20</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Flashcards</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(168,80%,30%,0.25),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">Biology 20 — Study Tools</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-3">Flashcards</h1>
            <p className="text-secondary-foreground/75 text-base max-w-xl mb-4">
              {allCards.length} exam-ready cards covering all four Biology 20 units. Click any card to flip it — diagrams appear on select cards to reinforce key concepts.
            </p>
            <div className="flex flex-wrap gap-2">
              {(["A","B","C","D"] as Unit[]).map(u => (
                <Link key={u} href={`/resources/biology-20/unit-${u.toLowerCase()}`}
                  className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-secondary-foreground px-3 py-1 rounded-full transition-colors">
                  Unit {u} detail →
                </Link>
              ))}
              <Link href="/resources/biology-20/quiz"
                className="text-xs font-semibold bg-amber-500/30 hover:bg-amber-500/50 text-amber-200 px-3 py-1 rounded-full transition-colors">
                Switch to Quiz →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6">

          {/* Unit filter */}
          <div className="flex gap-1.5 mb-8 flex-wrap">
            {(["all", "A", "B", "C", "D"] as FilterUnit[]).map((f) => {
              const isActive = filter === f;
              const c = unitColors[f];
              const count = f === "all" ? allCards.length : allCards.filter(x => x.unit === f).length;
              return (
                <button key={f} onClick={() => handleFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all duration-200 flex items-center gap-2 ${
                    isActive ? `${c.badge} border-transparent shadow-sm` : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}>
                  {f === "all" ? "All Units" : `Unit ${f}`}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-muted"}`}>{count}</span>
                </button>
              );
            })}
            <div className="flex gap-1.5 ml-auto">
              <button onClick={shuffle} title="Shuffle deck"
                className="p-2 rounded-lg border-2 border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
                <Shuffle className="w-4 h-4" />
              </button>
              <button onClick={reset} title="Reset order"
                className="p-2 rounded-lg border-2 border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
              {idx + 1} / {filtered.length}
            </span>
          </div>

          {/* Deck viewer — 3D flip card */}
          {card && deckFront && deckBack && (
            <div className="max-w-2xl mx-auto mb-6">
              <FlipCard
                front={deckFront}
                back={deckBack}
                isFlipped={deckFlipped}
                onFlip={() => setDeckFlipped(f => !f)}
                minHeight="340px"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="max-w-2xl mx-auto flex items-center gap-4 justify-center mb-12">
            <button onClick={() => go(-1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg border-2 border-border hover:border-primary/40 font-semibold text-sm text-muted-foreground hover:text-foreground transition-all">
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button onClick={() => setDeckFlipped(f => !f)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm shadow-sm hover:shadow-md transition-all">
              <FlipHorizontal2 className="w-4 h-4" /> Flip Card
            </button>
            <button onClick={() => go(1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg border-2 border-border hover:border-primary/40 font-semibold text-sm text-muted-foreground hover:text-foreground transition-all">
              Next <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Card grid — all cards with individual flip states */}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <h2 className="text-lg font-serif font-bold text-foreground whitespace-nowrap">All Flashcards</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">{filtered.length} cards · click any card to flip</span>
            </div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
            >
              {filtered.map((c, i) => {
                const uc2 = unitColors[c.unit];
                const isGridFlipped = !!gridFlipped[c.id];
                const isActive = idx === i;

                const gridFront = (
                  <div className={`absolute inset-0 w-full h-full rounded-xl border-2 p-3 flex flex-col transition-colors ${
                    isActive ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                  }`}>
                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${uc2.badge}`}>{c.unit}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${uc2.tag} truncate max-w-[100px]`}>{c.tag}</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed font-medium line-clamp-4 flex-1">{c.front}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <FlipHorizontal2 className="w-3 h-3" /> flip
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIdx(i);
                          setDeckFlipped(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        focus ↑
                      </button>
                    </div>
                  </div>
                );

                const gridBack = (
                  <div className={`absolute inset-0 w-full h-full rounded-xl border-2 p-3 flex flex-col ${
                    isActive ? "border-primary bg-primary/10" : "border-primary/30 bg-primary/5"
                  }`}>
                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${uc2.badge}`}>{c.unit}</span>
                      <span className="text-xs text-primary font-semibold">Answer</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed line-clamp-5 flex-1">{c.back}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <FlipHorizontal2 className="w-3 h-3" /> flip back
                      </span>
                      {c.diagram && (
                        <span className="text-xs text-muted-foreground italic">diagram in deck view</span>
                      )}
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={c.id}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } } }}
                  >
                    <FlipCard
                      front={gridFront}
                      back={gridBack}
                      isFlipped={isGridFlipped}
                      onFlip={() => toggleGridFlip(c.id)}
                      minHeight="160px"
                      className="w-full"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
