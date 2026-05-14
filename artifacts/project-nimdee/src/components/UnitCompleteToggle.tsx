import { Check } from "lucide-react";
import { useUnitComplete } from "@/hooks/useUnitComplete";

interface UnitCompleteToggleProps {
  unitId: string;
}

export function UnitCompleteToggle({ unitId }: UnitCompleteToggleProps) {
  const [complete, setComplete] = useUnitComplete(unitId);

  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-serif font-bold whitespace-nowrap">Unit Progress</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <button
        onClick={() => setComplete(!complete)}
        aria-pressed={complete}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          complete
            ? "bg-teal-50 border-teal-400 text-teal-800 focus-visible:ring-teal-500"
            : "bg-background border-border text-muted-foreground hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50 focus-visible:ring-teal-500"
        }`}
        data-testid="unit-complete-toggle"
      >
        <span
          className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors duration-200 ${
            complete ? "bg-teal-600 border-teal-600" : "border-muted-foreground/40"
          }`}
        >
          {complete && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </span>
        {complete ? "Marked as complete ✓" : "Mark this unit as complete"}
      </button>
      {complete && (
        <p className="mt-2 text-xs text-teal-700 font-medium">
          Great work! You can uncheck this at any time to mark it incomplete again.
        </p>
      )}
    </section>
  );
}

interface UnitCompleteBadgeProps {
  unitId: string;
}

export function UnitCompleteBadge({ unitId }: UnitCompleteBadgeProps) {
  const [complete] = useUnitComplete(unitId);
  if (!complete) return null;
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
      <Check className="w-3 h-3" strokeWidth={3} />
      Done
    </span>
  );
}
