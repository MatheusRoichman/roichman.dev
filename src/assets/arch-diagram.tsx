import type { ComponentPropsWithoutRef } from "react";

export function ArchDiagram(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md opacity-70"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(79,127,255,0.4)" />
        </marker>
      </defs>

      {/* Design Tokens */}
      <rect
        x="140"
        y="12"
        width="140"
        height="40"
        rx="2"
        stroke="rgba(79,127,255,0.3)"
        strokeWidth="1"
        fill="rgba(79,127,255,0.04)"
      />
      <text
        x="210"
        y="28"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(79,127,255,0.6)"
        letterSpacing="0.06em"
      >
        Design Tokens
      </text>
      <text
        x="210"
        y="42"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.5)"
      >
        colors / spacing / type
      </text>

      <line
        x1="210"
        y1="52"
        x2="210"
        y2="76"
        stroke="rgba(79,127,255,0.25)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* Component Library */}
      <rect
        x="100"
        y="76"
        width="220"
        height="40"
        rx="2"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.02)"
      />
      <text
        x="210"
        y="92"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(230,234,240,0.7)"
        letterSpacing="0.06em"
      >
        Component Library
      </text>
      <text
        x="210"
        y="106"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.5)"
      >
        typed · accessible · tested
      </text>

      {/* Branch lines to feature modules */}
      <line
        x1="100"
        y1="96"
        x2="72"
        y2="96"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <line
        x1="72"
        y1="96"
        x2="72"
        y2="160"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <line
        x1="72"
        y1="160"
        x2="96"
        y2="160"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <line
        x1="210"
        y1="116"
        x2="210"
        y2="140"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      <line
        x1="320"
        y1="96"
        x2="348"
        y2="96"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <line
        x1="348"
        y1="96"
        x2="348"
        y2="160"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <line
        x1="348"
        y1="160"
        x2="322"
        y2="160"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* Feature / A */}
      <rect
        x="24"
        y="140"
        width="116"
        height="40"
        rx="2"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.015)"
      />
      <text
        x="82"
        y="156"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(230,234,240,0.5)"
        letterSpacing="0.04em"
      >
        Feature / A
      </text>
      <text
        x="82"
        y="170"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.4)"
      >
        isolated module
      </text>

      {/* Feature / B */}
      <rect
        x="150"
        y="140"
        width="120"
        height="40"
        rx="2"
        stroke="rgba(79,127,255,0.25)"
        strokeWidth="1"
        fill="rgba(79,127,255,0.04)"
      />
      <text
        x="210"
        y="156"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(79,127,255,0.7)"
        letterSpacing="0.04em"
      >
        Feature / B
      </text>
      <text
        x="210"
        y="170"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.4)"
      >
        isolated module
      </text>

      {/* Feature / C */}
      <rect
        x="280"
        y="140"
        width="116"
        height="40"
        rx="2"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.015)"
      />
      <text
        x="338"
        y="156"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(230,234,240,0.5)"
        letterSpacing="0.04em"
      >
        Feature / C
      </text>
      <text
        x="338"
        y="170"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.4)"
      >
        isolated module
      </text>

      {/* Converge to State Boundary */}
      <line
        x1="82"
        y1="180"
        x2="82"
        y2="220"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <line
        x1="82"
        y1="220"
        x2="148"
        y2="220"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />
      <line
        x1="210"
        y1="180"
        x2="210"
        y2="204"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />
      <line
        x1="338"
        y1="180"
        x2="338"
        y2="220"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <line
        x1="338"
        y1="220"
        x2="272"
        y2="220"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* State Boundary */}
      <rect
        x="100"
        y="204"
        width="220"
        height="40"
        rx="2"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.02)"
      />
      <text
        x="210"
        y="220"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(230,234,240,0.6)"
        letterSpacing="0.06em"
      >
        State Boundary
      </text>
      <text
        x="210"
        y="234"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.4)"
      >
        normalized · typed
      </text>

      <line
        x1="210"
        y1="244"
        x2="210"
        y2="268"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />

      {/* API / Services */}
      <rect
        x="130"
        y="268"
        width="160"
        height="40"
        rx="2"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.01)"
      />
      <text
        x="210"
        y="284"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        fill="rgba(230,234,240,0.4)"
        letterSpacing="0.06em"
      >
        API / Services
      </text>
      <text
        x="210"
        y="298"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.3)"
      >
        abstracted layer
      </text>

      <text
        x="398"
        y="328"
        textAnchor="end"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(139,148,158,0.2)"
        letterSpacing="0.04em"
      >
        system diagram v1
      </text>
    </svg>
  );
}
