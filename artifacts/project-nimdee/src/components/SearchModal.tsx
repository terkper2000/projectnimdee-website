import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Search, X, ArrowRight, Calculator, Microscope, FileText, BookOpen, Zap } from "lucide-react";
import { searchItems, filterSearch, POPULAR_HREFS, type SearchItem } from "@/utils/searchIndex";

const POPULAR = POPULAR_HREFS.map((h) => searchItems.find((i) => i.href === h)).filter(Boolean) as SearchItem[];

const CAT_COLOR: Record<string, string> = {
  "Math 9":     "bg-amber-100 text-amber-800",
  "Science 10": "bg-teal-100 text-teal-800",
  "Biology 20": "bg-green-100 text-green-800",
  "Biology 30": "bg-blue-100 text-blue-800",
  Page:         "bg-gray-100 text-gray-600",
  Services:     "bg-violet-100 text-violet-800",
};

const CAT_ICON: Record<string, React.ReactNode> = {
  "Math 9":     <Calculator className="w-4 h-4" />,
  "Science 10": <Microscope className="w-4 h-4" />,
  "Biology 20": <Microscope className="w-4 h-4" />,
  "Biology 30": <Microscope className="w-4 h-4" />,
  Page:         <FileText className="w-4 h-4" />,
  Services:     <BookOpen className="w-4 h-4" />,
};

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim() ? filterSearch(query) : POPULAR;
  const isPopular = !query.trim();

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  useEffect(() => { setActiveIdx(0); }, [query]);

  const go = useCallback(
    (href: string) => {
      navigate(href);
      onClose();
      setQuery("");
    },
    [navigate, onClose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[activeIdx]) { go(results[activeIdx].href); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, results, activeIdx, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[8vh] sm:pt-[12vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl border overflow-hidden"
            initial={{ scale: 0.96, y: -12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -8, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" as const }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="I need help with…"
                className="flex-1 bg-transparent text-base outline-none text-foreground placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground bg-muted rounded border">
                  Esc
                </kbd>
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="text-center py-14 text-muted-foreground">
                  <Search className="w-8 h-8 mx-auto mb-3 opacity-25" />
                  <p className="text-sm font-semibold">No results for "{query}"</p>
                  <p className="text-xs mt-1 opacity-70">Try "slope", "fractions", "biology", or "probability"</p>
                </div>
              ) : (
                <div className="py-2">
                  {isPopular && (
                    <div className="flex items-center gap-2 px-5 py-2">
                      <Zap className="w-3 h-3 text-amber-500" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Popular Resources
                      </p>
                    </div>
                  )}
                  {results.map((item, i) => (
                    <button
                      key={item.href}
                      onClick={() => go(item.href)}
                      onMouseEnter={() => setActiveIdx(i)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                        activeIdx === i ? "bg-primary/8" : "hover:bg-muted/50"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          CAT_COLOR[item.category] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {CAT_ICON[item.category] ?? <FileText className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-foreground">{item.title}</span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                              CAT_COLOR[item.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 text-primary shrink-0 transition-opacity duration-100 ${
                          activeIdx === i ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t px-5 py-2.5 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-4 text-[10px] text-muted-foreground select-none">
                <span>
                  <kbd className="px-1.5 border rounded text-[9px] bg-background">↑↓</kbd>{" "}
                  navigate
                </span>
                <span>
                  <kbd className="px-1.5 border rounded text-[9px] bg-background">↵</kbd>{" "}
                  open
                </span>
                <span>
                  <kbd className="px-1.5 border rounded text-[9px] bg-background">Esc</kbd>{" "}
                  close
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground">
                {results.length} result{results.length !== 1 ? "s" : ""}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
