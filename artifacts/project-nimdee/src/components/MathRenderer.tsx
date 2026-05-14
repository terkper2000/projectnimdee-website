import katex from "katex";
import "katex/dist/katex.min.css";

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

export default function Math({ tex, display = false, className = "" }: MathProps) {
  let html = "";
  try {
    html = katex.renderToString(tex, {
      throwOnError: false,
      displayMode: display,
      trust: true,
    });
  } catch {
    html = `<span style="color:red">${tex}</span>`;
  }
  return (
    <span
      className={className}
      style={display ? { display: "block", overflowX: "auto" } : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
