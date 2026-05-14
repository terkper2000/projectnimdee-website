import { gcd, lcm, randInt, pick, shuffle, simplify, fracTeX, makeChoices, signedNum } from "./mathHelpers";

export interface MCProblem {
  question: string;
  choices: string[];
  correctIndex: number;
  steps: string[];
  graphSpec?: { m: number; b: number; points?: Array<[number, number]> };
  tableSpec?: { headers: string[]; rows: string[][] };
  diagram?: "circle" | "triangle";
}

// ── Unit 1: Rational Numbers ──────────────────────────────────────────────────

export function generateUnit1(): MCProblem {
  const type = pick(["add", "subtract", "multiply", "divide"] as const);
  const DENOMS = [2, 3, 4, 5, 6, 8, 10] as const;
  const NONZERO = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5] as const;

  const d1 = pick(DENOMS);
  const d2 = pick(DENOMS.filter((d) => d !== d1));
  const n1 = pick(NONZERO);
  const n2 = pick(NONZERO);

  let resultN: number, resultD: number;
  let opTex: string;
  let steps: string[];

  if (type === "add" || type === "subtract") {
    const l = lcm(d1, d2);
    const adj1 = n1 * (l / d1);
    const adj2 = n2 * (l / d2);
    resultN = type === "add" ? adj1 + adj2 : adj1 - adj2;
    resultD = l;
    const opSym = type === "add" ? "+" : "-";
    opTex = `${fracTeX(n1, d1)} ${opSym} \\left(${fracTeX(n2, d2)}\\right)`;
    steps = [
      `\\text{Find LCD of } ${d1} \\text{ and } ${d2}\\text{: LCD} = ${l}`,
      `= ${fracTeX(adj1, l)} ${opSym} ${fracTeX(type === "subtract" ? -adj2 : adj2, l)}`,
      `= ${fracTeX(resultN, l)}`,
      `= ${fracTeX(...simplify(resultN, l))} \\quad \\text{(simplified)}`,
    ];
  } else if (type === "multiply") {
    resultN = n1 * n2;
    resultD = d1 * d2;
    opTex = `${fracTeX(n1, d1)} \\times ${fracTeX(n2, d2)}`;
    steps = [
      `\\text{Multiply numerators: } ${n1} \\times ${n2} = ${n1 * n2}`,
      `\\text{Multiply denominators: } ${d1} \\times ${d2} = ${d1 * d2}`,
      `= ${fracTeX(resultN, resultD)}`,
      `= ${fracTeX(...simplify(resultN, resultD))} \\quad \\text{(simplified)}`,
    ];
  } else {
    resultN = n1 * d2;
    resultD = d1 * n2;
    opTex = `${fracTeX(n1, d1)} \\div ${fracTeX(n2, d2)}`;
    steps = [
      `\\text{Multiply by the reciprocal:}`,
      `= ${fracTeX(n1, d1)} \\times ${fracTeX(d2, n2)}`,
      `= ${fracTeX(n1 * d2, d1 * n2)}`,
      `= ${fracTeX(...simplify(n1 * d2, d1 * n2))} \\quad \\text{(simplified)}`,
    ];
  }

  const [sn, sd] = simplify(resultN, resultD);
  const correct = fracTeX(sn, sd);
  const distractors = shuffle([
    fracTeX(sn + (sn >= 0 ? 1 : -1), sd),
    fracTeX(-sn, sd),
    fracTeX(sn, sd + 1),
    fracTeX(sn * 2, sd),
  ]).filter((d) => d !== correct);

  const { choices, correctIndex } = makeChoices(correct, distractors);
  return { question: `\\text{Calculate: } ${opTex}`, choices, correctIndex, steps };
}

// ── Unit 2: Powers & Exponents ────────────────────────────────────────────────

export function generateUnit2(): MCProblem {
  const type = pick(["product", "quotient", "power-of-power", "zero-neg"] as const);
  const BASES = ["x", "y", "a", "2", "3"] as const;
  const base = pick(BASES);
  const isVar = isNaN(parseInt(base));

  if (type === "product") {
    const m = randInt(1, 5), n = randInt(1, 5);
    const result = m + n;
    const correct = isVar ? `${base}^{${result}}` : `${parseInt(base) ** result}`;
    const distractors = [
      isVar ? `${base}^{${m * n}}` : `${parseInt(base) ** (m * n)}`,
      isVar ? `${base}^{${result + 1}}` : `${parseInt(base) ** (result + 1)}`,
      isVar ? `${base}^{${result - 1}}` : `${parseInt(base) ** result - 1}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Simplify: } ${base}^{${m}} \\times ${base}^{${n}}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Product Rule: } a^m \\times a^n = a^{m+n}`,
        `${base}^{${m}} \\times ${base}^{${n}} = ${base}^{${m}+${n}} = ${base}^{${result}}`,
      ],
    };
  } else if (type === "quotient") {
    const m = randInt(3, 8), n = randInt(1, m - 1);
    const result = m - n;
    const correct = isVar ? `${base}^{${result}}` : `${parseInt(base) ** result}`;
    const distractors = [
      isVar ? `${base}^{${m + n}}` : `${parseInt(base) ** (m + n)}`,
      isVar ? `${base}^{${result + 1}}` : `${parseInt(base) ** (result + 1)}`,
      isVar ? `${base}^{${m * n}}` : `${parseInt(base) ** (m * n)}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Simplify: } \\dfrac{${base}^{${m}}}{${base}^{${n}}}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Quotient Rule: } \\dfrac{a^m}{a^n} = a^{m-n}`,
        `\\dfrac{${base}^{${m}}}{${base}^{${n}}} = ${base}^{${m}-${n}} = ${base}^{${result}}`,
      ],
    };
  } else if (type === "power-of-power") {
    const m = randInt(2, 4), n = randInt(2, 4);
    const result = m * n;
    const correct = `${base}^{${result}}`;
    const distractors = [
      `${base}^{${m + n}}`,
      `${base}^{${result + 1}}`,
      `${base}^{${m * n + m}}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Simplify: } \\left(${base}^{${m}}\\right)^{${n}}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Power of a Power: } (a^m)^n = a^{m \\times n}`,
        `\\left(${base}^{${m}}\\right)^{${n}} = ${base}^{${m} \\times ${n}} = ${base}^{${result}}`,
      ],
    };
  } else {
    const exp = pick([-2, -3, -1, 0] as const);
    const numBase = pick([2, 3, 4, 5] as const);
    if (exp === 0) {
      const correct = "1";
      const distractors = ["0", `${numBase}`, "-1"].filter((d) => d !== correct);
      const { choices, correctIndex } = makeChoices(correct, distractors);
      return {
        question: `\\text{Evaluate: } ${numBase}^{0}`,
        choices,
        correctIndex,
        steps: [
          `\\text{Zero Exponent Law: } a^0 = 1 \\text{ for any } a \\neq 0`,
          `${numBase}^0 = 1`,
        ],
      };
    } else {
      const correct = fracTeX(1, numBase ** Math.abs(exp));
      const distractors = [
        fracTeX(-1, numBase ** Math.abs(exp)),
        `${numBase ** Math.abs(exp)}`,
        fracTeX(1, numBase ** (Math.abs(exp) + 1)),
      ].filter((d) => d !== correct);
      const { choices, correctIndex } = makeChoices(correct, distractors);
      return {
        question: `\\text{Evaluate: } ${numBase}^{${exp}}`,
        choices,
        correctIndex,
        steps: [
          `\\text{Negative Exponent Law: } a^{-n} = \\dfrac{1}{a^n}`,
          `${numBase}^{${exp}} = \\dfrac{1}{${numBase}^{${Math.abs(exp)}}} = \\dfrac{1}{${numBase ** Math.abs(exp)}}`,
        ],
      };
    }
  }
}

// ── Unit 3: Polynomials ───────────────────────────────────────────────────────

export function generateUnit3(): MCProblem {
  const type = pick(["add", "subtract", "multiply-mono"] as const);

  if (type === "add" || type === "subtract") {
    const a1 = randInt(-4, 4), b1 = randInt(-6, 6), c1 = randInt(-6, 6);
    const a2 = randInt(-4, 4), b2 = randInt(-6, 6), c2 = randInt(-6, 6);
    const opSym = type === "add" ? "+" : "-";
    const rA = type === "add" ? a1 + a2 : a1 - a2;
    const rB = type === "add" ? b1 + b2 : b1 - b2;
    const rC = type === "add" ? c1 + c2 : c1 - c2;

    const polyStr = (a: number, b: number, c: number) => {
      const parts: string[] = [];
      if (a !== 0) parts.push(`${a === 1 ? "" : a === -1 ? "-" : a}x^2`);
      if (b !== 0) parts.push(b > 0 && parts.length ? `+${b}x` : `${b === 1 ? "" : b === -1 ? "-" : b}x`);
      if (c !== 0) parts.push(c > 0 && parts.length ? `+${c}` : `${c}`);
      return parts.length ? parts.join("") : "0";
    };

    const correct = polyStr(rA, rB, rC);
    const distractors = [
      polyStr(rA + 1, rB, rC),
      polyStr(rA, rB + 1, rC),
      polyStr(-rA, -rB, -rC),
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);

    const p1 = polyStr(a1, b1, c1);
    const p2 = polyStr(a2, b2, c2);
    return {
      question: `\\text{Simplify: } (${p1}) ${opSym} (${p2})`,
      choices,
      correctIndex,
      steps: [
        `\\text{Collect like terms}`,
        `x^2\\text{-terms: } ${a1} ${opSym} (${a2}) = ${rA}`,
        `x\\text{-terms: } ${b1} ${opSym} (${b2}) = ${rB}`,
        `\\text{constants: } ${c1} ${opSym} (${c2}) = ${rC}`,
        `= ${correct}`,
      ],
    };
  } else {
    const k = pick([-4, -3, -2, 2, 3, 4] as const);
    const a = randInt(-4, 4), b = randInt(-5, 5);
    const rA = k * a, rB = k * b;

    const polyStr = (coA: number, coB: number) => {
      const p: string[] = [];
      if (coA !== 0) p.push(`${coA}x`);
      if (coB !== 0) p.push(coB > 0 && p.length ? `+${coB}` : `${coB}`);
      return p.join("") || "0";
    };

    const correct = polyStr(rA, rB);
    const distractors = [
      polyStr(rA + k, rB),
      polyStr(rA, rB + k),
      polyStr(-rA, rB),
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Expand: } ${k}(${polyStr(a, b)})`,
      choices,
      correctIndex,
      steps: [
        `\\text{Distribute } ${k} \\text{ to each term}`,
        `${k} \\times (${a}x) = ${rA}x`,
        `${k} \\times (${b}) = ${rB}`,
        `= ${correct}`,
      ],
    };
  }
}

// ── Unit 4: Geometry ──────────────────────────────────────────────────────────

export function generateUnit4(): MCProblem {
  const type = pick(["rect-prism-sa", "similar-triangles"] as const);

  if (type === "rect-prism-sa") {
    const l = randInt(2, 10), w = randInt(2, 8), h = randInt(2, 6);
    const sa = 2 * (l * w + l * h + w * h);
    const correct = `${sa} \\text{ cm}^2`;
    const distractors = [
      `${sa + 2 * l} \\text{ cm}^2`,
      `${l * w * h} \\text{ cm}^3`,
      `${sa - 2 * w * h} \\text{ cm}^2`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Find the surface area of a rectangular prism with } l=${l}\\text{ cm}, w=${w}\\text{ cm}, h=${h}\\text{ cm}`,
      choices,
      correctIndex,
      steps: [
        `SA = 2(lw + lh + wh)`,
        `= 2(${l}\\times${w} + ${l}\\times${h} + ${w}\\times${h})`,
        `= 2(${l * w} + ${l * h} + ${w * h})`,
        `= 2(${l * w + l * h + w * h})`,
        `= ${sa}\\text{ cm}^2`,
      ],
    };
  } else {
    const shortSides = [pick([3, 4, 5, 6] as const), pick([6, 8, 9, 12] as const)];
    const scale = pick([2, 3, 4] as const);
    const [s1, s2] = shortSides;
    const s3 = s1 * scale;
    const s4 = s2 * scale;
    const correct = `${s4}`;
    const distractors = [
      `${s4 + scale}`,
      `${s2 + s3}`,
      `${s4 - 1}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Two similar triangles have corresponding sides } ${s1}\\text{ cm and } ${s3}\\text{ cm. If a second side is } ${s2}\\text{ cm, find its corresponding side.}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Scale factor} = \\dfrac{${s3}}{${s1}} = ${scale}`,
        `\\text{Multiply: } ${s2} \\times ${scale} = ${s4}`,
      ],
    };
  }
}

// ── Unit 5: Linear Relations ──────────────────────────────────────────────────

export function generateUnit5(): MCProblem {
  const type = pick(["slope-from-points", "find-y", "identify-slope", "write-equation"] as const);

  if (type === "slope-from-points") {
    const m = pick([-3, -2, -1, 1, 2, 3] as const);
    const b = randInt(-4, 4);
    const x1 = randInt(-4, -1), x2 = randInt(1, 4);
    const y1 = m * x1 + b, y2 = m * x2 + b;
    const correct = `${m}`;
    const distractors = [
      `${-m}`,
      `${m + 1}`,
      fracTeX(x2 - x1, y2 - y1),
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Find the slope of the line through } (${x1},\\, ${y1}) \\text{ and } (${x2},\\, ${y2})`,
      choices,
      correctIndex,
      steps: [
        `m = \\dfrac{y_2 - y_1}{x_2 - x_1}`,
        `= \\dfrac{${y2} - (${y1})}{${x2} - (${x1})}`,
        `= \\dfrac{${y2 - y1}}{${x2 - x1}} = ${m}`,
      ],
      graphSpec: { m, b, points: [[x1, y1], [x2, y2]] },
    };
  } else if (type === "find-y") {
    const m = pick([-3, -2, -1, 1, 2, 3] as const);
    const b = randInt(-5, 5);
    const x = randInt(-3, 3);
    const y = m * x + b;
    const correct = `${y}`;
    const distractors = [`${y + 1}`, `${y - 1}`, `${m * x}`].filter((d) => d !== correct);
    const mStr = m === 1 ? "" : m === -1 ? "-" : `${m}`;
    const bStr = b === 0 ? "" : b > 0 ? `+${b}` : `${b}`;
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{For } y = ${mStr}x${bStr}, \\text{ find } y \\text{ when } x = ${x}`,
      choices,
      correctIndex,
      steps: [
        `y = ${mStr}(${x})${bStr}`,
        `= ${m * x}${bStr}`,
        `= ${y}`,
      ],
      graphSpec: { m, b, points: [[x, y]] },
    };
  } else if (type === "identify-slope") {
    const m = pick([-4, -3, -2, -1, 1, 2, 3, 4] as const);
    const b = randInt(-5, 5);
    const mStr = m === 1 ? "" : m === -1 ? "-" : `${m}`;
    const bStr = b === 0 ? "" : b > 0 ? `+${b}` : `${b}`;
    const correct = `${m}`;
    const distractors = [`${b}`, `${-m}`, `${m + 1}`].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Identify the slope: } y = ${mStr}x${bStr}`,
      choices,
      correctIndex,
      steps: [
        `\\text{In } y = mx + b, \\text{ the slope is } m \\text{ and the y-intercept is } b`,
        `y = ${mStr}x${bStr} \\implies m = ${m},\\; b = ${b}`,
      ],
      graphSpec: { m, b },
    };
  } else {
    const m = pick([-2, -1, 1, 2, 3] as const);
    const b = randInt(-4, 4);
    const mStr = m === 1 ? "" : m === -1 ? "-" : `${m}`;
    const bStr = b === 0 ? "" : b > 0 ? `+${b}` : `${b}`;
    const correct = `y = ${mStr}x${bStr}`;
    const distractors = [
      `y = ${mStr}x${b > 0 ? `+${b + 1}` : `${b - 1}`}`,
      `y = ${m + 1}x${bStr}`,
      `y = ${-m}x${bStr}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    const x1 = 0, y1 = b, x2 = 1, y2 = m + b;
    return {
      question: `\\text{Write the equation: slope } = ${m}, \\text{ y-intercept } = ${b}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Use } y = mx + b`,
        `m = ${m},\\; b = ${b}`,
        `y = ${mStr}x${bStr}`,
      ],
      graphSpec: { m, b, points: [[x1, y1], [x2, y2]] },
    };
  }
}

// ── Unit 6: Equations & Inequalities ─────────────────────────────────────────

export function generateUnit6(): MCProblem {
  const type = pick(["one-step", "two-step", "both-sides"] as const);

  if (type === "one-step") {
    const x = pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6] as const);
    const a = pick([-4, -3, -2, 2, 3, 4] as const);
    const c = a * x;
    const correct = `x = ${x}`;
    const distractors = [`x = ${x + 1}`, `x = ${-x}`, `x = ${x * a}`].filter(
      (d) => d !== correct
    );
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Solve: } ${a}x = ${c}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Divide both sides by } ${a}`,
        `\\dfrac{${a}x}{${a}} = \\dfrac{${c}}{${a}}`,
        `x = ${x}`,
      ],
    };
  } else if (type === "two-step") {
    const x = randInt(-5, 5);
    const a = pick([-3, -2, 2, 3] as const);
    const b = randInt(-6, 6);
    const c = a * x + b;
    const correct = `x = ${x}`;
    const distractors = [`x = ${x + 1}`, `x = ${-x}`, `x = ${c - b}`].filter(
      (d) => d !== correct
    );
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Solve: } ${a}x ${b >= 0 ? `+ ${b}` : `- ${-b}`} = ${c}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Subtract } ${b} \\text{ from both sides:}`,
        `${a}x = ${c} - (${b}) = ${c - b}`,
        `\\text{Divide both sides by } ${a}:`,
        `x = \\dfrac{${c - b}}{${a}} = ${x}`,
      ],
    };
  } else {
    const x = randInt(-4, 4);
    const a = pick([-3, -2, 2, 3, 4] as const);
    const b = randInt(-5, 5);
    const c = pick([-1, 1, 2, -2] as const);
    const d = (a - c) * x + b;
    const correct = `x = ${x}`;
    const distractors = [`x = ${x + 1}`, `x = ${-x}`, `x = ${x - 1}`].filter(
      (d) => d !== correct
    );
    const { choices, correctIndex } = makeChoices(correct, distractors);
    const bStr = b >= 0 ? `+ ${b}` : `- ${-b}`;
    return {
      question: `\\text{Solve: } ${a}x ${bStr} = ${c}x + ${d}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Move } x\\text{-terms to one side: subtract } ${c}x`,
        `${a - c}x ${bStr} = ${d}`,
        `${a - c}x = ${d - b}`,
        `x = \\dfrac{${d - b}}{${a - c}} = ${x}`,
      ],
    };
  }
}

// ── Unit 7: Circle Geometry ───────────────────────────────────────────────────

export function generateUnit7(): MCProblem {
  const type = pick(["inscribed-central", "tangent-radius", "chord-perp"] as const);

  if (type === "inscribed-central") {
    const central = pick([40, 50, 60, 70, 80, 90, 100, 120, 140] as const);
    const inscribed = central / 2;
    const correct = `${inscribed}°`;
    const distractors = [
      `${central}°`,
      `${inscribed + 10}°`,
      `${180 - inscribed}°`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{A central angle measures } ${central}°. \\text{ An inscribed angle subtends the same arc. What is the inscribed angle?}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Inscribed Angle Theorem: Inscribed angle} = \\dfrac{1}{2} \\times \\text{Central angle}`,
        `= \\dfrac{1}{2} \\times ${central}° = ${inscribed}°`,
      ],
      diagram: "circle",
    };
  } else if (type === "tangent-radius") {
    const radius = randInt(3, 10);
    const hyp = pick([radius + 4, radius + 5, radius + 6, radius + 8, radius + 9, radius + 10].filter(
      (h) => Number.isInteger(Math.sqrt(h * h - radius * radius))
    ).concat([Math.round(Math.sqrt((radius + 4) ** 2 + radius ** 2))]));
    const safeHyp = hyp;
    const tangentSq = safeHyp * safeHyp - radius * radius;
    const tangent = Math.sqrt(tangentSq);
    if (!Number.isInteger(tangent) || tangent <= 0) {
      return generateUnit7();
    }
    const correct = `${tangent}`;
    const distractors = [
      `${Math.round(tangent) + 1}`,
      `${safeHyp}`,
      `${radius}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{A tangent from an external point has distance } ${safeHyp}\\text{ cm from the centre. The radius is } ${radius}\\text{ cm. Find the tangent length.}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Tangent-Radius Theorem: tangent} \\perp \\text{radius at point of tangency}`,
        `\\text{By Pythagorean Theorem: } t^2 + r^2 = d^2`,
        `t^2 = ${safeHyp}^2 - ${radius}^2 = ${safeHyp * safeHyp} - ${radius * radius} = ${tangentSq}`,
        `t = \\sqrt{${tangentSq}} = ${tangent}\\text{ cm}`,
      ],
      diagram: "circle",
    };
  } else {
    const halfChord = pick([3, 4, 5, 6] as const);
    const distPool = [2, 3, 4, 5, 6].filter((d) => d !== halfChord);
    const dist = pick(distPool);
    const radius = Math.sqrt(halfChord * halfChord + dist * dist);
    if (!Number.isInteger(radius) || radius <= 0) {
      return generateUnit7();
    }
    const correct = `${radius}`;
    const distractors = [
      `${halfChord}`,
      `${dist}`,
      `${radius + 1}`,
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{A chord is } ${halfChord * 2}\\text{ cm long. The perpendicular from the centre to the chord is } ${dist}\\text{ cm. Find the radius.}`,
      choices,
      correctIndex,
      steps: [
        `\\text{Perpendicular from centre bisects the chord: half-chord} = ${halfChord}`,
        `r^2 = ${halfChord}^2 + ${dist}^2 = ${halfChord * halfChord} + ${dist * dist} = ${halfChord * halfChord + dist * dist}`,
        `r = ${radius}\\text{ cm}`,
      ],
      diagram: "circle",
    };
  }
}

// ── Unit 8: Data & Probability ────────────────────────────────────────────────

export function generateUnit8(): MCProblem {
  const type = pick(["simple-prob", "complement", "independent"] as const);

  if (type === "simple-prob") {
    const total = pick([4, 6, 8, 10, 12, 20] as const);
    const fav = randInt(1, total - 1);
    const [sn, sd] = simplify(fav, total);
    const correct = fracTeX(sn, sd);
    const distractors = [
      fracTeX(total - fav, total),
      fracTeX(fav + 1, total),
      fracTeX(fav, total + 1),
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    const items = ["red", "blue", "green", "yellow", "white"];
    const colour = pick(items);
    return {
      question: `\\text{A bag has } ${total} \\text{ marbles. } ${fav} \\text{ are ${colour}. What is } P(\\text{${colour}})?`,
      choices,
      correctIndex,
      steps: [
        `P(\\text{event}) = \\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}`,
        `P(\\text{${colour}}) = \\dfrac{${fav}}{${total}} = ${fracTeX(sn, sd)}`,
      ],
    };
  } else if (type === "complement") {
    const total = pick([5, 8, 10, 12, 20] as const);
    const fav = randInt(1, total - 1);
    const [sn, sd] = simplify(fav, total);
    const [cn, cd] = simplify(total - fav, total);
    const correct = fracTeX(cn, cd);
    const distractors = [
      fracTeX(sn, sd),
      fracTeX(cn + 1, cd),
      "1",
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{If } P(A) = ${fracTeX(sn, sd)}, \\text{ what is } P(\\text{not } A)?`,
      choices,
      correctIndex,
      steps: [
        `P(\\text{not } A) = 1 - P(A)`,
        `= 1 - ${fracTeX(sn, sd)} = ${fracTeX(sd - sn, sd)} = ${fracTeX(cn, cd)}`,
      ],
    };
  } else {
    const p1n = randInt(1, 3), p1d = pick([4, 5, 6] as const);
    const p2n = randInt(1, 3), p2d = pick([4, 5, 6] as const);
    const [p1sn, p1sd] = simplify(p1n, p1d);
    const [p2sn, p2sd] = simplify(p2n, p2d);
    const [resN, resD] = simplify(p1sn * p2sn, p1sd * p2sd);
    const correct = fracTeX(resN, resD);
    const distractors = [
      fracTeX(p1sn + p2sn, p1sd + p2sd),
      fracTeX(resN + 1, resD),
      fracTeX(resN, resD + 1),
    ].filter((d) => d !== correct);
    const { choices, correctIndex } = makeChoices(correct, distractors);
    return {
      question: `\\text{Two independent events: } P(A) = ${fracTeX(p1sn, p1sd)}, \\; P(B) = ${fracTeX(p2sn, p2sd)}. \\text{ Find } P(A \\cap B).`,
      choices,
      correctIndex,
      steps: [
        `\\text{For independent events: } P(A \\cap B) = P(A) \\times P(B)`,
        `= ${fracTeX(p1sn, p1sd)} \\times ${fracTeX(p2sn, p2sd)}`,
        `= ${fracTeX(p1sn * p2sn, p1sd * p2sd)} = ${fracTeX(resN, resD)}`,
      ],
    };
  }
}

// ── Table helpers ─────────────────────────────────────────────────────────────

export function generateUnit5Table(): { headers: string[]; rows: string[][] } {
  const m = pick([1, 2, 3] as const);
  const b = randInt(-3, 3);
  const xs = [-2, -1, 0, 1, 2];
  return {
    headers: ["x", "y"],
    rows: xs.map((x) => [`${x}`, `${m * x + b}`]),
  };
}

export { signedNum };
