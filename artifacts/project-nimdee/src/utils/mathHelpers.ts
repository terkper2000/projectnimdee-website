export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) { const t = b; b = a % b; a = t; }
  return a || 1;
}

export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function simplify(n: number, d: number): [number, number] {
  if (d === 0) return [n, 0];
  const g = gcd(Math.abs(n), Math.abs(d));
  let sn = n / g, sd = d / g;
  if (sd < 0) { sn = -sn; sd = -sd; }
  return [sn, sd];
}

export function fracTeX(n: number, d: number, display = true): string {
  const [sn, sd] = simplify(n, d);
  if (sd === 0) return "\\text{undefined}";
  if (sd === 1) return `${sn}`;
  const absN = Math.abs(sn);
  const sign = sn < 0 ? "-" : "";
  const cmd = display ? "\\dfrac" : "\\frac";
  return `${sign}${cmd}{${absN}}{${sd}}`;
}

export function makeChoices(
  correct: string,
  distractors: string[]
): { choices: string[]; correctIndex: number } {
  const unique = distractors.filter((d) => d !== correct);
  const pool = unique.slice(0, 3);
  const all = shuffle([correct, ...pool]);
  return { choices: all, correctIndex: all.indexOf(correct) };
}

export function signedNum(n: number): string {
  return n < 0 ? `(${n})` : `${n}`;
}
