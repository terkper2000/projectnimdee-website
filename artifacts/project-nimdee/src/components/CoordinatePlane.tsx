interface CoordinatePlaneProps {
  m: number;
  b: number;
  highlightPoints?: Array<[number, number]>;
  label?: string;
}

const SIZE = 280;
const CENTER = SIZE / 2;
const SCALE = 20;
const RANGE = 6;

function toSVG(mx: number, my: number): [number, number] {
  return [CENTER + mx * SCALE, CENTER - my * SCALE];
}

function lineClip(m: number, b: number): [[number, number], [number, number]] {
  const x1 = -RANGE, y1 = m * x1 + b;
  const x2 = RANGE, y2 = m * x2 + b;
  return [toSVG(x1, y1), toSVG(x2, y2)];
}

export default function CoordinatePlane({ m, b, highlightPoints = [], label }: CoordinatePlaneProps) {
  const [[sx1, sy1], [sx2, sy2]] = lineClip(m, b);
  const [bx, by] = toSVG(0, b);
  const slopeStr = m === 0 ? "0" : m === 1 ? "" : m === -1 ? "-" : `${m}`;
  const bStr = b === 0 ? "" : b > 0 ? `+${b}` : `${b}`;
  const eqLabel = label ?? `y = ${slopeStr}${m !== 0 ? "x" : ""}${bStr}`;

  return (
    <div className="my-4 flex flex-col items-center gap-2">
      <p className="text-xs font-semibold text-muted-foreground">{eqLabel}</p>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="rounded-xl border border-border bg-white shadow-sm"
        aria-label={`Graph of ${eqLabel}`}
      >
        {/* Grid lines */}
        {Array.from({ length: RANGE * 2 + 1 }, (_, i) => i - RANGE).map((v) => {
          const [gx] = toSVG(v, 0);
          const [, gy] = toSVG(0, v);
          return (
            <g key={v}>
              <line x1={gx} y1={0} x2={gx} y2={SIZE} stroke="#e5e7eb" strokeWidth={v === 0 ? 1.5 : 0.75} />
              <line x1={0} y1={gy} x2={SIZE} y2={gy} stroke="#e5e7eb" strokeWidth={v === 0 ? 1.5 : 0.75} />
            </g>
          );
        })}

        {/* Axes */}
        <line x1={CENTER} y1={4} x2={CENTER} y2={SIZE - 4} stroke="#6b7280" strokeWidth={2} />
        <line x1={4} y1={CENTER} x2={SIZE - 4} y2={CENTER} stroke="#6b7280" strokeWidth={2} />

        {/* Axis arrows */}
        <polygon points={`${CENTER},4 ${CENTER - 4},14 ${CENTER + 4},14`} fill="#6b7280" />
        <polygon points={`${SIZE - 4},${CENTER} ${SIZE - 14},${CENTER - 4} ${SIZE - 14},${CENTER + 4}`} fill="#6b7280" />

        {/* Tick labels */}
        {[-4, -2, 2, 4].map((v) => {
          const [tx] = toSVG(v, 0);
          const [, ty] = toSVG(0, v);
          return (
            <g key={v}>
              <text x={tx} y={CENTER + 14} textAnchor="middle" fontSize={9} fill="#9ca3af">{v}</text>
              <text x={CENTER + 6} y={ty + 3} fontSize={9} fill="#9ca3af">{v}</text>
            </g>
          );
        })}
        <text x={CENTER + 6} y={18} fontSize={9} fill="#6b7280">y</text>
        <text x={SIZE - 10} y={CENTER - 6} fontSize={9} fill="#6b7280">x</text>

        {/* The line */}
        <line
          x1={sx1} y1={sy1} x2={sx2} y2={sy2}
          stroke="hsl(35 90% 50%)"
          strokeWidth={2.5}
          strokeLinecap="round"
        />

        {/* Y-intercept dot */}
        {Math.abs(b) <= RANGE && (
          <circle cx={bx} cy={by} r={5} fill="hsl(180 50% 28%)" stroke="white" strokeWidth={1.5} />
        )}

        {/* Highlighted points */}
        {highlightPoints.map(([hx, hy], i) => {
          const [svgX, svgY] = toSVG(hx, hy);
          return (
            <g key={i}>
              <circle cx={svgX} cy={svgY} r={4} fill="hsl(35 90% 50%)" stroke="white" strokeWidth={1.5} />
              <text x={svgX + 6} y={svgY - 4} fontSize={9} fill="hsl(35 90% 40%)">
                ({hx},{hy})
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
